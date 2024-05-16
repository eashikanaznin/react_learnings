export function Name({name, age = 10, isAdult}){

  console.log(isAdult);
  // function Name( props )
  return (
    <div>
      <b>Name: {name} </b>
      {/* <b>Name: {props.name} </b> */}
      <b>Age: {age} </b>
    </div>    
  )

}