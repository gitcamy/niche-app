import React from "react";
import "./Footer.css";
import logo from "../assets/nicheLogoWhite.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-box">
          <img src={logo} alt="Niche Logo" className="footer-logo" />

          <p>A Niche Studio</p>
        </div>
        <a
          href="https://www.instagram.com/a.niche.studio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.behance.net/camerongordon7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
        <a
          href="https://pin.it/7vvTqLsjp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pinterest
        </a>

        <div className="footer-bottom">
          <p>© {currentYear} Cameron Gordon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
