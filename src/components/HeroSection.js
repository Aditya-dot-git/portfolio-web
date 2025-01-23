import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Aditya Jha</h1>
        <p>A Passionate Software Developer and DevOps Enthusiast</p>
        <a href="mailto:adityajhajee7889@gmail.com" className="btn">Get in Touch</a>
      </div>
    </section>
  );
};

export default HeroSection;