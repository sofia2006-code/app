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

      <Navigations openConf={false}/>
      <h1 className="grid justify-items-center text-xl"> Mis tareas  </h1>
      <h1 className="grid justify-items-center text-xl mt-3"> Mis tareas  </h1>
      <form onSubmit={inputSubmit}>
        <input type="text" value={task} onChange={inputChange} placeholder="Enter a task" id="NombreTarea" className="text-black"/>
      <div className="grid align-items-center gap-3 mr-8 ml-8 my-10 shadow-inner appearance-none border-none rounded py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline ">
        <p>Tarea:</p>
        <input className="text-black rounded-sm text-lg bg-transparent border-2 border-blue-500" type="text" value={task} onChange={inputChange} placeholder="Enter a task" id="NombreTarea" />
        <p>Prioridad:</p>
        <select id="SelectClases" onChange={handleClassChange} value={selectedClass} className=" bg-white opacity-60 text-black rounded-sm pt-1 pb-1">
          <option class="text-sm" value="Seleccionar Clase">Seleccionar Clase</option>
          <option class="text-sm"value="A">Clase A</option>
          <option class="text-sm"value="B">Clase B</option>
          <option class="text-sm"value="C">Clase C</option>
        </select>
      </div>
        <button onClick={submitTask} type="submit">Add task</button>
      </form>
<<<<<<< Updated upstream
      <select id="SelectClases" onChange={handleClassChange} value={selectedClass} className="text-black">
        <option value="Seleccionar Clase">Seleccionar Clase</option>
        <option value="A">Clase A</option>
        <option value="B">Clase B</option>
        <option value="C">Clase C</option>
      </select>
      <br/>
      <input className="text-black" onChange={dateChange} type="date"/>


=======
      
>>>>>>> Stashed changes

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
      </div>
    </div>
  );
}
