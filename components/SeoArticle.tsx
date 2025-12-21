import Link from 'next/link'
import Image from 'next/image'
import { SeoArticle } from '@/lib/db'
import { marked } from 'marked'
import RecipeCard from './RecipeCard'
import OllieSays from './OllieSays'
import FAQAccordion from './FAQAccordion'
import ComparisonTable from './ComparisonTable'
import ProductCards from './ProductCards'
import NutritionCard from './NutritionCard'
import FermentationTimeline from './FermentationTimeline'
import HistoryTimeline from './HistoryTimeline'
import StorageGuide from './StorageGuide'
import PairingSuggestions from './PairingSuggestions'
import FactCard from './FactCard'
import Sidebar from './Sidebar'

interface SeoArticlePageProps {
  article: SeoArticle
  relatedArticles?: SeoArticle[]
}

// Configure marked for better output
marked.setOptions({
  gfm: true,
  breaks: true,
})

// Convert markdown to HTML and add IDs to headings
function parseContent(content: string): string {
  // Check if content is already HTML (starts with < tag)
  const isHtml = content.trim().startsWith('<')

  let processedContent = content

  if (!isHtml) {
    // Pre-process: Convert patterns like "Day 1: Title" at start of line to h3
    processedContent = processedContent.replace(/^(Day \d+:?\s*.+)$/gm, '### $1')

    // Pre-process: Convert patterns like "Step 1:" to h4
    processedContent = processedContent.replace(/^(Step \d+:?\s*.+)$/gm, '#### $1')

    // Pre-process: Convert patterns like "Tip:" or "Note:" to blockquotes
    processedContent = processedContent.replace(/^(Tip|Note|Warning|Important|Pro Tip):\s*(.+)$/gm, '> **$1:** $2')

    // Pre-process: Convert standalone titles (short lines ending with no period, followed by longer content)
    processedContent = processedContent.replace(/^([A-Z][A-Za-z\s]{2,30})$/gm, (match, title) => {
      // Only convert if it looks like a title (starts with capital, no period, reasonable length)
      if (!title.includes('.') && title.length < 40) {
        return `### ${title}`
      }
      return match
    })
  }

  // Parse markdown to HTML
  let html = isHtml ? processedContent : marked.parse(processedContent) as string

  // Add IDs to h2 headings for TOC links
  html = html.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    return `<h2 id="${id}">${text}</h2>`
  })

  // Add IDs to h3 headings
  html = html.replace(/<h3>(.*?)<\/h3>/g, (match, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    return `<h3 id="${id}">${text}</h3>`
  })

  // Wrap tip/note blockquotes in special styling
  html = html.replace(/<blockquote>\s*<p><strong>(Tip|Note|Warning|Important|Pro Tip):<\/strong>/g,
    '<blockquote class="callout callout-$1"><p><strong>$1:</strong>')

  return html
}

// Extract headings for TOC (works with both HTML and markdown)
function extractHeadings(content: string): { id: string; text: string }[] {
  const headings: { id: string; text: string }[] = []

  // Try HTML h2 tags first
  const htmlRegex = /<h2[^>]*(?:id="([^"]*)")?[^>]*>([^<]*)<\/h2>/g
  let match

  while ((match = htmlRegex.exec(content)) !== null) {
    const id = match[1] || match[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    headings.push({ id, text: match[2] })
  }

  // If no HTML headings, try markdown ## headings
  if (headings.length === 0) {
    const mdRegex = /^## (.+)$/gm
    while ((match = mdRegex.exec(content)) !== null) {
      const text = match[1].replace(/\*\*/g, '') // Remove bold markers
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      headings.push({ id, text })
    }
  }

  return headings
}

export default function SeoArticlePage({ article, relatedArticles = [] }: SeoArticlePageProps) {
  const parsedContent = parseContent(article.content)
  const headings = extractHeadings(article.content)

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Main Content */}
          <article className="lg:col-span-8">
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
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-kimchi-red text-white text-sm font-bold rounded-full capitalize">
              {article.cluster}
            </span>
            {article.published_at && (
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(article.published_at).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed border-l-4 border-kimchi-red pl-6">
              {article.excerpt}
            </p>
          )}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Assets/Ollie Photo.png"
                alt="Ollie"
                width={48}
                height={48}
                className="rounded-full border-2 border-kimchi-red"
              />
              <div>
                <p className="font-medium text-gray-900">{article.author}</p>
                <p className="text-xs text-kimchi-red font-medium">Kimchi Obsessive</p>
              </div>
            </div>
          </div>
        </header>

        {/* Ollie's Welcome */}
        <OllieSays variant="story">
          <p>
            Welcome to another deep dive into the world of kimchi! I&apos;ve spent years experimenting,
            tasting, and perfecting my craft. Let me share what I&apos;ve learned with you.
          </p>
        </OllieSays>

        {/* Recipe Card - MOVED UP: Display prominently right after header */}
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
            slug={article.slug}
          />
        )}

        {/* Table of Contents - auto-generated from headings */}
        {headings.length >= 3 && (
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
        )}

        {/* Content - Rich styling with visual hierarchy */}
        <div
          className="article-content prose prose-xl prose-gray max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b-2 prose-h1:border-kimchi-red
            prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-6 prose-h2:scroll-mt-20 prose-h2:text-kimchi-red
            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
            prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:font-semibold
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
            prose-a:text-kimchi-red prose-a:font-semibold prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-red-700
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-em:text-gray-800 prose-em:italic
            prose-ul:my-6 prose-ul:pl-6
            prose-ol:my-6 prose-ol:pl-6
            prose-li:text-gray-700 prose-li:text-lg prose-li:mb-3 prose-li:leading-relaxed
            prose-blockquote:border-l-4 prose-blockquote:border-kimchi-red prose-blockquote:bg-red-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-gray-700
            prose-table:my-8 prose-table:rounded-xl prose-table:overflow-hidden
            prose-th:bg-kimchi-red prose-th:text-white prose-th:px-6 prose-th:py-4 prose-th:text-left prose-th:font-bold
            prose-td:px-6 prose-td:py-4 prose-td:border-t prose-td:border-gray-200
            prose-tr:even:bg-gray-50
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
            prose-hr:my-12 prose-hr:border-gray-200
            prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-kimchi-red prose-code:font-mono
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6"
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />

        {/* Nutrition Facts Card */}
        {article.nutrition_data && (
          <NutritionCard nutrition={article.nutrition_data} />
        )}

        {/* FAQ Accordion */}
        {article.faq_data && article.faq_data.length > 0 && (
          <FAQAccordion faqs={article.faq_data} />
        )}

        {/* Comparison Table */}
        {article.comparison_data && (
          <ComparisonTable data={article.comparison_data} />
        )}

        {/* Timeline - Fermentation or History */}
        {article.timeline_data && article.timeline_data.type === 'fermentation' && (
          <FermentationTimeline data={article.timeline_data} />
        )}
        {article.timeline_data && article.timeline_data.type === 'history' && (
          <HistoryTimeline data={article.timeline_data} />
        )}

        {/* Product Cards */}
        {article.products_data && article.products_data.length > 0 && (
          <ProductCards products={article.products_data} />
        )}

        {/* Storage Guide */}
        {article.storage_data && (
          <StorageGuide storage={article.storage_data} />
        )}

        {/* Pairing Suggestions */}
        {article.pairings_data && article.pairings_data.length > 0 && (
          <PairingSuggestions pairings={article.pairings_data} />
        )}

        {/* Did You Know Facts */}
        {article.facts_data && article.facts_data.length > 0 && (
          <FactCard facts={article.facts_data} />
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

          {/* Sticky Sidebar - Desktop only */}
          <Sidebar
            relatedArticles={relatedArticles}
            showProduct={true}
            className="lg:col-span-4"
          />
        </div>
      </div>

      {/* Related Articles - Bottom section with images */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              More to Explore
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/${related.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    {related.hero_image_url ? (
                      <Image
                        src={related.hero_image_url}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-kimchi-red/20 to-red-100 flex items-center justify-center">
                        <svg className="w-16 h-16 text-kimchi-red/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-kimchi-red text-white text-xs font-bold rounded-full capitalize">
                        {related.cluster}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 group-hover:text-kimchi-red transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-kimchi-red font-medium text-sm">
                      Read more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
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
