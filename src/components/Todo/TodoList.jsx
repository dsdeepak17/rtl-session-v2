import React from 'react'
import DeleteIcon from '../../assets/icons/delete.svg'

function TodoList({ todoList, toggleTodoCompletion, handleTodoDeletion }) {
  return (
    <div className='todo-list' data-testid="todo-list">
      <h2 className='text-center'>Todo List</h2>
      {todoList?.map(({ id, text, completed }) =>
        <div key={id} className="todo-item">
          <div
            className={completed ? 'todo-text complete' : 'todo-text'}
            onClick={() => toggleTodoCompletion(id)}
          >
            {text}
          </div>
          <img src={DeleteIcon} className="todo-delete" alt="delete-icon" onClick={() => handleTodoDeletion(id)} />
        </div>
      )}
    </div>
  )
}

export default TodoList