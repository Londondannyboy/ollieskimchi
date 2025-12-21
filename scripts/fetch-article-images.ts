import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

const UNSPLASH_ACCESS_KEY = 'c_y_xJaw-p05vjKOKC5kdiZGw21trx9DbRYjWx-9AVY'

interface UnsplashPhoto {
  id: string
  urls: {
    regular: string
    small: string
  }
  alt_description: string
  user: {
    name: string
  }
}

// Search terms by category for variety
const searchTermsByCategory: Record<string, string[]> = {
  pillar: ['kimchi korean food'],
  recipes: ['kimchi', 'korean cooking', 'fermenting vegetables', 'napa cabbage', 'korean cuisine', 'asian cooking'],
  health: ['healthy asian food', 'fermented food', 'probiotic food', 'gut health food', 'nutritious vegetables'],
  commercial: ['korean grocery', 'asian market', 'food market', 'korean supermarket'],
  culture: ['korean food culture', 'seoul food', 'traditional korean', 'korean dining'],
  uses: ['korean dishes', 'asian meal', 'rice bowl', 'korean soup', 'stir fry'],
}

async function fetchUnsplashImages(query: string, count: number): Promise<UnsplashPhoto[]> {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  )

  if (!response.ok) {
    console.error(`Unsplash API error: ${response.status}`)
    return []
  }

  const data = await response.json()
  return data.results || []
}

async function main() {
  console.log('Fetching articles from database...')

  // Get all articles grouped by cluster
  const articles = await sql`
    SELECT id, title, cluster, slug
    FROM seo_articles
    WHERE hero_image_url IS NULL OR hero_image_url = ''
    ORDER BY cluster, id
  `

  console.log(`Found ${articles.length} articles without images\n`)

  // Group articles by cluster
  const articlesByCluster: Record<string, typeof articles> = {}
  for (const article of articles) {
    if (!articlesByCluster[article.cluster]) {
      articlesByCluster[article.cluster] = []
    }
    articlesByCluster[article.cluster].push(article)
  }

  // Fetch images for each cluster
  const usedImageIds = new Set<string>()
  const updates: { id: number; imageUrl: string; imageAlt: string }[] = []

  for (const [cluster, clusterArticles] of Object.entries(articlesByCluster)) {
    console.log(`\n📁 Processing ${cluster} cluster (${clusterArticles.length} articles)...`)

    const searchTerms = searchTermsByCategory[cluster] || ['kimchi']
    const allPhotos: UnsplashPhoto[] = []

    // Fetch images from multiple search terms
    for (const term of searchTerms) {
      console.log(`  Searching: "${term}"...`)
      const photos = await fetchUnsplashImages(term, 15)
      allPhotos.push(...photos)

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    // Filter out already used images
    const availablePhotos = allPhotos.filter(p => !usedImageIds.has(p.id))
    console.log(`  Found ${availablePhotos.length} unique images`)

    // Assign images to articles
    for (let i = 0; i < clusterArticles.length; i++) {
      const article = clusterArticles[i]
      const photo = availablePhotos[i % availablePhotos.length]

      if (photo) {
        usedImageIds.add(photo.id)
        updates.push({
          id: article.id,
          imageUrl: photo.urls.regular,
          imageAlt: photo.alt_description || `${article.title} - Photo by ${photo.user.name} on Unsplash`,
        })
        console.log(`  ✓ ${article.title.substring(0, 50)}...`)
      } else {
        console.log(`  ✗ No image for: ${article.title.substring(0, 50)}...`)
      }
    }
  }

  // Update database
  console.log(`\n💾 Updating ${updates.length} articles in database...`)

  for (const update of updates) {
    await sql`
      UPDATE seo_articles
      SET hero_image_url = ${update.imageUrl},
          hero_image_alt = ${update.imageAlt},
          updated_at = NOW()
      WHERE id = ${update.id}
    `
  }

  console.log('\n✅ Done! All articles now have hero images.')

  // Summary
  const finalCount = await sql`SELECT COUNT(*) as count FROM seo_articles WHERE hero_image_url IS NOT NULL AND hero_image_url != ''`
  console.log(`\nTotal articles with images: ${finalCount[0].count}`)
}

main().catch(console.error)
