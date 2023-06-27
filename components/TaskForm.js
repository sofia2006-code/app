import axios from 'axios';
import { useState } from 'react';

export function TaskForm() {
    
    const [task, setTask] = useState({
        name: "",
        dato: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Creating a task')
    }
    
    const handleChange = ({target: {name, value}}) => {
        console.log(name, value);
    }

    return <div className="bg-gray-300">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Tipo de tarea</label>
            <input type="text" name='name' onChange={handleChange}></input>

            <label htmlFor="dato">Tiempo estipulado</label>
            <input type="text" name='dato' onChange={handleChange}></input>

            <button>Guardar</button>

        </form>
    </div>;
        
}

