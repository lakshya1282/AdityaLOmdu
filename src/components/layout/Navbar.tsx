'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'CASES', href: '/cases' },
  { label: 'SERVICES', href: '/#services' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' }
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {/* Logo Section - Aligned to Col 1 */}
      <div className={styles.logoContainer}>
        <motion.div 
          className={styles.logo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: [0.19, 1, 0.22, 1] }}
        >
          <Link href="/">
            <Image 
              src="/logo11.png" 
              alt="Mint & Marble Logo" 
              width={140} 
              height={46} 
              style={{ width: '100%', height: 'auto', maxWidth: '140px' }}
              priority
            />
          </Link>
        </motion.div>
      </div>

      {/* Navigation Links - Stacked in Col 4 */}
      <div className={styles.linksContainer}>
        {navLinks.map((link, i) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 2.2 + (i * 0.1), 
              ease: [0.19, 1, 0.22, 1] 
            }}
          >
            <Link href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          </motion.div>
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
