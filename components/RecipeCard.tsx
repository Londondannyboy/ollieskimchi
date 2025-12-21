'use client'

import { useState, useEffect, useRef } from 'react'

interface Ingredient {
  item: string
  amount?: string
  note?: string
}

interface RecipeStep {
  step: number
  instruction: string
  tip?: string
}

interface RecipeProps {
  title: string
  description: string
  prepTime?: string
  cookTime?: string
  totalTime?: string
  servings?: string
  difficulty?: 'Easy' | 'Medium' | 'Advanced'
  ingredients: {
    section?: string
    items: Ingredient[]
  }[]
  method: RecipeStep[]
  chefNotes?: string[]
  tags?: string[]
  slug?: string // For print QR code
}

// Parse serving count from string like "4 servings" or "6-8"
function parseServings(servingsStr?: string): number {
  if (!servingsStr) return 4
  const match = servingsStr.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 4
}

// Scale ingredient amount
function scaleAmount(amount: string | undefined, multiplier: number): string {
  if (!amount) return ''

  // Handle fractions like "1/2", "1/4"
  const fractionMatch = amount.match(/^(\d+)\/(\d+)(.*)$/)
  if (fractionMatch) {
    const num = parseInt(fractionMatch[1], 10)
    const denom = parseInt(fractionMatch[2], 10)
    const rest = fractionMatch[3] || ''
    const result = (num / denom) * multiplier
    if (result % 1 === 0) {
      return `${result}${rest}`
    }
    return `${result.toFixed(2).replace(/\.?0+$/, '')}${rest}`
  }

  // Handle "1 1/2" mixed fractions
  const mixedMatch = amount.match(/^(\d+)\s+(\d+)\/(\d+)(.*)$/)
  if (mixedMatch) {
    const whole = parseInt(mixedMatch[1], 10)
    const num = parseInt(mixedMatch[2], 10)
    const denom = parseInt(mixedMatch[3], 10)
    const rest = mixedMatch[4] || ''
    const result = (whole + num / denom) * multiplier
    if (result % 1 === 0) {
      return `${result}${rest}`
    }
    return `${result.toFixed(2).replace(/\.?0+$/, '')}${rest}`
  }

  // Handle ranges like "500-600g"
  const rangeMatch = amount.match(/^(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*(.*)$/)
  if (rangeMatch) {
    const low = parseFloat(rangeMatch[1]) * multiplier
    const high = parseFloat(rangeMatch[2]) * multiplier
    const unit = rangeMatch[3] || ''
    return `${Math.round(low)}-${Math.round(high)}${unit}`
  }

  // Handle simple numbers like "500g", "2 tbsp"
  const simpleMatch = amount.match(/^(\d+(?:\.\d+)?)\s*(.*)$/)
  if (simpleMatch) {
    const num = parseFloat(simpleMatch[1]) * multiplier
    const unit = simpleMatch[2] || ''
    // Round to nice numbers
    if (num % 1 === 0) {
      return `${num}${unit}`
    }
    return `${num.toFixed(1).replace(/\.0$/, '')}${unit}`
  }

  return amount
}

export default function RecipeCard({
  title,
  description,
  prepTime,
  cookTime,
  totalTime,
  servings,
  difficulty = 'Medium',
  ingredients,
  method,
  chefNotes,
  tags,
  slug
}: RecipeProps) {
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set())
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [servingMultiplier, setServingMultiplier] = useState(1)
  const [useMetric, setUseMetric] = useState(true)
  const recipeRef = useRef<HTMLDivElement>(null)

  const baseServings = parseServings(servings)
  const currentServings = Math.round(baseServings * servingMultiplier)

  // Load preferences from localStorage
  useEffect(() => {
    const savedMetric = localStorage.getItem('ollieskimchi-metric')
    if (savedMetric !== null) {
      setUseMetric(savedMetric === 'true')
    }
  }, [])

  // Save metric preference
  const toggleMetric = () => {
    const newValue = !useMetric
    setUseMetric(newValue)
    localStorage.setItem('ollieskimchi-metric', String(newValue))
  }

  const adjustServings = (delta: number) => {
    const newMultiplier = Math.max(0.25, Math.min(4, servingMultiplier + delta * 0.25))
    setServingMultiplier(newMultiplier)
  }

  const setQuickMultiplier = (mult: number) => {
    setServingMultiplier(mult)
  }

  const toggleIngredient = (item: string) => {
    const newChecked = new Set(checkedIngredients)
    if (newChecked.has(item)) {
      newChecked.delete(item)
    } else {
      newChecked.add(item)
    }
    setCheckedIngredients(newChecked)
  }

  const toggleStep = (step: number) => {
    const newCompleted = new Set(completedSteps)
    if (newCompleted.has(step)) {
      newCompleted.delete(step)
    } else {
      newCompleted.add(step)
    }
    setCompletedSteps(newCompleted)
  }

  const handlePrint = () => {
    window.print()
  }

  const difficultyColor = {
    'Easy': 'bg-green-100 text-green-700',
    'Medium': 'bg-yellow-100 text-yellow-700',
    'Advanced': 'bg-red-100 text-red-700'
  }

  return (
    <>
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .recipe-print-area, .recipe-print-area * {
            visibility: visible;
          }
          .recipe-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 20px;
          }
          .no-print {
            display: none !important;
          }
          .print-checkbox {
            width: 14px;
            height: 14px;
            border: 2px solid #000;
            display: inline-block;
            margin-right: 8px;
            vertical-align: middle;
          }
          .print-footer {
            display: block !important;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ccc;
            font-size: 12px;
            color: #666;
          }
        }
        @media screen {
          .print-footer {
            display: none;
          }
          .print-checkbox {
            display: none;
          }
        }
      `}</style>

      <div ref={recipeRef} className="recipe-print-area bg-white rounded-3xl shadow-lg overflow-hidden my-8">
        {/* Recipe Header */}
        <div className="bg-gradient-to-r from-kimchi-red to-red-600 text-white p-8 no-print">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-3xl font-bold">{title}</h2>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
              title="Print Recipe"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          </div>
          <p className="text-white/90 text-lg">{description}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mt-6">
            {prepTime && (
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm"><strong>Prep:</strong> {prepTime}</span>
              </div>
            )}
            {cookTime && (
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                <span className="text-sm"><strong>Cook:</strong> {cookTime}</span>
              </div>
            )}
            {totalTime && (
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm"><strong>Total:</strong> {totalTime}</span>
              </div>
            )}
            <div className={`flex items-center gap-2 rounded-full px-4 py-2 ${difficultyColor[difficulty]}`}>
              <span className="text-sm font-medium">{difficulty}</span>
            </div>
          </div>

          {/* Serving Size Calculator */}
          <div className="mt-6 p-4 bg-white/10 rounded-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Servings:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => adjustServings(-1)}
                    className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                    disabled={servingMultiplier <= 0.25}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-xl font-bold min-w-[3rem] text-center">{currentServings}</span>
                  <button
                    onClick={() => adjustServings(1)}
                    className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                    disabled={servingMultiplier >= 4}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Quick Batch Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setQuickMultiplier(0.5)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    servingMultiplier === 0.5 ? 'bg-white text-red-900' : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  Half
                </button>
                <button
                  onClick={() => setQuickMultiplier(1)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    servingMultiplier === 1 ? 'bg-white text-red-900' : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  Original
                </button>
                <button
                  onClick={() => setQuickMultiplier(2)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    servingMultiplier === 2 ? 'bg-white text-red-900' : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  Double
                </button>
              </div>

              {/* Metric Toggle */}
              <button
                onClick={toggleMetric}
                className="flex items-center gap-2 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {useMetric ? 'Metric' : 'Imperial'}
              </button>
            </div>
          </div>
        </div>

        {/* Print Header - Only visible when printing */}
        <div className="hidden print:block p-6 border-b-2 border-gray-900">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600 mt-1">{description}</p>
          <div className="flex gap-6 mt-3 text-sm">
            {prepTime && <span><strong>Prep:</strong> {prepTime}</span>}
            {cookTime && <span><strong>Cook:</strong> {cookTime}</span>}
            {totalTime && <span><strong>Total:</strong> {totalTime}</span>}
            <span><strong>Serves:</strong> {currentServings}</span>
            <span><strong>Difficulty:</strong> {difficulty}</span>
          </div>
        </div>

        <div className="p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Ingredients Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-red-900 no-print" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Ingredients
                  {servingMultiplier !== 1 && (
                    <span className="text-sm font-normal text-red-900 no-print">
                      (adjusted for {currentServings})
                    </span>
                  )}
                </h3>

                {ingredients.map((section, idx) => (
                  <div key={idx} className="mb-6">
                    {section.section && (
                      <h4 className="text-sm font-semibold text-red-900 uppercase tracking-wide mb-3">
                        {section.section}
                      </h4>
                    )}
                    <ul className="space-y-2">
                      {section.items.map((ingredient, i) => (
                        <li key={i}>
                          <label className="flex items-start gap-3 cursor-pointer group">
                            <span className="print-checkbox"></span>
                            <input
                              type="checkbox"
                              checked={checkedIngredients.has(`${idx}-${i}`)}
                              onChange={() => toggleIngredient(`${idx}-${i}`)}
                              className="mt-1 w-5 h-5 rounded border-gray-300 text-red-900 focus:ring-kimchi-red no-print"
                            />
                            <span className={`text-gray-700 ${checkedIngredients.has(`${idx}-${i}`) ? 'line-through text-gray-400' : ''}`}>
                              {ingredient.amount && (
                                <strong className="text-gray-900">
                                  {scaleAmount(ingredient.amount, servingMultiplier)}
                                </strong>
                              )}{' '}
                              {ingredient.item}
                              {ingredient.note && (
                                <span className="text-gray-500 text-sm"> ({ingredient.note})</span>
                              )}
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Method Column */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-900 no-print" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Method
              </h3>

              <div className="space-y-6">
                {method.map((step) => (
                  <div
                    key={step.step}
                    className={`flex gap-4 p-4 rounded-xl transition-all cursor-pointer print:cursor-default print:bg-transparent print:p-2 ${
                      completedSteps.has(step.step)
                        ? 'bg-green-50 border-2 border-green-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => toggleStep(step.step)}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 print:w-6 print:h-6 rounded-full flex items-center justify-center font-bold ${
                      completedSteps.has(step.step)
                        ? 'bg-green-500 text-white'
                        : 'bg-red-900 text-white print:bg-gray-800'
                    }`}>
                      {completedSteps.has(step.step) ? (
                        <svg className="w-6 h-6 no-print" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : null}
                      <span className={completedSteps.has(step.step) ? 'hidden print:inline' : ''}>{step.step}</span>
                    </div>
                    <div className="flex-grow">
                      <p className={`text-gray-700 ${completedSteps.has(step.step) ? 'text-gray-500' : ''}`}>
                        {step.instruction}
                      </p>
                      {step.tip && (
                        <p className="mt-2 text-sm text-red-900 bg-red-900/10 rounded-lg p-3 print:bg-gray-100 print:text-gray-700">
                          <strong>Tip:</strong> {step.tip}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chef's Notes */}
              {chefNotes && chefNotes.length > 0 && (
                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border-2 border-amber-200 print:bg-gray-50 print:border-gray-300">
                  <h4 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2 print:text-gray-800">
                    <svg className="w-5 h-5 no-print" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Ollie&apos;s Notes
                  </h4>
                  <ul className="space-y-2">
                    {chefNotes.map((note, idx) => (
                      <li key={idx} className="text-amber-900 flex items-start gap-2 print:text-gray-700">
                        <span className="text-amber-500 print:text-gray-500">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200 no-print">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Print Footer */}
          <div className="print-footer">
            <p>Printed from ollieskimchi.co.uk{slug ? `/${slug}` : ''}</p>
            <p>For more recipes and tips, visit our website!</p>
          </div>
        </div>
      </div>
    </>
  )
}
