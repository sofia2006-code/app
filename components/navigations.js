
import React from 'react'
import { FiArrowLeft, FiSettings } from "react-icons/fi";
export default function Navigations({setOpenSettings}) {
  return (
      <nav className="pt-5 text-white flex justify-between w-11/12 mx-auto">
        
        <div className="flex items-center gap-1 cursor-pointer">
          <FiArrowLeft className="text-sm" />
          <h1 >Tafocus</h1>
        </div>
        {/* meter aca un booleano para usarlo en el index */}
        <FiSettings className="text-2xl cursor-pointer" onClick={()=>setOpenSettings(value =>!value)}/>
      </nav>
  )
}