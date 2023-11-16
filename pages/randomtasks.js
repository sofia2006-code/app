import React, { useEffect, useState } from "react";

export default function RandomTasks() {
  const [tasks, setTasks] = useState([
    { name: 'Hacer la compra', displayTime: 300000 },
    { name: 'Estudiar para el examen', displayTime: 5000 },
    { name: 'Terminar el informe', displayTime: 7000 },
    { name: 'Hacer ejercicio', displayTime: 4000 }
  ]);

  const [visibleTaskIndex, setVisibleTaskIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(tasks[0].displayTime);
  const [timerStart, setTimerStart] = useState(Date.now());

  useEffect(() => {
    let timer;
    let currentIndex = 0;

    const displayNextTask = () => {
      setVisibleTaskIndex(currentIndex);
      const nextIndex = (currentIndex + 1) % tasks.length;
      setRemainingTime(tasks[nextIndex].displayTime);
      setTimerStart(Date.now());

      timer = setTimeout(() => {
        currentIndex = nextIndex;
        displayNextTask();
      }, tasks[currentIndex].displayTime);
    };

    displayNextTask();

    return () => clearTimeout(timer);
  }, [tasks]);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - timerStart;
      const updatedRemainingTime = tasks[visibleTaskIndex].displayTime - elapsedTime;
      setRemainingTime(updatedRemainingTime >= 0 ? updatedRemainingTime : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [timerStart, visibleTaskIndex, tasks]);

  function displayTasks() {
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');

    return (
      <div>
        {tasks.map((task, index) => (
          <div key={index} style={{ display: index === visibleTaskIndex ? 'block' : 'none' }}>
            <p>{task.name}</p>
            <p>Remaining Time: {minutes.toString().padStart(2, '0')} : {seconds}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      <div>{displayTasks()}</div>
    </>
  );
}
