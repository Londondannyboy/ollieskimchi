import Image from 'next/image'
import Link from 'next/link'
import GuardianBadge from '@/components/GuardianBadge'
import MobileShopNow from '@/components/MobileShopNow'

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Kimchi background image */}
        <div className="absolute inset-0">
          <Image
            src="/Assets/Kimchi_B006_30-11-20.jpg"
            alt="Fresh kimchi close-up"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
          />
          {/* Dark overlay for text readability - lighter to show more food */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-900/35 to-gray-900/45" />
          {/* Warm tint overlay to enhance kimchi colors */}
          <div className="absolute inset-0 bg-red-900/5" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Electric bolts background */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-900/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-red-900/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-900/5 blur-3xl" />
        </div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 min-h-[85vh] flex items-center">
          {/* Content - takes up left/center */}
          <div className="text-center lg:text-left space-y-5 max-w-2xl">
            {/* Main headline - It's Alive! */}
            <div className="space-y-1">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight">
                <span>It&apos;s Alive!</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 font-sans">
                Full of life and bursting with flavour!
              </p>
            </div>

            {/* Fantastic Kimchi section */}
            <div className="space-y-1">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white">
                Fantastic Kimchi.
              </p>
              <p className="text-lg sm:text-xl text-white/80 font-sans">
                Naturally fermented in London by Ollie and his team.
              </p>
            </div>

            {/* No shortcuts section */}
            <div className="space-y-1">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-red-500">
                No shortcuts. No pasteurisation.
              </p>
              <p className="text-lg sm:text-xl text-white/80 font-sans">
                Just time, love and a whole lot of cabbage.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="/shop"
                className="btn-fun inline-flex items-center justify-center px-10 py-5 bg-red-900 text-white font-bold rounded-full text-xl hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg pulse-glow"
              >
                <span className="mr-2">Shop Now</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-bold rounded-full text-xl hover:bg-white hover:text-gray-900 transition-all"
              >
                Ollie&apos;s Kimchi Journey
              </Link>
            </div>
          </div>
        </div>

        {/* Product Image - Bottom Right */}
        <div className="absolute bottom-24 right-0 lg:right-[5%] z-20 hidden md:block">
          <Link href="/shop" className="block relative float group">
            <Image
              src="/Assets/Kimchi_B004_23-04-25.jpg"
              alt="Ollie's Kimchi Jar - Click to shop"
              width={320}
              height={320}
              className="drop-shadow-2xl rounded-2xl group-hover:scale-105 transition-transform"
              priority
            />
            {/* Glowing circle behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-red-900/30 rounded-full blur-xl pulse-glow -z-10" />
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-white text-gray-900 px-3 py-1.5 rounded-full font-display font-normal text-sm shadow-xl wiggle-slow">
              Made in London
            </div>
            <div className="absolute bottom-16 -left-8 bg-green-800 text-white px-3 py-1.5 rounded-full font-display font-normal text-sm shadow-xl wiggle-slow" style={{ animationDelay: '0.5s' }}>
              100% Natural
            </div>
            {/* Shop Now badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
              Shop Now
            </div>
          </Link>
          {/* Guardian Badge - outside the shop link */}
          <Link
            href="https://www.theguardian.com/food/2025/may/03/best-kimchi-tasted-rated-food-filter-tom-hunt"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-2 right-0 bg-gray-900 text-white pl-3 pr-4 py-2 rounded-full font-normal text-xs shadow-xl flex items-center gap-2 hover:bg-gray-800 transition-colors wiggle-slow"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            THE GUARDIAN
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 text-white/50 bounce-alive hidden lg:block">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trust Bar - Animated */}
      <section className="bg-red-900 py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kimchi-red via-red-500 to-kimchi-red bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            <div className="group cursor-default">
              <p className="text-xl lg:text-2xl font-semibold group-hover:scale-110 transition-transform">100%</p>
              <p className="text-xs opacity-90">Natural Ingredients</p>
            </div>
            <div className="group cursor-default">
              <p className="text-xl lg:text-2xl font-semibold group-hover:scale-110 transition-transform">Fresh</p>
              <p className="text-xs opacity-90">Made in London</p>
            </div>
            <div className="group cursor-default">
              <p className="text-xl lg:text-2xl font-semibold group-hover:scale-110 transition-transform heartbeat">Live</p>
              <p className="text-xs opacity-90">Probiotics</p>
            </div>
            <div className="group cursor-default">
              <p className="text-xl lg:text-2xl font-semibold group-hover:scale-110 transition-transform">Delicious!</p>
              <p className="text-xs opacity-90">&nbsp;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Ollie - Personal Introduction */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Assets/Kimchi_B006_30-11-20.jpg"
                  alt="Ollie making kimchi"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src="/Assets/The_Guardian_logo.png"
                    alt="The Guardian"
                    width={80}
                    height={26}
                    className="h-4 w-auto opacity-70"
                  />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">&ldquo;Best All-Rounder&rdquo;</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-gray-900">
                We Make Fantastic Kimchi.
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  I started making kimchi as a side project back in 2019 – I&apos;m a chef, I thought it would be fun.
                  I loved how the flavour evolves with natural bacteria and the passing of time, and it was really delicious,
                  so I kept on making it.
                </p>
                <p>
                  As you can imagine, I&apos;m pretty chuffed that The Guardian called my kimchi the <span className="font-semibold text-gray-900">&ldquo;Best All-Rounder&rdquo;</span> with
                  5 stars – but honestly, the best feeling is when someone tells me it&apos;s the tastiest kimchi they&apos;ve ever had.
                </p>
                <p>
                  We make every batch by hand, using traditional methods, a liberal dash of love, and a great deal of patience.
                  No shortcuts. No added cultures. Just real ingredients and time doing its thing.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-900 text-white font-bold rounded-full hover:bg-red-600 transition-all transform hover:scale-105"
                >
                  Try Ollie&apos;s Kimchi
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-kimchi-red hover:text-red-900 transition-all"
                >
                  The Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Featured In - Press Section */}
      <section className="py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-gray-900">
              What The Critics Say
            </h2>
          </div>

          {/* Featured Guardian Review - Hero Treatment */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8 relative overflow-hidden group hover:shadow-2xl transition-shadow">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-900/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              {/* Left - Publication & Rating */}
              <div className="lg:col-span-4 text-center lg:text-left">
                <Image
                  src="/Assets/The_Guardian_logo.png"
                  alt="The Guardian"
                  width={200}
                  height={40}
                  className="h-8 lg:h-10 w-auto mb-4 mx-auto lg:mx-0"
                />
                {/* 5 Stars */}
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="inline-block bg-red-900 text-white px-4 py-2 rounded-full font-bold text-sm">
                  BEST ALL-ROUNDER
                </div>
              </div>

              {/* Right - Quote */}
              <div className="lg:col-span-8">
                <blockquote className="relative">
                  <svg className="absolute -top-4 -left-2 w-12 h-12 text-red-900/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-display text-2xl lg:text-3xl text-gray-900 leading-relaxed italic pl-8">
                    This is well seasoned, has big flavour and hits that sweet spot between funk and freshness.
                    <span className="block mt-4 text-lg lg:text-xl text-gray-600 not-italic">
                      Bold and punchy... A big, full-flavoured jar that delivers.
                    </span>
                  </p>
                  <footer className="mt-6 pl-8">
                    <p className="text-gray-500">— <span className="font-semibold text-gray-700">Tom Hunt</span>, Food Columnist</p>
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Read Full Review Link */}
            <div className="mt-8 text-center lg:text-right">
              <Link
                href="https://www.theguardian.com/food/2025/may/03/best-kimchi-tasted-rated-food-filter-tom-hunt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-900 font-bold hover:underline"
              >
                Read Full Review
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Secondary Review - Hello Gut Health */}
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 text-center md:text-left">
                <p className="font-bold text-gray-900 text-lg mb-2">Hello Gut Health</p>
                <div className="flex items-center justify-center md:justify-start gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <defs>
                      <linearGradient id="half-star">
                        <stop offset="50%" stopColor="currentColor" />
                        <stop offset="50%" stopColor="#D1D5DB" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 mt-1">4.5/5 Stars</p>
              </div>
              <div className="flex-grow">
                <p className="text-gray-700 italic">
                  &ldquo;The taste is very good, deep and satisfying... You get a lot of rich umami flavour with a warming heat.&rdquo;
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="https://www.helloguthealth.org/articles/review-ollies-kimchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-900 font-semibold hover:underline text-sm"
                >
                  Read Review →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-900 font-bold text-lg mb-2">Buy Kimchi Online</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-gray-900">
              Ollie&apos;s <span className="text-gradient-alive">Kimchi</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Handcrafted in London using traditional Korean methods.
              Every jar is naturally fermented and packed with billions of live cultures.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Large Product Image */}
            <div className="relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl max-w-lg mx-auto">
                <Image
                  src="/Assets/Kimchi_B004_23-04-25.jpg"
                  alt="Ollie's Classic Kimchi - Buy kimchi online"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 z-10">
                  <GuardianBadge size="md" />
                </div>
              </div>
              {/* Floating quote */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] hidden md:block">
                <p className="text-gray-700 text-sm italic">&ldquo;Bold and punchy... Big, full flavour&rdquo;</p>
                <p className="text-xs text-gray-500 mt-1">— The Guardian</p>
              </div>
            </div>

            {/* Pricing Options */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">
                Classic Napa Cabbage Kimchi
              </h3>
              <p className="text-gray-600 mb-8">
                The OG. Spicy, funky, crisp and fresh. Traditional and vegan, with plenty of sauce.
              </p>

              {/* Single Jar */}
              <Link href="/shop/classic-napa-cabbage-kimchi" className="block group">
                <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-red-900">
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-red-900 transition-colors">Single Jar</p>
                    <p className="text-sm text-gray-500">320g</p>
                  </div>
                  <p className="text-2xl font-bold text-red-900">£6.99</p>
                </div>
              </Link>

              {/* 2 Pack */}
              <Link href="/shop/classic-kimchi-2-pack" className="block group">
                <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-red-900">
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-red-900 transition-colors">2 Pack</p>
                    <p className="text-sm text-gray-500">2 × 320g</p>
                  </div>
                  <p className="text-2xl font-bold text-red-900">£12.98</p>
                </div>
              </Link>

              {/* 3 Pack */}
              <Link href="/shop/classic-kimchi-3-pack" className="block group">
                <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-red-900 relative">
                  <span className="absolute -top-2 left-4 bg-green-700 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    SAVE 10%
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-red-900 transition-colors">3 Pack</p>
                    <p className="text-sm text-gray-500">3 × 320g</p>
                  </div>
                  <p className="text-2xl font-bold text-red-900">£17.97</p>
                </div>
              </Link>

              {/* 6 Pack */}
              <Link href="/shop/classic-kimchi-6-pack" className="block group">
                <div className="flex items-center justify-between p-5 bg-red-50 rounded-2xl hover:bg-red-100 transition-colors border-2 border-red-900 relative">
                  <span className="absolute -top-2 left-4 bg-red-900 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    BEST VALUE
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-red-900 transition-colors">6 Pack</p>
                    <p className="text-sm text-gray-500">6 × 320g • Free shipping</p>
                  </div>
                  <p className="text-2xl font-bold text-red-900">£35.94</p>
                </div>
              </Link>

              <p className="text-sm text-gray-500 text-center mt-6">
                Free UK delivery on orders over £35
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/shop"
              className="inline-flex items-center text-red-900 font-bold text-lg underline-animate"
            >
              View All Products
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

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
              <div className="absolute -bottom-6 -right-6 bg-red-900 text-white px-6 py-4 rounded-2xl font-display font-semibold text-lg shadow-xl wiggle-slow">
                Mmm... Crunchy!
              </div>
            </div>
            <div>
              <p className="text-red-900 font-bold text-lg mb-2">Why Go With Ollie?</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-gray-900 mb-8">
                Because Life&apos;s Too Short for <span className="text-red-900 italic">Boring Kimchi</span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-red-900/10 rounded-2xl flex items-center justify-center group-hover:bg-red-900 group-hover:scale-110 transition-all">
                    <svg className="w-7 h-7 text-red-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">It&apos;s Actually Alive</h3>
                    <p className="text-gray-600">
                      No vinegar shortcuts, no pasteurisation.
                      Just proper lacto-fermentation like nature intended. The flavour keeps evolving in the jar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-red-900/10 rounded-2xl flex items-center justify-center group-hover:bg-red-900 group-hover:scale-110 transition-all">
                    <svg className="w-7 h-7 text-red-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="flex-shrink-0 w-14 h-14 bg-red-900/10 rounded-2xl flex items-center justify-center group-hover:bg-red-900 group-hover:scale-110 transition-all">
                    <svg className="w-7 h-7 text-red-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="flex-shrink-0 w-14 h-14 bg-red-900/10 rounded-2xl flex items-center justify-center group-hover:bg-red-900 group-hover:scale-110 transition-all">
                    <svg className="w-7 h-7 text-red-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tastes Incredible</h3>
                    <p className="text-gray-600">
                      Spicy, funky, crisp and fresh. That&apos;s what good kimchi should be.
                      The kind of flavour you can&apos;t stop thinking about.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA Section */}
      <section className="relative py-28 lg:py-36 bg-red-900 overflow-hidden">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-[40px] border-white spin-slow" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-[60px] border-white spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 text-xl mb-4">Your Gut Is Calling</p>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-white mb-6">
            Ready to Buy Kimchi Online?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-6 max-w-2xl mx-auto">
            Fresh, naturally fermented kimchi delivered straight to your door.
            Your taste buds and your gut bacteria will both be doing a happy dance.
          </p>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            When you buy kimchi online from Ollie&apos;s, you&apos;re getting the real deal -
            live probiotics, authentic Korean flavours, and small-batch quality you can taste.
            Free UK delivery on orders over £35.
          </p>
          <Link
            href="/shop"
            className="btn-fun inline-flex items-center justify-center px-12 py-5 bg-white text-red-900 font-bold rounded-full text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
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
              <svg className="w-8 h-8 mb-2 text-red-900 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <p className="font-bold">Free Delivery</p>
              <p className="text-sm text-gray-400">Orders over £35</p>
            </div>
            <div className="flex flex-col items-center group">
              <svg className="w-8 h-8 mb-2 text-red-900 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-bold">Fresh Weekly</p>
              <p className="text-sm text-gray-400">Made in small batches</p>
            </div>
            <div className="flex flex-col items-center group">
              <svg className="w-8 h-8 mb-2 text-red-900 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-bold">Quality Guaranteed</p>
              <p className="text-sm text-gray-400">100% satisfaction</p>
            </div>
            <div className="flex flex-col items-center group">
              <svg className="w-8 h-8 mb-2 text-red-900 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <p className="font-bold">Secure Checkout</p>
              <p className="text-sm text-gray-400">Safe payments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Shop Now */}
      <MobileShopNow />
    </div>
  )
}
