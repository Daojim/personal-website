import { posts } from "../content/posts";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <header>
        <h1>{post.title}</h1>
      </header>
      <time dateTime="{post.date}">
        {new Date(post.date).toLocaleDateString()}
      </time>
      {post.tags && (
        <div>
          {post.tags.map((tag) => (
            <span key={tag}>
              #{tag}
              {""}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default BlogPost;
