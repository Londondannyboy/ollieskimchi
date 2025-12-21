'use client'

import Link from 'next/link'
import { PairingsData } from '@/lib/db'

interface PairingSuggestionsProps {
  pairings: PairingsData
  title?: string
}

const categoryIcons: Record<string, React.ReactNode> = {
  drink: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  side: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  ),
  main: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  condiment: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  other: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
}

const categoryLabels: Record<string, string> = {
  drink: 'Drinks',
  side: 'Side Dishes',
  main: 'Main Courses',
  condiment: 'Condiments',
  other: 'Other',
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  drink: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  side: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  main: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  condiment: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
  other: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
}

export default function PairingSuggestions({ pairings, title = 'Perfect Pairings' }: PairingSuggestionsProps) {
  // Group pairings by category
  const groupedPairings = pairings.reduce((acc, pairing) => {
    const category = pairing.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(pairing)
    return acc
  }, {} as Record<string, typeof pairings>)

  return (
    <div className="my-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-kimchi-red to-red-600 text-white p-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {title}
          </h2>
        </div>

        <div className="p-6">
          {Object.entries(groupedPairings).map(([category, items]) => {
            const colors = categoryColors[category] || categoryColors.other

            return (
              <div key={category} className="mb-6 last:mb-0">
                <h3 className={`font-bold ${colors.text} flex items-center gap-2 mb-3`}>
                  {categoryIcons[category] || categoryIcons.other}
                  {categoryLabels[category] || category}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((pairing, idx) => {
                    const content = (
                      <div
                        className={`p-4 rounded-xl border-2 ${colors.bg} ${colors.border} transition-all hover:shadow-md ${
                          pairing.recipeLink ? 'cursor-pointer hover:scale-[1.02]' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                              {pairing.name}
                              {pairing.isPerfectMatch && (
                                <span className="px-2 py-0.5 bg-red-900 text-white text-xs font-medium rounded-full">
                                  Perfect Match
                                </span>
                              )}
                            </h4>
                            {pairing.description && (
                              <p className="text-sm text-gray-600 mt-1">{pairing.description}</p>
                            )}
                          </div>
                          {pairing.recipeLink && (
                            <svg className={`w-5 h-5 ${colors.text} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          )}
                        </div>
                      </div>
                    )

                    if (pairing.recipeLink) {
                      return (
                        <Link key={idx} href={pairing.recipeLink}>
                          {content}
                        </Link>
                      )
                    }

                    return <div key={idx}>{content}</div>
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
