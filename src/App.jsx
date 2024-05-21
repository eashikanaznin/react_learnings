import React from "react";
import { useState, useEffect } from "react";
import { UserList } from "./UserList";

const CUSTOM_HTML = `<h2>Another header</h2>`
function App() {
  const [items, setItems] = useState([
    { id: 1, title: " item 1" },
    { id: 2, title: " item 2" },
  ]);
  const [userApiData, setUserApiData] = useState();
  const [loading, setLoading] = useState("true");
  

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setUserApiData(data);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
      });
    // return () => {
    //   controller.abort();
    // };
  }, []);
  // let name
  let myName = "Eashika";



  return (
    <>
      {/* User list excercise */}
      {loading ? (
        "Loading...."
      ) : (
        <>
          <h1>User List</h1>
          <ul>
            {userApiData.map((user) => {
              return <UserList key={user.id} name={user.name} {...user} />;
            })}
          </ul>
        </>
      )}
      {/* practice */}
      {/* Fragments, when we dont want to use any wrapper */}
      Hello
      {myName != null && <b>, Are you {myName}?</b>}
      {items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {/* JSX array */}
            <span>{item.title}</span>
            <input type="text" />
            <div dangerouslySetInnerHTML={{__html: CUSTOM_HTML}}></div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default App;
