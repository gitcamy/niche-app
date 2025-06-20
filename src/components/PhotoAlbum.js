import React, { useState, useEffect } from "react";
import "./PhotoAlbum.css";

const importAll = (r) =>
  r.keys().map((key) => ({
    src: r(key),
    alt: key.replace("./", "").replace(/\.[^/.]+$/, ""), // filename as alt
  }));

const photos = importAll(
  require.context("../assets/photos", false, /\.(jpe?g|png|gif)$/)
);

const PhotoAlbum = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="photo-album">
      <h1>Really Nice Photos</h1>
      <div className="photo-grid">
        {photos.map((photo, idx) => (
          <img
            key={idx}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="photo-item"
          />
        ))}
      </div>
      {showButton && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default PhotoAlbum;
