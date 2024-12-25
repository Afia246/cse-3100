// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home'; // Import Home component
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Donate from './Donate';
import AvailableCats from './AvailableCats';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header section */}
        <header className="App-header">
          <div className="logo">Purrfect Adoption</div>
          <div className="nav-links">
            <Link to="/">Home</Link> {/* Link to Home Page */}
            <Link to="/about-us">About Us</Link>
            <Link to="/available-cats">Available Cats</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/available-cats" element={<AvailableCats />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
