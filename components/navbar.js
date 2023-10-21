import React from "react";

const Navbar = () => {
  return (
    <div id="navbar-container" className="background-secondary sticky top-0 w-full z-10">
      <div className="flex flex-row p-6 px-8 items-center">
        <a href="#">
          <img className="w-10 h-10 mr-4" src="./logo/a-logo.png" />
        </a>
        <h3 className="mx-2 text-[#FF7700] font-bold">
          <a href="#about-me-section">About Me</a>
        </h3>
        <h3 className="mx-2 text-[#FF7700] font-bold">
          <a href="#portfolio-section">MyPortfolio</a>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
