'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* BIG MESSAGE */}
        <div className={styles.messageSection}>
          <div className={styles.messageWrapper}>
            <h2 className={styles.bigMessage}>
              YOUR VISION, OUR PASSION — TOGETHER WE'LL <br />
              BUILD SOMETHING REMARKABLE. <br />
              DROP US A MESSAGE AND WE'LL TURN IT INTO A <br />
              CREATIVE FORCE.
            </h2>
            {/* CROSS ICON */}
            <div className={styles.crossIcon}>
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>A note for our creative team...</label>
            <input type="text" className={styles.input} placeholder="" />
          </div>
          
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="trust" className={styles.checkbox} />
            <label htmlFor="trust" className={styles.checkboxLabel}>
              I trust that my data is in safe hands
            </label>
          </div>

          <button className={styles.sendButton}>
            <span>SEND A MESSAGE</span>
            <span className={styles.arrow}>→</span>
          </button>
        </div>

        {/* BOTTOM NAV */}
        <div className={styles.bottomNav}>
          <div className={styles.navGroup}>
            <span className={styles.navTag}>(portfolio)</span>
            <a href="#" className={styles.navLink}>CASES</a>
          </div>
          <div className={styles.navGroup}>
            <span className={styles.navTag}>(company)</span>
            <a href="#" className={styles.navLink}>ABOUT</a>
          </div>
          <div className={styles.navGroup}>
            <span className={styles.navTag}>(us)</span>
            <a href="#" className={styles.navLink}>CONTACT</a>
          </div>
          <div className={styles.navGroup}>
            <span className={styles.navTag}>(we do)</span>
            <a href="#" className={styles.navLink}>SERVICES</a>
          </div>
          <div className={styles.navGroup}>
            <span className={styles.navTag}>(thoughts)</span>
            <a href="#" className={styles.navLink}>BLOG</a>
          </div>
        </div>

        {/* SOCIALS */}
        <div className={styles.socials}>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
