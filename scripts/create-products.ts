/**
 * Script to create Ollie's Kimchi products in Shopify
 * Run with: npx tsx scripts/create-products.ts
 */

import 'dotenv/config'

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || 'izmiad-nu.myshopify.com'
const ADMIN_API_TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN
const API_VERSION = '2024-01'

if (!ADMIN_API_TOKEN) {
  console.error('Error: SHOPIFY_ADMIN_API_TOKEN environment variable is not set')
  process.exit(1)
}

interface ProductInput {
  title: string
  descriptionHtml: string
  productType: string
  vendor: string
  tags: string[]
  variants: {
    price: string
    sku: string
    inventoryQuantities?: {
      availableQuantity: number
      locationId: string
    }
  }[]
}

const products: ProductInput[] = [
  {
    title: 'Classic Napa Cabbage Kimchi',
    descriptionHtml: `<p>Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce.</p>
<p>Fermented to perfection for that perfect balance of spicy, tangy, and umami flavours.</p>
<h3>Ingredients</h3>
<p>Napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, spring onions, fish sauce, salt.</p>
<h3>Storage</h3>
<p>Keep refrigerated. Best consumed within 4 weeks of opening.</p>
<p><strong>Size:</strong> 400g</p>`,
    productType: 'Kimchi',
    vendor: "Ollie's Kimchi",
    tags: ['kimchi', 'fermented', 'probiotic', 'classic', 'napa cabbage'],
    variants: [{ price: '8.50', sku: 'OK-CLASSIC-400' }]
  },
  {
    title: 'Classic Kimchi - 2 Pack',
    descriptionHtml: `<p><strong>Save 5%!</strong> Two jars of our signature Classic Napa Cabbage Kimchi.</p>
<p>Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce.</p>
<p>Fermented to perfection for that perfect balance of spicy, tangy, and umami flavours.</p>
<h3>What's Included</h3>
<p>2 x 400g jars of Classic Napa Cabbage Kimchi</p>
<h3>Storage</h3>
<p>Keep refrigerated. Best consumed within 4 weeks of opening.</p>`,
    productType: 'Kimchi Bundle',
    vendor: "Ollie's Kimchi",
    tags: ['kimchi', 'fermented', 'probiotic', 'classic', 'bundle', '2-pack', 'value'],
    variants: [{ price: '16.15', sku: 'OK-CLASSIC-2PK' }]
  },
  {
    title: 'Classic Kimchi - 3 Pack',
    descriptionHtml: `<p><strong>Save 10%!</strong> Three jars of our signature Classic Napa Cabbage Kimchi.</p>
<p>Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce.</p>
<p>Fermented to perfection for that perfect balance of spicy, tangy, and umami flavours.</p>
<h3>What's Included</h3>
<p>3 x 400g jars of Classic Napa Cabbage Kimchi</p>
<h3>Storage</h3>
<p>Keep refrigerated. Best consumed within 4 weeks of opening.</p>`,
    productType: 'Kimchi Bundle',
    vendor: "Ollie's Kimchi",
    tags: ['kimchi', 'fermented', 'probiotic', 'classic', 'bundle', '3-pack', 'value'],
    variants: [{ price: '22.95', sku: 'OK-CLASSIC-3PK' }]
  },
  {
    title: 'Classic Kimchi - 6 Pack',
    descriptionHtml: `<p><strong>Save 15%!</strong> Six jars of our signature Classic Napa Cabbage Kimchi - best value!</p>
<p>Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce.</p>
<p>Fermented to perfection for that perfect balance of spicy, tangy, and umami flavours.</p>
<h3>What's Included</h3>
<p>6 x 400g jars of Classic Napa Cabbage Kimchi</p>
<h3>Storage</h3>
<p>Keep refrigerated. Best consumed within 4 weeks of opening.</p>`,
    productType: 'Kimchi Bundle',
    vendor: "Ollie's Kimchi",
    tags: ['kimchi', 'fermented', 'probiotic', 'classic', 'bundle', '6-pack', 'value', 'best-value'],
    variants: [{ price: '43.35', sku: 'OK-CLASSIC-6PK' }]
  },
  {
    title: 'Spicy Kimchi',
    descriptionHtml: `<p>Extra kick for those who like it hot. Same great fermentation, more heat.</p>
<p>Made with additional gochugaru and fresh chillies for those who crave the burn.</p>
<h3>Ingredients</h3>
<p>Napa cabbage, extra Korean red pepper flakes, fresh red chillies, garlic, ginger, spring onions, fish sauce, salt.</p>
<h3>Storage</h3>
<p>Keep refrigerated. Best consumed within 4 weeks of opening.</p>
<p><strong>Size:</strong> 400g</p>`,
    productType: 'Kimchi',
    vendor: "Ollie's Kimchi",
    tags: ['kimchi', 'fermented', 'probiotic', 'spicy', 'hot'],
    variants: [{ price: '9.00', sku: 'OK-SPICY-400' }]
  },
  {
    title: 'Mild Kimchi',
    descriptionHtml: `<p>All the probiotic benefits with a gentler spice level.</p>
<p>Perfect for beginners or those who prefer less heat but still want authentic kimchi flavour.</p>
<h3>Ingredients</h3>
<p>Napa cabbage, mild Korean red pepper flakes, garlic, ginger, spring onions, fish sauce, salt.</p>
<h3>Storage</h3>
<p>Keep refrigerated. Best consumed within 4 weeks of opening.</p>
<p><strong>Size:</strong> 400g</p>`,
    productType: 'Kimchi',
    vendor: "Ollie's Kimchi",
    tags: ['kimchi', 'fermented', 'probiotic', 'mild', 'beginner-friendly'],
    variants: [{ price: '8.50', sku: 'OK-MILD-400' }]
  },
  {
    title: 'Vegan Kimchi',
    descriptionHtml: `<p>Traditional flavour without fish sauce.</p>
<p>100% plant-based fermentation using kelp and miso for umami depth. All the probiotics, completely vegan.</p>
<h3>Ingredients</h3>
<p>Napa cabbage, Korean red pepper flakes, garlic, ginger, spring onions, kelp, miso paste, salt.</p>
<h3>Storage</h3>
<p>Keep refrigerated. Best consumed within 4 weeks of opening.</p>
<p><strong>Size:</strong> 400g</p>`,
    productType: 'Kimchi',
    vendor: "Ollie's Kimchi",
    tags: ['kimchi', 'fermented', 'probiotic', 'vegan', 'plant-based'],
    variants: [{ price: '9.00', sku: 'OK-VEGAN-400' }]
  }
]

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

async function createProduct(product: ProductInput) {
  console.log(`Creating product: ${product.title}...`)

  // First, create the product
  const createProductMutation = `
    mutation productCreate($input: ProductInput!) {
      productCreate(input: $input) {
        product {
          id
          title
          handle
          variants(first: 1) {
            edges {
              node {
                id
                price
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `

  const result = await adminFetch<{
    productCreate: {
      product: { id: string; title: string; handle: string; variants: { edges: { node: { id: string; price: string } }[] } } | null
      userErrors: { field: string[]; message: string }[]
    }
  }>(createProductMutation, {
    input: {
      title: product.title,
      descriptionHtml: product.descriptionHtml,
      productType: product.productType,
      vendor: product.vendor,
      tags: product.tags,
    }
  })

  if (result.productCreate.userErrors.length > 0) {
    console.error('User errors:', result.productCreate.userErrors)
    throw new Error(result.productCreate.userErrors[0].message)
  }

  const createdProduct = result.productCreate.product
  if (!createdProduct) {
    throw new Error('Product creation failed - no product returned')
  }

  console.log(`  Created: ${createdProduct.title} (${createdProduct.handle})`)

  // Now update the variant price
  const variantId = createdProduct.variants.edges[0]?.node.id
  if (variantId && product.variants[0]) {
    const updateVariantMutation = `
      mutation productVariantUpdate($input: ProductVariantInput!) {
        productVariantUpdate(input: $input) {
          productVariant {
            id
            price
          }
          userErrors {
            field
            message
          }
        }
      }
    `

    await adminFetch(updateVariantMutation, {
      input: {
        id: variantId,
        price: product.variants[0].price,
        sku: product.variants[0].sku,
      }
    })

    console.log(`  Updated variant price to £${product.variants[0].price}`)
  }

  return createdProduct
}

async function main() {
  console.log('='.repeat(50))
  console.log("Creating Ollie's Kimchi products in Shopify...")
  console.log(`Store: ${SHOPIFY_STORE_DOMAIN}`)
  console.log('='.repeat(50))
  console.log('')

  for (const product of products) {
    try {
      await createProduct(product)
      console.log('')
    } catch (error) {
      console.error(`Failed to create ${product.title}:`, error)
    }
  }

  console.log('='.repeat(50))
  console.log('Done! Products created in Shopify.')
  console.log('You can now add images to the products in Shopify Admin.')
  console.log('='.repeat(50))
}

main().catch(console.error)
