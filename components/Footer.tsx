import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-2">
              Ollie&apos;s <span className="text-kimchi-red">Kimchi</span>
            </h2>
            <p className="text-red-400 font-bold text-xl mb-4 electric-alive inline-block">
              It&apos;s Alive!
            </p>
            <p className="text-gray-300 max-w-md">
              Hey, I&apos;m Ollie! I make proper kimchi in London - the real stuff with billions of live probiotics.
              No shortcuts, no pasteurisation, just time and love. Thanks for stopping by!
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-kimchi-red transition-colors">
                  My Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-kimchi-red transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-kimchi-red transition-colors">
                  Stuff I&apos;ve Written
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-300 hover:text-kimchi-red transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/health" className="text-gray-300 hover:text-kimchi-red transition-colors">
                  Health Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Say Hello */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Say Hello</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:hello@ollieskimchi.co.uk"
                  className="hover:text-kimchi-red transition-colors"
                >
                  hello@ollieskimchi.co.uk
                </a>
              </li>
              <li>Made with love in London</li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com/ollieskimchi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-kimchi-red transition-colors"
                aria-label="Follow me on Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Contact link */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-medium"
              >
                Drop me a message
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-gray-300 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Ollie&apos;s Kimchi. Made by me, Ollie!</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-kimchi-red transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-kimchi-red transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
