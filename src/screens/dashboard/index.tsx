import Logo from "raw:~/assets/logo-dark.svg"
import React from "react"
import { AiOutlineKey } from "react-icons/ai"
import { GoPasskeyFill } from "react-icons/go"
import SVG from "react-inlinesvg"

import ScreenLayout from "~/components/ScreenLayout"

import ListItem from "./components/ListItem"

export default function DashboardScreen() {
  return (
    <ScreenLayout>
      <div className="h-full w-full flex flex-col">
        <div className="w-full gap-4 justify-between min-h-[50px] border-b-[1px] px-4 border-b-silver-200 flex items-center">
          <SVG src={Logo} className="h-[30px] w-[140px]" />
          <div className="w-[60%] bg-white flex gap-2 items-center border-gray-300 border-[1px] px-2 py-[6px] rounded-[8px]">
            <AiOutlineKey className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              // value={searchValue}
              // onChange={handleInputChange}
              // onFocus={() => setIsFocused(true)}
              className="w-full text-sm outline-none focus:outline-none bg-tranparent text-gray-900"
            />
          </div>
        </div>
        <div className="w-full flex-1 flex h-full">
          <div className="w-[40%] overflow-y-auto gap-2 flex flex-col border-r-[1px] border-r-silver-200 p-2">
            <div className="flex items-center px-4 py-3 w-full gap-4 text-gray-900 bg-silver-200 rounded-lg">
              <GoPasskeyFill className="w-8 h-8" />
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-medium leading-3">Amazon</h1>
                <p className="text-base leading-3">iamsaikranthi@gmail.com</p>
              </div>
            </div>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
          <div className="h-full w-[60%] flex flex-col">
            <div className="w-full flex justify-end py-2 px-4">
              <button className="px-[18px] py-[2px] border-primary-600 border-[1px] rounded-[36px] text-primary-600 text-sm">
                New
              </button>
            </div>
            <div className="flex w-full flex-col p-2 gap-8">
              <div className="w-full flex justify-center items-center gap-4">
                <GoPasskeyFill className="w-8 h-8 text-gray-900" />
                <h1 className="text-2xl font-medium text-gray-900">Amazon</h1>
              </div>
              <div className="w-full flex flex-col px-8 gap-2">
                <div>
                  <label
                    htmlFor="fullname"
                    className="block mb-1 text-sm font-medium text-liberty-dark-100">
                    Username
                  </label>
                  <div
                    className={
                      "bg-gray-50 border px-2 py-1 text-liberty-dark-100 text-base rounded-lg focus:ring-liberty-dark-50 focus:border-liberty-dark-50 block w-full p-2.5border-gray-300"
                    }>
                    test
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="fullname"
                    className="block mb-1 text-sm font-medium text-liberty-dark-100">
                    Password
                  </label>
                  <div
                    className={
                      "bg-gray-50 border px-2 py-1 text-liberty-dark-100 text-base rounded-lg focus:ring-liberty-dark-50 focus:border-liberty-dark-50 block w-full p-2.5border-gray-300"
                    }>
                    test
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  )
}
