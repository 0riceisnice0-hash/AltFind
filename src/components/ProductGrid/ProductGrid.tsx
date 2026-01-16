import React from 'react';
import type { Product } from '../../types';
import { ProductCard } from '../ProductCard';
import './ProductGrid.css';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
