import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./components/HomePage";
import PhotoAlbumStandalone from "./components/PhotoAlbumStandalone";

function App() {
  const location = useLocation();
  const isStandalone = location.pathname === "/photos-standalone";

  return (
    <div className="App">
      {!isStandalone && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photos-standalone" element={<PhotoAlbumStandalone />} />
        {/* Add other routes here as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
