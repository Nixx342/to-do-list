import { useState } from 'react'
import Task, { TaskProps } from './Components/Task'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(0)

  const [tasks, setTasks] = useState([
    // {
    //   name: 'Задача 1',
    //   description: 'Описание задачи 1',
    //   priority: 3,
    //   complete: false,
    // },
  ])

  const handleDeleteTask = (index: number): void => {
    let newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }
  const handleCompleteTask = (index: number): void => {
    const newTasks: Array<TaskProps> = [...tasks]
    newTasks[index].complete = !newTasks[index].complete
    setTasks(newTasks)
  }

  let newTask: TaskProps = {
    name: name,
    description: description,
    priority: priority,
    complete: false,
    onDeleteTask: handleDeleteTask,
    onCompleteTask: handleCompleteTask,
  }

  const handleAddTask = (task: TaskProps) => {
    if (
      task.name != '' &&
      task.description != '' &&
      task.priority >= 0 &&
      task.priority <= 10
    ) {
      const newTaskList = [
        ...tasks,
        {
          name: name,
          description: description,
          priority: priority,
          complete: false,
        },
      ]
      // newTasks.push(task)
      setTasks(newTaskList)
      setName('')
      setDescription('')
      setPriority(0)
      setMessage('Задача добавлена')
      setTimeout(() => {
        setMessage('')
      }, 5000)
    } else {
      setMessage('Заполните все поля')
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }

  return (
    <div className='main-container'>
      <div>
        <input
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
          placeholder='Введите название задачи'
        ></input>

        <input
          value={description}
          onChange={e => {
            setDescription(e.target.value)
          }}
          placeholder='Введите описание задачи'
        ></input>

        <input
          value={priority}
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
            setPriority(Number(e.target.value))
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

      <p>{message}</p>

      {tasks.length === 0 ? (
        <p style={{ color: 'green' }}>Активных задач нет!!!</p>
      ) : (
        tasks.map((task: TaskProps, index: number) => {
          return (
            <Task
              key={index}
              onCompleteTask={() => handleCompleteTask(index)}
              onDeleteTask={() => handleDeleteTask(index)}
              name={task.name}
              description={task.description}
              priority={task.priority}
              complete={task.complete}
            />
          )
        })
      )}
    </div>
  )
}

export default App
