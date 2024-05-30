import { useParams } from "react-router-dom"
// import teamMember from "../teamMembers.json"
import { useLoaderData } from "react-router-dom"

export function TeamMember(){
  // const { memberId } = useParams()
  const teamMember = useLoaderData()
  // const member = teamMembers.find( m => m.id == memberId )
  return (
    <>
    Team Member: { teamMember.name }
    </>
   
  )
}