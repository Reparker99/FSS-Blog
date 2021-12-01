import * as React from "react";
import { useNavigate } from "react-router-dom";

const Compose: React.FC<ComposeProps> = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [selectedTag, setSelectedTag] = React.useState("0");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    const result = await res.json();
    navigate(`/details/${result.id}`);
  };

  return (
    <main className="container">
      <section className="row">
        <div className="col-12">
          <form className="form-group p-3">
            <label htmlFor="title">Title:</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Dummy Text"
            />
            <label htmlFor="selected tag">Select a Tag</label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="form-control form-control-lg mb-2"
            >
              <option disabled value="0">Select a tag...</option>
              <option value="1">Test Tag</option>
              <option value="2">Another Test Tag</option>
            </select>
            <label htmlFor="content">Blog Post:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={20}
              className="form-control form-control-lg mb-2"
              placeholder="Dummy Text"
            />
            <div className="d-flex justify-content-end">
              <button
                onClick={handleSubmit}
                className="btn btn-primary btn-lg mt-3"
              >
                Write It!
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

interface ComposeProps {}

export default Compose;
