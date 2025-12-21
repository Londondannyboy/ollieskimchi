import { neon } from '@neondatabase/serverless'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const sql = neon(DATABASE_URL)

async function addComponentColumns() {
  console.log('Adding new JSONB columns for content enhancement components...\n')

  try {
    // Add nutrition_data column
    await sql`
      ALTER TABLE seo_articles
      ADD COLUMN IF NOT EXISTS nutrition_data jsonb
    `
    console.log('Added: nutrition_data')

    // Add faq_data column
    await sql`
      ALTER TABLE seo_articles
      ADD COLUMN IF NOT EXISTS faq_data jsonb
    `
    console.log('Added: faq_data')

    // Add comparison_data column
    await sql`
      ALTER TABLE seo_articles
      ADD COLUMN IF NOT EXISTS comparison_data jsonb
    `
    console.log('Added: comparison_data')

    // Add timeline_data column
    await sql`
      ALTER TABLE seo_articles
      ADD COLUMN IF NOT EXISTS timeline_data jsonb
    `
    console.log('Added: timeline_data')

    // Add products_data column
    await sql`
      ALTER TABLE seo_articles
      ADD COLUMN IF NOT EXISTS products_data jsonb
    `
    console.log('Added: products_data')

    // Add facts_data column
    await sql`
      ALTER TABLE seo_articles
      ADD COLUMN IF NOT EXISTS facts_data jsonb
    `
    console.log('Added: facts_data')

    // Add storage_data column
    await sql`
      ALTER TABLE seo_articles
      ADD COLUMN IF NOT EXISTS storage_data jsonb
    `
    console.log('Added: storage_data')

    // Add pairings_data column
    await sql`
      ALTER TABLE seo_articles
      ADD COLUMN IF NOT EXISTS pairings_data jsonb
    `
    console.log('Added: pairings_data')

    console.log('\n All 8 columns added successfully!')

    // Verify columns exist
    const columns = await sql`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_name = 'seo_articles'
      AND column_name IN (
        'nutrition_data', 'faq_data', 'comparison_data', 'timeline_data',
        'products_data', 'facts_data', 'storage_data', 'pairings_data'
      )
      ORDER BY column_name
    `

    console.log('\nVerification - New columns in seo_articles:')
    columns.forEach(col => {
      console.log(`  - ${col.column_name}: ${col.data_type}`)
    })

  } catch (error) {
    console.error('Error adding columns:', error)
    throw error
  }
}

addComponentColumns()
