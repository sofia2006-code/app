import React, { useEffect, useState } from "react";

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
            <p>{item.name}</p>
            <p>Remaining Time: {minutes.toString().padStart(2, '0')} : {seconds}</p>
          </div>
        ))}
      </div>
    );
  }

  const handleStart = () => {
    setIsRunning(true);
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      {!isRunning && (
        <button onClick={handleStart}>Start</button>
      )}
      {isRunning && (
        <div>{displayItems()}</div>
      )}
    </>
  );
}
