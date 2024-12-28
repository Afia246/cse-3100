// src/components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      style={{
        padding: '50px 20px',
        backgroundImage: `url('/images/back2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-start', // Align content to the left
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Contact Us Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px', width: '100%' }}>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Reach out to us through the form below or our contact details.</p>
      </div>

      {/* Contact Form */}
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          maxWidth: '600px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginLeft: '-25%', // Adjust the value to move further left
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you for reaching out! We will get back to you soon.');
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#007BFF',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>

      {/* Contact Details */}
      <div
        style={{
          marginTop: '30px',
          textAlign: 'center',
          color: 'white',
          width: '100%',
        }}
      >
<p><strong>Email:</strong> support@purrfectadoption.com</p>
<p><strong>Phone:</strong> +1 (123) 456-7890</p>
<p><strong>Address:</strong> 123 Cat Lane, Whiskerville, TX</p>
      </div>
    </section>
  );
};

export default ContactUs;
