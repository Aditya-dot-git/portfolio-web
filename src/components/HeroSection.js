import React, { useContext } from "react";
import "../styles/HeroSection.css";
import { ThemeContext } from "./ThemeContext";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5v-9h3v9zM6.5 8.5A1.77 1.77 0 1 1 6.5 5a1.77 1.77 0 0 1 0 3.5zM19 19h-3v-4.6c0-2.76-3-2.55-3 0V19h-3v-9h3v1.4c1.4-2.6 6-2.8 6 2.5V19z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.29 3.44 9.77 8.21 11.36.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.9 0-1.3.47-2.37 1.25-3.21-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.3 11.3 0 0 1 3-.41c1.02 0 2.06.14 3.03.41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.69.25 2.94.12 3.25.78.84 1.24 1.91 1.24 3.21 0 4.59-2.8 5.6-5.48 5.9.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58 4.77-1.59 8.21-6.07 8.21-11.36C24 5.67 18.63.3 12 .3z"/>
  </svg>
);

const HeroSection = () => {
  const { theme } = useContext(ThemeContext) || { theme: "light" };

  return (
    <section className={`hero-section ${theme}`}>
      <div className="hero-content">
        {/* LEFT */}
        <div className="hero-text">
          <span className="hero-pill">Software Engineering · DevOps</span>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="hero-name">Aditya Jha</span>
          </h1>

          <p className="hero-subtext">
            I design and develop software systems while engineering deployment
            workflows using modern DevOps practices — bridging development and
            operations to ship resilient, scalable solutions,{" "}
            <strong>
              focusing on reliability, scalability, and real production impact.
            </strong>
          </p>

          {/* FOCUS */}
          <div className="hero-focus">
            <span className="focus-label">Focus</span>
            <ul className="focus-list">
              <li>Research & Development</li>
            </ul>
          </div>

          <div className="hero-actions">
            <a href="mailto:adityajhajee7889@gmail.com" className="hero-btn primary">
              Get in Touch
            </a>
            <a href="#projects" className="hero-btn secondary">
              View Projects
            </a>
          </div>

          <div className="hero-status">
            <span className="status-dot" />
            <span>Currently exploring Software & DevOps Engineer roles</span>
          </div>
        </div>

        {/* TERMINAL */}
        <div className="hero-terminal">
          <div className="terminal-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="terminal-title">aditya@portfolio</span>
          </div>

          <div className="terminal-body">
            <div className="terminal-line t1">$ initializing environment...</div>
            <div className="terminal-line t2">$ building application modules</div>
            <div className="terminal-line t3">$ running tests & checks</div>
            <div className="terminal-line t4">$ provisioning infrastructure</div>
            <div className="terminal-line t5 success">
              ✔ system deployed successfully
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="hero-socials">
        <a className="icon linkedin" href="https://linkedin.com/in/aditya-jha05" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a className="icon github" href="https://github.com/adityajha28" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
