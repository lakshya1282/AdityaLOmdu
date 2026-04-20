'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroContent.module.css';

const HeroContent = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.headerGroup}>
        <motion.h1
          className={styles.title}
          initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          transition={{ duration: 2.0, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          MINT <span className={styles.ampersand}>&</span> MARBLE
        </motion.h1>

        <motion.p
          className={styles.tagline}
          initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          FOR BRANDS THAT REFUSE TO PLAY NICE
        </motion.p>
      </div>

      <motion.div
        className={styles.ctaContainer}
        initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
        animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.19, 1, 0.22, 1] }}
      >
        <button className={styles.ctaBtn}>
          READY TO RULE?
          <span className={styles.arrow}>↗</span>
        </button>
      </motion.div>
    </div>


  );
};

export default HeroContent;
