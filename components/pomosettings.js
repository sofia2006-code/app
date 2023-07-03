
import React from 'react'
import { FiX } from "react-icons/fi";
import { useRef } from 'react'

function PomoSettings({
  pomodoroRef,
  longBreakRef,
  shortBreakRef,
  openSettings,
  setOpenSettings,
  updateTimeDefaultValue
}) {

  // const pomodoroRef = useRef(null);
  // const shortBreakRef = useRef(null);
  // const longBreakRef = useRef(null);

  const options = [
    {
      value: "Pomodoro",
      ref: pomodoroRef,
      defaultValue: 25,
    },

    {
      value: "Short Break",
      ref: shortBreakRef,
      defaultValue: 5,
    },

    {
      value: "Long Break",
      ref: longBreakRef,
      defaultValue: 10,
    }
  ];


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
            <h1 className="uppercase font-bold tracking-wider">Time setting</h1>
            <FiX className="text-2xl" cursor-pointer onClick={()=> setOpenSettings(false)}/>
          </div>
          {/* linea simple */}
          <div className="h-1 w-fill bg-gray-400 mt-5 mb-5"></div>
          <div className="flex gap-5">
            {options.map((input, index) => {

              return (
                <div key={index}>
                  <div>
                    <h1 className="text-gray-400 text-small">{input.value}</h1>
                    <input
                      // default el de arriba
                      defaultValue={input.defaultValue}
                      type="number"
                      className="w-full bg-gray-400 bg-opacity-30 py-2 rounded outline-none
                    text-center"
                      ref={input.ref}
                    />
                  </div>
                </div>);

            })}
          </div>
          <button className="bg-orange-600 uppercase w-full mt-5 text-white rounded py-2" 
          onClick={updateTimeDefaultValue}>
            Save
          </button>
        </div>
      </div>
    </>
  )
}

export default React.forwardRef(PomoSettings);