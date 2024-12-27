// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  // Team member data
  const teamMembers = [
    { id: 1, name: 'Afia', role: 'Director', image: '/images/gsrg.jpg' },
  
  ];

  return (
    <section
      id="about-us"
      style={{
        backgroundImage: `url('/images/back8.jpg')`, // Path to your background image
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Center the background image
        padding: '50px 0', // Adjust padding as needed
        color: 'black', // Set the text color to black
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Horizontally center the content
        justifyContent: 'center', // Vertically center the content
        textAlign: 'center', // Center align text inside the section
      }}
    >
      {/* About Us Section */}
      <h2>About Us</h2>
      <div className="about-text">
        <div className="mission-history" style={{ maxWidth: '800px' }}>
          <h3>Our Mission</h3>
          <p>
            At Purrfect Adoption, we are dedicated to finding loving and caring homes for cats in need.
            Our mission is to raise awareness about animal adoption and to ensure that each cat has a
            chance to live a happy and healthy life in a safe and loving environment. We aim to educate
            people about responsible pet ownership, and we work with local shelters and veterinary offices
            to provide the best care possible for our feline friends.
          </p>
          <h3>Our History</h3>
          <p>
            Founded in 2010, Purrfect Adoption began as a small group of passionate animal lovers who
            wanted to make a difference in the lives of cats in our community. Over the years, we have
            expanded our operations, built strong partnerships with various animal shelters, and adopted
            out over 1,000 cats. Our organization has grown into a well-known name in the community, and
            we continue to work towards our vision of creating a world where every cat has a loving home.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="team-section" style={{ marginTop: '30px' }}>
        <h3>Meet Our Team</h3>
        <div className="team-cards" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card" style={{ textAlign: 'center' }}>
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
                style={{ width: '150px', borderRadius: '50%' }}
              />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
