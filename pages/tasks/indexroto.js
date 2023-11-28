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

  return (
    <div>
      <script src="../tasks.js"></script>
      <h1> To-do List in Next.js </h1>
      <form onSubmit={inputSubmit}>
        <input type="text" value={task} onChange={inputChange} placeholder="Enter a task" id="NombreTarea" />
        <button onClick={submitTask} type="submit">Add task</button>
      </form>
      <ul>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </ul>
        <select id="SelectClases">
          <option value="Seleccionar Clase">Seleccionar Clase</option>
          <option value="A">Clase A</option>
          <option value="B">Clase B</option>
          <option value="C">Clase C</option>
        </select>

        <p>Clase A</p> <p id="ClaseA"></p> <br/>
        <p>Clase B</p> <p id="ClaseB"></p> <br/>
        <p>Clase C</p> <p id="ClaseC"></p> <br/>

    </div>
  );
}
