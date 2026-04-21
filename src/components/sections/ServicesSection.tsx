'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ServicesSection.module.css';
import WavyMesh from '../ui/WavyMesh';

const services = [
  "BRANDED CONTENT",
  "CONSULTING",
  "STRATEGY",
  "EVENTS",
  "DESIGN"
];

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

      {/* 3D Wavy Mesh */}
      <WavyMesh color="#003399" />
    </section>
  );
}
