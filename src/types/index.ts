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

export interface SearchResult {
  id: number;
  title: string;
  image_url: string;
  price: number;
  currency: string;
  affiliate_url: string;
  category: string;
  retailer_name: string;
}

// Adapter function to convert SearchResult to Product
export function searchResultToProduct(result: SearchResult): Product {
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

export type Category = 'All' | 'Jackets' | 'Hoodies' | 'Trousers' | 'Trainers' | 'Boots' | 'Watches' | 'Sneakers' | 'Accessories' | 'Bags';

export type SortOption = 'similarity' | 'price-low' | 'price-high';
