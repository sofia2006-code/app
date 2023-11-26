import React, { useEffect, useState } from "react";
import Navigations from "../../components/navigations";
import Footer from "../../components/footer";

const defaultTasks = [
  { name: 'Hacer la compra', displayTime: 3000 },
  { name: 'Estudiar para el examen', displayTime: 5000 },
  { name: 'Terminar el informe', displayTime: 7000 },
  { name: 'Hacer ejercicio', displayTime: 4000 }
];

const defaultBreaks = [
  { name: '¡Muy Bien! descansa 5 minutos', displayTime: 5000 },
  { name: 'Anda a dar una vuelta', displayTime: 400 },
  { name: 'Sé libre deja el colegio', displayTime: 400 },
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
    const interval = setInterval(() => {
      if (isRunning) {
        const elapsedTime = Date.now() - timerStart;
        const updatedRemainingTime = remainingTime - elapsedTime;
        setRemainingTime(updatedRemainingTime >= 0 ? updatedRemainingTime : 0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timerStart, remainingTime, isRunning]);

  function displayItems() {
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
    const itemsToShow = isTask ? tasks : breaks;

    return (
      <div>
        {itemsToShow.map((item, index) => (
          <div key={index} style={{ display: index === visibleItemIndex ? 'block' : 'none' }}>
            <p className="text-blue-200 text-3xl text-center font-bold mx-4 my-3">{item.name}</p>
            <p class="justify-center text-xl font-semibold text-center pt-2">Tiempo Restante : {minutes.toString().padStart(2, '0')} : {seconds}</p>
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
   
   <div className="bg-gradient-to-b from-[#1D1261] to-[#1B153F] font-Quattrocento h-screen w-screen text-white flex flex-col items-center ">
        <Navigations />
        <h1 className="text-2xl text-center pt-14 mt-5 font-bold ">Tareas Espontaneas</h1>
        <p className="text-lg text-center mx-8 px-3 my-4 font-semibold">Cumpli con los descansos para mantener la concentracion</p>
        {!isRunning && (
          <button
            className="bg-white text-2xl text-blue-600 text-center rounded-md py-4 mt-6 px-8 font-bold justify-center"
            onClick={handleStart}
          >
            Empezar
          </button>
        )}

        {isRunning && (
          <div>
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
      <Footer/>
    </>
  );
}
