'use client'

import { useState } from 'react'
import { FAQData } from '@/lib/db'

interface FAQAccordionProps {
  faqs: FAQData
  title?: string
}

export default function FAQAccordion({ faqs, title = 'Frequently Asked Questions' }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const [allExpanded, setAllExpanded] = useState(false)

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
    setAllExpanded(newOpenItems.size === faqs.length)
  }

  const toggleAll = () => {
    if (allExpanded) {
      setOpenItems(new Set())
      setAllExpanded(false)
    } else {
      setOpenItems(new Set(faqs.map((_, i) => i)))
      setAllExpanded(true)
    }
  }

  // Generate Schema.org FAQ structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="my-8">
      {/* Schema.org FAQ Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-kimchi-red to-red-600 text-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {title}
            </h2>
            <button
              onClick={toggleAll}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
            >
              {allExpanded ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openItems.has(index)}
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-2 transition-transform duration-200 ${openItems.has(index) ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(index) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  <div
                    className="prose prose-gray max-w-none"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
