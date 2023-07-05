import styles from '../../styles/Home.module.css'
import { useState } from 'react'

function TasksPage() {
    
    const [task, setTask] = useState('')

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
        <div class=" py-12 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:space-y-0 sm:space-x-6 bg-slate-500 text-white "> 
                <div class=" flex justify-between space-y-0">
                    <label class="flex gap-5 text-lg text-white font-semibold">Asignar Tarea</label>
                    <input class="  text-slate-500"type='text' value={task} onChange={e => setTask(e.target.value)}></input>
                </div>
                
            <div class="relative">
                <button onClick={submitTask} className = ' px-4 py-1 text-sm text-white-600 font-semibold rounded-full border border-slate-200 hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2'>Submit Task</button>
   
            </div>

            
        
        </div>
        
        
    </>
    )
}
export default TasksPage