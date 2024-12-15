// src/pages/GoGameAI.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GoGameAI = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-16 bg-white dark:bg-dark-background transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Go Game AI
      </h2>
      <img
        src="/assets/go-game-ai.png"
        alt="Go Game AI"
        className="w-full h-auto mb-6 rounded shadow-md"
      />
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        Developed an AI-powered Go board game from scratch, incorporating rules, gameplay mechanics, and a teaching mode to help players improve. Implemented a machine learning model capable of competing against human players, providing feedback to enhance player strategy and skill. Demonstrated expertise in game design, machine learning, and creating intuitive user interfaces.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <strong>Challenges & Learnings:</strong> Integrating machine learning models with game logic and ensuring AI adaptability taught me advanced concepts in AI development and real-time game interactions.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <strong>Technologies Used:</strong> Python, TensorFlow, JavaScript, HTML5 Canvas, CSS3
      </p>
      <a
        href="https://github.com/simess101/go_game" // Replace with your actual GitHub repository
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary dark:text-secondary font-semibold hover:underline transition-colors duration-300"
      >
        View on GitHub
      </a>
    </motion.section>
  );
};

export default GoGameAI;
