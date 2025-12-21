import { getSeoArticlesByCluster } from '@/lib/db'
import CategoryPage from '@/components/CategoryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Where to Buy Kimchi in the UK | Ollie\'s Kimchi',
  description: 'Find the best kimchi and Korean ingredients in the UK. Reviews, guides, and recommendations.',
}

export const revalidate = 3600

export default async function BuyPage() {
  const articles = await getSeoArticlesByCluster('commercial')

  return (
    <CategoryPage
      title="Buying Guides"
      description="Where to find the best kimchi and ingredients"
      articles={articles}
      category="buy"
    />
  )
}
