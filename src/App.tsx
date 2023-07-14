import { useState } from 'react'
import './App.css'
import Task, { TaskProps } from './Components/Task'
import TaskList from './Components/TaksList'


function App() {
  const [tasks, setTasks
  ] = useState([
    {
      name: 'Name 1',
      description: 'Desc 1',
      priority: 1,
      complete: false
    },
    {
      name: 'Name 2',
      description: 'Desc 2',
      priority: 2,
      complete: true
    },
    {
      name: 'Name 3',
      description: 'Desc 3',
      priority: 3,
      complete: true
    },
  ])
  
  return (
    <div style={{background: 'lightGray', width: '60vw'}}>
      <div>
        <input placeholder='Введите название задачи'></input>
        <input placeholder='Введите описание задачи'></input>
        <button onClick={()=>{setTasks(tasks.splice(3))}}
        >+1</button>
      </div>
      {tasks.length === 0 ? <span style={{color: 'green'}}>Активных задач нет!!!</span> : <TaskList taskList={tasks}/>}
      
    </div>
  )
}

export default App
