import { posts } from "../content/posts";

function Blog() {
  return (
    <>
      <h2>My Blog</h2>
      {posts.length > 0 ? (
        <div className="blog-posts">
          {posts.map((post) => (
            <article key={post.slug}>
              <h3>{post.title}</h3>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString()}
              </time>
              {post.excerpt && <p>{post.excerpt}</p>}
              {post.tags && (
                <div className="tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}{" "}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p>No blog posts yet. Check back soon!</p>
      )}
    </>
  );
}

export default Blog;
