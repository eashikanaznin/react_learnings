import { NavLink } from "react-router-dom"
import teamMembers from "./teamMembers.json"

export function TeamNavLayout(){
  return (
    <nav>
    <ul>
      { teamMembers.map( members => (
        <li><NavLink to = {members.id} >{members.name}</NavLink></li>
      )) }
      


      {/* <li><NavLink to = "doe" >Doe</NavLink></li>
      <li><NavLink to = ".." >Route</NavLink></li>
      <li><NavLink to = "." >.Route</NavLink></li>
      <li><NavLink to = ".." relative="path">Relative .. path</NavLink></li> */}
  
    </ul>
   </nav>
  )
}