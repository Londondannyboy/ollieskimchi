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
          {/* Logo - Made bigger */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/Assets/OLLIE_S KIMCHI LOGO with WEB.jpg"
              alt="Ollie's Kimchi"
              width={240}
              height={80}
              className="h-14 md:h-16 w-auto rounded group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/shop"
              className="text-gray-700 hover:text-red-900 font-medium transition-colors underline-animate"
            >
              My Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-red-900 font-medium transition-colors underline-animate"
            >
              About Me
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-red-900 font-medium transition-colors underline-animate"
            >
              Stuff I&apos;ve Written
            </Link>
          </div>

          {/* CTA + Cart */}
          <div className="flex items-center space-x-4">
            {/* It's Alive Badge - Desktop only */}
            <div className="hidden lg:flex items-center gap-1 group cursor-default">
              {/* Animated Kimchi Jar with bubbles */}
              <div className="relative">
                <svg
                  className="w-10 h-10 group-hover:wiggle"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  {/* Jar body */}
                  <path
                    d="M10 14 L10 32 Q10 36 14 36 L26 36 Q30 36 30 32 L30 14"
                    fill="#FEE2E2"
                    stroke="#DC2626"
                    strokeWidth="2"
                    className="group-hover:fill-red-200 transition-colors"
                  />
                  {/* Jar lid */}
                  <rect x="8" y="10" width="24" height="5" rx="2" fill="#DC2626" />
                  {/* Kimchi inside */}
                  <path
                    d="M12 20 Q20 18 28 20 L28 32 Q28 34 26 34 L14 34 Q12 34 12 32 Z"
                    fill="#DC2626"
                    className="opacity-80"
                  />
                  {/* Animated bubbles */}
                  <circle cx="16" cy="26" r="2" fill="white" className="opacity-60 animate-ping" style={{ animationDuration: '2s' }} />
                  <circle cx="22" cy="28" r="1.5" fill="white" className="opacity-50 animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }} />
                  <circle cx="25" cy="24" r="1" fill="white" className="opacity-40 animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.6s' }} />
                </svg>

                {/* Rising bubbles outside jar */}
                <div className="absolute -top-1 left-3 w-1.5 h-1.5 bg-red-900/40 rounded-full animate-bounce" style={{ animationDuration: '1.2s' }} />
                <div className="absolute -top-2 right-3 w-1 h-1 bg-red-900/30 rounded-full animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }} />
              </div>

              {/* Lightning bolts */}
              <div className="relative flex flex-col items-center">
                {/* Mini lightning */}
                <svg className="w-3 h-4 text-yellow-400 -mb-1 animate-pulse" viewBox="0 0 12 16" fill="currentColor">
                  <path d="M7 0 L3 7 L6 7 L5 16 L9 8 L6 8 Z" />
                </svg>

                {/* The text */}
                <span
                  className="text-sm font-black tracking-tight electric-text"
                  style={{
                    background: 'linear-gradient(180deg, #DC2626 0%, #991B1B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(220, 38, 38, 0.3)'
                  }}
                >
                  IT&apos;S
                </span>
                <span
                  className="text-base font-black tracking-tight -mt-1 electric-text group-hover:scale-110 transition-transform"
                  style={{
                    background: 'linear-gradient(180deg, #DC2626 0%, #7F1D1D 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  ALIVE!
                </span>

                {/* Mini lightning right */}
                <svg className="absolute -right-2 top-1 w-2 h-3 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} viewBox="0 0 12 16" fill="currentColor">
                  <path d="M7 0 L3 7 L6 7 L5 16 L9 8 L6 8 Z" />
                </svg>
              </div>
            </div>

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
            {/* It's Alive Badge - Mobile */}
            <div className="flex items-center justify-center gap-2 mx-auto py-2">
              {/* Animated Kimchi Jar */}
              <svg className="w-8 h-8 wiggle" viewBox="0 0 40 40" fill="none">
                <path d="M10 14 L10 32 Q10 36 14 36 L26 36 Q30 36 30 32 L30 14" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
                <rect x="8" y="10" width="24" height="5" rx="2" fill="#DC2626" />
                <path d="M12 20 Q20 18 28 20 L28 32 Q28 34 26 34 L14 34 Q12 34 12 32 Z" fill="#DC2626" className="opacity-80" />
                <circle cx="16" cy="26" r="2" fill="white" className="opacity-60 animate-ping" style={{ animationDuration: '2s' }} />
                <circle cx="22" cy="28" r="1.5" fill="white" className="opacity-50 animate-ping" style={{ animationDuration: '1.5s' }} />
              </svg>
              {/* Lightning + Text */}
              <div className="flex items-center gap-1">
                <svg className="w-3 h-4 text-yellow-400 animate-pulse" viewBox="0 0 12 16" fill="currentColor">
                  <path d="M7 0 L3 7 L6 7 L5 16 L9 8 L6 8 Z" />
                </svg>
                <span className="font-black text-red-900">IT&apos;S ALIVE!</span>
                <svg className="w-3 h-4 text-yellow-400 animate-pulse" style={{ animationDelay: '0.3s' }} viewBox="0 0 12 16" fill="currentColor">
                  <path d="M7 0 L3 7 L6 7 L5 16 L9 8 L6 8 Z" />
                </svg>
              </div>
            </div>

            <Link
              href="/shop"
              className="text-gray-700 hover:text-red-900 font-medium transition-colors text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              My Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-red-900 font-medium transition-colors text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-red-900 font-medium transition-colors text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Stuff I&apos;ve Written
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
