import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { mockProducts } from '../data/mockProducts';
import './Discover.css';

export const Discover: React.FC = () => {
  // Get popular products
  const popularProducts = mockProducts.slice(0, 12);

  const categories = [
    { 
      name: 'Mountaineering / Outdoor', 
      slug: 'outdoor',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
      description: 'Gear for adventure seekers'
    },
    { 
      name: 'Streetwear', 
      slug: 'streetwear',
      image: 'https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?auto=format&fit=crop&w=800&q=80',
      description: 'Urban fashion essentials'
    },
    { 
      name: 'Workwear', 
      slug: 'workwear',
      image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80',
      description: 'Professional attire'
    },
    { 
      name: 'Tech Accessories', 
      slug: 'tech',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
      description: 'Gadgets and accessories'
    },
    { 
      name: 'Fitness', 
      slug: 'fitness',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
      description: 'Workout gear and apparel'
    },
  ];

  return (
    <div className="discover">
      {/* Hero Section */}
      <section className="discover__hero">
        <div className="discover__hero-content">
          <h1 className="discover__hero-title">Discover Products</h1>
          <p className="discover__hero-subtitle">
            Browse our curated collection of quality products
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="discover__section">
        <div className="discover__section-header">
          <h2 className="discover__section-title">Shop by Category</h2>
          <p className="discover__section-subtitle">
            Find the perfect products for your style
          </p>
        </div>
        <div className="discover__categories">
          {categories.map((category) => (
            <Link 
              key={category.slug} 
              to={`/category/${category.slug}`}
              className="discover__category-card"
            >
              <div 
                className="discover__category-image"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="discover__category-content">
                <h3 className="discover__category-title">{category.name}</h3>
                <p className="discover__category-description">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="discover__section discover__section--alt">
        <div className="discover__section-header">
          <h2 className="discover__section-title">Popular Products</h2>
          <p className="discover__section-subtitle">
            Trending items shoppers love
          </p>
        </div>
        <div className="discover__grid">
          {popularProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ProductCard product={product} showCommission={false} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
