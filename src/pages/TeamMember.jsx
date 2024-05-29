import { useParams } from "react-router-dom"
import teamMember from "../teamMembers.json"

export function TeamMember({ name }){
  const { memberId } = useParams()
  const member = teamMember.find( m => m.id == memberId )
  return (
    <>
    Team Member: { member.name }
    </>
   
  )
}