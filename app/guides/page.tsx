import { getSeoArticlesByCluster } from '@/lib/db'
import CategoryPage from '@/components/CategoryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kimchi Guides & Tutorials | Ollie\'s Kimchi',
  description: 'Step-by-step guides to making, storing, and enjoying kimchi. From beginner basics to advanced techniques.',
}

export const revalidate = 3600

export default async function GuidesPage() {
  // Guides might be in 'culture' cluster with guides/ prefix, or their own cluster
  const [cultureArticles, pillarArticles] = await Promise.all([
    getSeoArticlesByCluster('culture'),
    getSeoArticlesByCluster('pillar'),
  ])

  // Filter for guides
  const guideArticles = [...cultureArticles, ...pillarArticles]
    .filter(a => a.slug.startsWith('guides/'))

  return (
    <CategoryPage
      title="Kimchi Guides"
      description="Master the art of kimchi"
      articles={guideArticles}
      category="guides"
    />
  )
}
