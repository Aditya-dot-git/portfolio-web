import React from 'react';
import '../styles/SkillsSection.css';

const SkillsSection = () => {
  const skills = [
    { category: "Programming Languages", items: ["C++", "Java"] },
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "ReactJS"] },
    { category: "Databases", items: ["MySQL", "MongoDB"] },
    { category: "DevOps Tools", items: ["Linux", "Git", "GitHub", "AWS", "Docker", "Terraform", "CI/CD (GitHub Actions, CodePipeline)", "SonarQube", "New Relic"] },
    { category: "Technical Subjects", items: ["Object-Oriented Programming", "Data Structures", "Database Management", "Software Engineering", "Project Management"] },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;