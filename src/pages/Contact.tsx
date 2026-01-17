import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h1 className="contact__title">Get in Touch</h1>
          <p className="contact__subtitle">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="contact__content">
          {/* Contact Form */}
          <div className="contact__form-section">
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__input"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__input"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject" className="contact__label">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact__input"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="affiliate">Affiliate Program</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="large" className="contact__submit">
                Send Message
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="contact__sidebar">
            <div className="contact__info-card">
              <h2 className="contact__info-title">Connect With Us</h2>
              <div className="contact__social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                  <span className="contact__social-icon">𝕏</span>
                  Twitter
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                  <span className="contact__social-icon">📷</span>
                  Instagram
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                  <span className="contact__social-icon">🎵</span>
                  TikTok
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <h2 className="contact__info-title">Become an Affiliate</h2>
              <p className="contact__info-text">
                Join our affiliate program and start earning commission on every sale.
              </p>
              <Link to="/affiliate">
                <Button variant="outline" size="medium" className="contact__affiliate-button">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
