import Task, { TaskProps } from './Task'

export interface TaskListProps {
  taskList: Array<TaskProps>
    onDeleteTask: Function
  //   onCompleteTask: Function
}

// const taskListStyle : object = {
//     justifyContent: 'center',
//     alignItem: 'center'
// }

const TaskList = (props: TaskListProps) => {
  return (
    <div>
      {props.taskList.map((task, index) => {
        return (
          <Task
            index={index}
            onDeleteTask={props.onDeleteTask}
            name={task.name}
            description={task.description}
            priority={task.priority}
            complete={task.complete}
          />
        )
      })}
    </div>
  )
}

export default TaskList
