import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ProductCard';
import { mockProducts } from '../data/mockProducts';
import './Product.css';

export const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the product or use first one as fallback
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  
  // Get related products from same category
  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    alert('Added to cart!');
    // In real app, would add to cart state/localStorage
  };

  return (
    <div className="product">
      <div className="product__container">
        {/* Product Main Section */}
        <div className="product__main">
          <div className="product__image-section">
            <img 
              src={product.imageUrl} 
              alt={product.title}
              className="product__image"
            />
          </div>

          <div className="product__info-section">
            <h1 className="product__title">{product.title}</h1>
            <p className="product__retailer">Sold by {product.retailer}</p>
            <p className="product__price">£{product.price.toFixed(2)}</p>
            
            <div className="product__description">
              <h2 className="product__description-title">Description</h2>
              <p className="product__description-text">
                {product.description || 'Premium quality product with great style and comfort. Perfect for everyday wear and special occasions.'}
              </p>
            </div>

            <div className="product__actions">
              <Button 
                onClick={handleAddToCart}
                variant="primary"
                size="large"
                className="product__action-button"
              >
                Add to Cart
              </Button>
              <Link to={`/promote/${product.id}`} className="product__promote-link">
                <Button 
                  variant="outline"
                  size="large"
                  className="product__action-button"
                >
                  Promote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="product__related">
            <h2 className="product__related-title">Related Products</h2>
            <div className="product__related-grid">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/product/${relatedProduct.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ProductCard product={relatedProduct} showCommission={false} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
