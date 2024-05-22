import { useState, useEffect } from "react";
import "./style.css";
// import { MyTodoForm } from "./MyTodoForm";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addToTodo() {
    if (todoName === "") return;

    setTodoList((currenTodoList) => {
      return [
        ...currenTodoList,
        { name: todoName, completed: false, id: crypto.randomUUID() },
      ];
    });

    // empty the textfield after adding
    setTodoName("");
  }

  // toggle checkbox

  function toggleCheckBox( isChecked, inpId ){
    setTodoList(
      currenTodoList => {
        return currenTodoList.map( todoList => {
          if (todoList.id === inpId) return { ...todoList, isChecked}

          return todoList
        })
      }
    )
  }

  // delete todo
  function deleteTodo(inpId){
    setTodoList(currenTodoList => {
      return currenTodoList.filter(todoList => todo.id !== inpId)
    })
  }
  return (
    <>
      {JSON.stringify(todoList)}
      <ul id="list">
        {todoList.map((todo) => {
          return (
            <li className="list-item" key={todo.key}>
              <label className="list-item-label">
                <input
                  checked={todo.completed}
                  type="checkbox"
                  data-list-item-checkbox
                  onChange={ e => toggleCheckBox( e.target.checked, todo.id) }
                />
                <span data-list-item-text>{todo.name}</span>
              </label>
              <button data-button-delete onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <div id="new-todo-form">
        <label for="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button onClick={addToTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
