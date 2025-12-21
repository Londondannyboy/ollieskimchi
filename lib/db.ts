import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

export const sql = neon(DATABASE_URL)

// Blog article type
export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  featured_image?: string
  author: string
  category: string
  tags: string[]
  published: boolean
  published_at: Date | null
  created_at: Date
  updated_at: Date
}

// Get all published articles
export async function getPublishedArticles(): Promise<Article[]> {
  const articles = await sql`
    SELECT * FROM articles
    WHERE published = true
    ORDER BY published_at DESC
  `
  return articles as Article[]
}

// Get article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await sql`
    SELECT * FROM articles
    WHERE slug = ${slug} AND published = true
    LIMIT 1
  `
  return (articles[0] as Article) || null
}

// Get articles by category
export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const articles = await sql`
    SELECT * FROM articles
    WHERE category = ${category} AND published = true
    ORDER BY published_at DESC
  `
  return articles as Article[]
}

// Get recent articles
export async function getRecentArticles(limit: number = 3): Promise<Article[]> {
  const articles = await sql`
    SELECT * FROM articles
    WHERE published = true
    ORDER BY published_at DESC
    LIMIT ${limit}
  `
  return articles as Article[]
}

// Get all categories
export async function getCategories(): Promise<string[]> {
  const result = await sql`
    SELECT DISTINCT category FROM articles
    WHERE published = true
    ORDER BY category
  `
  return result.map((r) => r.category as string)
}

// ============================================
// SEO Articles (Content Marketing)
// ============================================

export interface SeoArticle {
  id: number
  article_id: string
  title: string
  slug: string
  meta_title: string
  meta_description: string
  primary_keyword: string
  secondary_keywords: string[]
  search_volume: number
  word_count: number
  content: string
  excerpt: string
  hero_image_url?: string
  hero_image_alt?: string
  schema_type: string
  schema_json?: object
  cluster: string
  phase: number
  status: string
  author: string
  internal_links: string[]
  created_at: Date
  updated_at: Date
  published_at: Date | null
}

// Get all published SEO articles
export async function getSeoArticles(): Promise<SeoArticle[]> {
  const articles = await sql`
    SELECT * FROM seo_articles
    WHERE status = 'published'
    ORDER BY phase, article_id
  `
  return articles as SeoArticle[]
}

// Get SEO article by slug
export async function getSeoArticleBySlug(slug: string): Promise<SeoArticle | null> {
  const articles = await sql`
    SELECT * FROM seo_articles
    WHERE slug = ${slug} AND status = 'published'
    LIMIT 1
  `
  return (articles[0] as SeoArticle) || null
}

// Get SEO articles by cluster
export async function getSeoArticlesByCluster(cluster: string): Promise<SeoArticle[]> {
  const articles = await sql`
    SELECT * FROM seo_articles
    WHERE cluster = ${cluster} AND status = 'published'
    ORDER BY search_volume DESC
  `
  return articles as SeoArticle[]
}

// Get related SEO articles (by internal links)
export async function getRelatedSeoArticles(currentSlug: string, limit: number = 3): Promise<SeoArticle[]> {
  const current = await getSeoArticleBySlug(currentSlug)
  if (!current || !current.internal_links?.length) {
    return []
  }

  const articles = await sql`
    SELECT * FROM seo_articles
    WHERE slug = ANY(${current.internal_links})
    AND status = 'published'
    LIMIT ${limit}
  `
  return articles as SeoArticle[]
}

// Get all SEO article slugs (for static generation)
export async function getAllSeoArticleSlugs(): Promise<string[]> {
  const result = await sql`
    SELECT slug FROM seo_articles
    WHERE status = 'published'
  `
  return result.map((r) => r.slug as string)
}
