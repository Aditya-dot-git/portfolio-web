import React from 'react';
import '../styles/ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "DevOps Intern",
      company: "SmartWorks Coworking Spaces Pvt. Ltd.",
      location: "Gurugram, Haryana",
      duration: "Oct 2024 - Present",
      description: [
        "Deployed and managed AWS services (ECS Fargate, Lambda, VPC, DocumentDB, etc.).",
        "Integrated SonarQube for code quality checks and New Relic for monitoring.",
        "Containerized applications with Docker, optimizing cloud performance.",
        "Analyzed CPU and memory utilization to optimize Amazon ECS costs.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Devangles Private Limited",
      location: "Ahmedabad, Gujarat",
      duration: "Aug 2024 - Sep 2024",
      description: [
        "Contributed to a project management tool by gathering requirements.",
        "Implemented Firebase for real-time data management and ArgoCD for automation.",
        "Integrated Google Workspace with Okta for secure authentication.",
      ],
    },
    {
      title: "DevOps Intern",
      company: "Promact Infotech Pvt. Ltd.",
      location: "Vadodara, Gujarat",
      duration: "Jan 2024 - Apr 2024",
      description: [
        "Worked with Linux, Git, AWS, Docker, Terraform, and CI/CD tools.",
        "Assisted in deploying key projects like the Customer Success Platform.",
        "Developed reusable Terraform modules for AWS infrastructure.",
      ],
    },
    {
      title: "Tech Intern",
      company: "SmartWorks Coworking Spaces Pvt. Ltd.",
      location: "Gurugram, Haryana",
      duration: "Jun 2023 - Jul 2023",
      description: [
        "Built an interactive front-end with React, improving UI functionality.",
        "Collaborated in agile development, resolving bugs and optimizing performance.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3>{experience.title}</h3>
            <p><strong>{experience.company}</strong> - {experience.location}</p>
            <p>{experience.duration}</p>
            <ul>
              {experience.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
