import { useState, useReducer, useEffect } from "react";
import "./styles.css";
import { TodoItem } from "./TodoItem";
import { FilterForm } from "./FilterForm";

const ACTION = {
  ADD_NEW_TODO: "ADD_NEW_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  HIDE_UNCHECKED: "HIDE_UNCHECKED",
};
const COUNT_LOC_DATA = "COUNT_LOC_DATA";

function reducer(myTodos, { type, payload } ) {
  switch (type) {
    case "ADD_NEW_TODO":
      if (payload.value === "") return;
      // setNewTodoName("")

      return [
        ...myTodos,
        {
          name: payload.value,
          completed: false,
          id: crypto.randomUUID(),
        },
      ];
      case "DELETE_TODO":
        console.log(payload.value)
        const updatedtodos = myTodos.filter((todo) => todo.id !== payload.todoId)
        console.log(updatedtodos)
        return updatedtodos

      case "TOGGLE_TODO":
        return myTodos.map(myTodo => {
          if (myTodo.id === payload.todoId) {
            return { ...myTodo, completed: payload.completed }
          }
          return myTodo
        })

        case "HIDE_UNCHECKED":
          return myTodos.filter((todo) => todo.completed ==='completed')
            

  

  }
}

function App() {
  const [newTodoName, setNewTodoName] = useState("");
  // const [todos, setTodos] = useState([])
  const [myTodos, dispatch] = useReducer(reducer, [], (initVal) => {
    const val = localStorage.getItem(COUNT_LOC_DATA);
    if (val == null) return []
    else
    return JSON.parse(val)
  });

  useEffect(() => {
    localStorage.setItem(COUNT_LOC_DATA, JSON.stringify(myTodos));
  }, [myTodos]);



  function toggleTodo(todoId, completed) {
    dispatch({
      type: ACTION.TOGGLE_TODO,
      payload: { todoId: todoId, completed: completed },
    })
  }

  function deleteTodo(todoId) {
    dispatch({
      type: ACTION.TOGGLE_TODO,
      payload: { todoId: todoId },
    })
  }
  function hideUnchecked(isChecked){
    dispatch({
      type: ACTION.HIDE_UNCHECKED,
      payload: { isChecked: isChecked },
    })
  }
  return (
    <>
    <FilterForm hideUnchecked = { hideUnchecked }/>
      <ul id="list">
        {myTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        {/* <button onClick={addNewTodo}>Add Todo</button> */}
        <button
          onClick={() =>
            dispatch({
              type: ACTION.ADD_NEW_TODO,
              payload: { value: newTodoName },
            })
          }
        >
          Add Todo
        </button>
      </div>
    </>
  );
}

export default App;
