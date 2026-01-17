import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import './Contact.css';

export const Contact: React.FC = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [affiliateFormData, setAffiliateFormData] = useState({
    name: '',
    email: '',
    website: '',
    hearAbout: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleAffiliateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for applying! We\'ll review your application and get back to you soon.');
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAffiliateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAffiliateFormData({
      ...affiliateFormData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do commissions work?',
      answer: 'You earn a percentage of every sale made through your unique affiliate link. Commissions are tracked automatically and added to your account balance.',
    },
    {
      question: 'When do I get paid?',
      answer: 'Payments are processed monthly, typically within 5 business days of the month end. You need a minimum balance of £50 to receive payment. Payments are made via PayPal or bank transfer.',
    },
    {
      question: 'What products can I promote?',
      answer: 'You can promote any product available on AltFindr. We offer a wide range of products including outdoor gear, streetwear, workwear, tech accessories, and fitness items from various retailers.',
    },
    {
      question: 'How do I track my earnings?',
      answer: 'Once approved, you\'ll get access to your affiliate dashboard where you can track clicks, sales, and earnings in real-time. You\'ll also receive detailed monthly reports via email.',
    },
  ];

  return (
    <div className="contact">
      {/* Contact Section */}
      <div className="contact__section">
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
              <form onSubmit={handleContactSubmit} className="contact__form">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactFormData.name}
                    onChange={handleContactChange}
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
                    value={contactFormData.email}
                    onChange={handleContactChange}
                    className="contact__input"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__label">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={contactFormData.subject}
                    onChange={handleContactChange}
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
                    value={contactFormData.message}
                    onChange={handleContactChange}
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
                    Twitter
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                    Instagram
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliate Section */}
      <div className="affiliate__section">
        <div className="affiliate__container">
          <div className="affiliate__header">
            <h2 className="affiliate__title">Become an Affiliate</h2>
            <p className="affiliate__subtitle">
              Join our affiliate program and start earning by promoting great products
            </p>
          </div>

          {/* How It Works */}
          <div className="affiliate__how-it-works">
            <h3 className="affiliate__section-title">How It Works</h3>
            <div className="affiliate__steps">
              <div className="affiliate__step">
                <div className="affiliate__step-number">1</div>
                <h4 className="affiliate__step-title">Sign Up</h4>
                <p className="affiliate__step-text">Apply to become an affiliate - approval typically takes 24-48 hours</p>
              </div>
              <div className="affiliate__step">
                <div className="affiliate__step-number">2</div>
                <h4 className="affiliate__step-title">Get Your Links</h4>
                <p className="affiliate__step-text">Access unique tracking links for any product on our platform</p>
              </div>
              <div className="affiliate__step">
                <div className="affiliate__step-number">3</div>
                <h4 className="affiliate__step-title">Share & Earn</h4>
                <p className="affiliate__step-text">Promote products and earn commission on every sale</p>
              </div>
              <div className="affiliate__step">
                <div className="affiliate__step-number">4</div>
                <h4 className="affiliate__step-title">Get Paid</h4>
                <p className="affiliate__step-text">Receive monthly payments via PayPal or bank transfer</p>
              </div>
            </div>
          </div>

          {/* Affiliate Application Form */}
          <div className="affiliate__form-wrapper">
            <h3 className="affiliate__section-title">Apply Now</h3>
            <form onSubmit={handleAffiliateSubmit} className="affiliate__form">
              <div className="affiliate__form-row">
                <div className="affiliate__form-group">
                  <label htmlFor="affiliate-name" className="affiliate__label">Full Name</label>
                  <input
                    type="text"
                    id="affiliate-name"
                    name="name"
                    value={affiliateFormData.name}
                    onChange={handleAffiliateChange}
                    className="affiliate__input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="affiliate__form-group">
                  <label htmlFor="affiliate-email" className="affiliate__label">Email Address</label>
                  <input
                    type="email"
                    id="affiliate-email"
                    name="email"
                    value={affiliateFormData.email}
                    onChange={handleAffiliateChange}
                    className="affiliate__input"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="affiliate__form-row">
                <div className="affiliate__form-group">
                  <label htmlFor="website" className="affiliate__label">Website / Social Handle</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={affiliateFormData.website}
                    onChange={handleAffiliateChange}
                    className="affiliate__input"
                    placeholder="@yourhandle or yourwebsite.com"
                    required
                  />
                </div>

                <div className="affiliate__form-group">
                  <label htmlFor="hearAbout" className="affiliate__label">How did you hear about us?</label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={affiliateFormData.hearAbout}
                    onChange={handleAffiliateChange}
                    className="affiliate__input"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="social">Social Media</option>
                    <option value="search">Search Engine</option>
                    <option value="referral">Friend/Referral</option>
                    <option value="blog">Blog/Article</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <Button type="submit" variant="primary" size="large" className="affiliate__submit">
                Submit Application
              </Button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="affiliate__faq">
            <h3 className="affiliate__section-title">Frequently Asked Questions</h3>
            <div className="affiliate__faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="affiliate__faq-item">
                  <button
                    className={`affiliate__faq-question ${openFaq === index ? 'affiliate__faq-question--open' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span className="affiliate__faq-icon">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="affiliate__faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
