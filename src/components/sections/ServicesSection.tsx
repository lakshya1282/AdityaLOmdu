'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ServicesSection.module.css';

const services = [
  "BRANDED CONTENT",
  "CONSULTING",
  "STRATEGY",
  "EVENTS",
  "DESIGN"
];

const Mesh = () => {
  const lines = [];
  const gridSize = 40; // Number of lines

  // Horizontal lines
  for (let i = 0; i <= gridSize; i++) {
    const pos = (i / gridSize) * 100;
    lines.push(
      <motion.line
        key={`h-${i}`}
        x1="0%"
        y1={`${pos}%`}
        x2="100%"
        y2={`${pos}%`}
        className={styles.meshLine}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: i * 0.02, ease: "easeOut" }}
      />
    );
  }

  // Vertical lines
  for (let i = 0; i <= gridSize; i++) {
    const pos = (i / gridSize) * 100;
    lines.push(
      <motion.line
        key={`v-${i}`}
        x1={`${pos}%`}
        y1="0%"
        x2={`${pos}%`}
        y2="100%"
        className={styles.meshLine}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: i * 0.02, ease: "easeOut" }}
      />
    );
  }

  return (
    <div className={styles.meshContainer}>
      <svg className={styles.mesh} viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines}
      </svg>
      <div className={styles.meshFade} />
    </div>
  );
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const revealAnim = {
    initial: { y: "100%" },
    animate: isInView ? { y: "0%" } : { y: "100%" },
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
  };

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.contentWrapper}>
        {/* WE */}
        <div className={styles.mask}>
          <motion.h2 
            className={`${styles.sideText} ${styles.we}`}
            {...revealAnim}
          >
            WE
          </motion.h2>
        </div>

        {/* SERVICE STACK */}
        <div className={styles.serviceStack}>
          {services.map((service, index) => (
            <motion.span
              key={service}
              className={styles.serviceItem}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            >
              {service}
            </motion.span>
          ))}
        </div>

        {/* DO */}
        <div className={styles.mask}>
          <motion.h2 
            className={`${styles.sideText} ${styles.do}`}
            {...revealAnim}
            transition={{ ...revealAnim.transition, delay: 0.2 }}
          >
            DO
          </motion.h2>
        </div>
      </div>

      {/* MESH BOTTOM */}
      <Mesh />
    </section>
  );
}
