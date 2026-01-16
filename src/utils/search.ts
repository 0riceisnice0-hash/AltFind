import type { Product, Category, SortOption } from '../types';
import { mockProducts } from '../data/mockProducts';

export interface SearchFilters {
  maxPrice: number;
  category: Category;
  sort: SortOption;
}

export const searchProducts = (
  query: string,
  filters: SearchFilters
): Product[] => {
  const keywords = query.toLowerCase().split(/\s+/).filter(k => k.length > 0);
  
  let results = mockProducts.map(product => {
    let score = 0;
    const productText = `${product.title} ${product.category}`.toLowerCase();
    
    keywords.forEach(keyword => {
      if (productText.includes(keyword)) {
        score += 1;
      }
    });
    
    return { product, score };
  });

  // Filter by category
  if (filters.category !== 'All') {
    results = results.filter(r => r.product.category === filters.category);
  }

  // Filter by max price
  results = results.filter(r => r.product.price <= filters.maxPrice);

  // Sort by score first (relevance)
  results.sort((a, b) => b.score - a.score);

  // Apply secondary sorting
  if (filters.sort === 'price-low') {
    results.sort((a, b) => a.product.price - b.product.price);
  } else if (filters.sort === 'price-high') {
    results.sort((a, b) => b.product.price - a.product.price);
  }
  // 'similarity' uses the default score sorting

  return results.map(r => r.product);
};

export const isUrl = (text: string): boolean => {
  return text.startsWith('http://') || 
         text.startsWith('https://') || 
         text.includes('.com') || 
         text.includes('.co.uk') ||
         text.includes('.net') ||
         text.includes('.org');
};
