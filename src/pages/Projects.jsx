import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { motion } from 'framer-motion';

// Sample data for projects
const projects = [
  {
    id: 1,
    title: 'Notion Clone Text Editor',
    description: 'Developed a text editor in C with functionality similar to VIM...',
    image: '/assets/notion-clone.png',
    link: '/projects/notion-clone',
  },
  {
    id: 2,
    title: 'QuickDraw',
    description: 'Created a 2D reaction-based game featuring a red panda samurai...',
    image: '/assets/quickdraw.png',
    link: '/projects/quickdraw',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
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
    </section>
  );
};

export default Projects;
