/**
 * Update product prices in Shopify using the correct 2024 API
 */

import 'dotenv/config'

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || 'izmiad-nu.myshopify.com'
const ADMIN_API_TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN
const API_VERSION = '2024-01'

if (!ADMIN_API_TOKEN) {
  console.error('Error: SHOPIFY_ADMIN_API_TOKEN environment variable is not set')
  process.exit(1)
}

const productPrices: Record<string, { price: string; sku: string }> = {
  'classic-napa-cabbage-kimchi': { price: '8.50', sku: 'OK-CLASSIC-400' },
  'classic-kimchi-2-pack': { price: '16.15', sku: 'OK-CLASSIC-2PK' },
  'classic-kimchi-3-pack': { price: '22.95', sku: 'OK-CLASSIC-3PK' },
  'classic-kimchi-6-pack': { price: '43.35', sku: 'OK-CLASSIC-6PK' },
  'spicy-kimchi': { price: '9.00', sku: 'OK-SPICY-400' },
  'mild-kimchi': { price: '8.50', sku: 'OK-MILD-400' },
  'vegan-kimchi': { price: '9.00', sku: 'OK-VEGAN-400' },
}

async function adminFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const response = await fetch(
    `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ADMIN_API_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }
  )

  const json = await response.json()

  if (json.errors) {
    console.error('Admin API errors:', JSON.stringify(json.errors, null, 2))
    throw new Error(json.errors[0]?.message || 'Admin API error')
  }

  return json.data
}

async function main() {
  console.log('Fetching products to update prices...\n')

  // Get all products
  const result = await adminFetch<{
    products: {
      edges: Array<{
        node: {
          id: string
          handle: string
          title: string
          variants: {
            edges: Array<{
              node: {
                id: string
                price: string
              }
            }>
          }
        }
      }>
    }
  }>(`
    query {
      products(first: 20) {
        edges {
          node {
            id
            handle
            title
            variants(first: 1) {
              edges {
                node {
                  id
                  price
                }
              }
            }
          }
        }
      }
    }
  `)

  for (const { node: product } of result.products.edges) {
    const priceInfo = productPrices[product.handle]
    if (!priceInfo) {
      console.log(`Skipping ${product.title} - no price info`)
      continue
    }

    const variantId = product.variants.edges[0]?.node.id
    if (!variantId) {
      console.log(`Skipping ${product.title} - no variant`)
      continue
    }

    console.log(`Updating ${product.title} to £${priceInfo.price}...`)

    // Use productVariantsBulkUpdate which is the correct 2024 mutation
    try {
      await adminFetch(`
        mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
          productVariantsBulkUpdate(productId: $productId, variants: $variants) {
            productVariants {
              id
              price
              sku
            }
            userErrors {
              field
              message
            }
          }
        }
      `, {
        productId: product.id,
        variants: [{
          id: variantId,
          price: priceInfo.price,
        }]
      })
      console.log(`  Updated!`)
    } catch (error) {
      console.error(`  Failed:`, error)
    }
  }

  console.log('\nDone!')
}

main().catch(console.error)
