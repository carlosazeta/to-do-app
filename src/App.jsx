import './App.css'
import { Addbar } from './components/AddBar'
import { TaskList } from './components/TaskList'
import { useTasks } from './hooks/useTasks'

function App () {
  const { task, addTask, deleteTask } = useTasks()
  return (
    <div className='page'>
      <Addbar onAddTask={addTask} />
      <TaskList task={task} handleDeleteTask={deleteTask} />
    </div>
  )
}

export default App
