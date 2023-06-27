import { useState } from 'react'

function TaskPage() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')

    const fetchTasks = async () => {
        const response = await fetch ('/api/task_api')
        const data = await  response.json()
        setTasks(data)
    }

    const submitTask = async() => {
        const response = await fetch ('/api/task_api', {
            method: 'POST',
            body: JSON.stringify({ task }),
            heathers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    return(
        <>
            <input type='text' value={task} onChange={e => setTask(e.target.value)}>Escribe tu tarea...</input>
            <button onClick={submitTask}>Submit Task</button>

            <button onClick={fetchTasks}>Load Tasks</button>
            {tasks.map((task) => {
                return (
                    <div key={task.id}>
                        {task.id} {task.text}
                    </div>
                )
            })}
        </>
    )
}

export default TaskPage


















/*
import { TaskForm } from "../components/TaskForm";

function task() {
    return(
        <>
        <div>
            <form method="POST" action="/api/task_api">
                <button>send</button>
            </form>

        </div>

        <div>
            <TaskForm/>
        </div>        
        
        </>

    )
}

export default task;
*/
