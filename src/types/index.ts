export interface Product {
  id: string;
  title: string;
  retailer: string;
  price: number;
  category: string;
  imageUrl: string;
  outboundUrl: string;
}

export type Category = 'All' | 'Jackets' | 'Hoodies' | 'Trousers' | 'Trainers' | 'Boots';

export type SortOption = 'similarity' | 'price-low' | 'price-high';
