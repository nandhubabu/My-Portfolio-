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
          <p>
            I'm Nandhu, a passionate and curious Computer Science student with strong foundations in both software development and hardware-based systems. I enjoy building practical, real-world projects that merge intelligent software with connected hardware, and I'm always eager to explore new technologies and innovative ideas.
          </p>
          <p>
            On the software side, I have hands-on experience in web development using Flask, Express.js, MongoDB, and React, and I'm continuously learning to create full-stack applications. I'm also exploring AI, Machine Learning, and Deep Learning, using tools like Python, Google Colab, and LangChain with Hugging Face and Gemini APIs. I've worked on projects involving news aggregation with AI summarization, authentication systems, and AI model integration with web apps.
          </p>
          <p>
            On the hardware side, I've worked with devices like the ESP32, Arduino Uno and Nano, and Raspberry Pi, integrating various sensors and actuators. My projects include IoT-based automation, real-time sensor data transmission to web servers, and remote control of devices using Flask APIs. I'm also diving into areas like edge AI, TinyML, robotics, and signal sniffing, combining electronics and AI in meaningful ways.
          </p>
          <p>
            I believe in learning by doing, and my goal is to build smart systems that solve real-world problems efficiently and creatively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;