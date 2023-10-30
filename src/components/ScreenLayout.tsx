import React from "react"


export default function ScreenLayout({ children }) {
  return (
    <div className="relative box-border h-[400px] w-[700px] rounded-lg">
      
      {children}
    </div>
  )
}
