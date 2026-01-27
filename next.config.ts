import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect Shopify checkout URLs to Shopify domain
      {
        source: '/cart/c/:path*',
        destination: 'https://izmiad-nu.myshopify.com/cart/c/:path*',
        permanent: false,
      },
      {
        source: '/checkouts/:path*',
        destination: 'https://izmiad-nu.myshopify.com/checkouts/:path*',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
