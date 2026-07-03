'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './CasesHeroSection.module.css';

const CasesHeroSection = () => {
  return (
    <section className={styles.section}>
      
      {/* Background Wireframe Concentric Circles & Intersecting Arcs */}
      <svg className={styles.wireframeSvg} viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg">
        {/* Center crosshairs / axis lines */}
        <line x1="800" y1="0" x2="800" y2="1000" className={styles.wireframeLine} />
        <line x1="0" y1="500" x2="1600" y2="500" className={styles.wireframeLine} />
        
        {/* Concentric circles around center (800, 500) */}
        <circle cx="800" cy="500" r="140" className={styles.wireframeLine} />
        <circle cx="800" cy="500" r="280" className={styles.wireframeLine} />
        <circle cx="800" cy="500" r="420" className={styles.wireframeLine} />
        <circle cx="800" cy="500" r="560" className={styles.wireframeLine} />
        <circle cx="800" cy="500" r="700" className={styles.wireframeLine} />
      </svg>

      {/* Main Center Content Container */}
      <div className={styles.contentContainer}>
        
        {/* Top Introductory Paragraph (Inside upper radar ring) */}
        {/* Quadrant Floating Labels */}
        <motion.div 
          className={`${styles.quadrantLabel} ${styles.topLeft}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className={styles.labelNumber}>(01)</span>
          <span className={styles.labelText}>content</span>
        </motion.div>

        <motion.div 
          className={`${styles.quadrantLabel} ${styles.topRight}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className={styles.labelNumber}>(02)</span>
          <span className={styles.labelText}>consultation</span>
        </motion.div>

        <motion.div 
          className={`${styles.quadrantLabel} ${styles.bottomLeft}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <span className={styles.labelNumber}>(03)</span>
          <span className={styles.labelText}>writing</span>
        </motion.div>

        <motion.div 
          className={`${styles.quadrantLabel} ${styles.bottomRight}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className={styles.labelNumber}>(04)</span>
          <span className={styles.labelText}>strategy</span>
        </motion.div>

        {/* Superimposed Split Title & Animated Strikethrough Sequence */}
        <motion.div 
          className={styles.titleWrapper}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Upper Half of CASES - starts normal, then slides up to open channel */}
          <motion.h1 
            className={styles.casesUpper}
            initial={{ x: "-50%", y: "-50%" }}
            animate={{ x: "-50%", y: "-56%" }}
            transition={{ duration: 1.0, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            CASES
          </motion.h1>

          {/* Exact Strikethrough Text animating from left to right */}
          <motion.div 
            className={styles.strikethroughContainer}
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.strikethroughText}>COMING SOON...</span>
          </motion.div>

          {/* Lower Half of CASES - starts normal, then slides down to open channel */}
          <motion.h1 
            className={styles.casesLower}
            initial={{ x: "-50%", y: "-50%" }}
            animate={{ x: "-50%", y: "-44%" }}
            transition={{ duration: 1.0, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            CASES
          </motion.h1>
        </motion.div>

      </div>

    </section>
  );
};

export default CasesHeroSection;
