export interface TaskProps {
    name: string,
    description: string,
    priority: number,
    complete: boolean,
}

const taskStyle: object = {
    width: '80%',
    border: '1px solid black',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2%',
    // marginBottom: '2%',
}

const Task = (props: TaskProps) => {
    return (
        <div style={taskStyle} className="task">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <span>{props.priority}</span>
            <button className="ready"></button>
            <button className="delete"></button>
        </div>
    )
}

export default Task