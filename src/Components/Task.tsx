import '../Components/Task.css'
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
          </div>
        </div>
        <p className='description'>{props.description}</p>
      </div>
    </div>
  )
}

export default Task
