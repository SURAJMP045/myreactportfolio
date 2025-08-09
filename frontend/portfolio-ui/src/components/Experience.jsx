import React from "react";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project1.png";
import project3 from "../assets/Project3.png";
import "../assets/style/Experience.css";
import { FaArrowRight } from "react-icons/fa";

const Experience = () => {
  const projects = [
    {
      img: project3,
      role: "Traveller",
      desc: 'A "travel" agency website serves as a crucial online presence.',
    },
    {
      img: project2,
      role: "Photographer",
      desc: 'A "design" is a UIUX expert.',
    },
    {
      img: project1,
      role: "Editor",
      desc: 'An "editor" ensures content quality and accuracy.',
    },
  ];

  return (
    <section id="experience">
      <h2>My Experience</h2>
      <div className="card-list">
        {projects.map((p, i) => (
          <a href="#" className="card-item" key={i}>
            <img src={p.img} alt={p.role} />
            <span>{p.role}</span>
            <h3>{p.desc}</h3>
            <div className="arrow">
              <FaArrowRight className="card-icon" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
