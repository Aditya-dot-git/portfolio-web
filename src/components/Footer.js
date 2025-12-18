import React, { useContext } from "react";
import "../styles/Footer.css";
import { ThemeContext } from "./ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext) || { theme: "light" };
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${theme || "light"}`}>
      <div className="footer-inner">
        <div className="footer-glow-line" aria-hidden="true" />

        <div className="footer-content">
          {/* Left */}
          <p className="footer-text">
            © {currentYear} <span className="footer-name">Aditya Jha</span>
          </p>

          {/* Center – Signature Watermark */}
          <div className="system-mark" aria-label="Aditya Jha system signature">
            <div className="aj-glyph">
              <span className="aj-layer base">AJ</span>
              <span className="aj-layer stroke">AJ</span>
              <span className="aj-layer glow">AJ</span>
            </div>

            <div className="mark-ring" />
            <div className="mark-scan" />
            <div className="mark-grid" />

            <div className="mark-label">
              ADITYA&nbsp;JHA<span> · SOFTWARE ENGINEER</span>
            </div>
          </div>

          {/* Right */}
          <a href="#top" className="footer-link">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
