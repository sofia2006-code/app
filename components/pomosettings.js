
import React from 'react'
import { FiX } from "react-icons/fi";


export default function PomoSettings() {
  return (
    <>
      <div className="absolute h-full w-full left-0 top-0 bg-black bg-opacity-30">
        <div className="max-w-xl bg-white absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-md"
        style={{
					transform: "translate(-50%,-50%)",
				}}
        >
          <div className="text-gray-400 flex justify-between items-center">
            <h1 className="uppercase font-bold tracking-wider">Time setting</h1>
            <FiX/>
          </div>
            
        </div> 
      </div>
    </>
  )
}