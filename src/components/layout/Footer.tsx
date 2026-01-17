import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/discover" className="footer__link">Discover</Link>
          <Link to="/contact" className="footer__link">Contact</Link>
          <Link to="/legal" className="footer__link">Legal</Link>
        </div>
        <p className="footer__text">
          We may earn a commission from qualifying purchases.
        </p>
      </div>
    </footer>
  );
};
