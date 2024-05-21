import { useState, useEffect } from "react";

export function Child() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setUsers(JSON.stringify(data));
      })
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  let jsx;
  if (loading) {
    jsx = "Loading";
  } else if(error != null){
    jsx = "Error";
  } else {
    jsx = users;
  }
  return <div>Hello {jsx}</div>;
}
