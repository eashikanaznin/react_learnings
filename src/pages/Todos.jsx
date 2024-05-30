import { useLoaderData } from "react-router";

export function Todos(){
  const todos = useLoaderData();
  return (
    <div className="container">
    <h1 className="page-title">Todos</h1>
    <ul>
    {todos.map((todo) => (
      <li className ={ todo.completed ? "strike-through": "" } >{todo.title}</li>
    ))}
    </ul>
  </div>
  )
}