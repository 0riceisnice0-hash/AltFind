import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import './Login.css';

export const Login: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isSignup ? 'Signup successful!' : 'Login successful!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleLogin = () => {
    alert('Google login will be implemented');
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__card">
          <h1 className="login__title">
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="login__subtitle">
            {isSignup ? 'Sign up to start shopping' : 'Log in to your account'}
          </p>

          <button onClick={handleGoogleLogin} className="login__google-btn">
            <svg className="login__google-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="login__divider">
            <span className="login__divider-text">or</span>
          </div>

          <form onSubmit={handleSubmit} className="login__form">
            {isSignup && (
              <div className="login__form-group">
                <label htmlFor="name" className="login__label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="login__input"
                  placeholder="John Doe"
                  required
                />
              </div>
            )}

            <div className="login__form-group">
              <label htmlFor="email" className="login__label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="login__input"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="login__form-group">
              <label htmlFor="password" className="login__label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="login__input"
                placeholder="••••••••"
                required
              />
            </div>

            {!isSignup && (
              <div className="login__forgot">
                <Link to="/forgot-password" className="login__forgot-link">
                  Forgot password?
                </Link>
              </div>
            )}

            <Button type="submit" variant="primary" size="large" className="login__submit">
              {isSignup ? 'Sign Up' : 'Log In'}
            </Button>
          </form>

          <div className="login__toggle">
            <p className="login__toggle-text">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <button 
                onClick={() => setIsSignup(!isSignup)}
                className="login__toggle-btn"
              >
                {isSignup ? 'Log In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
