// src/pages/NotionClone.jsx
import React from 'react';
import { motion } from 'framer-motion';

const NotionClone = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-16 bg-white dark:bg-dark-background transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Notion Clone
      </h2>
      <img
        src="../../../public/assets/notion-clone.png"
        alt="Notion Clone"
        className="w-full h-auto mb-6 rounded shadow-md"
      />
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        Built a Notion-like application with rich text editing, note organization, and real-time collaboration features. Utilized React for the frontend and Node.js with WebSocket for backend real-time functionalities.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <strong>Challenges & Learnings:</strong> Integrating real-time collaboration and ensuring data consistency across sessions taught me advanced concepts in web development and state management.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <strong>Technologies Used:</strong> React, Node.js, WebSocket, Express.js, MongoDB, CSS3
      </p>
      <a
        href="https://github.com/simess101/Notion-Clone-V1" // Replace with your actual GitHub repository
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary dark:text-secondary font-semibold hover:underline transition-colors duration-300"
      >
        View on GitHub
      </a>
    </motion.section>
  );
};

export default NotionClone;
