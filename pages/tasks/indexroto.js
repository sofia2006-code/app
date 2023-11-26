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

  const handleDelete = async (index) => {
    const updatedTasks = [...tasksArray];
    updatedTasks.splice(index, 1);
    setTasksArray(updatedTasks);

    // Perform the delete action here
    const response = await fetch('../api/toDoList', {
      method: 'DELETE',
      body: JSON.stringify({ dato:task, clase:selectedClass }),
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

  return (    <div className="font-Quattrocento bg-gradient-to-b from-[#1D1261] to-[#1B153F] text-white h-screen">
      <Navigations openConf={false}/>
      <h1 className="grid justify-items-center text-xl mt-3"> Mis tareas  </h1>
      <form onSubmit={inputSubmit}>
      
      </form>
{/* //       <select id="SelectClases" onChange={handleClassChange} value={selectedClass} className="text-black">
//         <option value="Seleccionar Clase">Seleccionar Clase</option>
//         <option value="A">Clase A</option>
//         <option value="B">Clase B</option>
//         <option value="C">Clase C</option>
//       </select>
//       <br/>
//       <input className="text-black" onChange={dateChange} type="date"/>


// =======
       */}
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
        <p class="text-2xl text-blue-300">B</p>
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
        <p class="text-2xl text-blue-500">C</p>
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
        <div className=" bg-gradient-to-b from-[#2200FF] to-[#7795ff] grid align-items-center gap-3 mr-8 ml-8 my-10 py-4 shadow-inner appearance-none border-none rounded  px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline">
          <div className="justify-start">
            <p className="text-xl">Nombre</p>
            <input className="text-white rounded-sm text-lg bg-[#3B355A] shadow-inner py-1 mx-full mt-3" type="text" value={task} onChange={inputChange} placeholder="Agregar tarea" id="NombreTarea" />

              <p class="mt-3 text-xl">Prioridad</p>
              <select id="SelectClases" onChange={handleClassChange} value={selectedClass} className=" justify-start text-gray-400 mt-3 rounded-sm text-lg bg-[#3B355A] shadow-inner py-2 mx-auto pr-6">
                <option class="text-sm" value="Seleccionar Clase">Seleccionar Clase</option>
                <option class="text-sm"value="A">Clase A</option>
                <option class="text-sm"value="B">Clase B</option>
                <option class="text-sm"value="C">Clase C</option>
              </select>

          </div>
        <button onClick={submitTask} type="submit" class="bg-white text-blue-700 text-center align-items-center rounded-md py-2 mt-3 mx-auto px-4">Crear Nueva Tarea</button>
      </div>
      
        
    {/* onClick={handleAddButtonClick} */}
      </div>
      
    </div>
  );
}
