import { useState } from "react";
/*
const url = "http://localhost:3000/api/toDolist";

export default function todolist(props) {
    const [todos, setTodos] = useState(props.todos);
    const [todo, setTodo] = useState({ todo: "" });

    const handlerChange = ({ currentTarget: input }) => {
        input.value === ""
            ? setTodo({ todo: "" })
            : setTodo((prev) => ({ ...prev, todo: input.value }));
    }

    const editTodo = (id) => {
        const currentTodo = todos.filter((todo) => todo._id === id);
        setTodo(currentTodo[0]);
    }

    const addTodo = async (e) => {
        e.preventDefault();
        try {
            if (todo._id) {
                const { data } = await fetch(url + "/" + todo._id, {method: 'PUT'}, { todo: todo.todo });
                const originalTodos = [...todos];
                const index = originalTodos.findIndex((t) => t.id === todo._id);
                originalTodos[index] = data.data;
                setTodos(originalTodos);
                setTodo({ todo: "" });
                console.log(data.message);
            } else {
                const { data } = await fetch(url, {method: 'POST'}, todo);
                setTodos((prev) => [...prev, data.data]);
                setTodo({ todo: "" });
                console.log(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateTodo = async (id) => {
        try {
            const originalTodos = [...todos];
            const index = originalTodos.findIndex((t) => t.id === todo._id);
            const { data } = await fetch(url + "/" + id, { method: 'PUT' }, { completed: !originalTodos[index].completed });
            originalTodos[index] = data.data;
            setTodos(originalTodos);
            console.log(data.message);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTodo = async (id) => {
        try {
            const { data } = await fetch(url + "/" + id, {method: 'DELETE'});
            setTodos((prev) => prev.filter((todo) => todo._id !== id));
            console.log(data.message);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <h1>TO-DO</h1>
            <div>
                <form onSubmit={addTodo}>
                    <input
                        type="text"
                        placeholder="Taks to be done..."
                        onChenge={handlerChange}
                        value={todo.todo}
                    //SET VALUE OF INPUT NOT READ ONLY (buscar esto en internet)
                    />
                </form>
                <button type="submit">
                    {todo._id ? "Update" : "Add"}
                </button>
                {todos.map((todo) => (
                    <div key={todo._id}>
                        <input
                            type="checkbox"
                            className={styles.check_box}
                            checked={todo.completed}
                            onChange={() => updateTodo(todo._id)}
                        />
                        <P
                            className={
                                todo.completed
                                    ? styles.todo_text + " " + styles.line_through
                                    : styles.todo_text
                            }>{todo.todo}
                        </P>
                        <button onClick={() => editTodo(todo._id)} > &#9998; </button>
                        <button onClick={() => deleteTodo(todo._id)} > &#10006;</button>
                    </div>
                ))}
                {todos.length === 0 && <h2>No Tasks</h2>}
            </div>
        </main>
    )
}

export const getServerSideProps = async () => {
    const response = await fetch(url, {method: 'POST'});
    const data = await response.json();
    return {
        props: {
            todos: data.data
        }
    }
}

/*
export default function todolist() {
    return(
        <h1>Hi</h1>
    )
}

export async function todolist(){
    const [todos, setTodos]= useState([]);
    const [dato, setTodo] = useState('')

}

{
    return(
        <>
        <div>
            <form>
                <h2>Escriba su tarea</h2>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)}></input>
                
            </form>
        </div>
        </>
    )
}*/