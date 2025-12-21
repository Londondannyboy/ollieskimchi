import { getSeoArticleBySlug, getRelatedSeoArticles, getSeoArticlesByCluster } from '@/lib/db'
import SeoArticlePage from '@/components/SeoArticle'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getSeoArticleBySlug(`guides/${slug}`)

  if (!article) {
    return { title: 'Guide Not Found' }
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
    const [cultureArticles, allArticles] = await Promise.all([
      getSeoArticlesByCluster('culture'),
      getSeoArticlesByCluster('pillar'),
    ])

    const guideArticles = [...cultureArticles, ...allArticles]
      .filter((a) => a.slug.startsWith('guides/'))

    return guideArticles.map((article) => ({
      slug: article.slug.replace('guides/', ''),
    }))
  } catch (error) {
    console.error('Error generating static params for guides:', error)
    return []
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const fullSlug = `guides/${slug}`

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
