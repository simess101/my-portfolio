// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.section
      className="px-6 py-16 bg-gray-50 dark:bg-dark-background transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100 transition-colors duration-300">Contact Me</h2>
        <form
          action="https://formspree.io/f/mwkaylln" // Replace with your Formspree endpoint or your own backend
          method="POST"
          className="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 transition-colors duration-300"
        >
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-600 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300"
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-600 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300"
              id="email"
              type="email"
              placeholder="Your Email"
              name="_replyto"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-600 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300"
              id="message"
              placeholder="Your Message"
              name="message"
              rows="5"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-primary dark:bg-secondary hover:bg-primary-dark dark:hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-300 text-xs">
          &copy; {new Date().getFullYear()} Shane Simes. All rights reserved.
        </p>
      </div>
    </motion.section>
  );
};

export default ContactPage;
