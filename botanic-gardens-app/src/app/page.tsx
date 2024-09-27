// src/app/about/page.js
import React from 'react';
import Head from 'next/head';
import Banner from './components/Banner/Banner';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="home page" content="Home Page" />
      </Head>
      <main>
      <div>
          <Banner 
            imageUrl="/images/standrews-banner.jpg" 
            borderColor="#1A4D2E" // Optional prop
            text="St Andrews Botanic Garden" 
            linkUrl='/standrews'
          />
        </div>
        <h1>Hello Home Page!</h1>
      </main>
    </div>
  );
};

export default Home;
