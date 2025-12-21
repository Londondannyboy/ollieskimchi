'use client'

import { useState } from 'react'
import { TimelineData } from '@/lib/db'

interface FermentationTimelineProps {
  data: TimelineData
  title?: string
}

const stageIcons: Record<string, React.ReactNode> = {
  salt: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  bubble: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeWidth={2} />
      <circle cx="6" cy="8" r="2" strokeWidth={2} />
      <circle cx="18" cy="16" r="2" strokeWidth={2} />
    </svg>
  ),
  ferment: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  ready: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  aged: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

const stageColors: Record<string, string> = {
  salt: 'bg-gray-500',
  bubble: 'bg-yellow-500',
  ferment: 'bg-orange-500',
  ready: 'bg-green-500',
  aged: 'bg-purple-500',
}

export default function FermentationTimeline({ data, title = 'Fermentation Timeline' }: FermentationTimelineProps) {
  const [activeStage, setActiveStage] = useState<string | null>(null)
  const { stages } = data

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
          <p className="text-white/80 mt-2 text-sm">
            Click on any stage to mark your progress
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block p-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200">
              <div
                className="h-full bg-red-900 transition-all duration-500"
                style={{
                  width: activeStage
                    ? `${((stages.findIndex(s => s.id === activeStage) + 1) / stages.length) * 100}%`
                    : '0%'
                }}
              />
            </div>

            {/* Stages */}
            <div className="relative flex justify-between">
              {stages.map((stage, idx) => {
                const isActive = activeStage === stage.id
                const isPast = activeStage
                  ? stages.findIndex(s => s.id === activeStage) >= idx
                  : false
                const iconKey = stage.icon || 'ferment'
                const colorClass = stageColors[iconKey] || 'bg-red-900'

                return (
                  <div
                    key={stage.id}
                    className="flex flex-col items-center cursor-pointer group"
                    style={{ width: `${100 / stages.length}%` }}
                    onClick={() => setActiveStage(isActive ? null : stage.id)}
                  >
                    {/* Stage marker */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? `${colorClass} text-white scale-110 shadow-lg`
                          : isPast
                          ? `${colorClass} text-white`
                          : 'bg-gray-200 text-gray-500 group-hover:bg-gray-300'
                      }`}
                    >
                      {stageIcons[iconKey] || stageIcons.ferment}
                    </div>

                    {/* Day label */}
                    <p className={`mt-3 text-sm font-semibold ${
                      isPast || isActive ? 'text-red-900' : 'text-gray-500'
                    }`}>
                      {stage.day || stage.date}
                    </p>

                    {/* Title */}
                    <p className="mt-1 text-sm text-gray-700 text-center font-medium">
                      {stage.title}
                    </p>

                    {/* Temperature */}
                    {stage.temperature && (
                      <p className="mt-1 text-xs text-gray-500">
                        {stage.temperature}
                      </p>
                    )}

                    {/* Active indicator */}
                    {isActive && (
                      <div className="mt-2 px-3 py-1 bg-red-900 text-white text-xs font-medium rounded-full">
                        You are here
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Active stage details */}
          {activeStage && (
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              {stages.filter(s => s.id === activeStage).map(stage => (
                <div key={stage.id}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {stage.day || stage.date}: {stage.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{stage.description}</p>
                  {stage.tips && stage.tips.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-900">Tips:</p>
                      <ul className="space-y-1">
                        {stage.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-red-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden p-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-8 w-1 bg-gray-200">
              <div
                className="w-full bg-red-900 transition-all duration-500"
                style={{
                  height: activeStage
                    ? `${((stages.findIndex(s => s.id === activeStage) + 1) / stages.length) * 100}%`
                    : '0%'
                }}
              />
            </div>

            {/* Stages */}
            <div className="space-y-6">
              {stages.map((stage, idx) => {
                const isActive = activeStage === stage.id
                const isPast = activeStage
                  ? stages.findIndex(s => s.id === activeStage) >= idx
                  : false
                const iconKey = stage.icon || 'ferment'
                const colorClass = stageColors[iconKey] || 'bg-red-900'

                return (
                  <div
                    key={stage.id}
                    className="relative flex gap-4 cursor-pointer"
                    onClick={() => setActiveStage(isActive ? null : stage.id)}
                  >
                    {/* Stage marker */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 z-10 ${
                        isActive
                          ? `${colorClass} text-white scale-110 shadow-lg`
                          : isPast
                          ? `${colorClass} text-white`
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {stageIcons[iconKey] || stageIcons.ferment}
                    </div>

                    {/* Content */}
                    <div className={`flex-grow pt-2 pb-4 ${isActive ? 'bg-gray-50 -mx-2 px-4 rounded-xl' : ''}`}>
                      <div className="flex items-center gap-2">
                        <p className={`text-sm font-semibold ${isPast || isActive ? 'text-red-900' : 'text-gray-500'}`}>
                          {stage.day || stage.date}
                        </p>
                        {stage.temperature && (
                          <span className="text-xs text-gray-500">• {stage.temperature}</span>
                        )}
                        {isActive && (
                          <span className="ml-auto px-2 py-0.5 bg-red-900 text-white text-xs font-medium rounded-full">
                            You are here
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mt-1">{stage.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{stage.description}</p>

                      {isActive && stage.tips && stage.tips.length > 0 && (
                        <div className="mt-3 space-y-1">
                          {stage.tips.map((tip, tipIdx) => (
                            <p key={tipIdx} className="flex items-start gap-2 text-xs text-gray-600">
                              <svg className="w-3 h-3 text-red-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="4" />
                              </svg>
                              {tip}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
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
