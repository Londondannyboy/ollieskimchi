/**
 * Upload product images to Shopify and publish products
 */

import 'dotenv/config'
import * as fs from 'fs'
import * as path from 'path'

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || 'izmiad-nu.myshopify.com'
const ADMIN_API_TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN
const API_VERSION = '2024-01'

if (!ADMIN_API_TOKEN) {
  console.error('Error: SHOPIFY_ADMIN_API_TOKEN environment variable is not set')
  process.exit(1)
}

// Map product handles to their images
const productImages: Record<string, string[]> = {
  'classic-napa-cabbage-kimchi': ['Kimchi_B004_23-04-25.jpg'],
  'classic-kimchi-2-pack': ['Kimchi_B004_23-04-25.jpg'],
  'classic-kimchi-3-pack': ['Kimchi_B004_23-04-25.jpg'],
  'classic-kimchi-6-pack': ['Kimchi_B004_23-04-25.jpg'],
  'spicy-kimchi': ['Kimchi_B006_30-11-20.jpg'],
  'mild-kimchi': ['Kimchi_B012_24-04-21.jpg'],
  'vegan-kimchi': ['Kimchi_B014_02-04-21.jpg'],
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

async function getProducts() {
  const result = await adminFetch<{
    products: {
      edges: Array<{
        node: {
          id: string
          handle: string
          title: string
          status: string
          featuredImage: { url: string } | null
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
            status
            featuredImage { url }
          }
        }
      }
    }
  `)

  return result.products.edges.map(e => e.node)
}

async function uploadImageToProduct(productId: string, imagePath: string, altText: string) {
  // Read the image file and convert to base64
  const absolutePath = path.join(process.cwd(), 'public', 'Assets', imagePath)

  if (!fs.existsSync(absolutePath)) {
    console.error(`  Image not found: ${absolutePath}`)
    return null
  }

  const imageBuffer = fs.readFileSync(absolutePath)
  const base64Image = imageBuffer.toString('base64')
  const mimeType = 'image/jpeg'

  // Create the image using productCreateMedia mutation
  const result = await adminFetch<{
    productCreateMedia: {
      media: Array<{ id: string; status: string }> | null
      mediaUserErrors: Array<{ field: string[]; message: string }>
    }
  }>(`
    mutation productCreateMedia($productId: ID!, $media: [CreateMediaInput!]!) {
      productCreateMedia(productId: $productId, media: $media) {
        media {
          ... on MediaImage {
            id
            status
          }
        }
        mediaUserErrors {
          field
          message
        }
      }
    }
  `, {
    productId,
    media: [{
      originalSource: `data:${mimeType};base64,${base64Image}`,
      alt: altText,
      mediaContentType: 'IMAGE'
    }]
  })

  if (result.productCreateMedia.mediaUserErrors.length > 0) {
    console.error('  Media errors:', result.productCreateMedia.mediaUserErrors)
    return null
  }

  return result.productCreateMedia.media
}

async function publishProduct(productId: string) {
  // First get the publication (Online Store)
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

  const onlineStore = pubResult.publications.edges.find(
    e => e.node.name === 'Online Store'
  )

  if (!onlineStore) {
    console.log('  No Online Store publication found')
    return
  }

  // Publish to Online Store
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
    id: productId,
    input: [{ publicationId: onlineStore.node.id }]
  })
}

async function setProductActive(productId: string) {
  await adminFetch(`
    mutation productUpdate($input: ProductInput!) {
      productUpdate(input: $input) {
        product {
          id
          status
        }
        userErrors {
          field
          message
        }
      }
    }
  `, {
    input: {
      id: productId,
      status: 'ACTIVE'
    }
  })
}

async function main() {
  console.log('='.repeat(50))
  console.log('Uploading images and publishing products...')
  console.log('='.repeat(50))
  console.log('')

  const products = await getProducts()

  for (const product of products) {
    const images = productImages[product.handle]
    if (!images) {
      console.log(`Skipping ${product.title} - no images configured`)
      continue
    }

    console.log(`Processing ${product.title}...`)

    // Upload images if product doesn't have one
    if (!product.featuredImage) {
      for (const imageName of images) {
        console.log(`  Uploading ${imageName}...`)
        try {
          await uploadImageToProduct(product.id, imageName, product.title)
          console.log(`  Uploaded!`)
        } catch (error) {
          console.error(`  Failed to upload:`, error)
        }
      }
    } else {
      console.log(`  Already has image, skipping upload`)
    }

    // Set product to active
    console.log(`  Setting to ACTIVE...`)
    try {
      await setProductActive(product.id)
      console.log(`  Activated!`)
    } catch (error) {
      console.error(`  Failed to activate:`, error)
    }

    // Publish to Online Store
    console.log(`  Publishing to Online Store...`)
    try {
      await publishProduct(product.id)
      console.log(`  Published!`)
    } catch (error) {
      console.error(`  Failed to publish:`, error)
    }

    console.log('')
  }

  console.log('='.repeat(50))
  console.log('Done! Products should now be visible in your store.')
  console.log('='.repeat(50))
}

main().catch(console.error)
