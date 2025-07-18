import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNode, 
  FaPython, 
  FaAws, 
  FaRProject, // Changed from FaDocker
  FaGit,
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3,
  SiMongodb, 
  SiArduino, // Changed from SiPostgresql
  SiFirebase, 
  SiNextdotjs as SiNextJs, // Renamed for clarity
  SiTensorflow, // Added for ML/Data Analytics
  SiPandas, // Added for Data Analytics
  SiScikitlearn, // Added for ML
  SiTableau // Added for Data Visualization
} from "react-icons/si";
import "../styles/Skills.css";

const skillIcons = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Node.js", icon: FaNode, color: "#339933" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Arduino", icon: SiArduino, color: "#00979D" }, // Changed from PostgreSQL
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "R", icon: FaRProject, color: "#276DC3" }, // Changed from Docker
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" }, // Added
  { name: "Pandas", icon: SiPandas, color: "#150458" }, // Added
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" }, // Added
  { name: "Tableau", icon: SiTableau, color: "#E97627" }, // Added
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Next.js", icon: SiNextJs, color: "#ffffff" } // Changed color for better visibility
];

const Skills = () => {
  const centerIcon = { name: "React", icon: FaReact, color: "#61DAFB" };
  const innerOrbit = skillIcons.slice(1, 6);    // Increased to accommodate more skills
  const middleOrbit = skillIcons.slice(6, 12);  // Increased for data analytics
  const outerOrbit = skillIcons.slice(12);      // Rest of the skills

  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </motion.h2>
      <div className="skills-container">
        {[
          { orbit: outerOrbit, className: 'outer-orbit', radius: window.innerWidth <= 768 ? 150 : 225, duration: 30 },
          { orbit: middleOrbit, className: 'middle-orbit', radius: window.innerWidth <= 768 ? 110 : 175, duration: 25 },
          { orbit: [...innerOrbit, centerIcon], className: 'inner-orbit', radius: window.innerWidth <= 768 ? 70 : 125, duration: 20 }
        ].map((orbitData, orbitIndex) => (
          <motion.div 
            key={orbitIndex}
            className={`orbit-wrapper ${orbitData.className}`}
            animate={{ 
              rotate: orbitIndex % 2 === 0 ? 360 : -360
            }}
            transition={{ 
              duration: orbitData.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {orbitData.orbit.map((skill, index) => (
              <RenderIcon 
                key={skill.name}
                skill={skill} 
                index={index} 
                total={orbitData.orbit.length} 
                radius={orbitData.radius}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const RenderIcon = ({ skill, index, total, radius }) => {
  const angle = (index / total) * Math.PI * 2;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  // Responsive icon size - increased for mobile and tablet
  let iconSize = 35;
  if (window.innerWidth <= 480) {
    iconSize = 70; // Mobile (was 50)
  } else if (window.innerWidth <= 900) {
    iconSize = 55; // Tablet (was 42)
  }

  return (
    <motion.div
      className="skill-icon"
      data-skill={skill.name}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1
      }}
    >
      <skill.icon size={iconSize} color={skill.color} />
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
};

export default Skills;
