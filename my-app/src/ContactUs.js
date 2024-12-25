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
    console.log(formData); // Form submission logic
  };

  return (
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

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default ContactUs;
