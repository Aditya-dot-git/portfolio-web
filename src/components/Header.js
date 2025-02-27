import React, { useContext } from 'react';
import '../styles/Header.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use global state

  return (
    <header className="header">
      <div className="logo">Let's see my Portfolio</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="theme-toggle">
        <input 
          type="checkbox" 
          className="toggle-checkbox" 
          id="theme-toggle" 
          checked={theme === 'dark'} // Check if dark mode is active
          onChange={toggleTheme} // Use toggleTheme from context
        />
        <label className="toggle-label" htmlFor="theme-toggle">
          <span className="toggle-ball">
            {theme === 'dark' ? <FaMoon className="icon-moon" /> : <FaSun className="icon-sun" />}
          </span>
        </label>
      </div>
    </header>
  );
};

export default Header;
