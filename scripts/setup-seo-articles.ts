/**
 * Setup SEO Articles Database Schema
 * Run with: DATABASE_URL="..." npx tsx scripts/setup-seo-articles.ts
 */

import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set')
  process.exit(1)
}

const sql = neon(DATABASE_URL)

async function main() {
  console.log('Setting up SEO articles schema...\n')

  // Create the seo_articles table
  await sql`
    CREATE TABLE IF NOT EXISTS seo_articles (
      id SERIAL PRIMARY KEY,
      article_id VARCHAR(10) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      meta_title VARCHAR(60) NOT NULL,
      meta_description VARCHAR(160) NOT NULL,
      primary_keyword VARCHAR(100) NOT NULL,
      secondary_keywords TEXT[],
      search_volume INTEGER,
      word_count INTEGER,
      content TEXT NOT NULL,
      excerpt TEXT,
      hero_image_url VARCHAR(500),
      hero_image_alt VARCHAR(255),
      schema_type VARCHAR(50) NOT NULL DEFAULT 'article',
      schema_json JSONB,
      cluster VARCHAR(50) NOT NULL,
      phase INTEGER NOT NULL DEFAULT 1,
      status VARCHAR(20) NOT NULL DEFAULT 'draft',
      author VARCHAR(100) DEFAULT 'Ollie''s Kimchi',
      internal_links TEXT[],
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      published_at TIMESTAMP WITH TIME ZONE
    )
  `
  console.log('Created seo_articles table')

  // Create index on slug for fast lookups
  await sql`
    CREATE INDEX IF NOT EXISTS idx_seo_articles_slug ON seo_articles(slug)
  `

  // Create index on cluster for filtering
  await sql`
    CREATE INDEX IF NOT EXISTS idx_seo_articles_cluster ON seo_articles(cluster)
  `

  // Create index on status for filtering published articles
  await sql`
    CREATE INDEX IF NOT EXISTS idx_seo_articles_status ON seo_articles(status)
  `

  // Create index on phase for ordered content rollout
  await sql`
    CREATE INDEX IF NOT EXISTS idx_seo_articles_phase ON seo_articles(phase)
  `

  console.log('Created indexes')

  // Create a function to update the updated_at timestamp
  await sql`
    CREATE OR REPLACE FUNCTION update_seo_articles_updated_at()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = CURRENT_TIMESTAMP;
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql
  `

  // Create trigger to auto-update updated_at
  await sql`
    DROP TRIGGER IF EXISTS trigger_update_seo_articles_timestamp ON seo_articles
  `

  await sql`
    CREATE TRIGGER trigger_update_seo_articles_timestamp
    BEFORE UPDATE ON seo_articles
    FOR EACH ROW
    EXECUTE FUNCTION update_seo_articles_updated_at()
  `

  console.log('Created update trigger')

  console.log('\nSEO articles schema setup complete!')
  console.log('\nTable structure:')
  console.log('  - id: Auto-incrementing primary key')
  console.log('  - article_id: Unique identifier (e.g., P-001, R-001)')
  console.log('  - title: Article title')
  console.log('  - slug: URL slug (e.g., kimchi, traditional-kimchi-recipe)')
  console.log('  - meta_title: SEO title (max 60 chars)')
  console.log('  - meta_description: SEO description (max 160 chars)')
  console.log('  - primary_keyword: Main target keyword')
  console.log('  - secondary_keywords: Array of secondary keywords')
  console.log('  - search_volume: Monthly search volume')
  console.log('  - word_count: Article word count')
  console.log('  - content: Full article content (HTML)')
  console.log('  - excerpt: Short description')
  console.log('  - hero_image_url: Featured image URL')
  console.log('  - hero_image_alt: Image alt text')
  console.log('  - schema_type: article, recipe, faq, etc.')
  console.log('  - schema_json: Structured data JSON')
  console.log('  - cluster: pillar, recipes, health, commercial, culture, uses')
  console.log('  - phase: 1-5 for content rollout')
  console.log('  - status: draft, published')
  console.log('  - author: Article author')
  console.log('  - internal_links: Array of linked article slugs')
  console.log('  - created_at, updated_at, published_at: Timestamps')
}

main().catch(console.error)
