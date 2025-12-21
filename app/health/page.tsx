import { getSeoArticlesByCluster } from '@/lib/db'
import CategoryPage from '@/components/CategoryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kimchi Health Benefits | Ollie\'s Kimchi',
  description: 'Discover the science-backed health benefits of kimchi, from probiotics and gut health to nutrition facts.',
}

export const revalidate = 3600

export default async function HealthPage() {
  const articles = await getSeoArticlesByCluster('health')

  return (
    <CategoryPage
      title="Health & Nutrition"
      description="Science-backed benefits of kimchi"
      articles={articles}
      category="health"
    />
  )
}
