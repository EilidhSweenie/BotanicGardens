// src/app/about/page.js
import React from 'react';
import Head from 'next/head';
import Banner from './components/Banner/Banner';
import BlogPreview from './components/BlogPreview/BlogPreview';
import styles from './page.module.css';

const Home = () => {
  const blogPreviews = [
    {
      imageUrl: '/images/standrews-banner.jpg',
      title: 'Blog Post 1',
      excerpt: 'This is a short description of the first blog post.',
      linkUrl: '/blog/1',
    },
    {
      imageUrl: '/images/standrews-banner.jpg',
      title: 'Blog Post 2',
      excerpt: 'This is a short description of the second blog post.',
      linkUrl: '/blog/2',
    },
    {
      imageUrl: '/images/standrews-banner.jpg',
      title: 'Blog Post 3',
      excerpt: 'This is a short description of the third blog post.',
      linkUrl: '/blog/3',
    },
    {
      imageUrl: '/images/standrews-banner.jpg',
      title: 'Blog Post 4',
      excerpt: 'This is a short description of the third blog post.',
      linkUrl: '/blog/4',
    },
  ];

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="home page" content="Home Page" />
      </Head>
      <main>
        <div className={styles.mainContainer}>
          <Banner
            imageUrl="/images/standrews-banner.jpg"
            borderColor="#1A4D2E" // Optional prop
            text="St Andrews Botanic Garden"
            linkUrl='/standrews'
          />
          <div className={styles.blogsContainer}>
            {blogPreviews.map((blog, index) => (
              <BlogPreview
                key={index}
                imageUrl={blog.imageUrl}
                title={blog.title}
                excerpt={blog.excerpt}
                linkUrl={blog.linkUrl}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
