import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div  style={{ minHeight: `calc(100vh - 44px)` }} className="bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
