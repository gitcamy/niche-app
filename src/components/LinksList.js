import React from "react";
import "./LinksList.css";

const LinksList = () => {
  return (
    <div className="links-section">
      <ul className="links-list">
        <li>
          <a href="#link1">Link 1</a>
        </li>
        <li>
          <a href="#link2">Link 2</a>
        </li>
        <li>
          <a href="#link3">Link 3</a>
        </li>
        <li>
          <a href="#link4">Link 4</a>
        </li>
      </ul>
    </div>
  );
};

export default LinksList;
