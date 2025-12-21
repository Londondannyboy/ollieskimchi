import { getSeoArticlesByCluster } from '@/lib/db'
import CategoryPage from '@/components/CategoryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kimchi Recipes | Ollie\'s Kimchi',
  description: 'Delicious kimchi recipes from traditional Korean classics to modern fusion dishes. Make your own or cook with kimchi.',
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function RecipesPage() {
  const articles = await getSeoArticlesByCluster('recipes')

  return (
    <CategoryPage
      title="Kimchi Recipes"
      description="Delicious recipes for every occasion"
      articles={articles}
      category="recipes"
    />
  )
}
