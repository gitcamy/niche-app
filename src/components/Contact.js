import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <p>
          An independent creative + technical service studio fit to your niche.
        </p>
        <img src="/niche_logo.png" alt="Niche Logo" className="contact-image" />
      </div>
      <div className="contact-content">
        <p>Send all inquiries to</p>
        <a href="mailto:cameron@cosashermosas.shop" className="email-link">
          cameron@cosashermosas.shop
        </a>
      </div>
    </div>
  );
};

export default Contact;
