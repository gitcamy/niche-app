import React from "react";
import "./LinksList.css";

const LinksList = () => {
  const items = [
    {
      name: "Eureka Investments",
      description: "Branding, Web Design, and Development",
      date: "2025",
      link: "https://www.investeureka.com",
    },
    {
      name: "InteliGente",
      description: "Branding, Web Design, and Development",
      date: "2024",
      link: "https://www.inteligente.io/",
    },
    {
      name: "Cosas Hermosas",
      description: "Lead Creative Design, Web Development",
      date: "2022",
      link: "https://www.cosashermosas.shop",
    },
    {
      name: "Really Nice Photos",
      description: "UI Design and Web Development",
      date: "2023",
      link: "/photos-standalone",
    },
  ];

  // Sort items by date descending
  const sortedItems = items.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="links-section" id="work">
      <ul className="links-list">
        {sortedItems.map((item, index) => {
          return (
            <li key={index} className="list-item">
              <a
                href={item.link}
                className="list-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="list-description">{item.description}</span>
                <span className="list-name">{item.name}</span>
                <span className="list-date">{item.date}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinksList;
