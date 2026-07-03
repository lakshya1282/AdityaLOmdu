'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutHeroSection.module.css';

const AboutHeroSection = () => {
  return (
    <section className={styles.section}>
      {/* SVG Grid Background */}
      <svg 
        width="100%" 
        height="100%" 
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 20 }}
      >
        <defs>
          <pattern id="aboutGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Grid lines */}
            <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="var(--accent-blue)" strokeOpacity="0.15" strokeWidth="1" />
            {/* Plus mark at intersection */}
            <path d="M 35 40 L 45 40 M 40 35 L 40 45" fill="none" stroke="var(--accent-blue)" strokeOpacity="0.5" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#aboutGrid)" />
      </svg>
      
      <div className={styles.contentOverlay}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
        >
          ABOUT
        </motion.h1>

        <motion.div 
          className={styles.strikethroughContainer}
          style={{ x: '-50%', y: '-50%', transformOrigin: 'center' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className={styles.strikethroughText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            For the people building something bigger than themselves.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
