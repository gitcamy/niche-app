import React, { useState, useEffect } from "react";
import "./About.css";
import services from "../assets/services.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [key, setKey] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="image-container">
        <img
          src={services}
          alt={"About Niche, our services"}
          className="service-image"
        />
        <div className="image-overlay" key={key}>
          <h3>help?</h3>
        </div>
      </div>
      <div className="about-container">
        <div className="content-container-right">
          <p>Who We Are</p>
          <div className="text-box">
            <p>
              Independently run by Cameron Gordon (she/her). Cameron is a
              Designer, Artist, and Developer with a sharp eye and passion for
              creating fun and cool things.{" "}
            </p>
          </div>
        </div>
        <div className="content-container-left">
          <div className="text-box">
            <p>Our Mission</p>
          </div>

          <div className="text-box">
            <p>
              We're a creative powerhouse aimed to help brand owners, musicians,
              start-up geniuses, mom and pop coffee shops, corporate entities
              (and everything in between) become more approachable to the
              consumer eye. Good ideas are common. Great ones take
              collaboration. Let us help you think outside the box and turn your
              idea into a reality.{" "}
            </p>
          </div>
          <button className="contact-button" onClick={handleContactClick}>
            Work with us!
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
