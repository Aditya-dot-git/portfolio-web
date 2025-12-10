import React, { useContext, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import { ThemeContext } from "./components/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Safely toggle theme classes on <body> without nuking other classes
    const body = document.body;
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(theme === "dark" ? "dark-theme" : "light-theme");
  }, [theme]);

  return (
    <div className={`App ${theme || "light"}`} id="top">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
