'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './HeroContent.module.css';

const HeroContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.heroWrapper}>
      <motion.div 
        className={styles.headerGroup}
        initial={isMobile ? undefined : { y: 50, opacity: 0 }}
        animate={isMobile ? undefined : { y: 0, opacity: 1 }}
        transition={isMobile ? undefined : { duration: 4.0, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
      >
        <motion.div 
          className={styles.handContainer}
          initial={isMobile ? undefined : { opacity: 0, scale: 0.9 }}
          animate={isMobile ? undefined : { opacity: 1, scale: 1 }}
          transition={isMobile ? undefined : { duration: 4.0, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
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
          initial={isMobile ? undefined : { clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={isMobile ? undefined : { clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          transition={isMobile ? undefined : { duration: 4.0, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          Perception. Positioned.
        </motion.h1>

        <motion.p
          className={styles.tagline}
          initial={isMobile ? undefined : { clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={isMobile ? undefined : { clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          transition={isMobile ? undefined : { duration: 4.0, delay: 1.2, ease: [0.19, 1, 0.22, 1] }}
        >
          Let us prove that you are not boring.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.ctaContainer}
        initial={isMobile ? undefined : { clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
        animate={isMobile ? undefined : { clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
        transition={isMobile ? undefined : { duration: 4.0, delay: 1.8, ease: [0.19, 1, 0.22, 1] }}
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
