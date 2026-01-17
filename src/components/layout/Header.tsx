import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import './Header.css';

export const Header: React.FC = () => {
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
          <Link to="/cart" className="header__link">Cart</Link>
          <Link to="/promote" className="header__link">Promote</Link>
          <Link to="/contact" className="header__link">Contact</Link>
        </nav>
        <Link to="/login" className="header__login-link">
          <Button size="small" className="header__cta">
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
};
