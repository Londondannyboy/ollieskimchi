'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already seen/dismissed the popup
    const hasSeenPopup = localStorage.getItem('ollie_popup_seen')
    if (!hasSeenPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('ollie_popup_seen', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-[scale-in_0.3s_ease-out]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="relative h-44 bg-gradient-to-br from-kimchi-red to-red-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-7xl font-black">15%</p>
              <p className="text-xl font-semibold">OFF YOUR FIRST ORDER</p>
            </div>
          </div>
          {/* Decorative product image */}
          <div className="absolute -bottom-10 right-4 w-28 h-28">
            <Image
              src="/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png"
              alt="Kimchi"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 pt-14 text-center">
          <h2 className="font-display text-2xl font-semibold text-gray-900">
            Welcome! Here&apos;s a Gift
          </h2>
          <p className="mt-2 text-gray-600">
            Use this code at checkout for 15% off your first order:
          </p>

          <div className="mt-6 bg-gray-100 rounded-xl p-4">
            <p className="text-4xl font-black text-kimchi-red tracking-wider">
              OLLIE15
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            One-time use only. Valid on your first order.
          </p>

          <button
            onClick={handleClose}
            className="mt-6 w-full bg-kimchi-red text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors"
          >
            Start Shopping
          </button>

          <p className="mt-4 text-xs text-gray-400">
            By continuing, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}
