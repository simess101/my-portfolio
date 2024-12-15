import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-gray-100 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Hi, I’m Shane
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
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
