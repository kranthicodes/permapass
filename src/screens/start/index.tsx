import Logo from "raw:~/assets/logo.svg"
import SVG from "react-inlinesvg"
import { useNavigate } from "react-router-dom"

import ScreenLayout from "~/components/ScreenLayout"

export const StartScreen: React.FC = () => {
  const navigate = useNavigate()

  return (
    <ScreenLayout>
      <div className="absolute right-[-80px] skew-x-[20deg] w-[60%] h-full bg-primary-700"></div>
      <SVG className="absolute right-12 bottom-44 z-10 w-[232px]" src={Logo} />
      <div className="w-[40%] h-full flex flex-col gap-4 items-end justify-center">
        <div className="w-[80%] flex justify-center py-8">
          <h1 className="text-3xl">Welcome!</h1>
        </div>
        <button
          onClick={() => navigate("/set-password")}
          className="px-[16px] py-[11px] bg-primary-600 rounded-[36px] text-white text-base w-[80%]">
          Create new vault
        </button>
        <button className="px-[16px] py-[10px] border-primary-600 border-[1px] rounded-[36px] text-primary-600 text-base w-[80%]">
          Restore vault
        </button>
      </div>
    </ScreenLayout>
  )
}
