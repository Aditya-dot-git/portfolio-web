import React, { useContext } from "react";
import "../styles/ProjectsSection.css";
import { motion } from "framer-motion";
import { FaFilm, FaAws, FaGlobeAsia } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

function ProjectsSection() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";

  const projects = [
    {
      name: "Filmy Buzz",
      icon: <FaFilm />,
      tag: "Frontend · API Integration",
      description:
        "A movie rating and trailer discovery website built with ReactJS and TMDB API, delivering real-time movie data with an intuitive UI.",
      bullets: [
        "Integrated TMDB API to fetch live movie details, ratings, and trailers.",
        "Built a responsive ReactJS + CSS interface optimized for smooth browsing.",
        "Implemented search and listing views to help users explore movies quickly."
      ],
      link: "https://filmybuzz-latestmovies.netlify.app/",
      linkLabel: "View Live Project"
    },
    {
      name: "Deployment of Customer Success Platform",
      icon: <FaAws />,
      tag: "DevOps · AWS · CI/CD",
      description:
        "Production-ready deployment of a ReactJS & Node.js Customer Success Platform on AWS with containerization and CI/CD automation.",
      bullets: [
        "Containerized frontend and backend using Docker and pushed images to Amazon ECR.",
        "Deployed services on Amazon ECS (EC2) with secure task definitions and load balancing.",
        "Automated CI/CD pipelines with GitHub Actions to streamline deployments, improve reliability, and reduce manual work."
      ],
      link: "https://github.com/adityajha28/Deployment-Amandeep-CSP-",
      linkLabel: "View Deployment Repo"
    },
    {
      name: "ACSM & Co. Official Website",
      icon: <FaGlobeAsia />,
      tag: "Full Stack · AWS Fargate",
      description:
        "Designed, developed, and deployed the official website for ACSM & Co. (CA firm), delivering a complete digital business presence.",
      bullets: [
        "Built the website from scratch with sections for Services, Clients, Team, Careers, and Company Overview.",
        "Deployed on AWS ECS Fargate using Application Load Balancer, ECR, VPC, Secrets Manager, and AWS Certificate Manager with DNS via Cloudflare.",
        "Own ongoing AWS and website maintenance, including upcoming Tax & Finance blog and an AI-powered chatbot."
      ],
      link: "https://www.acsmco.com",
      linkLabel: "Visit acsmco.com"
    }
  ];

  return (
    <motion.section
      id="projects"
      className={`projects-section ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 60 }}
    >
      <div className="projects-inner">
        <div className="projects-header">
          <span className="section-pill">Selected Work</span>
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            A mix of frontend, full-stack, and DevOps projects where I combine
            React, cloud, and automation to ship real-world solutions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="project-card"
              whileHover={{ y: -6, scale: 1.02 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="project-card-inner">
                <div className="project-header-row">
                  <div className="project-icon-wrapper">
                    <div className="project-icon">{project.icon}</div>
                  </div>
                  <div className="project-heading">
                    <h3>{project.name}</h3>
                    <span className="project-tag">{project.tag}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <ul className="project-bullets">
                  {project.bullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                <div className="project-footer">
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel} ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
