import React from "react";
import codeGif from "../assets/codeGirl.gif";
import SplitText from "../components/SplitText";

const Home = () => {
  return (
    <div className=" h-screen px-5 py-5 flex flex-col font-footer justify-center items-center sm:flex-row sm:justify-evenly">
      <div className="my-8">
        <h1 className="text-tertiary text-7xl font-bold text-center w-full sm:w-72 ">
          Hi! I'm Swostika.
        </h1>

        <p className="bounce text-secondary text-3xl text-center font-extralight mt-3 w-full  font-mono sm:text-4xl">
          <SplitText copy="I Am A Software Developer." role="heading" />
        </p>
      </div>
      <img src={codeGif} />
    </div>
  );
};

export default Home;
