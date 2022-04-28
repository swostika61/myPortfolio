import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <>
        <Navigation />
      <div  style={{ minHeight: `calc(100vh - 44px)` }} className="bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
