
import React from 'react'
import { FiArrowLeft, FiSettings } from "react-icons/fi";
export default function Navigations({setOpenSettings, openConf}) {

  const handlerredirectconfig = () =>{
    window.location.href="http://localhost:3000/configuracion"
}
const handleredirecthome = () =>{
  window.location.href="http://localhost:3000/home"
}

  return (
      <nav className="pt-3 text-white flex justify-between w-11/12 mx-auto qcy4">
        
        <div className="flex items-center gap-1 cursor-pointer qcy5">
          <button onClick={handleredirecthome}>
          <FiArrowLeft className="text-sm" />
          <h1 >Tafocus</h1>
          </button>
        </div>
        {/* meter aca un booleano para usarlo en el index */}
        
        {openConf && (
        <FiSettings
          className="text-2xl cursor-pointer"
          onClick={handlerredirectconfig}
        />
        )}    
     </nav>
  )
}

//onClick={() => setOpenSettings(prevValue => !prevValue)}