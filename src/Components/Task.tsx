export interface TaskProps {
    name: string,
    description: string,
    priority: number,
    complete: boolean
}

const Task = (props: TaskProps) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <span>{props.priority}</span>
            <p>{props.description}</p>
        </div>
    )
}

export default Task