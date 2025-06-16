import React from "react";
import "./HomePage.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import LinksList from "./LinksList";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Banner />
      <LinksList />
    </div>
  );
};

export default HomePage;
