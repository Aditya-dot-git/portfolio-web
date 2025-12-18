import React, { useContext } from "react";
import "../styles/SkillsSection.css";
import { ThemeContext } from "./ThemeContext";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
  FaJava,
  FaGithub,
  FaDatabase,
  FaNodeJs
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTerraform,
  SiSonarqube,
  SiNewrelic,
  SiFirebase,
  SiVirtualbox,
  SiGooglecloud,
  SiArgo,
  SiOkta,
  SiCircleci,
} from "react-icons/si";

const SkillsSection = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: <FaJava /> },
        
      ],
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "ReactJS", icon: <FaReact /> },
        { name: "NodeJS", icon: <FaNodeJs /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "DynamoDB", icon: <FaDatabase /> },
        { name: "Firestore", icon: <SiFirebase /> },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "Linux", icon: <FaLinux /> },
        { name: "VirtualBox", icon: <SiVirtualbox /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Google Cloud", icon: <SiGooglecloud /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "SonarQube", icon: <SiSonarqube /> },
        { name: "New Relic", icon: <SiNewrelic /> },
        { name: "CI/CD", icon: <SiCircleci /> },
        { name: "Argo CD", icon: <SiArgo /> },
        { name: "Okta", icon: <SiOkta /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`skills-section ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      {/* Background tech layer via ::before / ::after in CSS */}

      <div className="skills-inner">
        <div className="skills-header">
          <span className="section-pill">Stack &amp; Tools</span>
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">
            A snapshot of the languages, frameworks, and DevOps tools I use to
            design, build, deploy, and monitor modern systems.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.category}
              className="skill-category"
              style={{ "--category-index": index }}
            >
              <div className="skill-category-header">
                <span className="skill-category-indicator" />
                <h3>{skillCategory.category}</h3>
              </div>
              <div className="skill-items">
                {skillCategory.items.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <span className="skill-icon">{skill.icon}</span>
                    <p className="skill-name">{skill.name}</p>
                    <span className="skill-glow" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
