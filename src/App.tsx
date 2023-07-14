import { useState } from 'react'
import './App.css'
import Task from './Components/Task'

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <div style={{background: 'lightGray', width: '60vw'}}>
      <div>
        <input placeholder='Введите название задачи'></input>
        <input placeholder='Введите описание задачи'></input>
        <button>+1</button>
      </div>
      {taskList.length === 0 ? <span style={{color: 'green'}}>Активных задач нет!!!</span> : <span>Есть {taskList.length} активных задач</span>}
      
    </div>
  )
}

export default App
