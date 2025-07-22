import React, { useCallback, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "../styles/About.css";

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
          <img
            src="https://i.ibb.co/Xrg24NLC/IMG20241106130601-removebg-preview-removebg-preview-1.png"
            alt="Profile"
          />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p className="about-text">
            I'm Nandhu, a passionate Computer Science student with a strong foundation in software and hardware systems. I love building real-world projects that combine smart software with connected hardware, and I'm always exploring new technologies. My experience covers web development (Flask, Express.js, MongoDB, React) and AI/ML (Python, Google Colab, Hugging Face, Gemini APIs). I've built projects like news aggregation with AI, authentication systems, and AI model integration for web apps. On the hardware side, I've worked with ESP32, Arduino, and Raspberry Pi for IoT automation, sensor data, and remote device control. I'm also interested in edge AI, TinyML, and robotics. I believe in learning by doing and aim to create smart systems that solve real proble ms efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
