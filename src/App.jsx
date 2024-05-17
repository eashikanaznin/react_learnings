import { useState } from "react";
import { MyCounter } from "./MyCounter";
import { MyCounterClass } from "./MyCounterClass";

const INITIAL_VAL = ["A", "B", "C", "B", "A", "M"];
function expensiveFunction() {
  return "slow getter";
}

function incrementCounter() {}

function App() {
  // Hooks should be used at the top of the file
  // const values = useState()
  // const name = values[0] // current value of the state
  // const setName = values[1] // Fn that allows us to set values

  // Common way to write
  //  const [ name, setName ] = useState("Eashika")

  // slow getter example, instead of this use inline function
  // renders everything everytime
  // const [name, setName ] = useState(expensiveFunction())
  // this wont render the whole thing again
  // const [name, setName ] = useState(() => {
  //   return 'John'
  // })
  const [name, setName] = useState("John");
  const [age, setAge] = useState(90);
  const [val, setVal] = useState("");
  {
    /* Array State */
  }
  const [array, setArray] = useState(INITIAL_VAL);

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }
  function removeSpecificElement(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }
  function addElementBefore(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }
  function addElementAfter(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }
  function clear() {
    setArray([]);
  }
  function reset() {
    setArray([INITIAL_VAL]);
  }
  function updateAtoH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") return "H";
        if (element === "M") return "K";
        return element;
      });
    });
  }
  function addAnyIndex(index, letter) {
    setArray(
      currentArray => {
        return [...currentArray.slice(0,index), letter, ...currentArray.slice(index)]
      }
    );
  }

  function changeName() {
    setName("Sally");
    setAge(age + 1);
  }

  return (
    // changes the name onclick H1
    // dont pass the function
    <div>
      <h1 onClick={changeName}>
        Hi {name} , your age is: {age}
      </h1>

      {/* COUNTER COMPONENT PRACTICE TEST */}
      <MyCounter />

      {/* COUNTER COMPONENT CLASS PRACTICE TEST */}
      {/* <MyCounterClass/> */}

      {/* Input */}
      <div>
        <h2>Input</h2>
        {/* controlled */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        {/* controlled by the browser */}
        <input type="text" defaultDalue={name} />
        <br />
        <br />

        {/* Array State */}
        <h2>Array state</h2>
        <button onClick={removeFirstElement}> Remove First Element </button>
        <br />
        <button onClick={() => removeSpecificElement("B")}>
          {" "}
          Remove All 'B'{" "}
        </button>
        <br />
        <button onClick={() => addElementBefore("O")}> Add Before </button>
        <br />
        <button onClick={() => addElementAfter("Z")}> Add After </button>
        <br />
        <button onClick={clear}> Clear </button>
        <br />
        <button onClick={reset}> Reset </button>
        <br />
        <button onClick={updateAtoH}> Update A to H </button>
        <br />
        <input
          type="text"
          value={val}
          onChange={(el) => setVal(el.target.value)}
        />
        <br />
        <button onClick={() => addElementBefore(val)}>
          Add input val to array
        </button>
        <button onClick={() => addAnyIndex(2, "P")}>
          Add to any index
        </button>
        <br />
        <br />
        <div>{array.join(",")}</div>
      </div>
    </div>
  );
}

export default App;
