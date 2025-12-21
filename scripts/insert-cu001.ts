/**
 * Insert CU-001: What is Kimchi? Complete Beginner's Guide
 * Run with: DATABASE_URL="..." npx tsx scripts/insert-cu001.ts
 */

import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set')
  process.exit(1)
}

const sql = neon(DATABASE_URL)

const article = {
  article_id: 'CU-001',
  title: 'What is Kimchi? A Complete Beginner\'s Guide to Korean Fermented Vegetables',
  slug: 'guides/what-is-kimchi',
  meta_title: 'What is Kimchi? Beginner\'s Guide to Korean Fermented Food',
  meta_description: 'New to kimchi? Learn what it is, how it tastes, what it\'s made of, and why millions love this Korean fermented food. Your complete beginner\'s guide.',
  primary_keyword: 'what is kimchi',
  secondary_keywords: ['kimchi meaning', 'what does kimchi taste like', 'kimchi pronunciation', 'is kimchi spicy', 'kimchi ingredients'],
  search_volume: 2900,
  excerpt: 'Everything beginners need to know about kimchi - Korea\'s famous fermented vegetable dish. What it is, how it tastes, and why you should try it.',
  hero_image_alt: 'Traditional Korean kimchi in a white bowl',
  schema_type: 'article',
  cluster: 'culture',
  phase: 1,
  internal_links: ['kimchi', 'kimchi-benefits', 'traditional-kimchi-recipe', 'types-of-kimchi', 'best-kimchi-uk'],
  content: `
<p>You've probably seen it on restaurant menus, spotted it in your local supermarket, or heard friends raving about its health benefits. But <strong>what exactly is kimchi</strong>?</p>

<p>Kimchi (pronounced kim-chee) is Korea's most famous culinary export - a fermented vegetable dish that's been a cornerstone of Korean cuisine for over 2,000 years. In this beginner's guide, we'll cover everything you need to know about this remarkable food.</p>

<h2 id="definition">What is Kimchi?</h2>

<p>At its core, <a href="/kimchi/">kimchi</a> is <strong>fermented vegetables</strong> seasoned with a spicy paste. While there are hundreds of varieties, the most common type is made from:</p>

<ul>
<li><strong>Napa cabbage</strong> (also called Chinese cabbage)</li>
<li><strong>Korean red pepper flakes</strong> (gochugaru)</li>
<li><strong>Garlic and ginger</strong></li>
<li><strong>Fish sauce or salted shrimp</strong> (for umami)</li>
<li><strong>Salt</strong></li>
</ul>

<p>The vegetables are salted, coated in a flavourful paste, then left to ferment for days, weeks, or even months. This fermentation process gives kimchi its characteristic tangy flavour and creates beneficial bacteria called probiotics.</p>

<h2 id="pronunciation">How to Pronounce Kimchi</h2>

<p>Kimchi is pronounced <strong>kim-chee</strong>.</p>

<p>The "i" sounds like "ee" in "cheese." Some people mistakenly say "kim-chye" but this is incorrect.</p>

<p>In Korean, it's written as 김치 (gimchi), though in English it's universally spelled "kimchi."</p>

<h2 id="taste">What Does Kimchi Taste Like?</h2>

<p>Kimchi has a unique, complex flavour that's hard to compare to Western foods. Here's what to expect:</p>

<ul>
<li><strong>Sour:</strong> The fermentation creates lactic acid, giving kimchi a pleasant tanginess similar to sauerkraut or pickles</li>
<li><strong>Spicy:</strong> Most kimchi has a moderate to hot chilli kick from the gochugaru</li>
<li><strong>Umami:</strong> Fish sauce and fermentation create deep, savoury flavours</li>
<li><strong>Garlicky:</strong> Garlic is a key ingredient and comes through clearly</li>
<li><strong>Fresh/Crunchy:</strong> When young, the vegetables retain satisfying crunch</li>
</ul>

<h3>How the taste changes over time:</h3>

<ul>
<li><strong>Fresh (1-7 days):</strong> Crunchy, mildly tangy, vibrant</li>
<li><strong>Ripe (2-4 weeks):</strong> More sour, softer, deeper flavour</li>
<li><strong>Aged (1+ months):</strong> Very sour, soft, best for cooking</li>
</ul>

<p>Most people find that kimchi is an acquired taste - the first bite might be surprising, but many become absolutely hooked!</p>

<h2 id="spicy">Is Kimchi Spicy?</h2>

<p><strong>Classic kimchi is moderately spicy</strong>, but heat levels vary significantly:</p>

<ul>
<li><strong>Most commercial kimchi:</strong> Mild to medium heat (accessible to most palates)</li>
<li><strong>Traditional Korean kimchi:</strong> Medium to hot (more authentic heat)</li>
<li><strong>White kimchi (baek kimchi):</strong> No heat at all (made without chilli)</li>
</ul>

<p>If you're sensitive to spice, look for "mild" versions or try <a href="/recipes/white-kimchi/">white kimchi</a>. If you love heat, seek out traditional Korean brands or make your own with extra gochugaru.</p>

<h2 id="ingredients">What's in Kimchi? Key Ingredients</h2>

<h3>The Vegetables</h3>

<p><strong>Napa cabbage</strong> is the star of most kimchi. Also known as Chinese cabbage, it has long, pale green leaves and a mild flavour that absorbs seasonings beautifully.</p>

<p>Other vegetables used in different <a href="/culture/types-of-kimchi/">types of kimchi</a> include:</p>
<ul>
<li>Korean radish (mu)</li>
<li>Cucumbers</li>
<li>Spring onions</li>
<li>Mustard greens</li>
</ul>

<h3>The Seasonings</h3>

<p><strong>Gochugaru (Korean red pepper flakes)</strong> gives kimchi its signature colour and heat. It's different from other chilli flakes - slightly sweet and smoky with moderate heat.</p>

<p><strong>Garlic and ginger</strong> provide aromatic depth. Korean recipes use significantly more garlic than most Western dishes.</p>

<p><strong>Fish sauce or fermented shrimp paste</strong> adds umami (savoury depth). This is why traditional kimchi isn't vegan, though <a href="/recipes/vegan-kimchi/">vegan versions</a> exist.</p>

<h3>The Science: Fermentation</h3>

<p>The magic happens during fermentation. Natural bacteria on the vegetables (primarily <em>Lactobacillus</em> species) convert sugars into lactic acid. This:</p>

<ul>
<li>Preserves the vegetables naturally</li>
<li>Creates the tangy flavour</li>
<li>Produces beneficial probiotics</li>
<li>Develops complex umami flavours</li>
</ul>

<h2 id="healthy">Is Kimchi Healthy?</h2>

<p><strong>Yes! Kimchi is considered a superfood</strong> with numerous <a href="/health/kimchi-benefits/">science-backed health benefits</a>:</p>

<ul>
<li><strong>Probiotics:</strong> Unpasteurised kimchi contains billions of beneficial bacteria that support gut health</li>
<li><strong>Low calorie:</strong> Just 15 calories per 100g</li>
<li><strong>High in vitamins:</strong> Rich in vitamins A, C, K, and B vitamins</li>
<li><strong>Anti-inflammatory:</strong> Contains compounds that reduce inflammation</li>
<li><strong>Good for digestion:</strong> Fibre and probiotics support digestive health</li>
</ul>

<p>The main consideration is sodium - kimchi is salty, so those monitoring salt intake should enjoy it in moderation.</p>

<h2 id="vegan">Is Kimchi Vegan?</h2>

<p><strong>Traditional kimchi is not vegan</strong> because it contains fish sauce or fermented shrimp paste.</p>

<p>However, vegan kimchi is widely available and easy to make at home. Simply substitute the seafood with:</p>
<ul>
<li>Korean soup soy sauce (gukganjang)</li>
<li>White miso paste</li>
<li>Extra salt</li>
</ul>

<p>When buying, check labels carefully - even "vegetarian" kimchi may contain fish sauce. Look specifically for "vegan" certification.</p>

<h2 id="how-made">How is Kimchi Made?</h2>

<p>Making kimchi is a multi-step process:</p>

<ol>
<li><strong>Salting:</strong> Cabbage is salted for 6-12 hours to draw out moisture and wilt the leaves</li>
<li><strong>Rinsing:</strong> Excess salt is rinsed away</li>
<li><strong>Paste making:</strong> Gochugaru, garlic, ginger, and fish sauce are combined</li>
<li><strong>Mixing:</strong> The paste is worked into every cabbage leaf by hand</li>
<li><strong>Fermenting:</strong> Kimchi is packed into jars and left to ferment at room temperature for 1-5 days</li>
<li><strong>Storing:</strong> Once fermented to taste, it's refrigerated</li>
</ol>

<p>Want to try? See our <a href="/recipes/traditional-kimchi-recipe/">step-by-step kimchi recipe</a>.</p>

<h2 id="how-to-eat">How Do You Eat Kimchi?</h2>

<p>Koreans eat kimchi with virtually every meal. Here are the most popular ways to enjoy it:</p>

<h3>As a Side Dish</h3>
<p>The traditional way - simply serve a small bowl alongside any meal. It pairs brilliantly with rice, noodles, or protein.</p>

<h3>In Cooked Dishes</h3>
<ul>
<li><a href="/recipes/kimchi-fried-rice/">Kimchi fried rice</a> - the classic way to use aged kimchi</li>
<li><a href="/recipes/kimchi-jjigae/">Kimchi stew</a> (jjigae) - hearty and warming</li>
<li><a href="/recipes/kimchi-pancakes/">Kimchi pancakes</a> - crispy and flavourful</li>
<li>Soups and noodle dishes</li>
</ul>

<h3>Fusion Style</h3>
<ul>
<li><a href="/recipes/kimchi-grilled-cheese/">Kimchi grilled cheese</a></li>
<li>On burgers and hot dogs</li>
<li>In tacos and quesadillas</li>
<li>Mixed into eggs</li>
</ul>

<h2 id="where-to-buy">Where Can I Buy Kimchi?</h2>

<p>Kimchi is now widely available in the UK:</p>

<ul>
<li><strong>Supermarkets:</strong> Tesco, Sainsbury's, Waitrose, M&S - usually in the Asian foods aisle</li>
<li><strong>Korean supermarkets:</strong> H Mart, Oseyo, SeeWoo - best selection and quality</li>
<li><strong>Online:</strong> Amazon, specialty food sites, artisan producers</li>
<li><strong>Our shop:</strong> <a href="/shop/">Ollie's Kimchi</a> - fresh, unpasteurised, UK-made</li>
</ul>

<p>For detailed recommendations, see our <a href="/buy/best-kimchi-uk/">complete UK kimchi buying guide</a>.</p>

<h2 id="storage">How Long Does Kimchi Last?</h2>

<p>One of the beautiful things about kimchi is its longevity:</p>

<ul>
<li><strong>Unopened (refrigerated):</strong> Until the best-by date</li>
<li><strong>Opened:</strong> 3-6 months in the refrigerator</li>
<li><strong>At room temperature:</strong> 1-2 weeks (continues fermenting quickly)</li>
</ul>

<p>Kimchi doesn't really "go bad" - it just becomes more sour over time. Very aged kimchi is perfect for cooking. Only discard if you see mould or it smells unpleasantly "off" rather than simply sour.</p>

<h2 id="history">Brief History of Kimchi</h2>

<p>Kimchi has a fascinating <a href="/culture/history-of-kimchi/">2,000+ year history</a>:</p>

<ul>
<li><strong>Ancient times:</strong> Koreans preserved vegetables in salt for winter</li>
<li><strong>12th century:</strong> Spices like garlic and ginger were added</li>
<li><strong>16th century:</strong> Chilli peppers arrived in Korea via Portugal</li>
<li><strong>18th century:</strong> Red pepper became standard, creating modern kimchi</li>
<li><strong>2013:</strong> UNESCO recognised Kimjang (communal kimchi-making) as Intangible Cultural Heritage</li>
</ul>

<p>Today, Koreans consume about 40 pounds (18kg) of kimchi per person annually - it's eaten at nearly every meal.</p>

<h2 id="types">Types of Kimchi</h2>

<p>There are over 200 varieties of kimchi! Here are the most common:</p>

<ul>
<li><strong>Baechu kimchi:</strong> The classic napa cabbage version</li>
<li><strong>Kkakdugi:</strong> Cubed radish kimchi</li>
<li><strong>Oi sobagi:</strong> Stuffed cucumber kimchi</li>
<li><strong>Baek kimchi:</strong> White (non-spicy) kimchi</li>
<li><strong>Pa kimchi:</strong> Spring onion kimchi</li>
<li><strong>Mul kimchi:</strong> Water kimchi (in brine)</li>
</ul>

<p>Learn more in our <a href="/culture/types-of-kimchi/">complete guide to kimchi varieties</a>.</p>

<h2 id="try-it">Ready to Try Kimchi?</h2>

<p>If you've never tried kimchi, you're in for a treat. Here's how to start:</p>

<ol>
<li><strong>Buy a small jar</strong> from your local supermarket or <a href="/shop/">order from us</a></li>
<li><strong>Start simple</strong> - try it as a side dish with rice or in fried rice</li>
<li><strong>Give it time</strong> - most people become fans after a few tries</li>
<li><strong>Try different types</strong> - if red kimchi is too spicy, try white kimchi</li>
</ol>

<p>Once you're hooked, try <a href="/recipes/traditional-kimchi-recipe/">making your own</a> - it's easier than you think and tastes amazing.</p>

<p><strong>Explore more:</strong></p>
<ul>
<li><a href="/kimchi/">Complete kimchi guide</a></li>
<li><a href="/health/kimchi-benefits/">Health benefits of kimchi</a></li>
<li><a href="/buy/best-kimchi-uk/">Where to buy kimchi in the UK</a></li>
<li><a href="/recipes/traditional-kimchi-recipe/">How to make kimchi at home</a></li>
</ul>
`
}

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": article.title,
      "description": article.meta_description,
      "author": { "@type": "Organization", "name": "Ollie's Kimchi" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is kimchi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kimchi is a traditional Korean dish of fermented vegetables, most commonly napa cabbage seasoned with gochugaru (Korean red pepper flakes), garlic, ginger, and fish sauce. It has a tangy, spicy, umami-rich flavour."
          }
        },
        {
          "@type": "Question",
          "name": "What does kimchi taste like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kimchi tastes sour (from fermentation), spicy (from chilli), garlicky, and umami-rich. The taste develops over time, becoming more sour as it ages."
          }
        },
        {
          "@type": "Question",
          "name": "Is kimchi vegan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional kimchi contains fish sauce or fermented shrimp, so it's not vegan. However, vegan kimchi is widely available and made by substituting seafood with soy sauce or miso."
          }
        },
        {
          "@type": "Question",
          "name": "Is kimchi spicy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most kimchi is moderately spicy from Korean red pepper flakes (gochugaru). Heat levels vary by brand and recipe. Non-spicy white kimchi (baek kimchi) is available for those who don't like heat."
          }
        }
      ]
    }
  ]
}

async function main() {
  console.log('Inserting CU-001: What is Kimchi?...\n')
  const wordCount = article.content.split(/\s+/).length
  console.log(`Word count: ${wordCount}`)

  await sql`
    INSERT INTO seo_articles (
      article_id, title, slug, meta_title, meta_description,
      primary_keyword, secondary_keywords, search_volume, word_count,
      content, excerpt, hero_image_alt, schema_type, schema_json,
      cluster, phase, status, internal_links, published_at
    ) VALUES (
      ${article.article_id}, ${article.title}, ${article.slug},
      ${article.meta_title}, ${article.meta_description},
      ${article.primary_keyword}, ${article.secondary_keywords},
      ${article.search_volume}, ${wordCount}, ${article.content},
      ${article.excerpt}, ${article.hero_image_alt}, ${article.schema_type},
      ${JSON.stringify(schemaJson)}, ${article.cluster}, ${article.phase},
      'published', ${article.internal_links}, CURRENT_TIMESTAMP
    )
  `

  console.log('\nArticle CU-001 inserted successfully!')
  console.log(`  Title: ${article.title}`)
  console.log(`  Slug: /${article.slug}/`)
  console.log(`  Primary keyword: ${article.primary_keyword}`)
  console.log(`  Search volume: ${article.search_volume.toLocaleString()}/month`)
}

main().catch(console.error)
