import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div className="container">
          <NavLink to="/">Home</NavLink> <NavLink to="/blog">Blog</NavLink>{" "}
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Nav;
