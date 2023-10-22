import { useEffect, useState } from 'react'

export function useTasks () {
  const STORAGE_KEY = 'taskList'

  const [task, setTask] = useState([])

  useEffect(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEY)
    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks)
        setTask(parsedTasks)
      } catch (error) {
        console.error('Error when parsing tasks from local storage:', error)
      }
    }
  }, [])

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }

  const addTask = (newTask) => {
    const newTasks = [
      ...task,
      {
        id: Date.now(),
        data: newTask,
        status: false
      }
    ]

    setTask(newTasks)
    saveTasksToLocalStorage(newTasks)
  }

  const deleteTask = (taskId) => {
    const updatedTasks = task.filter((t) => t.id !== taskId)
    setTask(updatedTasks)
    saveTasksToLocalStorage(updatedTasks)
  }

  return { task, addTask, deleteTask }
}
