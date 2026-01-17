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
