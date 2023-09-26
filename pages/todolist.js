import { useState } from "react";
import axios from 'axios';

const url = "http://localhost:3000/api/toDolist";

export default function todolist(props){
    const [todos, setTodos] = useState(props.todos);
    const [todo, setTodo] = useState({todo: ""});
    
    const handlerChange = ({currentTarget: input}) => {
        input.value === ""
        ? setTodo({todo: ""})
        : setTodo((prev) => ({...prev, todo:input.value}));
    }

    const editTodo = (id) => {
        const currentTodo = todos.filter((todo) => todo._id === id);
        setTodo(currentTodo[0]);
    }

    const addTodo = async(e) => {
        e.preventDefault();
        try {
            if(todo._id){
                const{data} = await axios.put(url + "/" + todo._id, {todo: todo.todo});
                const originalTodos = [...todos];
                const index = originalTodos.findIndex((t) => t.id === todo._id);
                originalTodos[index] = data.data;
                setTodos(originalTodos);
                setTodo({todo: ""});
                console.log(data.message);
            }else{
                const{data} = await axios.post(url, todo);
                setTodos((prev) =>[...prev, data.data]);
                setTodo({todo: ""});
                console.log(data.message)
            }
        }catch (error) {
            console.log(error)
        }
    }

    const updateTodo = async(id) => {
        try{
            const originalTodos = [...todos];
            const index = originalTodos.findIndex((t) => t.id === todo._id);
            const {data} = await axios.put(url + "/" + id, {completed: !originalTodos[index].completed});
            originalTodos[index] = data.data;
            setTodos(originalTodos);
            console.log(data.message);
        }catch(error) {
            console.log(error)
        }
    }

    const deleteTodo = async (id) => {
        try{
            const {data} = await axios.delete(url + "/" + id);
            setTodos((prev) => prev.filter((todo) => todo._id !== id));
            console.log(data.message);
        }catch(error){
            console.log(error)
        }
    }

    return(
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
                    {todo._id? "Update": "Add"}
                </button>
                {todos.map((todo) => (
                    <div key={todo._id}>
                        <input
                            type="checkbox"
                            className={styles.check_box}
                            checked={todo.completed}
                            onChange = {() => updateTodo(todo._id)}
                        />
                        <P
                        className={
                            todo.completed 
                                ? styles.todo_text + " " + styles.line_through
                                : styles.todo_text
                        }>{todo.todo}
                        </P>
                        <button onClick={() => editTodo(todo._id)} > &#9998; </button>
                        <button > &#10006;</button>
                    </div>
                ))}
                {todos.length === 0 && <h2>No Tasks</h2>}
            </div>
        </main>
    )
}


export const getServerSideProps = async() => {
    const {data} = await axios.get(url);
    return{
        props: {
            todos: data.data
        }
    }
}
