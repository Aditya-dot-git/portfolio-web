// src/components/ResumeSection.js
import React, { useContext } from "react";
import "../styles/ResumeSection.css";
import { ThemeContext } from "./ThemeContext";
import { FiFileText, FiDownload } from "react-icons/fi";

function ResumeSection() {
  const { theme } = useContext(ThemeContext);

  const resumePath = "/ADITYA_JHA-SOFTWARE_ENGINEER.pdf";

  return (
    <section
      className={`resume-section ${theme || "light"}`}
      id="resume"
    >
      <div className="resume-inner">
        <div className="resume-card">
          <div className="resume-icon-wrap">
            <div className="resume-icon-orbit" aria-hidden="true" />
            <div className="resume-icon-core">
              <FiFileText className="resume-icon" />
            </div>
          </div>

          <div className="resume-text-block">
            <span className="section-pill">Document</span>
            <h2 className="resume-title">Resume</h2>
            <p className="resume-subtitle">
              A concise snapshot of my experience across software engineering,
              DevOps, and cloud. View it in the browser or download as PDF.
            </p>

            <div className="resume-meta">
              <span className="resume-meta-pill">PDF</span>
              <span className="resume-meta-pill">Software Engineer</span>
              <span className="resume-meta-pill">Updated 2025</span>
            </div>
          </div>

          <div className="resume-actions">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button primary"
            >
              View Resume ↗
            </a>
            <a
              href={resumePath}
              download="ADITYA_JHA-SOFTWARE_ENGINEER.pdf"
              className="resume-button secondary"
            >
              <FiDownload className="resume-download-icon" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
