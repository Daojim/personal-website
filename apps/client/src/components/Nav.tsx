import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> <NavLink to="/blog">Blog</NavLink>{" "}
        <NavLink to="/about">About</NavLink>
      </nav>
    </>
  );
}

export default Nav;
