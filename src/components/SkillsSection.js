import React from 'react';
import '../styles/SkillsSection.css';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGitAlt, FaLinux, FaAws, FaCuttlefish, FaJava, FaGithub 
} from 'react-icons/fa';
import { 
  SiMongodb, SiMysql, SiTerraform, SiSonarqube, SiNewrelic, SiFirebase, SiVirtualbox, 
  SiGooglecloud, SiArgo, SiOkta, SiCircleci 
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const SkillsSection = () => {
  const skills = [
    { 
      category: "Programming Languages", 
      items: [
        { name: "C++", icon: <FaCuttlefish color="#00599C" /> }, 
        { name: "Java", icon: <FaJava color="#f89820" /> }
      ] 
    },
    { 
      category: "Web Development", 
      items: [
        { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "ReactJS", icon: <FaReact color="#61DAFB" /> },
        { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> }
      ] 
    },
    { 
      category: "Databases", 
      items: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> }, 
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "DynamoDB", icon: <FaDatabase color="#DB4437" /> }, 
        { name: "Firestore", icon: <SiFirebase color="#FFCA28" /> }
      ] 
    },
    { 
      category: "DevOps & Cloud", 
      items: [
        { name: "Linux", icon: <FaLinux color="#FCC624" /> },
        { name: "VirtualBox", icon: <SiVirtualbox color="#183A61" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#181717" /> },
        { name: "AWS", icon: <FaAws color="#FF9900" /> },
        { name: "Google Cloud", icon: <SiGooglecloud color="#4285F4" /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "Terraform", icon: <SiTerraform color="#623CE4" /> },
        { name: "SonarQube", icon: <SiSonarqube color="#4E9BCD" /> },
        { name: "NewRelic", icon: <SiNewrelic color="#008C99" /> },
        { name: "CI/CD", icon: <SiCircleci color="#343434" /> },
        { name: "ArgoCD", icon: <SiArgo color="#EF6B20" /> },
        { name: "Okta", icon: <SiOkta color="#007DC1" /> }
      ] 
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <div className="skill-items">
              {skillCategory.items.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
