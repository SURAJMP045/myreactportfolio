import React from "react";
import aboutImage from "../assets/final-about.png";
import "../assets/style/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="left">
        <img src={aboutImage} alt="About" />
      </div>
      <div className="right">
        <h4>Who am I?</h4>
        <p>
          I am a passionate and dedicated Computer Science student with a strong
          interest in web development. I specialize in building responsive and
          user-friendly websites using HTML, CSS, JavaScript, and modern
          frameworks like React. Through academic projects and self-learning,
          I’ve gained hands-on experience in both front-end and back-end
          development.
        </p>
        <p>
          As a quick learner with a curiosity for emerging technologies, I’m
          always looking to improve my skills and stay updated with the latest
          industry trends. I’m actively seeking opportunities to contribute to
          real-world projects and grow as a full-stack developer. I believe in
          writing clean, efficient code and designing intuitive interfaces that
          offer seamless user experiences.
        </p>
        <p>
          I’m excited to bring my creativity, technical knowledge, and
          enthusiasm to a professional environment where I can learn from
          experienced developers and contribute meaningfully to the team.
        </p>
        <Link to="/contact" className="btn">
          Hire Me
        </Link>
      </div>
      <hr />
    </section>
  );
};

export default About;
