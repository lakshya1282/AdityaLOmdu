'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './ContactCard.module.css';

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    emailId: '',
    companyName: '',
    industry: '',
    designation: ''
  });
  const isMobile = useIsMobile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
  };

  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.cardContainer}
        initial={isMobile ? undefined : { opacity: 0, y: 30 }}
        animate={isMobile ? undefined : { opacity: 1, y: 0 }}
        transition={isMobile ? undefined : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={isMobile ? { transform: 'none' } : undefined}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>START A CONVERSATION</h1>
          <p className={styles.subtitle}>
            Tell us about yourself and your vision. Let's create something extraordinary together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.formGrid}>
          
          {/* Name */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name" 
              required
              className={styles.input}
            />
          </div>

          {/* Contact Number */}
          <div className={styles.formGroup}>
            <label htmlFor="contactNumber" className={styles.label}>Contact Number</label>
            <input 
              type="tel" 
              id="contactNumber" 
              name="contactNumber" 
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000" 
              required
              className={styles.input}
            />
          </div>

          {/* Email ID */}
          <div className={styles.formGroup}>
            <label htmlFor="emailId" className={styles.label}>Email ID</label>
            <input 
              type="email" 
              id="emailId" 
              name="emailId" 
              value={formData.emailId}
              onChange={handleChange}
              placeholder="you@company.com" 
              required
              className={styles.input}
            />
          </div>

          {/* Company Name */}
          <div className={styles.formGroup}>
            <label htmlFor="companyName" className={styles.label}>Company Name</label>
            <input 
              type="text" 
              id="companyName" 
              name="companyName" 
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your organization name" 
              required
              className={styles.input}
            />
          </div>

          {/* Industry {written} */}
          <div className={styles.formGroup}>
            <label htmlFor="industry" className={styles.label}>Industry</label>
            <input 
              type="text" 
              id="industry" 
              name="industry" 
              value={formData.industry}
              onChange={handleChange}
              placeholder="e.g. Fintech, E-commerce, SaaS" 
              required
              className={styles.input}
            />
          </div>

          {/* Designation */}
          <div className={styles.formGroup}>
            <label htmlFor="designation" className={styles.label}>Designation</label>
            <input 
              type="text" 
              id="designation" 
              name="designation" 
              value={formData.designation}
              onChange={handleChange}
              placeholder="e.g. Founder, Marketing Director" 
              required
              className={styles.input}
            />
          </div>

          {/* Submit Button */}
          <div className={styles.submitWrapper}>
            <button type="submit" className={styles.submitButton}>
              SUBMIT DETAILS
            </button>
          </div>

        </form>
      </motion.div>
    </section>
  );
};

export default ContactCard;
