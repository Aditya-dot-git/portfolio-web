import React from 'react';
import '../styles/ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "DevOps Intern",
      company: "SmartWorks Coworking Spaces Pvt. Ltd.",
      duration: "24-Oct-2024 - Present",
      description: [
        "Collaborated on live projects using ReactJS and Node.js.",
        "Gained experience with Firebase and ArgoCD.",
      ],
    },
    {
      title: "DevOps Intern",
      company: "[Company Name]",
      duration: "[Start Date] - [End Date]",
      description: [
        "Worked on implementing CI/CD pipelines using GitHub Actions and CodePipeline.",
        "Explored monitoring tools like SonarQube and New Relic.",
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
            <p><strong>{experience.company}</strong></p>
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