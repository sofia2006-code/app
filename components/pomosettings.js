
import React, { forwardRef } from 'react'
import { FiX } from "react-icons/fi";

function PomoSettings({
  options,
  openSettings,
  setOpenSettings,
  updateTimeDefaultValue
}) {

  // const pomodoroRef = useRef(null);
  // const shortBreakRef = useRef(null);
  // const longBreakRef = useRef(null);


  return (
    <>
      <div className={` absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 
      ${openSettings ? "" : "hidden"}`}
      // s
      >
        <div className={`max-w-xl bg-white absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-md${openSettings ? "" : "hidden"}`}
          // si se abren los settings abre el mensaje, sino lo oculta
          style={{
            transform: "translate(-50%,-50%)",
          }}
        >
          <div className="text-gray-400 flex justify-between items-center">
            <h1 className="uppercase font-bold tracking-wider">Ajustar Tiempo</h1>
            <FiX className="text-2xl" cursor-pointer onClick={() => setOpenSettings(false)} />
          </div>
          {/* linea simple */}
          <div className="h-1 w-fill bg-gray-400 mt-5 mb-5"></div>
          <div className="flex gap-5">
            {options.map((input, index) => {
              //el return es del valor del texto de los inputs
              return (
                <div key={index}>
                  <div>
                    <h1 className="text-gray-400 text-small mb-3">{input.value}</h1>
                    <input
                      // default el de arriba
                      defaultValue={input.defaultValue}
                      type="number"
                      className="w-full bg-gray-400 bg-opacity-30 py-2 rounded outline-none
                    text-center"
                      onChange={(e) => {
                        input.setter(e.target.value);
                      }}
                    />
                  </div>
                </div>);

            })}
          </div>
          <button className="bg-orange-600 uppercase w-full mt-5 text-white rounded py-2"
            onClick={updateTimeDefaultValue}>
            Guardar
          </button>
        </div>
      </div>
    </>
  )
}

export default forwardRef(PomoSettings);