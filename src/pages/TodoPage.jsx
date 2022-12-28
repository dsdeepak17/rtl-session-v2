import React, { useEffect, useState } from 'react'
import TodoInput from '../components/Todo/TodoInput'
import TodoList from '../components/Todo/TodoList'
import TodoStatus from '../components/Todo/TodoStatus'


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
    const newTodos = [...todoList];
    const id = todoList.findIndex(todo => todo.id === toggleId)
    newTodos[id].completed = !todoList[id].completed
    setTodoList(newTodos)
  }

  const handleTodoDeletion = deletionId => {
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