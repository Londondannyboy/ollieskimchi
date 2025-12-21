import { getSeoArticlesByCluster } from '@/lib/db'
import CategoryPage from '@/components/CategoryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use Kimchi | Ollie\'s Kimchi',
  description: 'Creative ways to use kimchi in your cooking. From breakfast to dinner, discover endless possibilities.',
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function UsesPage() {
  const articles = await getSeoArticlesByCluster('uses')

  return (
    <CategoryPage
      title="Using Kimchi"
      description="Creative ways to enjoy kimchi"
      articles={articles}
      category="uses"
    />
  )
}
