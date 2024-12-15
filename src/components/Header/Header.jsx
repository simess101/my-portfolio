// src/components/Header/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle'; // Import the ThemeToggle component

const Header = () => {
  return (
    <header className="bg-white dark:bg-dark-background shadow-md transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          Shane's Portfolio
        </div>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ThemeToggle /> {/* Add the ThemeToggle button here */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
