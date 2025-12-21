'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  published_at: Date | null
  primary_keyword: string
  hero_image_url?: string | null
  hero_image_alt?: string | null
}

interface BlogClientProps {
  articles: Article[]
  categories: string[]
}

const categoryLabels: Record<string, string> = {
  pillar: 'Guide',
  recipes: 'Recipes',
  health: 'Health',
  commercial: 'Where to Buy',
  culture: 'Culture',
  uses: 'How to Use',
}

const categoryColors: Record<string, string> = {
  pillar: 'bg-purple-100 text-purple-700',
  recipes: 'bg-orange-100 text-orange-700',
  health: 'bg-green-100 text-green-700',
  commercial: 'bg-blue-100 text-blue-700',
  culture: 'bg-pink-100 text-pink-700',
  uses: 'bg-yellow-100 text-yellow-700',
}

export default function BlogClient({ articles, categories }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      // Category filter
      if (selectedCategory && article.category !== selectedCategory) {
        return false
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.primary_keyword.toLowerCase().includes(query)
        )
      }

      return true
    })
  }, [articles, searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            The <span className="text-kimchi-red">Kimchi</span> Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {articles.length} articles about recipes, health benefits, and everything kimchi.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 focus:border-kimchi-red focus:ring-2 focus:ring-kimchi-red/20 outline-none transition-all"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-kimchi-red text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-kimchi-red hover:text-kimchi-red'
            }`}
          >
            All ({articles.length})
          </button>
          {categories.map((category) => {
            const count = articles.filter(a => a.category === category).length
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-kimchi-red text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-kimchi-red hover:text-kimchi-red'
                }`}
              >
                {categoryLabels[category] || category} ({count})
              </button>
            )
          })}
        </div>

        {/* Results count */}
        {(searchQuery || selectedCategory) && (
          <p className="text-center text-gray-600 mb-6">
            Showing {filteredArticles.length} of {articles.length} articles
            {searchQuery && <span> matching &quot;{searchQuery}&quot;</span>}
            {selectedCategory && <span> in {categoryLabels[selectedCategory] || selectedCategory}</span>}
          </p>
        )}

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles found.</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory(null)
              }}
              className="mt-4 text-kimchi-red hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {article.hero_image_url && (
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <Image
                      src={article.hero_image_url}
                      alt={article.hero_image_alt || article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                      {categoryLabels[article.category] || article.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-kimchi-red transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 text-kimchi-red font-medium text-sm group-hover:underline">
                    Read more &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-kimchi-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Fermentation Tips in Your Inbox
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter for recipes, health tips, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-kimchi-red font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
