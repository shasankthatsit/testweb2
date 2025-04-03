import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Reminders from './pages/Reminders';
import StudyPlanner from './pages/StudyPlanner';
import AICompanion from './pages/AICompanion';
import PersonalityTest from './pages/PersonalityTest';
import InterviewQuestions from './pages/InterviewQuestions';
import AdditionalFeatures from './pages/AdditionalFeatures';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Toaster position="top-right" />
          <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="pt-16 px-4 md:px-6 lg:px-8 transition-all duration-200 ease-in-out">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/study-planner" element={<StudyPlanner />} />
              <Route path="/ai-companion" element={<AICompanion />} />
              <Route path="/personality-test" element={<PersonalityTest />} />
              <Route path="/interview-questions" element={<InterviewQuestions />} />
              <Route path="/additional-features" element={<AdditionalFeatures />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;