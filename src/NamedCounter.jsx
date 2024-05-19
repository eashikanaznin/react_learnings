import { useState, useEffect } from "react";

let globalVar = 0

export function NamedCounter() {

  const [name, setName] = useState("Asmani");
  const [age, setAge] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  // console.log('PNK')
  const handler = () => {
    setWidth(window.innerWidth)
    console.log('PNK')
  }
  useEffect(() => {

    // document.title = name
    // console.log('Age has changed', age)
    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  // }, [ name, age, width])
   }, [ width])

  // // Only on mount
  // useEffect(() => {
  //   console.log('Mount')
  // }, [])

  return (
    <div>
      {/* controlled */}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br/ >
      <br/ >
      <button onClick={() => setAge(currentAge => currentAge-1) }>-</button>
      {age}
      <button onClick={() => setAge(currentAge => currentAge+1)}>+</button>
      <h2>My name is: {name} and I am {age} years old</h2>

      {width}
    </div>
  );
}
