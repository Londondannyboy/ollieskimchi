'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/components/CartContext'
import GuardianBadge from '@/components/GuardianBadge'

// Variant IDs for each product
const variantIds: Record<string, string> = {
  'classic-napa-cabbage-kimchi': 'gid://shopify/ProductVariant/53034599219533',
  'classic-kimchi-2-pack': 'gid://shopify/ProductVariant/53034599252301',
  'classic-kimchi-3-pack': 'gid://shopify/ProductVariant/53034599285069',
  'classic-kimchi-6-pack': 'gid://shopify/ProductVariant/53034599317837',
  'ok-cap': 'gid://shopify/ProductVariant/53164639846733',
}

// Guardian review quotes
const guardianQuotes: Record<string, string> = {
  'classic-napa-cabbage-kimchi': 'Bold and punchy',
  'classic-kimchi-2-pack': 'Big flavour',
  'classic-kimchi-3-pack': 'Well seasoned',
  'classic-kimchi-6-pack': 'Full and well-rounded',
}

interface ShopProductCardProps {
  id: string
  title: string
  handle: string
  description: string
  price: string
  image: string
}

export default function ShopProductCard({
  id,
  title,
  handle,
  description,
  price,
  image,
}: ShopProductCardProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const [added, setAdded] = useState(false)

  const variantId = variantIds[handle]
  const guardianQuote = guardianQuotes[handle]

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!variantId) return

    setIsAdding(true)
    try {
      await addToCart(variantId, 1)
      setAdded(true)
      setTimeout(() => setAdded(false), 2000)
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsAdding(false)
    }
  }

  const formatPrice = (amount: string) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(parseFloat(amount))
  }

  return (
    <div className="product-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl">
      <Link href={`/shop/${handle}`}>
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Guardian Badge - Top Right (only for kimchi products) */}
          {guardianQuote && (
            <div className="absolute top-2 right-2 z-10">
              <GuardianBadge size="sm" />
            </div>
          )}
          {/* Guardian Quote - Bottom Left */}
          {guardianQuote && (
            <div className="absolute bottom-2 left-2 z-10">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-md">
                <p className="text-[10px] text-gray-700 font-medium italic">
                  &ldquo;{guardianQuote}&rdquo;
                </p>
                <p className="text-[8px] text-gray-500">— The Guardian</p>
              </div>
            </div>
          )}
        </div>
      </Link>
      <div className="p-4 sm:p-6">
        <Link href={`/shop/${handle}`}>
          <h3 className="font-semibold text-gray-900 group-hover:text-red-900 transition-colors">
            {title}
          </h3>
          <p className="mt-1 sm:mt-2 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        </Link>
        <div className="mt-3 sm:mt-4 flex items-center justify-between gap-2">
          <p className="text-lg font-bold text-red-900">
            {formatPrice(price)}
          </p>
          <button
            onClick={handleAddToCart}
            disabled={isAdding || !variantId}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-red-900 text-white hover:bg-red-700'
            } ${isAdding ? 'opacity-75' : ''}`}
          >
            {isAdding ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Adding
              </span>
            ) : added ? (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Added
              </span>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
