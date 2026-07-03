'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutRingsAnimation = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.5 + i * 0.4;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring" as const, duration: 3, bounce: 0 },
          opacity: { delay, duration: 0.5 }
        }
      };
    }
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1440 800" 
        preserveAspectRatio="xMidYMid slice"
        style={{ display: 'block' }}
      >
        <g stroke="var(--accent-blue)" strokeWidth="1.5" fill="none">
          {/* Inner concentric circles */}
          <motion.circle cx="720" cy="400" r="80" custom={0} variants={draw} initial="hidden" animate="visible" />
          <motion.circle cx="720" cy="400" r="180" custom={1} variants={draw} initial="hidden" animate="visible" />
          <motion.circle cx="720" cy="400" r="280" custom={2} variants={draw} initial="hidden" animate="visible" />

        </g>
      </svg>
    </div>
  );
};

export default AboutRingsAnimation;
