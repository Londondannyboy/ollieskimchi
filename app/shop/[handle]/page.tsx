import { getProductByHandle, formatPrice, isShopifyConfigured } from '@/lib/shopify'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AddToCartButton from './AddToCartButton'

// Demo products for when Shopify isn't configured
const demoProducts: Record<string, {
  id: string
  title: string
  handle: string
  description: string
  descriptionHtml: string
  price: string
  variantId: string
  image: string
  images: string[]
}> = {
  'classic-napa-cabbage-kimchi': {
    id: '1',
    title: 'Classic Napa Cabbage Kimchi',
    handle: 'classic-napa-cabbage-kimchi',
    description: 'Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce. Fermented to perfection for that perfect balance of spicy, tangy, and umami flavours.',
    descriptionHtml: '<p>Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce.</p><p>Fermented to perfection for that perfect balance of spicy, tangy, and umami flavours.</p><h3>Ingredients</h3><p>Napa cabbage, Korean red pepper flakes, garlic, ginger, spring onions, fish sauce, salt.</p><h3>Storage</h3><p>Keep refrigerated. Best consumed within 4 weeks of opening.</p><p><strong>Size:</strong> 400g</p>',
    price: '8.50',
    variantId: 'gid://shopify/ProductVariant/53034599219533',
    image: '/Assets/Kimchi_B004_23-04-25.jpg',
    images: ['/Assets/Kimchi_B004_23-04-25.jpg', '/Assets/Kimchi_B006_30-11-20.jpg'],
  },
  'classic-kimchi-2-pack': {
    id: '2',
    title: 'Classic Kimchi - 2 Pack',
    handle: 'classic-kimchi-2-pack',
    description: 'Save 5%! Two jars of our signature Classic Napa Cabbage Kimchi.',
    descriptionHtml: '<p><strong>Save 5%!</strong> Two jars of our signature Classic Napa Cabbage Kimchi.</p><p>Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce.</p><h3>What\'s Included</h3><p>2 x 400g jars of Classic Napa Cabbage Kimchi</p>',
    price: '16.15',
    variantId: 'gid://shopify/ProductVariant/53034599252301',
    image: '/Assets/Kimchi_B004_23-04-25.jpg',
    images: ['/Assets/Kimchi_B004_23-04-25.jpg'],
  },
  'classic-kimchi-3-pack': {
    id: '3',
    title: 'Classic Kimchi - 3 Pack',
    handle: 'classic-kimchi-3-pack',
    description: 'Save 10%! Three jars of our signature Classic Napa Cabbage Kimchi.',
    descriptionHtml: '<p><strong>Save 10%!</strong> Three jars of our signature Classic Napa Cabbage Kimchi.</p><p>Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce.</p><h3>What\'s Included</h3><p>3 x 400g jars of Classic Napa Cabbage Kimchi</p>',
    price: '22.95',
    variantId: 'gid://shopify/ProductVariant/53034599285069',
    image: '/Assets/Kimchi_B004_23-04-25.jpg',
    images: ['/Assets/Kimchi_B004_23-04-25.jpg'],
  },
  'classic-kimchi-6-pack': {
    id: '4',
    title: 'Classic Kimchi - 6 Pack',
    handle: 'classic-kimchi-6-pack',
    description: 'Save 15%! Six jars of our signature Classic Napa Cabbage Kimchi - best value!',
    descriptionHtml: '<p><strong>Save 15%!</strong> Six jars of our signature Classic Napa Cabbage Kimchi - best value!</p><p>Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce.</p><h3>What\'s Included</h3><p>6 x 400g jars of Classic Napa Cabbage Kimchi</p>',
    price: '43.35',
    variantId: 'gid://shopify/ProductVariant/53034599317837',
    image: '/Assets/Kimchi_B004_23-04-25.jpg',
    images: ['/Assets/Kimchi_B004_23-04-25.jpg'],
  },
  'spicy-kimchi': {
    id: '5',
    title: 'Spicy Kimchi',
    handle: 'spicy-kimchi',
    description: 'Extra kick for those who like it hot. Same great fermentation, more heat. Made with additional gochugaru and fresh chillies.',
    descriptionHtml: '<p>Extra kick for those who like it hot. Same great fermentation, more heat.</p><p>Made with additional gochugaru and fresh chillies for those who crave the burn.</p><h3>Ingredients</h3><p>Napa cabbage, extra Korean red pepper flakes, fresh red chillies, garlic, ginger, spring onions, fish sauce, salt.</p><h3>Storage</h3><p>Keep refrigerated. Best consumed within 4 weeks of opening.</p><p><strong>Size:</strong> 400g</p>',
    price: '9.00',
    variantId: 'gid://shopify/ProductVariant/53034599350605',
    image: '/Assets/Kimchi_B006_30-11-20.jpg',
    images: ['/Assets/Kimchi_B006_30-11-20.jpg'],
  },
  'mild-kimchi': {
    id: '6',
    title: 'Mild Kimchi',
    handle: 'mild-kimchi',
    description: 'All the probiotic benefits with a gentler spice level. Perfect for beginners or those who prefer less heat.',
    descriptionHtml: '<p>All the probiotic benefits with a gentler spice level.</p><p>Perfect for beginners or those who prefer less heat but still want authentic kimchi flavour.</p><h3>Ingredients</h3><p>Napa cabbage, mild Korean red pepper flakes, garlic, ginger, spring onions, fish sauce, salt.</p><h3>Storage</h3><p>Keep refrigerated. Best consumed within 4 weeks of opening.</p><p><strong>Size:</strong> 400g</p>',
    price: '8.50',
    variantId: 'gid://shopify/ProductVariant/53034599383373',
    image: '/Assets/Kimchi_B012_24-04-21.jpg',
    images: ['/Assets/Kimchi_B012_24-04-21.jpg'],
  },
  'vegan-kimchi': {
    id: '7',
    title: 'Vegan Kimchi',
    handle: 'vegan-kimchi',
    description: 'Traditional flavour without fish sauce. 100% plant-based fermentation using kelp and miso for umami depth.',
    descriptionHtml: '<p>Traditional flavour without fish sauce.</p><p>100% plant-based fermentation using kelp and miso for umami depth. All the probiotics, completely vegan.</p><h3>Ingredients</h3><p>Napa cabbage, Korean red pepper flakes, garlic, ginger, spring onions, kelp, miso paste, salt.</p><h3>Storage</h3><p>Keep refrigerated. Best consumed within 4 weeks of opening.</p><p><strong>Size:</strong> 400g</p>',
    price: '9.00',
    variantId: 'gid://shopify/ProductVariant/53034599448909',
    image: '/Assets/Kimchi_B014_02-04-21.jpg',
    images: ['/Assets/Kimchi_B014_02-04-21.jpg'],
  },
}

interface Props {
  params: Promise<{ handle: string }>
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params
  let product = null
  let isDemo = true

  if (isShopifyConfigured()) {
    try {
      const shopifyProduct = await getProductByHandle(handle)
      if (shopifyProduct) {
        product = {
          id: shopifyProduct.id,
          title: shopifyProduct.title,
          handle: shopifyProduct.handle,
          description: shopifyProduct.description,
          descriptionHtml: shopifyProduct.descriptionHtml,
          price: shopifyProduct.variants.edges[0]?.node.price.amount || '0',
          variantId: shopifyProduct.variants.edges[0]?.node.id || '',
          image: shopifyProduct.featuredImage?.url || '/Assets/Kimchi_B004_23-04-25.jpg',
          images: shopifyProduct.images.edges.map(e => e.node.url),
          availableForSale: shopifyProduct.variants.edges[0]?.node.availableForSale ?? true,
        }
        isDemo = false
      }
    } catch (error) {
      console.error('Error fetching product:', error)
    }
  }

  // Fall back to demo products
  if (!product) {
    const demoProduct = demoProducts[handle]
    if (demoProduct) {
      product = { ...demoProduct, availableForSale: true }
    }
  }

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-gray-500">
          <Link href="/" className="hover:text-kimchi-red">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-kimchi-red">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>
      </div>

      {/* Demo Mode Banner */}
      {isDemo && (
        <div className="bg-yellow-50 border-b border-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-sm text-yellow-800 text-center">
              Demo Mode: Connect your Shopify store for real checkout.
            </p>
          </div>
        </div>
      )}

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(0, 4).map((img, idx) => (
                  <div key={idx} className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={img}
                      alt={`${product.title} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {product.title}
            </h1>
            <p className="mt-4 text-3xl font-bold text-kimchi-red">
              {formatPrice(product.price)}
            </p>

            <div className="mt-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to Cart */}
            <div className="mt-8">
              <AddToCartButton
                variantId={product.variantId}
                availableForSale={product.availableForSale}
                isDemo={isDemo}
              />
            </div>

            {/* Product Details HTML */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div
                className="prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="w-10 h-10 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Naturally Fermented</span>
                </div>
                <div>
                  <div className="w-10 h-10 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Made Fresh</span>
                </div>
                <div>
                  <div className="w-10 h-10 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Live Cultures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
