import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="glitch-text">Hi, I'm <span>Aditya Jha</span></h1>
        <p className="sub-text">Crafting Software & Orchestrating DevOps Solutions</p>
        <a href="mailto:adityajhajee7889@gmail.com" className="btn">Get in Touch</a>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </section>
  );
};

export default HeroSection;
