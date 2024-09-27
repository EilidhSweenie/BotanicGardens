// src/components/Banner/Banner.tsx
import React from 'react';
import styles from './Banner.module.css';
import Link from 'next/link';

interface BannerProps {
  imageUrl: string;
  borderColor?: string;
  text: string;
  linkUrl: string; // Add a prop for the link URL
}

const Banner: React.FC<BannerProps> = ({ imageUrl, borderColor = '#4caf50', text, linkUrl }) => {
  return (
    <div
      className={styles.bannerContainer} // New container for wider banner and padding
      style={{ borderColor: borderColor }} // Dynamic border color
    >
      <img src={imageUrl} alt="Banner Image" className={styles.image} />
      <div className={styles.textOverlay}>
        <h1 className={styles.title}>{text}</h1>
        {/* Button to navigate to the linkUrl */}
        <Link href={linkUrl} className={styles.button}>
            Read More
        </Link>
      </div>
    </div>
  );
};

export default Banner;
