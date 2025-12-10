import React, { useState, useEffect, useContext } from "react";
import "../styles/Header.css";
import { ThemeContext } from "./ThemeContext";

// Futuristic tech logo (no text)
const LogoIcon = () => (
  <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
    {/* Outer hexagon frame */}
    <path
      d="M11 7L29 7L36 20L29 33L11 33L4 20L11 7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      opacity="0.85"
    />
    {/* Inner floating core */}
    <circle
      cx="20"
      cy="20"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeOpacity="0.9"
    />
    <circle
      cx="20"
      cy="20"
      r="3.5"
      fill="currentColor"
      fillOpacity="0.95"
    />
    {/* Circuit arms */}
    <path
      d="M20 10V6M20 34V30M10 20H6M34 20H30"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeOpacity="0.9"
    />
    {/* Small nodes */}
    <circle cx="20" cy="6" r="1.1" fill="currentColor" />
    <circle cx="20" cy="34" r="1.1" fill="currentColor" />
    <circle cx="6" cy="20" r="1.1" fill="currentColor" />
    <circle cx="34" cy="20" r="1.1" fill="currentColor" />
  </svg>
);

// Theme toggle icons
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 3V5.2M12 18.8V21M4.22 4.22L5.76 5.76M18.24 18.24L19.78 19.78M3 12H5.2M18.8 12H21M4.22 19.78L5.76 18.24M18.24 5.76L19.78 4.22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M20 14.5C19.2 14.8 18.36 15 17.5 15C13.91 15 11 12.09 11 8.5C11 7.64 11.2 6.8 11.5 6C8.5 6.7 6.5 9.17 6.5 12.25C6.5 16.11 9.64 19.25 13.5 19.25C16.58 19.25 19.05 17.25 20 14.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext || !themeContext.theme) {
    console.error("ThemeContext is undefined or missing 'theme' in Header");
  }

  const { theme, toggleTheme } = themeContext || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add shadow + glass effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleThemeToggle = () => {
    if (typeof toggleTheme === "function") {
      toggleTheme();
    } else {
      console.warn("toggleTheme is not defined on ThemeContext");
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo / Brand – icon only */}
          <a
            href="#top"
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <LogoIcon />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Actions: theme toggle + mobile menu */}
          <div className="header-actions">
            <div className="theme-toggle">
              <input
                type="checkbox"
                id="theme-toggle"
                className="toggle-checkbox"
                onChange={handleThemeToggle}
                checked={theme === "dark"}
                aria-label="Toggle dark mode"
              />
              <label htmlFor="theme-toggle" className="toggle-label">
                <span className="toggle-ball">
                  {theme === "dark" ? <MoonIcon /> : <SunIcon />}
                </span>
              </label>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="menu-toggle"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className={`menu-line ${isMenuOpen ? "open" : ""}`} />
              <span className={`menu-line ${isMenuOpen ? "open" : ""}`} />
              <span className={`menu-line ${isMenuOpen ? "open" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
        <nav>
          <a href="#about" onClick={handleNavClick}>
            About
          </a>
          <a href="#skills" onClick={handleNavClick}>
            Skills
          </a>
          <a href="#projects" onClick={handleNavClick}>
            Projects
          </a>
          <a href="#experience" onClick={handleNavClick}>
            Experience
          </a>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
