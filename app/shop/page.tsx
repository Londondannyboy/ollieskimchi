import { getAllProducts, formatPrice, isShopifyConfigured } from '@/lib/shopify'
import Image from 'next/image'
import Link from 'next/link'

// Local image overrides and coming soon status by product handle
const productOverrides: Record<string, { image?: string; comingSoon?: boolean }> = {
  'classic-napa-cabbage-kimchi': { image: '/Assets/Kimchi_B004_23-04-25.jpg', comingSoon: false },
  'classic-kimchi-2-pack': { image: '/Product Images/Ollies Kimchi - Kimchi Product 2 Set.png', comingSoon: false },
  'classic-kimchi-3-pack': { image: '/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png', comingSoon: false },
  'classic-kimchi-6-pack': { image: '/Product Images/Ollies Kimchi - Kimchi Product 6 Pack.png', comingSoon: false },
  'spicy-kimchi': { image: '/Product Images/Ollie\'s Kimchi Spicy Kimchi Product.png', comingSoon: true },
  'mild-kimchi': { image: '/Product Images/Ollie\'s Kimchi Mild Kimchi Product.png', comingSoon: true },
  'vegan-kimchi': { image: '/Product Images/Ollie\'s Kimchi Vegan Kimchi Product.png', comingSoon: true },
}

// Demo products when Shopify isn't configured
const demoProducts = [
  {
    id: '1',
    title: 'Classic Napa Cabbage Kimchi',
    handle: 'classic-napa-cabbage-kimchi',
    description: 'Our signature kimchi made with crisp napa cabbage, gochugaru, garlic, and ginger.',
    price: '8.50',
    image: '/Assets/Kimchi_B004_23-04-25.jpg',
    comingSoon: false,
  },
  {
    id: '2',
    title: 'Classic Kimchi - 2 Pack',
    handle: 'classic-kimchi-2-pack',
    description: 'Save 5%! Two jars of our signature Classic Napa Cabbage Kimchi.',
    price: '16.15',
    image: '/Product Images/Ollies Kimchi - Kimchi Product 2 Set.png',
    comingSoon: false,
  },
  {
    id: '3',
    title: 'Classic Kimchi - 3 Pack',
    handle: 'classic-kimchi-3-pack',
    description: 'Save 10%! Three jars of our signature Classic Napa Cabbage Kimchi.',
    price: '22.95',
    image: '/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png',
    comingSoon: false,
  },
  {
    id: '4',
    title: 'Classic Kimchi - 6 Pack',
    handle: 'classic-kimchi-6-pack',
    description: 'Save 15%! Six jars of our signature Classic Napa Cabbage Kimchi - best value!',
    price: '43.35',
    image: '/Product Images/Ollies Kimchi - Kimchi Product 6 Pack.png',
    comingSoon: false,
  },
  {
    id: '5',
    title: 'Spicy Kimchi',
    handle: 'spicy-kimchi',
    description: 'Extra kick for those who like it hot. Same great fermentation, more heat.',
    price: '9.00',
    image: '/Product Images/Ollie\'s Kimchi Spicy Kimchi Product.png',
    comingSoon: true,
  },
  {
    id: '6',
    title: 'Mild Kimchi',
    handle: 'mild-kimchi',
    description: 'All the probiotic benefits with a gentler spice level. Perfect for beginners.',
    price: '8.50',
    image: '/Product Images/Ollie\'s Kimchi Mild Kimchi Product.png',
    comingSoon: true,
  },
  {
    id: '7',
    title: 'Vegan Kimchi',
    handle: 'vegan-kimchi',
    description: 'Traditional flavour without fish sauce. 100% plant-based fermentation.',
    price: '9.00',
    image: '/Product Images/Ollie\'s Kimchi Vegan Kimchi Product.png',
    comingSoon: true,
  },
]

export default async function ShopPage() {
  let products = demoProducts
  let isDemo = true

  if (isShopifyConfigured()) {
    try {
      const shopifyProducts = await getAllProducts()
      if (shopifyProducts.length > 0) {
        products = shopifyProducts.map(p => {
          const override = productOverrides[p.handle] || {}
          return {
            id: p.id,
            title: p.title,
            handle: p.handle,
            description: p.description,
            price: p.variants.edges[0]?.node.price.amount || '0',
            image: override.image || p.featuredImage?.url || '/Assets/Kimchi_B004_23-04-25.jpg',
            comingSoon: override.comingSoon ?? false,
          }
        })
        isDemo = false
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Shop <span className="text-kimchi-red">Kimchi</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Handcrafted, naturally fermented kimchi delivered fresh to your door.
          </p>
        </div>
      </div>

      {/* Demo Mode Banner */}
      {isDemo && (
        <div className="bg-yellow-50 border-b border-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-sm text-yellow-800 text-center">
              Demo Mode: Connect your Shopify store to display live products.
            </p>
          </div>
        </div>
      )}

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
                    <span className="bg-kimchi-red text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
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
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-kimchi-red transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="mt-4 text-lg font-bold text-kimchi-red">
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
              <div className="w-12 h-12 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Free Delivery</h3>
              <p className="mt-2 text-sm text-gray-600">On orders over £30</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Fresh Every Week</h3>
              <p className="mt-2 text-sm text-gray-600">Made in small batches</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
