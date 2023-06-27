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
