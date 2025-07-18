import React, { useCallback, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "../styles/About.css";
import logo from "../images/logo.jpg";

const About = () => {
  const [initialized, setInitialized] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    try {
      await loadSlim(engine);
      setInitialized(true);
    } catch (error) {
      console.error("Failed to initialize particles:", error);
    }
  }, []);

  const particlesOptions = {
    fullScreen: false,
    background: {
      color: {
        value: "#0f0f0f",
      },
    },
    particles: {
      color: {
        value: "#ff3131",
      },
      links: {
        color: "#ff3131",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
      },
      number: {
        value: 30,
        density: {
          enable: true,
          area: 800
        }
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  };

  return (
    <section id="about" className="about-wrapper">
      {initialized && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="particles-container"
        />
      )}
      <div className="about-container">
        <div className="about-profile">
          <img src={logo} alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          {/* Desktop/Laptop view */}
          <p className="about-text desktop-only">
            I'm Nandhu, a passionate and curious Computer Science student with strong foundations in both software development and hardware-based systems. I enjoy building practical, real-world projects that merge intelligent software with connected hardware, and I'm always eager to explore new technologies and innovative ideas. My experience includes web development using Flask, Express.js, MongoDB, and React, as well as exploring AI, Machine Learning, and Deep Learning with Python, Google Colab, Hugging Face, and Gemini APIs. I've worked on projects such as news aggregation with AI summarization, authentication systems, and integrating AI models with web applications. On the hardware side, I've worked with ESP32, Arduino Uno and Nano, and Raspberry Pi, integrating sensors and actuators for IoT automation, real-time sensor data transmission, and remote device control using Flask APIs. I'm also interested in edge AI, TinyML, robotics, combining electronics and AI in meaningful ways. I believe in learning by doing, and my goal is to build smart systems that solve real-world problems efficiently and creatively.
          </p>
          {/* Mobile view */}
          <ul className="about-list mobile-only">
            <li>Computer Science student passionate about software and hardware.</li>
            <li>Enjoys building practical, real-world projects.</li>
            <li>Experienced in Flask, Express.js, MongoDB, React.</li>
            <li>Works with AI, ML, Deep Learning (Python, Colab, Hugging Face, Gemini APIs).</li>
            <li>Projects: news aggregation, authentication, AI model integration.</li>
            <li>Hardware: ESP32, Arduino, Raspberry Pi, IoT automation.</li>
            <li>Interested in edge AI, TinyML, robotics.</li>
            <li>Believes in learning by doing and solving real-world problems.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
