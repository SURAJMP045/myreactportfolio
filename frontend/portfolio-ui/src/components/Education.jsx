import React from "react";
import medalIcon from "../assets/medal.png";
import "../assets/style/Education.css";

const Education = () => {
  const educationData = [
    { 
      year: "2021", 
      degree: "Secondary school certificate", 
      place: "Chakravarthy PU College",
      details: "Graduated with distinction in Science stream."
    },
    { 
      year: "2025", 
      degree: "Bachelor of Engineering", 
      place: "SDIT",
      details: "Specialized in Computer Science, with a focus on UI/UX design."
    },
  ];

  return (
    <section id="education">
      <h3 className="section-p1">My Education</h3>
      <div className="education-container">
        {educationData.map((edu, i) => (
          <div className="education-card" key={i}>
            <div className="education-inner">
              <div className="education-front">
                <img src={medalIcon} alt="medal" style={{ height: "25px" }} />
                <div className="education-text">
                  <p className="year">{edu.year}</p>
                  <p className="college">{edu.degree}</p>
                  <p className="place">{edu.place}</p>
                </div>
              </div>
              <div className="education-back">
                <h4>{edu.degree}</h4>
                <p>{edu.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
