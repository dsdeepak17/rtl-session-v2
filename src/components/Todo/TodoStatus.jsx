import React from 'react'

function TodoStatus({ todoList }) {

  const completedTasks = todoList.filter(({ completed }) => completed === true)

  return (
    <div className='todo-status'>
      <span>Total Tasks: {todoList.length}</span>
      <span>Tasks Completed: {completedTasks.length}</span>
    </div>
  )
}

export default TodoStatus