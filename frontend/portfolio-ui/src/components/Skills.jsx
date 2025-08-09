import React from "react";
import '../assets/style/Skills.css'

const Skills = () => {
  const skills = ["HTML5", "CSS3", "JavaScript", "React Js", "Node Js", "Express Js", "Mongo DB", "Git", "GitHub", "Figma"];

  return (
    <section id="skills" className="portfolio">
      <h3>My Skills</h3>
      <div className="filters">
        {skills.map((skill, i) => (
          <button key={i}>{skill}</button>
        ))}
      </div>
    </section>
  );
};

export default Skills;
