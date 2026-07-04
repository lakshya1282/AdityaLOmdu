'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'CASES', href: '/cases' },
  { label: 'SERVICES', href: '/#services' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' }
];

const mobileNavLinks = [
  { label: 'CASES', tag: '(portfolio)', href: '/cases' },
  { label: 'ABOUT', tag: '(company)', href: '/about' },
  { label: 'CONTACT', tag: '(us)', href: '/contact' },
  { label: 'SERVICES', tag: '(we do)', href: '/#services' },
  { label: 'BLOG', tag: '(thoughts)', href: '#' }
];

const socialLinks = [
  { name: 'INSTAGRAM', href: '#' },
  { name: 'YOUTUBE', href: '#' },
  { name: 'LINKEDIN', href: '#' },
  { name: 'TWITTER', href: '#' }
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${isOpen ? styles.navActive : ''}`}>
        {/* Logo Section - Aligned to Col 1 */}
        <div className={styles['logo-wrapper']}>
          <motion.div 
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 1, delay: 2, ease: [0.19, 1, 0.22, 1] }}
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image 
                src="/logo11.png" 
                alt="Mint & Marble Logo" 
                width={140} 
                height={46} 
                className={styles.logo}
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
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={isMobile ? { duration: 0 } : { 
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
            className={`${styles.menuBtn} ${isOpen ? styles.isOpen : ''}`}
            onClick={toggleMenu}
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={isMobile ? { opacity: 1 } : { opacity: 1 }}
            transition={isMobile ? { duration: 0 } : { duration: 1, delay: 2.5 }}
          >
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.overlayContent}>
              <div className={styles.overlayLinks}>
                {mobileNavLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link 
                      href={link.href} 
                      className={styles.mobileNavLink} 
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={styles.mobileNavLabel}>{link.label}</span>
                      {link.tag && <span className={styles.mobileNavTag}>{link.tag}</span>}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className={styles.overlaySocials}>
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={styles.socialLink}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.04, duration: 0.4 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
