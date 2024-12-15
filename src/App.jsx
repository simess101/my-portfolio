// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import NotionClone from './pages/NotionClone';
import TextEditorInC from './pages/TextEditorInC';
import QuickDraw from './pages/QuickDraw';
import GoGameAI from './pages/GoGameAI';
import MagicTheGatheringDatabase from './pages/MagicTheGatheringDatabase';
// Import other project detail pages as needed
 
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/notion-clone" element={<NotionClone />} />
            <Route path="/projects/text-editor-in-c" element={<TextEditorInC />} />
            <Route path="/projects/quickdraw" element={<QuickDraw />} />
            <Route path="/projects/go-game-ai" element={<GoGameAI />} />
            <Route path="/projects/magic-the-gathering-database" element={<MagicTheGatheringDatabase />} />
            {/* Add more project detail routes here */}
            <Route path="/contact" element={<ContactPage />} />
            {/* 404 Page Not Found Route */}
            <Route
              path="*"
              element={
                <div className="text-center p-10 text-gray-900 dark:text-gray-100">
                  <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
                  <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
 
export default App;
