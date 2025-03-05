import React, { useContext } from 'react';
import '../styles/ProjectsSection.css';
import { motion } from 'framer-motion';
import { FaFilm, FaAws } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

function ProjectsSection() {
  const { theme } = useContext(ThemeContext); // Access theme from context

  const projects = [
    { 
      name: 'Filmy Buzz', 
      description: "Developed a movie rating and trailer website. Implemented an intuitive user interface for easy user interaction.",
      link: 'https://filmybuzz-latestmovies.netlify.app/',
      icon: <FaFilm />, // Film icon to represent movie-related project
    },
    { 
      name: 'Deployment of Customer Success Platform', 
      description: 'Built and pushed Docker images to Amazon ECR and deployed services on ECS with secure task definitions. Automated CI/CD pipelines using GitHub Actions for seamless backend and frontend deployments. Ensured scalability and service stability through optimized AWS configurations and deployment workflows.',
      link: 'https://github.com/adityajha28/Deployment-Amandeep-CSP-',
      icon: <FaAws />, // AWS icon to represent cloud deployment project
    },
  ];

  return (
    <motion.section 
      className={`projects ${theme}`}  // Apply the theme class
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card" 
            whileHover={{ scale: 1.05 }} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="project-icon">
              {project.icon}
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target='_blank' rel="noopener noreferrer" >View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
