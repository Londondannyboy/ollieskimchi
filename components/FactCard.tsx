'use client'

import { useState } from 'react'
import { FactsData } from '@/lib/db'

interface FactCardProps {
  facts: FactsData
  title?: string
}

export default function FactCard({ facts, title = 'Did You Know?' }: FactCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  const currentFact = facts[currentIndex]

  const nextFact = () => {
    setCurrentIndex((prev) => (prev + 1) % facts.length)
  }

  const prevFact = () => {
    setCurrentIndex((prev) => (prev - 1 + facts.length) % facts.length)
  }

  const randomFact = () => {
    let newIndex = Math.floor(Math.random() * facts.length)
    while (newIndex === currentIndex && facts.length > 1) {
      newIndex = Math.floor(Math.random() * facts.length)
    }
    setCurrentIndex(newIndex)
  }

  const copyFact = async () => {
    try {
      await navigator.clipboard.writeText(currentFact)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const tweetFact = () => {
    const text = encodeURIComponent(`${currentFact} 🥬 via @ollieskimchi`)
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
  }

  if (facts.length === 0) return null

  return (
    <div className="my-8">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg overflow-hidden border-2 border-amber-200">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-amber-800 flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              {title}
            </h2>

            {facts.length > 1 && (
              <span className="text-sm text-amber-600">
                {currentIndex + 1} of {facts.length}
              </span>
            )}
          </div>

          {/* Fact content */}
          <div className="min-h-[100px] flex items-center">
            <p className="text-lg text-gray-800 leading-relaxed">
              {currentFact}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-amber-200">
            {/* Navigation */}
            {facts.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevFact}
                  className="p-2 hover:bg-amber-200/50 rounded-full transition-colors"
                  title="Previous fact"
                >
                  <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={randomFact}
                  className="px-3 py-1 bg-amber-200/50 hover:bg-amber-200 text-amber-700 text-sm font-medium rounded-full transition-colors"
                  title="Random fact"
                >
                  <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Shuffle
                </button>
                <button
                  onClick={nextFact}
                  className="p-2 hover:bg-amber-200/50 rounded-full transition-colors"
                  title="Next fact"
                >
                  <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* Share buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={copyFact}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  copied
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={tweetFact}
                className="flex items-center gap-1 px-3 py-1 bg-[#1DA1F2] text-white rounded-full text-sm font-medium hover:bg-[#1a8cd8] transition-colors"
                title="Share on Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
