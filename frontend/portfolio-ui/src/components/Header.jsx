import React from "react";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import GmailIcon from "../assets/gmail.png"
import profilePic from "../assets/Group 32.png";
import Navbar from "./Navbar"; 
import "../assets/style/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="hero" id="home">
      <Navbar />
      <div className="hero-content">
        <div className="left">
          <h3>Hello, I'm</h3>
          <h1>SURAJ M P</h1>
          <p>
            A <span className="highlight">Web Developer</span> From{" "}
            <span className="highlight">Bengaluru.</span>
            <br />
            I make complex code into simple.
          </p>
          <div className="social-links">
            <Link to="/about" className="btn">About Me</Link>
            <a href="https://github.com/SURAJMP045">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/surajmp045">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="mailto:surajmp045@gmail.com">
              <img src={GmailIcon} alt="Gmail" />
            </a>
          </div>
        </div>
        <div className="right">
          <img src={profilePic} className="profile-pic" alt="SURAJ M P" />
        </div>
      </div>
    </header>
  );
};

export default Header;
