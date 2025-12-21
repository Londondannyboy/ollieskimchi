'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ComparisonData } from '@/lib/db'

interface ComparisonTableProps {
  data: ComparisonData
}

export default function ComparisonTable({ data }: ComparisonTableProps) {
  const [activeView, setActiveView] = useState<'table' | 'cards'>('table')
  const { title, categories, items } = data

  const renderValue = (value: string | number | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )
    }
    return <span className="text-gray-700">{value}</span>
  }

  return (
    <div className="my-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-kimchi-red to-red-600 text-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {title || 'Comparison'}
            </h2>
            {/* View toggle for mobile */}
            <div className="md:hidden flex bg-white/20 rounded-full p-1">
              <button
                onClick={() => setActiveView('table')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeView === 'table' ? 'bg-white text-kimchi-red' : 'text-white'
                }`}
              >
                Table
              </button>
              <button
                onClick={() => setActiveView('cards')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeView === 'cards' ? 'bg-white text-kimchi-red' : 'text-white'
                }`}
              >
                Cards
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Feature
                </th>
                {items.map((item, idx) => (
                  <th key={idx} className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      {item.image && (
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <span className="font-semibold text-gray-900">{item.name}</span>
                      {item.isWinner && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {categories.map((category, catIdx) => (
                <tr key={catIdx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {category}
                  </td>
                  {items.map((item, itemIdx) => (
                    <td key={itemIdx} className="px-6 py-4 text-center text-sm">
                      {renderValue(item.values[category])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className={`md:hidden p-4 ${activeView === 'cards' ? 'block' : 'hidden'}`}>
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 ${
                  item.isWinner ? 'border-green-500 bg-green-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {item.image && (
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    {item.isWinner && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  {categories.map((category, catIdx) => (
                    <div key={catIdx} className="flex justify-between text-sm">
                      <span className="text-gray-600">{category}</span>
                      <span className="font-medium">
                        {renderValue(item.values[category])}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Table View (simplified) */}
        <div className={`md:hidden ${activeView === 'table' ? 'block' : 'hidden'}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 sticky left-0 bg-gray-50">
                    Feature
                  </th>
                  {items.map((item, idx) => (
                    <th key={idx} className="px-4 py-3 text-center font-semibold text-gray-900 whitespace-nowrap">
                      {item.name}
                      {item.isWinner && ' *'}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {categories.map((category, catIdx) => (
                  <tr key={catIdx}>
                    <td className="px-4 py-3 font-medium text-gray-900 sticky left-0 bg-white">
                      {category}
                    </td>
                    {items.map((item, itemIdx) => (
                      <td key={itemIdx} className="px-4 py-3 text-center">
                        {renderValue(item.values[category])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {items.some(item => item.isWinner) && (
            <p className="px-4 py-2 text-xs text-gray-500">* Recommended choice</p>
          )}
        </div>
      </div>
    </div>
  )
}
