// HoverImage.js

import React from 'react';
import styles from './HoverImage.module.css'; // Importing CSS module for styling

const HoverImage = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default HoverImage;

