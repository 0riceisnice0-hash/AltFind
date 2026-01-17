-- Create retailers table
CREATE TABLE retailers (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  domain text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE products (
  id bigserial PRIMARY KEY,
  retailer_id bigint REFERENCES retailers(id),
  source text NOT NULL DEFAULT 'dhgate',
  retailer_product_id text NOT NULL,
  title text NOT NULL,
  image_url text,
  price numeric,
  currency text DEFAULT 'USD',
  source_url text,
  affiliate_url text,
  category text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT unique_source_product UNIQUE(source, retailer_product_id)
);

-- Create indexes for performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_products_retailer_id ON products(retailer_id);

-- Enable Row Level Security
ALTER TABLE retailers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Do NOT create anon select policies - tables must not be readable from anon client
-- All reads go through Edge Functions with service role key
