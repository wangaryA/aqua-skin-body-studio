import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="subtitle">We'd Love to Hear From You</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Have questions about our services or want to learn more about how we can
                help you achieve your skincare goals? Reach out to us!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Visit Us</h3>
                    <p>123 Wellness Boulevard, Suite 100<br />San Francisco, CA 94102</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Call Us</h3>
                    <p>(415) 555-0123</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h3>Email Us</h3>
                    <p>hello@aquaskinbody.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🕐</div>
                  <div className="contact-text">
                    <h3>Hours</h3>
                    <p>Mon-Fri: 10AM - 7PM<br />Sat: 9AM - 5PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    Instagram
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h2>Thank You!</h2>
                  <p>Your message has been sent successfully. We'll get back to you within 24-48 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Send Us a Message</h2>

                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="appointment">Appointment Question</option>
                      <option value="treatment">Treatment Information</option>
                      <option value="products">Product Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="Aqua Skin & Body Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977627026654!2d-122.41941968468187!3d37.77492977975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA%2094102!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
