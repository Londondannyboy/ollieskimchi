import { getSeoArticleBySlug, getRelatedSeoArticles, getSeoArticlesByCluster } from '@/lib/db'
import SeoArticlePage from '@/components/SeoArticle'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getSeoArticleBySlug(`uses/${slug}`)

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

export async function generateStaticParams() {
  const articles = await getSeoArticlesByCluster('uses')
  return articles.map((article) => ({
    slug: article.slug.replace('uses/', ''),
  }))
}

export const revalidate = 3600

export default async function UsesPage({ params }: Props) {
  const { slug } = await params
  const fullSlug = `uses/${slug}`

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
