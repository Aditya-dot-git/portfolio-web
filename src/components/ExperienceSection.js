import React, { useContext } from "react";
import "../styles/ExperienceSection.css";
import { ThemeContext } from "./ThemeContext";

const experiences = [
  {
    role: "Software Engineer",
    company: "ACSM & Co.",
    location: "Remote",
    duration: "Aug 2025 - Present",
    type: "Part-time / Consulting",
    link: "https://www.acsmco.com",
    highlights: [
      "Designed, developed, and deployed the official ACSM & Co. website from scratch with sections for Services, Clients, Team, Careers, and Company Overview.",
      "Owned full production deployment on AWS ECS Fargate using ALB, ECR, VPC, Secrets Manager, and AWS Certificate Manager, with DNS via Cloudflare.",
      "Responsible for ongoing AWS and website maintenance including upcoming features like a live Tax & Finance blog and an integrated AI-powered chatbot."
    ]
  },
  {
    role: "DevOps Intern",
    company: "SmartWorks Coworking Spaces Limited",
    location: "Gurugram, Haryana",
    duration: "Oct 2024 - Mar 2025",
    type: "Internship",
    highlights: [
      "Orchestrated AWS services (ECS Fargate, Lambda, VPC, DocumentDB, DynamoDB, Load Balancer, CodePipeline, CodeCommit, Secrets Manager) for secure and scalable deployments.",
      "Integrated SonarQube into CI/CD pipelines for continuous code quality checks and wired New Relic for application performance monitoring.",
      "Containerized applications using Docker and optimized ECS cost by analyzing CPU and memory utilization across services."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Devangles Private Limited",
    location: "Ahmedabad, Gujarat",
    duration: "Aug 2024 - Sep 2024",
    type: "Internship",
    highlights: [
      "Contributed to a project management tool by gathering requirements and documenting the technical proposal.",
      "Implemented Firebase for real-time data management and used ArgoCD to streamline application deployment workflows.",
      "Integrated Google Workspace with Okta for seamless user authentication and access management."
    ]
  },
  {
    role: "DevOps Intern",
    company: "Promact Infotech Private Limited",
    location: "Vadodara, Gujarat",
    duration: "Jan 2024 - Apr 2024",
    type: "Internship",
    highlights: [
      "Gained hands-on experience with Linux, Git, AWS, Docker, Terraform, and CI/CD tooling while contributing to deployment processes.",
      "Collaborated on deployments for key projects such as a Customer Success Platform and a Hotel Management AI Agent.",
      "Developed reusable Terraform modules to provision AWS infrastructure, streamlining and standardizing deployment workflows."
    ]
  }
];

const ExperienceSection = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";

  return (
    <section
      id="experience"
      className={`experience-section ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="experience-inner">
        <div className="experience-header">
          <span className="section-pill">Timeline</span>
          <h2 className="experience-title">Experience</h2>
          <p className="experience-subtitle">
            A snapshot of the roles where I&apos;ve applied software engineering,
            DevOps, and cloud skills to ship, automate, and maintain real-world
            systems.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={`${exp.company}-${index}`}>
              <div className="experience-marker">
                <span className="marker-dot" />
                <span className="marker-line" />
              </div>

              <article className="experience-card">
                <div className="experience-card-header">
                  <div className="experience-role-block">
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-duration">{exp.duration}</span>
                    <span className="experience-type">{exp.type}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>

                <ul className="experience-list">
                  {exp.highlights.map((item) => (
                    <li key={item} className="experience-list-item">
                      {item}
                    </li>
                  ))}
                </ul>

                {exp.link && (
                  <div className="experience-footer">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-link"
                    >
                      Visit project ↗
                    </a>
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
