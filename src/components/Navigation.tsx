import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="bg-primary h-11 flex justify-between items-center px-3 text-center text-white">
      <div className=" text-2xl font-header font-medium text-tertiary">
        <Link to="/"><span className="text-secondary">Swos</span>tika</Link>
      </div>
      <div className="flex justify-between text-lg font-medium font-sans">
        <Link to="/">Home</Link>
        <Link to="/about" className="ml-5">About</Link>
        <Link to="/contact" className="ml-5">Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;
