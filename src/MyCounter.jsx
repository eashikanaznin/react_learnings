import { useReducer } from "react"

const ACTION = {
  "INCREMENT":"INCREMENT",
  "DECREMENT":"DECREMENT",
  "RESET":"RESET",
  "CHANGE_COUNT":"CHANGE_COUNT",
}
function reducer(count, action){
  switch(action.type){
    case "DECREMENT":
    return count - 1
    case "INCREMENT":
    return count + 1
    case "RESET":
    return 0
    case "CHANGE_COUNT":
    return count + action.payload.value
  }
  
}
export function MyCounter({ initVal = 0 }){
  const [count, dispatch] = useReducer( reducer, initVal)
  return (
    <>
    <button onClick={()=> dispatch({ type: ACTION.DECREMENT })}>-</button>
    {count}
    <button onClick={()=> dispatch({ type: ACTION.INCREMENT })}>+</button>
    <button onClick={()=> dispatch({ type: ACTION.RESET })}>RESET</button>
    <button onClick={()=> dispatch({ type: ACTION.CHANGE_COUNT, payload: { value : 6} })}>+6</button>
    </>
  )
}

