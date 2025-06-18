import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-menu">
      <div className="nav-brand">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 style={{ textDecoration: "none" }}>A Niche Studio</h2>
        </Link>
      </div>
      <button
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
