import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { mockProducts } from '../data/mockProducts';
import './Discover.css';

export const Discover: React.FC = () => {
  // Get products with highest commissions
  const topCommissionProducts = [...mockProducts]
    .sort((a, b) => (b.commission || 0) - (a.commission || 0))
    .slice(0, 8);

  // Get popular products (first 8)
  const popularProducts = mockProducts.slice(0, 8);

  const categories = [
    { name: 'Watches', slug: 'watches', emoji: '⌚' },
    { name: 'Hoodies', slug: 'hoodies', emoji: '👕' },
    { name: 'Sneakers', slug: 'sneakers', emoji: '👟' },
    { name: 'Jackets', slug: 'jackets', emoji: '🧥' },
    { name: 'Accessories', slug: 'accessories', emoji: '🕶️' },
    { name: 'Bags', slug: 'bags', emoji: '👜' },
  ];

  return (
    <div className="discover">
      {/* Hero Section */}
      <section className="discover__hero">
        <div className="discover__hero-content">
          <h1 className="discover__hero-title">Discover Products to Promote</h1>
          <p className="discover__hero-subtitle">
            Browse our curated collection of products with great commission rates
          </p>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="discover__section">
        <div className="discover__section-header">
          <h2 className="discover__section-title">Popular Products</h2>
          <p className="discover__section-subtitle">
            Trending items that affiliates love to promote
          </p>
        </div>
        <div className="discover__grid">
          {popularProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </section>

      {/* Top Commission Section */}
      <section className="discover__section discover__section--alt">
        <div className="discover__section-header">
          <h2 className="discover__section-title">Top Commission</h2>
          <p className="discover__section-subtitle">
            Maximize your earnings with these high-commission products
          </p>
        </div>
        <div className="discover__grid">
          {topCommissionProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="discover__section">
        <div className="discover__section-header">
          <h2 className="discover__section-title">Browse by Category</h2>
          <p className="discover__section-subtitle">
            Find the perfect products for your audience
          </p>
        </div>
        <div className="discover__categories">
          {categories.map((category) => (
            <Link 
              key={category.slug} 
              to={`/category/${category.slug}`}
              className="discover__category-card"
            >
              <span className="discover__category-emoji">{category.emoji}</span>
              <h3 className="discover__category-title">Best {category.name} to Promote</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
