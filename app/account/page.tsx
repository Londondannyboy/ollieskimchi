import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign In | Ollie\'s Kimchi',
  description: 'Sign in to your Ollie\'s Kimchi account to track orders, save favorites, and more.',
}

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to <span className="text-kimchi-red">Ollie&apos;s</span>
          </h1>
          <p className="mt-2 text-gray-600">
            Sign in to your account or create a new one
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-kimchi-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-kimchi-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">Coming Soon!</h2>
          <p className="text-gray-600 mb-6">
            We&apos;re working on member accounts with order tracking, saved recipes, and exclusive perks.
          </p>

          {/* Email signup */}
          <div className="space-y-4">
            <p className="text-sm text-gray-500">Be the first to know when accounts launch:</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-kimchi-red focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-kimchi-red text-white font-bold rounded-full hover:bg-red-600 transition-colors"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link href="/" className="text-kimchi-red hover:underline font-medium">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
