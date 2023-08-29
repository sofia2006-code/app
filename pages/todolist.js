import { useState } from "react";

export default function todolist(){
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({todo: ""});
    
    return(


        <main>
            <h1>TO-DO</h1>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Taks to be done..."
                        value={todo.todo}
                        //SET VALUE OF INPUT NOT READ ONLY (buscar esto en internet)
                    />
                </form>
                <button type="submit">
                    {todo._id? "Update": "Add"}
                </button>
                {todos.map((todo) => (
                    <div key={todo._id}>
                        <input
                            type="checkbox"
                            className={styles.check_box}
                            checked={todo.completed}
                        />
                        <P
                        className={
                            todo.completed 
                                ? styles.todo_text + " " + styles.line_through
                                : styles.todo_text
                        }>{todo.todo}
                        </P>
                        <button > &#9998; </button>
                        <button > &#10006;</button>
                    </div>
                ))}
                {todos.length === 0 && <h2>No Tasks</h2>}
            </div>
        </main>
    )
}