// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import './App.css';
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './components/Home'; // Import Home component
import AvailableCats from "./components/AvailableCats";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
// Placeholder components for the other pages
//const AvailableCats = () => <div>Available Cats</div>;
//const AboutUs = () => <div>About Us</div>;
//const ContactUs = () => <div>Contact Us</div>;

function App() {
  return (
    <Router> {/* Wrap the app with Router */}
      <div className="App">
        <Navbar /> {/* Render the Navbar */}
        <Routes> {/* Define the routes */}
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/available-cats" element={<AvailableCats />} /> {/* Available Cats route */}
          <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
          <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
