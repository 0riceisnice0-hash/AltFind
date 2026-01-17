import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import './Header.css';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleTrySearch = () => {
    navigate('/');
    // Scroll to search after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          AltFindr
        </Link>
        <nav className="header__nav">
          <Link to="/" className="header__link">Home</Link>
          <Link to="/discover" className="header__link">Discover</Link>
          <Link to="/search" className="header__link">Search</Link>
          <Link to="/contact" className="header__link">Contact</Link>
          <Link to="/affiliate" className="header__link">Affiliate</Link>
        </nav>
        <Button onClick={handleTrySearch} size="small" className="header__cta">
          Try search
        </Button>
      </div>
    </header>
  );
};
