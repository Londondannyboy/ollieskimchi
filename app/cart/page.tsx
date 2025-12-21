'use client'

import { useCart } from '@/components/CartContext'
import { formatPrice } from '@/lib/shopify'
import Image from 'next/image'
import Link from 'next/link'

// Local image overrides by product handle
const productImageOverrides: Record<string, string> = {
  'classic-napa-cabbage-kimchi': '/Assets/Kimchi_B004_23-04-25.jpg',
  'classic-kimchi-2-pack': '/Product Images/Ollies Kimchi - Kimchi Product 2 Set.png',
  'classic-kimchi-3-pack': '/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png',
  'classic-kimchi-6-pack': '/Product Images/Ollies Kimchi - Kimchi Product 6 Pack.png',
  'spicy-kimchi': "/Product Images/Ollie's Kimchi Spicy Kimchi Product.png",
  'mild-kimchi': "/Product Images/Ollie's Kimchi Mild Kimchi Product.png",
  'vegan-kimchi': "/Product Images/Ollie's Kimchi Vegan Kimchi Product.png",
}

// Get the correct image for a product
function getProductImage(handle: string, shopifyImageUrl?: string): string {
  return productImageOverrides[handle] || shopifyImageUrl || '/Assets/Kimchi_B004_23-04-25.jpg'
}

export default function CartPage() {
  const { cart, isLoading, isShopifyEnabled, updateQuantity, removeItem, checkoutUrl } = useCart()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kimchi-red" />
      </div>
    )
  }

  const cartLines = cart?.lines.edges.map(e => e.node) || []
  const isEmpty = cartLines.length === 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        {!isShopifyEnabled && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-yellow-800">
              Demo Mode: Connect your Shopify store to enable full cart functionality.
            </p>
          </div>
        )}

        {isEmpty ? (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven&apos;t added any kimchi yet!
            </p>
            <Link href="/shop" className="btn-primary rounded-full">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartLines.map((line) => (
                <div
                  key={line.id}
                  className="bg-white rounded-xl shadow-sm p-4 flex gap-4"
                >
                  <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={getProductImage(
                        line.merchandise.product.handle,
                        line.merchandise.product.featuredImage?.url
                      )}
                      alt={line.merchandise.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900">
                      {line.merchandise.product.title}
                    </h3>
                    {line.merchandise.title !== 'Default Title' && (
                      <p className="text-sm text-gray-500">{line.merchandise.title}</p>
                    )}
                    <p className="text-kimchi-red font-semibold mt-1">
                      {formatPrice(line.merchandise.price.amount, line.merchandise.price.currencyCode)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button
                          onClick={() => updateQuantity(line.id, line.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:text-kimchi-red transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-medium">{line.quantity}</span>
                        <button
                          onClick={() => updateQuantity(line.id, line.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:text-kimchi-red transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(line.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">
                      {cart ? formatPrice(cart.cost.subtotalAmount.amount, cart.cost.subtotalAmount.currencyCode) : '£0.00'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-500">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-lg text-kimchi-red">
                      {cart ? formatPrice(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode) : '£0.00'}
                    </span>
                  </div>
                </div>

                {checkoutUrl ? (
                  <a
                    href={checkoutUrl}
                    className="btn-primary rounded-full w-full mt-6 text-center block"
                  >
                    Checkout
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full mt-6 py-3 px-6 bg-gray-300 text-gray-500 rounded-full font-semibold cursor-not-allowed"
                  >
                    Checkout Unavailable
                  </button>
                )}

                <Link
                  href="/shop"
                  className="block text-center text-kimchi-red hover:underline mt-4 text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
