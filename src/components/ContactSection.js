import React, { useState, useContext } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactSection.css";
import { ThemeContext } from "./ThemeContext";

const ContactSection = () => {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear status when user starts editing again
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    // Simple front-end validation (name, contact, email required)
    if (!formData.name || !formData.contactNumber || !formData.email) {
      setIsLoading(false);
      setStatus({
        type: "error",
        message: "Please fill in your name, contact number, and email.",
      });
      return;
    }

    emailjs
      .send(
        "service_157opcl",
        "template_ug203pi",
        {
          name: formData.name,
          contactNumber: formData.contactNumber, // make sure your EmailJS template has this variable
          email: formData.email,
          message: formData.message,
        },
        "NSUfO9Y2FoZNUNXKf"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
          });
          setFormData({
            name: "",
            contactNumber: "",
            email: "",
            message: "",
          });
          setIsLoading(false);
        },
        () => {
          setStatus({
            type: "error",
            message:
              "Failed to send the message. Please try again in a moment.",
          });
          setIsLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`contact-section ${theme || "light"}`}
    >
      <div className="contact-inner">
        <div className="contact-header">
          <span className="section-pill">Get in touch</span>
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-description">
            Have a question, an opportunity, or just want to say hi? 
            Share a few details below and I&apos;ll respond as soon as I can.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: info panel */}
          <div className="contact-info-card">
            <h3>Let&apos;s talk about</h3>
            <ul className="contact-info-list">
              <li>• Software engineering or DevOps roles</li>
              <li>• Cloud-native deployments and CI/CD pipelines</li>
              <li>• Freelance or consulting work</li>
            </ul>
            <div className="contact-highlight">
              <span className="status-dot" />
              <span>Typically replies within 24–48 hours</span>
            </div>
            <div className="contact-meta-text">
              <p>
                Required fields: <strong>Name</strong>,{" "}
                <strong>Contact Number</strong>, and <strong>Email</strong>.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-field">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contactNumber">
                  Contact Number <span className="required">*</span>
                </label>
                <input
                  id="contactNumber"
                  type="tel"
                  name="contactNumber"
                  placeholder="Your phone or WhatsApp number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What would you like to discuss?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <button type="submit" disabled={isLoading} className="contact-submit">
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {status.message && (
                <p className={`status-message ${status.type}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
