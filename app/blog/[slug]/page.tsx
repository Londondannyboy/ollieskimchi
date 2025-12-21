import { getArticleBySlug, getPublishedArticles, getRecentArticles } from '@/lib/db'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: `${article.title} | Ollie's Kimchi Blog`,
    description: article.excerpt,
  }
}

export async function generateStaticParams() {
  const articles = await getPublishedArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const revalidate = 60

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const [article, recentArticles] = await Promise.all([
    getArticleBySlug(slug),
    getRecentArticles(3),
  ])

  if (!article) {
    notFound()
  }

  const otherArticles = recentArticles.filter((a) => a.slug !== slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      {article.featured_image && (
        <div className="relative h-[40vh] md:h-[50vh] bg-gray-900">
          <Image
            src={article.featured_image}
            alt={article.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-red-900">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 truncate">{article.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-red-900/10 text-red-900 text-sm font-medium rounded-full">
              {article.category}
            </span>
            {article.published_at && (
              <span className="text-gray-500">
                {new Date(article.published_at).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            {article.excerpt}
          </p>
          <div className="mt-4 text-sm text-gray-500">
            By <span className="text-gray-900 font-medium">{article.author}</span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg prose-gray max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-red-900 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
            prose-ul:my-4 prose-li:text-gray-700
            prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-700 font-medium mb-4">Share this article:</p>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://ollieskimchi.co.uk/blog/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-900 transition-colors"
              aria-label="Share on Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://ollieskimchi.co.uk/blog/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-900 transition-colors"
              aria-label="Share on Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {otherArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              More from the Blog
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {otherArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  {related.featured_image && (
                    <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={related.featured_image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <span className="text-xs text-red-900 font-medium">
                      {related.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-900 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="text-red-900 font-medium hover:underline"
              >
                View all articles &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-red-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Try the Best Kimchi in London?
          </h2>
          <p className="text-white/90 mb-8">
            Handcrafted, naturally fermented, and bursting with probiotics.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-900 font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  )
}
