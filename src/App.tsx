import { useState } from 'react'
import Task, { TaskProps } from './Components/Task'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(0)
  const [tasks, setTasks] = useState([
    {
      name: 'Купить продукты',
      description: 'Купить все необходимые продукты для приготовления ужина',
      priority: 3,
      complete: false,
    },
    {
      name: 'Починить кран',
      description: 'Отремонтировать кран на кухне, который течет',
      priority: 8,
      complete: false,
    },
    {
      name: 'Записаться в спортзал',
      description: 'Записаться в спортзал на ближайшую неделю',
      priority: 9,
      complete: false,
    },
    {
      name: 'Почитать книгу',
      description: 'Прочитать 100 страниц книги по истории',
      priority: 1,
      complete: false,
    },
    {
      name: 'Позвонить другу',
      description: 'Позвонить другу, которого давно не видел',
      priority: 1,
      complete: false,
    },
    {
      name: 'Посетить музей',
      description: 'Посетить музей изобразительных искусств в выходной день',
      priority: 6,
      complete: true,
    },
    {
      name: 'Записаться на курсы',
      description:
        'Записаться на курсы английского языка на ближайшие два месяца',
      priority: 5,
      complete: true,
    },
  ])

  tasks.sort((a, b) => b.priority - a.priority)

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

      setTasks(newTaskList)
      setName('')
      setDescription('')
      setPriority(0)
      setMessage('Задача добавлена')
      setMessageType('complete')

      setTimeout(() => {
        setMessage('')
        setMessageType('noMessage')
      }, 5000)
    } else {
      setMessage('Заполните все поля')
      setMessageType('error')
      setTimeout(() => {
        setMessage('')
        setMessageType('noMessage')
      }, 5000)
    }
  }

  return (
    <div className='main-container'>
      <div className='addTask'>
        <div className='addTaskInputElements'>
          <div className='topLineElements'>
            <input
              className='nameInput'
              maxLength={100}
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
              placeholder='Введите название задачи'
            ></input>
            <div>
              <span className='addPriority'>Приоритет: </span>
              <input
                className='priorityInput'
                value={priority}
                type='number'
                min='0'
                max='10'
                onChange={e => {
                  if (Number(e.target.value) < 0) {
                    e.target.value = '0'
                  } else if (Number(e.target.value) > 10) {
                    e.target.value = '10'
                  }
                  setPriority(Number(e.target.value))
                }}
              />
            </div>
            <button
              className='btnAddTask'
              onClick={() => {
                handleAddTask(newTask)
              }}
            >
              Добавить задачу
            </button>
          </div>
          <textarea
            className='descriptionInput'
            value={description}
            onChange={e => {
              setDescription(e.target.value)
            }}
            placeholder='Введите описание задачи'
          ></textarea>
        </div>

        <p className={messageType}>{message}</p>
      </div>

      {tasks.length === 0 ? (
        <p className='noTasks'>Активных задач нет!!!</p>
      ) : (
        tasks
          .sort((a, b) => a.complete - b.complete)
          .map((task: TaskProps, index: number) => {
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
