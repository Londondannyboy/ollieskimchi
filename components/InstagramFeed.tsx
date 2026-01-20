'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

interface InstagramPost {
  id: string
  image: string
  caption?: string
}

interface InstagramFeedProps {
  posts?: InstagramPost[]
  // For third-party embeds (Behold, Elfsight, etc.)
  embedId?: string
  embedProvider?: 'behold' | 'elfsight' | 'curator' | 'mirror'
}

// Default posts using existing product images as placeholders
const defaultPosts: InstagramPost[] = [
  { id: '1', image: '/Assets/Kimchi_B004_23-04-25.jpg', caption: 'Fresh batch ready!' },
  { id: '2', image: '/Assets/Kimchi_B006_30-11-20.jpg', caption: 'That crunch though' },
  { id: '3', image: '/Product Images/Ollies Kimchi - Kimchi Product 3 Pack.png', caption: '3 pack perfection' },
  { id: '4', image: '/Assets/Kimchi_B012_24-04-21.jpg', caption: 'Making magic' },
  { id: '5', image: '/Ollies Kimchi 6 units product shot.png', caption: 'Stocked up!' },
  { id: '6', image: '/Assets/Kimchi_B014_02-04-21.jpg', caption: 'Fermentation vibes' },
]

export default function InstagramFeed({
  posts = defaultPosts,
  embedId,
  embedProvider = 'behold'
}: InstagramFeedProps) {
  // Load third-party embed script if embedId is provided
  useEffect(() => {
    if (!embedId) return

    let script: HTMLScriptElement | null = null

    if (embedProvider === 'behold') {
      // Behold.so embed
      script = document.createElement('script')
      script.src = 'https://w.behold.so/widget.js'
      script.async = true
      script.type = 'module'
      document.body.appendChild(script)
    } else if (embedProvider === 'elfsight') {
      // Elfsight embed
      script = document.createElement('script')
      script.src = 'https://static.elfsight.com/platform/platform.js'
      script.async = true
      document.body.appendChild(script)
    } else if (embedProvider === 'curator') {
      // Curator.io embed
      script = document.createElement('script')
      script.src = `https://cdn.curator.io/published/${embedId}.js`
      script.async = true
      document.body.appendChild(script)
    } else if (embedProvider === 'mirror') {
      // Mirror App embed
      script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/@mirrorapp/iframe-bridge@latest/dist/index.umd.js'
      script.async = true
      document.body.appendChild(script)

      // Setup iframe resize function
      ;(window as unknown as Record<string, unknown>).iFrameSetup = (iframe: HTMLIFrameElement) => {
        if ((window as unknown as Record<string, { setup?: (el: HTMLIFrameElement) => void }>).iframeBridge?.setup) {
          (window as unknown as Record<string, { setup: (el: HTMLIFrameElement) => void }>).iframeBridge.setup(iframe)
        }
      }
    }

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [embedId, embedProvider])
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-pink-500 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-500 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            {/* Instagram icon */}
            <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className="text-white font-bold text-xl">@ollieskimchi</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Follow the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">Fermentation</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Behind the scenes, recipes, tips, and kimchi adventures. Join the community!
          </p>
        </div>

        {/* Instagram Feed - Third-party embed or placeholder grid */}
        <div className="mb-10">
          {embedId ? (
            // Third-party embed container
            <div className="instagram-embed-container">
              {embedProvider === 'behold' && (
                <div data-behold-id={embedId}></div>
              )}
              {embedProvider === 'elfsight' && (
                <div className={`elfsight-app-${embedId}`}></div>
              )}
              {embedProvider === 'curator' && (
                <div id={`curator-feed-${embedId}`}>
                  <a href="https://curator.io" target="_blank" rel="noopener noreferrer" className="crt-logo crt-tag">Powered by Curator.io</a>
                </div>
              )}
              {embedProvider === 'mirror' && (
                <iframe
                  src={`https://app.mirror-app.com/feed-instagram/${embedId}/preview`}
                  style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '400px' }}
                  scrolling="no"
                  title="Instagram Feed"
                  onLoad={(e) => {
                    const iframe = e.target as HTMLIFrameElement
                    if ((window as unknown as Record<string, { setup?: (el: HTMLIFrameElement) => void }>).iframeBridge?.setup) {
                      (window as unknown as Record<string, { setup: (el: HTMLIFrameElement) => void }>).iframeBridge.setup(iframe)
                    }
                  }}
                />
              )}
            </div>
          ) : (
            // Placeholder grid when no embed is configured
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {posts.map((post, idx) => (
                <Link
                  key={post.id}
                  href="https://www.instagram.com/ollieskimchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Image
                    src={post.image}
                    alt={post.caption || 'Instagram post'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-white text-sm font-medium line-clamp-2">{post.caption}</p>
                  </div>
                  {/* Instagram icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://www.instagram.com/ollieskimchi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @ollieskimchi
          </Link>
        </div>
      </div>
    </section>
  )
}
