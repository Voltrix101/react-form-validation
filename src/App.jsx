import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Success from './components/Success';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/success" element={<Success />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 