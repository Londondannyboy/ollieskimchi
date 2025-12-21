'use client'

import Image from 'next/image'
import { ProductsData } from '@/lib/db'

interface ProductCardsProps {
  products: ProductsData
  title?: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ProductCards({ products, title = 'Recommended Products' }: ProductCardsProps) {
  return (
    <div className="my-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-kimchi-red to-red-600 text-white p-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {title}
          </h2>
        </div>

        {/* Products Grid */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl border-2 overflow-hidden transition-shadow hover:shadow-lg ${
                  product.isOlliesPick ? 'border-kimchi-red' : 'border-gray-200'
                }`}
              >
                {/* Ollie's Pick Badge */}
                {product.isOlliesPick && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 bg-kimchi-red text-white text-xs font-bold rounded-full shadow-lg">
                      Ollie&apos;s Pick
                    </span>
                  </div>
                )}

                {/* Product Image */}
                {product.image && (
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {product.name}
                  </h3>

                  {product.rating && (
                    <div className="mb-2">
                      <StarRating rating={product.rating} />
                    </div>
                  )}

                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>

                  {/* Price Range */}
                  {product.priceRange && (
                    <p className="text-lg font-semibold text-kimchi-red mb-3">
                      {product.priceRange}
                    </p>
                  )}

                  {/* Best For Tags */}
                  {product.bestFor && product.bestFor.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.bestFor.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Pros & Cons */}
                  {(product.pros?.length || product.cons?.length) && (
                    <div className="space-y-2 mb-4">
                      {product.pros && product.pros.length > 0 && (
                        <div>
                          {product.pros.map((pro, proIdx) => (
                            <div key={proIdx} className="flex items-start gap-2 text-sm">
                              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600">{pro}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {product.cons && product.cons.length > 0 && (
                        <div>
                          {product.cons.map((con, conIdx) => (
                            <div key={conIdx} className="flex items-start gap-2 text-sm">
                              <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-gray-600">{con}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Buy Button */}
                  {product.buyUrl && (
                    <a
                      href={product.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-2 bg-kimchi-red text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                    >
                      View Product
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
