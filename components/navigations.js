
import React from 'react'
import { FiArrowLeft, FiSettings } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";


export default function Navigations({setOpenSettings, openConf, openArrow}) {

  const handlerredirectconfig = () =>{
    window.location.href="https://cofocus.vercel.app/configuracion"
}
const handleredirecthome = () =>{
  window.location.href="https://cofocus.vercel.app/home"
}

const handleredirectlogin = () =>{
  window.location.href="https://cofocus.vercel.app/login"
}
  return (
      <nav className="pt-3 text-white flex justify-between w-11/12 mx-auto qcy4 mb-5">
        
        <div className="flex items-center gap-1 cursor-pointer qcy5 ml-3">
          <button onClick={handleredirectlogin}>
          {openArrow &&(
            <FiArrowLeft className="text-sm"
            onClick={handleredirecthome} />
          )}
          <h1 >CoFocus</h1>
          </button>
        </div>
        {/* meter aca un booleano para usarlo en el index */}
        
        {openConf && (
        <FiSettings
          className="text-2xl cursor-pointer mr-3"
          onClick={handlerredirectconfig}
        />
        )}    
        {/* {openPomos && (
        
        )}  */}
     </nav>
  )
}

//onClick={() => setOpenSettings(prevValue => !prevValue)}