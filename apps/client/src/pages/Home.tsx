import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>What is this?</h1>
      <p>
        Welcome to my personal website. I'm going to use this website to blog
        about my experiences and thoughts.
      </p>
      <h1>What am I going to write about?</h1>
      <p>
        I plan to write about a variety of topics, such as the technologies I'm
        learning, video games I'm playing or have played, and my personal life.
      </p>
      <p>
        I will be posting more at <Link to="/blog">/blog</Link>
      </p>
    </>
  );
}

export default Home;
