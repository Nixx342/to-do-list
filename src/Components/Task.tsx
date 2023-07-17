import '../Components/Task.css'

export interface TaskProps {
  name: string
  description: string
  priority: number
  complete: boolean
  onCompleteTask: any
  onDeleteTask: any
}

const buttonStyle = {
  height: '4vh',
  width: '3vw',
  margin: '5px',
}

const Task = (props: TaskProps) => {
  let name, task
  if(props.complete){
    task = 'taskCompleted'
    name = 'taskNameCompleted'
  } else {
    task = 'task'
    name = 'taskName'
  }
  
  return (
    <div className={task}>
      <div >
        <h3 className={name}>{props.name}</h3>
        <span>Приоритет задачи: {props.priority}</span>
        <p>{props.description}</p>
      </div>
      <button style={buttonStyle} onClick={props.onCompleteTask} className='complite'>Complite</button>
      <button style={buttonStyle} onClick={props.onDeleteTask} className='delete'>Delete</button>
    </div>
  )
}

export default Task
