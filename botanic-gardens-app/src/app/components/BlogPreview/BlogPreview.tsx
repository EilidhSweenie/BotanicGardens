// src/components/BlogPreview/BlogPreview.tsx
import React from 'react';
import styles from './BlogPreview.module.css';
import Link from 'next/link';

interface BlogPreviewProps {
  imageUrl: string;
  title: string;
  excerpt: string;
  linkUrl: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ imageUrl, title, excerpt, linkUrl }) => {
  return (
    <div className={styles.blogPreviewContainer}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={linkUrl} className={styles.readMoreButton}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPreview;
