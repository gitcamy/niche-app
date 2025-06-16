import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-menu">
      <div className="nav-brand">
        <h2>A Niche Studio</h2>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#work">Work</a>
        </li>
        {/* <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
