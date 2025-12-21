/**
 * Publish all products to Online Store sales channel
 */

import 'dotenv/config'

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || 'izmiad-nu.myshopify.com'
const ADMIN_API_TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN
const API_VERSION = '2024-01'

if (!ADMIN_API_TOKEN) {
  console.error('Error: SHOPIFY_ADMIN_API_TOKEN environment variable is not set')
  process.exit(1)
}

async function adminFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const response = await fetch(
    `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ADMIN_API_TOKEN!,
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
  console.log('='.repeat(50))
  console.log('Publishing products to Online Store...')
  console.log('='.repeat(50))
  console.log('')

  // First, get the Online Store publication ID
  console.log('Getting publications...')
  try {
    const pubResult = await adminFetch<{
      publications: {
        edges: Array<{
          node: {
            id: string
            name: string
          }
        }>
      }
    }>(`
      query {
        publications(first: 10) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `)

    console.log('Available publications:')
    for (const pub of pubResult.publications.edges) {
      console.log(`  - ${pub.node.name} (${pub.node.id})`)
    }

    const onlineStore = pubResult.publications.edges.find(
      e => e.node.name === 'Online Store'
    )

    if (!onlineStore) {
      console.log('\nNo Online Store publication found.')
      console.log('You may need to enable Online Store in Shopify Admin.')
      return
    }

    console.log(`\nUsing: ${onlineStore.node.name}`)

    // Get all products
    const productsResult = await adminFetch<{
      products: {
        edges: Array<{
          node: {
            id: string
            title: string
          }
        }>
      }
    }>(`
      query {
        products(first: 20) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `)

    console.log(`\nFound ${productsResult.products.edges.length} products to publish:\n`)

    // Publish each product
    for (const { node: product } of productsResult.products.edges) {
      console.log(`Publishing: ${product.title}...`)
      try {
        await adminFetch(`
          mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
            publishablePublish(id: $id, input: $input) {
              publishable {
                ... on Product {
                  id
                  title
                }
              }
              userErrors {
                field
                message
              }
            }
          }
        `, {
          id: product.id,
          input: [{ publicationId: onlineStore.node.id }]
        })
        console.log(`  Published!`)
      } catch (error) {
        console.error(`  Failed:`, error)
      }
    }

  } catch (error) {
    console.error('Error:', error)
    console.log('\nYour app may need the following scopes:')
    console.log('  - read_publications')
    console.log('  - write_publications')
    console.log('\nGo to Shopify Admin > Apps > [Your App] > API access to add them.')
  }

  console.log('')
  console.log('='.repeat(50))
  console.log('Done!')
  console.log('='.repeat(50))
}

main().catch(console.error)
