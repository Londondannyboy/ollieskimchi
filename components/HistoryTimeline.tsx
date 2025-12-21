'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { TimelineData } from '@/lib/db'

interface HistoryTimelineProps {
  data: TimelineData
  title?: string
}

const eraColors: Record<string, { bg: string; text: string; border: string }> = {
  Ancient: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300' },
  Medieval: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300' },
  Modern: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
  Contemporary: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
}

export default function HistoryTimeline({ data, title = 'History of Kimchi' }: HistoryTimelineProps) {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const { stages } = data

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id')
            if (id) {
              setVisibleItems(prev => new Set([...prev, id]))
            }
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )

    itemRefs.current.forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const setItemRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      itemRefs.current.set(id, el)
    }
  }

  // Group by era
  const groupedByEra = stages.reduce((acc, stage) => {
    const era = stage.era || 'Other'
    if (!acc[era]) {
      acc[era] = []
    }
    acc[era].push(stage)
    return acc
  }, {} as Record<string, typeof stages>)

  return (
    <div className="my-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-kimchi-red to-red-600 text-white p-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {title}
          </h2>
        </div>

        <div className="p-6">
          {/* Era Legend */}
          <div className="flex flex-wrap gap-3 mb-8">
            {Object.keys(groupedByEra).map(era => {
              const colors = eraColors[era] || eraColors.Ancient
              return (
                <span
                  key={era}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}
                >
                  {era}
                </span>
              )
            })}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

            {/* Events */}
            <div className="space-y-8">
              {stages.map((stage, idx) => {
                const isVisible = visibleItems.has(stage.id)
                const isEven = idx % 2 === 0
                const colors = eraColors[stage.era || 'Ancient'] || eraColors.Ancient

                return (
                  <div
                    key={stage.id}
                    ref={setItemRef(stage.id)}
                    data-id={stage.id}
                    className={`relative flex items-start gap-4 md:gap-8 transition-all duration-700 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    } ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-4 h-4 rounded-full ${colors.bg} border-4 ${colors.border}`} />
                    </div>

                    {/* Content card */}
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className={`p-4 rounded-xl border-2 ${colors.bg} ${colors.border}`}>
                        {/* Date badge */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${colors.text} bg-white`}>
                            {stage.date || stage.day}
                          </span>
                          {stage.era && (
                            <span className={`text-xs ${colors.text}`}>
                              {stage.era} Era
                            </span>
                          )}
                        </div>

                        {/* Image */}
                        {stage.image && (
                          <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                            <Image
                              src={stage.image}
                              alt={stage.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {stage.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Tips/Facts */}
                        {stage.tips && stage.tips.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                              Key Facts
                            </p>
                            <ul className="space-y-1">
                              {stage.tips.map((tip, tipIdx) => (
                                <li key={tipIdx} className="text-sm text-gray-600 flex items-start gap-1">
                                  <span className={colors.text}>•</span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
