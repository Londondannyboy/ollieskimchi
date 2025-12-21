import { getSeoArticlesByCluster } from '@/lib/db'
import CategoryPage from '@/components/CategoryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kimchi Culture & History | Ollie\'s Kimchi',
  description: 'Explore the rich history, traditions, and cultural significance of kimchi in Korean cuisine and beyond.',
}

export const revalidate = 3600

export default async function CulturePage() {
  const articles = await getSeoArticlesByCluster('culture')

  return (
    <CategoryPage
      title="Kimchi Culture"
      description="Explore the rich history and traditions"
      articles={articles}
      category="culture"
    />
  )
}
