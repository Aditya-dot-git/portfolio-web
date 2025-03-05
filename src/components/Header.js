import React, { useContext, useState } from 'react';
import '../styles/Header.css';
import { FaSun, FaMoon, FaBars, FaTimes, FaLaptopCode } from 'react-icons/fa'; 
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <FaLaptopCode size={28} /> {/* Tech/Developer-focused Icon */}
      </div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <nav>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className="theme-toggle">
        <input 
          type="checkbox" 
          className="toggle-checkbox" 
          id="theme-toggle" 
          checked={theme === 'dark'} 
          onChange={toggleTheme} 
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
