'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './ServicesSection.module.css';
import WavyMesh from '../ui/WavyMesh';

const services = [
  "BRANDED CONTENT",
  "CONSULTING",
  "STRATEGY",
  "EVENTS",
  "DESIGN"
];

type Project = {
  id: number;
  creator: string;
  title: string;
  type: string;
  year: string;
  image: string;
};

const projectsData: Record<string, Project[]> = {
  "BRANDED CONTENT": [
    { id: 1, creator: "MINT&MARBLE", title: "VISIONARY LEAP", type: "STRATEGY", year: "2024", image: "/projects/visionary.png" },
    { id: 2, creator: "ADITYA", title: "MINIMAL SOUL", type: "BRANDING", year: "2023", image: "/projects/trailblazer.png" },
    { id: 3, creator: "STUDIO 8", title: "URBAN RHYTHM", type: "CAMPAIGN", year: "2024", image: "/projects/visionary.png" },
    { id: 4, creator: "CREATIVE CO", title: "NEON DREAMS", type: "DIGITAL", year: "2024", image: "/projects/trailblazer.png" },
  ],
  "CONSULTING": [
    { id: 5, creator: "MINT&MARBLE", title: "STRATEGIC FLOW", type: "ADVISORY", year: "2024", image: "/projects/trailblazer.png" },
    { id: 6, creator: "PEAK OPS", title: "GROWTH MINDSET", type: "ANALYSIS", year: "2023", image: "/projects/visionary.png" },
    { id: 7, creator: "ALPHA", title: "MARKET EDGE", type: "BSR", year: "2024", image: "/projects/trailblazer.png" },
  ],
  "STRATEGY": [
    { id: 8, creator: "MINT&MARBLE", title: "BLUEPRINT 2024", type: "PLANNING", year: "2024", image: "/projects/visionary.png" },
    { id: 9, creator: "REBEL WORK", title: "MARKET DISRUPT", type: "INNOVATION", year: "2024", image: "/projects/trailblazer.png" },
    { id: 10, creator: "FLOW", title: "SYSTEMIC CORE", type: "STRUCTURE", year: "2023", image: "/projects/visionary.png" },
  ],
  "EVENTS": [
    { id: 11, creator: "GALA LUXE", title: "NIGHT OF IMPACT", type: "PREMIUM", year: "2024", image: "/projects/trailblazer.png" },
    { id: 12, creator: "VIBE", title: "SOLSTICE 2024", type: "EXPERIENTIAL", year: "2024", image: "/projects/visionary.png" },
  ],
  "DESIGN": [
    { id: 13, creator: "MINT&MARBLE", title: "PURE TEXTURE", type: "EDITORIAL", year: "2024", image: "/projects/visionary.png" },
    { id: 14, creator: "KRAFT", title: "BAUHAUS REVIVAL", type: "VISUAL", year: "2023", image: "/projects/trailblazer.png" },
    { id: 15, creator: "MODERN", title: "SILENT IMPACT", type: "LAYOUT", year: "2024", image: "/projects/visionary.png" },
  ]
};

const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const activeProject = projects[hoveredIdx] || projects[0];

  return (
    <motion.div
      className={styles.carouselContainer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className={styles.carouselScroll}>
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onMouseEnter={() => setHoveredIdx(idx)}
          >
            <div className={styles.imageBox}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.projectImage}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const revealAnim = {
    initial: { y: "100%" },
    animate: isInView ? { y: "0%" } : { y: "100%" },
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] as const }
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
            <div
              key={service}
              className={styles.serviceItemWrapper}
              onMouseEnter={() => setActiveIdx(index)}
              onFocus={() => setActiveIdx(index)}
              onClick={() => setActiveIdx(index)}
              tabIndex={0}
              role="button"
              aria-pressed={activeIdx === index}
            >
              <AnimatePresence>
                {activeIdx === index && (
                  <motion.div
                    className={styles.hoverBorder}
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <motion.span
                className={`${styles.serviceItem} ${activeIdx === index ? styles.active : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: activeIdx === index ? 1 : 0.7, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                {service}
              </motion.span>
            </div>
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

      {/* PROJECT CAROUSEL */}
      <AnimatePresence mode="wait">
        {activeIdx !== -1 && (
          <ProjectCarousel
            key={services[activeIdx]}
            projects={projectsData[services[activeIdx]]}
          />
        )}
      </AnimatePresence>

      {/* 3D Wavy Mesh */}
      <WavyMesh color="#0047AB" />
    </section>
  );
}
