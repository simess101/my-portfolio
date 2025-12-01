/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        secondary: "#52C39C",
        accent: "#F5A623",
        dark: {
          background: "#1F2937", // gray-800
          text: "#F9FAFB", // gray-50
          card: "#374151", // gray-700
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};