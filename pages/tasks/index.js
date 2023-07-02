import styles from '../../styles/Home.module.css'
import { useState } from 'react'

function TasksPage() {
    
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')

    const fetchTasks = async () => {
        const response = await fetch ('/api/tasks')
        const data = await  response.json()
        setTasks(data)
    }

    const submitTask = async() => {
        const response = await fetch ('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({ task }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }
    // Sending a post as Data


    return (
    <>
        <input type='text' value={task} onChange={e => setTask(e.target.value)}></input>
        <hr></hr>
        <button onClick={submitTask} className = 'absolute font-semibold top-20 h-22 w-120'>Submit Task</button>
       
        <button onClick={fetchTasks}>Load Tasks</button>
        {
            tasks.map(task => {
                return (
                    <div key={task.id}>
                        {task.id} {task.text} 
                    </div>
                )
            })
        }
    </>
    )
}
export default TasksPage