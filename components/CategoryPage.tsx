import Link from 'next/link'
import Image from 'next/image'
import { SeoArticle } from '@/lib/db'

interface CategoryPageProps {
  title: string
  description: string
  articles: SeoArticle[]
  category: string
  accentColor?: string
}

const categoryMeta: Record<string, { emoji: string; tagline: string }> = {
  culture: { emoji: '🇰🇷', tagline: 'Discover the rich history and traditions of Korean fermentation' },
  health: { emoji: '💪', tagline: 'Science-backed benefits and nutrition facts about kimchi' },
  guides: { emoji: '📚', tagline: 'Step-by-step guides to master the art of kimchi' },
  recipes: { emoji: '👨‍🍳', tagline: 'Delicious recipes featuring our favourite fermented food' },
  buy: { emoji: '🛒', tagline: 'Where to find the best kimchi and ingredients in the UK' },
  uses: { emoji: '🍽️', tagline: 'Creative ways to use kimchi in your everyday cooking' },
}

export default function CategoryPage({ title, description, articles, category }: CategoryPageProps) {
  const meta = categoryMeta[category] || { emoji: '📖', tagline: description }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-kimchi-red rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white capitalize">{category}</span>
          </nav>

          <span className="text-6xl mb-4 block">{meta.emoji}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {meta.tagline}
          </p>
          <p className="mt-4 text-kimchi-red font-medium">
            {articles.length} articles
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image */}
                  {article.hero_image_url ? (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={article.hero_image_url}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-kimchi-red to-orange-500 flex items-center justify-center">
                      <span className="text-6xl">{meta.emoji}</span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-kimchi-red/10 text-kimchi-red text-xs font-bold rounded-full capitalize">
                        {article.cluster}
                      </span>
                      {article.published_at && (
                        <span className="text-gray-400 text-xs">
                          {new Date(article.published_at).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-kimchi-red transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h2>

                    {article.excerpt && (
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {article.excerpt}
                      </p>
                    )}

                    <div className="flex items-center text-kimchi-red font-medium text-sm">
                      Read more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">🚧</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h2>
              <p className="text-gray-600">
                We&apos;re working on adding content to this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Try Ollie&apos;s Kimchi?
          </h2>
          <p className="text-gray-600 mb-8">
            Handcrafted in London, naturally fermented, and bursting with probiotics.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 bg-kimchi-red text-white font-bold rounded-full text-lg hover:bg-red-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  )
}
