import Task, {TaskProps} from "./Task";

export interface TaskListProps{
    taskList: Array<TaskProps>
}

// const taskListStyle : object = {
//     justifyContent: 'center',
//     alignItem: 'center'
// }

const TaskList = (props: TaskListProps) => {
    return (
        <div>
            {props.taskList.map(task => {
                return(
                    <Task 
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