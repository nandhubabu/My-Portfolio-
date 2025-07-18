import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFileDownload } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import About from "./About";
import { TextAnimate } from "../components/TextAnimate";
import { Particles } from "../components/Particles";
import "../styles/Home.css";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contacts";
import Footer from "../components/Footer";

const Home = () => {
  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <div className="home-wrapper">
      <Particles className="particles" />
      <Navbar />
      <motion.main 
        id="home"
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="home__content">
          <TextAnimate animation="slideUp" by="word">
            Hello, I'm Nandhu
          </TextAnimate>
          
          <TextAnimate animation="slideUp" by="word">
            Software Developer & Tech Enthusiast
          </TextAnimate>
          
          <TextAnimate animation="slideUp" by="word">
            I build clean, functional, and responsive projects.
          </TextAnimate>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="https://github.com/nandhubabu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="social-button github"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://in.linkedin.com/in/nandhu-babu-b25a87322?trk=people-guest_people_search-card"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="social-button linkedin"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="social-button whatsapp"
            >
              <FaWhatsapp />
            </motion.a>

            <motion.button
              onClick={handleResumeDownload}
              className="resume-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFileDownload /> Resume
            </motion.button>
          </motion.div>
        </div>
      </motion.main>
      <About />
      <Skills/>
      <section id="projects">
        <Projects />
      </section>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
