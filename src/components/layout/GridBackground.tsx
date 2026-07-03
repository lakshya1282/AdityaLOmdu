'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './GridBackground.module.css';

const GridBackground = () => {
  const isMobile = useIsMobile();

  // Desktop: 7 columns
  const desktopColumns = [0.11, 0.13, 0.13, 0.26, 0.13, 0.13, 0.11];
  let currentPos = 0;
  const desktopLines = [0];
  desktopColumns.forEach(col => {
    currentPos += col * 100;
    desktopLines.push(currentPos);
  });

  // Mobile: 5 columns
  const mobileColumns = [0.23, 0.23, 0.08, 0.23, 0.23];
  let mobilePos = 0;
  const mobileLines = [0];
  mobileColumns.forEach(col => {
    mobilePos += col * 100;
    mobileLines.push(mobilePos);
  });

  return (
    <div className={styles.container}>
      {/* Desktop grid */}
      <svg className={`${styles.svg} ${styles.desktopSvg}`} width="100%" height="100%" preserveAspectRatio="none">
        {desktopLines.map((x, i) => {
          let xPos = `${x}%`;
          if (i === 3) xPos = `calc(${x}% - 70px)`;
          if (i === 4) xPos = `calc(${x}% + 70px)`;

          return (
            <motion.line
              key={`v-${i}`}
              x1={xPos}
              y1="0"
              x2={xPos}
              y2="100%"
              stroke="var(--grid-line)"
              strokeWidth="1.5"
              initial={isMobile ? undefined : { pathLength: 0, opacity: 0 }}
              animate={isMobile ? undefined : { pathLength: 1, opacity: 1 }}
              transition={isMobile ? undefined : {
                duration: 3.0,
                delay: i * 0.1,
                ease: [0.19, 1, 0.22, 1]
              }}
            />
          );
        })}
      </svg>

      {/* Mobile grid */}
      <svg className={`${styles.svg} ${styles.mobileSvg}`} width="100%" height="100%" preserveAspectRatio="none">
        {mobileLines.map((x, i) => (
          <line
            key={`mv-${i}`}
            x1={`${x}%`}
            y1="0"
            x2={`${x}%`}
            y2="100%"
            stroke="var(--grid-line)"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
};

export default GridBackground;
