'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './GridBackground.module.css';

const GridBackground = () => {
  // Responsive columns
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop: 7 columns, Mobile: 5 columns
  const columns = isMobile 
    ? [0.23, 0.23, 0.08, 0.23, 0.23] 
    : [0.11, 0.13, 0.13, 0.26, 0.13, 0.13, 0.11];

  // Calculate horizontal positions (percentages)
  let currentPos = 0;
  const verticalLines = [0];
  columns.forEach(col => {
    currentPos += col * 100;
    verticalLines.push(currentPos);
  });

  return (
    <div className={styles.container}>
      <svg className={styles.svg} width="100%" height="100%" preserveAspectRatio="none">
        {/* Vertical Lines */}
        {verticalLines.map((x, i) => {
          let xPos = `${x}%`;
          if (!isMobile) {
            if (i === 3) xPos = `calc(${x}% - 70px)`;
            if (i === 4) xPos = `calc(${x}% + 70px)`;
          }

          return (
            <motion.line
              key={`v-${i}`}
              x1={xPos}
              y1="0"
              x2={xPos}
              y2="100%"
              stroke="var(--grid-line)"
              strokeWidth={isMobile ? "1" : "1.5"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 3.0,
                delay: i * 0.1,
                ease: [0.19, 1, 0.22, 1]
              }}
            />
          );
        })}


      </svg>

    </div>
  );
};

export default GridBackground;
