import { tasks } from "../../../data/tasks"

/*
export default function handler (req, res){
    let i = 0
    if (req.method === 'GET'){
        res.status(200).json(tasks)
    }
    else if (req.method === 'POST') {
        const task = req.body.task
        const newTask = {
            id: Date.now(), 
            text: task
        }
        i += 1;
        let elem = document.createElement("p");
        elem.innerHTML.id = "tasks"+i;
        elem.innerText = newTask.text;
        tasks.push(newTask)
        res.status(201).json(newTask)
    }
}*/