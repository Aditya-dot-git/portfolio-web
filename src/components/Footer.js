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
          <p className="footer-text">
            © {currentYear} <span className="footer-name">Aditya Jha</span>. All rights reserved.
          </p>

          <div className="footer-meta">
            <span className="footer-pill">
              Crafted with React, DevOps &amp; Coffee
            </span>
            <a href="#top" className="footer-link">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
