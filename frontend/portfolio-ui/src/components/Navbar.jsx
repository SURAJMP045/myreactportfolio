import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Header.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const handleDownload = () => {
    toast.success("📄 CV Download started!", {
      position: "top-right",
      autoClose: 3000,
    });
  };
  return (
    <nav className="navbar-container">
      <div className="logo">
        <abbr title="personal portfolio">Portfolio.</abbr>
      </div>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <a href="/SURAJMP-FRESHER.pdf" download className="btn-nav"  onClick={handleDownload}>Download CV</a>
    </nav>
  );
};

export default Navbar;
