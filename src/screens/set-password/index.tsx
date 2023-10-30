import Logo from "raw:~/assets/logo.svg"
import React from "react"
import SVG from "react-inlinesvg"
import { useNavigate } from "react-router-dom"

import ScreenLayout from "~/components/ScreenLayout"
import { useWalletStore } from "~/lib/store"

export default function SetPasswordScreen() {
  const [isLoading, setIsLoading] = React.useState(false)
  const navigate = useNavigate()
  const [password, setPassword] = React.useState("")
  const [address, createNewWallet] = useWalletStore((state) => [
    state.address,
    state.createNewWallet
  ])

  React.useEffect(() => {
    if (address) {
      navigate("/dashboard")
    }
  }, [address])

  async function handleSetPassword() {
    if (password) {
      setIsLoading(true)
      createNewWallet(password)
    }
  }

  return (
    <ScreenLayout>
      <div className="absolute right-[-80px] skew-x-[20deg] w-[60%] h-full bg-primary-700"></div>
      <SVG className="absolute right-12 bottom-44 z-10 w-[232px]" src={Logo} />
      <div className="w-[40%] h-full flex flex-col gap-4 items-end justify-center">
        <div className="w-[80%] flex justify-center py-8">
          <h1 className="text-2xl">Set password</h1>
        </div>
        <div className="w-[80%] flex flex-col gap-2">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="w-full rounded-[8px] bg-white border-gray-300 border-[1px] p-2 text-sm outline-none focus:outline-none bg-tranparent text-gray-900"
          />
          <input
            type="password"
            placeholder="Confirm password"
            // value={searchValue}
            // onChange={handleInputChange}
            // onFocus={() => setIsFocused(true)}
            className="w-full rounded-[8px] bg-white border-gray-300 border-[1px] p-2 text-sm outline-none focus:outline-none bg-tranparent text-gray-900"
          />
        </div>
        <button
          onClick={handleSetPassword}
          className="px-[16px] py-[11px] bg-primary-600 rounded-[36px] text-white text-base w-[80%]">
          {isLoading && "Loading..."}
          {!isLoading && "Continue"}
        </button>
      </div>
    </ScreenLayout>
  )
}
