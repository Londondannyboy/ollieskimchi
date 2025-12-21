'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from './CartContext'
import { SeoArticle } from '@/lib/db'

interface SidebarProps {
  relatedArticles?: SeoArticle[]
  showProduct?: boolean
  className?: string
}

// Featured product for sidebar
const featuredProduct = {
  id: 'classic-napa-cabbage-kimchi',
  title: 'Classic Kimchi',
  price: '8.50',
  originalPrice: '9.50',
  image: '/Assets/Kimchi_B004_23-04-25.jpg',
  variantId: 'gid://shopify/ProductVariant/53034599219533',
  description: 'Our signature napa cabbage kimchi - tangy, spicy, and packed with probiotics.',
  badge: 'Best Seller',
}

export default function Sidebar({ relatedArticles = [], showProduct = true, className = '' }: SidebarProps) {
  const { addToCart, isShopifyEnabled } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  const handleAddToCart = async () => {
    if (!isShopifyEnabled) {
      // Demo mode - just show the animation
      setJustAdded(true)
      setTimeout(() => setJustAdded(false), 2000)
      return
    }

    setIsAdding(true)
    try {
      await addToCart(featuredProduct.variantId, 1)
      setJustAdded(true)
      setTimeout(() => setJustAdded(false), 2000)
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <aside className={`hidden lg:block ${className}`}>
      <div className="sticky top-24 space-y-6">
        {/* Featured Product - Add to Cart */}
        {showProduct && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              {featuredProduct.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 bg-red-900 text-white text-xs font-bold rounded-full">
                  {featuredProduct.badge}
                </span>
              )}
              {featuredProduct.originalPrice && (
                <span className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                  Save £{(parseFloat(featuredProduct.originalPrice) - parseFloat(featuredProduct.price)).toFixed(2)}
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 text-lg">{featuredProduct.title}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{featuredProduct.description}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-2xl font-bold text-red-900">£{featuredProduct.price}</span>
                {featuredProduct.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">£{featuredProduct.originalPrice}</span>
                )}
              </div>
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-full mt-4 py-3 font-bold rounded-full transition-all flex items-center justify-center gap-2 group ${
                  justAdded
                    ? 'bg-green-500 text-white'
                    : 'bg-red-900 text-white hover:bg-red-600'
                } ${isAdding ? 'opacity-75 cursor-wait' : ''}`}
              >
                {justAdded ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Added!
                  </>
                ) : isAdding ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Adding...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </>
                )}
              </button>
              <Link
                href="/shop"
                className="block text-center text-sm text-gray-500 hover:text-red-900 mt-2 transition-colors"
              >
                View all products →
              </Link>
            </div>
          </div>
        )}

        {/* Recommended Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-kimchi-red to-red-600 px-5 py-4">
              <h3 className="text-white font-bold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Keep Reading
              </h3>
            </div>
            <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
              {relatedArticles.slice(0, 5).map((related) => (
                <Link
                  key={related.id}
                  href={`/${related.slug}`}
                  className="flex gap-3 p-4 hover:bg-gray-50 transition-colors group"
                >
                  {related.hero_image_url ? (
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={related.hero_image_url}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-gradient-to-br from-kimchi-red/20 to-red-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-900/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-red-900 font-medium capitalize">
                      {related.cluster}
                    </span>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 group-hover:text-red-900 transition-colors">
                      {related.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Follow on Instagram */}
        <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-3 mb-3">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <p className="font-bold">@ollieskimchi</p>
          </div>
          <p className="text-sm text-white/80 mb-3">
            Recipes, tips & kimchi adventures
          </p>
          <a
            href="https://www.instagram.com/ollieskimchi/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2.5 bg-white text-gray-900 text-center font-bold rounded-full hover:bg-gray-100 transition-colors text-sm"
          >
            Follow Us
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-900 rounded-2xl p-5 text-white">
          <h3 className="font-bold flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get Fermenting Tips
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Recipes, discounts & kimchi wisdom
          </p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kimchi-red text-sm"
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-red-900 text-white font-bold rounded-full hover:bg-red-600 transition-colors text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </aside>
  )
}
