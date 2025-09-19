// import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SiteLayout from "./layout/SiteLayout";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}

export default App;
