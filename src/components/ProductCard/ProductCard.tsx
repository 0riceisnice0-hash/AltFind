import React, { useState } from 'react';
import type { Product } from '../../types';
import { Button } from '../ui/Button';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    // In a real app, this would save to local storage or backend
  };

  const handleViewDeal = () => {
    window.open(product.outboundUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="product-card__image"
        />
        {product.commission && (
          <span className="product-card__commission">
            {product.commission}% commission
          </span>
        )}
        <button 
          className={`product-card__save ${isSaved ? 'product-card__save--active' : ''}`}
          onClick={handleSave}
          aria-label={isSaved ? 'Unsave' : 'Save'}
        >
          {isSaved ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__retailer">{product.retailer}</p>
        <p className="product-card__price">£{product.price.toFixed(2)}</p>
        <Button 
          onClick={handleViewDeal}
          size="small"
          className="product-card__button"
        >
          View deal
        </Button>
      </div>
    </div>
  );
};
