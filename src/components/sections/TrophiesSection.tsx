'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './TrophiesSection.module.css';

const trophies = [
  { 
    id: 1, 
    name: "EUROPEAN DESIGN AWARDS", 
    category: "COMMUNICATION DESIGN",
    years: ["2023", "2024", "2025"]
  },
  { 
    id: 2, 
    name: "CREATIVEPOOL AWARDS", 
    category: "CREATIVE EXCELLENCE",
    years: ["2022", "2024"]
  },
  { 
    id: 3, 
    name: "AWWWARDS", 
    category: "SOTD // HONORABLE MENTION",
    years: ["2023", "2025"]
  },
  { 
    id: 4, 
    name: "CSS DESIGN AWARDS", 
    category: "UI/UX DESIGN",
    years: ["2024"]
  },
  { 
    id: 5, 
    name: "WEBBY AWARDS", 
    category: "INTERACTIVE DESIGN",
    years: ["2023", "2024"]
  },
  { 
    id: 6, 
    name: "D&AD", 
    category: "WOOD PENCIL",
    years: ["2022"]
  },
  { 
    id: 7, 
    name: "RED DOT DESIGN AWARD", 
    category: "COMMUNICATION DESIGN",
    years: ["2023", "2024", "2025"]
  },
  { 
    id: 8, 
    name: "CLIO AWARDS", 
    category: "BRANDED CONTENT",
    years: ["2024"]
  },
];

export default function TrophiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const titleVariants = {
    hidden: { y: "120%" },
    visible: { y: "0%" }
  };

  const transition = { duration: 1.2, ease: [0.19, 1, 0.22, 1] };

  return (
    <section className={styles.section}>
      <div className={styles.header} ref={headerRef}>
        <div className={styles.mask}>
          <motion.span 
            className={styles.label}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={titleVariants}
            transition={{ ...transition, delay: 0.1 }}
          >
            [trophies & triumphs]
          </motion.span>
        </div>
        
        <div className={styles.mask}>
          <motion.h2 
            className={styles.title}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={titleVariants}
            transition={{ ...transition, delay: 0.2 }}
          >
            TROPHIES FOLLOW US.
          </motion.h2>
        </div>

        <div className={styles.mask}>
          <motion.span 
            className={styles.subtitle}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={titleVariants}
            transition={{ ...transition, delay: 0.3 }}
          >
            IT&apos;S A THING.
          </motion.span>
        </div>
      </div>

      <div className={styles.trophyContainer}>
        {trophies.map((trophy, index) => {
          const isHovered = hoveredIndex === index;
          
          return (
            <motion.div
              key={trophy.id}
              className={`${styles.ovalWrapper} ${isHovered ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              layout
              transition={{ 
                layout: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
              }}
              style={{ 
                zIndex: isHovered ? 100 : index + 1 
              }}
            >
              <motion.div 
                className={styles.oval}
                layout
                initial={false}
              >
                <AnimatePresence mode="wait">
                  {!isHovered ? (
                    <motion.div
                      key="vertical"
                      className={styles.verticalTitle}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {trophy.name}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="horizontal"
                      className={styles.hoverContent}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <span className={styles.category}>{trophy.category}</span>
                      <h3 className={styles.hoverTitle}>//{trophy.name}</h3>
                      <div className={styles.yearLabel}>
                        <div className={styles.dot} />
                        <span>Year</span>
                      </div>
                      <div className={styles.years}>
                        {trophy.years.map(year => (
                          <span key={year}>[ {year} ]</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
