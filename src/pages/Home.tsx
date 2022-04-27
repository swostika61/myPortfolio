import React from "react";
import codeGif from "../assets/codeGirl.gif";
const Home = () => {
  return (
    <div className="px-5 py-5 flex flex-col font-footer justify-center items-center sm:flex-row sm:justify-evenly">
      <div>
        <h1 className="text-tertiary  text-7xl font-bold text-center  w-72">
          Hi! I'm Swostika.
        </h1>
        <p className="text-secondary text-4xl font-extralight font-mono">
          A Software Developer.
        </p>
      </div>
      <img src={codeGif} />
    </div>
  );
};

export default Home;
