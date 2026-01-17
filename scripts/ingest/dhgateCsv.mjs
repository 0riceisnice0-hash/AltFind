#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import { parse } from 'csv-parse/sync';
import { decode } from 'he';
import { readFileSync } from 'fs';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Parse command line arguments
const args = process.argv.slice(2);
let filePath = './data/DHaff_Products_20260118.csv';
let category = 'jackets';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--file' && args[i + 1]) {
    filePath = args[i + 1];
    i++;
  } else if (args[i] === '--category' && args[i + 1]) {
    category = args[i + 1];
    i++;
  }
}

// Hardcoded public Supabase URL
const SUPABASE_URL = "https://ijsxucmpnfdvqgfgyntl.supabase.co";

// Service role key from environment
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Error: SUPABASE_SERVICE_ROLE_KEY environment variable is required');
  console.error('Please create a .env file with your service role key');
  process.exit(1);
}

// Create Supabase client with service role key
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function ensureRetailer() {
  // Check if DHgate retailer exists
  const { data: existing, error: selectError } = await supabase
    .from('retailers')
    .select('id')
    .eq('domain', 'dhgate.com')
    .single();

  if (existing) {
    console.log('DHgate retailer found:', existing.id);
    return existing.id;
  }

  // Insert DHgate retailer
  const { data: inserted, error: insertError } = await supabase
    .from('retailers')
    .insert({ name: 'DHgate', domain: 'dhgate.com' })
    .select('id')
    .single();

  if (insertError) {
    throw new Error(`Failed to create retailer: ${insertError.message}`);
  }

  console.log('DHgate retailer created:', inserted.id);
  return inserted.id;
}

async function ingestCSV() {
  console.log(`Reading CSV file: ${filePath}`);
  console.log(`Category: ${category}`);

  // Read CSV file
  let csvContent;
  try {
    csvContent = readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
  }

  // Parse CSV
  let records;
  try {
    records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      relax_column_count: true,
    });
  } catch (error) {
    console.error(`Error parsing CSV: ${error.message}`);
    process.exit(1);
  }

  console.log(`Parsed ${records.length} records from CSV`);

  // Ensure retailer exists
  const retailerId = await ensureRetailer();

  // Process records
  let inserted = 0;
  let updated = 0;
  let skipped = 0;

  for (const record of records) {
    const spuCode = record['SPU(item code)'];
    const title = record['Product Title'];
    const mainImage = record['Main Image'];
    const priceUsd = record['Price(USD)'];
    const productLink = record['Product link'];
    const promotionLink = record['PromotionLongLink'];

    // Validate required fields
    if (!spuCode || !title || !promotionLink) {
      skipped++;
      continue;
    }

    // Decode HTML entities in title
    const decodedTitle = decode(title);

    // Parse price
    const price = priceUsd ? parseFloat(priceUsd) : null;

    // Build product object
    const product = {
      retailer_id: retailerId,
      source: 'dhgate',
      retailer_product_id: spuCode.toString(),
      title: decodedTitle,
      image_url: mainImage || null,
      price: price,
      currency: 'USD',
      source_url: productLink || null,
      affiliate_url: promotionLink,
      category: category,
      updated_at: new Date().toISOString(),
    };

    // Upsert product (insert or update based on unique constraint)
    const { data, error } = await supabase
      .from('products')
      .upsert(product, {
        onConflict: 'source,retailer_product_id',
        ignoreDuplicates: false,
      })
      .select();

    if (error) {
      console.error(`Error upserting product ${spuCode}:`, error.message);
      skipped++;
      continue;
    }

    // Check if it was an insert or update
    // Since we can't easily determine this, we'll count all successful operations as updates
    // In practice, Supabase doesn't distinguish between insert/update in upsert response
    updated++;
  }

  console.log('\n=== Ingestion Complete ===');
  console.log(`Total records: ${records.length}`);
  console.log(`Successfully processed: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

// Run the ingestion
ingestCSV()
  .then(() => {
    console.log('Ingestion completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Ingestion failed:', error.message);
    process.exit(1);
  });
