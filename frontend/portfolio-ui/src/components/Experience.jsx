import React from "react";
import project3 from "../assets/Project3.png";
import project2 from "../assets/Project2.png";
import project1 from "../assets/Project1.png";
import "../assets/style/Experience.css";
import { FaArrowRight } from "react-icons/fa";

const Experience = () => {
  const projects = [
    {
      img: project1,
      role: "Traveller's Management System",
      desc: 'web-based platform designed to streamline trip planning, booking, and itinerary management for travelers and agencies.Technologies used: HTML, CSS, JavaScript, PHP, MySQL for full-stack development, ensuring responsive design, dynamic data handling, and secure database management.',
      link: "https://github.com/SURAJMP045/Travel_Management_System",
    },
    {
      img: project2,
      role: "Hotel Booking",
      desc: 'modern, responsive web application built with React that allows users to browse rooms, view details, and book accommodations seamlessly. It features an attractive UI with modular components, smooth navigation, and optimized performance for an enhanced booking experience.',
      link: "https://hotel-booking-eight-zeta.vercel.app/",
    },
    {
      img: project3,
      role: "AI-Powered Resume Builder",
      desc: 'smart web application that helps users create professional, tailored resumes instantly using AI suggestions and dynamic templates. It includes features like real-time content generation, customization options, and PDF export for a seamless resume-building experience.<mark>***//Under Process//***</mark>',
      link: "https://github.com/SURAJMP045/jobsearchapplication/",
    },
  ];

  return (
    <section id="experience">
      <h2>My Experience</h2>
      <div className="card-list">
        {projects.map((p, i) => (
          <a
            href={p.link}
            className="card-item"
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={p.img} alt={p.role} />
            <span>{p.role}</span>
            <h4 dangerouslySetInnerHTML={{ __html: p.desc }}></h4>
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
