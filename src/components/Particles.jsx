import React from "react";
import { motion } from "framer-motion";

export const Particles = ({ className }) => {
  const generateParticles = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2
    }));
  };

  const particles = generateParticles(150); // Increased particle count

  return (
    <div className={className}>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: 0
          }}
          animate={{
            x: [particle.initialX, particle.initialX + 100, particle.initialX - 100, particle.initialX],
            y: [particle.initialY, particle.initialY - 100, particle.initialY + 100, particle.initialY],
            opacity: [0, particle.opacity, particle.opacity, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay
          }}
          style={{
            position: "absolute",
            width: particle.size + "px",
            height: particle.size + "px",
            borderRadius: "50%",
            backgroundColor: "#ff3131"
          }}
        />
      ))}
    </div>
  );
};