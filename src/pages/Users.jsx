import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export function Users(){
  const users = useLoaderData();
  return (
    <div>
      <div className="container">
        <h1 className="page-title">Users</h1>
        <div className="card-grid"></div>
      </div>
      <ul>
        {users.map((user) => (
                  <div className="card">
                  <div className="card-header">{user.name}</div>
                  <div className="card-body">
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                  </div>
                  <div className="card-footer">
                    <Link className="btn" to={user.id.toString()}>View</Link>
                  </div>
                </div>
        ))}
      </ul>
    </div>
  );
}