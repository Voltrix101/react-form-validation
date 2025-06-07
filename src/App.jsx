import React, { useContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Success from './components/Success';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import './App.css';

function AppContent() {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark' : ''}`}>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App; 