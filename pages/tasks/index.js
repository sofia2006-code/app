import React, { useState } from "react";
import Navigations from '../../components/navigations';

export default function Tasks() {
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);
  const [selectedClass, setSelectedClass] = useState('Seleccionar Clase');
  const [classText, setClassText] = useState({
    A: '',
    B: '',
    C: ''
  });

  const submitTask = async () => {
    const response = await fetch('/api/configPomodoroPrisma', {
      method: 'POST',
      body: JSON.stringify({ dato: classText[selectedClass], tipo: "tarea" }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
  };

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && selectedClass !== 'Seleccionar Clase') {
      const updatedClassText = { ...classText, [selectedClass]: task };
      setClassText(updatedClassText);
      setTasksArray([...tasksArray, { class: selectedClass, task }]);
      setTask('');
    }
  };

  const handleDelete = async (index) => {
    const updatedTasks = [...tasksArray];
    updatedTasks.splice(index, 1);
    setTasksArray(updatedTasks);

    // Perform the delete action here
    const response = await fetch('/api/deleteTask', {
      method: 'DELETE',
      body: JSON.stringify({ /* pass any necessary data */ }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    console.log(result); // Handle the result as needed
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  return (
    <div className="font-Quattrocento bg-gradient-to-b from-[#1D1261] to-[#1B153F] text-white h-screen">
      <Navigations openConf={false}/>
      <h1 className="grid justify-items-center text-xl"> Mis tareas  </h1>
      <form onSubmit={inputSubmit}>
        <input type="text" value={task} onChange={inputChange} placeholder="Enter a task" id="NombreTarea" className="text-black"/>
        <button onClick={submitTask} type="submit">Add task</button>
      </form>
      <select id="SelectClases" onChange={handleClassChange} value={selectedClass} className="text-black">
        <option value="Seleccionar Clase">Seleccionar Clase</option>
        <option value="A">Clase A</option>
        <option value="B">Clase B</option>
        <option value="C">Clase C</option>
      </select>

      {/* Render tasks and delete button here */}
      <div>
        <p className="text-2xl text-[#DF6B00] font-Quattrocento-bold">A</p>
        <p id="ClaseA">
          {tasksArray.map((taskObj, index) => (
            taskObj.class === 'A' && (
              <span key={index}>
                {taskObj.task}
                <button onClick={() => handleDelete(index)}>Delete</button>
                <br />
              </span>
            )
          ))}
        </p>
      </div>
      <div>
        <p>Clase B</p>
        <p id="ClaseB">
          {tasksArray.map((taskObj, index) => (
            taskObj.class === 'B' && (
              <span key={index}>
                {taskObj.task}
                <button onClick={() => handleDelete(index)}>Delete</button>
                <br />
              </span>
            )
          ))}
        </p>
      </div>
      <div>
        <p>Clase C</p>
        <p id="ClaseC">
          {tasksArray.map((taskObj, index) => (
            taskObj.class === 'C' && (
              <span key={index}>
                {taskObj.task}
                <button onClick={() => handleDelete(index)}>Delete</button>
                <br />
              </span>
            )
          ))}
        </p>
      </div>
    </div>
  );
}
