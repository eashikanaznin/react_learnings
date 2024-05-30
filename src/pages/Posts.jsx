import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export function Posts() {
  const posts = useLoaderData();

  return (
    <div>
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="card-grid">
          <ul>
            {posts.post.map((post) => (
              <div className="card">
                <div className="card-header">{post.title}</div>
                <div className="card-body">
                  <div className="card-preview-text">{post.body}</div>
                </div>
                <div className="card-footer">
                  <Link className="btn" to={post.id.toString()}>
                    View
                  </Link>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
