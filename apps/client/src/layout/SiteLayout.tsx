import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

function SiteLayout() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SiteLayout;
