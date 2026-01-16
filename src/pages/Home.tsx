import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import './Home.css';

export const Home: React.FC = () => {
  const exampleQueries = [
    'black puffer jacket',
    'black zip hoodie',
    'grey cargo trousers',
    'white trainers',
    'brown leather boots',
  ];

  const handleExampleClick = (query: string) => {
    const searchInput = document.querySelector<HTMLInputElement>('.search-bar input');
    if (searchInput) {
      searchInput.value = query;
      searchInput.focus();
    }
  };

  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-content">
          <h1 className="home__hero-title">Find similar clothes for less</h1>
          <p className="home__hero-subtitle">
            Paste a product link or type what you're looking for. AltFind shows visually 
            similar picks at lower prices.
          </p>
          <div className="home__search">
            <SearchBar />
          </div>
          <div className="home__examples">
            <span className="home__examples-label">Try:</span>
            {exampleQueries.map((query, index) => (
              <Badge 
                key={index}
                variant="default"
                onClick={() => handleExampleClick(query)}
                style={{ cursor: 'pointer' }}
              >
                {query}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="home__trust">
        <div className="home__trust-item">
          <div className="home__trust-icon">🔍</div>
          <h3 className="home__trust-title">Visual similarity matching</h3>
          <p className="home__trust-text">Find items that look alike</p>
        </div>
        <div className="home__trust-item">
          <div className="home__trust-icon">💰</div>
          <h3 className="home__trust-title">Cheaper alternatives</h3>
          <p className="home__trust-text">Save on similar styles</p>
        </div>
        <div className="home__trust-item">
          <div className="home__trust-icon">🏪</div>
          <h3 className="home__trust-title">Links to trusted retailers</h3>
          <p className="home__trust-text">Shop with confidence</p>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="home__how-it-works">
        <h2 className="home__section-title">How it works</h2>
        <div className="home__steps">
          <div className="home__step">
            <div className="home__step-number">1</div>
            <h3 className="home__step-title">Search or paste a link</h3>
            <p className="home__step-text">Enter what you're looking for or paste a product URL</p>
          </div>
          <div className="home__step">
            <div className="home__step-number">2</div>
            <h3 className="home__step-title">We find similar options</h3>
            <p className="home__step-text">Our algorithm matches style and finds alternatives</p>
          </div>
          <div className="home__step">
            <div className="home__step-number">3</div>
            <h3 className="home__step-title">You choose the best price</h3>
            <p className="home__step-text">Compare and pick the deal that works for you</p>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="home__cta">
        <h2 className="home__cta-title">Ready to try it?</h2>
        <Button size="large" onClick={scrollToSearch}>
          Start searching
        </Button>
      </section>
    </div>
  );
};
