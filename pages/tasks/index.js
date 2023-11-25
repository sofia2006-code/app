import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import Navigations from '../../components/navigations';

export default function Tasks() {
  
  const [date, setDate] = useState('')
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);
  const [selectedClass, setSelectedClass] = useState('Seleccionar Clase');
  const [classText, setClassText] = useState({
    A: '',
    B: '',
    C: ''
  });
  
  /*
  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch('../api/toDoList', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    getTasks();
  }, []);
  */

  /*
  useEffect(() => {
    fetch('../api/toDoList', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .catch((error) => {
      console.log("error");
    })
    .then((tareas) => {
      console.log(tareas);
    })
  })
  */
  


  const submitTask = async () => {
    const response = await fetch('../api/toDoList', {
      method: 'POST',
      body: JSON.stringify({ dato:task, tipo: "tarea", clase:selectedClass, date:date }), //en dato poner classText[selectedClass]
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    /*
    const data = await response.json();
    console.log(data);

    const respone = await fetch(endpoint, options)

    if(!response.ok){
      console.log("ERROR")
      const result =await response.json()
      alert()
    }

*/
  };
  const inputChange = (e) => {
    setTask(e.target.value);
    
  };

  const dateChange = (e) => {
    setDate(e.target.value);
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

  const handleDelete = async (classType, taskText) => {
    const updatedTasks = tasksArray.filter(
      (taskObj) => !(taskObj.class === classType && taskObj.task === taskText)
    );
    setTasksArray(updatedTasks);
  
    // Perform the delete action here
    const response = await fetch('../api/toDoList', {
      method: 'DELETE',
      body: JSON.stringify({ tarea: taskText }),
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
      <br/>
      <input className="text-black" onChange={dateChange} type="date"/>



      {/* Render tasks and delete button here */}
      <div>
        <p className="text-2xl text-[#DF6B00] font-Quattrocento-bold">A</p>
            <p id="ClaseA">
              {tasksArray.map((taskObj, index) => (
              taskObj.class === 'A' && (
              <span key={index}>
                {taskObj.task}
                <button onClick={() => handleDelete('A', taskObj.task)}>Delete</button>
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
                <button onClick={() => handleDelete('B', taskObj.task)}>Delete</button>
                <br />
              </span>
            )
          ))}
        </p>
      </div>
      <div>
      <p>Clase C</p>
      <p id="Clase C">
              {tasksArray.map((taskObj, index) => (
              taskObj.class === 'C' && (
              <span key={index}>
                {taskObj.task}
                <button onClick={() => handleDelete('C', taskObj.task)}>Delete</button>
                <br />
              </span>
            )
          ))}
        </p>
      </div>
    </div>
  );
}
