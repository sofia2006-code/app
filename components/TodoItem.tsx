type TodoItemProps = {
    id: string 
    title: string
    complete: Boolean 
}

export function TodoItem({ id, title, complete}: TodoItemProps) {
    return <li>
    <input id={id} type="checkbox"/>
    <label htmlFor={id}>
        {title}
    </label>
    </li>
}