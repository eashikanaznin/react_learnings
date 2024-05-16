import React from "react"
import { TodoList } from "./TodoList"
import { TodoListClass } from "./TodoListClass"
import { Name } from "./Name"
import { TodoChecklist } from "./TodoChecklist"
import "./style.css";
import user from "./user.json";
import img from "./sample.png";


function App() {

  // // JXS is XML version of JS
  // // camelcased except data ans aria attr
  // // wrapped by {} is JS code


  // // return array / string
  // // return [1,2,3]

  // const myCustomlbl = <label htmlFor="inputId">TEST</label>
  // return  (
  // // <h1 id="5" className="pink" style={{backgroundColor: "blue"}}>
  // //  {2+2}
  // // </h1>
  
  // // Practice task 
  // <div className="large" id="largeDiv">
  //   {myCustomlbl}
  //   <input id="inputId" type="number" defaultValue="3" />
  // </div>

  // )

  // return React.createElement("h1", {'id': "5"}, "Hello World") 


  return (
    <div>
      {/* <h1>Todo List</h1> */}
      <h1>Todo List</h1>

      <Name name="My Cus name 1" age={50} isAdult={true} />
      <Name name="My Cus name 2" isAdult={false} />

      <AnotherName/>

      <TodoList>
        <span>child name</span>
      </TodoList>

      <TodoListClass fruitTitle = "Mango">
        <li>Apple</li>
      </TodoListClass>

      {/* checkbox example */}
      <TodoChecklist isComplete="true">
        Jane
      </TodoChecklist>

      {/*  Rendering json */}
      <div>{JSON.stringify(user)}</div>

      {/*  Rendering image */}
      <div><img src={img}/></div>
      
    </div>

  )
  
}

// Keeping component in the same file
class AnotherName extends React.Component {
  render(){
    return <b> Naznin</b>
  }
}
export default App
