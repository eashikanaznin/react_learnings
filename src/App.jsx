import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.inoutRef = React.createRef()
  }
  componentDidMount(){
    this.inoutRef.current.focus()
  }
  render() {
    return (
      <>
        Name:{" "}
        <input
        ref = { this.inoutRef }
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </>
    );
  }
}

// import { useState, useEffect, useRef } from "react";

// function App() {
//   // prints without rendering
//   const inputRef = useRef();

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);
//   return <input type="text" ref={inputRef} />;
// }

export default App;
