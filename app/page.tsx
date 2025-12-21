import Image from 'next/image'
import Link from 'next/link'
import { getSeoArticlesByCluster } from '@/lib/db'

export default async function HomePage() {
  // Fetch some articles for the blog section
  const [recipes, health] = await Promise.all([
    getSeoArticlesByCluster('recipes'),
    getSeoArticlesByCluster('health'),
  ])
  const featuredArticles = [...recipes.slice(0, 2), ...health.slice(0, 2)]

  return (
    <div>
      {/* Hero Section - Full Width, Big Impact */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-red-50 via-white to-orange-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-kimchi-red" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-kimchi-red" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left - Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Big OK Logo */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/Assets/OK 1.jpg"
                  alt="OK - Ollie's Kimchi"
                  width={200}
                  height={100}
                  className="h-24 lg:h-32 w-auto"
                  priority
                />
              </div>

              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Handcrafted
                  <span className="block text-kimchi-red">London Kimchi</span>
                </h1>
                <p className="mt-6 text-xl lg:text-2xl text-gray-600 max-w-xl">
                  Naturally fermented. Bursting with probiotics.
                  Made fresh in small batches with love.
                </p>
              </div>

              <p className="text-3xl lg:text-4xl font-bold text-kimchi-red animate-pulse">
                It&apos;s Alive!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-10 py-5 bg-kimchi-red text-white font-bold rounded-full text-xl hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-10 py-5 border-3 border-kimchi-red text-kimchi-red font-bold rounded-full text-xl hover:bg-kimchi-red hover:text-white transition-all"
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* Right - Big Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png"
                  alt="Ollie's Kimchi 3 Pack"
                  width={700}
                  height={700}
                  className="mx-auto drop-shadow-2xl"
                  priority
                />
              </div>
              {/* Decorative circle behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-kimchi-red/10 rounded-full -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-kimchi-red py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <p className="text-3xl lg:text-4xl font-bold">100%</p>
              <p className="text-sm lg:text-base opacity-90">Natural Ingredients</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold">London</p>
              <p className="text-sm lg:text-base opacity-90">Made Fresh</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold">Live</p>
              <p className="text-sm lg:text-base opacity-90">Probiotics</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold">Small</p>
              <p className="text-sm lg:text-base opacity-90">Batch Crafted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our <span className="text-kimchi-red">Kimchi</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Handcrafted in London using traditional Korean methods.
              Every jar is naturally fermented and packed with live cultures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Classic Single */}
            <Link href="/shop/classic-napa-cabbage-kimchi" className="group">
              <div className="bg-gray-50 rounded-3xl p-6 transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="aspect-square relative mb-6">
                  <Image
                    src="/Assets/Kimchi_B004_23-04-25.jpg"
                    alt="Classic Kimchi"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-kimchi-red transition-colors">
                  Classic Kimchi
                </h3>
                <p className="text-gray-600 mt-2">Our signature napa cabbage kimchi</p>
                <p className="text-2xl font-bold text-kimchi-red mt-4">£8.50</p>
              </div>
            </Link>

            {/* 3 Pack */}
            <Link href="/shop/classic-kimchi-3-pack" className="group">
              <div className="bg-gray-50 rounded-3xl p-6 transition-all group-hover:shadow-xl group-hover:-translate-y-2 relative">
                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  SAVE 10%
                </span>
                <div className="aspect-square relative mb-6">
                  <Image
                    src="/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png"
                    alt="Classic Kimchi 3 Pack"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-kimchi-red transition-colors">
                  Classic 3 Pack
                </h3>
                <p className="text-gray-600 mt-2">Three jars in gift carrier</p>
                <p className="text-2xl font-bold text-kimchi-red mt-4">£22.95</p>
              </div>
            </Link>

            {/* 6 Pack */}
            <Link href="/shop/classic-kimchi-6-pack" className="group">
              <div className="bg-gray-50 rounded-3xl p-6 transition-all group-hover:shadow-xl group-hover:-translate-y-2 relative">
                <span className="absolute top-4 right-4 bg-kimchi-red text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
                <div className="aspect-square relative mb-6">
                  <Image
                    src="/Product Images/Ollies Kimchi - Kimchi Product 6 Pack.png"
                    alt="Classic Kimchi 6 Pack"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-kimchi-red transition-colors">
                  Classic 6 Pack
                </h3>
                <p className="text-gray-600 mt-2">Six jars - ultimate value</p>
                <p className="text-2xl font-bold text-kimchi-red mt-4">£43.35</p>
              </div>
            </Link>

            {/* 2 Pack */}
            <Link href="/shop/classic-kimchi-2-pack" className="group">
              <div className="bg-gray-50 rounded-3xl p-6 transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="aspect-square relative mb-6">
                  <Image
                    src="/Product Images/Ollies Kimchi - Kimchi Product 2 Set.png"
                    alt="Classic Kimchi 2 Pack"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-kimchi-red transition-colors">
                  Classic 2 Pack
                </h3>
                <p className="text-gray-600 mt-2">Two jars to get started</p>
                <p className="text-2xl font-bold text-kimchi-red mt-4">£16.15</p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center text-kimchi-red font-bold text-lg hover:underline"
            >
              View All Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-kimchi-red rounded-full text-sm font-bold mb-4">
              COMING SOON
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold">
              New Flavours <span className="text-kimchi-red">Arriving</span>
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              We&apos;re expanding our range with exciting new options.
              Sign up to be the first to know when they launch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vegan */}
            <div className="bg-gray-800 rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="aspect-square relative mb-6 max-w-[200px] mx-auto">
                  <Image
                    src="/Product Images/Ollie's Kimchi Vegan Kimchi Product.png"
                    alt="Vegan Kimchi"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-4">
                  VEGAN
                </span>
                <h3 className="text-2xl font-bold mb-3">Vegan Kimchi</h3>
                <p className="text-gray-400">
                  All the authentic flavour without fish sauce.
                  100% plant-based using kelp and miso for that perfect umami.
                </p>
              </div>
            </div>

            {/* Mild */}
            <div className="bg-gray-800 rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="aspect-square relative mb-6 max-w-[200px] mx-auto">
                  <Image
                    src="/Product Images/Ollie's Kimchi Mild Kimchi Product.png"
                    alt="Mild Kimchi"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full mb-4">
                  MILD
                </span>
                <h3 className="text-2xl font-bold mb-3">Mild Kimchi</h3>
                <p className="text-gray-400">
                  Perfect for those who prefer a gentler heat.
                  All the probiotic benefits with a milder spice level.
                </p>
              </div>
            </div>

            {/* Spicy */}
            <div className="bg-gray-800 rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="aspect-square relative mb-6 max-w-[200px] mx-auto">
                  <Image
                    src="/Product Images/Ollie's Kimchi Spicy Kimchi Product.png"
                    alt="Spicy Kimchi"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-4">
                  EXTRA SPICY
                </span>
                <h3 className="text-2xl font-bold mb-3">Spicy Kimchi</h3>
                <p className="text-gray-400">
                  For the heat seekers. Extra gochugaru and fresh chillies
                  for those who like it hot.
                </p>
              </div>
            </div>
          </div>

          {/* Notify Me Form */}
          <div className="mt-16 max-w-xl mx-auto text-center">
            <p className="text-gray-400 mb-4">Get notified when new flavours launch:</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-kimchi-red"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-kimchi-red text-white font-bold rounded-full hover:bg-red-700 transition-colors"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Ollie's Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/Assets/Kimchi_B006_30-11-20.jpg"
                alt="Ollie's Kimchi Close Up"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Choose <span className="text-kimchi-red">Ollie&apos;s</span>?
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-kimchi-red/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Naturally Fermented</h3>
                    <p className="text-gray-600">
                      We use traditional lacto-fermentation methods. No vinegar shortcuts,
                      no pasteurisation. Just time, salt, and natural bacteria.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-kimchi-red/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Made with Love in London</h3>
                    <p className="text-gray-600">
                      Every batch is handcrafted in small batches right here in London.
                      We know exactly what goes into every jar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-kimchi-red/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Live Probiotics</h3>
                    <p className="text-gray-600">
                      Billions of beneficial bacteria in every serving. Our kimchi is alive
                      and actively fermenting for maximum gut health benefits.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-kimchi-red/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No Nasties</h3>
                    <p className="text-gray-600">
                      No preservatives, no artificial colours, no MSG. Just fresh vegetables,
                      authentic Korean spices, and traditional fermentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Recipes Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              From the <span className="text-kimchi-red">Blog</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Recipes, health tips, and everything kimchi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                {article.hero_image_url && (
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={article.hero_image_url}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5">
                  <span className="text-xs font-bold text-kimchi-red uppercase">
                    {article.cluster}
                  </span>
                  <h3 className="mt-2 font-bold text-gray-900 group-hover:text-kimchi-red transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-kimchi-red text-kimchi-red font-bold rounded-full text-lg hover:bg-kimchi-red hover:text-white transition-all"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Big CTA Section */}
      <section className="relative py-28 lg:py-36 bg-kimchi-red overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-[40px] border-white" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-[60px] border-white" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/Assets/OK 1.jpg"
            alt="OK - Ollie's Kimchi"
            width={150}
            height={75}
            className="mx-auto mb-8 brightness-0 invert"
          />
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Try London&apos;s<br />Best Kimchi?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Fresh, naturally fermented kimchi delivered straight to your door.
            Your gut will thank you.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-12 py-5 bg-white text-kimchi-red font-bold rounded-full text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Delivery Info Bar */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <p className="font-bold">Free Delivery</p>
              <p className="text-sm text-gray-400">Orders over £30</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-bold">Fresh Weekly</p>
              <p className="text-sm text-gray-400">Made in small batches</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-bold">Quality Guaranteed</p>
              <p className="text-sm text-gray-400">100% satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <p className="font-bold">Secure Checkout</p>
              <p className="text-sm text-gray-400">Safe payments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
