import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Nav.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nav = () => {
  const handleDownload = () => {
    toast.success("📄 CV Download started!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <nav className="navbar-container2">
      <div className="logo2">
        <abbr title="personal portfolio">Portfolio.</abbr>
      </div>
      <ul className="navbar2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Education</Link></li>
        <li><Link to="/">Skills</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <a
        href="/SURAJMP-FRESHER.pdf"
        download
        className="btn-nav2"
        onClick={handleDownload}
      >
        Download CV
      </a>
    </nav>
  );
};

export default Nav;
