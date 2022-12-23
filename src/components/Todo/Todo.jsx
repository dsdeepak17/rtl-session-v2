import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoStatus from './TodoStatus'


function Todo() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  const handleAddTodo = (newTodo) => {
    setTodoList(prevTodos => ([
      ...prevTodos,
      newTodo
    ]))
  }

  const toggleTodoCompletion = (toggleId) => {
    // console.log(id)
    const editedTodos = todoList.map(({ id, text, completed }) => {
      if (id === toggleId) {
        return {
          id,
          text,
          completed: !completed
        }
      }
      return {
        id, text, completed
      }
    })
    setTodoList(editedTodos)
  }

  const handleTodoDeletion = deletionId => {
    // console.log({ id });
    const filteredTodos = todoList.filter(({ id }) => id !== deletionId)
    setTodoList(filteredTodos)
  }

  return (
    <div className='todo-container'>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList}
        toggleTodoCompletion={toggleTodoCompletion}
        handleTodoDeletion={handleTodoDeletion}
      />
      <TodoStatus todoList={todoList} />
    </div>
  )
}

export default Todo