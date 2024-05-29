import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Storage } from "./pages/Storage";

export const router = createBrowserRouter([
  { path: "/" , element: <Home />},
  { path: "/Storage" , element: <Storage />},
  { path: "/About" , element: <About />},
])


