'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from './CartContext'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - OK Logo */}
          <Link href="/" className="flex-shrink-0 group flex items-center gap-2">
            <Image
              src="/Assets/OK 1.jpg"
              alt="Ollie's Kimchi"
              width={50}
              height={50}
              className="h-12 md:h-14 w-auto rounded-lg group-hover:scale-105 transition-transform"
              priority
            />
            <span className="hidden sm:block font-sans text-xl md:text-2xl font-normal text-gray-900 group-hover:text-red-900 transition-colors">
              Ollie&apos;s Kimchi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/shop"
              className="text-gray-700 hover:text-red-900 font-medium transition-colors underline-animate"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-red-900 font-medium transition-colors underline-animate"
            >
              About
            </Link>
          </div>

          {/* CTA + Cart */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-red-900 transition-colors group"
              aria-label="Shopping cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-900 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-red-900 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
            <Link
              href="/shop"
              className="text-gray-700 hover:text-red-900 font-medium transition-colors text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-red-900 font-medium transition-colors text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Shop CTA */}
            <Link
              href="/shop"
              className="mx-4 py-3 bg-red-900 text-white font-bold rounded-full text-center hover:bg-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Grab Some Kimchi
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
