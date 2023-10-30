import React from "react"
import { GoPasskeyFill } from "react-icons/go"

export default function ListItem() {
  return (
    <div className="flex items-center px-4 py-3 w-full gap-4 text-gray-900">
      <GoPasskeyFill className="w-8 h-8" />
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium leading-3">Amazon</h1>
        <p className="text-base leading-3">iamsaikranthi@gmail.com</p>
      </div>
    </div>
  )
}
