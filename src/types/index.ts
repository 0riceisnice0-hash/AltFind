export interface Product {
  id: string;
  title: string;
  retailer: string;
  price: number;
  category: string;
  imageUrl: string;
  outboundUrl: string;
  commission?: number; // Commission percentage (e.g., 8 for 8%)
  description?: string;
}

export type Category = 'All' | 'Jackets' | 'Hoodies' | 'Trousers' | 'Trainers' | 'Boots' | 'Watches' | 'Sneakers' | 'Accessories' | 'Bags';

export type SortOption = 'similarity' | 'price-low' | 'price-high';

// Re-export SearchResult from API module
export type { SearchResult } from '../lib/api/search';

// Adapter function to convert SearchResult to Product
export function searchResultToProduct(result: import('../lib/api/search').SearchResult): Product {
  return {
    id: result.id.toString(),
    title: result.title,
    retailer: result.retailer_name,
    price: result.price,
    category: result.category,
    imageUrl: result.image_url,
    outboundUrl: result.affiliate_url,
  };
}
