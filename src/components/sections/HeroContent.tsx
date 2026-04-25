'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './HeroContent.module.css';

const HeroContent = () => {
  return (
    <div className={styles.heroWrapper}>
      <motion.div 
        className={styles.headerGroup}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 4.0, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
      >
        <motion.div 
          className={styles.handContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 4.0, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
        >
          <Image 
            src="/hero/hand-final.png" 
            alt="3D Wireframe Hand" 
            width={400} 
            height={400} 
            className={styles.handImage}
            priority
          />
        </motion.div>


        <motion.h1
          className={styles.title}
          initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          transition={{ duration: 4.0, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          MINT <span className={styles.ampersand}>&</span> MARBLE
        </motion.h1>

        <motion.p
          className={styles.tagline}
          initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          transition={{ duration: 4.0, delay: 1.2, ease: [0.19, 1, 0.22, 1] }}
        >
          FOR BRANDS THAT REFUSE TO PLAY NICE
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.ctaContainer}
        initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
        animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
        transition={{ duration: 4.0, delay: 1.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <button className={styles.ctaBtn}>
          <span className={styles.ctaText}>READY TO RULE?</span>
          <span className={styles.arrow}>↗</span>
        </button>
      </motion.div>
    </div>
  );
};

export default HeroContent;
