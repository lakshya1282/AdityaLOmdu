import React from 'react';
import styles from './AboutSecondSection.module.css';

const AboutSecondSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.blueTile}>
        <div className={styles.bgImage}></div>
        
        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <p>Self. is a personal branding studio built for founders, business owners, and people with perspectives worth noticing.</p>
            <p>We believe personal branding already exists long before the internet does. It lives in the way people describe you, remember you, trust you, and talk about you when you leave the room.</p>
            <p>Self. expands that perception into the professional world through positioning, storytelling, content, and strategic visibility.</p>
            <p>We help ambitious people articulate their ideas, shape authority, and build a presence that creates opportunities long before conversations begin.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecondSection;
