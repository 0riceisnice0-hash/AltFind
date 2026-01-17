import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../supabasePublic';

export interface SearchRequest {
  q: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  limit?: number;
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

export interface SearchResponse {
  results: SearchResult[];
  count: number;
}

export async function searchProducts(request: SearchRequest): Promise<SearchResponse> {
  const response = await fetch(`${SUPABASE_URL}/functions/v1/search`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Failed to search products' }));
    throw new Error(error.error || 'Failed to search products');
  }

  return response.json();
}
