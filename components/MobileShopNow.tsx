'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MobileShopNow() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 80vh)
      const scrollThreshold = window.innerHeight * 0.8
      setIsVisible(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌶️</span>
            <div>
              <p className="font-display font-semibold text-gray-900 text-sm">Ollie&apos;s Kimchi</p>
              <p className="text-xs text-gray-500">Free delivery over £35</p>
            </div>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-red-900 text-white font-bold rounded-full text-sm hover:bg-red-700 transition-colors"
          >
            Shop Now
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
