/**
 * Insert Phase 2 Recipe Articles (R-002 to R-015)
 * Run with: DATABASE_URL="..." npx tsx scripts/insert-phase2-recipes.ts
 */

import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set')
  process.exit(1)
}

const sql = neon(DATABASE_URL)

const articles = [
  {
    article_id: 'R-002',
    title: 'How to Make Kimchi at Home: Complete Step-by-Step Guide',
    slug: 'recipes/how-to-make-kimchi',
    meta_title: 'How to Make Kimchi at Home | Easy Step-by-Step Guide',
    meta_description: 'Learn how to make authentic Korean kimchi at home with this easy guide. Step-by-step instructions, tips, and troubleshooting for perfect homemade kimchi.',
    primary_keyword: 'how to make kimchi',
    secondary_keywords: ['homemade kimchi', 'make kimchi at home', 'diy kimchi', 'kimchi making'],
    search_volume: 4400,
    cluster: 'recipes',
    phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'kimchi-fermentation', 'gochugaru-uk'],
    content: `
<p>Making <strong>kimchi at home</strong> is one of the most rewarding culinary projects you can undertake. This guide walks you through everything you need to know about <a href="/kimchi/">how to make kimchi</a> from scratch, with tips for success and common mistakes to avoid.</p>

<h2 id="why-homemade">Why Make Kimchi at Home?</h2>

<p>Homemade kimchi offers several advantages over shop-bought:</p>

<ul>
<li><strong>Freshness:</strong> You control exactly when fermentation stops</li>
<li><strong>Customisation:</strong> Adjust spice, salt, and ingredients to taste</li>
<li><strong>Probiotics:</strong> Fresh, unpasteurised kimchi has more live cultures</li>
<li><strong>Cost:</strong> Making your own is significantly cheaper per jar</li>
<li><strong>Satisfaction:</strong> Nothing beats the pride of homemade ferments</li>
</ul>

<h2 id="before-you-start">Before You Start</h2>

<h3>Essential Equipment</h3>
<ul>
<li>Large mixing bowl (at least 5 litres)</li>
<li>Colander for draining</li>
<li>Clean glass jars with lids (Mason or Kilner jars work perfectly)</li>
<li>Rubber gloves (gochugaru stains hands!)</li>
<li>Kitchen scales</li>
</ul>

<h3>Key Ingredients</h3>
<ul>
<li><strong>Napa cabbage</strong> - the traditional choice, available in most UK supermarkets</li>
<li><strong>Gochugaru</strong> - Korean red pepper flakes (<a href="/buy/gochugaru-uk/">where to buy in UK</a>)</li>
<li><strong>Fish sauce</strong> - Thai fish sauce from any supermarket works</li>
<li><strong>Garlic and ginger</strong> - fresh, not powdered</li>
<li><strong>Sea salt</strong> - coarse, without iodine</li>
</ul>

<h2 id="basic-process">The Basic Process</h2>

<p>Making kimchi involves five main stages:</p>

<h3>1. Salting (6-12 hours)</h3>
<p>The cabbage is salted to draw out moisture and create conditions for fermentation. This is the most time-consuming step but mostly passive - you're just waiting.</p>

<h3>2. Rinsing (15 minutes)</h3>
<p>After salting, rinse the cabbage thoroughly to remove excess salt. Taste test - it should be pleasantly salty, like crisps.</p>

<h3>3. Making the Paste (15 minutes)</h3>
<p>Blend garlic, ginger, fish sauce, and gochugaru into a thick paste. This is where the magic flavour comes from.</p>

<h3>4. Mixing (20 minutes)</h3>
<p>Work the paste into every layer of cabbage. Wear gloves - the paste stains!</p>

<h3>5. Fermenting (1-5 days)</h3>
<p>Pack into jars and let the beneficial bacteria do their work. Check our <a href="/guides/kimchi-fermentation/">fermentation guide</a> for detailed timing.</p>

<h2 id="step-by-step">Step-by-Step Instructions</h2>

<h3>Step 1: Prepare the Cabbage</h3>
<ol>
<li>Remove any damaged outer leaves</li>
<li>Cut the cabbage into quarters lengthwise, keeping the core intact</li>
<li>Make a 5cm cut into the core of each quarter (helps salt penetrate)</li>
</ol>

<h3>Step 2: Salt the Cabbage</h3>
<ol>
<li>Dissolve 50g salt in 1 litre of water to make a brine</li>
<li>Dip each cabbage quarter in the brine</li>
<li>Sprinkle additional salt (about 20g) between each leaf, focusing on the thick white parts</li>
<li>Place in a large bowl and leave for 6-12 hours (or overnight)</li>
<li>Turn the cabbage halfway through</li>
</ol>

<h3>Step 3: Make the Rice Paste</h3>
<ol>
<li>Whisk 3 tablespoons rice flour into 250ml water</li>
<li>Heat over medium heat, stirring constantly until it thickens</li>
<li>Stir in 1 tablespoon sugar</li>
<li>Let cool completely</li>
</ol>

<h3>Step 4: Make the Kimchi Paste</h3>
<ol>
<li>Blend or grate 8 cloves garlic and 20g fresh ginger</li>
<li>Mix with 30ml fish sauce and 20g shrimp paste (if using)</li>
<li>Add to the cooled rice paste</li>
<li>Stir in 50g gochugaru until you have a thick red paste</li>
</ol>

<h3>Step 5: Prepare Add-ins</h3>
<ol>
<li>Cut 200g Korean radish (or daikon) into thin matchsticks</li>
<li>Cut 4 spring onions into 5cm pieces</li>
<li>Mix vegetables into the paste</li>
</ol>

<h3>Step 6: Rinse the Cabbage</h3>
<ol>
<li>Rinse each cabbage quarter three times under cold running water</li>
<li>Gently squeeze out excess water</li>
<li>Let drain in a colander for 15-30 minutes</li>
</ol>

<h3>Step 7: Apply the Paste</h3>
<ol>
<li>Put on rubber gloves</li>
<li>Working leaf by leaf, spread paste onto every surface</li>
<li>Don't be shy - coat thoroughly but don't use all the paste on one quarter</li>
<li>Fold the outer leaf around to create a neat bundle</li>
</ol>

<h3>Step 8: Pack and Ferment</h3>
<ol>
<li>Pack tightly into clean glass jars</li>
<li>Press down firmly to remove air pockets</li>
<li>Leave 2.5cm headspace at the top</li>
<li>Spread any leftover paste on top</li>
<li>Close the lid loosely</li>
</ol>

<h2 id="fermentation">Fermentation Guide</h2>

<p>Leave at room temperature (18-22°C) for 1-5 days:</p>

<ul>
<li><strong>Day 1:</strong> Not much happening yet</li>
<li><strong>Day 2:</strong> Should start bubbling, taste becoming slightly tangy</li>
<li><strong>Day 3-4:</strong> Active fermentation, pleasantly sour</li>
<li><strong>Day 5+:</strong> Increasingly sour - refrigerate when you like the taste</li>
</ul>

<p><strong>Daily maintenance:</strong></p>
<ul>
<li>Press kimchi down to keep submerged</li>
<li>"Burp" the jars by briefly opening the lid</li>
<li>Taste test from day 2</li>
</ul>

<h2 id="troubleshooting">Common Problems & Solutions</h2>

<h3>Too salty?</h3>
<p>You didn't rinse enough. For next time, rinse more thoroughly. For this batch, soak pieces in cold water for 30 minutes before eating.</p>

<h3>Not fermenting?</h3>
<p>It's probably too cold. Move to a warmer spot. Fermentation can take up to a week in cool weather.</p>

<h3>Too sour?</h3>
<p>It fermented too long at room temperature. Use for cooking - sour kimchi is perfect for <a href="/recipes/kimchi-fried-rice/">fried rice</a> and <a href="/recipes/kimchi-jjigae/">stew</a>.</p>

<h3>White film on top?</h3>
<p>This is kahm yeast - harmless but affects flavour. Skim it off and ensure kimchi stays submerged.</p>

<h2 id="storage">Storage</h2>

<p>Once fermented to your liking, refrigerate immediately. Kimchi will keep for 3-6 months in the fridge, continuing to slowly ferment and develop flavour.</p>

<p>See our complete <a href="/guides/how-to-store-kimchi/">kimchi storage guide</a> for more tips.</p>

<h2 id="next-steps">Ready to Start?</h2>

<p>For a more detailed recipe with exact measurements, see our <a href="/recipes/traditional-kimchi-recipe/">traditional kimchi recipe</a>.</p>

<p>Not ready to make your own? <a href="/shop/">Try our handmade kimchi</a> - made fresh in the UK.</p>
`
  },
  {
    article_id: 'R-003',
    title: 'Easy Kimchi Recipe for Beginners: Simple & Delicious',
    slug: 'recipes/easy-kimchi-recipe',
    meta_title: 'Easy Kimchi Recipe for Beginners | Simple Homemade Kimchi',
    meta_description: 'Perfect for beginners! This easy kimchi recipe uses simple ingredients and techniques to make delicious homemade kimchi. Ready in 3 days.',
    primary_keyword: 'easy kimchi recipe',
    secondary_keywords: ['simple kimchi recipe', 'beginner kimchi', 'easy homemade kimchi', 'kimchi for beginners'],
    search_volume: 1200,
    cluster: 'recipes',
    phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'how-to-make-kimchi', 'gochugaru-uk'],
    content: `
<p>New to making <a href="/kimchi/">kimchi</a>? This <strong>easy kimchi recipe</strong> is perfect for beginners. We've simplified the traditional method without sacrificing authentic flavour, using ingredients you can find in UK supermarkets.</p>

<h2 id="why-easy">Why This Recipe is Perfect for Beginners</h2>

<ul>
<li><strong>Simplified salting:</strong> Uses a brine method instead of dry salting</li>
<li><strong>UK-friendly ingredients:</strong> Everything available in regular supermarkets</li>
<li><strong>Smaller batch:</strong> Less commitment while you learn</li>
<li><strong>Quick ferment:</strong> Ready in 2-3 days</li>
<li><strong>Forgiving:</strong> Hard to mess up!</li>
</ul>

<h2 id="ingredients">Ingredients</h2>

<p><strong>Makes approximately 500g</strong></p>

<ul>
<li>500g napa cabbage (half a medium head)</li>
<li>2 tablespoons sea salt</li>
<li>500ml water</li>
<li>2 tablespoons gochugaru (Korean red pepper flakes) - or 1 tbsp sweet paprika + 1/2 tsp cayenne</li>
<li>1 tablespoon fish sauce (or soy sauce for vegetarian)</li>
<li>1 teaspoon sugar</li>
<li>3 cloves garlic, minced</li>
<li>1 teaspoon fresh ginger, grated</li>
<li>2 spring onions, chopped</li>
</ul>

<h2 id="equipment">Equipment Needed</h2>

<ul>
<li>Large bowl</li>
<li>Clean 500ml glass jar with lid</li>
<li>Rubber gloves (optional but recommended)</li>
</ul>

<h2 id="instructions">Instructions</h2>

<h3>Step 1: Brine the Cabbage (2-4 hours)</h3>

<ol>
<li>Cut cabbage into 5cm pieces</li>
<li>Dissolve salt in water to make a brine</li>
<li>Submerge cabbage in brine with a plate to keep it down</li>
<li>Leave for 2-4 hours at room temperature</li>
</ol>

<h3>Step 2: Make the Paste (5 minutes)</h3>

<ol>
<li>While cabbage brines, mix all the paste ingredients in a bowl:</li>
<li>Gochugaru + fish sauce + sugar + garlic + ginger</li>
<li>Stir into a thick paste</li>
</ol>

<h3>Step 3: Drain and Mix (10 minutes)</h3>

<ol>
<li>Drain the cabbage (save a little brine)</li>
<li>Give it a quick rinse and squeeze out excess water</li>
<li>Add spring onions to the cabbage</li>
<li>Add the paste and mix thoroughly (use gloves!)</li>
<li>Massage the paste into the cabbage for 2-3 minutes</li>
</ol>

<h3>Step 4: Pack and Ferment (2-3 days)</h3>

<ol>
<li>Pack tightly into your jar</li>
<li>Press down firmly - no air pockets</li>
<li>Leave 2cm space at the top</li>
<li>Add a splash of saved brine if needed to keep cabbage covered</li>
<li>Close lid loosely</li>
<li>Leave at room temperature for 2-3 days</li>
<li>Press down and taste daily</li>
<li>Refrigerate when tangy enough for your taste</li>
</ol>

<h2 id="tips">Tips for Success</h2>

<ul>
<li><strong>Taste before refrigerating:</strong> Everyone's "done" is different - some like it fresh and crunchy, others prefer more sour</li>
<li><strong>Press it down:</strong> Keep the cabbage under the liquid to prevent mould</li>
<li><strong>Burp the jar:</strong> Open briefly each day to release fermentation gases</li>
<li><strong>Room temperature matters:</strong> Warmer = faster fermentation</li>
</ul>

<h2 id="variations">Easy Variations</h2>

<h3>Less Spicy</h3>
<p>Use 1 tablespoon gochugaru instead of 2, or try <a href="/recipes/white-kimchi/">white kimchi</a>.</p>

<h3>Vegan</h3>
<p>Replace fish sauce with 1.5 tablespoons soy sauce. See our <a href="/recipes/vegan-kimchi/">vegan kimchi recipe</a>.</p>

<h3>Extra Crunchy</h3>
<p>Add julienned carrots or daikon radish with the spring onions.</p>

<h2 id="next-level">Ready for the Next Level?</h2>

<p>Once you've mastered this easy version, try our <a href="/recipes/traditional-kimchi-recipe/">traditional kimchi recipe</a> for an even more authentic result.</p>

<p>Or explore other <a href="/culture/types-of-kimchi/">types of kimchi</a> like cucumber kimchi or radish kimchi.</p>
`
  },
  {
    article_id: 'R-004',
    title: 'Quick Kimchi Recipe: Ready in 24 Hours (Geotjeori)',
    slug: 'recipes/quick-kimchi',
    meta_title: 'Quick Kimchi Recipe | Fresh Kimchi Ready in 24 Hours',
    meta_description: 'Need kimchi fast? This quick kimchi recipe (geotjeori) is ready in just 24 hours. Fresh, crunchy, and bursting with flavour - no long fermentation required.',
    primary_keyword: 'quick kimchi',
    secondary_keywords: ['fast kimchi recipe', 'fresh kimchi', 'geotjeori', '24 hour kimchi', 'instant kimchi'],
    search_volume: 800,
    cluster: 'recipes',
    phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'easy-kimchi-recipe'],
    content: `
<p>Need <a href="/kimchi/">kimchi</a> but don't have days to wait? This <strong>quick kimchi</strong> recipe (called geotjeori in Korean) is ready in just 24 hours - or even immediately if you're really impatient!</p>

<p>Unlike traditional fermented kimchi, quick kimchi is fresh, extra crunchy, and has a brighter, lighter flavour. It's a popular side dish in Korea, especially in summer.</p>

<h2 id="what-is-geotjeori">What is Geotjeori?</h2>

<p>Geotjeori (겉절이) means "fresh kimchi" - it's dressed kimchi that's meant to be eaten immediately or within a few days, before full fermentation develops. Think of it as a spicy Korean salad.</p>

<h3>Quick Kimchi vs Traditional Kimchi</h3>

<table>
<thead>
<tr><th>Feature</th><th>Quick Kimchi</th><th>Traditional Kimchi</th></tr>
</thead>
<tbody>
<tr><td>Time</td><td>1-24 hours</td><td>3-14 days</td></tr>
<tr><td>Texture</td><td>Very crunchy</td><td>Softer, more wilted</td></tr>
<tr><td>Flavour</td><td>Fresh, spicy</td><td>Sour, complex</td></tr>
<tr><td>Probiotics</td><td>Minimal</td><td>High</td></tr>
<tr><td>Shelf life</td><td>1-2 weeks</td><td>Months</td></tr>
</tbody>
</table>

<h2 id="ingredients">Ingredients</h2>

<p><strong>Makes 4 servings</strong></p>

<ul>
<li>300g napa cabbage, chopped into bite-sized pieces</li>
<li>1 tablespoon sea salt</li>
<li>2 tablespoons gochugaru</li>
<li>1 tablespoon fish sauce</li>
<li>1 teaspoon sugar</li>
<li>2 cloves garlic, minced</li>
<li>1 teaspoon sesame oil</li>
<li>1 teaspoon sesame seeds</li>
<li>2 spring onions, sliced</li>
</ul>

<h2 id="instructions">Instructions</h2>

<h3>30-Minute Method (Immediate Eating)</h3>

<ol>
<li>Toss chopped cabbage with salt in a bowl</li>
<li>Let sit for 20 minutes while you prepare other ingredients</li>
<li>Rinse briefly and squeeze out water</li>
<li>Mix all seasonings together to form a paste</li>
<li>Toss cabbage with paste and spring onions</li>
<li>Add sesame oil and seeds</li>
<li>Serve immediately!</li>
</ol>

<h3>24-Hour Method (Lightly Fermented)</h3>

<ol>
<li>Follow the same steps above</li>
<li>Instead of serving immediately, pack into a container</li>
<li>Leave at room temperature for 1 hour</li>
<li>Then refrigerate for 24 hours</li>
<li>This allows light fermentation for tangier flavour</li>
</ol>

<h2 id="serving">Best Ways to Serve Quick Kimchi</h2>

<ul>
<li><strong>As a side dish:</strong> Perfect alongside grilled meats or fish</li>
<li><strong>With BBQ:</strong> The fresh crunch pairs brilliantly with Korean BBQ</li>
<li><strong>On noodles:</strong> Top cold noodle dishes or ramen</li>
<li><strong>In wraps:</strong> Add to lettuce wraps (ssam) with grilled pork</li>
<li><strong>With rice:</strong> Simply serve alongside steamed rice</li>
</ul>

<h2 id="variations">Quick Variations</h2>

<h3>Cucumber Quick Kimchi</h3>
<p>Use sliced cucumbers instead of cabbage - perfect for summer!</p>

<h3>Extra Spicy</h3>
<p>Add a sliced fresh red chilli or extra gochugaru.</p>

<h3>Sweeter Version</h3>
<p>Add a small grated Asian pear or apple for natural sweetness.</p>

<h2 id="storage">Storage</h2>

<p>Quick kimchi keeps in the refrigerator for 1-2 weeks. It will slowly ferment over time, becoming more like traditional kimchi - still delicious, just different!</p>

<p>Want the full-flavoured fermented version? Try our <a href="/recipes/traditional-kimchi-recipe/">traditional kimchi recipe</a> instead.</p>
`
  },
  {
    article_id: 'R-005',
    title: 'Vegan Kimchi Recipe: Authentic Flavour Without Fish Sauce',
    slug: 'recipes/vegan-kimchi',
    meta_title: 'Vegan Kimchi Recipe | Fish-Free Authentic Korean Kimchi',
    meta_description: 'Delicious vegan kimchi recipe without fish sauce or shrimp paste. All the authentic Korean flavour using plant-based umami alternatives.',
    primary_keyword: 'vegan kimchi',
    secondary_keywords: ['vegan kimchi recipe', 'vegetarian kimchi', 'fish free kimchi', 'plant based kimchi'],
    search_volume: 880,
    cluster: 'recipes',
    phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'kimchi-benefits'],
    content: `
<p>Traditional <a href="/kimchi/">kimchi</a> contains fish sauce or fermented shrimp, but this <strong>vegan kimchi</strong> recipe delivers the same authentic Korean flavour using plant-based alternatives. No compromise on taste!</p>

<h2 id="why-not-vegan">Why Traditional Kimchi Isn't Vegan</h2>

<p>Classic kimchi recipes include:</p>
<ul>
<li><strong>Fish sauce</strong> (액젓) - fermented anchovy sauce</li>
<li><strong>Saeujeot</strong> (새우젓) - salted fermented shrimp</li>
</ul>

<p>These provide the deep umami flavour characteristic of kimchi. The good news? We can replicate that umami with plant-based ingredients.</p>

<h2 id="umami-alternatives">Plant-Based Umami Alternatives</h2>

<table>
<thead>
<tr><th>Traditional</th><th>Vegan Alternative</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Fish sauce</td><td>Soy sauce or tamari</td><td>Use Korean soup soy sauce (gukganjang) if available</td></tr>
<tr><td>Shrimp paste</td><td>White miso paste</td><td>Adds similar fermented depth</td></tr>
<tr><td>Either</td><td>Dried kelp (kombu)</td><td>Soak in water to make umami-rich liquid</td></tr>
</tbody>
</table>

<h2 id="ingredients">Ingredients</h2>

<p><strong>Makes approximately 1kg</strong></p>

<h3>For the Cabbage</h3>
<ul>
<li>1 large napa cabbage (1.5kg)</li>
<li>60g sea salt</li>
</ul>

<h3>For the Vegan Paste</h3>
<ul>
<li>50g gochugaru (Korean red pepper flakes)</li>
<li>3 tablespoons soy sauce or tamari</li>
<li>1 tablespoon white miso paste</li>
<li>1 tablespoon sugar</li>
<li>6 cloves garlic, minced</li>
<li>15g fresh ginger, grated</li>
<li>3 tablespoons rice flour mixed with 200ml water (for paste)</li>
</ul>

<h3>Vegetables</h3>
<ul>
<li>150g Korean radish or daikon, julienned</li>
<li>4 spring onions, cut into 5cm pieces</li>
</ul>

<h2 id="instructions">Instructions</h2>

<h3>Step 1: Salt the Cabbage</h3>
<ol>
<li>Quarter the cabbage lengthwise</li>
<li>Sprinkle salt between each leaf, focusing on thick white parts</li>
<li>Leave for 6-8 hours, turning halfway</li>
<li>Rinse three times and squeeze dry</li>
</ol>

<h3>Step 2: Make Rice Paste</h3>
<ol>
<li>Cook rice flour and water over medium heat until thickened</li>
<li>Stir in sugar and let cool completely</li>
</ol>

<h3>Step 3: Make Vegan Kimchi Paste</h3>
<ol>
<li>Blend garlic, ginger, soy sauce, and miso until smooth</li>
<li>Mix with cooled rice paste</li>
<li>Stir in gochugaru until well combined</li>
<li>Add julienned radish and spring onions</li>
</ol>

<h3>Step 4: Combine</h3>
<ol>
<li>Wearing gloves, work paste into every cabbage leaf</li>
<li>Fold into bundles</li>
<li>Pack tightly into clean jars</li>
</ol>

<h3>Step 5: Ferment</h3>
<ol>
<li>Leave at room temperature 2-4 days</li>
<li>Press down daily, taste from day 2</li>
<li>Refrigerate when tangy enough</li>
</ol>

<h2 id="tips">Tips for Best Vegan Kimchi</h2>

<ul>
<li><strong>Use good miso:</strong> White (shiro) miso is milder and better for kimchi than red miso</li>
<li><strong>Kelp boost:</strong> For extra umami, soak a piece of kombu in water overnight and use that water in the paste</li>
<li><strong>Check your gochugaru:</strong> Most gochugaru is naturally vegan, but always check the label</li>
<li><strong>Give it time:</strong> Vegan kimchi benefits from longer fermentation - the flavours really develop</li>
</ul>

<h2 id="health-benefits">Health Benefits</h2>

<p>Vegan kimchi offers all the <a href="/health/kimchi-benefits/">probiotic benefits</a> of traditional kimchi, plus it's:</p>
<ul>
<li>Lower in sodium (no fish sauce)</li>
<li>Free from common allergens (fish, shellfish)</li>
<li>Suitable for those with fish allergies</li>
<li>Just as rich in fermented goodness</li>
</ul>

<h2 id="buying-vegan">Where to Buy Vegan Kimchi UK</h2>

<p>If you prefer to buy rather than make, look for "vegan" on the label. See our <a href="/buy/best-kimchi-uk/">UK kimchi buying guide</a> for recommended brands.</p>

<p>Many supermarket kimchis contain fish sauce, so always check ingredients carefully.</p>
`
  },
  {
    article_id: 'R-006',
    title: 'White Kimchi Recipe (Baek Kimchi): Non-Spicy Korean Fermented Cabbage',
    slug: 'recipes/white-kimchi',
    meta_title: 'White Kimchi Recipe (Baek Kimchi) | Non-Spicy Korean Kimchi',
    meta_description: 'White kimchi (baek kimchi) is the non-spicy version of Korean kimchi. Perfect for those who love fermented foods but can\'t handle the heat.',
    primary_keyword: 'white kimchi',
    secondary_keywords: ['baek kimchi', 'non spicy kimchi', 'mild kimchi', 'white kimchi recipe'],
    search_volume: 590,
    cluster: 'recipes',
    phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'types-of-kimchi'],
    content: `
<p>Not everyone can handle spicy food, but everyone deserves to enjoy <a href="/kimchi/">kimchi</a>! <strong>White kimchi</strong> (baek kimchi/백김치) is the traditional non-spicy version - no gochugaru, no heat, just pure fermented deliciousness.</p>

<h2 id="what-is-white-kimchi">What is White Kimchi?</h2>

<p>Baek kimchi translates to "white kimchi" - it's made without any chilli peppers. Instead, it relies on garlic, ginger, and pine nuts for flavour, creating a clean, refreshing fermented vegetable dish.</p>

<p>The brine from white kimchi is particularly prized - it's often drunk as a digestive aid or used as a base for cold noodle soups.</p>

<h3>Who is White Kimchi For?</h3>
<ul>
<li>People who can't tolerate spicy food</li>
<li>Children being introduced to fermented foods</li>
<li>Anyone with digestive sensitivities to capsaicin</li>
<li>Those who simply prefer milder flavours</li>
<li>Hot summer days when you want something refreshing</li>
</ul>

<h2 id="ingredients">Ingredients</h2>

<p><strong>Makes approximately 1kg</strong></p>

<h3>For the Cabbage</h3>
<ul>
<li>1 medium napa cabbage (1kg)</li>
<li>50g sea salt</li>
<li>1 litre water</li>
</ul>

<h3>For the Filling</h3>
<ul>
<li>100g Korean radish, julienned</li>
<li>2 spring onions, cut into 3cm pieces</li>
<li>3 fresh red dates (jujubes), sliced - optional</li>
<li>1 tablespoon pine nuts</li>
<li>3 cloves garlic, thinly sliced</li>
<li>10g fresh ginger, thinly sliced</li>
</ul>

<h3>For the Brine</h3>
<ul>
<li>1 litre water</li>
<li>2 tablespoons sea salt</li>
<li>1 tablespoon sugar</li>
<li>2 tablespoons rice flour</li>
</ul>

<h2 id="instructions">Instructions</h2>

<h3>Step 1: Salt the Cabbage</h3>
<ol>
<li>Quarter the cabbage, keeping core intact</li>
<li>Dissolve salt in water to make brine</li>
<li>Soak cabbage in brine for 6-8 hours</li>
<li>Rinse thoroughly and squeeze dry</li>
</ol>

<h3>Step 2: Make the Brine</h3>
<ol>
<li>Whisk rice flour into 250ml of the water</li>
<li>Heat until thickened, then add remaining water</li>
<li>Stir in salt and sugar</li>
<li>Let cool completely</li>
</ol>

<h3>Step 3: Prepare Filling</h3>
<ol>
<li>Mix julienned radish, spring onions, dates, pine nuts, garlic, and ginger</li>
</ol>

<h3>Step 4: Assemble</h3>
<ol>
<li>Take each cabbage quarter and place a small amount of filling between each leaf</li>
<li>Fold the outer leaf around to form a neat parcel</li>
<li>Pack parcels into a large jar or container</li>
</ol>

<h3>Step 5: Add Brine and Ferment</h3>
<ol>
<li>Pour the cooled brine over the cabbage until covered</li>
<li>Weigh down with a small plate to keep cabbage submerged</li>
<li>Cover loosely and leave at room temperature for 2-3 days</li>
<li>Refrigerate once slightly tangy</li>
</ol>

<h2 id="taste">What Does White Kimchi Taste Like?</h2>

<p>White kimchi has a:</p>
<ul>
<li><strong>Clean, refreshing</strong> fermented flavour</li>
<li><strong>Subtle sweetness</strong> from the dates and natural sugars</li>
<li><strong>Mild garlic and ginger</strong> notes</li>
<li><strong>Pleasant tanginess</strong> from fermentation</li>
<li><strong>Crisp texture</strong> - often crunchier than red kimchi</li>
</ul>

<h2 id="serving">Serving Suggestions</h2>

<ul>
<li><strong>As a side dish:</strong> Serve alongside any Korean meal</li>
<li><strong>With cold noodles:</strong> The brine makes an excellent soup base</li>
<li><strong>For children:</strong> A gentle introduction to fermented foods</li>
<li><strong>With rich foods:</strong> The clean flavour cuts through fatty dishes</li>
</ul>

<h2 id="storage">Storage</h2>

<p>White kimchi keeps for 2-3 weeks in the refrigerator. Unlike red kimchi, it doesn't improve as much with age - it's best enjoyed relatively fresh.</p>

<p>Want to try the classic version? See our <a href="/recipes/traditional-kimchi-recipe/">traditional kimchi recipe</a>.</p>
`
  },
  {
    article_id: 'R-007',
    title: 'Radish Kimchi Recipe (Kkakdugi): Cubed Korean Radish Kimchi',
    slug: 'recipes/radish-kimchi',
    meta_title: 'Radish Kimchi Recipe (Kkakdugi) | Cubed Korean Kimchi',
    meta_description: 'Make authentic kkakdugi (Korean cubed radish kimchi) at home. Crunchy, spicy, and perfect as a side dish or with soups and stews.',
    primary_keyword: 'radish kimchi',
    secondary_keywords: ['kkakdugi', 'korean radish kimchi', 'cubed radish kimchi', 'kkakdugi recipe'],
    search_volume: 720,
    cluster: 'recipes',
    phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'types-of-kimchi'],
    content: `
<p><strong>Kkakdugi</strong> (깍두기) is the beloved cubed radish <a href="/kimchi/">kimchi</a> that's served alongside soups and stews in Korean restaurants. Its satisfying crunch and bold flavour make it a favourite side dish.</p>

<h2 id="what-is-kkakdugi">What is Kkakdugi?</h2>

<p>Kkakdugi is made from Korean radish (mu) cut into bite-sized cubes and fermented with the classic kimchi seasonings. The name comes from the sound of cutting the radish - "kkakduk kkakduk"!</p>

<p>It's traditionally served with:</p>
<ul>
<li><strong>Seolleongtang</strong> - ox bone soup</li>
<li><strong>Samgyetang</strong> - ginseng chicken soup</li>
<li><strong>Beef stews</strong> and other hearty dishes</li>
<li><strong>Rice bowls</strong> - adds crunch and flavour</li>
</ul>

<h2 id="ingredients">Ingredients</h2>

<p><strong>Makes approximately 1kg</strong></p>

<h3>Main Ingredient</h3>
<ul>
<li>1kg Korean radish (mu) or daikon - peeled and cut into 2cm cubes</li>
<li>1 tablespoon sea salt</li>
<li>1 tablespoon sugar</li>
</ul>

<h3>For the Paste</h3>
<ul>
<li>3 tablespoons gochugaru</li>
<li>2 tablespoons fish sauce</li>
<li>1 tablespoon salted shrimp (saeujeot) - or extra fish sauce</li>
<li>4 cloves garlic, minced</li>
<li>1 teaspoon ginger, grated</li>
<li>3 spring onions, chopped</li>
</ul>

<h2 id="instructions">Instructions</h2>

<h3>Step 1: Salt the Radish</h3>
<ol>
<li>Cut radish into 2cm cubes</li>
<li>Toss with salt and sugar</li>
<li>Let sit for 30 minutes - radish will release liquid</li>
<li>Don't drain - we'll use this liquid!</li>
</ol>

<h3>Step 2: Make the Paste</h3>
<ol>
<li>Mix gochugaru, fish sauce, salted shrimp, garlic, and ginger</li>
<li>Add spring onions</li>
</ol>

<h3>Step 3: Combine</h3>
<ol>
<li>Add paste to the salted radish cubes</li>
<li>Mix thoroughly with gloved hands</li>
<li>The liquid from the radish helps distribute the paste</li>
</ol>

<h3>Step 4: Pack and Ferment</h3>
<ol>
<li>Pack into a clean jar or container</li>
<li>Press down firmly to remove air and submerge in liquid</li>
<li>Cover loosely</li>
<li>Ferment at room temperature for 2-3 days</li>
<li>Refrigerate when tangy enough</li>
</ol>

<h2 id="tips">Tips for Perfect Kkakdugi</h2>

<ul>
<li><strong>Choose fresh radish:</strong> It should feel heavy and firm, with smooth skin</li>
<li><strong>Cube size matters:</strong> 2cm is ideal - smaller dries out, larger doesn't absorb flavour</li>
<li><strong>Don't over-salt:</strong> Radish releases a lot of natural liquid</li>
<li><strong>Keep submerged:</strong> The cubes float - press down daily</li>
</ul>

<h2 id="radish-types">Korean Radish vs Daikon</h2>

<table>
<thead>
<tr><th>Korean Radish (Mu)</th><th>Daikon</th></tr>
</thead>
<tbody>
<tr><td>Shorter, rounder</td><td>Long, cylindrical</td></tr>
<tr><td>Denser, crunchier</td><td>Slightly softer</td></tr>
<tr><td>Stays crunchy longer</td><td>May soften quicker</td></tr>
<tr><td>Asian supermarkets</td><td>Most supermarkets</td></tr>
</tbody>
</table>

<p>Both work well for kkakdugi. Korean radish is traditional, but daikon is easier to find in UK supermarkets.</p>

<h2 id="storage">Storage</h2>

<p>Kkakdugi keeps for 2-3 months in the refrigerator. It actually improves over the first few weeks as flavours develop and meld together.</p>

<p>Explore more <a href="/culture/types-of-kimchi/">types of kimchi</a> to expand your fermentation repertoire.</p>
`
  },
  {
    article_id: 'R-008',
    title: 'Cucumber Kimchi Recipe (Oi Sobagi): Refreshing Summer Kimchi',
    slug: 'recipes/cucumber-kimchi',
    meta_title: 'Cucumber Kimchi Recipe (Oi Sobagi) | Summer Korean Kimchi',
    meta_description: 'Make refreshing cucumber kimchi (oi sobagi) - the perfect summer ferment. Quick to make, ready in 1-2 days, and incredibly crisp and delicious.',
    primary_keyword: 'cucumber kimchi',
    secondary_keywords: ['oi sobagi', 'korean cucumber kimchi', 'stuffed cucumber kimchi', 'summer kimchi'],
    search_volume: 480,
    cluster: 'recipes',
    phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'quick-kimchi', 'types-of-kimchi'],
    content: `
<p><strong>Oi sobagi</strong> (오이소박이) is the refreshing cucumber <a href="/kimchi/">kimchi</a> that Koreans crave in summer. The cucumbers are scored and stuffed with a spicy filling, then quickly fermented for an incredibly crisp, flavourful result.</p>

<h2 id="why-cucumber-kimchi">Why Make Cucumber Kimchi?</h2>

<ul>
<li><strong>Quick fermentation:</strong> Ready in just 1-2 days</li>
<li><strong>Incredibly refreshing:</strong> Perfect for hot weather</li>
<li><strong>Beautiful presentation:</strong> The stuffed cucumbers look impressive</li>
<li><strong>Maximum crunch:</strong> More texture than cabbage kimchi</li>
</ul>

<h2 id="cucumber-types">Best Cucumbers for Kimchi</h2>

<p>Not all cucumbers work equally well:</p>

<ul>
<li><strong>Korean cucumbers (oi):</strong> Ideal - thin skin, fewer seeds. Found in Asian supermarkets</li>
<li><strong>Persian/mini cucumbers:</strong> Excellent UK substitute - similar size and crunch</li>
<li><strong>Kirby cucumbers:</strong> Good option, sturdy and crunchy</li>
<li><strong>Regular cucumbers:</strong> Too watery - avoid these</li>
</ul>

<h2 id="ingredients">Ingredients</h2>

<p><strong>Makes 8 stuffed cucumbers</strong></p>

<h3>Cucumbers</h3>
<ul>
<li>8 Korean or Persian cucumbers (about 500g)</li>
<li>2 tablespoons sea salt</li>
</ul>

<h3>Filling</h3>
<ul>
<li>50g Korean chives or regular chives, finely chopped</li>
<li>2 tablespoons gochugaru</li>
<li>1 tablespoon fish sauce</li>
<li>1 tablespoon minced garlic</li>
<li>1 teaspoon sugar</li>
<li>1 teaspoon sesame seeds</li>
</ul>

<h2 id="instructions">Instructions</h2>

<h3>Step 1: Prepare Cucumbers</h3>
<ol>
<li>Wash cucumbers and trim ends</li>
<li>Cut a deep cross into each cucumber, stopping 1cm from each end (so it stays connected)</li>
<li>Sprinkle salt into the cuts and over the outside</li>
<li>Let sit for 30-60 minutes until slightly wilted</li>
<li>Rinse briefly and gently squeeze out excess water</li>
</ol>

<h3>Step 2: Make the Filling</h3>
<ol>
<li>Mix chopped chives with gochugaru, fish sauce, garlic, sugar, and sesame seeds</li>
<li>Let sit for 10 minutes for flavours to meld</li>
</ol>

<h3>Step 3: Stuff the Cucumbers</h3>
<ol>
<li>Gently open the cuts in each cucumber</li>
<li>Stuff generously with the chive filling</li>
<li>Press closed gently</li>
</ol>

<h3>Step 4: Ferment</h3>
<ol>
<li>Arrange stuffed cucumbers in a container in a single layer</li>
<li>Cover and leave at room temperature for 6-12 hours</li>
<li>Refrigerate and enjoy within 1 week (they lose crunch over time)</li>
</ol>

<h2 id="serving">How to Serve</h2>

<p>Cucumber kimchi can be served whole or sliced:</p>
<ul>
<li><strong>Whole:</strong> Traditional presentation, beautiful on the plate</li>
<li><strong>Sliced into rounds:</strong> Easier to eat, reveals the pretty filling</li>
<li><strong>With cold noodles:</strong> Classic summer pairing</li>
<li><strong>With BBQ:</strong> The cool crunch contrasts with hot grilled meats</li>
</ul>

<h2 id="tips">Tips for Success</h2>

<ul>
<li><strong>Don't skip salting:</strong> This draws out water and prevents soggy kimchi</li>
<li><strong>Stuff generously:</strong> The filling is the best part!</li>
<li><strong>Eat quickly:</strong> Unlike cabbage kimchi, this doesn't improve with age</li>
<li><strong>Keep cold:</strong> Refrigerate as soon as it's tangy enough</li>
</ul>

<h2 id="variations">Quick Variation: Sliced Cucumber Kimchi</h2>

<p>Short on time? Simply slice cucumbers into rounds, salt briefly, then toss with the filling ingredients. Ready in 30 minutes!</p>

<p>For more quick options, try our <a href="/recipes/quick-kimchi/">quick kimchi recipe</a>.</p>
`
  }
]

async function main() {
  console.log('Inserting Phase 2 Recipe Articles...\n')

  let totalWords = 0

  for (const article of articles) {
    const wordCount = article.content.split(/\s+/).length
    totalWords += wordCount

    try {
      await sql`
        INSERT INTO seo_articles (
          article_id, title, slug, meta_title, meta_description,
          primary_keyword, secondary_keywords, search_volume, word_count,
          content, cluster, phase, status, internal_links, published_at
        ) VALUES (
          ${article.article_id}, ${article.title}, ${article.slug},
          ${article.meta_title}, ${article.meta_description},
          ${article.primary_keyword}, ${article.secondary_keywords},
          ${article.search_volume}, ${wordCount}, ${article.content},
          ${article.cluster}, ${article.phase}, 'published',
          ${article.internal_links}, CURRENT_TIMESTAMP
        )
      `
      console.log(`✓ ${article.article_id}: ${article.title} (${wordCount} words)`)
    } catch (error) {
      console.error(`✗ ${article.article_id}: ${error}`)
    }
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`Inserted ${articles.length} articles | ${totalWords.toLocaleString()} total words`)
}

main().catch(console.error)
