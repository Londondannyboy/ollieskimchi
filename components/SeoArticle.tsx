import Link from 'next/link'
import Image from 'next/image'
import { SeoArticle } from '@/lib/db'
import RecipeCard from './RecipeCard'

interface SeoArticlePageProps {
  article: SeoArticle
  relatedArticles?: SeoArticle[]
}

export default function SeoArticlePage({ article, relatedArticles = [] }: SeoArticlePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      {article.hero_image_url && (
        <div className="relative h-[40vh] md:h-[50vh] bg-gray-900">
          <Image
            src={article.hero_image_url}
            alt={article.hero_image_alt || article.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        </div>
      )}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-kimchi-red">Home</Link>
          <span className="mx-2">/</span>
          {article.cluster !== 'pillar' && (
            <>
              <Link
                href={`/${article.cluster === 'recipes' ? 'recipes' : article.cluster}`}
                className="hover:text-kimchi-red capitalize"
              >
                {article.cluster}
              </Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-gray-900 truncate">{article.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-kimchi-red/10 text-kimchi-red text-sm font-medium rounded-full capitalize">
              {article.cluster}
            </span>
            {article.published_at && (
              <span className="text-gray-500 text-sm">
                {new Date(article.published_at).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            )}
            <span className="text-gray-400 text-sm">
              {article.word_count?.toLocaleString()} words
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>
          )}
          <div className="mt-4 text-sm text-gray-500">
            By <span className="text-gray-900 font-medium">{article.author}</span>
          </div>
        </header>

        {/* Table of Contents - auto-generated from H2s */}
        <TableOfContents content={article.content} />

        {/* Content */}
        <div
          className="prose prose-lg prose-gray max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:scroll-mt-20
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-kimchi-red prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
            prose-ul:my-4 prose-li:text-gray-700
            prose-ol:my-4
            prose-table:my-6
            prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2 prose-th:text-left
            prose-td:px-4 prose-td:py-2 prose-td:border-t
            prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Recipe Card - displayed when recipe data is available */}
        {article.recipe_data && (
          <RecipeCard
            title={article.recipe_data.title}
            description={article.recipe_data.description}
            prepTime={article.recipe_data.prepTime}
            cookTime={article.recipe_data.cookTime}
            totalTime={article.recipe_data.totalTime}
            servings={article.recipe_data.servings}
            difficulty={article.recipe_data.difficulty}
            ingredients={article.recipe_data.ingredients}
            method={article.recipe_data.method}
            chefNotes={article.recipe_data.chefNotes}
            tags={article.recipe_data.tags}
          />
        )}

        {/* Keywords/Tags */}
        {article.secondary_keywords && article.secondary_keywords.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Related topics:</p>
            <div className="flex flex-wrap gap-2">
              {article.secondary_keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {keyword}
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
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://ollieskimchi.co.uk/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-kimchi-red transition-colors"
              aria-label="Share on Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://ollieskimchi.co.uk/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-kimchi-red transition-colors"
              aria-label="Share on Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://ollieskimchi.co.uk/${article.slug}`)}&title=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-kimchi-red transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/${related.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-xs text-kimchi-red font-medium capitalize">
                    {related.cluster}
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-kimchi-red transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-kimchi-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Try Authentic Kimchi?
          </h2>
          <p className="text-white/90 mb-8">
            Handcrafted in the UK, naturally fermented, and bursting with probiotics.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-kimchi-red font-semibold rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  )
}

// Table of Contents component
function TableOfContents({ content }: { content: string }) {
  // Extract H2 headings from content
  const h2Regex = /<h2[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h2>/g
  const headings: { id: string; text: string }[] = []
  let match

  while ((match = h2Regex.exec(content)) !== null) {
    headings.push({ id: match[1], text: match[2] })
  }

  if (headings.length < 3) return null

  return (
    <nav className="mb-12 p-6 bg-gray-50 rounded-xl">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">In this article</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-gray-600 hover:text-kimchi-red transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
