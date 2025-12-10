import React, { useContext } from "react";
import "../styles/HeroSection.css";
import { ThemeContext } from "./ThemeContext";

// Custom SVG Icons
const LinkedInIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-9 19H7v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm11.5 10.27h-3v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V19h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6V19z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.29 3.44 9.77 8.21 11.36.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.9 0-1.3.47-2.37 1.25-3.21-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.3 11.3 0 0 1 3-.41c1.02 0 2.06.14 3.03.41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.69.25 2.94.12 3.25.78.84 1.24 1.91 1.24 3.21 0 4.59-2.8 5.6-5.48 5.9.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58 4.77-1.59 8.21-6.07 8.21-11.36C24 5.67 18.63.3 12 .3z" />
  </svg>
);

const HeroSection = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";

  return (
    <section className={`hero-section ${theme}`}>
      {/* Background tech layers */}
      <div className="hero-bg-layer" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orbit orbit-1" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <div className="hero-pill-row">
              <span className="hero-pill">Software Engineer</span>
              <span className="hero-pill">DevOps · Cloud Native</span>
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m{" "}
              <span className="hero-name">Aditya&nbsp;Jha</span>
            </h1>

            <p className="hero-subtext">
              I build reliable backend systems and automate cloud-native
              infrastructure — blending software engineering with DevOps to
              ship faster, safer, and smarter.
            </p>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="meta-label">Focus</span>
                <span className="meta-value">
                  APIs · Microservices · CI/CD · Kubernetes
                </span>
              </div>
              <div className="hero-meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-value">India · Remote-friendly</span>
              </div>
            </div>

            <div className="hero-actions">
              <a
                href="mailto:adityajhajee7889@gmail.com"
                className="hero-btn primary"
              >
                Get in Touch
              </a>
              <a href="#projects" className="hero-btn secondary">
                View Projects
              </a>
            </div>

            <div className="hero-status-strip">
              <span className="status-dot" />
              <span>Currently exploring Software & DevOps Engineer roles</span>
            </div>
          </div>

          {/* Futuristic terminal-style card */}
          <div className="hero-terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-amber" />
              <span className="terminal-dot dot-green" />
              <span className="terminal-title">aditya@portfolio:~</span>
            </div>
            <div className="terminal-body">
              <p className="terminal-line">
                <span className="terminal-prompt">&gt;</span>{" "}
                initializing devops_pipeline
              </p>
              <p className="terminal-line">
                <span className="terminal-prompt">&gt;</span>{" "}
                deploying cloud-native_services
              </p>
              <p className="terminal-line typing">
                <span className="terminal-prompt">&gt;</span>{" "}
                monitoring&nbsp;systems
                <span className="terminal-cursor" />
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/aditya-jha05"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link linkedin"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/adityajha28"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link github"
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
