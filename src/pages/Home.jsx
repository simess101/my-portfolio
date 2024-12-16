// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../pages/About';
import Projects from '../pages/Projects'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default Home;
