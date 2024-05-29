import { NavLink } from "react-router-dom"

export function TeamNavLayout(){
  return (
    <nav>
    <ul>
      <li><NavLink to = "john" >John</NavLink></li>
      <li><NavLink to = "doe" >Doe</NavLink></li>
      <li><NavLink to = ".." >Route</NavLink></li>
      <li><NavLink to = "." >.Route</NavLink></li>
      <li><NavLink to = ".." relative="path">Relative .. path</NavLink></li>
  
    </ul>
   </nav>
  )
}