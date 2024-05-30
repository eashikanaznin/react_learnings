import { NavLink } from "react-router-dom";

export function Nav(){
  return(
    <nav class="top-nav">
      <div class="nav-text-large">My App</div>
      <ul class="nav-list">
      <li><NavLink to = "/posts">Posts</NavLink></li>
      <li><NavLink to = "/users">Users</NavLink></li>
      <li><NavLink to = "/todos">Todos</NavLink></li>
    </ul>
  </nav>
  )
}