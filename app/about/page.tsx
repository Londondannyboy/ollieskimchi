import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Olli's Story | Ollie's Kimchi",
  description: "Meet Olli - a London chef who turned his passion for fermentation into handcrafted kimchi. Learn how Ollie's Kimchi came to be.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/Assets/Kimchi Xmas _23_002_14-12-23.jpg"
            alt="Ollie's Kimchi"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl lg:text-6xl font-semibold mb-6">
            Olli&apos;s <span className="text-red-900">Story</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300">
            From professional kitchens to jars of living, breathing kimchi.
          </p>
        </div>
      </section>

      {/* Olli's Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo of Olli */}
            <div className="relative order-2 lg:order-1">
              <Image
                src="/Assets/Ollie Photo.png"
                alt="Olli - Founder of Ollie's Kimchi"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-900 text-white px-6 py-3 rounded-full font-display font-semibold shadow-lg">
                Chef & Founder
              </div>
            </div>

            {/* Story */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
                Meet <span className="text-red-900">Olli</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  I&apos;ve spent years working in some of London&apos;s busiest professional kitchens.
                  As a chef, I&apos;ve always been obsessed with flavour - but it was fermentation
                  that truly captured my imagination.
                </p>
                <p>
                  It started with a jar of homemade kimchi in my tiny flat kitchen. I couldn&apos;t
                  stop experimenting - adjusting the spice, the fermentation time, the balance of
                  flavours. Friends and family became my willing guinea pigs, and soon they were
                  asking for jars of their own.
                </p>
                <p>
                  What began as a kitchen experiment became an obsession, and that obsession
                  became Ollie&apos;s Kimchi. I left the restaurant world to focus on what I love
                  most: crafting small-batch, living foods that are as good for your gut as
                  they are for your taste buds.
                </p>
                <p className="font-semibold text-gray-900">
                  Every jar is still made by hand, right here in London. No shortcuts, no
                  pasteurisation - just real fermentation, the way it&apos;s meant to be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Craft Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-gray-900">
              The <span className="text-red-900">Craft</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              What I learned in professional kitchens, I now put into every jar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">Time & Patience</h3>
              <p className="text-gray-600">
                Good fermentation can&apos;t be rushed. Each batch takes weeks to develop its full flavour.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">Quality Sourcing</h3>
              <p className="text-gray-600">
                Fresh vegetables, authentic Korean gochugaru, and the finest ingredients I can find.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">Living Food</h3>
              <p className="text-gray-600">
                Never pasteurised. Billions of live probiotics working for your gut health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">Made with Care</h3>
              <p className="text-gray-600">
                Small batches, hands-on craft. I still taste every single batch before it ships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6 italic">
            It&apos;s Alive!
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8">
            Ready to taste what real fermentation is all about?
            Your gut will thank you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-900 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
