import { getProductByHandle, formatPrice, isShopifyConfigured } from '@/lib/shopify'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AddToCartButton from './AddToCartButton'
import GuardianBadge from '@/components/GuardianBadge'
import OllisPromise from '@/components/OllisPromise'
import ProductDetails from '@/components/ProductDetails'

// Guardian review quotes from Tom Hunt's article
const guardianQuotes: Record<string, string> = {
  'classic-napa-cabbage-kimchi': 'Bold and punchy',
  'classic-kimchi-2-pack': 'Big flavour',
  'classic-kimchi-3-pack': 'Well seasoned',
  'classic-kimchi-6-pack': 'Full and well-rounded',
}

// Images now come from Shopify directly

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
    image: '/Product Images/Ollies Kimchi - Kimchi Product 2 Set.png',
    images: ['/Product Images/Ollies Kimchi - Kimchi Product 2 Set.png'],
  },
  'classic-kimchi-3-pack': {
    id: '3',
    title: 'Classic Kimchi - 3 Pack',
    handle: 'classic-kimchi-3-pack',
    description: 'Save 10%! Three jars of our signature Classic Napa Cabbage Kimchi.',
    descriptionHtml: '<p><strong>Save 10%!</strong> Three jars of our signature Classic Napa Cabbage Kimchi.</p><p>Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce.</p><h3>What\'s Included</h3><p>3 x 400g jars of Classic Napa Cabbage Kimchi</p>',
    price: '22.95',
    variantId: 'gid://shopify/ProductVariant/53034599285069',
    image: '/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png',
    images: ['/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png'],
  },
  'classic-kimchi-6-pack': {
    id: '4',
    title: 'Classic Kimchi - 6 Pack',
    handle: 'classic-kimchi-6-pack',
    description: 'Save 15%! Six jars of our signature Classic Napa Cabbage Kimchi - best value!',
    descriptionHtml: '<p><strong>Save 15%!</strong> Six jars of our signature Classic Napa Cabbage Kimchi - best value!</p><p>Our signature kimchi made with crisp napa cabbage, Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce.</p><h3>What\'s Included</h3><p>6 x 400g jars of Classic Napa Cabbage Kimchi</p>',
    price: '43.35',
    variantId: 'gid://shopify/ProductVariant/53034599317837',
    image: '/Product Images/Ollies Kimchi - Kimchi Product 6 Pack.png',
    images: ['/Product Images/Ollies Kimchi - Kimchi Product 6 Pack.png'],
  },
  'spicy-kimchi': {
    id: '5',
    title: 'Spicy Kimchi',
    handle: 'spicy-kimchi',
    description: 'Extra kick for those who like it hot. Same great fermentation, more heat. Made with additional gochugaru and fresh chillies.',
    descriptionHtml: '<p>Extra kick for those who like it hot. Same great fermentation, more heat.</p><p>Made with additional gochugaru and fresh chillies for those who crave the burn.</p><h3>Ingredients</h3><p>Napa cabbage, extra Korean red pepper flakes, fresh red chillies, garlic, ginger, spring onions, fish sauce, salt.</p><h3>Storage</h3><p>Keep refrigerated. Best consumed within 4 weeks of opening.</p><p><strong>Size:</strong> 400g</p>',
    price: '9.00',
    variantId: 'gid://shopify/ProductVariant/53034599350605',
    image: '/Product Images/Ollie\'s Kimchi Spicy Kimchi Product.png',
    images: ['/Product Images/Ollie\'s Kimchi Spicy Kimchi Product.png'],
  },
  'mild-kimchi': {
    id: '6',
    title: 'Mild Kimchi',
    handle: 'mild-kimchi',
    description: 'All the probiotic benefits with a gentler spice level. Perfect for beginners or those who prefer less heat.',
    descriptionHtml: '<p>All the probiotic benefits with a gentler spice level.</p><p>Perfect for beginners or those who prefer less heat but still want authentic kimchi flavour.</p><h3>Ingredients</h3><p>Napa cabbage, mild Korean red pepper flakes, garlic, ginger, spring onions, fish sauce, salt.</p><h3>Storage</h3><p>Keep refrigerated. Best consumed within 4 weeks of opening.</p><p><strong>Size:</strong> 400g</p>',
    price: '8.50',
    variantId: 'gid://shopify/ProductVariant/53034599383373',
    image: '/Product Images/Ollie\'s Kimchi Mild Kimchi Product.png',
    images: ['/Product Images/Ollie\'s Kimchi Mild Kimchi Product.png'],
  },
  'vegan-kimchi': {
    id: '7',
    title: 'Vegan Kimchi',
    handle: 'vegan-kimchi',
    description: 'Traditional flavour without fish sauce. 100% plant-based fermentation using kelp and miso for umami depth.',
    descriptionHtml: '<p>Traditional flavour without fish sauce.</p><p>100% plant-based fermentation using kelp and miso for umami depth. All the probiotics, completely vegan.</p><h3>Ingredients</h3><p>Napa cabbage, Korean red pepper flakes, garlic, ginger, spring onions, kelp, miso paste, salt.</p><h3>Storage</h3><p>Keep refrigerated. Best consumed within 4 weeks of opening.</p><p><strong>Size:</strong> 400g</p>',
    price: '9.00',
    variantId: 'gid://shopify/ProductVariant/53034599448909',
    image: '/Product Images/Ollie\'s Kimchi Vegan Kimchi Product.png',
    images: ['/Product Images/Ollie\'s Kimchi Vegan Kimchi Product.png'],
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
        // Use Shopify images directly
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
          <Link href="/" className="hover:text-red-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-red-900">Shop</Link>
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
              {/* Guardian Badge - Top Right */}
              <div className="absolute top-4 right-4 z-10">
                <GuardianBadge size="lg" />
              </div>
              {/* Guardian Quote - Bottom Left */}
              {guardianQuotes[product.handle] && (
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                    <p className="text-sm text-gray-700 font-medium italic">
                      &ldquo;{guardianQuotes[product.handle]}&rdquo;
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">— The Guardian</p>
                  </div>
                </div>
              )}
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
            <h1 className="font-display text-3xl lg:text-4xl font-semibold text-gray-900">
              {product.title}
            </h1>
            <p className="mt-4 text-3xl font-bold text-red-900">
              {formatPrice(product.price)}
            </p>

            {/* Guardian Review Quote - Moved up for social proof */}
            <Link
              href="https://www.theguardian.com/food/2025/may/03/best-kimchi-tasted-rated-food-filter-tom-hunt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/Assets/The_Guardian_logo.png"
                  alt="The Guardian"
                  width={80}
                  height={16}
                  className="h-3.5 w-auto opacity-60"
                />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] font-semibold text-red-900 bg-red-900/10 px-2 py-0.5 rounded-full">
                  BEST ALL-ROUNDER
                </span>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">
                &ldquo;Big flavour... hits that sweet spot between funk and freshness.&rdquo;
                <span className="text-red-900 ml-1 not-italic group-hover:underline">Read review →</span>
              </p>
            </Link>

            {/* Product Details */}
            <div className="mt-6">
              <ProductDetails
                descriptionHtml={product.descriptionHtml}
                description={product.description}
              />
            </div>

            {/* Add to Cart */}
            <div className="mt-8">
              <AddToCartButton
                variantId={product.variantId}
                availableForSale={product.availableForSale}
                isDemo={isDemo}
              />
            </div>

            {/* Olli's Promise */}
            <OllisPromise />
          </div>
        </div>
      </div>
    </div>
  )
}
