// src/pages/QuickDraw.jsx
import React from 'react';
import { motion } from 'framer-motion';

const QuickDraw = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-16 bg-white dark:bg-dark-background transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        QuickDraw
      </h2>
      <img
        src="../../public/assets/quickdraw.png"
        alt="QuickDraw Game"
        className="w-full h-auto mb-6 rounded shadow-md"
      />
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        Created a 2D reaction-based game featuring a red panda samurai, where players compete against an AI opponent by reacting to on-screen cues. Designed dynamic AI response times to adjust to player skill, enhancing difficulty and engagement.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <strong>Challenges & Learnings:</strong> Balancing AI difficulty and ensuring smooth gameplay taught me about game design principles and optimizing performance.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <strong>Technologies Used:</strong> JavaScript, HTML5 Canvas, CSS3, AI Algorithms
      </p>
      <a
        href="https://github.com/simess101/QuickDraw" // Replace with your actual GitHub repository
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary dark:text-secondary font-semibold hover:underline transition-colors duration-300"
      >
        View on GitHub
      </a>
    </motion.section>
  );
};

export default QuickDraw;
