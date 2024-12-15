// src/components/Hero/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../../public/assets/profile.jpg'; // Ensure this path is correct

const Hero = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-center transition-colors duration-300"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={profileImage}
        alt="Shane Simes"
        className="w-32 h-32 rounded-full mb-6 object-cover border-2 border-primary dark:border-secondary"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Hi, I’m Shane
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl max-w-2xl text-gray-700 dark:text-gray-300 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        I’m a senior Computer Science major who loves transforming complex backend challenges
        into seamless digital experiences. Beyond coding, I’m an enthusiastic collaborator, a
        curious thinker, and someone who believes great technology is rooted in empathy and
        continuous learning.
      </motion.p>
    </motion.section>
  );
};

export default Hero;
