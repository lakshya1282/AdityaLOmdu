'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './AboutScrollSection.module.css';

const contents = [
  "Self. is a personal branding studio built for founders, business owners, and people with perspectives worth noticing.",
  "We believe personal branding already exists long before the internet does. It lives in the way people describe you, remember you, trust you, and talk about you when you leave the room.",
  "Self. expands that perception into the professional world through positioning, storytelling, content, and strategic visibility.",
  "We help ambitious people articulate their ideas, shape authority, and build a presence that creates opportunities long before conversations begin."
];

const Starburst = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 0 L57 32 L95 15 L68 43 L100 50 L68 57 L95 85 L57 68 L50 100 L43 68 L5 85 L32 57 L0 50 L32 43 L5 15 L43 32 Z" />
  </svg>
);

const Sparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
  </svg>
);

const Asterisk = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <g transform="translate(50 50)">
      <rect x="-12" y="-45" width="24" height="90" rx="0" />
      <rect x="-12" y="-45" width="24" height="90" rx="0" transform="rotate(60)" />
      <rect x="-12" y="-45" width="24" height="90" rx="0" transform="rotate(120)" />
    </g>
  </svg>
);

const Flower = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 5 C65 5 70 25 65 35 C75 30 95 35 95 50 C95 65 75 70 65 65 C70 75 65 95 50 95 C35 95 30 75 35 65 C25 70 5 65 5 50 C5 35 25 30 35 35 C30 25 35 5 50 5 Z" />
  </svg>
);

const shapes = [Starburst, Sparkle, Asterisk, Flower];

const AboutScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Split the drawing into 3 segments based on scroll progress ranges
  const path1Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const path2Progress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const path3Progress = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  return (
    <section className={styles.section} ref={containerRef}>
      
      {/* Background SVG Line */}
      <div className={styles.svgContainer}>
        <svg viewBox="0 0 1000 3000" preserveAspectRatio="none" className={styles.svgLine}>
          <motion.path
            d="M 250 100 C 500 100, 500 1000, 750 1000"
            fill="none"
            stroke="var(--accent-blue)"
            strokeWidth="3"
            style={{ pathLength: path1Progress }}
          />
          <motion.path
            d="M 750 1000 C 500 1000, 500 2000, 250 2000"
            fill="none"
            stroke="var(--accent-blue)"
            strokeWidth="3"
            style={{ pathLength: path2Progress }}
          />
          <motion.path
            d="M 250 2000 C 500 2000, 500 2900, 750 2900"
            fill="none"
            stroke="var(--accent-blue)"
            strokeWidth="3"
            style={{ pathLength: path3Progress }}
          />
        </svg>
      </div>

      {/* Content Blocks */}
      <div className={styles.contentWrapper}>
        {contents.map((text, index) => {
          const Shape = shapes[index];
          const isLeft = index % 2 === 0;
          
          return (
            <div key={index} className={`${styles.contentBlock} ${styles[`block${index + 1}`]}`}>
              <motion.div 
                className={styles.textMaskContainer}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.textContent}>
                  {text}
                </div>
              </motion.div>
              
              {/* Decorative Vector Shape */}
              <motion.div 
                className={`${styles.vectorShape} ${isLeft ? styles.shapeRight : styles.shapeLeft}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Shape />
              </motion.div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
};

export default AboutScrollSection;
