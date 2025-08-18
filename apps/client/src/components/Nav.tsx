import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Nav() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="internalNav">
            <NavLink to="/">Home</NavLink> <NavLink to="/blog">Blog</NavLink>{" "}
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="externalNav">
            <a
              href="https://github.com/daojim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Jimmy’s GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/daojim/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Jimmy’s LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
