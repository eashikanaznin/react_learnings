import { Navigate, Outlet, createBrowserRouter, redirect, useNavigation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Storage } from "./pages/Storage";
import { Team } from "./pages/Team";
import { Nav } from "./Nav";
import { TeamMember } from "./pages/TeamMember";
import { TeamNavLayout } from "./TeamNavLayout";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      // { path: "*", element: <h3>404</h3> },
      { path: "*", element: <Navigate to = "/"/> },
      { path: "/test/*", element: <h3>TEST</h3> },
      { path: "/", element: <Home /> },
      { path: "/storage", element: <Storage />,  errorElement: <h1>Storage Error</h1> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamNav />,
        loader: ({request: {signal}}) => {
          return fetch("https://jsonplaceholder.typicode.com/users", { signal })
        },
        children: [
          { index: true, element: <Team /> },
          { path: ":memberId", 
          loader: ({ params, request: {signal} }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.memberId}`, { signal }).then( res => {
              if( res.status === 200) return res.json()
              throw redirect("/team")
            })
          },
          element: <TeamMember /> }
        ],
      },
    ],
  },
]);

function NavLayout() {
  const {state } = useNavigation()
  return (
    <>
      <Nav />
      {/* <Outlet /> */}
      { state === "loading"? <h2>Loading ...</h2> : <Outlet /> }
    </>
  );
}

function TeamNav () {
  return (
    <>
      <TeamNavLayout context = "Hi from the outlet" />
      <Outlet />
    </>
  );  
}