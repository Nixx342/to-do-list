import '../Components/Task.css'
// import { FaCheck } from 'react-icons/fa'
import { GrReturn, GrCheckmark } from 'react-icons/gr'

import { BiRefresh, BiTrashAlt, BiCheck } from 'react-icons/bi'

export interface TaskProps {
  name: string
  description: string
  priority: number
  complete: boolean
  onCompleteTask: any
  onDeleteTask: any
}

const Task = (props: TaskProps) => {
  let name, task
  if (props.complete) {
    task = 'taskCompleted'
    name = 'taskNameCompleted'
  } else {
    task = 'task'
    name = 'taskName'
  }

  return (
    <div className={task}>
      <div className='text'>
        {/* <p><h3 className={name}>{props.name} </h3> Приоритет задачи: {props.priority}</p> */}
        <div className='topBlock'>
          <span className={name}>{props.name} </span>
          <span className='priority'>Приоритет задачи: {props.priority}</span>
          <div className='buttons'>
            {!props.complete ? (
              <BiCheck
                onClick={props.onCompleteTask}
                size={30}
                className='completed'
              />
            ) : (
              <BiRefresh
                onClick={props.onCompleteTask}
                size={30}
                className='completed'
              />
            )}
            <BiTrashAlt
              onClick={props.onDeleteTask}
              size={30}
              className='delete'
            />
            {/* <button onClick={props.onCompleteTask} className='completed btn'>
              +
            </button> */}
            {/* <button onClick={props.onDeleteTask} className='delete btn'>
              X
            </button> */}
          </div>
        </div>
        <p className='description'>{props.description}</p>
      </div>
      {/* <button onClick={props.onCompleteTask} className='completed btn'>
        +
      </button>
      <button onClick={props.onDeleteTask} className='delete btn'>
        X
      </button> */}
      {/* Добавить кнопку редактирования задачи*/}
    </div>
  )
}

export default Task
