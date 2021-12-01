import * as React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Admin: React.FC<AdminProps> = (props) => {
  const navigate = useNavigate();
  const { blogid } = useParams();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const res = await fetch(`/api/blogs/${blogid}`);
      const blog = await res.json();
      setTitle(blog.title);
      setContent(blog.content);
    })();
  }, [blogid]);

  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/blogs/${blogid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    const result = await res.json();
    navigate(`/details/${blogid}`);
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/blogs/${blogid}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      navigate('/');
    }
  }

  return (
    <main className="container">
      <section className="row">
        <div className="col-12">
          <form className="form-group p-3 mx-3">
            <label htmlFor="title">Title:</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Dummy Text"
            />
            <label htmlFor="content">Content</label>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              rows={20}
              className="form-control form-control-lg mb-2"
              placeholder="Dummy Text"
            />
            <div className="d-flex justify-content-between align-items-center">
              <Link className="btn btn-secondary btn-large" to={`/details/${blogid}`}>Go Back</Link>
              <div>
                <button
                  onClick={handleEdit}
                  className="btn btn-primary mx-2">
                  Submit Edits
                </button>
                <button
                  onClick={handleDelete}
                  className="btn btn-outline-danger mx-2">
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

interface AdminProps {}

export default Admin;
