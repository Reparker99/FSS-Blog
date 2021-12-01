import * as React from "react";
import * as moment from "moment";
import { Link, useParams } from "react-router-dom";
import type { IBlog } from "../utils/types";
import type { ITag } from '../utils/types';

const Details: React.FC<DetailsProps> = (props) => {
  const { blogid } = useParams();
  const [blog, setBlog] = React.useState<IBlog>(null);
  const [blogtags, setBlogtags] = React.useState<ITag[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch(`/api/blogs/${blogid}`);
      const blog = await res.json();
      const res2 = await fetch(`/api/blogtags/${blogid}`);
      const blogtags = await res2.json();

      setBlog(blog);
      setBlogtags(blogtags);
    })();
  }, []);

  return (
    <main className="container">
      <section className="row">
        <div className="col-12">
          <article className="card my-2 shadow">
            <div className="card-body">
              <h1 className="card-text text-center">{blog?.title}</h1>
              <h6 className="card-text text-center text-muted">
                Written on{" "}
                <i>{moment(blog?._created).format("MMM Do, YYYY")}</i> by{" "}
                <b>{blog?.name}</b>
              </h6>
              <div className="d-flex flex-wrap justify-content-center align-items-center my-3">
                {blogtags.map(blogtag => (
                  <span className="mx-2 px-3 py-2 border border-dark" key={`blogtag-${blogtag.id}`}>{blogtag.name}</span>
                ))}
              </div>
              <div className="card-text px-md-5">
                {blog?.content.split("\n").map((para, i) => (
                  <p key={`p-block-${i}`}>{para}</p>
                ))}
              </div>
              <div className="ml-md-5 px-5 d-flex justify-content-between">
                <Link className="btn btn-outline-primary" to="/">
                  Back to Blogs
                </Link>
                <Link className="btn btn-outline-secondary" to={`/admin/${blogid}`}>
                  Admin Options
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

interface DetailsProps {}

export default Details;
