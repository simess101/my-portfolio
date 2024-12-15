// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // You can keep your primary color or adjust as needed
        secondary: '#50E3C2',
        accent: '#F5A623',
        // Define dark mode specific colors
        dark: {
          background: '#1F2937', // Tailwind's gray-800
          text: '#F9FAFB', // Tailwind's gray-50
          card: '#374151', // Tailwind's gray-700
          // Add more colors as needed
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
