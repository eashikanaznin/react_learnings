import { NavLink } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
// import teamMembers from "./teamMembers.json"

export function TeamNavLayout(){
  const teamMembers = useLoaderData()
  return (
    <nav>
    <ul>
      { teamMembers.map( members => (
        <li><NavLink to = {members.id.toString()} >{members.name} {members.id}</NavLink></li>
      )) }
      


      {/* <li><NavLink to = "doe" >Doe</NavLink></li>
      <li><NavLink to = ".." >Route</NavLink></li>
      <li><NavLink to = "." >.Route</NavLink></li>
      <li><NavLink to = ".." relative="path">Relative .. path</NavLink></li> */}
  
    </ul>
   </nav>
  )
}