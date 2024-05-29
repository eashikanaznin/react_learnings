import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Storage } from "./pages/Storage";

function App() {

let component
 switch (window.location.pathname){

    case "/home":
      component = <Home />
      break

    case "/about":
      component =  <About />
      break

    case "/storage":
      component =  <Storage />
      break
 }

 return <>
 <nav>
  <ul>
    <li><a href="/home" >Home</a></li>
    <li><a href="/about" >About</a></li>
    <li><a href="/storage" >Storage</a></li>

  </ul>
 </nav>
 {component}
 </> 
 
}
export default App;
