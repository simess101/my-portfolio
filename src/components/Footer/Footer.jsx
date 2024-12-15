// src/components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-center">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} Shane Simes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
