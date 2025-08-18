import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function SiteLayout() {
  return (
    <>
      <Header />
      <Nav />

      <main id="main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SiteLayout;
