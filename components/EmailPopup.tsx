'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('ollie_popup_seen')
    if (!hasSeenPopup) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) {
      setError('Please agree to the Privacy Policy and Terms of Service')
      return
    }
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, agreedToTerms: true }),
      })

      if (!response.ok) throw new Error('Failed to subscribe')

      setIsSubmitted(true)
      localStorage.setItem('ollie_popup_seen', 'true')
      localStorage.setItem('ollie_subscribed', 'true')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
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
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="relative h-40 bg-gradient-to-br from-kimchi-red to-red-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-6xl font-black">15%</p>
                  <p className="text-lg font-semibold">OFF YOUR FIRST ORDER</p>
                </div>
              </div>
              <div className="absolute -bottom-8 right-4 w-24 h-24">
                <Image
                  src="/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png"
                  alt="Kimchi"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Form */}
            <div className="p-8 pt-12">
              <h2 className="font-display text-2xl font-semibold text-gray-900 text-center">
                Join the Kimchi Club
              </h2>
              <p className="mt-2 text-gray-600 text-center text-sm">
                Get 15% off your first order, plus recipes and early access to new flavours.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-kimchi-red focus:border-transparent text-gray-900"
                />

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 text-kimchi-red border-gray-300 rounded focus:ring-kimchi-red"
                  />
                  <span className="text-xs text-gray-600">
                    I agree to receive marketing emails and accept the{' '}
                    <Link href="/privacy" className="text-kimchi-red underline" target="_blank">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link href="/terms" className="text-kimchi-red underline" target="_blank">
                      Terms of Service
                    </Link>
                  </span>
                </label>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-kimchi-red text-white font-bold py-3 px-6 rounded-xl hover:bg-red-600 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Joining...' : 'Get My 15% Off'}
                </button>
              </form>

              <p className="mt-4 text-xs text-gray-400 text-center">
                Unsubscribe anytime. We respect your inbox.
              </p>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-semibold text-gray-900">
              Welcome to the Club!
            </h2>
            <p className="mt-2 text-gray-600">
              Use this code at checkout:
            </p>
            <div className="mt-4 bg-gray-100 rounded-xl p-4">
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
          </div>
        )}
      </div>
    </div>
  )
}
