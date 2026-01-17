import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { ProductCard } from '../components/ProductCard';
import { Badge } from '../components/ui/Badge';
import { mockProducts } from '../data/mockProducts';
import { searchProducts } from '../lib/api/search';
import { searchResultToProduct } from '../types';
import type { Product } from '../types';
import './Search.css';

export const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const recentSearches = [
    'black puffer jacket',
    'white sneakers',
    'leather watch',
    'hoodie',
    'cargo trousers',
  ];

  const recentlyViewed = mockProducts.slice(0, 4);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await searchProducts({ q: query, limit: 24 });
      const products = response.results.map(searchResultToProduct);
      setSearchResults(products);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search products');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="search">
      {/* Search Header */}
      <section className="search__header">
        <div className="search__header-content">
          <h1 className="search__title">Search Products</h1>
          <p className="search__subtitle">
            Find exactly what you're looking for
          </p>
          <div className="search__bar">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Recent Searches */}
      {!hasSearched && (
        <section className="search__section">
          <div className="search__container">
            <h2 className="search__section-title">Recent Searches</h2>
            <div className="search__badges">
              {recentSearches.map((query) => (
                <Badge 
                  key={query}
                  variant="default"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSearch(query)}
                >
                  {query}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recently Viewed */}
      {!hasSearched && (
        <section className="search__section search__section--alt">
          <div className="search__container">
            <h2 className="search__section-title">Recently Viewed</h2>
            <div className="search__grid">
              {recentlyViewed.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ProductCard product={product} showCommission={false} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search Results */}
      {hasSearched && (
        <section className="search__section">
          <div className="search__container">
            <h2 className="search__section-title">Search Results</h2>
            
            {isLoading && (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <p>Searching products...</p>
              </div>
            )}

            {error && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#e53e3e' }}>
                <p>Error: {error}</p>
              </div>
            )}

            {!isLoading && !error && searchResults.length === 0 && (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <p>No products found. Try a different search term.</p>
              </div>
            )}

            {!isLoading && !error && searchResults.length > 0 && (
              <>
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
                      <ProductCard product={product} showCommission={false} />
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
};
