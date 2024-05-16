import React from "react";


// used same way as normal component
export class TodoListClass extends React.Component {
  render(){
    return(
      <ul>
        <li>{ this.props.fruitTitle }</li>
        <li>Orange</li>
        {this.props.children}
      </ul>
    )
  }
}