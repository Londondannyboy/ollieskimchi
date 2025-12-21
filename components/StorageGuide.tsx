'use client'

import { StorageData } from '@/lib/db'

interface StorageGuideProps {
  storage: StorageData
  title?: string
}

const locationIcons: Record<string, React.ReactNode> = {
  fridge: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v18h14V3H5zm0 10h14M9 13v2m0-8v2" />
    </svg>
  ),
  freezer: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m-6-9h12M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  pantry: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  'room-temp': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
}

const locationLabels: Record<string, string> = {
  fridge: 'Refrigerator',
  freezer: 'Freezer',
  pantry: 'Pantry',
  'room-temp': 'Room Temperature',
}

const locationColors: Record<string, { bg: string; text: string; border: string }> = {
  fridge: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  freezer: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
  pantry: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'room-temp': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
}

export default function StorageGuide({ storage, title = 'Storage Guide' }: StorageGuideProps) {
  const { locations, warningSigns, shelfLifeTips } = storage

  return (
    <div className="my-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-kimchi-red to-red-600 text-white p-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            {title}
          </h2>
        </div>

        <div className="p-6">
          {/* Storage Locations */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {locations.map((loc, idx) => {
              const colors = locationColors[loc.location] || locationColors.fridge

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-2 ${colors.bg} ${colors.border}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${colors.text} bg-white/50`}>
                      {locationIcons[loc.location] || locationIcons.fridge}
                    </div>
                    <div>
                      <h3 className={`font-bold ${colors.text}`}>
                        {locationLabels[loc.location] || loc.location}
                      </h3>
                      <p className="text-2xl font-bold text-gray-900">{loc.duration}</p>
                    </div>
                  </div>

                  {loc.temperature && (
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-sm text-gray-600">{loc.temperature}</span>
                    </div>
                  )}

                  {loc.tips && loc.tips.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {loc.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>

          {/* Warning Signs */}
          {warningSigns && warningSigns.length > 0 && (
            <div className="p-4 bg-red-50 rounded-xl border-2 border-red-200 mb-6">
              <h3 className="font-bold text-red-700 flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                When to Discard
              </h3>
              <ul className="space-y-2">
                {warningSigns.map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-red-700">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Shelf Life Tips */}
          {shelfLifeTips && shelfLifeTips.length > 0 && (
            <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
              <h3 className="font-bold text-green-700 flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Tips to Extend Shelf Life
              </h3>
              <ul className="space-y-2">
                {shelfLifeTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-green-700">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
