import { useState } from 'react'
export const Task = ({ data, status, id, handleDeleteTask }) => {
  const [taskCompleted, setTaskCompleted] = useState(status)

  const handleClickCompleted = () => {
    setTaskCompleted(!taskCompleted)
  }

  const handleClickDeleteTask = () => {
    handleDeleteTask(id)
  }

  return (
    <div className='task-container'>
      <p
        className='task-data'
        onClick={handleClickCompleted}
      >
        {data}
      </p>
      <button className='task-button' type='button' onClick={handleClickDeleteTask} />
    </div>
  )
}
