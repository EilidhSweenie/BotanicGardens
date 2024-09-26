// src/app/about/page.js
import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="home page" content="Home Page" />
      </Head>
      <main>
        <h1>Hello Home Page!</h1>
      </main>
    </div>
  );
};

export default Home;
