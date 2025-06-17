import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-menu">
      <div className="nav-brand">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 style={{ textDecoration: "none" }}>A Niche Studio</h2>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
