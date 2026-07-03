'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutFoundersSection.module.css';

const AboutFoundersSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        
        {/* Left Founder Card */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img 
              src="/hero/insung-yoon-DOhcePLIqjI-unsplash.jpg" 
              alt="Eshani Sharma" 
              className={styles.image}
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
                Visionary brand strategist and creative leader. Specializes in shaping authority, narrative positioning, and building brand equity that commands attention and creates strategic opportunities long before conversations begin.
              </p>
            </div>
            <motion.div
              className={styles.revealMask}
              style={{ transformOrigin: 'top' }}
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        {/* Center Title */}
        <motion.div 
          className={styles.titleContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
              <h3 className={styles.name}>AADITYA TIWARI</h3>
              <div className={styles.designation}>Co-founder</div>
            </div>

            {/* Hover overlay with details */}
            <div className={styles.hoverOverlay}>
              <h3 className={styles.overlayName}>AADITYA TIWARI</h3>
              <div className={styles.overlayDesignation}>Co-founder</div>
              <div className={styles.divider} />
              <p className={styles.bio}>
                Creative director and visual storyteller. Leads digital experience and design architecture, turning complex ideas into aesthetic reality through seamless digital products, curated typography, and dynamic web design.
              </p>
            </div>
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
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutFoundersSection;
