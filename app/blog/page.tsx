import { getSeoArticles } from '@/lib/db'
import BlogClient from './BlogClient'

export const metadata = {
  title: "Blog | Ollie's Kimchi",
  description: "Discover recipes, health tips, and everything you need to know about kimchi and fermented foods.",
}

export const revalidate = 60

export default async function BlogPage() {
  const articles = await getSeoArticles()

  // Transform SEO articles for the blog display
  const blogArticles = articles.map(article => ({
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt || article.meta_description,
    category: article.cluster,
    published_at: article.published_at,
    word_count: article.word_count,
    primary_keyword: article.primary_keyword,
    hero_image_url: article.hero_image_url,
    hero_image_alt: article.hero_image_alt,
  }))

  // Get unique categories
  const categories = [...new Set(articles.map(a => a.cluster))].sort()

  return <BlogClient articles={blogArticles} categories={categories} />
}
