import React, { useContext } from "react";
import "../styles/ExperienceSection.css";
import { ThemeContext } from "./ThemeContext"; // Import theme context

const experiences = [
  {
    role: "DevOps Intern",
    company: "SmartWorks Coworking Spaces Pvt. Ltd.",
    duration: "Oct 2024 - Present",
    responsibilities: [
      "Deployed and managed AWS services (ECS Fargate, Lambda).",
      "Integrated SonarQube for code quality checks and monitoring.",
      "Containerized applications with Docker, optimizing deployments.",
      "Analyzed CPU and memory utilization to optimize resources."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Devangles Private Limited",
    duration: "Aug 2024 - Sep 2024",
    responsibilities: [
      "Contributed to a project management tool by gathering requirements.",
      "Implemented Firebase for real-time data management.",
      "Integrated Google Workspace with Okta for secure authentication."
    ]
  },
  {
    role: "DevOps Intern",
    company: "Promact Infotech Pvt. Ltd.",
    duration: "Jan 2024 - Apr 2024",
    responsibilities: [
      "Worked with Linux, Git, AWS, Docker, Terraform.",
      "Developed CI/CD pipelines using Jenkins and GitHub Actions.",
      "Implemented Infrastructure as Code with Terraform."
    ]
  }
];

const ExperienceSection = () => {
  const { theme } = useContext(ThemeContext); // Get theme from context

  return (
    <div id="experience" className={`experience-container ${theme === "dark" ? "dark-mode" : ""}`}>
      <h2 className="Head-Text" style={{fontSize: "3rem"}}>Experience</h2>
      <div className="card-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className={`duration-text ${theme === "dark" ? "dark-text" : "light-text"}`}>{exp.duration}</p>
            <ul>
              {exp.responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
