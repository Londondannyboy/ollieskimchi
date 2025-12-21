'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ollie_cookie_consent')
    if (!consent) {
      // Small delay before showing
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('ollie_cookie_consent', 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 animate-[slide-up-fade_0.4s_ease-out]">
      <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-grow">
            <p className="text-sm md:text-base">
              We use cookies to improve your experience on our site. By continuing to browse, you agree to our{' '}
              <Link href="/privacy" className="text-red-400 underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="text-red-400 underline">
                Terms of Service
              </Link>.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/privacy"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Read Privacy Policy
            </Link>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-red-900 text-white font-semibold rounded-full hover:bg-red-600 transition-colors text-sm"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
