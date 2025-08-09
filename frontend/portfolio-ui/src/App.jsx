import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import ContactPage from "./components/pages/ContactPage";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Features />
              <About />
              <Education />
              <Skills />
              <Experience />
              <Contact/>
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
