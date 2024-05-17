import { useState } from "react";

export function MyCounter() {

  const [counter, setCounter] = useState(5);
  
  function changeCounter() {
    setCounter(counter + 1);
  }


  return (
  <b onClick={changeCounter} >The Counter value {counter}</b>
  )
}
