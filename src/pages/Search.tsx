import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { ProductCard } from '../components/ProductCard';
import { Badge } from '../components/ui/Badge';
import { mockProducts } from '../data/mockProducts';
import './Search.css';

export const Search: React.FC = () => {
  const [searchResults] = useState(mockProducts.slice(0, 12));

  const recentSearches = [
    'black puffer jacket',
    'white sneakers',
    'leather watch',
    'hoodie',
    'cargo trousers',
  ];

  const recentViews = mockProducts.slice(0, 4);

  return (
    <div className="search">
      {/* Search Header */}
      <section className="search__header">
        <div className="search__header-content">
          <h1 className="search__title">Search Products</h1>
          <p className="search__subtitle">
            Find the perfect products to promote
          </p>
          <div className="search__bar">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Recent Searches */}
      <section className="search__section">
        <div className="search__container">
          <h2 className="search__section-title">Recent Searches</h2>
          <div className="search__badges">
            {recentSearches.map((query) => (
              <Badge 
                key={query}
                variant="default"
                style={{ cursor: 'pointer' }}
              >
                {query}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Views */}
      <section className="search__section search__section--alt">
        <div className="search__container">
          <h2 className="search__section-title">Recent Views</h2>
          <div className="search__grid">
            {recentViews.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="search__section">
        <div className="search__container">
          <h2 className="search__section-title">All Products</h2>
          <p className="search__results-count">
            Showing {searchResults.length} products
          </p>
          <div className="search__grid">
            {searchResults.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
