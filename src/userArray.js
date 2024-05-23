import { useState } from "react";

export function userArray(initVal) {
  const [myarray, setMainArr] = useState(initVal);

  function push(newArr) {
    setMainArr((x) => [...x, newArr]);
    // setMainArr(() => {
    //   return [...myarray, newArr];
    // });
  }

  function replace(index, repVal) {
    setMainArr((x) => [...x.slice(0, index), repVal, ...x.slice(index + 1)]);
  }
  function filter(callback) {
    setMainArr((fArr) => [fArr.filter(callback)]);
  }
  function remove(index) {
    setMainArr((x) => [...x.slice(0, index),  ...x.slice(index + 1)]);
  }
  function clear() {
    setMainArr([])
  }
  function reset() {
    setMainArr(initVal)
  }

  // return { myarray, set: setMainArr, push, replace, filter };
   return { myarray, set: setMainArr, push, replace, filter, remove, clear, reset };
}
