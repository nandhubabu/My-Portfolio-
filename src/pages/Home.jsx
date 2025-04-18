import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "./About";
import { TextAnimate } from "../components/TextAnimate";
import { Particles } from "../components/Particles";
import "../styles/Home.css";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contacts";

const Home = () => {
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
            Web Developer & Tech Enthusiast
          </TextAnimate>
          
          <TextAnimate animation="slideUp" by="word">
            I build clean, functional, and responsive websites.
          </TextAnimate>
        </div>
      </motion.main>
      <About />
      <Skills/>
      <section id="projects">
        <Projects />
      </section>
      <Contact/>
      
    </div>
  );
};

export default Home;
