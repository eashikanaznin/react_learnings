import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export function Post() {
  const post = useLoaderData();
  console.log(post.postComments);
  console.log("sdsdsd");

  return (
    <div>
      <div className="container">
        <h1 className="page-title">{post.post.title}</h1>
        <span className="page-subtitle">
          By: <a href="user.html">Leanne Graham</a>
        </span>
        <div>{post.post.body}</div>
        <h3 className="mt-4 mb-2">Comments</h3>
        <div className="card-stack">

        {post.postComments.map((postCom) => ( 

          <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">{postCom.email}</div>
            {postCom.body}
          </div>
        </div>

        ))}



        </div>
      </div>
    </div>
  );
}
