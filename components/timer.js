import React from 'react'

export default function Timer() {
  const options = ["Pomodoro", "Short Break", "Long Break"]
  return (
      <div className="w-10/12 mx-auto pt-5 text-white flex justify-center intems-center mt-10">
        <div className="flex gap-5 items-center">
          {options.map((option, index) => {
            return(
            <h1 key={index} className= {` ${index ===}p-1 cursor-pointer transition-all`}>
                {option}
              </h1>
            );

          })}

        </div>
        

      </div>
  )
}