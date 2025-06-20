import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
