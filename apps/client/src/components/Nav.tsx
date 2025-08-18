import { NavLink } from "react-router-dom";

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
            <NavLink to="https://github.com/daojim" target="_blank">
              GitHub
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/daojim/" target="_blank">
              LinkedIn
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
