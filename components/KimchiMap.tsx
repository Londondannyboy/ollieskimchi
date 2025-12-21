'use client'

import { useState } from 'react'

interface Region {
  id: string
  name: string
  koreanName?: string
  description: string
  kimchiTypes: string[]
  spiceLevel: 1 | 2 | 3 | 4 | 5
  keyIngredients: string[]
  path: string // SVG path for the region
}

interface KimchiMapProps {
  regions: Region[]
  title?: string
}

// Simplified Korean peninsula regions with approximate SVG paths
const defaultRegions: Region[] = [
  {
    id: 'seoul',
    name: 'Seoul & Gyeonggi',
    koreanName: '서울/경기',
    description: 'The capital region favors lighter, less salty kimchi with a clean, crisp taste.',
    kimchiTypes: ['Baechu Kimchi', 'Kkakdugi', 'Nabak Kimchi'],
    spiceLevel: 2,
    keyIngredients: ['Napa cabbage', 'Radish', 'Pine nuts'],
    path: 'M150,180 L200,160 L220,190 L200,220 L150,210 Z',
  },
  {
    id: 'gangwon',
    name: 'Gangwon Province',
    koreanName: '강원도',
    description: 'Mountainous region known for fresh, simple kimchi with seafood influences.',
    kimchiTypes: ['Squid Kimchi', 'Fresh Pollack Kimchi'],
    spiceLevel: 2,
    keyIngredients: ['Squid', 'Pollack', 'Radish'],
    path: 'M200,140 L280,120 L290,180 L220,190 L200,160 Z',
  },
  {
    id: 'chungcheong',
    name: 'Chungcheong Province',
    koreanName: '충청도',
    description: 'Known for mild, slightly sweet kimchi with minimal spice.',
    kimchiTypes: ['Chonggak Kimchi', 'Yeolmu Kimchi'],
    spiceLevel: 1,
    keyIngredients: ['Young radish', 'Perilla leaves'],
    path: 'M120,210 L200,220 L190,280 L100,260 Z',
  },
  {
    id: 'jeolla',
    name: 'Jeolla Province',
    koreanName: '전라도',
    description: 'Famous for rich, flavorful kimchi with lots of seafood and fermented pastes.',
    kimchiTypes: ['Gat Kimchi', 'Dolgat Kimchi', 'Cabbage Kimchi'],
    spiceLevel: 4,
    keyIngredients: ['Mustard greens', 'Jeotgal (salted seafood)', 'Gochugaru'],
    path: 'M80,260 L190,280 L170,360 L60,340 Z',
  },
  {
    id: 'gyeongsang',
    name: 'Gyeongsang Province',
    koreanName: '경상도',
    description: 'Bold, salty, and very spicy kimchi with strong anchovy flavors.',
    kimchiTypes: ['Buchu Kimchi', 'Pa Kimchi', 'Myeongran Jeot Kimchi'],
    spiceLevel: 5,
    keyIngredients: ['Chives', 'Green onion', 'Anchovy sauce'],
    path: 'M190,280 L290,260 L280,360 L170,360 Z',
  },
  {
    id: 'jeju',
    name: 'Jeju Island',
    koreanName: '제주도',
    description: 'Island kimchi featuring unique local vegetables and minimal fermentation.',
    kimchiTypes: ['Dongji Kimchi', 'Turnip Kimchi'],
    spiceLevel: 2,
    keyIngredients: ['Turnip', 'Radish', 'Carrot'],
    path: 'M100,420 L160,420 L160,450 L100,450 Z',
  },
]

export default function KimchiMap({ regions = defaultRegions, title = 'Regional Kimchi Styles of Korea' }: KimchiMapProps) {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const getSpiceColor = (level: number) => {
    const colors = [
      'bg-green-200',
      'bg-yellow-200',
      'bg-orange-200',
      'bg-red-300',
      'bg-red-500',
    ]
    return colors[level - 1] || colors[0]
  }

  const renderSpiceLevel = (level: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i <= level ? 'bg-red-500' : 'bg-gray-200'
            }`}
          />
        ))}
        <span className="text-xs text-gray-500 ml-1">
          {level === 1 && 'Mild'}
          {level === 2 && 'Light'}
          {level === 3 && 'Medium'}
          {level === 4 && 'Spicy'}
          {level === 5 && 'Very Spicy'}
        </span>
      </div>
    )
  }

  return (
    <div className="my-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-kimchi-red to-red-600 text-white p-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {title}
          </h2>
          <p className="text-white/80 mt-2 text-sm">
            Click on a region to explore its unique kimchi traditions
          </p>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="relative">
              <svg
                viewBox="0 0 350 500"
                className="w-full max-w-md mx-auto"
                style={{ aspectRatio: '350/500' }}
              >
                {/* Background water */}
                <rect x="0" y="0" width="350" height="500" fill="#E0F2FE" rx="10" />

                {/* Regions */}
                {regions.map((region) => (
                  <path
                    key={region.id}
                    d={region.path}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedRegion?.id === region.id
                        ? 'fill-kimchi-red stroke-red-700'
                        : hoveredRegion === region.id
                        ? 'fill-red-200 stroke-red-400'
                        : 'fill-amber-100 stroke-amber-400'
                    }`}
                    strokeWidth="2"
                    onClick={() => setSelectedRegion(region)}
                    onMouseEnter={() => setHoveredRegion(region.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />
                ))}

                {/* Region labels */}
                {regions.map((region) => {
                  // Calculate center of path (simplified)
                  const pathParts = region.path.match(/\d+/g)?.map(Number) || []
                  const xs = pathParts.filter((_, i) => i % 2 === 0)
                  const ys = pathParts.filter((_, i) => i % 2 === 1)
                  const cx = xs.reduce((a, b) => a + b, 0) / xs.length
                  const cy = ys.reduce((a, b) => a + b, 0) / ys.length

                  return (
                    <text
                      key={`label-${region.id}`}
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`text-xs font-medium pointer-events-none ${
                        selectedRegion?.id === region.id ? 'fill-white' : 'fill-gray-700'
                      }`}
                    >
                      {region.koreanName || region.name}
                    </text>
                  )
                })}
              </svg>

              {/* Mobile region buttons */}
              <div className="lg:hidden mt-4 flex flex-wrap gap-2 justify-center">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedRegion?.id === region.id
                        ? 'bg-kimchi-red text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Region details */}
            <div className="min-h-[300px]">
              {selectedRegion ? (
                <div className="p-6 bg-gray-50 rounded-xl h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {selectedRegion.name}
                      </h3>
                      {selectedRegion.koreanName && (
                        <p className="text-gray-500">{selectedRegion.koreanName}</p>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedRegion(null)}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-gray-600 mb-4">{selectedRegion.description}</p>

                  {/* Spice Level */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Spice Level</p>
                    {renderSpiceLevel(selectedRegion.spiceLevel)}
                  </div>

                  {/* Kimchi Types */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Popular Kimchi Types</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedRegion.kimchiTypes.map((type, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-kimchi-red/10 text-kimchi-red text-sm rounded-full"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Ingredients */}
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Ingredients</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedRegion.keyIngredients.map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <p className="text-lg font-medium">Select a Region</p>
                    <p className="text-sm">Click on the map to explore regional kimchi styles</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Spice Level Guide</h4>
            <div className="flex flex-wrap gap-4">
              {[1, 2, 3, 4, 5].map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${getSpiceColor(level)}`} />
                  <span className="text-sm text-gray-600">
                    {level === 1 && 'Mild'}
                    {level === 2 && 'Light'}
                    {level === 3 && 'Medium'}
                    {level === 4 && 'Spicy'}
                    {level === 5 && 'Very Spicy'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
