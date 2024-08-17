// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';

import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects/:id" element={<ProjectPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
