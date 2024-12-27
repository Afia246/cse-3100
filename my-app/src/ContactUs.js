import React, { useState } from 'react';
import './ContactUs.css'; // Assuming specific CSS for Contact Us

const ContactUs = () => {
  // State for form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Form submission logic (you can add your submission logic here)
  };

  return (
    <div
      id="contact-us"
      style={{
        backgroundImage: `url('/images/back2.jpg')`, // Path to your background image
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
      <section className="contact-us-section">
        <h1 className="contact-us-heading">Contact Us</h1>
        <p className="contact-us-description">
          We’d love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out. Our team is here to help and will get back to you as soon as possible.
        </p>

        <form className="contact-us-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
