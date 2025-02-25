import React from 'react';
import '../styles/ResumeSection.css';
import { motion } from 'framer-motion';

function ResumeSection() {
  return (
    <motion.section className="resume"
      id="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Resume</h2>
      <p>Click below to view or download my resume.</p>
      <a href="/Resume1.pdf" target="_blank" rel="noopener noreferrer" className="cta-button">View Resume</a>
    </motion.section>
  );
}

export default ResumeSection;
