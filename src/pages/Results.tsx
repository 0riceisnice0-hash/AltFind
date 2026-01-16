import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { SearchFilters } from '../utils/search';
import { searchProducts } from '../utils/search';
import { FiltersBar } from '../components/FiltersBar';
import { ProductGrid } from '../components/ProductGrid';
import { Button } from '../components/ui/Button';
import './Results.css';

export const Results: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [filters, setFilters] = useState<SearchFilters>({
    maxPrice: 200,
    category: 'All',
    sort: 'similarity',
  });
  
  const [displayCount, setDisplayCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  
  const allResults = searchProducts(query, filters);
  const displayedResults = allResults.slice(0, displayCount);
  const hasMore = displayCount < allResults.length;

  // Reset display count when query or filters change
  // Use layout effect to avoid visual jank
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayCount(12);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [query, filters]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount(prev => prev + 12);
      setIsLoading(false);
    }, 300);
  };

  const handleClearFilters = () => {
    setFilters({
      maxPrice: 200,
      category: 'All',
      sort: 'similarity',
    });
  };

  return (
    <div className="results">
      <div className="results__container">
        <div className="results__header">
          <h1 className="results__title">Results for: "{query}"</h1>
          <p className="results__hint">
            💡 Tip: try pasting a product link for closer matches.
          </p>
        </div>

        <FiltersBar
          maxPrice={filters.maxPrice}
          category={filters.category}
          sort={filters.sort}
          onMaxPriceChange={(price) => setFilters({ ...filters, maxPrice: price })}
          onCategoryChange={(category) => setFilters({ ...filters, category })}
          onSortChange={(sort) => setFilters({ ...filters, sort })}
        />

        {displayedResults.length > 0 ? (
          <>
            <ProductGrid products={displayedResults} />
            
            {hasMore && (
              <div className="results__load-more">
                <Button 
                  onClick={handleLoadMore} 
                  disabled={isLoading}
                  size="large"
                  variant="outline"
                >
                  {isLoading ? 'Loading...' : 'Load more'}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="results__no-results">
            <div className="results__no-results-icon">🔍</div>
            <h2 className="results__no-results-title">No results found</h2>
            <p className="results__no-results-text">
              Try adjusting your filters or search for different items
            </p>
            <div className="results__no-results-suggestions">
              <p className="results__no-results-suggestions-label">Suggestions:</p>
              <ul className="results__no-results-list">
                <li>Increase the max price</li>
                <li>Change the category to "All"</li>
                <li>Try a different search term</li>
              </ul>
            </div>
            <Button onClick={handleClearFilters} variant="outline">
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
