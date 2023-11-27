import React, { useEffect, useState } from "react";
import Navigations from "../../components/navigations";
import Footer from "../../components/footer";

const defaultTasks = [
  { name: 'Toma nota de las palabras clave', displayTime: 3000 },
  { name: 'Hace un cuadro Conceptual con palabras clave', displayTime: 5000 },
  { name: 'Mira al profe como habla', displayTime: 7000 },
  { name: 'Hacer preguntas! no tengas verguenza!!!', displayTime: 4000 }
];

const defaultBreaks = [
  { name: '¡Muy Bien! descansa 5 minutos', displayTime: 5000 },
  { name: 'Anda a dar una vuelta', displayTime: 400 },
  { name: 'Muy bien hecho! tomate un', displayTime: 400 },
];

export default function RandomTasks() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [breaks, setBreaks] = useState(defaultBreaks);

  const [visibleItemIndex, setVisibleItemIndex] = useState(0);
  const [isTask, setIsTask] = useState(true);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerStart, setTimerStart] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    let currentIndex = 0;
    const items = isTask ? tasks : breaks;

    const displayNextItem = () => {
      setVisibleItemIndex(currentIndex);
      const selectedItem = items[currentIndex];
      setRemainingTime(selectedItem.displayTime);
      setTimerStart(Date.now());

      timer = setTimeout(() => {
        currentIndex = (currentIndex + 1) % items.length;
        setIsTask(!isTask);
        displayNextItem();
      }, selectedItem.displayTime);
    };

    if (isRunning) {
      displayNextItem();
    }

    return () => clearTimeout(timer);
  }, [tasks, breaks, isTask, isRunning]);

  useEffect(() => {
    let interval;
    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime(prevRemainingTime => {
          const updatedRemainingTime = prevRemainingTime - 1000;
          return updatedRemainingTime >= 0 ? updatedRemainingTime : 0;
        });
      }, 1000);
    }
  
    return () => clearInterval(interval);
  }, [remainingTime, isRunning]);

  function displayItems() {
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
    const itemsToShow = isTask ? tasks : breaks;

    return (
      <div>
        {itemsToShow.map((item, index) => (
          <div key={index} style={{ display: index === visibleItemIndex ? 'block' : 'none' }}>
            <p className=" text-blue-200 text-3xl text-center font-bold mx-4 my-3">{item.name}</p>
            <p class=" text-white justify-center text-xl font-semibold text-center pt-2">Tiempo Restante : {minutes.toString().padStart(2, '0')} : {seconds}</p>
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
    <>
   
   <div className=" text-white bg-gradient-to-b from-[#1D1261] to-[#1B153F] min-h-screen flex flex-col items-center">
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
      {/* <Footer buttonAppear={false}
      setFormVisible={setFormVisible}/> */}
      </div>
    </>
  );
}