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
          AltFind
        </Link>
        <nav className="header__nav">
          <Link to="/" className="header__link">Home</Link>
          <Link to="/how-it-works" className="header__link">How it works</Link>
          <Link to="/about" className="header__link">About</Link>
          <Link to="/legal" className="header__link">Legal</Link>
        </nav>
        <Button onClick={handleTrySearch} size="small" className="header__cta">
          Try search
        </Button>
      </div>
    </header>
  );
};
