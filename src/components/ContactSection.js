import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');
    emailjs
      .send(
        'service_157opcl', // Replace with your EmailJS Service ID
        'template_ug203pi', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'NSUfO9Y2FoZNUNXKf' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setStatusMessage('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setIsLoading(false);
        },
        (error) => {
          setStatusMessage('Failed to send the message. Please try again.');
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-description">
        Have a question or want to collaborate? Drop me a message below, and I'll get back to you!
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </section>
  );
};

export default ContactSection;
