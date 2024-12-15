// src/components/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <motion.section
      className="px-6 py-16 bg-white dark:bg-dark-background transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          I’ve always been fascinated by how things work—whether it was dismantling old electronics
          as a kid or brainstorming climbing routes that challenge both body and mind. When I first
          dipped my toes into coding, I realized I could apply the same curiosity to the digital
          world: unraveling complex backends, scripting responsive frontends, experimenting with
          AI-driven models, and building games that spark delight.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          During my time at Virginia Commonwealth University, I’ve tackled a range of projects—from
          creating a Vim-like text editor in C to developing dynamic Magic: The Gathering card
          databases with PHP. But behind every line of code, there’s a personal philosophy: good
          technology should feel natural, serve people’s needs, and bring communities together. That’s
          why I value empathy, humility, and collaboration—whether I’m guiding my climbing club’s
          competitive team, contributing to open-source code, or refining my latest machine learning
          model.
          </p>
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/simess101" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/simess/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="simess@vcu.edu" // Replace with your email
            className="text-red-600 dark:text-red-400 hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
