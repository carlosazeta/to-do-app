import { useState } from 'react'

export const Addbar = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = () => {
    if (inputValue.trim() === '') return

    onAddTask(inputValue)
    setInputValue('')
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className='input-container'>
      <input
        className='input'
        type='text' placeholder='Write your task here...'
        onChange={handleInputChange}
        value={inputValue}
        onKeyDown={handleInputKeyDown}
      />
      <button onClick={handleAddTask} className='button'>
        <span className='button__text'>Add</span>
        <span className='button__icon'><svg className='svg' fill='none' height='24' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><line x1='12' x2='12' y1='5' y2='19' /><line x1='5' x2='19' y1='12' y2='12' /></svg></span>
      </button>
    </div>
  )
}
