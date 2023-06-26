import React from 'react'

function TaskForm() {
    return <div>
        <form>

            <label htmlFor="type">Tipo de tarea</label>
            <input type="text" name='name'></input>

            <button>Guardar</button>

        </form>

    </div>;
        
}

export default TaskForm