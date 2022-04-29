import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary min-h-11 flex flex-col justify-between items-center text-sm px-5 py-3 text-tertiary font-footer sm:flex-row">
      <div className="flex flex-col">
        <p>&copy; Swostika Lamichhane. All Rights Reserved.</p>
        <p>Developed by Swostika</p>
      </div>
      <div className="flex items-center">
        <a href="https://github.com/swostika61" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/swostikalamichhane/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
