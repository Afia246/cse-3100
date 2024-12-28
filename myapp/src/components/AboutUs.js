// src/components/AboutUs.jsx
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
        backgroundImage: `url('/images/back8.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 0',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* About Us Section */}
      <div className="about-text" style={{ padding: '20px', maxWidth: '800px' }}>
        <div className="mission-history">
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
            Founded in 2024, Purrfect Adoption began as a small group of passionate animal lovers who
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
        <div
          className="team-cards"
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-card"
              style={{
                textAlign: 'center',
                padding: '10px',
                maxWidth: '200px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: 'white',
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
                style={{ width: '150px', borderRadius: '50%', marginBottom: '10px' }}
              />
              <h4 style={{ margin: '10px 0' }}>{member.name}</h4>
              <p style={{ fontSize: '14px', color: '#555' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
