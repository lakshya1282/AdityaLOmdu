'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './RebelsSection.module.css';

const projects = [
  { title: "VISIONARY LEAP",      subtitle: "// BRANDED CONTENT", image: "/projects/visionary.png"   },
  { title: "TRAILBLAZER EFFECT",  subtitle: "// EXPERIENTIAL",    image: "/projects/trailblazer.png" },
  { title: "ECHOES IN MOTION",    subtitle: "// MOTION DESIGN",   image: "/projects/visionary.png"   },
  { title: "RISING STAR",         subtitle: "// TALENT DEV",      image: "/projects/trailblazer.png" },
];

function ProjectItem({ project, index, isDull, isHovered, onEnter, onLeave, isMobile }: {
  project: typeof projects[0];
  index: number;
  isDull: boolean;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
  isMobile: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <div
      ref={ref}
      className={styles.itemWrapper}
    >
      <div 
        className={styles.hitArea}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {/* REVEALED IMAGE */}
        <AnimatePresence>
          {isHovered && !isMobile && (
            <motion.div
              className={styles.revealedImage}
              initial={{ opacity: 0, scale: 0.85, rotate: -4, y: "-50%", x: "-50%" }}
              animate={{ opacity: 1, scale: 1, rotate: 2,  y: "-50%", x: "-50%" }}
              exit={{   opacity: 0, scale: 0.85, rotate: -4, y: "-50%", x: "-50%" }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            >
              <Image src={project.image} alt={project.title} width={400} height={500} className={styles.projectImg} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles.mobileProjectImage}>
          <Image src={project.image} alt={project.title} fill className={styles.projectImg} sizes="(max-width: 768px) 78vw, 0vw" />
        </div>

        {/* CLIP CONTAINER */}
        <div className={styles.mask}>
          <motion.h2
            className={`${styles.item} ${isDull ? styles.dull : ''}`}
            animate={isMobile ? undefined : { y: inView ? "0%" : "120%" }}
            transition={isMobile ? undefined : { duration: 1.6, ease: [0.19, 1, 0.22, 1], delay: index * 0.15 }}
            style={isMobile ? { transform: 'none' } : undefined}
          >
            {project.title}
          </motion.h2>
        </div>

        {/* METADATA */}
        <AnimatePresence>
          {isHovered && !isMobile && (
            <motion.div
              className={styles.metadata}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{   opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.subtitle}>{project.subtitle}</span>
              <span className={styles.cta}>PROJECT DETAILS</span>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={styles.mobileMetadata}>
          <span className={styles.subtitle}>{project.subtitle}</span>
          <span className={styles.cta}>PROJECT DETAILS</span>
        </div>
      </div>
    </div>
  );
}

export default function RebelsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        <div className={styles.label}>[rebels at work]</div>

        <div className={styles.listContainer}>
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              index={index}
              isHovered={hoveredIndex === index}
              isDull={hoveredIndex !== null && hoveredIndex !== index}
              onEnter={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
