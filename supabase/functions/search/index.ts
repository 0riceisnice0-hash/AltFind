// Supabase Edge Function for product search
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SearchRequest {
  q: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  limit?: number;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Only accept POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const body: SearchRequest = await req.json();
    const { q, category, minPrice, maxPrice, limit = 24 } = body;

    // Validate query
    if (!q || q.length < 2) {
      return new Response(
        JSON.stringify({ error: 'Query must be at least 2 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate and cap limit
    const validLimit = Math.min(Math.max(1, limit || 24), 48);

    // Create Supabase client with service role key from environment
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase configuration');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Build query
    let query = supabase
      .from('products')
      .select(`
        id,
        title,
        image_url,
        price,
        currency,
        affiliate_url,
        category,
        retailer:retailers!retailer_id (
          name
        )
      `)
      .ilike('title', `%${q}%`);

    // Apply category filter if provided
    if (category) {
      query = query.eq('category', category);
    }

    // Apply price filters if provided
    if (minPrice !== undefined) {
      query = query.gte('price', minPrice);
    }
    if (maxPrice !== undefined) {
      query = query.lte('price', maxPrice);
    }

    // Order by newest, or by price if query contains "cheap"
    if (q.toLowerCase().includes('cheap')) {
      query = query.order('price', { ascending: true });
    } else {
      query = query.order('created_at', { ascending: false });
    }

    // Apply limit
    query = query.limit(validLimit);

    // Execute query
    const { data, error } = await query;

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Database query failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Transform results to flatten retailer name
    const results = (data || []).map((item: {
      id: number;
      title: string;
      image_url: string;
      price: number;
      currency: string;
      affiliate_url: string;
      category: string;
      retailer?: { name?: string };
    }) => ({
      id: item.id,
      title: item.title,
      image_url: item.image_url,
      price: item.price,
      currency: item.currency,
      affiliate_url: item.affiliate_url,
      category: item.category,
      retailer_name: item.retailer?.name || 'Unknown',
    }));

    return new Response(
      JSON.stringify({ results, count: results.length }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
