import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const projectsData = [
    {
      id: 1,
      title: "Esp-32 Automation",
      image: "https://shorturl.at/t3jwg",
      description: "An IoT project utilizing the ESP32 microcontroller to automate tasks. Features include sensor integration and remote control capabilities.",
      githubLink: "https://github.com/nandhubabu/Esp-32-Automation",
      tags: ["IoT", "ESP32", "Automation", "Embedded Systems"]
    },
    {
      id: 2,
      title: "RFID Google Sheets Attendance",
      image: "https://shorturl.at/KAcm4",
      description: "A system that records attendance using RFID technology and logs data directly into Google Sheets for easy tracking and management.",
      githubLink: "https://github.com/nandhubabu/RFID-Google-Sheets-Attendance",
      tags: ["RFID", "Google Sheets", "Attendance System", "IoT"]
    },
    {
      id: 3,
      title: "Image Editor",
      image: "https://i.postimg.cc/pVnP5kvz/Screenshot-2025-04-18-004653.png",
      description: "A web-based image editor built with TypeScript, offering features like cropping, resizing, and applying filters to images.",
      githubLink: "https://github.com/nandhubabu/image-editor",
      tags: ["TypeScript", "React", "Image Editing", "Web App"]
    },
    {
      id: 4,
      title: "Emoji-Pidia",
      image: "https://shorturl.at/bscrG",
      description: "An application that provides information about various emojis, including their meanings and usage, built using JavaScript.",
      githubLink: "https://github.com/nandhubabu/Emoji-Pidia",
      tags: ["JavaScript", "React", "Emoji Reference", "Frontend"]
    },
    {
      id: 6,
      title: "Second Chance - RIT Hackathon",
      image: "https://shorturl.at/hRg4N",
      description: "A project developed during the RIT Hackathon, focusing on providing second chances through innovative technological solutions.",
      githubLink: "https://github.com/nandhubabu/secondChance_rit_hackathon",
      tags: ["Hackathon", "Innovation", "Social Impact"]
    },
    {
      id: 7,
      title: "Career Development",
      image: "https://shorturl.at/0zTKD",
      description: "A web application designed to assist users in planning and tracking their career growth. Features include goal setting, progress tracking, and resource recommendations.",
      githubLink: "https://github.com/nandhubabu/career-searcher",
      tags: ["JavaScript", "React", "Career Guidance", "Web App"]
    },
    {
      id: 8,
      title: "Newsphere Chat",
      image: "https://shorturl.at/8Xsg0",
      description: "A chat application that enables real-time communication among users. Incorporates features like user authentication, message history, and responsive design.",
      githubLink: "https://github.com/nandhubabu/newsphere-chat",
      tags: ["JavaScript", "React", "Socket.io", "Chat App"]
    },
    {
      id: 9,
      title: "Pond Monitor",
      image: "https://shorturl.at/PvboC",
      description: "An IoT-based system for monitoring pond water quality. Utilizes sensors to track parameters like pH, temperature, and turbidity, providing real-time data to users.",
      githubLink: "https://github.com/nandhubabu/pond_monitor",
      tags: ["IoT", "Water Quality Monitoring", "Sensors", "Embedded Systems"]
    }
  ];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  useEffect(() => {
    if (selectedProject) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="projects-section" id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 12
        }}
      >
        Projects
      </motion.h2>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              transition: { type: "spring", stiffness: 300 }
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-thumbnail">
              <motion.img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <div className="project-overlay">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  View Details
                </motion.span>
              </div>
            </div>
            <h3>{project.title}</h3>
            <div className="project-tags">
              {project.tags.map(tag => (
                <motion.span 
                  key={tag} 
                  className="tag"
                  whileHover={{ scale: 1.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {isModalOpen && selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 100
                }
              }}
              exit={{ 
                scale: 0.8, 
                opacity: 0, 
                y: 100 
              }}
              onClick={e => e.stopPropagation()}
            >
              <motion.button 
                className="close-button"
                onClick={handleModalClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
              <motion.img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="modal-image"
                loading="lazy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {selectedProject.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {selectedProject.description}
              </motion.p>
              <motion.div 
                className="modal-links"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a 
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> View Code
                </motion.a>
                {selectedProject.demoLink && (
                  <motion.a 
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;