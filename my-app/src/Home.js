// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url('/images/back1.jpg')`, // Use the relative URL for the image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Position content closer to the top
        padding: '50px 20px', // Add padding to adjust the vertical position
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '48px', // Larger font size for heading
          fontWeight: 'bold', // Bold text
          color: '#000', // Black text
          marginBottom: '20px',
        }}
      >
        Welcome to Purrfect Adoption
      </h2>
      <p
        style={{
          fontSize: '24px', // Larger font size for paragraph
          fontWeight: '500', // Semi-bold text
          color: '#000', // Black text
          maxWidth: '800px',
          lineHeight: '1.5', // Better line spacing
        }}
      >
        We are dedicated to finding loving homes for cats in need. Join us in our mission to help
                               feline friends find their forever homes. 
      </p>
    </section>
  );
};

export default Home;
