import { useState, useEffect } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  // const handler = () => {
  //   console.log(name)
  // }

  useEffect(() => {
    console.log("Render");
  });

  useEffect(() => {
    console.log("Hi");
    // gets called during unmount
    return () => {
      console.log("bye");
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`My name is ${name} and I am ${age} years old.`);
    }, 1000);

    return() => {
      clearTimeout(timeout)
    }
  }, [name, age]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
