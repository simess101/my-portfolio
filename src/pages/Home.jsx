// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../pages/About';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      {/* Future sections like Projects can be added here */}
    </main>
  );
};

export default Home;