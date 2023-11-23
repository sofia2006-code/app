import React from 'react'
import { FiBellOff } from "react-icons/fi";

export default function Timer({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  startTimer,
  isTimeUp,
  muteAlarm,
  reset }) {
  const options = ["Pomodoro", "Short Break", "Long Break"]
  return (
    <div className="w-10/12 mx-auto pt-5 text-white flex flex-col justify-center items-center mt-10">
      <div className="flex gap-5 items-centerflex-col justify-center align-items">
        {options.map((option, index) => {
          return (
            <h1 key={index} className={` ${index === stage ? "bg-gray-500 bg-opacity-30 p-1 align-items" : ""
              }p-1 cursor-pointer transition-all rounded`}
              onClick={() => switchStage(index)} //el switchStage cambia de recreo/pomodoro
            >
              {option}
            </h1>
          );

        })}

      </div>

      <div className="mt-10 mb-10">
        <h1 className="text-8xl font-bold select-none m-0 flex flex-col justify-center items-center">
          {getTickingTime()}:{seconds.toString().padStart(2, "0")}
          {/* convierte los segundos a strings para poder mostrarlas en la pagina y al principio le agrega los dos ceros atras */}
        </h1>
      </div>
      <div className="flex gap-2 items-center">
        <button className=" px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold"
          onClick={startTimer}>
          {ticking ? "Stop" : "Start"}
          {/*  if ticking, cambia el titulo */}
        </button>

        {isTimeUp && (
          <FiBellOff
            className="text-3xl text-white cursor-pointer"
            onClick={() => startTimer()}
          //cuando tocas el boton va a muteAlarm//
          />
        )}
        {ticking && (
          <button className=" px-16 py-2 text-2xl rounded-md bg-gray-500 bg-opacity-30 text-white 
            uppercase font-bold p-1" onClick={reset}>
            RESET
          </button>
        )}


      </div>

    </div>
  )
}
