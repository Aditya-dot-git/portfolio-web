import React, { useContext, useEffect } from "react";
import "../styles/HeroSection.css";
import { ThemeContext } from "./ThemeContext";

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {}, [theme]);
  if (!theme) {
    console.error('Theme is undefined in HeroSection');
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
      </div>
      <div className="floating-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default HeroSection;
