
import { Nav } from "./Nav";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/home":
      component = <Home />;
      break;

    case "/about":
      component = <About />;
      break;

    case "/storage":
      component = <Storage />;
      break;
  }

  return (
    <>
      <Nav />
      {component}
    </>
  );
}
export default App;
