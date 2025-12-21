'use client'

import { useState } from 'react'
import { NutritionData } from '@/lib/db'

interface NutritionCardProps {
  nutrition: NutritionData
}

// Daily values based on 2,000 calorie diet
const dailyValues = {
  totalFat: 78,
  saturatedFat: 20,
  cholesterol: 300,
  sodium: 2300,
  totalCarbs: 275,
  dietaryFiber: 28,
  protein: 50,
  vitaminD: 20,
  calcium: 1300,
  iron: 18,
  potassium: 4700,
}

export default function NutritionCard({ nutrition }: NutritionCardProps) {
  const [showPer100g, setShowPer100g] = useState(false)

  const getDV = (value: number | undefined, dvKey: keyof typeof dailyValues): string => {
    if (value === undefined) return ''
    const dv = Math.round((value / dailyValues[dvKey]) * 100)
    return `${dv}%`
  }

  return (
    <div className="my-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-kimchi-red to-red-600 text-white p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Nutrition Facts
            </h2>
            <button
              onClick={() => setShowPer100g(!showPer100g)}
              className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
            >
              {showPer100g ? 'Per Serving' : 'Per 100g'}
            </button>
          </div>
        </div>

        {/* Nutrition Label */}
        <div className="p-4 font-sans text-sm">
          {/* Serving Info */}
          <div className="border-b-8 border-black pb-2 mb-2">
            <p className="text-gray-700">
              <span className="font-bold">Serving Size</span> {nutrition.servingSize}
            </p>
            {nutrition.servingsPerContainer && (
              <p className="text-gray-700">
                <span className="font-bold">Servings Per Container</span> {nutrition.servingsPerContainer}
              </p>
            )}
          </div>

          {/* Amount Per Serving */}
          <p className="text-xs text-gray-600 mb-1">Amount per serving</p>

          {/* Calories */}
          <div className="flex justify-between items-baseline border-b-4 border-black pb-2 mb-2">
            <span className="text-2xl font-black">Calories</span>
            <span className="text-3xl font-black">{nutrition.calories}</span>
          </div>

          {/* % Daily Value header */}
          <div className="text-right text-xs font-bold border-b border-gray-300 pb-1 mb-1">
            % Daily Value*
          </div>

          {/* Nutrients */}
          <div className="space-y-1">
            {/* Total Fat */}
            <div className="flex justify-between border-b border-gray-200 py-1">
              <div>
                <span className="font-bold">Total Fat</span> {nutrition.totalFat}g
              </div>
              <span className="font-bold">{getDV(nutrition.totalFat, 'totalFat')}</span>
            </div>

            {/* Saturated Fat */}
            {nutrition.saturatedFat !== undefined && (
              <div className="flex justify-between border-b border-gray-200 py-1 pl-4">
                <div>Saturated Fat {nutrition.saturatedFat}g</div>
                <span className="font-bold">{getDV(nutrition.saturatedFat, 'saturatedFat')}</span>
              </div>
            )}

            {/* Trans Fat */}
            {nutrition.transFat !== undefined && (
              <div className="flex justify-between border-b border-gray-200 py-1 pl-4">
                <div><em>Trans</em> Fat {nutrition.transFat}g</div>
                <span></span>
              </div>
            )}

            {/* Cholesterol */}
            {nutrition.cholesterol !== undefined && (
              <div className="flex justify-between border-b border-gray-200 py-1">
                <div>
                  <span className="font-bold">Cholesterol</span> {nutrition.cholesterol}mg
                </div>
                <span className="font-bold">{getDV(nutrition.cholesterol, 'cholesterol')}</span>
              </div>
            )}

            {/* Sodium */}
            <div className="flex justify-between border-b border-gray-200 py-1">
              <div>
                <span className="font-bold">Sodium</span> {nutrition.sodium}mg
              </div>
              <span className="font-bold">{getDV(nutrition.sodium, 'sodium')}</span>
            </div>

            {/* Total Carbs */}
            <div className="flex justify-between border-b border-gray-200 py-1">
              <div>
                <span className="font-bold">Total Carbohydrate</span> {nutrition.totalCarbs}g
              </div>
              <span className="font-bold">{getDV(nutrition.totalCarbs, 'totalCarbs')}</span>
            </div>

            {/* Dietary Fiber */}
            <div className="flex justify-between border-b border-gray-200 py-1 pl-4">
              <div>Dietary Fibre {nutrition.dietaryFiber}g</div>
              <span className="font-bold">{getDV(nutrition.dietaryFiber, 'dietaryFiber')}</span>
            </div>

            {/* Sugars */}
            {nutrition.sugars !== undefined && (
              <div className="flex justify-between border-b border-gray-200 py-1 pl-4">
                <div>Total Sugars {nutrition.sugars}g</div>
                <span></span>
              </div>
            )}

            {/* Protein */}
            <div className="flex justify-between border-b-8 border-black py-1">
              <div>
                <span className="font-bold">Protein</span> {nutrition.protein}g
              </div>
              <span className="font-bold">{getDV(nutrition.protein, 'protein')}</span>
            </div>

            {/* Vitamins & Minerals */}
            {nutrition.vitaminD !== undefined && (
              <div className="flex justify-between border-b border-gray-200 py-1">
                <div>Vitamin D {nutrition.vitaminD}mcg</div>
                <span>{getDV(nutrition.vitaminD, 'vitaminD')}</span>
              </div>
            )}

            {nutrition.calcium !== undefined && (
              <div className="flex justify-between border-b border-gray-200 py-1">
                <div>Calcium {nutrition.calcium}mg</div>
                <span>{getDV(nutrition.calcium, 'calcium')}</span>
              </div>
            )}

            {nutrition.iron !== undefined && (
              <div className="flex justify-between border-b border-gray-200 py-1">
                <div>Iron {nutrition.iron}mg</div>
                <span>{getDV(nutrition.iron, 'iron')}</span>
              </div>
            )}

            {nutrition.potassium !== undefined && (
              <div className="flex justify-between border-b border-gray-200 py-1">
                <div>Potassium {nutrition.potassium}mg</div>
                <span>{getDV(nutrition.potassium, 'potassium')}</span>
              </div>
            )}
          </div>

          {/* Probiotic Info */}
          {nutrition.probioticCFU && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-green-800">Live Probiotics</span>
              </div>
              <p className="text-green-700 text-sm mt-1">{nutrition.probioticCFU}</p>
            </div>
          )}

          {/* Footnote */}
          <p className="text-xs text-gray-500 mt-4">
            * The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
          </p>
        </div>
      </div>
    </div>
  )
}
