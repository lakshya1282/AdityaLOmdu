'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './AboutFoundersSection.module.css';

const AboutFoundersSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        
        {/* Left Founder Card */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img 
              src="/about/ESHANI.jpeg" 
              alt="Eshani Sharma" 
              className={styles.eshaniImage}
            />

            {/* Always visible footer badge */}
            <div className={styles.cardFooter}>
              <h3 className={styles.name}>ESHANI SHARMA</h3>
              <div className={styles.designation}>Founder</div>
            </div>

            {/* Hover overlay with details */}
            <div className={styles.hoverOverlay}>
              <h3 className={styles.overlayName}>ESHANI SHARMA</h3>
              <div className={styles.overlayDesignation}>Founder</div>
              <div className={styles.divider} />
              <p className={styles.bio}>
                Personal branding strategist who helps professionals turn their experience into authentic content that builds trust, credibility, and meaningful conversations. With a background in HR, she brings a deep understanding of people and combines it with storytelling to create LinkedIn content that feels genuine, relatable, and worth reading.
              </p>
            </div>
            
            {!isMobile && (
              <motion.div
                className={styles.revealMask}
                style={{ transformOrigin: 'top' }}
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </div>
        </div>

        {/* Center Title */}
        <motion.div 
          className={styles.titleContainer}
          initial={isMobile ? undefined : { opacity: 0, y: 30 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={isMobile ? undefined : { duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={isMobile ? { transform: 'none' } : undefined}
        >
          <h2 className={styles.titleLine}>MEET</h2>
          <h2 className={styles.titleLine}>THE</h2>
          <h2 className={styles.titleLine}>FOUNDERS</h2>
        </motion.div>

        {/* Right Founder Card */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img 
              src="/about/ladki.png" 
              alt="Aaditya Tiwari" 
              className={styles.image}
            />

            {/* Always visible footer badge */}
            <div className={styles.cardFooter}>
              <h3 className={styles.name}>AADITYI TIWARI</h3>
              <div className={styles.designation}>Co-founder</div>
            </div>

            {/* Hover overlay with details */}
            <div className={styles.hoverOverlay}>
              <h3 className={styles.overlayName}>AADITYA TIWARI</h3>
              <div className={styles.overlayDesignation}>Co-founder</div>
              <div className={styles.divider} />
              <p className={styles.bio}>
                Brand strategist who helps businesses build timeless brands through positioning, storytelling, and research-backed creativity. He works with founders to create brands that are remembered, not just marketed.
              </p>
            </div>

            {!isMobile && (
              <motion.div
                className={styles.revealMask}
                style={{ transformOrigin: 'top' }}
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 1.4,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutFoundersSection;
