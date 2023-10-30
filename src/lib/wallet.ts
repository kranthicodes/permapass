import Arweave from "arweave"
import type { JWKInterface } from "arweave/web/lib/wallet"
import * as bip39 from "bip39-web-crypto"
import { getKeyPairFromMnemonic } from "human-crypto-keys"

import { Storage } from "@plasmohq/storage"

import { useWalletStore } from "./store"

export async function generateWallet() {
  const seed = await bip39.generateMnemonic()

  const generatedKeyfile = await jwkFromMnemonic(seed)

  return { jwk: generatedKeyfile, seed }
}

export async function saveWallet(wallet: { jwk: JWKInterface; seed: string }) {
  const storage = new Storage({
    area: "local"
  })

  try {
    await storage.set("wallet", wallet)
  } catch (error) {
    console.error("faile to save wallet")
  }
}

export async function walletExists() {
  const storage = new Storage({
    area: "local"
  })

  const wallet = await storage.get<{ jwk: JWKInterface; seed: string }>(
    "wallet"
  )

  if (!wallet) {
    return false
  }

  return wallet
}

export async function loadWallet() {
  const wallet = await walletExists()
  if (wallet) {
    const address = await getAddress()
    useWalletStore.setState({
      address: address || null,
      jwk: wallet.jwk,
      seed: wallet.seed
    })
  }
}

export async function getAddress() {
  const storage = new Storage({
    area: "local"
  })

  const wallet = await storage.get<{ jwk: JWKInterface; seed: string }>(
    "wallet"
  )

  if (!wallet) {
    throw new Error("No wallet found in storage")
  }

  const arweave = new Arweave({
    host: "arweave.net",
    port: 443,
    protocol: "https"
  })

  return await arweave.wallets.getAddress(wallet.jwk)
}

export async function jwkFromMnemonic(mnemonic: string) {
  const { privateKey } = await getKeyPairFromMnemonic(
    mnemonic,
    {
      id: "rsa",
      modulusLength: 4096
    },
    { privateKeyFormat: "pkcs8-der" }
  )
  const jwk = await pkcs8ToJwk(privateKey as any)

  return jwk
}

async function pkcs8ToJwk(privateKey: Uint8Array): Promise<JWKInterface> {
  const key = await window.crypto.subtle.importKey(
    "pkcs8",
    privateKey,
    { name: "RSA-PSS", hash: "SHA-256" },
    true,
    ["sign"]
  )
  const jwk = await window.crypto.subtle.exportKey("jwk", key)

  return {
    kty: jwk.kty!,
    e: jwk.e!,
    n: jwk.n!,
    d: jwk.d,
    p: jwk.p,
    q: jwk.q,
    dp: jwk.dp,
    dq: jwk.dq,
    qi: jwk.qi
  }
}
