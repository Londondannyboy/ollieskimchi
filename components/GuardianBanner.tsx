'use client'

import Link from 'next/link'

export default function GuardianBanner() {
  return (
    <div className="bg-gray-900 text-white py-2.5 px-4 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:200%_100%] animate-[gradient-shift_8s_ease_infinite]" />

      <div className="relative max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm md:text-base">
        {/* Guardian Logo/Text */}
        <span className="font-semibold tracking-wide text-gray-400">
          THE GUARDIAN
        </span>

        {/* Divider */}
        <span className="text-gray-600">|</span>

        {/* 5 Stars */}
        <div className="flex items-center gap-0.5 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <span className="hidden sm:inline text-gray-300">
          &ldquo;Best All-Rounder&rdquo;
        </span>

        {/* CTA Link */}
        <Link
          href="https://www.theguardian.com/food/2025/may/03/best-kimchi-tasted-rated-food-filter-tom-hunt"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-kimchi-red hover:text-red-400 font-semibold underline underline-offset-2 transition-colors"
        >
          Read Review →
        </Link>
      </div>
    </div>
  )
}
