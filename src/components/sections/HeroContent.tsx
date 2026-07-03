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
        initial={isMobile ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        animate={isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={isMobile ? { duration: 0 } : { duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
      >
        <motion.div 
          className={styles.handContainer}
          initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          animate={isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={isMobile ? { duration: 0 } : { duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
        >
          <Image 
            src="/hero/hand-final.png" 
            alt="3D Wireframe Hand" 
            width={400} 
            height={400} 
            className={styles.handImage}
            priority
            unoptimized
          />
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={isMobile ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : { clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={isMobile ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : { clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          transition={isMobile ? { duration: 0 } : { duration: 1.5, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
        >
          Perception. Positioned.
        </motion.h1>

        <motion.p
          className={styles.tagline}
          initial={isMobile ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : { clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={isMobile ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : { clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          transition={isMobile ? { duration: 0 } : { duration: 1.5, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
        >
          Let us prove that you are not boring.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.ctaContainer}
        initial={isMobile ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : { clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
        animate={isMobile ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : { clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
        transition={isMobile ? { duration: 0 } : { duration: 1.5, delay: 0.9, ease: [0.19, 1, 0.22, 1] }}
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
