/**
 * Insert Phase 2 Recipe Articles Batch 2 (R-009 to R-015)
 */

import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL
if (!DATABASE_URL) { console.error('DATABASE_URL not set'); process.exit(1) }
const sql = neon(DATABASE_URL)

const articles = [
  {
    article_id: 'R-009',
    title: 'Water Kimchi Recipe (Mul Kimchi): Light & Refreshing Korean Ferment',
    slug: 'recipes/water-kimchi',
    meta_title: 'Water Kimchi Recipe (Mul Kimchi) | Light Korean Ferment',
    meta_description: 'Make mul kimchi - the refreshing Korean water kimchi with tangy brine. Perfect for summer, the probiotic liquid is often drunk as a digestive aid.',
    primary_keyword: 'water kimchi',
    secondary_keywords: ['mul kimchi', 'korean water kimchi', 'dongchimi', 'kimchi soup'],
    search_volume: 320,
    cluster: 'recipes', phase: 2,
    internal_links: ['kimchi', 'white-kimchi', 'types-of-kimchi'],
    content: `
<p><strong>Water kimchi</strong> (mul kimchi/물김치) is a mild, soupy <a href="/kimchi/">kimchi</a> where vegetables float in a tangy, slightly sweet brine. The liquid is as prized as the vegetables - often drunk as a refreshing probiotic beverage.</p>

<h2 id="types">Types of Water Kimchi</h2>
<ul>
<li><strong>Dongchimi:</strong> White radish water kimchi, traditional winter variety</li>
<li><strong>Nabak kimchi:</strong> Square-cut vegetables in pink-tinged brine</li>
<li><strong>Yeolmu mul kimchi:</strong> Young summer radish in brine</li>
</ul>

<h2 id="ingredients">Ingredients</h2>
<p><strong>Makes about 2 litres</strong></p>

<h3>Vegetables</h3>
<ul>
<li>300g Korean radish, cut into 3cm cubes</li>
<li>200g napa cabbage, cut into 5cm pieces</li>
<li>100g cucumber, sliced</li>
<li>3 spring onions, cut into 5cm pieces</li>
</ul>

<h3>Brine</h3>
<ul>
<li>1.5 litres water</li>
<li>3 tablespoons sea salt</li>
<li>1 tablespoon sugar</li>
<li>3 cloves garlic, sliced</li>
<li>15g ginger, sliced</li>
<li>1 fresh red chilli, sliced (optional)</li>
</ul>

<h2 id="instructions">Instructions</h2>

<h3>Step 1: Prepare Brine</h3>
<ol>
<li>Dissolve salt and sugar in water</li>
<li>Add garlic and ginger slices</li>
<li>Add chilli if using (for slight colour)</li>
</ol>

<h3>Step 2: Salt Vegetables</h3>
<ol>
<li>Toss radish with 1 tablespoon salt</li>
<li>Let sit 30 minutes, then rinse</li>
</ol>

<h3>Step 3: Combine</h3>
<ol>
<li>Place all vegetables in a large jar or container</li>
<li>Pour brine over to cover completely</li>
<li>Weigh down vegetables to keep submerged</li>
</ol>

<h3>Step 4: Ferment</h3>
<ol>
<li>Cover loosely and leave at room temperature 2-3 days</li>
<li>Taste the brine daily - should become pleasantly tangy</li>
<li>Refrigerate when sour enough for your taste</li>
</ol>

<h2 id="serving">How to Serve</h2>
<ul>
<li><strong>As a side dish:</strong> Serve vegetables in a small bowl with brine</li>
<li><strong>Drink the brine:</strong> Sip cold as a probiotic digestive</li>
<li><strong>With cold noodles:</strong> Use as soup base for naengmyeon</li>
<li><strong>Hot weather refresher:</strong> Ice-cold mul kimchi on a hot day</li>
</ul>

<h2 id="storage">Storage</h2>
<p>Keeps 2-3 weeks refrigerated. The brine continues developing flavour - it's often better after a week in the fridge.</p>
`
  },
  {
    article_id: 'R-010',
    title: 'Spring Onion Kimchi Recipe (Pa Kimchi): Savoury Korean Scallion Kimchi',
    slug: 'recipes/spring-onion-kimchi',
    meta_title: 'Spring Onion Kimchi (Pa Kimchi) | Korean Scallion Kimchi',
    meta_description: 'Make pa kimchi - Korean spring onion kimchi with intense savoury flavour. Perfect with grilled meats and rich dishes.',
    primary_keyword: 'spring onion kimchi',
    secondary_keywords: ['pa kimchi', 'scallion kimchi', 'green onion kimchi'],
    search_volume: 260,
    cluster: 'recipes', phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'types-of-kimchi'],
    content: `
<p><strong>Pa kimchi</strong> (파김치) is <a href="/kimchi/">kimchi</a> made with spring onions (scallions). It has a more intense, savoury flavour than cabbage kimchi and pairs exceptionally well with grilled meats.</p>

<h2 id="about">About Spring Onion Kimchi</h2>
<p>Pa kimchi uses whole spring onions, tied in bundles before fermenting. The result is a pungent, deeply flavoured kimchi that's considered a delicacy in Korea.</p>

<h2 id="ingredients">Ingredients</h2>
<p><strong>Makes about 500g</strong></p>
<ul>
<li>500g spring onions (about 3 bunches)</li>
<li>1 tablespoon sea salt</li>
<li>3 tablespoons gochugaru</li>
<li>2 tablespoons fish sauce</li>
<li>1 tablespoon sugar</li>
<li>4 cloves garlic, minced</li>
<li>1 teaspoon ginger, grated</li>
<li>1 tablespoon sesame seeds</li>
</ul>

<h2 id="instructions">Instructions</h2>

<h3>Step 1: Prepare Spring Onions</h3>
<ol>
<li>Trim roots but keep onions whole</li>
<li>Rinse thoroughly</li>
<li>Toss with salt and let wilt for 1 hour</li>
<li>Rinse briefly and squeeze dry</li>
</ol>

<h3>Step 2: Make Paste</h3>
<ol>
<li>Mix gochugaru, fish sauce, sugar, garlic, and ginger</li>
<li>Add sesame seeds</li>
</ol>

<h3>Step 3: Coat and Bundle</h3>
<ol>
<li>Wearing gloves, coat each spring onion with paste</li>
<li>Gather 5-6 onions and tie into a bundle using the green tops</li>
<li>Repeat with remaining onions</li>
</ol>

<h3>Step 4: Ferment</h3>
<ol>
<li>Pack bundles into a jar</li>
<li>Ferment at room temperature 1-2 days</li>
<li>Refrigerate - best after 1 week</li>
</ol>

<h2 id="serving">Best Served With</h2>
<ul>
<li>Korean BBQ (samgyeopsal)</li>
<li>Grilled fish</li>
<li>Rice and doenjang soup</li>
<li>Any rich, fatty dishes</li>
</ul>
`
  },
  {
    article_id: 'R-011',
    title: 'Kimchi Paste Recipe: How to Make Kimchi Seasoning Base',
    slug: 'recipes/kimchi-paste',
    meta_title: 'Kimchi Paste Recipe | Make Kimchi Seasoning Base',
    meta_description: 'Master the kimchi paste - the flavourful base that makes kimchi special. Use for traditional kimchi or as a versatile Korean seasoning.',
    primary_keyword: 'kimchi paste',
    secondary_keywords: ['kimchi seasoning', 'gochugaru paste', 'kimchi base'],
    search_volume: 590,
    cluster: 'recipes', phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'gochugaru-uk'],
    content: `
<p>The <strong>kimchi paste</strong> (양념) is what gives <a href="/kimchi/">kimchi</a> its distinctive flavour. Master this recipe and you can make any type of kimchi - or use it as a versatile Korean seasoning.</p>

<h2 id="components">Components of Kimchi Paste</h2>

<h3>The Essentials</h3>
<ul>
<li><strong>Gochugaru:</strong> Korean red pepper flakes - the foundation</li>
<li><strong>Garlic:</strong> Lots of it - much more than Western recipes</li>
<li><strong>Ginger:</strong> Fresh, not powdered</li>
<li><strong>Fish sauce:</strong> Provides umami depth</li>
</ul>

<h3>The Binder</h3>
<ul>
<li><strong>Rice flour paste:</strong> Helps seasonings stick and feeds fermentation</li>
</ul>

<h2 id="recipe">Basic Kimchi Paste Recipe</h2>
<p><strong>Makes enough for 1.5kg cabbage</strong></p>

<h3>Ingredients</h3>
<ul>
<li>3 tablespoons rice flour</li>
<li>250ml water</li>
<li>1 tablespoon sugar</li>
<li>50g gochugaru</li>
<li>30ml fish sauce</li>
<li>20g salted shrimp (saeujeot) - optional</li>
<li>8 cloves garlic</li>
<li>20g fresh ginger</li>
</ul>

<h3>Instructions</h3>
<ol>
<li><strong>Make rice paste:</strong> Whisk rice flour into water, heat until thick, stir in sugar, cool completely</li>
<li><strong>Blend aromatics:</strong> Process garlic, ginger, fish sauce, and shrimp until smooth</li>
<li><strong>Combine:</strong> Mix cooled rice paste with aromatic blend and gochugaru</li>
<li><strong>Rest:</strong> Let sit 10 minutes for flavours to meld</li>
</ol>

<h2 id="variations">Paste Variations</h2>

<h3>Mild Paste</h3>
<p>Use 30g gochugaru instead of 50g, or mix with sweet paprika.</p>

<h3>Vegan Paste</h3>
<p>Replace fish sauce with 3 tbsp soy sauce + 1 tbsp white miso.</p>

<h3>Extra Umami</h3>
<p>Add 1 tbsp anchovy paste or kelp powder.</p>

<h2 id="uses">Other Uses for Kimchi Paste</h2>
<ul>
<li>Season stir-fries</li>
<li>Mix into mayo for spicy sauce</li>
<li>Add to soup bases</li>
<li>Marinade for meats</li>
<li>Spread on toast with avocado</li>
</ul>

<h2 id="storage">Storage</h2>
<p>Refrigerate unused paste for up to 2 weeks, or freeze for 3 months. Always use clean utensils when scooping.</p>
`
  },
  {
    article_id: 'R-012',
    title: 'Fermented Vegetables UK: Complete Guide to Home Fermentation',
    slug: 'recipes/fermented-vegetables',
    meta_title: 'Fermented Vegetables UK | Home Fermentation Guide',
    meta_description: 'Complete guide to fermenting vegetables at home in the UK. From kimchi to sauerkraut, learn the techniques, equipment, and recipes you need.',
    primary_keyword: 'fermented vegetables',
    secondary_keywords: ['lacto fermentation', 'home fermentation uk', 'fermented foods uk'],
    search_volume: 1900,
    cluster: 'recipes', phase: 2,
    internal_links: ['kimchi', 'kimchi-benefits', 'kimchi-probiotics'],
    content: `
<p><strong>Fermenting vegetables</strong> at home is one of the most rewarding kitchen skills you can learn. From <a href="/kimchi/">Korean kimchi</a> to German sauerkraut, fermented vegetables offer incredible flavours and <a href="/health/kimchi-benefits/">health benefits</a>.</p>

<h2 id="what-is-fermentation">What is Lacto-Fermentation?</h2>
<p>Lacto-fermentation is the process where beneficial bacteria (Lactobacillus) convert sugars into lactic acid. This:</p>
<ul>
<li>Preserves vegetables naturally</li>
<li>Creates tangy, complex flavours</li>
<li>Produces beneficial probiotics</li>
<li>Increases nutrient availability</li>
</ul>

<h2 id="equipment">Equipment for Home Fermentation</h2>

<h3>Essential</h3>
<ul>
<li><strong>Glass jars:</strong> Mason or Kilner jars work perfectly</li>
<li><strong>Weights:</strong> To keep vegetables submerged (glass weights, small plate, or a sealed bag of brine)</li>
<li><strong>Kitchen scales:</strong> For accurate salt measurements</li>
</ul>

<h3>Optional but Helpful</h3>
<ul>
<li><strong>Fermentation crocks:</strong> Traditional ceramic vessels with water-lock lids</li>
<li><strong>Airlock lids:</strong> Allow gas out but no air in</li>
<li><strong>pH strips:</strong> For testing acidity</li>
</ul>

<h2 id="basic-method">Basic Method: Salt Brine Fermentation</h2>

<h3>The Golden Ratio</h3>
<p><strong>2% salt by weight of vegetables + water</strong></p>

<ol>
<li>Weigh your vegetables</li>
<li>Calculate 2% of that weight in salt</li>
<li>Dissolve salt in water to make brine</li>
<li>Submerge vegetables in brine</li>
<li>Ferment at room temperature 3-14 days</li>
</ol>

<h2 id="fermented-recipes">Popular Fermented Vegetables</h2>

<h3>Korean</h3>
<ul>
<li><a href="/recipes/traditional-kimchi-recipe/">Kimchi</a> - spiced fermented cabbage</li>
<li><a href="/recipes/radish-kimchi/">Kkakdugi</a> - cubed radish kimchi</li>
</ul>

<h3>European</h3>
<ul>
<li><strong>Sauerkraut</strong> - German fermented cabbage</li>
<li><strong>Pickled cucumbers</strong> - fermented dill pickles</li>
</ul>

<h3>Other</h3>
<ul>
<li><strong>Curtido</strong> - Salvadoran fermented slaw</li>
<li><strong>Pickled carrots</strong> - with ginger and turmeric</li>
</ul>

<h2 id="troubleshooting">Troubleshooting</h2>

<h3>Soft/Mushy Vegetables</h3>
<p>Salt level too low or temperature too warm. Use more salt, ferment in cooler spot.</p>

<h3>Mould on Top</h3>
<p>Vegetables weren't submerged. Remove mould, ensure everything stays under brine.</p>

<h3>Too Salty</h3>
<p>Rinse before eating, or use in cooked dishes where salt disperses.</p>

<h2 id="safety">Food Safety</h2>
<p>Properly fermented vegetables are very safe. The acidic environment prevents harmful bacteria. Trust your senses:</p>
<ul>
<li>Should smell tangy/sour, not rotten</li>
<li>Texture should be firm, not slimy</li>
<li>Taste should be pleasantly sour</li>
</ul>
`
  },
  {
    article_id: 'R-013',
    title: 'Kimchi Without Gochugaru: Substitute Guide for Korean Red Pepper',
    slug: 'recipes/kimchi-without-gochugaru',
    meta_title: 'Kimchi Without Gochugaru | Red Pepper Substitute Guide',
    meta_description: 'Can\'t find gochugaru? Make delicious kimchi with these substitutes. We test paprika, cayenne, and other alternatives for authentic Korean flavour.',
    primary_keyword: 'gochugaru substitute',
    secondary_keywords: ['kimchi without gochugaru', 'korean red pepper substitute', 'gochugaru alternative'],
    search_volume: 390,
    cluster: 'recipes', phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'gochugaru-uk'],
    content: `
<p>Gochugaru (Korean red pepper flakes) gives <a href="/kimchi/">kimchi</a> its signature colour and flavour. But what if you can't find it? Here are the best substitutes and how to use them.</p>

<h2 id="why-gochugaru">Why Gochugaru is Special</h2>
<p>Gochugaru is unique because it's:</p>
<ul>
<li><strong>Sweet:</strong> More sweetness than Western chilli flakes</li>
<li><strong>Mild heat:</strong> Moderate spiciness, not overwhelming</li>
<li><strong>Vibrant colour:</strong> Deep red without being brown</li>
<li><strong>Slightly smoky:</strong> Sun-dried for complex flavour</li>
<li><strong>Flaky texture:</strong> Coarse flakes, not powder</li>
</ul>

<h2 id="best-substitutes">Best Gochugaru Substitutes</h2>

<h3>1. Paprika + Cayenne (Best Option)</h3>
<p><strong>Ratio:</strong> 3 parts sweet paprika : 1 part cayenne</p>
<p><strong>For 50g gochugaru:</strong> 37g paprika + 13g cayenne</p>
<p>This comes closest to the colour and heat balance. Use smoked paprika for added depth.</p>

<h3>2. Aleppo Pepper</h3>
<p><strong>Ratio:</strong> 1:1 (equal amount)</p>
<p>Similar heat level and slight sweetness. Good colour. Available in Middle Eastern shops.</p>

<h3>3. Gochujang (Korean Red Pepper Paste)</h3>
<p><strong>Ratio:</strong> Use 2 tbsp gochujang per 50g gochugaru called for</p>
<p>Different texture (paste vs flakes) but authentic Korean flavour. Reduce other liquids slightly.</p>

<h3>4. Kashmiri Chilli Powder</h3>
<p><strong>Ratio:</strong> 3/4 amount (it's slightly stronger)</p>
<p>Great colour, mild heat. Common in Indian shops.</p>

<h2 id="not-recommended">Not Recommended</h2>
<ul>
<li><strong>Crushed red pepper flakes:</strong> Too hot, wrong texture</li>
<li><strong>Cayenne alone:</strong> Way too spicy</li>
<li><strong>Chilli powder (Mexican):</strong> Contains other spices</li>
</ul>

<h2 id="adjusted-recipe">Kimchi Recipe with Substitutes</h2>

<p>For our <a href="/recipes/traditional-kimchi-recipe/">standard recipe</a> calling for 50g gochugaru:</p>

<h3>Using Paprika + Cayenne</h3>
<ul>
<li>37g sweet paprika (about 6 tablespoons)</li>
<li>13g cayenne (about 2 tablespoons)</li>
<li>Optional: 1 tsp smoked paprika for depth</li>
</ul>

<h3>Method Adjustment</h3>
<p>Paprika absorbs more liquid than gochugaru. Add an extra tablespoon of fish sauce or water to your paste to achieve the right consistency.</p>

<h2 id="where-to-buy">Where to Buy Gochugaru UK</h2>
<p>For the authentic experience, try to source real gochugaru. See our <a href="/buy/gochugaru-uk/">gochugaru UK buying guide</a> for stockists.</p>
`
  },
  {
    article_id: 'R-014',
    title: 'Small Batch Kimchi: Perfect Recipe for Beginners & Small Households',
    slug: 'recipes/small-batch-kimchi',
    meta_title: 'Small Batch Kimchi Recipe | Perfect for 1-2 People',
    meta_description: 'Make just enough kimchi for one or two people with this small batch recipe. Perfect for beginners or small households.',
    primary_keyword: 'small batch kimchi',
    secondary_keywords: ['mini kimchi recipe', 'kimchi for one', 'small amount kimchi'],
    search_volume: 320,
    cluster: 'recipes', phase: 2,
    internal_links: ['kimchi', 'easy-kimchi-recipe', 'how-to-store-kimchi'],
    content: `
<p>Not everyone needs a giant batch of <a href="/kimchi/">kimchi</a>. This <strong>small batch recipe</strong> makes just 500g - perfect for trying kimchi-making for the first time or for small households.</p>

<h2 id="why-small-batch">Why Make Small Batch Kimchi?</h2>
<ul>
<li><strong>Less commitment:</strong> If it doesn't turn out, you haven't wasted much</li>
<li><strong>Fresh eating:</strong> Finish it while it's at peak freshness</li>
<li><strong>Experimentation:</strong> Try different spice levels or ingredients</li>
<li><strong>Small fridges:</strong> Doesn't take up much space</li>
<li><strong>Quick turnaround:</strong> Make fresh batches more often</li>
</ul>

<h2 id="ingredients">Ingredients</h2>
<p><strong>Makes approximately 500g (1 jar)</strong></p>

<ul>
<li>500g napa cabbage (about 1/2 small head)</li>
<li>1.5 tablespoons sea salt</li>
<li>2 tablespoons gochugaru</li>
<li>1 tablespoon fish sauce</li>
<li>1/2 tablespoon sugar</li>
<li>3 cloves garlic, minced</li>
<li>1 teaspoon fresh ginger, grated</li>
<li>2 spring onions, chopped</li>
<li>50g daikon or carrot, julienned (optional)</li>
</ul>

<h2 id="equipment">Equipment</h2>
<ul>
<li>Medium bowl</li>
<li>One 500ml glass jar with lid</li>
<li>Rubber gloves</li>
</ul>

<h2 id="instructions">Instructions</h2>

<h3>Step 1: Quick Salt (1-2 hours)</h3>
<ol>
<li>Cut cabbage into 3cm pieces</li>
<li>Toss with salt in bowl</li>
<li>Let sit 1-2 hours, tossing occasionally</li>
<li>Rinse once, squeeze dry</li>
</ol>

<h3>Step 2: Make Paste (5 minutes)</h3>
<ol>
<li>Mix gochugaru, fish sauce, sugar, garlic, and ginger</li>
<li>Add spring onions and julienned vegetables</li>
</ol>

<h3>Step 3: Combine (5 minutes)</h3>
<ol>
<li>Add paste to cabbage</li>
<li>Mix thoroughly with gloved hands</li>
<li>Massage for 2 minutes to distribute paste</li>
</ol>

<h3>Step 4: Pack and Ferment</h3>
<ol>
<li>Pack tightly into your jar</li>
<li>Press down firmly</li>
<li>Leave 2cm headspace</li>
<li>Close loosely, ferment 2-3 days at room temperature</li>
<li>Refrigerate and enjoy!</li>
</ol>

<h2 id="scaling">Scaling Up</h2>
<p>To double: multiply all ingredients by 2, use a 1L jar.</p>
<p>For a full batch, see our <a href="/recipes/traditional-kimchi-recipe/">traditional recipe</a>.</p>

<h2 id="storage">Storage</h2>
<p>Small batches are best eaten within 3-4 weeks for optimal crunch. Store in the refrigerator and enjoy fresh!</p>
`
  },
  {
    article_id: 'R-015',
    title: 'Kimchi Recipe UK: Adapted for British Ingredients & Tastes',
    slug: 'recipes/kimchi-recipe-uk',
    meta_title: 'Kimchi Recipe UK | Made with British Ingredients',
    meta_description: 'Authentic kimchi recipe adapted for UK ingredients. Uses supermarket staples while keeping traditional Korean flavour. Perfect for British kitchens.',
    primary_keyword: 'kimchi recipe uk',
    secondary_keywords: ['british kimchi recipe', 'uk kimchi', 'kimchi uk ingredients'],
    search_volume: 480,
    cluster: 'recipes', phase: 2,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'best-kimchi-uk', 'gochugaru-uk'],
    content: `
<p>This <a href="/kimchi/">kimchi recipe</a> is specifically adapted for UK home cooks, using ingredients you can find in any British supermarket while staying true to authentic Korean methods.</p>

<h2 id="uk-ingredient-sourcing">Where to Find Ingredients in the UK</h2>

<h3>Supermarket (Tesco, Sainsbury's, Asda, Waitrose)</h3>
<ul>
<li><strong>Napa cabbage:</strong> Usually labelled "Chinese leaf" - in veg section</li>
<li><strong>Fish sauce:</strong> Thai brands widely available in world foods</li>
<li><strong>Garlic & ginger:</strong> Fresh produce section</li>
<li><strong>Spring onions:</strong> Fresh produce</li>
<li><strong>Sea salt:</strong> Maldon or any coarse sea salt</li>
</ul>

<h3>Asian Supermarket / Online</h3>
<ul>
<li><strong>Gochugaru:</strong> <a href="/buy/gochugaru-uk/">See our buying guide</a></li>
<li><strong>Korean radish:</strong> Or use daikon (widely available)</li>
<li><strong>Salted shrimp (optional):</strong> H Mart, Oseyo, or online</li>
</ul>

<h2 id="recipe">UK-Friendly Kimchi Recipe</h2>
<p><strong>Makes approximately 1kg</strong></p>

<h3>Ingredients</h3>
<ul>
<li>1 large Chinese leaf (napa cabbage), about 1kg</li>
<li>60g Maldon or coarse sea salt</li>
<li>1 litre cold water</li>
<li>4 tablespoons gochugaru (or 3 tbsp sweet paprika + 1 tbsp hot paprika)</li>
<li>2 tablespoons Thai fish sauce</li>
<li>1 tablespoon caster sugar</li>
<li>6 cloves garlic, minced</li>
<li>1 thumb-sized piece ginger, grated</li>
<li>4 spring onions, cut into 3cm pieces</li>
<li>100g daikon radish, julienned (optional)</li>
<li>2 tablespoons plain flour + 150ml water (for paste)</li>
</ul>

<h2 id="instructions">Instructions</h2>

<h3>Day Before: Salt the Cabbage</h3>
<ol>
<li>Quarter the cabbage lengthwise</li>
<li>Dissolve 40g salt in the water</li>
<li>Soak cabbage in brine, sprinkle remaining salt between leaves</li>
<li>Leave overnight (6-12 hours)</li>
</ol>

<h3>Next Day: Make Kimchi</h3>
<ol>
<li>Rinse cabbage 3 times, squeeze dry thoroughly</li>
<li>Make flour paste: cook flour and water until thick, add sugar, cool</li>
<li>Mix paste with gochugaru, fish sauce, garlic, and ginger</li>
<li>Add spring onions and radish to paste</li>
<li>Wearing gloves, spread paste onto every cabbage leaf</li>
<li>Roll each quarter into a bundle</li>
<li>Pack into clean jars, press down firmly</li>
</ol>

<h3>Ferment</h3>
<ol>
<li>Leave at room temperature 2-3 days (British room temp is usually ideal)</li>
<li>Taste daily - refrigerate when tangy enough</li>
</ol>

<h2 id="british-adaptations">British Adaptations</h2>

<h3>Weather Considerations</h3>
<p>UK homes are typically 18-21°C - perfect for fermentation. In summer heatwaves, ferment in a cooler spot or for a shorter time.</p>

<h3>Flavour Adjustments</h3>
<p>British palates sometimes prefer:</p>
<ul>
<li>Less garlic - use 4 cloves instead of 6-8</li>
<li>Milder heat - reduce gochugaru by 1 tablespoon</li>
<li>Shorter fermentation - 2 days for fresher, crunchier result</li>
</ul>

<h2 id="where-to-buy">Prefer to Buy?</h2>
<p>If you'd rather buy authentic kimchi made in the UK, check our <a href="/buy/best-kimchi-uk/">UK kimchi buying guide</a> or <a href="/shop/">try our handmade kimchi</a>.</p>
`
  }
]

async function main() {
  console.log('Inserting Phase 2 Recipe Articles (Batch 2)...\n')
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
