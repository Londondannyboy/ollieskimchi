import { getSeoArticleBySlug, getRelatedSeoArticles, getSeoArticlesByCluster } from '@/lib/db'
import SeoArticlePage from '@/components/SeoArticle'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getSeoArticleBySlug(`recipes/${slug}`)

  if (!article) {
    return { title: 'Recipe Not Found' }
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

export async function generateStaticParams() {
  try {
    const articles = await getSeoArticlesByCluster('recipes')
    return articles.map((article) => ({
      slug: article.slug.replace('recipes/', ''),
    }))
  } catch (error) {
    console.error('Error generating static params for recipes:', error)
    return []
  }
}

// Use dynamic rendering to avoid build-time database timeouts
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function RecipePage({ params }: Props) {
  const { slug } = await params
  const fullSlug = `recipes/${slug}`

  const [article, relatedArticles] = await Promise.all([
    getSeoArticleBySlug(fullSlug),
    getRelatedSeoArticles(fullSlug, 3),
  ])

  if (!article) {
    notFound()
  }

  return (
    <>
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
