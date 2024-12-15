// src/pages/TextEditorInC.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TextEditorInC = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-16 bg-white dark:bg-dark-background transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Text Editor in C
      </h2>
      <img
        src="/assets/text-edit.png"
        alt="Text Editor in C"
        className="w-full h-auto mb-6 rounded shadow-md"
      />
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        Developed a text editor in C with functionality similar to VIM, including file saving, viewing, searching, and editing features. Implemented efficient data structures and file I/O handling for optimal text manipulation.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <strong>Challenges & Learnings:</strong> Debugging tricky edge cases and refining search capabilities taught me the importance of attention to detail and efficient algorithm design.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <strong>Technologies Used:</strong> C, Data Structures, File I/O, Command-Line Interface
      </p>
      <a
        href="https://github.com/simess101/Text-Editor-In-C" // Replace with your actual GitHub repository
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary dark:text-secondary font-semibold hover:underline transition-colors duration-300"
      >
        View on GitHub
      </a>
    </motion.section>
  );
};

export default TextEditorInC;
