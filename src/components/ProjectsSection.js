import React from 'react';
import '../styles/ProjectsSection.css';
import { motion } from 'framer-motion';
import { FaDocker, FaCloud, FaTools } from 'react-icons/fa'; // Add DevOps-related icons

function ProjectsSection() {
  const projects = [
    { 
      name: 'Image Processing App', 
      description: 'Serverless app using AWS Lambda for efficient image processing.',
      link: '#',
      icon: <FaCloud />,
      animation: { rotate: 360 } // Example animation for cloud project
    },
    { 
      name: 'Portfolio Website', 
      description: 'Interactive portfolio built with ReactJS and deployed via CI/CD pipelines.',
      link: '#',
      icon: <FaTools />,
      animation: { scale: 1.1 } // Slight scaling effect for CI/CD projects
    },
    { 
      name: 'DevOps Dashboard', 
      description: 'Automates CI/CD workflows and integrates monitoring tools like Jenkins, Docker.',
      link: '#',
      icon: <FaDocker />,
      animation: { x: 20, opacity: 0.8 } // Sliding effect for automation-based projects
    },
  ];

  return (
    <motion.section className="projects"
      id="projects"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2>DevOps Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card" 
            whileHover={{ scale: 1.05 }} 
            animate={project.animation}
            transition={{ type: 'spring', stiffness: 80 }}
          >
            <div className="project-icon">
              {project.icon}
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
