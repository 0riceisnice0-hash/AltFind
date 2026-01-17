import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { mockProducts } from '../data/mockProducts';
import './Category.css';

export const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  // Map URL slugs to product categories
  const categoryMap: { [key: string]: { name: string; productCategory: string; description: string } } = {
    'watches': {
      name: 'Watches',
      productCategory: 'Watches',
      description: 'Discover premium timepieces with great commission rates. From classic designs to modern styles.',
    },
    'hoodies': {
      name: 'Hoodies',
      productCategory: 'Hoodies',
      description: 'Promote comfortable and stylish hoodies. Perfect for casual wear and streetwear enthusiasts.',
    },
    'sneakers': {
      name: 'Sneakers',
      productCategory: 'Sneakers',
      description: 'Share the latest sneaker trends with your audience. From classic whites to statement pieces.',
    },
    'jackets': {
      name: 'Jackets',
      productCategory: 'Jackets',
      description: 'Promote stylish outerwear for every season. From puffers to bombers and everything in between.',
    },
    'accessories': {
      name: 'Accessories',
      productCategory: 'Accessories',
      description: 'Complete any outfit with these must-have accessories. Belts, sunglasses, wallets, and more.',
    },
    'bags': {
      name: 'Bags',
      productCategory: 'Bags',
      description: 'Promote practical and stylish bags for every occasion. Totes, backpacks, and designer pieces.',
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
            Best {categoryInfo.name} Products to Promote
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
                    <ProductCard product={product} />
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
