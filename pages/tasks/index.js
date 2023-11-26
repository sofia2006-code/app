import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import Navigations from '../../components/navigations';
import Footer from "../../components/footer";

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
  const [formVisible, setFormVisible] = useState(true);
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

  
  useEffect(() => {
    fetch('http://localhost:3000/api/toDoList', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .catch((error) => {
      console.log("error");
    })
    .then((crearTarea) => {
      console.log(crearTarea);
    })
  })
  
  
  const submitTask = async () => {
    if(date){
      const response = await fetch('../api/toDoList', {
        method: 'POST',
        body: JSON.stringify({ dato:task, tipo: "tarea", clase:selectedClass, date:date }), //en dato poner classText[selectedClass]
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const dato = await response.json();
      console.log(dato);
    }
    else {
      alert('Porfavor complete el campo de fecha');
      return;
    }
    setFormVisible(true);

    
    

    /*
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
      <h1 className="grid justify-items-center text-xl mt-3"> Mis tareas  </h1>
      <div className="font-Quattrocento bg-gradient-to-b from-[#1D1261] to-[#1B153F] text-white h-screen">
      <div className="flex flex-col h-3/4">
        <div className="flex-1 border-r border-dashed border-gray-300 p-4">
          <p className="text-3xl font-bold text-[#DF6B00] font-Quattrocento-bold">A</p>
          <div id="ClaseA">
            {tasksArray.map((taskObj, index) => (
              taskObj.class === 'A' && (
                <div key={index}>
                  {taskObj.task}
                  <button onClick={() => handleDelete('A', taskObj.task)}>Delete</button>
                  <br />
                </div>
              )
            ))}
          </div>
        </div>
        <div className="flex-1 border-r border-dashed border-gray-300 p-4">
          <p className="text-3xl font-bold text-[#00A3FF] font-Quattrocento-bold">B</p>
          <div id="ClaseB">
            {tasksArray.map((taskObj, index) => (
              taskObj.class === 'B' && (
                <div key={index}>
                  {taskObj.task}
                  <button onClick={() => handleDelete('B', taskObj.task)}>Delete</button>
                  <br />
                </div>
              )
            ))}
          </div>
        </div>
        <div className="flex-1 p-4">
          <p className="text-3xl font-bold text-[#00A3FF] font-Quattrocento-bold">C</p>
          <div id="ClaseC">
            {tasksArray.map((taskObj, index) => (
              taskObj.class === 'C' && (
                <div key={index}>
                  {taskObj.task}
                  <button onClick={() => handleDelete('C', taskObj.task)}>Delete</button>
                  <br />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      </div>

      
      <div className=" ">
      

      <form onSubmit={inputSubmit}>
        
         {formVisible &&(<div className="justify-start bg-gradient-to-b from-[#2200FF] to-[#7795ff] grid align-items-center gap-3 mr-8 ml-8 my-10 py-4 shadow-inner appearance-none border-none rounded  px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline">
          <p className="text-xl"> Nombre</p>
                <div className="text-right">
          <button className="text-white" onClick={() => setFormVisible(true)}>
            ✕
          </button>
        </div>
          <input
            className="text-white rounded-sm text-lg bg-[#3B355A] shadow-inner py-1 mx-full mt-3"
            type="text"
            value={task}
            onChange={inputChange}
            placeholder="Agregar Tarea"
            id="NombreTarea"
          />
          <p className=" mt-3 text-xl"> Prioridad</p>
          <select
            id="SelectClases"
            onChange={handleClassChange}
            value={selectedClass}
            className="justify-start text-gray-400 mt-3 rounded-sm text-lg bg-[#3B355A] shadow-inner py-2 mx-auto pr-6"
          >
            <option value="Seleccionar Clase">Seleccionar Clase</option>
            <option value="A">Clase A</option>
            <option value="B">Clase B</option>
            <option value="C">Clase C</option>
          </select>
          <br />
          <p className=" mt-3 text-xl"> Fecha</p>
          <input
            className="justify-start text-gray-400 mt-3 rounded-sm text-lg bg-[#3B355A] shadow-inner py-2 mx-auto pr-6"
            onChange={dateChange}
            type="date"
          />
          <button
          onClick={submitTask}
          type="submit"
          className="bg-white text-blue-700 text-center align-items-center rounded-md py-2 mt-3 mx-auto px-4"
        >Agregar Tarea
        </button>
        </div>)}
        
        
      </form>
    </div>
      <Footer/>
    </div>
    
  );
  
}