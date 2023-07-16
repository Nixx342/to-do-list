import { useState } from 'react'
import Task, { TaskProps } from './Components/Task'
import TaskList from './Components/TaksList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      name: 'Задача 1',
      description: 'Описание задачи 1',
      priority: 3,
      complete: false,
    },
    {
      name: 'Задача 2',
      description: 'Описание задачи 2',
      priority: 2,
      complete: true,
    },
    {
      name: 'Задача 3',
      description: 'Описание задачи 3',
      priority: 1,
      complete: false,
    },
    {
      name: 'Задача 4',
      description: 'Описание задачи 4',
      priority: 2,
      complete: true,
    },
    {
      name: 'Задача 5',
      description: 'Описание задачи 5',
      priority: 3,
      complete: false,
    },
  ])
  const [message, setMessage] = useState('')

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }
  
  const handleCompleteTask = (index: number) => {
    const newTasks = [...tasks]
    newTasks[index].complete = !newTasks[index].complete 
    setTasks(newTasks)
  }

  let newTask: TaskProps = {
    name: '',
    description: '',
    priority: 0,
    complete: false,
    onDeleteTask: handleDeleteTask,
    onCompleteTask: handleCompleteTask
  }
  const handleAddTask = (task: TaskProps) => {
    if (
      task.name != '' &&
      task.description != '' &&
      task.priority >= 0 &&
      task.priority <= 10
    ) {
      const newTasks = [...tasks]
      newTasks.push(task)
      setTasks(newTasks)
      setMessage('Задача добавлена')
    } else {
      setMessage('Заполните все поля')
    }
  }

  return (
    <div
      style={{
        background: 'lightGray',
        width: '60vw',
        color: 'black',
        padding: '3%',
      }}
    >
      
      <div>
        <input
          id='inputName'
          onChange={e => {
            newTask.name = e.target.value
          }}
          placeholder='Введите название задачи'
        ></input>

        <input
          id='inputDescription'
          onChange={e => {
            newTask.description = e.target.value
          }}
          placeholder='Введите описание задачи'
        ></input>

        <input
          id='inputPriority'
          type='number'
          min='0'
          max='10'
          placeholder='Введите приоритет задачи'
          onChange={e => {
            if (Number(e.target.value) < 0) {
              e.target.value = '0'
            } else if (Number(e.target.value) > 10) {
              e.target.value = '10'
            }
            newTask.priority = Number(e.target.value)
          }}
        ></input>

        <button
          onClick={() => {
            handleAddTask(newTask)
          }}
        >
          Добавить задачу
        </button>
      </div>

      <span>{message}</span>

      {tasks.length === 0 ? (
        <span style={{ color: 'green' }}>Активных задач нет!!!</span>
      ) : (
        tasks.map((task,index)=>{
          let i = index
          return(
            <Task
              onCompleteTask={handleCompleteTask.bind(i)}
              onDeleteTask={handleDeleteTask.bind(i)}
              name={task.name}
              description={task.description}
              priority={task.priority}
              complete={task.complete}
            />
          )
        })
        // <TaskList taskList={tasks} onDeleteTask={handleDeleteTask} />
        // <TaskList taskList={tasks} onDeleteTask={handleDeleteTask} />
      )}
    </div>
  )
}

export default App
