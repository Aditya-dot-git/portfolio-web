// src/components/ResumeSection.js
import React, { useContext } from 'react';
import '../styles/ResumeSection.css';
import { ThemeContext } from './ThemeContext';
import { FiFileText } from 'react-icons/fi';

function ResumeSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`resume-section ${theme}`} id="resume">
      <div className="resume-card">
        <div className="resume-icon">
          <FiFileText size={80} />
        </div>
        <h2 className='Head-Text'>Resume</h2>
        <p>Click below to view or download my resume.</p>
        <a 
          href="/Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-button"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}

export default ResumeSection;
