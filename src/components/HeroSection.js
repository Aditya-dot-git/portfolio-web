import React, { useContext } from "react";
import "../styles/HeroSection.css";
import { ThemeContext } from "./ThemeContext";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);

  if (!theme) {
    console.error("Theme is undefined in HeroSection");
    return null;
  }

  return (
    <section className={`hero-section ${theme}`}>
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span>Aditya Jha</span>
        </h1>
        <p className="hero-subtext">
          Crafting Software & Orchestrating DevOps Solutions
        </p>
        <a href="mailto:adityajhajee7889@gmail.com" className="hero-btn">
          Get in Touch
        </a>
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/aditya-jha05" 
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a
            href="https://github.com/adityajha28 "
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub className="social-icon github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
