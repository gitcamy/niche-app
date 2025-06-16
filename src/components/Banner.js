import React, { useState, useEffect } from "react";
import "./Banner.css";
import banner1 from "../assets/nicheBannerpng-01.png";
import banner2 from "../assets/nicheBannerpng-02.png";
import banner3 from "../assets/nicheBannerpng-03.png";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [banner1, banner2, banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div className="banner-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className={`banner-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <div className="banner-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
