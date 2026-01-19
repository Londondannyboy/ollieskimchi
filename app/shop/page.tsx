import { getAllProducts, formatPrice, isShopifyConfigured } from '@/lib/shopify'
import Image from 'next/image'
import Link from 'next/link'
import GuardianBadge from '@/components/GuardianBadge'

// Guardian review quotes from Tom Hunt's article - rotate by product
const guardianQuotes: Record<string, string> = {
  'classic-napa-cabbage-kimchi': 'Bold and punchy',
  'classic-kimchi-2-pack': 'Big flavour',
  'classic-kimchi-3-pack': 'Well seasoned',
  'classic-kimchi-6-pack': 'Full and well-rounded',
}

// Only show these product handles (filter out old/discontinued products)
const allowedProductHandles = [
  'classic-napa-cabbage-kimchi',
  'classic-kimchi-2-pack',
  'classic-kimchi-3-pack',
  'classic-kimchi-6-pack',
  'ok-cap',
]

// Coming soon status by product handle (images now come from Shopify)
const productStatus: Record<string, { comingSoon?: boolean }> = {
  'classic-napa-cabbage-kimchi': { comingSoon: false },
  'classic-kimchi-2-pack': { comingSoon: false },
  'classic-kimchi-3-pack': { comingSoon: false },
  'classic-kimchi-6-pack': { comingSoon: false },
}

// Demo products when Shopify isn't configured (prices match Shopify)
const demoProducts = [
  {
    id: '1',
    title: "Ollie's Kimchi",
    handle: 'classic-napa-cabbage-kimchi',
    description: 'Spicy, funky, crisp, and fresh. Traditional and vegan, with plenty of sauce.',
    price: '6.99',
    image: '/Assets/Kimchi_B004_23-04-25.jpg',
    comingSoon: false,
  },
  {
    id: '2',
    title: 'Classic Kimchi - 2 Pack',
    handle: 'classic-kimchi-2-pack',
    description: 'Save £1! Two jars of our signature Classic Napa Cabbage Kimchi.',
    price: '12.98',
    image: '/Product Images/Ollies Kimchi - Kimchi Product 2 Set.png',
    comingSoon: false,
  },
  {
    id: '3',
    title: 'Classic Kimchi - 3 Pack',
    handle: 'classic-kimchi-3-pack',
    description: 'Save £3! Three jars of our signature Classic Napa Cabbage Kimchi.',
    price: '17.97',
    image: '/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png',
    comingSoon: false,
  },
  {
    id: '4',
    title: 'Classic Kimchi - 6 Pack',
    handle: 'classic-kimchi-6-pack',
    description: 'Save £6! Six jars of our signature Classic Napa Cabbage Kimchi - best value!',
    price: '35.94',
    image: '/Product Images/Ollies Kimchi - Kimchi Product 6 Pack.png',
    comingSoon: false,
  },
  {
    id: '5',
    title: 'OK Cap',
    handle: 'ok-cap',
    description: "Ollie's Kimchi cap with OK embroidered in red on a high quality, black cap. One size.",
    price: '19.99',
    image: 'https://cdn.shopify.com/s/files/1/0939/1403/8605/files/Cap3GreenBGcopy.jpg',
    comingSoon: false,
  },
]

export default async function ShopPage() {
  let products = demoProducts

  if (isShopifyConfigured()) {
    try {
      const shopifyProducts = await getAllProducts()
      if (shopifyProducts.length > 0) {
        // Filter to only show allowed products (removes vegan, spicy, old products)
        const filteredProducts = shopifyProducts.filter(p =>
          allowedProductHandles.includes(p.handle)
        )
        products = filteredProducts.map(p => {
          const status = productStatus[p.handle] || {}
          return {
            id: p.id,
            title: p.title,
            handle: p.handle,
            description: p.description,
            price: p.variants.edges[0]?.node.price.amount || '0',
            image: p.featuredImage?.url || '/Assets/Kimchi_B004_23-04-25.jpg',
            comingSoon: status.comingSoon ?? false,
          }
        })
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="font-semibold">Fresh Batch Just Made!</span>
            </div>
            <span className="hidden sm:inline text-white/60">|</span>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </span>
              <span className="font-semibold">Free Shipping Over £35</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-4xl font-semibold text-gray-900 text-center">
            My <span className="text-red-900">Kimchi</span> Shop
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Handcrafted, naturally fermented kimchi delivered fresh to your door.
          </p>

          {/* Guardian Review Badge */}
          <div className="mt-6 flex justify-center">
            <Link
              href="https://www.theguardian.com/food/2025/may/03/best-kimchi-tasted-rated-food-filter-tom-hunt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full px-5 py-2.5"
            >
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
              <span className="text-xs font-medium text-gray-600">&ldquo;Best All-Rounder&rdquo;</span>
            </Link>
          </div>
        </div>
      </div>


      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            product.comingSoon ? (
              <div
                key={product.id}
                className="product-card bg-white rounded-2xl overflow-hidden shadow-sm opacity-90"
              >
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover grayscale-[30%]"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="bg-red-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="mt-4 text-lg font-bold text-gray-400">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>
            ) : (
              <Link
                key={product.id}
                href={`/shop/${product.handle}`}
                className="product-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Guardian Badge - Top Right (only for kimchi products) */}
                  {guardianQuotes[product.handle] && (
                    <div className="absolute top-2 right-2 z-10">
                      <GuardianBadge size="sm" />
                    </div>
                  )}
                  {/* Guardian Quote - Bottom Left */}
                  {guardianQuotes[product.handle] && (
                    <div className="absolute bottom-2 left-2 z-10">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-md">
                        <p className="text-[10px] text-gray-700 font-medium italic">
                          &ldquo;{guardianQuotes[product.handle]}&rdquo;
                        </p>
                        <p className="text-[8px] text-gray-500">— The Guardian</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-900 transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="mt-4 text-lg font-bold text-red-900">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Free Delivery</h3>
              <p className="mt-2 text-sm text-gray-600">On orders over £35</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Fresh Every Week</h3>
              <p className="mt-2 text-sm text-gray-600">Made in small batches</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Made with Love</h3>
              <p className="mt-2 text-sm text-gray-600">Traditional recipes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
