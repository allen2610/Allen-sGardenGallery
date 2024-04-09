import React from 'react';
import styles from './HoverImageOverlay.module.css';

const HoverImageOverlay = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} className={styles.image} />
      <div className={styles.overlay}></div>
    </div>
  );
};

export default HoverImageOverlay;
