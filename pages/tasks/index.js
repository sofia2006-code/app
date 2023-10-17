import styles from '../../styles/Home.module.css'
import { useState } from 'react'

/*
function TasksPage() {
    
    const [task, setTask] = useState('')

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

    const deleteTask = async() => {
        const response = await fetch('/api/configPomodoroPrisma', {
            method: 'DELETE',
            body
        })
    }


    // Sending a post as Data


    return (
    <>
        <div class="m-auto w-[50vh] h-[40vh] min-h-[11em] flex flex-col rounded-[1.5em] bg-slate-500 text-white "> 
                <label class="ml-10 mt-5 flex mr-1 gap-5 text-lg text-white font-semibold">Asignar Tarea</label>
                <input class="text-slate-500 w-[12em] mt-5 ml-11"type='text' value={task} onChange={e => setTask(e.target.value)}></input>
                
            <div class="relative">
                <button onClick={submitTask} className = 'mt-10 ml-11 px-4 py-1 text-sm text-white-600 font-semibold rounded-full border border-slate-200 hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2'>Submit Task</button>
           
            </div>
            <p ></p>
        </div>
        
        
    </>
    )
}
export default TasksPage*/

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
    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      setTask('');
    }
    /*else if(task.trim()){
        Preguntarle a nacho como hacer que te tire error cuando no escribis nada
    }
    */
  };

  const handleDelete = (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  /*
  const deleteTask = async (task) => {
      const response = await fetch('/api/configPomodoroPrisma', {
          method: 'DELETE',
      })
      const data = await response.json()
      console.log(data)
      fetchtasks()
      https://www.youtube.com/watch?v=je8jPi8KOY4 ==> tutorial de DELETE method
  }*/


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
}