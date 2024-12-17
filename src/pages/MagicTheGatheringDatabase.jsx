// src/pages/MagicTheGatheringDatabase.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MagicTheGatheringDatabase = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-16 bg-white dark:bg-dark-background transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Magic the Gathering Database and Website
      </h2>
      <img
        src="../../public/assets/magic-card-db.png"
        alt="Magic the Gathering Database"
        className="w-full h-auto mb-6 rounded shadow-md"
      />
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        Developed a dynamic Magic: The Gathering database and website using PHP and phpMyAdmin, enabling efficient storage, retrieval, and management of card data. Implemented a user-friendly web interface for card searches and deck building, utilizing PHP for backend logic and SQL for database queries.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <strong>Challenges & Learnings:</strong> Designing a scalable database structure and ensuring seamless integration between frontend and backend taught me valuable lessons in full-stack development and database management.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <strong>Technologies Used:</strong> PHP, MySQL, phpMyAdmin, HTML5, CSS3, JavaScript
      </p>
      <a
        href="https://github.com/simess101/MTG-DATABASE" // Replace with your actual GitHub repository
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary dark:text-secondary font-semibold hover:underline transition-colors duration-300"
      >
        View on GitHub
      </a>
    </motion.section>
  );
};

export default MagicTheGatheringDatabase;
