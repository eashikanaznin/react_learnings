import { useState, useReducer } from "react"
import "./styles.css"
import { TodoItem } from "./TodoItem"


const ACTION = {
  "ADD_NEW_TODO" : "ADD_NEW_TODO",
  "DELETE_TODO" : "DELETE_TODO"
}
function reducer( myTodos, action){
  switch(action.type){
    case "ADD_NEW_TODO":
    if (action.payload.value === "") return

    // setTodos(currentTodos => {
    //   return [
    //     ...currentTodos,
    //     { name: newTodoName, completed: false, id: crypto.randomUUID() },
    //   ]
    // })
    // setNewTodoName("")
    return [ ...myTodos, { name: action.payload.value, completed: false, id: crypto.randomUUID() } ]
    setNewTodoName("")
  }

}

function App({ initVal = [] }) {
  const [newTodoName, setNewTodoName] = useState("")
  // const [todos, setTodos] = useState([])
  const [myTodos, dispatch] = useReducer( reducer, initVal)

  // function addNewTodo() {
  //   if (newTodoName === "") return

  //   setTodos(currentTodos => {
  //     return [
  //       ...currentTodos,
  //       { name: newTodoName, completed: false, id: crypto.randomUUID() },
  //     ]
  //   })
  //   setNewTodoName("")
  // }

  // function toggleTodo(todoId, completed) {
  //   setTodos(currentTodos => {
  //     return currentTodos.map(todo => {
  //       if (todo.id === todoId) return { ...todo, completed }

  //       return todo
  //     })
  //   })
  // }
  function toggleTodo(todoId, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === todoId) return { ...todo, completed }

        return todo
      })
    })
  }

  function deleteTodo(todoId) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <>
      <ul id="list">
        {myTodos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={e => setNewTodoName(e.target.value)}
        />
        {/* <button onClick={addNewTodo}>Add Todo</button> */}
        <button onClick={ ()=> dispatch({ type: ACTION.ADD_NEW_TODO, payload: { value : newTodoName} })}>Add Todo</button>
      </div>
    </>
  )
}

export default App
