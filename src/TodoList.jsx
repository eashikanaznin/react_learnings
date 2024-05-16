export function TodoList({ children }) {
// export function TodoList(props) {
  // A custom component must start with a capital letter
  return (
    <ul>
      {/* <li>  {props.children} </li> */}
      <li> {children} </li>
      <li>test 2</li>
      <li>test 3</li>
    </ul>
  )
}