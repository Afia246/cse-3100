// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <h2>Welcome to Purrfect Adoption</h2>
      <p>
        We are dedicated to finding loving homes for cats in need. Join us in our mission to help
        feline friends find their forever homes. Explore our pages to learn more about our mission,
        available cats, how to donate, or get in touch with us.
      </p>
      <div className="intro-buttons">
        <button onClick={() => window.location.href = '/about-us'}>Learn About Us</button>
        <button onClick={() => window.location.href = '/available-cats'}>See Available Cats</button>
        <button onClick={() => window.location.href = '/donate'}>Donate Now</button>
        <button onClick={() => window.location.href = '/contact-us'}>Contact Us</button>
      </div>
    </section>
  );
};

export default Home;
