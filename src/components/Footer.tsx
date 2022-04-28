import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary min-h-11 flex justify-between items-center text-sm px-5 py-3 text-tertiary font-footer ">
      <div className="flex flex-column justify-center">
        <p>&copy; Swostika Lamichhane. All Rights Reserved.</p>
        <p>Developed by Swostika</p>
      </div>
      <div className="flex items-center">
        <Link to="https://github.com/swostika61" target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
