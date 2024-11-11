import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Import the Login component
import Dashboard from './Dashboard'; // Import the Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Route for Login */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route for Dashboard */}
      </Routes>
    </Router>
  );
};

export default App;
