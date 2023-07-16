export interface TaskProps {
  name: string
  description: string
  priority: number
  complete: boolean
  onCompleteTask: any
  onDeleteTask: any
}

const taskStyle = {
  width: '80%',
  border: '1px solid black',
  display: 'flex',
  margin: '2% auto',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '2%',
}

const textStyle = {
  width: '70%',
  //   margin: 'auto',
  // marginBottom: '2%',
}

const buttonStyle = {
  height: '4vh',
  width: '3vw',
  margin: '5px',
}

const Task = (props: TaskProps) => {
  return (
    <div style={taskStyle} className='task'>
      <div style={textStyle}>
        <h3>{props.name}</h3>
        <span>Приоритет задачи: {props.priority}</span>
        <p>{props.description}</p>
      </div>
      <button style={buttonStyle} className='complite'>Complite</button>
      {/* <button style={buttonStyle} onClick={props.onDeleteTask(props.index)} className='delete'></button> */}
      <button style={buttonStyle} onClick={props.onDeleteTask} className='delete'>Delete</button>
    </div>
  )
}

export default Task
