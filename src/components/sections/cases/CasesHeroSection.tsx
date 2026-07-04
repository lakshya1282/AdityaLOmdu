'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './CasesHeroSection.module.css';

const CasesHeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.section}>
      
      {/* Background Wireframe Concentric Circles & Intersecting Arcs */}
      <svg className={styles.wireframeSvg} viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg">
        {/* Concentric circles around center (800, 500) */}
        <circle cx="800" cy="500" r="140" className={styles.wireframeLine} />
        <circle cx="800" cy="500" r="280" className={styles.wireframeLine} />
        <circle cx="800" cy="500" r="420" className={styles.wireframeLine} />
        <circle cx="800" cy="500" r="560" className={styles.wireframeLine} />
        <circle cx="800" cy="500" r="700" className={styles.wireframeLine} />

        {/* Intersecting background circles */}
        <circle cx="100" cy="500" r="560" className={styles.wireframeArc} />
        <circle cx="1500" cy="500" r="560" className={styles.wireframeArc} />
      </svg>

      {/* Quadrant Floating Labels (Direct children for absolute viewport positioning) */}
      <motion.div 
        className={`${styles.quadrantLabel} ${styles.topLeft}`}
        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        animate={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.5 }}
      >
        <span className={styles.labelNumber}>(01)</span>
        <span className={styles.labelText}>content</span>
      </motion.div>

      <motion.div 
        className={`${styles.quadrantLabel} ${styles.topRight}`}
        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        animate={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.6 }}
      >
        <span className={styles.labelNumber}>(02)</span>
        <span className={styles.labelText}>consultation</span>
      </motion.div>

      <motion.div 
        className={`${styles.quadrantLabel} ${styles.bottomLeft}`}
        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        animate={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.7 }}
      >
        <span className={styles.labelNumber}>(03)</span>
        <span className={styles.labelText}>writing</span>
      </motion.div>

      <motion.div 
        className={`${styles.quadrantLabel} ${styles.bottomRight}`}
        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        animate={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.8 }}
      >
        <span className={styles.labelNumber}>(04)</span>
        <span className={styles.labelText}>strategy</span>
      </motion.div>

      {/* Main Center Content Container */}
      <div className={styles.contentContainer}>
        
        {/* Superimposed Split Title & Animated Strikethrough Sequence */}
        <motion.div 
          className={styles.titleWrapper}
          initial={isMobile ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 }}
          animate={isMobile ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
          transition={isMobile ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={isMobile ? { transform: 'none' } : undefined}
        >
          {/* Upper Half of CASES */}
          <motion.h1 
            className={styles.casesUpper}
            initial={isMobile ? { x: "-50%", y: "-56%" } : { x: "-50%", y: "-50%" }}
            animate={isMobile ? { x: "-50%", y: "-56%" } : { x: "-50%", y: "-56%" }}
            transition={isMobile ? { duration: 0 } : { duration: 1.0, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={isMobile ? { transform: 'translate(-50%, -56%)' } : undefined}
          >
            CASES
          </motion.h1>

          {/* Exact Strikethrough Text animating from left to right */}
          <motion.div 
            className={styles.strikethroughContainer}
            initial={isMobile ? { clipPath: "none", opacity: 1 } : { clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={isMobile ? { clipPath: "none", opacity: 1 } : { clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={isMobile ? { clipPath: 'none', opacity: 1 } : undefined}
          >
            <span className={styles.strikethroughText}>COMING SOON...</span>
          </motion.div>

          {/* Lower Half of CASES */}
          <motion.h1 
            className={styles.casesLower}
            initial={isMobile ? { x: "-50%", y: "-44%" } : { x: "-50%", y: "-50%" }}
            animate={isMobile ? { x: "-50%", y: "-44%" } : { x: "-50%", y: "-44%" }}
            transition={isMobile ? { duration: 0 } : { duration: 1.0, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={isMobile ? { transform: 'translate(-50%, -44%)' } : undefined}
          >
            CASES
          </motion.h1>
        </motion.div>

      </div>

    </section>
  );
};

export default CasesHeroSection;
