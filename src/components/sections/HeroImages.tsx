'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './HeroImages.module.css';

const images = [
  {
    src: '/hero/insung-yoon-DOhcePLIqjI-unsplash.jpg',
    alt: 'Top Left Panel',
    className: styles.topLeft,
    delay: 0.2 // Matches Line index 2
  },
  {
    src: '/hero/nachelle-nocom-Rv77p0__6SY-unsplash.jpg',
    alt: 'Bottom Left Panel',
    className: styles.bottomLeft,
    delay: 0.1 // Matches Line index 1
  },
  {
    src: '/hero/mei-ling-mirow-Yj1Zx0V9U1c-unsplash.jpg',
    alt: 'Top Right Panel',
    className: styles.topRight,
    delay: 0.4 // Matches Line index 4
  },
  {
    src: '/hero/tiachen-aier-0T4eOvQ4_wI-unsplash.jpg',
    alt: 'Bottom Right Panel',
    className: styles.bottomRight,
    delay: 0.5 // Matches Line index 5
  }
];

const HeroImages = () => {
  return (
    <div className={styles.container}>
      {images.map((img, i) => (
        <motion.div
          key={i}
          className={`${styles.panel} ${img.className}`}
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0% 0 0% 0)' }}
          transition={{
            duration: 3.0,
            delay: img.delay,
            ease: [0.19, 1, 0.22, 1]
          }}
        >

          <div className={styles.imageWrapper}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={styles.image}
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroImages;
