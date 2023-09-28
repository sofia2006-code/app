import { prisma } from ".prisma/client"
import Link from "next/link"
import TodoItem from "../components/TodoItem"

function getTodos(){
    return prisma.todo.findMany()
}

export default function todolists() {

    const todos = await prisma.todo.findMany()
    //prisma.todo.create({ data: {title:"test", complete: false}})
 

    return(
        <>
        <header>
            <h1 clasName="text-2xl">Todos</h1>
            <Link href="./new/page"> new</Link>
        </header>
        <ul>
            {todos.map(todo =>(
                    <TodoItem key={todo.id} {...todo}></TodoItem>
            ))}
        </ul>
        </>

    )
}