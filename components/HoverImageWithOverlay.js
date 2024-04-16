// HoverImageWithOverlay.js

import React from 'react';
import styles from './HoverImageWithOverlay.module.css';

const HoverImageWithOverlay = ({ src, alt, overlayText }) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} className={styles.image} />
      <div className={styles.overlay}>
        <p className={styles.overlayText}>{overlayText}</p>
      </div>
    </div>
  );
};

export default HoverImageWithOverlay;
