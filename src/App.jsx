import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Success from './components/Success';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 