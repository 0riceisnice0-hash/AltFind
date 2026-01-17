import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { mockProducts } from '../data/mockProducts';
import './Category.css';

export const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  // Map URL slugs to product categories
  const categoryMap: { [key: string]: { name: string; productCategory: string; description: string } } = {
    'outdoor': {
      name: 'Mountaineering / Outdoor',
      productCategory: 'Jackets', // Using existing products as placeholder
      description: 'Gear for adventure seekers and outdoor enthusiasts. From rugged jackets to technical equipment.',
    },
    'streetwear': {
      name: 'Streetwear',
      productCategory: 'Hoodies', // Using existing products as placeholder
      description: 'Urban fashion essentials. Stay on-trend with the latest streetwear styles.',
    },
    'workwear': {
      name: 'Workwear',
      productCategory: 'Jackets', // Using existing products as placeholder
      description: 'Professional attire for the modern workplace. Stylish and functional.',
    },
    'tech': {
      name: 'Tech Accessories',
      productCategory: 'Accessories', // Using existing products as placeholder
      description: 'Gadgets and accessories for the tech-savvy. Enhance your digital lifestyle.',
    },
    'fitness': {
      name: 'Fitness',
      productCategory: 'Trainers', // Using existing products as placeholder
      description: 'Workout gear and apparel. Perform your best with quality fitness products.',
    },
    // Legacy categories
    'watches': {
      name: 'Watches',
      productCategory: 'Watches',
      description: 'Discover premium timepieces. From classic designs to modern styles.',
    },
    'hoodies': {
      name: 'Hoodies',
      productCategory: 'Hoodies',
      description: 'Comfortable and stylish hoodies. Perfect for casual wear.',
    },
    'sneakers': {
      name: 'Sneakers',
      productCategory: 'Sneakers',
      description: 'Latest sneaker trends. From classic whites to statement pieces.',
    },
    'jackets': {
      name: 'Jackets',
      productCategory: 'Jackets',
      description: 'Stylish outerwear for every season. From puffers to bombers.',
    },
    'accessories': {
      name: 'Accessories',
      productCategory: 'Accessories',
      description: 'Complete any outfit with must-have accessories.',
    },
    'bags': {
      name: 'Bags',
      productCategory: 'Bags',
      description: 'Practical and stylish bags for every occasion.',
    },
  };

  const categoryInfo = categoryMap[category || ''] || {
    name: 'Products',
    productCategory: '',
    description: 'Explore our collection of products.',
  };

  // Filter products by category
  const categoryProducts = mockProducts.filter(
    p => p.category.toLowerCase() === categoryInfo.productCategory.toLowerCase()
  );

  return (
    <div className="category">
      {/* Hero Section */}
      <section className="category__hero">
        <div className="category__hero-content">
          <h1 className="category__hero-title">
            {categoryInfo.name}
          </h1>
          <p className="category__hero-subtitle">
            {categoryInfo.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="category__products">
        <div className="category__container">
          {categoryProducts.length > 0 ? (
            <>
              <div className="category__stats">
                <p className="category__count">
                  {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''} available
                </p>
              </div>
              <div className="category__grid">
                {categoryProducts.map((product) => (
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
          ) : (
            <div className="category__empty">
              <p className="category__empty-text">
                No products found in this category yet. Check back soon!
              </p>
              <Link to="/discover">
                <button className="category__back-button">
                  Browse All Products
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
