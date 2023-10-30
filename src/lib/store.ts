import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { generateWallet, getAddress, loadWallet, saveWallet } from "./wallet"

export interface WalletState {
  unlocked: boolean
  jwk: any | null
  password: string | null
  address: string | null
  seed: string | null
  loadWallet: () => Promise<void>
  createNewWallet: (password: string) => void
  setPassword: (password: string) => void
}

export const useWalletStore = create<
  WalletState,
  [
    ["zustand/subscribeWithSelector", WalletState],
    ["zustand/immer", WalletState]
  ]
>(
  subscribeWithSelector(
    immer((set) => ({
      unlocked: true,
      jwk: null,
      password: null,
      seed: null,
      address: null,
      loadWallet: async () => {
        await loadWallet()
      },
      createNewWallet: async (password: string) => {
        const { jwk, seed } = await generateWallet()

        if (!jwk) return

        await saveWallet({ jwk, seed })
        const address = await getAddress()

        set((state) => {
          state.jwk = jwk
          state.seed = seed
          state.address = address

          if (!state.password) {
            state.password = password
          }
        })
      },
      setPassword: (password: string) =>
        set((state) => {
          state.password = password
        })
    }))
  )
)
