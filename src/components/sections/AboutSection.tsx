'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const floatY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [100, -100]);
  const floatX = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-50, 50]);

  const revealAnim = {
    initial: isMobile ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
    whileInView: isMobile ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : { clipPath: 'inset(0% 0 0% 0)', opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] as const }
  };

  return (
    <section ref={containerRef} className={styles.section}>
      {!isMobile ? (
        /* DESKTOP LAYOUT (Original CSS Grid structure) */
        <>
          {/* Decorative Labels */}
          <motion.div 
            className={`${styles.label} ${styles.labelLeft}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ delay: 0.5 }}
          >
            no limits, (01)<br />just impact.
          </motion.div>

          <motion.div 
            className={`${styles.label} ${styles.labelRight}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ delay: 0.5 }}
          >
            (02) bold ideas.<br />killer execution.
          </motion.div>

          <div className={styles.gridContent}>
            
            {/* ROW 1: TOP MIRRORED TEXT */}
            <div className={styles.headerTopRow}>
              <div className={styles.headerTop}>
                <motion.div 
                  className={`${styles.mirrorLine} ${styles.mirrorLeft}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  WE ARE<br />MINT &<br />MARBLE,<br />
                  AND WE&apos;RE HERE TO<br />STEAL THE SPOTLIGHT.
                </motion.div>
                <motion.div 
                  className={`${styles.mirrorLine} ${styles.mirrorRight}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  WE ARE<br />MINT &<br />MARBLE,<br />
                  AND WE&apos;RE HERE TO<br />STEAL THE SPOTLIGHT.
                </motion.div>
              </div>
            </div>

            {/* ROW 2: WE | IMAGE | ARE */}
            <motion.h2 
              className={`${styles.bigText} ${styles.we}`}
              initial={revealAnim.initial}
              whileInView={revealAnim.whileInView}
              viewport={revealAnim.viewport}
              transition={{ ...revealAnim.transition, delay: 0.2 }}
            >
              WE
            </motion.h2>

            <motion.div 
              className={styles.imageContainer}
              initial={revealAnim.initial}
              whileInView={revealAnim.whileInView}
              viewport={revealAnim.viewport}
              transition={revealAnim.transition}
            >
              <Image 
                src="/about/portrait.png"
                alt="Team Portrait"
                fill
                className={styles.portrait}
                unoptimized
              />
            </motion.div>

            <motion.h2 
              className={`${styles.bigText} ${styles.are}`}
              initial={revealAnim.initial}
              whileInView={revealAnim.whileInView}
              viewport={revealAnim.viewport}
              transition={{ ...revealAnim.transition, delay: 0.4 }}
            >
              ARE
            </motion.h2>

            {/* ROW 3: NARRATIVE BELOW */}
            <div className={styles.narrativeRow}>
              <div className={styles.narrative}>
                <motion.h3 
                  className={styles.subHeader}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  MINT & MARBLE IS
                </motion.h3>
                <motion.h4 
                  className={styles.mainStatement}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  WHERE CHAOS MEETS CLARITY—<br />
                  AND BRANDS ARE BORN FEARLESS
                </motion.h4>
                <motion.p 
                  className={styles.bodyCopy}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  WE DON&apos;T JUST DESIGN; WE DISRUPT. WE&apos;LL TURN YOUR BRAND INTO THE ONE EVERYONE LOVES—OR LOVES TO ENVY. WE&apos;VE SPOKEN ON THE BIGGEST STAGES, BUT THE REAL FLEX? BRANDS THAT KEEP PEOPLE TALKING. WARNING: SIDE EFFECTS OF WORKING WITH US INCLUDE FAME, FORTUNE, AND A LITTLE CHAOS.
                </motion.p>
              </div>
            </div>

          </div>
          {/* Floating Asset: ladki */}
          <motion.div 
            className={styles.ladkiAsset}
            style={{ x: floatX, y: floatY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <Image 
              src="/about/ladki.png"
              alt="Decorative Asset"
              fill
              className={styles.ladkiImg}
              priority
              unoptimized
            />
          </motion.div>
        </>
      ) : (
        /* MOBILE LAYOUT (Proper sequential card formatting from screenshot) */
        <div className={styles.mobileLayout}>
          {/* WE */}
          <h2 className={styles.mobileBigText}>WE</h2>

          {/* label1 */}
          <div className={styles.mobileLabel}>
            no limits. (01)<br />just impact.
          </div>

          {/* mirrored line (centered text block) */}
          <div className={styles.mobileMirrorBlock}>
            WE ARE MINT & MARBLE,<br />
            AND WE&apos;RE HERE TO<br />
            STEAL THE SPOTLIGHT.
          </div>

          {/* portrait image */}
          <div className={styles.mobileImageContainer}>
            <Image 
              src="/about/portrait.png"
              alt="Team Portrait"
              fill
              className={styles.mobilePortrait}
              unoptimized
            />
          </div>

          {/* ARE */}
          <h2 className={styles.mobileBigText}>ARE</h2>

          {/* label2 */}
          <div className={styles.mobileLabel}>
            (02) bold ideas.<br />killer execution.
          </div>

          {/* narrative (title + paragraph) */}
          <div className={styles.mobileNarrative}>
            <h3 className={styles.mobileSubHeader}>MINT & MARBLE IS</h3>
            <h4 className={styles.mobileMainStatement}>
              WHERE CHAOS MEETS CLARITY—<br />
              AND BRANDS ARE BORN FEARLESS
            </h4>
            <p className={styles.mobileBodyCopy}>
              WE DON&apos;T JUST DESIGN; WE DISRUPT. WE&apos;LL TURN YOUR BRAND INTO THE ONE EVERYONE LOVES—OR LOVES TO ENVY. WE&apos;VE SPOKEN ON THE BIGGEST STAGES, BUT THE REAL FLEX? BRANDS THAT KEEP PEOPLE TALKING. WARNING: SIDE EFFECTS OF WORKING WITH US INCLUDE FAME, FORTUNE, AND A LITTLE CHAOS.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
