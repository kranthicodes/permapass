import Logo from "raw:~/assets/logo-dark.svg"
import React from "react"
import SVG from "react-inlinesvg"
import { useNavigate } from "react-router-dom"

import ScreenLayout from "~/components/ScreenLayout"
import { useWalletStore } from "~/lib/store"

export default function LoadingScreeen() {
  const navigate = useNavigate()
  const [address, loadWallet] = useWalletStore((state) => [
    state.address,
    state.loadWallet
  ])

  React.useEffect(() => {
    loadWallet()
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      if (address) {
        navigate("/dashboard")
      } else {
        navigate("/start")
      }
    }, 3000)
  }, [address])

  return (
    <ScreenLayout>
      <div className="w-full h-full flex justify-center items-center">
        <SVG className="right-12 z-10 w-[232px]" src={Logo} />
      </div>
    </ScreenLayout>
  )
}
