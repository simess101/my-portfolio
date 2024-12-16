// src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import quickdrawImage from '../../../public/assets/quickdraw.png';
import goGameAIImage from '../../../public/assets/go-game-ai.png';
import magicCardDBImage from '../../../public/assets/magic-card-db.png';
import notionCloneImage from '../../../public/assets/notion-clone.png';
// Import other images as needed

const ProjectCard = ({ project }) => {
  // Determine which image to use based on project.id or another identifier
  let projectImage;
  switch (project.id) {
    case 'quickdraw':
      projectImage = quickdrawImage;
      break;
    case 'go-game-ai':
      projectImage = goGameAIImage;
      break;
    case 'magic-card-db':
      projectImage = magicCardDBImage;
      break;
    case 'notion-clone':
      projectImage = notionCloneImage;
      break;
    // Add more cases as needed
    default:
      projectImage = ''; // Provide a default image or leave empty
  }

  return (
    <motion.div
      className="border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300"
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={projectImage}
        alt={project.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
          {project.description}
        </p>
        <Link
          to={project.link}
          className="text-primary dark:text-secondary font-semibold hover:underline transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
