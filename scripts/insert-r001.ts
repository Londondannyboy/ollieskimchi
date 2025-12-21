/**
 * Insert R-001: Traditional Kimchi Recipe UK
 * Run with: DATABASE_URL="..." npx tsx scripts/insert-r001.ts
 */

import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set')
  process.exit(1)
}

const sql = neon(DATABASE_URL)

const article = {
  article_id: 'R-001',
  title: 'Traditional Kimchi Recipe: Authentic Korean Method (UK Ingredients)',
  slug: 'recipes/traditional-kimchi-recipe',
  meta_title: 'Traditional Kimchi Recipe UK | Authentic Korean Method',
  meta_description: 'Learn to make authentic Korean kimchi at home with UK ingredients. Step-by-step recipe with fermentation guide, storage tips, and troubleshooting.',
  primary_keyword: 'kimchi recipe',
  secondary_keywords: ['how to make kimchi', 'korean kimchi recipe', 'homemade kimchi', 'kimchi recipe uk', 'authentic kimchi', 'fermented cabbage recipe'],
  search_volume: 14800,
  excerpt: 'Master the art of traditional Korean kimchi with this authentic recipe adapted for UK kitchens. Complete with step-by-step instructions, fermentation guide, and troubleshooting tips.',
  hero_image_alt: 'Fresh homemade kimchi in a glass jar with traditional Korean seasonings',
  schema_type: 'recipe',
  cluster: 'recipes',
  phase: 1,
  internal_links: ['kimchi', 'kimchi-benefits', 'how-to-store-kimchi', 'kimchi-fermentation', 'vegan-kimchi', 'gochugaru-uk'],
  content: `
<p>Making <strong>traditional kimchi</strong> at home is one of the most rewarding culinary projects you can undertake. This authentic <a href="/kimchi/">Korean kimchi</a> recipe will guide you through every step of the process, using ingredients readily available in UK supermarkets and Asian grocers.</p>

<p>Homemade kimchi tastes infinitely better than shop-bought versions - it's fresher, more flavourful, and packed with live probiotics. Once you've made your first batch, you'll wonder why you ever bought it pre-made.</p>

<h2>Why Make Kimchi at Home?</h2>

<ul>
<li><strong>Fresher taste:</strong> Homemade kimchi has a vibrant, complex flavour that commercial versions can't match</li>
<li><strong>More probiotics:</strong> Fresh, unpasteurised kimchi contains billions of beneficial bacteria</li>
<li><strong>Customisable:</strong> Adjust spice levels, saltiness, and ingredients to your preference</li>
<li><strong>Cost-effective:</strong> Makes far more kimchi per pound than buying jars</li>
<li><strong>Satisfying:</strong> There's deep satisfaction in making this ancient fermented food yourself</li>
</ul>

<h2 id="ingredients">Ingredients (Makes approximately 2kg)</h2>

<h3>For the Cabbage</h3>

<ul>
<li><strong>1 large napa cabbage</strong> (about 1.5-2kg) - Available at Tesco, Sainsbury's, Asian supermarkets</li>
<li><strong>70g coarse sea salt</strong> - Maldon or any good quality sea salt (not table salt)</li>
<li><strong>1 litre cold water</strong></li>
</ul>

<h3>For the Kimchi Paste</h3>

<ul>
<li><strong>50g gochugaru</strong> (Korean red pepper flakes) - Essential for authentic flavour. Find at Asian supermarkets or <a href="/buy/gochugaru-uk/">buy gochugaru online</a></li>
<li><strong>30g fish sauce</strong> - Thai fish sauce from any supermarket works well</li>
<li><strong>20g fermented shrimp paste</strong> (saeujeot) - Optional but traditional. Substitute with extra fish sauce</li>
<li><strong>1 tablespoon sugar</strong></li>
<li><strong>8 cloves garlic</strong> (about 30g)</li>
<li><strong>20g fresh ginger</strong> (a thumb-sized piece)</li>
<li><strong>3 tablespoons rice flour</strong> mixed with 250ml water (for the paste base)</li>
</ul>

<h3>Vegetables</h3>

<ul>
<li><strong>200g Korean radish or daikon</strong> - Cut into matchsticks</li>
<li><strong>4 spring onions</strong> - Cut into 5cm pieces</li>
<li><strong>Optional:</strong> 1 small carrot, julienned</li>
</ul>

<h3>UK Ingredient Substitutions</h3>

<table>
<thead>
<tr><th>Traditional</th><th>UK Substitute</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Gochugaru</td><td>Sweet paprika + cayenne (3:1 ratio)</td><td>Not identical but works. <a href="/recipes/kimchi-without-gochugaru/">See full guide</a></td></tr>
<tr><td>Korean radish (mu)</td><td>Daikon or red radishes</td><td>Widely available in Asian sections</td></tr>
<tr><td>Saeujeot (shrimp paste)</td><td>Extra fish sauce or anchovy paste</td><td>Or omit for <a href="/recipes/vegan-kimchi/">vegan version</a></td></tr>
<tr><td>Korean sea salt</td><td>Maldon or coarse sea salt</td><td>Avoid iodised table salt</td></tr>
</tbody>
</table>

<h2 id="equipment">Equipment Needed</h2>

<ul>
<li><strong>Large bowl or basin</strong> - For salting the cabbage</li>
<li><strong>Colander</strong> - For draining</li>
<li><strong>Small saucepan</strong> - For making the rice flour paste</li>
<li><strong>Food processor or blender</strong> - Optional, for the paste</li>
<li><strong>Mixing bowl</strong> - For combining paste and vegetables</li>
<li><strong>Rubber or latex gloves</strong> - Essential! Gochugaru stains hands</li>
<li><strong>Clean glass jars with lids</strong> (2 x 1 litre or 1 x 2 litre) - Kilner jars work perfectly</li>
<li><strong>Kitchen scales</strong> - Accuracy matters for fermentation</li>
</ul>

<h2 id="instructions">Step-by-Step Instructions</h2>

<h3>Step 1: Prepare and Salt the Cabbage (Time: 20 minutes + 6-12 hours)</h3>

<ol>
<li>Remove any damaged outer leaves from the cabbage.</li>
<li>Cut the cabbage lengthwise into quarters, keeping the core intact to hold leaves together.</li>
<li>Dissolve 50g salt in 1 litre of cold water in your large bowl.</li>
<li>Submerge the cabbage quarters in the brine, then lift out.</li>
<li>Working leaf by leaf, sprinkle the remaining 20g salt between every leaf, concentrating on the thick white parts.</li>
<li>Place the cabbage back in the bowl, weigh it down with a plate, and leave for 6-12 hours (or overnight).</li>
<li>Turn the cabbage halfway through for even salting.</li>
</ol>

<p><strong>How to know it's ready:</strong> The thick white part of a leaf should bend without snapping. It should taste pleasantly salty, like crisps.</p>

<h3>Step 2: Make the Rice Flour Paste (Time: 10 minutes)</h3>

<ol>
<li>Whisk 3 tablespoons rice flour into 250ml cold water until smooth.</li>
<li>Heat over medium heat, stirring constantly, until it thickens to a paste (about 5 minutes).</li>
<li>Remove from heat and stir in 1 tablespoon sugar.</li>
<li>Let cool completely before using.</li>
</ol>

<p><strong>Why this matters:</strong> The paste helps seasonings stick to the cabbage and provides food for the fermenting bacteria.</p>

<h3>Step 3: Make the Kimchi Paste (Time: 15 minutes)</h3>

<ol>
<li>Peel and roughly chop the garlic and ginger.</li>
<li>Blend garlic, ginger, fish sauce, and shrimp paste (if using) until smooth. Alternatively, grate the garlic and ginger finely.</li>
<li>In a large bowl, combine the cooled rice paste with the garlic-ginger mixture.</li>
<li>Add the gochugaru and mix thoroughly until you have a thick, vibrant red paste.</li>
</ol>

<p><strong>Adjusting heat:</strong> Start with less gochugaru and add more to taste. You can always add heat, but you can't take it away.</p>

<h3>Step 4: Rinse the Cabbage (Time: 15 minutes)</h3>

<ol>
<li>Remove the cabbage from the brine and rinse thoroughly under cold running water.</li>
<li>Rinse three times to remove excess salt, gently separating leaves to rinse between them.</li>
<li>Squeeze out as much water as possible - this is important for texture and fermentation.</li>
<li>Set aside in a colander to drain for 15-30 minutes.</li>
</ol>

<p><strong>Taste test:</strong> A leaf should taste mildly salty. If too salty, rinse again. If not salty enough, sprinkle with a little more salt.</p>

<h3>Step 5: Prepare the Vegetables (Time: 10 minutes)</h3>

<ol>
<li>Cut the radish into thin matchsticks (about 5cm long, 3mm thick).</li>
<li>Cut spring onions into 5cm pieces.</li>
<li>If using carrot, julienne it finely.</li>
<li>Add all vegetables to the kimchi paste and mix well.</li>
</ol>

<h3>Step 6: Apply the Paste (Time: 20 minutes)</h3>

<ol>
<li>Put on your rubber gloves - the paste will stain!</li>
<li>Take one cabbage quarter and, working from the outer leaves inward, spread paste onto every leaf.</li>
<li>Use enough paste to coat each leaf, but don't overdo it - you need paste for all quarters.</li>
<li>Gently fold the outer leaf around the quarter to form a neat bundle.</li>
<li>Repeat with remaining cabbage quarters.</li>
</ol>

<p><strong>Traditional tip:</strong> Work the paste into the cabbage with a rubbing motion - Koreans say you're "massaging" the kimchi.</p>

<h3>Step 7: Pack and Ferment (Time: 10 minutes + 1-5 days)</h3>

<ol>
<li>Pack the kimchi bundles tightly into clean glass jars.</li>
<li>Press down firmly to remove air pockets - air is the enemy of fermentation.</li>
<li>Leave at least 2.5cm headspace at the top (kimchi expands as it ferments).</li>
<li>If there's leftover paste, spread it on top.</li>
<li>Close the lid loosely - gases need to escape.</li>
<li>Place jars on a plate to catch any overflow.</li>
</ol>

<h3>Step 8: Ferment and Store</h3>

<p><strong>Room temperature fermentation (1-5 days):</strong></p>
<ul>
<li>Leave jars at room temperature (18-22°C is ideal)</li>
<li>Press down the kimchi daily to keep it submerged in liquid</li>
<li>"Burp" the jars by opening the lid briefly to release gases</li>
<li>Taste daily from day 2 - transfer to fridge when it reaches your preferred sourness</li>
</ul>

<p><strong>Refrigerator fermentation:</strong></p>
<ul>
<li>Once refrigerated, fermentation slows dramatically</li>
<li>Kimchi continues developing flavour for weeks</li>
<li>Best consumed within 3-6 months</li>
</ul>

<h2 id="fermentation-guide">Fermentation Guide</h2>

<p>Understanding <a href="/guides/kimchi-fermentation/">fermentation</a> is key to perfect kimchi:</p>

<h3>Temperature Effects</h3>

<table>
<thead>
<tr><th>Temperature</th><th>Fermentation Speed</th><th>Best For</th></tr>
</thead>
<tbody>
<tr><td>22-25°C</td><td>Fast (1-2 days)</td><td>Quick kimchi, warm weather</td></tr>
<tr><td>18-22°C</td><td>Medium (2-3 days)</td><td>Standard room temp fermentation</td></tr>
<tr><td>15-18°C</td><td>Slow (4-5 days)</td><td>More complex flavour development</td></tr>
<tr><td>4°C (fridge)</td><td>Very slow (weeks)</td><td>Long-term storage</td></tr>
</tbody>
</table>

<h3>Signs of Good Fermentation</h3>

<ul>
<li>Bubbles rising when you press down on the kimchi</li>
<li>Tangy, sour aroma developing</li>
<li>Liquid level rising (from CO2 production)</li>
<li>Increasingly sour taste over time</li>
</ul>

<h3>When is Kimchi Ready?</h3>

<p>Kimchi is "ready" when you like the taste! Fresh kimchi (1-3 days) is crisp and mildly tangy. Well-fermented kimchi (1-2 weeks) is sourer and softer. Aged kimchi (1+ months) is very sour and best for cooking.</p>

<h2 id="storage">Storage Tips</h2>

<p>Proper storage ensures your kimchi stays delicious for months. See our complete <a href="/guides/how-to-store-kimchi/">kimchi storage guide</a> for more details.</p>

<ul>
<li><strong>Always keep submerged:</strong> Press kimchi below the liquid to prevent mould</li>
<li><strong>Use clean utensils:</strong> Never use fingers or dirty utensils to remove kimchi</li>
<li><strong>Keep airtight:</strong> Minimise air exposure to slow oxidation</li>
<li><strong>Store at back of fridge:</strong> Temperature is most stable there</li>
<li><strong>Separate container for daily use:</strong> Transfer portions to avoid constantly opening main jar</li>
</ul>

<h2 id="troubleshooting">Troubleshooting Common Problems</h2>

<h3>Kimchi is too salty</h3>
<p><strong>Cause:</strong> Not rinsed enough or over-salted during brining.</p>
<p><strong>Fix:</strong> Soak in cold water for 30 minutes, then drain. For future batches, rinse more thoroughly and taste-test before applying paste.</p>

<h3>Kimchi is too sour</h3>
<p><strong>Cause:</strong> Over-fermented at room temperature.</p>
<p><strong>Fix:</strong> Use in cooked dishes like <a href="/recipes/kimchi-fried-rice/">kimchi fried rice</a> or <a href="/recipes/kimchi-jjigae/">kimchi jjigae</a> where sourness is desirable. Refrigerate earlier in future batches.</p>

<h3>Kimchi is mushy</h3>
<p><strong>Cause:</strong> Cabbage was over-salted, fermented too warm, or is simply very aged.</p>
<p><strong>Fix:</strong> Mushy kimchi is still safe and great for cooking. For future batches, use less salt and ferment at cooler temperatures.</p>

<h3>Kimchi isn't fermenting</h3>
<p><strong>Cause:</strong> Too cold, too much salt, or not enough sugar for bacteria to feed on.</p>
<p><strong>Fix:</strong> Move to a warmer spot and ensure sugar was added. Fermentation can take up to a week in cool conditions.</p>

<h3>White film on top</h3>
<p><strong>What it is:</strong> Kahm yeast - harmless but affects flavour.</p>
<p><strong>Fix:</strong> Skim it off and ensure kimchi stays submerged. Kahm yeast is not mould and won't hurt you.</p>

<h3>Fuzzy mould</h3>
<p><strong>What it is:</strong> True mould - usually green, black, or pink fuzz.</p>
<p><strong>Fix:</strong> Discard the batch. This is rare but can happen if kimchi wasn't submerged or jar wasn't clean.</p>

<h2 id="ways-to-use">Delicious Ways to Use Your Kimchi</h2>

<p>Once you've made your kimchi, here are the best ways to enjoy it:</p>

<h3>Fresh Kimchi (Days 1-7)</h3>
<ul>
<li>As a side dish with any meal</li>
<li>In a rice bowl with a fried egg</li>
<li>In <a href="/recipes/kimchi-grilled-cheese/">kimchi grilled cheese sandwiches</a></li>
<li>On top of burgers or hot dogs</li>
</ul>

<h3>Fermented Kimchi (Weeks 2-4)</h3>
<ul>
<li><a href="/recipes/kimchi-fried-rice/">Kimchi fried rice</a> - the classic</li>
<li><a href="/recipes/kimchi-pancakes/">Kimchi pancakes</a> (kimchijeon)</li>
<li><a href="/recipes/kimchi-ramen/">Kimchi ramen</a></li>
<li><a href="/recipes/kimchi-quesadilla/">Kimchi quesadillas</a></li>
</ul>

<h3>Aged/Sour Kimchi (1+ Months)</h3>
<ul>
<li><a href="/recipes/kimchi-jjigae/">Kimchi jjigae</a> (stew) - sour kimchi is essential</li>
<li><a href="/recipes/kimchi-dumplings/">Kimchi dumplings</a> (mandu)</li>
<li>Braised with pork</li>
<li>In soups and stews</li>
</ul>

<p>See our complete guide on <a href="/uses/what-to-eat-with-kimchi/">what to eat with kimchi</a> for more ideas.</p>

<h2 id="faqs">Frequently Asked Questions</h2>

<h3>How long does homemade kimchi last?</h3>
<p>Properly stored in the refrigerator, homemade kimchi lasts 3-6 months. It doesn't spoil in the traditional sense - it just becomes more sour over time. Very old kimchi is still safe and perfect for cooking.</p>

<h3>Can I make kimchi without fish sauce?</h3>
<p>Yes! For vegan kimchi, replace fish sauce with Korean soup soy sauce (gukganjang), white miso paste, or simply more salt. See our <a href="/recipes/vegan-kimchi/">vegan kimchi recipe</a>.</p>

<h3>Why is my kimchi not red enough?</h3>
<p>You may have used too little gochugaru, or substituted with the wrong type of chilli. Authentic gochugaru has a vibrant red colour. Using cayenne or other chillies produces less colour.</p>

<h3>Can I ferment kimchi for longer at room temperature?</h3>
<p>You can, but the flavour becomes very sour and the texture softens significantly. Most people prefer to refrigerate after 1-5 days and let it continue slow-fermenting in the fridge.</p>

<h3>Is it normal for kimchi to smell strong?</h3>
<p>Yes! Kimchi has a distinctive pungent aroma from the garlic, ginger, fish sauce, and fermentation. This is completely normal. An unpleasant, "off" smell (like rotting rather than fermenting) would indicate a problem.</p>

<h2 id="next-steps">Ready to Start?</h2>

<p>Now you have everything you need to make authentic Korean kimchi at home. Remember, kimchi-making is an art that improves with practice - your second batch will be even better than your first!</p>

<p><strong>More kimchi recipes to try:</strong></p>
<ul>
<li><a href="/recipes/easy-kimchi-recipe/">Easy kimchi recipe for beginners</a></li>
<li><a href="/recipes/quick-kimchi/">Quick 24-hour kimchi</a></li>
<li><a href="/recipes/vegan-kimchi/">Vegan kimchi recipe</a></li>
<li><a href="/recipes/white-kimchi/">White kimchi (baek kimchi)</a> - non-spicy option</li>
</ul>

<p>Not ready to make your own? <a href="/shop/">Shop our handmade kimchi</a> - made fresh in the UK using traditional methods.</p>
`
}

// Schema.org structured data for Recipe
const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Recipe",
      "@id": "https://ollieskimchi.co.uk/recipes/traditional-kimchi-recipe/#recipe",
      "name": "Traditional Korean Kimchi",
      "author": {
        "@type": "Organization",
        "name": "Ollie's Kimchi"
      },
      "description": "Authentic Korean kimchi recipe adapted for UK kitchens. Learn to make traditional fermented napa cabbage kimchi with step-by-step instructions.",
      "image": "https://ollieskimchi.co.uk/images/traditional-kimchi-recipe.jpg",
      "recipeYield": "2 kilograms",
      "prepTime": "PT2H",
      "cookTime": "PT0M",
      "totalTime": "P3D",
      "recipeCategory": "Side Dish",
      "recipeCuisine": "Korean",
      "keywords": "kimchi, kimchi recipe, korean kimchi, fermented vegetables, probiotic foods",
      "recipeIngredient": [
        "1 large napa cabbage (1.5-2kg)",
        "70g coarse sea salt",
        "50g gochugaru (Korean red pepper flakes)",
        "30g fish sauce",
        "20g fermented shrimp paste (optional)",
        "1 tablespoon sugar",
        "8 cloves garlic",
        "20g fresh ginger",
        "3 tablespoons rice flour",
        "200g Korean radish or daikon",
        "4 spring onions"
      ],
      "recipeInstructions": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Salt the cabbage",
          "text": "Quarter the cabbage and salt between every leaf, then brine for 6-12 hours until wilted but still slightly crunchy."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Make rice paste",
          "text": "Cook rice flour with water until thickened, add sugar, and cool completely."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Make kimchi paste",
          "text": "Blend garlic, ginger, fish sauce and shrimp paste. Combine with rice paste and gochugaru."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Rinse cabbage",
          "text": "Rinse the salted cabbage three times under cold water and squeeze dry."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Prepare vegetables",
          "text": "Cut radish into matchsticks and spring onions into 5cm pieces. Mix with paste."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Apply paste",
          "text": "Wearing gloves, spread paste onto every cabbage leaf and fold into bundles."
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Pack and ferment",
          "text": "Pack tightly into jars, leaving headspace. Ferment at room temperature 1-5 days."
        },
        {
          "@type": "HowToStep",
          "position": 8,
          "name": "Refrigerate",
          "text": "Once desired sourness is reached, refrigerate. Kimchi keeps for 3-6 months."
        }
      ],
      "nutrition": {
        "@type": "NutritionInformation",
        "servingSize": "100g",
        "calories": "15 kcal",
        "carbohydrateContent": "2.4g",
        "fiberContent": "1.6g",
        "proteinContent": "1.1g",
        "fatContent": "0.5g",
        "sodiumContent": "498mg"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://ollieskimchi.co.uk/recipes/traditional-kimchi-recipe/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does homemade kimchi last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Properly stored in the refrigerator, homemade kimchi lasts 3-6 months. It doesn't spoil in the traditional sense - it just becomes more sour over time."
          }
        },
        {
          "@type": "Question",
          "name": "Can I make kimchi without fish sauce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! For vegan kimchi, replace fish sauce with Korean soup soy sauce, white miso paste, or simply more salt."
          }
        },
        {
          "@type": "Question",
          "name": "Is it normal for kimchi to smell strong?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Kimchi has a distinctive pungent aroma from the garlic, ginger, fish sauce, and fermentation. This is completely normal."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ollieskimchi.co.uk"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Recipes",
          "item": "https://ollieskimchi.co.uk/recipes/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Traditional Kimchi Recipe",
          "item": "https://ollieskimchi.co.uk/recipes/traditional-kimchi-recipe/"
        }
      ]
    }
  ]
}

async function main() {
  console.log('Inserting R-001: Traditional Kimchi Recipe UK...\n')

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

  console.log('\nArticle R-001 inserted successfully!')
  console.log(`  Title: ${article.title}`)
  console.log(`  Slug: /${article.slug}/`)
  console.log(`  Primary keyword: ${article.primary_keyword}`)
  console.log(`  Search volume: ${article.search_volume.toLocaleString()}/month`)
  console.log(`  Word count: ${wordCount}`)
}

main().catch(console.error)
