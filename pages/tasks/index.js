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
        const response = await fetch ('/api/configPomodoro', {
            method: 'POST',
            body: JSON.stringify({ dato: task, tipo: "tarea"}),
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
        
        <div class="relative h-32 w-32">
            <button onClick={submitTask} className = 'absolute inset-x-0 bottom-0 h-0'>Submit Task</button>
            
            <button onClick={fetchTasks} className='absolute inset-x-0 bottom-0 h-8'>Load Tasks</button>
            {
                tasks.map(task => {
                    return (
                        <div key={task.id}>
                            {task.id} {task.text} 
                        </div>
                    )
                })
            }

        </div>
        
    </>
    )
}
export default TasksPage