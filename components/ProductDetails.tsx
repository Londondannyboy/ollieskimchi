'use client'

interface ProductDetailsProps {
  descriptionHtml: string
  description?: string
}

export default function ProductDetails({ descriptionHtml, description }: ProductDetailsProps) {
  // Parse HTML to extract sections
  const parser = typeof window !== 'undefined' ? new DOMParser() : null

  // Extract key info from description or descriptionHtml
  const extractInfo = () => {
    // Default values
    const info = {
      mainDescription: '',
      whatsIncluded: '',
      storage: 'Keep refrigerated',
      bestConsumed: 'Within 4 weeks of opening',
      ingredients: '',
      size: '',
    }

    if (parser && descriptionHtml) {
      const doc = parser.parseFromString(descriptionHtml, 'text/html')

      // Get all text content
      const paragraphs = doc.querySelectorAll('p')
      const headings = doc.querySelectorAll('h3')

      // Build main description from first paragraphs before any h3
      const allElements = doc.body.children
      let mainParts: string[] = []

      for (let i = 0; i < allElements.length; i++) {
        const el = allElements[i]
        if (el.tagName === 'H3') break
        if (el.tagName === 'P') {
          const text = el.textContent?.trim() || ''
          if (text && !text.toLowerCase().startsWith('size:')) {
            mainParts.push(text)
          }
        }
      }
      info.mainDescription = mainParts.join('\n\n')

      // Extract sections by heading
      headings.forEach((h3) => {
        const title = h3.textContent?.toLowerCase() || ''
        let content = ''
        let sibling = h3.nextElementSibling
        while (sibling && sibling.tagName !== 'H3') {
          content += (sibling.textContent || '') + ' '
          sibling = sibling.nextElementSibling
        }
        content = content.trim()

        if (title.includes('included')) {
          info.whatsIncluded = content
        } else if (title.includes('storage')) {
          // Parse storage info
          const parts = content.split('.')
          if (parts[0]) info.storage = parts[0].trim()
          if (parts[1]) info.bestConsumed = parts[1].trim().replace(/^best consumed/i, '').trim()
        } else if (title.includes('ingredient')) {
          info.ingredients = content
        }
      })

      // Look for size
      paragraphs.forEach((p) => {
        const text = p.textContent || ''
        if (text.toLowerCase().includes('size:')) {
          info.size = text.replace(/size:/i, '').trim()
        }
      })
    }

    return info
  }

  const info = extractInfo()

  // If we couldn't parse, fall back to simple display
  if (!info.mainDescription && description) {
    info.mainDescription = description
  }

  return (
    <div className="space-y-6">
      {/* Main Description */}
      {info.mainDescription && (
        <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
          {info.mainDescription}
        </p>
      )}

      {/* Info Cards */}
      <div className="grid gap-3">
        {/* What's Included */}
        {info.whatsIncluded && (
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-kimchi-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-kimchi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">What&apos;s Included</p>
              <p className="text-gray-600 text-sm mt-0.5">{info.whatsIncluded}</p>
            </div>
          </div>
        )}

        {/* Storage */}
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Storage</p>
            <p className="text-gray-600 text-sm mt-0.5">{info.storage}</p>
          </div>
        </div>

        {/* Best Consumed */}
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
          <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Best Consumed</p>
            <p className="text-gray-600 text-sm mt-0.5">{info.bestConsumed}</p>
          </div>
        </div>

        {/* Size */}
        {info.size && (
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Size</p>
              <p className="text-gray-600 text-sm mt-0.5">{info.size}</p>
            </div>
          </div>
        )}

        {/* Ingredients */}
        {info.ingredients && (
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Ingredients</p>
              <p className="text-gray-600 text-sm mt-0.5">{info.ingredients}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
