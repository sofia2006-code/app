import styles from '../../styles/Home.module.css'
import { useState } from 'react'

/*
export default function TasksPage() {
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);

  const submitTask = async() => {
    const response = await fetch ('/api/configPomodoroPrisma', {
        method: 'POST',
        body: JSON.stringify({ dato: task, tipo: "tarea"}),
         headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
}

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e) => {  
    e.preventDefault();
    let task = " ";
    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      setTask('');
    }
    else if(task.trim().length === 0) {   
      console.log("The string is empty");
    }
    else {
    console.log("The string is not empty");
    }
  };
  //fijarse el tema del trim 

  const handleDelete = async (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
    const response = await fetch('/api/configPomodoroPrisma', {
          method: 'DELETE',
      })
      const data = await response.json()
      console.log(data)
      fetchTasks()
  };

  
  return (
    <div>
      <h1 > To-do List in Next.js </h1>
      <form onSubmit={inputSubmit}>
        <input type="text" value={task} onChange={inputChange} placeholder="Enter a task" />
        <button onClick={submitTask} type="submit" className = ' px-4 py-1 text-sm text-white-600 font-semibold rounded-full border border-slate-200 hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2'>Add task</button>
      </form>
      <ul>
        {tasksArray.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}*/

export default function Tasks() {
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);

  const submitTask = async() => {
    const response = await fetch ('/api/configPomodoroPrisma', {
        method: 'POST',
        body: JSON.stringify({ dato: task, tipo: "tarea"}),
         headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
  }
  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      setTask('');
    }
  };

  const handleDelete = async (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
    const response = await fetch('/api/toDoList', {
      method: 'DELETE',
    })
    .then(res => res.json()) // or res.json()
    console.log(res)
  };

  //Clases 
  return (
    <div>
      <script src="../tasks.js"></script>
      <h1> To-do List in Next.js </h1>
      <form onSubmit={inputSubmit}>
        <input type="text" value={task} onChange={inputChange} placeholder="Enter a task" id="NombreTarea" />
        <button onClick={submitTask} type="submit">Add task</button>
      </form>
      <ul>
        {tasksArray.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
        <select id="SelectClases">
          <option value="Seleccionar Clase">Seleccionar Clase</option>
          <option value="A">Clase A</option>
          <option value="B">Clase B</option>
          <option value="C">Clase C</option>
        </select>

        <p>Clase A</p> <p id="ClaseA"></p> <br/>
        <p>Clase B</p> <p id="ClaseB"></p> <br/>
        <p>Clase C</p> <p id="ClaseC"></p> <br/>

      </ul>
    </div>
  );
}
