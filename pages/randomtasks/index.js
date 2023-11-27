import React, { useEffect, useState } from "react";
import Navigations from "../../components/navigations";
import Footer from "../../components/footer";

const defaultTasks = [
  { name: 'Toma nota de las palabras clave', displayTime: 3000 },
  { name: 'Hace un cuadro Conceptual con palabras clave', displayTime: 5000 },
  { name: 'Mira al profe y presta atencion lo que dice', displayTime: 7000 },
  { name: 'Haz preguntas, no tengas verguenza!!!', displayTime: 4000 }
];

const defaultBreaks = [
  { name: '¡Muy Bien! descansa 5 minutos', displayTime: 5000 },
  { name: 'Anda a dar una vuelta', displayTime: 5000 },
  { name: 'Muy bien hecho! tomate un', displayTime: 45000 },
];

export default function RandomTasks() {
  const [visibleItemIndex, setVisibleItemIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerStart, setTimerStart] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    let currentIndex = 0;

    const displayNextItem = () => {
      const randomTaskIndex = Math.floor(Math.random() * defaultTasks.length);
      const selectedItem = defaultTasks[randomTaskIndex]; // Selects a random task from defaultTasks
      setVisibleItemIndex(currentIndex);
      setRemainingTime(selectedItem.displayTime);
      setTimerStart(Date.now());

      //cuando el timer llega a 0:
      timer = setTimeout(() => {
        currentIndex = (currentIndex + 1) % defaultTasks.length;
        displayNextItem();
      }, selectedItem.displayTime);
    };

    if (isRunning) {
      displayNextItem();
    }

    return () => clearTimeout(timer);
  }, [isRunning]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setRemainingTime(prevRemainingTime => {
          const updatedRemainingTime = prevRemainingTime - 1000;
          return updatedRemainingTime >= 0 ? updatedRemainingTime : 0;
        });
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [isRunning]);

  function displayItems() {
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
    const itemsToShow = remainingTime > 0 ? defaultTasks : defaultBreaks;
  
    return (
      <div>
        {itemsToShow.map((item, index) => (
          <div key={index} style={{ display: index === visibleItemIndex ? 'block' : 'none' }}>
            <p className="text-blue-200 text-3xl text-center font-bold mx-4 my-3">{item.name}</p>
            {remainingTime > 0 && ( // Display the timer only when there's remaining time
              <p className="justify-center text-xl font-semibold text-center pt-2">
                Tiempo Restante: {`${minutes.toString().padStart(2, '0')}:${seconds}`}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }
  

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#2200FF] to-[#7795ff] grid align-items-center gap-3 mr-8 ml-8 my-10 py-4 shadow-inner appearance-none border-none rounded  px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline  flex-col items-center h-auto">
      <Navigations />
      <h1 className="text-2xl text-center pt-14 mt-5 font-bold ">Tareas Espontaneas</h1>
      <p className="text-lg text-center mx-8 px-3 my-4 font-semibold">Cumpli con los descansos para mantener la concentracion</p>
      <div className="flex flex-col items-center">
        {!isRunning && (
          <button
            className="bg-white text-2xl text-blue-600 text-center rounded-md py-4 mt-6 px-8 font-bold justify-center"
            onClick={handleStart}
          >
            Empezar
          </button>
        )}

        {isRunning && (
          <div className="flex flex-col items-center">
            <button
              className="bg-white text-2xl text-red-500 text-center rounded-md py-4 mt-6 px-8 font-bold justify-center"
              onClick={handleStop}
            >
              Pausa
            </button>
            {displayItems()}
          </div>
        )}
      </div>
    </div>
  );
}


{/*<Footer buttonAppear={false}
      setFormVisible={setFormVisible}/>*/}