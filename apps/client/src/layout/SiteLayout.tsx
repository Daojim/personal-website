import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function SiteLayout() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <Nav />
      </div>
      <div className="container">
        <main>
          <Outlet />
        </main>
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default SiteLayout;
