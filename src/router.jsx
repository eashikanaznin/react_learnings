import { Outlet, createBrowserRouter, Navigate } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { Nav } from "./Nav";
import { Post } from "./pages/Post";
import { postLoader } from "./apiCalls";




export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "*", element: <h3>404 Not Found</h3> },
      { path: "/", element: <Navigate to="/posts" /> },
      {
        path: "/posts",
        loader: postLoader,
        element: <Posts />,
      },
      {
        path: "/posts/:postId",
        loader: postLoader,
        element: <Post />,
      },
      {
        path: "/users",
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/users", { signal });
        },
        element: <Users />,
      },
      {
        path: "/todos",
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/todos", { signal });
        },
        element: <Todos />,
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
// src/loaders.js

// export const commentLoader = async ({ params, request: { signal } }) => {
//   const { postId } = params;

//   const postResponse = await fetch(`http://127.0.0.1:3000/posts/${postId}`, { signal });
//   const post = await postResponse.json();

//   const userResponse = await fetch(`http://127.0.0.1:3000/users/${post.userId}`, { signal });
//   const user = await userResponse.json();

//   return { post, user };
// };

