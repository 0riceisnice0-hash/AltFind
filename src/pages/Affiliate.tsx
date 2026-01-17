import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import './Affiliate.css';

export const Affiliate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    hearAbout: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for applying! We\'ll review your application and get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do commissions work?',
      answer: 'You earn a percentage of every sale made through your unique affiliate link. Commission rates vary by product, typically ranging from 6% to 13%. Commissions are tracked automatically and added to your account balance.',
    },
    {
      question: 'When do I get paid?',
      answer: 'Payments are processed monthly, typically within 5 business days of the month end. You need a minimum balance of £50 to receive payment. Payments are made via PayPal or bank transfer.',
    },
    {
      question: 'What products can I promote?',
      answer: 'You can promote any product available on AltFindr. We offer a wide range of fashion items including jackets, hoodies, sneakers, watches, accessories, and bags from various retailers.',
    },
    {
      question: 'How do I track my earnings?',
      answer: 'Once approved, you\'ll get access to your affiliate dashboard where you can track clicks, sales, and earnings in real-time. You\'ll also receive detailed monthly reports via email.',
    },
  ];

  const benefits = [
    { icon: '💰', title: 'Earn Commission', text: 'Make money on every sale through your links' },
    { icon: '🔗', title: 'Easy Sharing', text: 'Get unique links for every product' },
    { icon: '📊', title: 'Track Performance', text: 'Monitor your clicks and earnings' },
    { icon: '🎯', title: 'No Minimums', text: 'Start promoting with no follower requirements' },
    { icon: '🚀', title: 'Fast Approval', text: 'Get started within 24-48 hours' },
    { icon: '🤝', title: 'Dedicated Support', text: 'Our team is here to help you succeed' },
  ];

  return (
    <div className="affiliate">
      {/* Hero Section */}
      <section className="affiliate__hero">
        <div className="affiliate__hero-content">
          <h1 className="affiliate__hero-title">Become an Affiliate</h1>
          <p className="affiliate__hero-subtitle">
            Join thousands of creators earning money by promoting great products
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="affiliate__section">
        <div className="affiliate__container">
          <h2 className="affiliate__section-title">Why Join Our Program?</h2>
          <div className="affiliate__benefits">
            {benefits.map((benefit, index) => (
              <div key={index} className="affiliate__benefit-card">
                <span className="affiliate__benefit-icon">{benefit.icon}</span>
                <h3 className="affiliate__benefit-title">{benefit.title}</h3>
                <p className="affiliate__benefit-text">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="affiliate__section affiliate__section--alt">
        <div className="affiliate__container">
          <h2 className="affiliate__section-title">Apply Now</h2>
          <div className="affiliate__form-wrapper">
            <form onSubmit={handleSubmit} className="affiliate__form">
              <div className="affiliate__form-group">
                <label htmlFor="name" className="affiliate__label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="affiliate__input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="affiliate__form-group">
                <label htmlFor="email" className="affiliate__label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="affiliate__input"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="affiliate__form-group">
                <label htmlFor="website" className="affiliate__label">Website / Social Handle</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
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
                  value={formData.hearAbout}
                  onChange={handleChange}
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

              <Button type="submit" variant="primary" size="large" className="affiliate__submit">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="affiliate__section">
        <div className="affiliate__container">
          <h2 className="affiliate__section-title">Frequently Asked Questions</h2>
          <div className="affiliate__faq">
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
      </section>
    </div>
  );
};
