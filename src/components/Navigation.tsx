import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="bg-black h-14 py-6 px-5 flex justify-between items-center  text-center text-white">
      <div className=" text-3xl font-header font-medium text-tertiary">
        <Link to="/">
          <span className="text-secondary">Swos</span>tika
        </Link>
      </div>
      <div className="flex justify-between text-white text-lg font-medium font-sans">
        <Link
          to="/"
          className={`nav-links ${
            location.pathname == "/" ? "nav-active" : null
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-links ml-5 ${
            location.pathname == "/about" ? "nav-active" : null
          }`}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`nav-links ml-5 ${
            location.pathname == "/projects" ? "nav-active" : null
          }`}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
