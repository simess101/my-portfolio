// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { motion } from 'framer-motion';

// Project Data
const projects = [
  {
    id: 1,
    title: 'Text Editor in C',
    description: 'Developed a text editor in C with functionality similar to VIM, including file saving, viewing, searching, and editing features. Implemented efficient data structures and file I/O handling for optimal text manipulation.',
    image: '../../../public/assets/text-edit.png',
    link: '/projects/text-editor-in-c',
  },
  {
    id: 2,
    title: 'QuickDraw',
    description: 'Created a 2D reaction-based game featuring a red panda samurai, where players compete against an AI opponent by reacting to on-screen cues. Designed dynamic AI response times to adjust to player skill, enhancing difficulty and engagement.',
    image: '../../../public/assets/quickdraw.png',
    link: '/projects/quickdraw',
  },
  {
    id: 3,
    title: 'Go Game AI',
    description: 'Developed an AI-powered Go board game from scratch, incorporating rules, gameplay mechanics, and a teaching mode to help players improve. Implemented a machine learning model capable of competing against human players, providing feedback to enhance player strategy and skill. Demonstrated expertise in game design, machine learning, and creating intuitive user interfaces.',
    image: '../../../public/assets/go-game-ai.png',
    link: '/projects/go-game-ai',
  },
  {
    id: 4,
    title: 'Magic the Gathering Database and Website',
    description: 'Developed a dynamic Magic: The Gathering database and website using PHP and phpMyAdmin, enabling efficient storage, retrieval, and management of card data. Implemented a user-friendly web interface for card searches and deck building, utilizing PHP for backend logic and SQL for database queries.',
    image: '../../../public/assets/magic-card-db.png',
    link: '/projects/magic-the-gathering-database',
  },
  {
    id: 5,
    title: 'Notion Clone',
    description: 'Built a Notion-like application with rich text editing, note organization, and real-time collaboration features. Utilized React for the frontend and Node.js with WebSocket for backend real-time functionalities.',
    image: '../../../public/assets/notion-clone.png',
    link: '/projects/notion-clone',
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-16 bg-white dark:bg-dark-background transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
