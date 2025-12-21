import Image from 'next/image'
import Link from 'next/link'
import { getSeoArticlesByCluster } from '@/lib/db'
import InstagramFeed from '@/components/InstagramFeed'

// Fermentation bubbles component
function FermentationBubbles() {
  return (
    <div className="bubbles-container">
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
    </div>
  )
}

export default async function HomePage() {
  const [recipes, health] = await Promise.all([
    getSeoArticlesByCluster('recipes'),
    getSeoArticlesByCluster('health'),
  ])
  const featuredArticles = [...recipes.slice(0, 2), ...health.slice(0, 2)]

  return (
    <div className="overflow-hidden">
      {/* Hero Section - IT'S ALIVE! */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Kimchi background image */}
        <div className="absolute inset-0">
          <Image
            src="/Assets/Kimchi_B006_30-11-20.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability - lighter to show more food */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/50 to-gray-900/60" />
          {/* Warm tint overlay to enhance kimchi colors */}
          <div className="absolute inset-0 bg-kimchi-red/5" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Electric bolts background */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-kimchi-red/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-kimchi-red/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-kimchi-red/5 blur-3xl" />
        </div>

        {/* Fermentation bubbles */}
        <FermentationBubbles />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 min-h-[85vh] flex items-center">
          {/* Content - takes up left/center */}
          <div className="text-center lg:text-left space-y-6 max-w-2xl">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/Assets/OLLIE_S KIMCHI LOGO with WEB.jpg"
                alt="Ollie's Kimchi"
                width={280}
                height={100}
                className="h-20 lg:h-24 w-auto rounded-lg"
                priority
              />
            </div>

            {/* Tagline with personality */}
            <div className="space-y-2">
              <p className="text-kimchi-red font-semibold text-lg tracking-wider uppercase">
                Meet Ollie. He makes kimchi.
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Handcrafted, naturally fermented,
                <span className="block text-kimchi-red">bursting with flavour & life.</span>
              </h1>
            </div>

            {/* IT'S ALIVE! - The star of the show */}
            <div className="py-4">
              <p className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-kimchi-red electric-alive inline-block italic">
                It&apos;s Alive!
              </p>
              <p className="text-gray-300 mt-2 text-lg">
                Billions of live probiotics in every jar. Your gut&apos;s new best friend.
              </p>
            </div>

            {/* Fun personality text */}
            <p className="text-xl text-gray-300 max-w-xl">
              No shortcuts. No pasteurisation. Just time, love, and a whole lot of cabbage.
              Made fresh in London by Ollie (that&apos;s me!).
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="/shop"
                className="btn-fun inline-flex items-center justify-center px-10 py-5 bg-kimchi-red text-white font-bold rounded-full text-xl hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg pulse-glow"
              >
                <span className="mr-2">Shop Now</span>
                <svg className="w-6 h-6 bounce-alive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-bold rounded-full text-xl hover:bg-white hover:text-gray-900 transition-all"
              >
                Olli&apos;s Story
              </Link>
            </div>
          </div>
        </div>

        {/* Product Image - Bottom Right, Overlapping into red banner */}
        <div className="absolute bottom-0 right-0 lg:right-[5%] translate-y-1/4 z-20 hidden md:block">
          <div className="relative float">
            <Image
              src="/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png"
              alt="Ollie's Kimchi 3 Pack"
              width={380}
              height={380}
              className="drop-shadow-2xl"
              priority
            />
            {/* Glowing circle behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-kimchi-red/30 rounded-full blur-xl pulse-glow -z-10" />
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-white text-gray-900 px-3 py-1.5 rounded-full font-display font-semibold text-sm shadow-xl wiggle-slow">
              Made in London
            </div>
            <div className="absolute bottom-16 -left-8 bg-green-600 text-white px-3 py-1.5 rounded-full font-display font-semibold text-sm shadow-xl wiggle-slow" style={{ animationDelay: '0.5s' }}>
              100% Natural
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 text-white/50 bounce-alive hidden lg:block">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trust Bar - Animated */}
      <section className="bg-kimchi-red py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kimchi-red via-red-500 to-kimchi-red bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="group cursor-default">
              <p className="text-4xl lg:text-5xl font-black group-hover:scale-110 transition-transform">100%</p>
              <p className="text-sm lg:text-base opacity-90">Natural Ingredients</p>
            </div>
            <div className="group cursor-default">
              <p className="text-4xl lg:text-5xl font-black group-hover:scale-110 transition-transform">London</p>
              <p className="text-sm lg:text-base opacity-90">Made Fresh Weekly</p>
            </div>
            <div className="group cursor-default">
              <p className="text-4xl lg:text-5xl font-black group-hover:scale-110 transition-transform heartbeat">Live</p>
              <p className="text-sm lg:text-base opacity-90">Probiotics</p>
            </div>
            <div className="group cursor-default">
              <p className="text-4xl lg:text-5xl font-black group-hover:scale-110 transition-transform">Small</p>
              <p className="text-sm lg:text-base opacity-90">Batch Crafted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Subtle background product image */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03] pointer-events-none hidden lg:block">
          <Image
            src="/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] opacity-[0.02] pointer-events-none rotate-12 hidden lg:block">
          <Image
            src="/Product Images/Ollies Kimchi - Kimchi Product 6 Pack.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-kimchi-red font-bold text-lg mb-2">Grab Yourself Some</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-gray-900">
              Ollie&apos;s <span className="text-gradient-alive">Kimchi</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Handcrafted in London using traditional Korean methods.
              Every jar is naturally fermented and packed with billions of live cultures.
              <span className="text-kimchi-red font-bold"> It&apos;s alive, remember?</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Classic Single */}
            <Link href="/shop/classic-napa-cabbage-kimchi" className="group">
              <div className="product-card bg-gray-50 rounded-3xl p-6">
                <div className="aspect-square relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src="/Assets/Kimchi_B004_23-04-25.jpg"
                    alt="Classic Kimchi"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-kimchi-red transition-colors">
                  Classic Kimchi
                </h3>
                <p className="text-gray-600 mt-2">The OG. The one that started it all.</p>
                <p className="text-2xl font-bold text-kimchi-red mt-4">£8.50</p>
              </div>
            </Link>

            {/* 3 Pack */}
            <Link href="/shop/classic-kimchi-3-pack" className="group">
              <div className="product-card bg-gray-50 rounded-3xl p-6 relative">
                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full wiggle">
                  SAVE 10%
                </span>
                <div className="aspect-square relative mb-6">
                  <Image
                    src="/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png"
                    alt="Classic Kimchi 3 Pack"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-kimchi-red transition-colors">
                  Classic 3 Pack
                </h3>
                <p className="text-gray-600 mt-2">Perfect for sharing (or not...)</p>
                <p className="text-2xl font-bold text-kimchi-red mt-4">£22.95</p>
              </div>
            </Link>

            {/* 6 Pack */}
            <Link href="/shop/classic-kimchi-6-pack" className="group">
              <div className="product-card bg-gray-50 rounded-3xl p-6 relative">
                <span className="absolute top-4 right-4 bg-kimchi-red text-white text-xs font-bold px-3 py-1 rounded-full pulse-glow">
                  BEST VALUE
                </span>
                <div className="aspect-square relative mb-6">
                  <Image
                    src="/Product Images/Ollies Kimchi - Kimchi Product 6 Pack.png"
                    alt="Classic Kimchi 6 Pack"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-kimchi-red transition-colors">
                  Classic 6 Pack
                </h3>
                <p className="text-gray-600 mt-2">For the true kimchi addict</p>
                <p className="text-2xl font-bold text-kimchi-red mt-4">£43.35</p>
              </div>
            </Link>

            {/* 2 Pack */}
            <Link href="/shop/classic-kimchi-2-pack" className="group">
              <div className="product-card bg-gray-50 rounded-3xl p-6">
                <div className="aspect-square relative mb-6">
                  <Image
                    src="/Product Images/Ollies Kimchi - Kimchi Product 2 Set.png"
                    alt="Classic Kimchi 2 Pack"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-kimchi-red transition-colors">
                  Classic 2 Pack
                </h3>
                <p className="text-gray-600 mt-2">Dip your toes in</p>
                <p className="text-2xl font-bold text-kimchi-red mt-4">£16.15</p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center text-kimchi-red font-bold text-lg underline-animate"
            >
              View All Products
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Curved section divider */}
      <div className="relative h-16 bg-white">
        <svg className="absolute bottom-0 w-full h-16 text-gray-900 fill-current" viewBox="0 0 1440 64" preserveAspectRatio="none">
          <path d="M0,64 C480,0 960,0 1440,64 L1440,64 L0,64 Z" />
        </svg>
      </div>

      {/* Coming Soon Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white relative overflow-hidden">
        <FermentationBubbles />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-kimchi-red rounded-full text-sm font-bold mb-4 wiggle">
              COMING SOON
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold">
              New Flavours <span className="text-kimchi-red italic">Brewing</span>
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Ollie&apos;s been busy in the kitchen. More delicious options on the way!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vegan */}
            <div className="bg-gray-800 rounded-3xl p-8 text-center relative overflow-hidden group hover:bg-gray-750 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform" />
              <div className="relative z-10">
                <div className="aspect-square relative mb-6 max-w-[200px] mx-auto float">
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
                  All the funk, none of the fish. 100% plant-based umami goodness.
                </p>
              </div>
            </div>

            {/* Mild */}
            <div className="bg-gray-800 rounded-3xl p-8 text-center relative overflow-hidden group hover:bg-gray-750 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform" />
              <div className="relative z-10">
                <div className="aspect-square relative mb-6 max-w-[200px] mx-auto float" style={{ animationDelay: '0.5s' }}>
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
                  For those who like flavour without the fire. Still alive, just gentler.
                </p>
              </div>
            </div>

            {/* Spicy */}
            <div className="bg-gray-800 rounded-3xl p-8 text-center relative overflow-hidden group hover:bg-gray-750 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform" />
              <div className="relative z-10">
                <div className="aspect-square relative mb-6 max-w-[200px] mx-auto float" style={{ animationDelay: '1s' }}>
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
                  For heat seekers only. Don&apos;t say I didn&apos;t warn you!
                </p>
              </div>
            </div>
          </div>

          {/* Notify Me Form */}
          <div className="mt-16 max-w-xl mx-auto text-center">
            <p className="text-gray-400 mb-4">Want to be first to try? Drop your email:</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-grow px-6 py-4 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-kimchi-red focus:ring-2 focus:ring-kimchi-red/50"
              />
              <button
                type="submit"
                className="btn-fun px-8 py-4 bg-kimchi-red text-white font-bold rounded-full hover:bg-red-600 transition-colors"
              >
                Notify Me!
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Curved section divider */}
      <div className="relative h-16 bg-gray-900">
        <svg className="absolute bottom-0 w-full h-16 text-white fill-current" viewBox="0 0 1440 64" preserveAspectRatio="none">
          <path d="M0,0 C480,64 960,64 1440,0 L1440,64 L0,64 Z" />
        </svg>
      </div>

      {/* Why Ollie's Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Subtle background jar image */}
        <div className="absolute -left-20 top-20 w-[450px] h-[450px] opacity-[0.03] pointer-events-none hidden lg:block">
          <Image
            src="/Assets/Kimchi_B004_23-04-25.jpg"
            alt=""
            fill
            className="object-cover rounded-full"
          />
        </div>
        {/* Decorative circles */}
        <div className="absolute right-10 bottom-20 w-64 h-64 border-[3px] border-kimchi-red/5 rounded-full hidden lg:block" />
        <div className="absolute right-24 bottom-32 w-48 h-48 border-[3px] border-kimchi-red/5 rounded-full hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/Assets/Kimchi_B006_30-11-20.jpg"
                alt="Ollie's Kimchi Close Up"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
              {/* Fun floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-kimchi-red text-white px-6 py-4 rounded-2xl font-display font-semibold text-lg shadow-xl wiggle-slow">
                Mmm... Crunchy!
              </div>
            </div>
            <div>
              <p className="text-kimchi-red font-bold text-lg mb-2">Why Go With Ollie?</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-gray-900 mb-8">
                Because Life&apos;s Too Short for <span className="text-kimchi-red italic">Boring Kimchi</span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-kimchi-red/10 rounded-2xl flex items-center justify-center group-hover:bg-kimchi-red group-hover:scale-110 transition-all">
                    <svg className="w-7 h-7 text-kimchi-red group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">It&apos;s Actually Alive</h3>
                    <p className="text-gray-600">
                      No vinegar shortcuts, no pasteurisation killing the good stuff.
                      Just proper lacto-fermentation like nature intended. Billions of probiotics, living their best life.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-kimchi-red/10 rounded-2xl flex items-center justify-center group-hover:bg-kimchi-red group-hover:scale-110 transition-all">
                    <svg className="w-7 h-7 text-kimchi-red group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Made by Me, Ollie</h3>
                    <p className="text-gray-600">
                      Not a faceless factory. Just me, in London, obsessing over every batch.
                      I know exactly what goes into every jar because I put it there myself.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-kimchi-red/10 rounded-2xl flex items-center justify-center group-hover:bg-kimchi-red group-hover:scale-110 transition-all">
                    <svg className="w-7 h-7 text-kimchi-red group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No Nasty Stuff</h3>
                    <p className="text-gray-600">
                      No preservatives, no artificial colours, no MSG, no weird E-numbers.
                      Just fresh veg, authentic Korean spices, and a lot of patience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-kimchi-red/10 rounded-2xl flex items-center justify-center group-hover:bg-kimchi-red group-hover:scale-110 transition-all">
                    <svg className="w-7 h-7 text-kimchi-red group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Your Gut Will Thank You</h3>
                    <p className="text-gray-600">
                      Seriously. Live probiotics are basically tiny superheroes for your digestive system.
                      Plus it tastes absolutely incredible. Win-win.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Blog/Recipes Section */}
      <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border-[3px] border-kimchi-red/5 rounded-full hidden lg:block" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border-[3px] border-kimchi-red/5 rounded-full hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-kimchi-red font-bold text-lg mb-2">Learn &amp; Cook</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-gray-900">
              From Ollie&apos;s <span className="text-kimchi-red italic">Kitchen</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Recipes, tips, and kimchi wisdom from yours truly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
              >
                {article.hero_image_url && (
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={article.hero_image_url}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
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
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-kimchi-red text-kimchi-red font-bold rounded-full text-lg hover:bg-kimchi-red hover:text-white transition-all btn-fun"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Curved section divider before Instagram */}
      <div className="relative h-12 bg-gray-50">
        <svg className="absolute bottom-0 w-full h-12 text-white fill-current" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" />
        </svg>
      </div>

      {/* Instagram Section */}
      <InstagramFeed
        embedId="5ad9f64e-e5c7-4d90-9294-7282240b7247"
        embedProvider="mirror"
      />

      {/* Big CTA Section */}
      <section className="relative py-28 lg:py-36 bg-kimchi-red overflow-hidden">
        {/* Background bubbles */}
        <FermentationBubbles />

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-[40px] border-white spin-slow" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-[60px] border-white spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 text-xl mb-4">Your Gut Is Calling</p>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-white mb-6">
            Ready to Get Some<br />
            <span className="electric-alive inline-block italic">Living Kimchi</span>
            <br />in Your Life?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Fresh, naturally fermented, delivered straight to your door.
            Your taste buds and your gut bacteria will both be doing a happy dance.
          </p>
          <Link
            href="/shop"
            className="btn-fun inline-flex items-center justify-center px-12 py-5 bg-white text-kimchi-red font-bold rounded-full text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Shop Now
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Delivery Info Bar */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex flex-col items-center group">
              <svg className="w-8 h-8 mb-2 text-kimchi-red group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <p className="font-bold">Free Delivery</p>
              <p className="text-sm text-gray-400">Orders over £30</p>
            </div>
            <div className="flex flex-col items-center group">
              <svg className="w-8 h-8 mb-2 text-kimchi-red group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-bold">Fresh Weekly</p>
              <p className="text-sm text-gray-400">Made in small batches</p>
            </div>
            <div className="flex flex-col items-center group">
              <svg className="w-8 h-8 mb-2 text-kimchi-red group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-bold">Quality Guaranteed</p>
              <p className="text-sm text-gray-400">100% satisfaction</p>
            </div>
            <div className="flex flex-col items-center group">
              <svg className="w-8 h-8 mb-2 text-kimchi-red group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
