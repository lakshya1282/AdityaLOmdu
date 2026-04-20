'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
  'CASES',
  'SERVICES',
  'ABOUT',
  'CONTACT',
  'BLOG'
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {/* Logo Section - Aligned to Col 1 */}
      <div className={styles.logoContainer}>
        <motion.span 
          className={styles.logo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: [0.19, 1, 0.22, 1] }}
        >
          Mint&Marble
        </motion.span>
      </div>

      {/* Navigation Links - Stacked in Col 4 */}
      <div className={styles.linksContainer}>
        {navLinks.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={styles.navLink}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 2.2 + (i * 0.1), 
              ease: [0.19, 1, 0.22, 1] 
            }}
          >
            {link}
          </motion.a>
        ))}
      </div>

      {/* Menu Trigger - Aligned to Col 7 */}
      <div className={styles.menuContainer}>
        <motion.button 
          className={styles.menuBtn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
