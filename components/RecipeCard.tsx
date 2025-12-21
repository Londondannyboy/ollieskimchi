'use client'

import { useState } from 'react'

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
  tags
}: RecipeProps) {
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set())
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

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

  const difficultyColor = {
    'Easy': 'bg-green-100 text-green-700',
    'Medium': 'bg-yellow-100 text-yellow-700',
    'Advanced': 'bg-red-100 text-red-700'
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden my-8">
      {/* Recipe Header */}
      <div className="bg-gradient-to-r from-kimchi-red to-red-600 text-white p-8">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
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
          {servings && (
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm"><strong>Serves:</strong> {servings}</span>
            </div>
          )}
          <div className={`flex items-center gap-2 rounded-full px-4 py-2 ${difficultyColor[difficulty]}`}>
            <span className="text-sm font-medium">{difficulty}</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredients Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Ingredients
              </h3>

              {ingredients.map((section, idx) => (
                <div key={idx} className="mb-6">
                  {section.section && (
                    <h4 className="text-sm font-semibold text-kimchi-red uppercase tracking-wide mb-3">
                      {section.section}
                    </h4>
                  )}
                  <ul className="space-y-2">
                    {section.items.map((ingredient, i) => (
                      <li key={i}>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={checkedIngredients.has(`${idx}-${i}`)}
                            onChange={() => toggleIngredient(`${idx}-${i}`)}
                            className="mt-1 w-5 h-5 rounded border-gray-300 text-kimchi-red focus:ring-kimchi-red"
                          />
                          <span className={`text-gray-700 ${checkedIngredients.has(`${idx}-${i}`) ? 'line-through text-gray-400' : ''}`}>
                            {ingredient.amount && (
                              <strong className="text-gray-900">{ingredient.amount}</strong>
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
              <svg className="w-6 h-6 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Method
            </h3>

            <div className="space-y-6">
              {method.map((step) => (
                <div
                  key={step.step}
                  className={`flex gap-4 p-4 rounded-xl transition-all cursor-pointer ${
                    completedSteps.has(step.step)
                      ? 'bg-green-50 border-2 border-green-200'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => toggleStep(step.step)}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    completedSteps.has(step.step)
                      ? 'bg-green-500 text-white'
                      : 'bg-kimchi-red text-white'
                  }`}>
                    {completedSteps.has(step.step) ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.step
                    )}
                  </div>
                  <div className="flex-grow">
                    <p className={`text-gray-700 ${completedSteps.has(step.step) ? 'text-gray-500' : ''}`}>
                      {step.instruction}
                    </p>
                    {step.tip && (
                      <p className="mt-2 text-sm text-kimchi-red bg-kimchi-red/10 rounded-lg p-3">
                        <strong>Tip:</strong> {step.tip}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Chef's Notes */}
            {chefNotes && chefNotes.length > 0 && (
              <div className="mt-8 p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
                <h4 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Ollie&apos;s Notes
                </h4>
                <ul className="space-y-2">
                  {chefNotes.map((note, idx) => (
                    <li key={idx} className="text-amber-900 flex items-start gap-2">
                      <span className="text-amber-500">•</span>
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
          <div className="mt-8 pt-6 border-t border-gray-200">
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
      </div>
    </div>
  )
}
