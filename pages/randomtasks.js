import React, { useEffect, useState } from "react";

export default function RandomTasks() {
  const [tasks, setTasks] = useState([
    'Hacer la compra',
    'Estudiar para el examen',
    'Terminar el informe',
    'Hacer ejercicio'
  ]);

  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [visibleTaskIndex, setVisibleTaskIndex] = useState(0);

  useEffect(() => {
    const updateTaskStyle = (prevIndex) => {
      let timeInterval = 5000; // Default interval for other tasks
      console.log(timeInterval);
      if (prevIndex === 0) {
        timeInterval = 3000; // 3 seconds for the first task
      } else if (prevIndex === 1) {
        timeInterval = 9000; // 9 seconds for the second task
      }

      setVisibleTaskIndex(prevIndex); // Display the current task

      setCurrentTaskIndex((prevIndex) => {
        if (prevIndex === tasks.length - 1) {
          return 0; // Reset to the beginning if reached the end of tasks
        }
        return prevIndex + 1;
      });

      return timeInterval;
    };

    const timer = setInterval(() => {
      const newInterval = updateTaskStyle(currentTaskIndex);
      setTimeout(() => {
        updateTaskStyle(currentTaskIndex);
      }, newInterval);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [tasks.length, currentTaskIndex]);

  function displayTasks() {
    return (
      <div>
        {tasks.map((task, index) => (
          <div key={index} style={{ display: index === visibleTaskIndex ? 'block' : 'none' }}>
            {task}
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
