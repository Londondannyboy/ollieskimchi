/**
 * Insert P-001: The Ultimate Guide to Kimchi UK
 * Run with: DATABASE_URL="..." npx tsx scripts/insert-p001.ts
 */

import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set')
  process.exit(1)
}

const sql = neon(DATABASE_URL)

const article = {
  article_id: 'P-001',
  title: 'The Ultimate Guide to Kimchi UK: Everything You Need to Know',
  slug: 'kimchi',
  meta_title: 'Kimchi UK: Ultimate Guide to Korean Fermented Vegetables',
  meta_description: 'Complete guide to kimchi in the UK. Learn what kimchi is, health benefits, how to make it, where to buy, and delicious ways to enjoy this Korean superfood.',
  primary_keyword: 'kimchi',
  secondary_keywords: ['what is kimchi', 'kimchi uk', 'korean kimchi', 'fermented cabbage', 'kimchi benefits', 'how to make kimchi', 'buy kimchi uk'],
  search_volume: 110000,
  excerpt: 'Everything you need to know about kimchi in the UK - from its 2,000-year history to where to buy it, how to make it at home, and the science-backed health benefits.',
  hero_image_alt: 'Traditional Korean kimchi in a ceramic bowl with chopsticks',
  schema_type: 'article',
  cluster: 'pillar',
  phase: 1,
  internal_links: ['traditional-kimchi-recipe', 'kimchi-benefits', 'best-kimchi-uk', 'what-is-kimchi', 'types-of-kimchi'],
  content: `
<p><strong>Kimchi</strong> is Korea's national dish and one of the world's most celebrated fermented foods. This vibrant, tangy, and spicy condiment has been a cornerstone of Korean cuisine for over 2,000 years, and now it's taking the UK by storm. Whether you've spotted it in your local Tesco, seen it on a restaurant menu, or heard about its remarkable health benefits, this comprehensive guide will tell you everything you need to know about kimchi.</p>

<p>In this ultimate guide, we'll explore what makes kimchi so special, dive into its rich history, examine the science behind its health benefits, and show you exactly how to make authentic kimchi at home using ingredients readily available in the UK.</p>

<h2 id="what-is-kimchi">What is Kimchi?</h2>

<p>Kimchi (pronounced kim-chee) is a traditional Korean side dish made from salted and fermented vegetables, most commonly napa cabbage and Korean radish. The vegetables are seasoned with a paste made from <strong>gochugaru</strong> (Korean red pepper flakes), garlic, ginger, and <strong>jeotgal</strong> (salted seafood), then left to ferment for days, weeks, or even months.</p>

<p>The result is a complex, flavourful condiment that's simultaneously spicy, sour, umami, and refreshing. Kimchi is much more than just fermented cabbage - it's a living food teeming with beneficial bacteria, vitamins, and antioxidants.</p>

<h3>Key Characteristics of Kimchi</h3>

<ul>
<li><strong>Taste:</strong> A unique combination of spicy, sour, salty, and umami flavours that develops and deepens during fermentation</li>
<li><strong>Texture:</strong> Crisp and crunchy when fresh, becoming softer as it ages</li>
<li><strong>Colour:</strong> Vibrant red-orange from the gochugaru, though white and green varieties also exist</li>
<li><strong>Aroma:</strong> Pungent and distinctive, with notes of garlic and fermentation</li>
<li><strong>Nutrition:</strong> Low in calories but high in fibre, vitamins A, B, and C, and beneficial probiotics</li>
</ul>

<h2 id="history-of-kimchi">The History of Kimchi</h2>

<p>Kimchi's <a href="/culture/history-of-kimchi/">history</a> stretches back over two millennia, making it one of the oldest fermented foods still enjoyed today. The earliest forms of kimchi were simple salted vegetables, developed as a preservation method during Korea's harsh winters.</p>

<h3>Timeline of Kimchi's Evolution</h3>

<p><strong>37 BCE - 7th Century:</strong> The earliest records of fermented vegetables in Korea appear during the Three Kingdoms period. These early versions were simple salted vegetables without the characteristic red colour we know today.</p>

<p><strong>12th-13th Century:</strong> During the Goryeo Dynasty, kimchi recipes became more sophisticated. Koreans began adding spices like garlic, ginger, and green onions. The word "chimchae" (meaning "soaked vegetables") first appears in literature.</p>

<p><strong>16th Century:</strong> Portuguese traders introduce chilli peppers to Korea via Japan. Initially used as medicine, these peppers would eventually revolutionise kimchi.</p>

<p><strong>18th-19th Century:</strong> Gochugaru becomes a standard kimchi ingredient, creating the red, spicy kimchi we recognise today. Napa cabbage, introduced from China, becomes the primary vegetable.</p>

<p><strong>2013:</strong> UNESCO adds "Kimjang: Making and Sharing Kimchi" to its Intangible Cultural Heritage of Humanity list, recognising kimchi's cultural significance.</p>

<h3>Kimchi in Korean Culture</h3>

<p>In Korea, kimchi is far more than food - it's a cultural institution. The tradition of <strong>Kimjang</strong>, the communal making of kimchi in late autumn, brings families and communities together. Each household has their own recipe, passed down through generations, with subtle variations that reflect regional preferences and family traditions.</p>

<p>Koreans consume an average of 40 pounds (18kg) of kimchi per person annually. It's served at nearly every meal, from breakfast to dinner, and is considered essential to Korean identity.</p>

<h2 id="types-of-kimchi">10 Popular Types of Kimchi</h2>

<p>While most people in the UK are familiar with the classic red cabbage kimchi, there are actually over 200 varieties of kimchi in Korea. Here are the ten most popular <a href="/culture/types-of-kimchi/">types of kimchi</a> you're likely to encounter:</p>

<h3>1. Baechu Kimchi (Napa Cabbage Kimchi)</h3>

<p>The classic. Whole napa cabbage leaves are salted, layered with spicy paste, and fermented. This is the kimchi you'll find in most UK shops and restaurants. It's versatile, delicious, and perfect for kimchi beginners.</p>

<h3>2. Kkakdugi (Cubed Radish Kimchi)</h3>

<p>Made with Korean radish cut into small cubes and fermented with the same seasonings as cabbage kimchi. Kkakdugi has a satisfying crunch and is traditionally served with soups and stews, particularly the hearty beef soup <em>seolleongtang</em>.</p>

<h3>3. Oi Sobagi (Stuffed Cucumber Kimchi)</h3>

<p>Small cucumbers are scored and stuffed with a mixture of chives, garlic, and gochugaru. This refreshing <a href="/recipes/cucumber-kimchi/">cucumber kimchi</a> is popular in summer and ferments quickly - usually within a day or two.</p>

<h3>4. Baek Kimchi (White Kimchi)</h3>

<p>A non-spicy variety made without gochugaru, perfect for those who prefer milder flavours or can't handle heat. <a href="/recipes/white-kimchi/">White kimchi</a> has a clean, refreshing taste and showcases the pure flavour of fermented vegetables.</p>

<h3>5. Mul Kimchi (Water Kimchi)</h3>

<p>A mild, soupy kimchi where vegetables float in a tangy, slightly sweet brine. <a href="/recipes/water-kimchi/">Water kimchi</a> is particularly refreshing in summer, and the liquid is often used as a base for cold noodle dishes like <em>naengmyeon</em>.</p>

<h3>6. Pa Kimchi (Green Onion Kimchi)</h3>

<p><a href="/recipes/spring-onion-kimchi/">Spring onion kimchi</a> has a more intense, savoury flavour than cabbage kimchi. The long green onions are tied in bundles before fermenting, making for an attractive presentation.</p>

<h3>7. Chonggak Kimchi (Ponytail Radish Kimchi)</h3>

<p>Made with small whole radishes with their leafy tops still attached, this kimchi has a fresh, slightly sweet taste. The radishes are left whole, giving this variety a distinctive appearance.</p>

<h3>8. Yeolmu Kimchi (Young Summer Radish Kimchi)</h3>

<p>A seasonal summer kimchi made with young radish greens. It's lighter and more refreshing than winter varieties, with a short fermentation time.</p>

<h3>9. Bossam Kimchi (Wrapped Kimchi)</h3>

<p>A luxury kimchi where various ingredients - seafood, nuts, fruits, and vegetables - are wrapped in cabbage leaves. Traditionally prepared for special occasions and celebrations.</p>

<h3>10. Gat Kimchi (Mustard Leaf Kimchi)</h3>

<p>Made with Korean mustard leaves, this variety has a distinctive, slightly bitter and peppery flavour. It's particularly popular in the southern regions of Korea.</p>

<h2 id="kimchi-ingredients">Kimchi Ingredients: UK Substitutions Guide</h2>

<p>Making authentic kimchi in the UK is easier than ever, but some traditional ingredients may require substitutions. Here's your complete guide to <a href="/buy/korean-ingredients/">kimchi ingredients</a> and UK alternatives:</p>

<h3>Essential Ingredients</h3>

<h4>Napa Cabbage (Chinese Cabbage)</h4>
<p><strong>Where to find:</strong> Most UK supermarkets including Tesco, Sainsbury's, Asda, and Waitrose. Also available in Asian supermarkets.</p>
<p><strong>What to look for:</strong> Firm, heavy heads with tightly packed, pale green to white leaves. Avoid any with brown spots or wilting.</p>

<h4>Gochugaru (Korean Red Pepper Flakes)</h4>
<p><strong>Where to find:</strong> Asian supermarkets, online retailers like Amazon or SousChef, or Korean grocers like H Mart.</p>
<p><strong>UK Alternative:</strong> If you can't find gochugaru, use a combination of sweet paprika and a small amount of cayenne pepper. The flavour won't be identical, but it will still be delicious. See our guide on <a href="/recipes/kimchi-without-gochugaru/">making kimchi without gochugaru</a>.</p>
<p><strong>Where to buy:</strong> Check our <a href="/buy/gochugaru-uk/">gochugaru UK buying guide</a> for the best options.</p>

<h4>Korean Sea Salt (Cheonilyeom)</h4>
<p><strong>Where to find:</strong> Korean supermarkets or online.</p>
<p><strong>UK Alternative:</strong> Coarse sea salt or Maldon salt works well. Avoid table salt as it contains anti-caking agents that can affect fermentation.</p>

<h4>Fish Sauce or Salted Shrimp (Saeujeot)</h4>
<p><strong>Where to find:</strong> Asian supermarkets (Thai fish sauce is widely available).</p>
<p><strong>UK Alternative:</strong> Thai fish sauce from any supermarket. For vegan kimchi, substitute with Korean soup soy sauce (gukganjang) or white miso paste. See our <a href="/recipes/vegan-kimchi/">vegan kimchi recipe</a>.</p>

<h4>Garlic</h4>
<p><strong>UK Source:</strong> Any supermarket. Use plenty - authentic kimchi uses more garlic than most Western dishes.</p>

<h4>Ginger</h4>
<p><strong>UK Source:</strong> Fresh ginger is available everywhere. Use fresh, not dried or powdered.</p>

<h4>Spring Onions</h4>
<p><strong>UK Source:</strong> Any supermarket. You can also use chives or the green parts of leeks.</p>

<h4>Korean Radish (Mu)</h4>
<p><strong>Where to find:</strong> Asian supermarkets.</p>
<p><strong>UK Alternative:</strong> Daikon radish (widely available) or even regular red radishes in a pinch.</p>

<h3>Optional Ingredients</h3>

<ul>
<li><strong>Asian pear or apple:</strong> Adds sweetness and helps the paste texture</li>
<li><strong>Rice flour paste:</strong> Helps the seasonings stick and provides food for bacteria</li>
<li><strong>Sugar:</strong> Small amounts can speed up fermentation</li>
<li><strong>Carrots:</strong> Common addition for colour and sweetness</li>
</ul>

<h2 id="health-benefits">Kimchi Health Benefits: The Science</h2>

<p>Kimchi isn't just delicious - it's a genuine superfood with numerous <a href="/health/kimchi-benefits/">scientifically-proven health benefits</a>. Here's what the research says:</p>

<h3>1. Rich in Probiotics</h3>

<p>Kimchi contains billions of beneficial bacteria, primarily <em>Lactobacillus</em> species. These <a href="/health/kimchi-probiotics/">probiotics</a> support digestive health, boost immunity, and may even influence mood and mental health through the gut-brain axis.</p>

<p><strong>The science:</strong> A 2014 study in the Journal of Medicinal Food found that kimchi contains up to 1 billion CFU (colony-forming units) of probiotics per gram.</p>

<h3>2. Supports Gut Health</h3>

<p>The combination of probiotics and prebiotic fibre in kimchi creates an ideal environment for a healthy <a href="/health/kimchi-gut-health/">gut microbiome</a>. A balanced gut microbiome is linked to improved digestion, better nutrient absorption, and reduced inflammation.</p>

<h3>3. Boosts Immune Function</h3>

<p>Around 70% of our immune system resides in the gut. By supporting gut health, kimchi indirectly strengthens immune function. Additionally, garlic and ginger - key kimchi ingredients - have well-documented antimicrobial properties.</p>

<h3>4. High in Vitamins and Antioxidants</h3>

<p>Kimchi is rich in vitamins A, B1, B2, and C. The fermentation process actually increases the bioavailability of these nutrients. The vegetables and spices also provide powerful antioxidants that fight oxidative stress.</p>

<h3>5. May Aid Weight Management</h3>

<p>Kimchi is low in calories (around 15 calories per 100g) but high in fibre, making it filling without contributing to weight gain. Some studies suggest that the probiotics in fermented foods may also influence metabolism and fat storage. Learn more in our <a href="/health/kimchi-weight-loss/">kimchi and weight loss</a> guide.</p>

<h3>6. Heart Health Benefits</h3>

<p>Research published in the Journal of Medicinal Food found that regular kimchi consumption may help reduce LDL cholesterol and blood pressure. The garlic in kimchi is particularly beneficial for cardiovascular health.</p>

<h3>7. Anti-Inflammatory Properties</h3>

<p>Chronic inflammation is linked to numerous diseases. Kimchi's probiotics produce short-chain fatty acids during fermentation, which have powerful anti-inflammatory effects.</p>

<h3>Nutritional Profile (per 100g)</h3>

<table>
<thead>
<tr><th>Nutrient</th><th>Amount</th><th>% Daily Value</th></tr>
</thead>
<tbody>
<tr><td>Calories</td><td>15 kcal</td><td>1%</td></tr>
<tr><td>Carbohydrates</td><td>2.4g</td><td>1%</td></tr>
<tr><td>Fibre</td><td>1.6g</td><td>6%</td></tr>
<tr><td>Protein</td><td>1.1g</td><td>2%</td></tr>
<tr><td>Fat</td><td>0.5g</td><td>1%</td></tr>
<tr><td>Sodium</td><td>498mg</td><td>22%</td></tr>
<tr><td>Vitamin A</td><td>18% DV</td><td>18%</td></tr>
<tr><td>Vitamin C</td><td>18% DV</td><td>18%</td></tr>
<tr><td>Vitamin K</td><td>21% DV</td><td>21%</td></tr>
<tr><td>Folate</td><td>8% DV</td><td>8%</td></tr>
</tbody>
</table>

<p>For detailed <a href="/health/kimchi-nutrition/">nutrition information and calorie counts</a>, see our complete breakdown.</p>

<h3>Potential Side Effects</h3>

<p>While kimchi is safe for most people, there are some considerations:</p>

<ul>
<li><strong>High sodium:</strong> Those monitoring salt intake should consume kimchi in moderation</li>
<li><strong>Digestive adjustment:</strong> If you're new to fermented foods, start with small amounts to allow your gut to adjust</li>
<li><strong>Histamine:</strong> Fermented foods contain histamine, which some people are sensitive to</li>
</ul>

<p>Learn more about <a href="/health/kimchi-side-effects/">kimchi side effects</a> and <a href="/health/how-much-kimchi/">how much kimchi to eat daily</a>.</p>

<h2 id="how-kimchi-is-made">How Kimchi is Made: The Fermentation Process</h2>

<p>Understanding how kimchi is made helps you appreciate both its flavour and its health benefits. The process involves several key stages:</p>

<h3>Stage 1: Salting (Jeolim)</h3>

<p>The vegetables (typically napa cabbage) are quartered and soaked in a salt brine or rubbed with salt. This draws out moisture, creating an environment hostile to harmful bacteria while allowing beneficial lactobacillus to thrive. This stage typically takes 6-12 hours.</p>

<h3>Stage 2: Rinsing and Draining</h3>

<p>The salted vegetables are thoroughly rinsed to remove excess salt, then drained. The cabbage should be wilted but still retain some crunch.</p>

<h3>Stage 3: Making the Paste (Yangnyeom)</h3>

<p>The signature <a href="/recipes/kimchi-paste/">kimchi paste</a> is prepared by blending or mixing gochugaru, garlic, ginger, fish sauce or salted shrimp, and often a rice flour paste. Some recipes include Asian pear, apple, or sugar for sweetness.</p>

<h3>Stage 4: Mixing (Beomuchigi)</h3>

<p>The paste is worked into every layer of the cabbage leaves by hand. This ensures even distribution of flavours and bacteria throughout the kimchi.</p>

<h3>Stage 5: Fermentation</h3>

<p>The kimchi is packed tightly into jars (traditionally clay pots called onggi), pressing out air bubbles. It then ferments at room temperature for 1-5 days before being refrigerated. Fermentation continues slowly in the refrigerator for weeks or months.</p>

<h3>The Science of Fermentation</h3>

<p>During fermentation, naturally present <em>Lactobacillus</em> bacteria convert sugars into lactic acid. This process:</p>

<ul>
<li>Creates the characteristic sour flavour</li>
<li>Preserves the vegetables naturally</li>
<li>Produces beneficial probiotics</li>
<li>Increases vitamin content</li>
<li>Develops complex umami flavours</li>
</ul>

<p>For a detailed guide to the <a href="/guides/kimchi-fermentation/">fermentation process</a>, including troubleshooting tips, see our dedicated article.</p>

<h2 id="how-to-make-kimchi">How to Make Kimchi at Home</h2>

<p>Making kimchi at home is surprisingly easy and immensely satisfying. Here's a simplified overview - for the complete step-by-step guide with detailed instructions, see our <a href="/recipes/traditional-kimchi-recipe/">traditional kimchi recipe</a>.</p>

<h3>Basic Equipment Needed</h3>

<ul>
<li>Large bowl for salting</li>
<li>Colander for draining</li>
<li>Food processor or blender (optional)</li>
<li>Rubber gloves (the paste stains!)</li>
<li>Clean glass jars with lids</li>
</ul>

<h3>Quick Overview Method</h3>

<p><strong>Step 1:</strong> Quarter a napa cabbage and soak in salt water for 6-12 hours.</p>

<p><strong>Step 2:</strong> Rinse thoroughly three times and drain well.</p>

<p><strong>Step 3:</strong> Make the paste: blend gochugaru, garlic, ginger, fish sauce, and rice flour paste.</p>

<p><strong>Step 4:</strong> Work the paste into every cabbage leaf, wearing gloves.</p>

<p><strong>Step 5:</strong> Pack tightly into clean jars, leaving space at the top.</p>

<p><strong>Step 6:</strong> Leave at room temperature for 1-5 days, then refrigerate.</p>

<h3>Tips for Success</h3>

<ul>
<li><strong>Taste as you go:</strong> The salting stage is crucial - properly salted cabbage should taste pleasantly salty, like crisps</li>
<li><strong>Keep it submerged:</strong> Push the kimchi below the liquid to prevent mould</li>
<li><strong>Burp your jars:</strong> Open the lid daily during room-temperature fermentation to release gases</li>
<li><strong>Be patient:</strong> Kimchi develops more complex flavours over time</li>
</ul>

<p>See also: <a href="/recipes/easy-kimchi-recipe/">Easy kimchi recipe for beginners</a>, <a href="/recipes/quick-kimchi/">Quick 24-hour kimchi</a>, and <a href="/recipes/small-batch-kimchi/">Small batch kimchi</a>.</p>

<h2 id="where-to-buy">Where to Buy Kimchi in the UK</h2>

<p>If you're not ready to make your own, there are plenty of options for buying quality kimchi in the UK. Here's your complete guide to finding <a href="/buy/best-kimchi-uk/">the best kimchi in the UK</a>:</p>

<h3>UK Supermarkets</h3>

<p>Most major <a href="/buy/supermarket-kimchi/">UK supermarkets</a> now stock kimchi:</p>

<h4>Tesco</h4>
<p>Stocks Lucky Foods and their own-brand kimchi in the Asian foods aisle. Prices range from £2.50-£4.00. Generally a reliable entry-level option.</p>

<h4>Sainsbury's</h4>
<p>Offers Yutaka kimchi and occasionally other brands. Look in the Asian foods section or world foods aisle.</p>

<h4>Waitrose</h4>
<p>Higher-end options including authentic Korean brands. More expensive but often better quality.</p>

<h4>M&S</h4>
<p>Seasonal kimchi offerings, typically good quality but limited availability.</p>

<h4>Asda</h4>
<p>Basic kimchi options at budget prices. Good for trying kimchi for the first time.</p>

<h3>Asian Supermarkets</h3>

<p>For authentic, traditionally-made kimchi, visit <a href="/buy/korean-supermarkets/">Korean supermarkets</a>:</p>

<ul>
<li><strong>H Mart:</strong> The largest Korean supermarket chain with stores in London. Excellent selection of fresh and jarred kimchi.</li>
<li><strong>SeeWoo:</strong> Chinese-Korean supermarket with locations in London and online delivery.</li>
<li><strong>Oseyo:</strong> Korean supermarket chain with stores across London.</li>
<li><strong>Wing Yip:</strong> Large Asian supermarket with stores in Birmingham, Manchester, and London.</li>
</ul>

<h3>Online Options</h3>

<ul>
<li><strong>Amazon UK:</strong> Wide selection including imported Korean brands</li>
<li><strong>Sous Chef:</strong> Premium Korean ingredients including artisan kimchi</li>
<li><strong>Japan Centre:</strong> Japanese and Korean foods with UK delivery</li>
<li><strong>Ollie's Kimchi:</strong> Authentic, handmade kimchi made in the UK - <a href="/shop/">shop now</a></li>
</ul>

<h3>Artisan UK Kimchi Makers</h3>

<p>Several small producers make excellent kimchi right here in the UK:</p>

<ul>
<li><strong>Ollie's Kimchi:</strong> Our own small-batch, traditionally fermented kimchi made with love</li>
<li><strong>Eaten Alive:</strong> Scottish producer of living fermented foods</li>
<li><strong>Loving Foods:</strong> Organic, raw kimchi made in the UK</li>
</ul>

<p>For <a href="/buy/kimchi-near-me/">kimchi near you</a>, check local farmers' markets and health food shops.</p>

<h2 id="storage">How to Store Kimchi</h2>

<p>Proper storage is essential for maintaining kimchi's quality and probiotic benefits. Here's everything you need to know about <a href="/guides/how-to-store-kimchi/">storing kimchi</a>:</p>

<h3>Refrigerator Storage</h3>

<p>The best way to store kimchi is in the refrigerator at around 4°C (39°F). This slows fermentation while allowing flavours to continue developing. Properly stored, kimchi will last for months in the fridge.</p>

<h3>Storage Tips</h3>

<ul>
<li><strong>Keep it airtight:</strong> Use jars with tight-fitting lids to prevent odour transfer to other foods</li>
<li><strong>Keep it submerged:</strong> Press the kimchi below the liquid level to prevent surface mould</li>
<li><strong>Use clean utensils:</strong> Always use clean chopsticks or a fork to remove kimchi, never your fingers</li>
<li><strong>Don't cross-contaminate:</strong> Don't put utensils used for other foods into your kimchi jar</li>
<li><strong>Store away from door:</strong> Place kimchi at the back of the fridge where temperature is most stable</li>
</ul>

<h3>Signs Kimchi Has Gone Off</h3>

<p>Kimchi is a fermented food, so sour flavours are normal. However, discard kimchi if you notice:</p>

<ul>
<li>Fuzzy mould on the surface</li>
<li>Slimy texture</li>
<li>Off-putting smells beyond normal pungency</li>
<li>Extremely mushy texture (some softening is normal)</li>
</ul>

<h3>Can You Freeze Kimchi?</h3>

<p>Yes, but freezing kills many of the beneficial probiotics. Frozen kimchi is still delicious for cooking but won't have the same health benefits. Freeze in portion sizes for convenient use.</p>

<h2 id="how-to-eat">How to Eat Kimchi: 15 Delicious Ideas</h2>

<p>Koreans eat kimchi with almost every meal, and there are countless ways to enjoy it. Here are some of the best ways to incorporate kimchi into your diet:</p>

<h3>Simple Serving Ideas</h3>

<ol>
<li><strong>As a side dish:</strong> The traditional way - serve a small portion alongside any meal</li>
<li><strong>With rice:</strong> Top hot white rice with kimchi for a simple, satisfying meal</li>
<li><strong>In a rice bowl:</strong> Add to bibimbap or any grain bowl</li>
<li><strong>With noodles:</strong> Stir into ramen, udon, or rice noodles</li>
<li><strong>On toast:</strong> Kimchi on buttered sourdough toast is surprisingly delicious</li>
</ol>

<h3>Cooked Kimchi Dishes</h3>

<ol start="6">
<li><strong><a href="/recipes/kimchi-fried-rice/">Kimchi Fried Rice</a>:</strong> The most popular way to use older, more sour kimchi</li>
<li><strong><a href="/recipes/kimchi-jjigae/">Kimchi Jjigae</a>:</strong> Traditional Korean kimchi stew with pork and tofu</li>
<li><strong><a href="/recipes/kimchi-pancakes/">Kimchi Pancakes</a>:</strong> Crispy Korean pancakes (kimchijeon)</li>
<li><strong><a href="/recipes/kimchi-dumplings/">Kimchi Dumplings</a>:</strong> Mandu filled with pork and kimchi</li>
<li><strong><a href="/recipes/kimchi-ramen/">Kimchi Ramen</a>:</strong> Instant noodles elevated with kimchi</li>
</ol>

<h3>Fusion Ideas</h3>

<ol start="11">
<li><strong><a href="/recipes/kimchi-grilled-cheese/">Kimchi Grilled Cheese</a>:</strong> The ultimate comfort food fusion</li>
<li><strong><a href="/recipes/kimchi-quesadilla/">Kimchi Quesadilla</a>:</strong> Korean-Mexican mashup</li>
<li><strong><a href="/recipes/kimchi-burger/">Kimchi Burger</a>:</strong> Top your burger with kimchi for a flavour explosion</li>
<li><strong><a href="/recipes/kimchi-eggs/">Kimchi Eggs</a>:</strong> Scrambled or fried eggs with kimchi</li>
<li><strong>Kimchi pizza topping:</strong> Works surprisingly well with cheese</li>
</ol>

<p>For more inspiration, see our complete guide on <a href="/uses/what-to-eat-with-kimchi/">what to eat with kimchi</a>.</p>

<h2 id="faqs">Frequently Asked Questions</h2>

<h3>Is kimchi vegan?</h3>

<p>Traditional kimchi contains fish sauce or salted shrimp, making it not vegan. However, <a href="/recipes/vegan-kimchi/">vegan kimchi</a> made without seafood products is widely available and easy to make at home.</p>

<h3>Is kimchi spicy?</h3>

<p>Classic baechu kimchi is spicy due to the gochugaru, but the heat level varies. You can adjust spiciness when making it at home, or try <a href="/recipes/white-kimchi/">white kimchi (baek kimchi)</a> for a non-spicy option.</p>

<h3>Is kimchi gluten-free?</h3>

<p>Most kimchi is naturally gluten-free, but some recipes include wheat-based ingredients like fish sauce that contains wheat, or flour in the paste. Always check labels if you're coeliac.</p>

<h3>How long does kimchi last?</h3>

<p>Unopened store-bought kimchi lasts until the best-by date. Once opened, or for homemade kimchi, it will keep for 3-6 months in the refrigerator. Kimchi doesn't go "off" quickly - it just continues to ferment and become more sour.</p>

<h3>Can I eat kimchi every day?</h3>

<p>Yes! Many Koreans eat kimchi at every meal. Start with small amounts (1-2 tablespoons) if you're new to fermented foods, and increase gradually. Learn more about <a href="/health/how-much-kimchi/">recommended daily amounts</a>.</p>

<h3>Is kimchi good for weight loss?</h3>

<p>Kimchi is low in calories and high in fibre, making it a great food for weight management. Some studies suggest the probiotics may support healthy metabolism. See our article on <a href="/health/kimchi-weight-loss/">kimchi and weight loss</a>.</p>

<h3>Can I eat kimchi while pregnant?</h3>

<p>Kimchi is generally safe during pregnancy when it's properly fermented and stored. However, consult your healthcare provider, especially regarding unpasteurised fermented foods. Read more in our <a href="/health/kimchi-pregnancy/">kimchi and pregnancy guide</a>.</p>

<h3>What's the difference between kimchi and sauerkraut?</h3>

<p>Both are fermented cabbage, but kimchi uses napa cabbage with spicy seasonings, while sauerkraut uses green cabbage with just salt. Kimchi has more complex flavours and typically more ingredients. See our full <a href="/health/kimchi-vs-sauerkraut/">kimchi vs sauerkraut</a> comparison.</p>

<h3>Where can I buy gochugaru in the UK?</h3>

<p>Korean red pepper flakes are available at Asian supermarkets, Amazon, and specialty food shops. See our complete <a href="/buy/gochugaru-uk/">gochugaru UK buying guide</a>.</p>

<h3>Why does my kimchi taste too sour?</h3>

<p>Over-fermented kimchi is more sour but perfectly safe to eat. Use it in cooked dishes like <a href="/recipes/kimchi-fried-rice/">kimchi fried rice</a> or <a href="/recipes/kimchi-jjigae/">kimchi jjigae</a>, where the sourness adds depth. To slow fermentation, ensure your fridge is cold enough (4°C or below).</p>

<h2 id="conclusion">Conclusion</h2>

<p>Kimchi is more than just a trendy health food - it's a delicious, versatile, and genuinely nutritious addition to any diet. Whether you buy it from your local supermarket, order from an artisan producer, or make it yourself, kimchi offers a unique combination of bold flavours and proven health benefits.</p>

<p>From its ancient origins in Korea to its current status as a global superfood, kimchi has stood the test of time. Its complex flavours, probiotic benefits, and incredible versatility make it a worthy addition to any kitchen.</p>

<p><strong>Ready to start your kimchi journey?</strong></p>

<ul>
<li><a href="/shop/">Buy authentic kimchi</a> from Ollie's Kimchi</li>
<li>Try our <a href="/recipes/traditional-kimchi-recipe/">traditional kimchi recipe</a></li>
<li>Learn about the <a href="/health/kimchi-benefits/">health benefits of kimchi</a></li>
<li>Explore <a href="/culture/types-of-kimchi/">different types of kimchi</a></li>
</ul>

<p><em>Have questions about kimchi? <a href="/contact/">Get in touch</a> - we love talking about fermented foods!</em></p>
`
}

// Schema.org structured data
const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://ollieskimchi.co.uk/kimchi/#article",
      "headline": article.title,
      "description": article.meta_description,
      "image": "https://ollieskimchi.co.uk/images/kimchi-guide-hero.jpg",
      "author": {
        "@type": "Organization",
        "name": "Ollie's Kimchi",
        "url": "https://ollieskimchi.co.uk"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ollie's Kimchi",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ollieskimchi.co.uk/logo.png"
        }
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ollieskimchi.co.uk/kimchi/"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://ollieskimchi.co.uk/kimchi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is kimchi vegan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional kimchi contains fish sauce or salted shrimp, making it not vegan. However, vegan kimchi made without seafood products is widely available and easy to make at home."
          }
        },
        {
          "@type": "Question",
          "name": "Is kimchi spicy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Classic baechu kimchi is spicy due to the gochugaru (Korean red pepper flakes), but the heat level varies. You can adjust spiciness when making it at home, or try white kimchi (baek kimchi) for a non-spicy option."
          }
        },
        {
          "@type": "Question",
          "name": "How long does kimchi last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unopened store-bought kimchi lasts until the best-by date. Once opened, or for homemade kimchi, it will keep for 3-6 months in the refrigerator. Kimchi doesn't go off quickly - it just continues to ferment and become more sour."
          }
        },
        {
          "@type": "Question",
          "name": "Can I eat kimchi every day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Many Koreans eat kimchi at every meal. Start with small amounts (1-2 tablespoons) if you're new to fermented foods, and increase gradually."
          }
        },
        {
          "@type": "Question",
          "name": "Is kimchi good for weight loss?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kimchi is low in calories and high in fibre, making it a great food for weight management. Some studies suggest the probiotics may support healthy metabolism."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between kimchi and sauerkraut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both are fermented cabbage, but kimchi uses napa cabbage with spicy seasonings, while sauerkraut uses green cabbage with just salt. Kimchi has more complex flavours and typically more ingredients."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ollieskimchi.co.uk/kimchi/#breadcrumb",
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
          "name": "Kimchi Guide",
          "item": "https://ollieskimchi.co.uk/kimchi/"
        }
      ]
    }
  ]
}

async function main() {
  console.log('Inserting P-001: The Ultimate Guide to Kimchi UK...\n')

  // Count words in content
  const wordCount = article.content.split(/\s+/).length
  console.log(`Word count: ${wordCount}`)

  await sql`
    INSERT INTO seo_articles (
      article_id,
      title,
      slug,
      meta_title,
      meta_description,
      primary_keyword,
      secondary_keywords,
      search_volume,
      word_count,
      content,
      excerpt,
      hero_image_alt,
      schema_type,
      schema_json,
      cluster,
      phase,
      status,
      internal_links,
      published_at
    ) VALUES (
      ${article.article_id},
      ${article.title},
      ${article.slug},
      ${article.meta_title},
      ${article.meta_description},
      ${article.primary_keyword},
      ${article.secondary_keywords},
      ${article.search_volume},
      ${wordCount},
      ${article.content},
      ${article.excerpt},
      ${article.hero_image_alt},
      ${article.schema_type},
      ${JSON.stringify(schemaJson)},
      ${article.cluster},
      ${article.phase},
      'published',
      ${article.internal_links},
      CURRENT_TIMESTAMP
    )
  `

  console.log('\nArticle P-001 inserted successfully!')
  console.log(`  Title: ${article.title}`)
  console.log(`  Slug: /${article.slug}/`)
  console.log(`  Primary keyword: ${article.primary_keyword}`)
  console.log(`  Search volume: ${article.search_volume.toLocaleString()}/month`)
  console.log(`  Word count: ${wordCount}`)
  console.log(`  Schema types: Article, FAQPage, BreadcrumbList`)
}

main().catch(console.error)
