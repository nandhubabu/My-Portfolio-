import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FlickeringGrid = ({
  className,
  squareSize = 4,
  gridGap = 6,
  color = "#ff3131",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  height = 800,
  width = 800
}) => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const cols = Math.floor(width / (squareSize + gridGap));
    const rows = Math.floor(height / (squareSize + gridGap));
    const totalSquares = cols * rows;
    
    setGrid(Array.from({ length: totalSquares }));
  }, [width, height, squareSize, gridGap]);

  return (
    <div 
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, ${squareSize}px)`,
        gap: `${gridGap}px`,
        padding: `${gridGap}px`,
      }}
    >
      {grid.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: Math.random() < flickerChance ? [maxOpacity, 0, maxOpacity] : maxOpacity,
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: squareSize,
            height: squareSize,
            backgroundColor: color,
            borderRadius: '2px'
          }}
        />
      ))}
    </div>
  );
};