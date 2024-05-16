import React from "react"
import { UserData } from "./UserData"
import { UserDataClass } from "./UserDataClass"

import "./user.css";
import user from "./user.json";


function App() {

 
  return (

  <div>
    <UserData name={user.name} age={user.age} phoneNumber={user.phoneNumber} address={user.address} />
    <UserDataClass name={user.name} age={user.age} phoneNumber={user.phoneNumber} address={user.address} />
  </div>
  )
  

}
export default App
