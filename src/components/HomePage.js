import React from "react";
import "./HomePage.css";
import Banner from "./Banner";
import LinksList from "./LinksList";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <LinksList />
    </div>
  );
};

export default HomePage;
