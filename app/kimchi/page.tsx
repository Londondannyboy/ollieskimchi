import { getSeoArticleBySlug, getRelatedSeoArticles } from '@/lib/db'
import SeoArticlePage from '@/components/SeoArticle'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const article = await getSeoArticleBySlug('kimchi')

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: article.meta_title,
    description: article.meta_description,
    keywords: [article.primary_keyword, ...(article.secondary_keywords || [])].join(', '),
    openGraph: {
      title: article.meta_title,
      description: article.meta_description,
      type: 'article',
      url: `https://ollieskimchi.co.uk/${article.slug}`,
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function KimchiPage() {
  const [article, relatedArticles] = await Promise.all([
    getSeoArticleBySlug('kimchi'),
    getRelatedSeoArticles('kimchi', 3),
  ])

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      {article.schema_json && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article.schema_json) }}
        />
      )}
      <SeoArticlePage article={article} relatedArticles={relatedArticles} />
    </>
  )
}
