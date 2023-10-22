import { Task } from './Task'
export const TaskList = ({ task, handleDeleteTask }) => {
  const colors = ['#fff', '#cac4b9']

  const getColorForIndex = (index) => colors[index % colors.length]

  return (
    <div className='tasklist-container'>
      <ul className='list'>
        {task.map((task, index) => (
          <li key={task.id} style={{ backgroundColor: getColorForIndex(index) }}>
            <Task
              id={task.id}
              data={task.data}
              status={task.status}
              handleDeleteTask={handleDeleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
