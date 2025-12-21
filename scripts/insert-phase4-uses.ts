/**
 * Insert Phase 4 Uses/Recipe Articles (U-001 to U-012)
 */
import { neon } from '@neondatabase/serverless'
const DATABASE_URL = process.env.DATABASE_URL
if (!DATABASE_URL) { console.error('DATABASE_URL not set'); process.exit(1) }
const sql = neon(DATABASE_URL)

const articles = [
  {
    article_id: 'U-001',
    title: 'What to Eat with Kimchi: 25 Perfect Food Pairings',
    slug: 'uses/what-to-eat-with-kimchi',
    meta_title: 'What to Eat with Kimchi | 25 Perfect Pairings',
    meta_description: 'Wondering what to eat with kimchi? 25 delicious food pairings from traditional Korean to fusion. Transform any meal with these kimchi combinations.',
    primary_keyword: 'what to eat with kimchi',
    secondary_keywords: ['kimchi pairings', 'what goes with kimchi', 'kimchi meal ideas'],
    search_volume: 880, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'kimchi-fried-rice', 'kimchi-jjigae'],
    content: `<p><a href="/kimchi/">Kimchi</a> is incredibly versatile. Here are 25 ways to enjoy it, from traditional Korean to creative fusion.</p>

<h2 id="traditional">Traditional Korean Pairings</h2>
<ol>
<li><strong>Steamed rice:</strong> The classic - simple and perfect</li>
<li><strong>Korean BBQ:</strong> Cuts through rich, fatty meats</li>
<li><strong>Bibimbap:</strong> Essential topping for the mixed rice bowl</li>
<li><strong>Japchae:</strong> Glass noodle dish benefits from kimchi's tang</li>
<li><strong>Samgyeopsal:</strong> Wrap in lettuce with grilled pork belly</li>
<li><strong>Soups and stews:</strong> Base for <a href="/recipes/kimchi-jjigae/">kimchi jjigae</a></li>
<li><strong>Kimbap:</strong> Korean sushi rolls</li>
<li><strong>Jeon:</strong> <a href="/recipes/kimchi-pancakes/">Korean pancakes</a></li>
</ol>

<h2 id="asian-fusion">Asian Fusion</h2>
<ol start="9">
<li><strong>Ramen:</strong> Top instant or homemade <a href="/recipes/kimchi-ramen/">ramen</a></li>
<li><strong>Fried rice:</strong> <a href="/recipes/kimchi-fried-rice/">Kimchi fried rice</a> is a staple</li>
<li><strong>Dumplings:</strong> <a href="/recipes/kimchi-dumplings/">Kimchi dumplings</a> are incredible</li>
<li><strong>Udon:</strong> Stir into thick noodles</li>
<li><strong>Poke bowls:</strong> Adds Korean twist to Hawaiian favourite</li>
</ol>

<h2 id="western-fusion">Western Fusion</h2>
<ol start="14">
<li><strong>Grilled cheese:</strong> <a href="/recipes/kimchi-grilled-cheese/">Kimchi grilled cheese</a> is legendary</li>
<li><strong>Quesadillas:</strong> <a href="/recipes/kimchi-quesadilla/">Korean-Mexican fusion</a></li>
<li><strong>Burgers:</strong> <a href="/recipes/kimchi-burger/">Kimchi burger</a> topping</li>
<li><strong>Hot dogs:</strong> Korean street food style</li>
<li><strong>Tacos:</strong> Kimchi-Korean taco fusion</li>
<li><strong>Mac and cheese:</strong> Stir in for grown-up version</li>
<li><strong>Pizza topping:</strong> Surprisingly delicious</li>
</ol>

<h2 id="breakfast">Breakfast Ideas</h2>
<ol start="21">
<li><strong>Eggs:</strong> <a href="/recipes/kimchi-eggs/">Scrambled, fried, or omelette</a></li>
<li><strong>Avocado toast:</strong> Top with kimchi for probiotic boost</li>
<li><strong>Breakfast burrito:</strong> Add for Korean twist</li>
</ol>

<h2 id="simple">Simple Combinations</h2>
<ol start="24">
<li><strong>With cheese:</strong> Strong cheeses pair beautifully</li>
<li><strong>On crackers:</strong> Quick snack</li>
</ol>

<p><strong>Golden rule:</strong> Kimchi pairs best with rich, fatty, or bland foods where its acidity and spice can shine.</p>`
  },
  {
    article_id: 'U-002',
    title: 'Kimchi Fried Rice: The Ultimate Korean Comfort Food Recipe',
    slug: 'recipes/kimchi-fried-rice',
    meta_title: 'Kimchi Fried Rice Recipe | Easy Korean Bokkeumbap',
    meta_description: 'Make authentic kimchi fried rice (kimchi bokkeumbap) in 15 minutes. The best way to use aged kimchi - crispy, spicy, and utterly delicious.',
    primary_keyword: 'kimchi fried rice',
    secondary_keywords: ['kimchi bokkeumbap', 'korean fried rice', 'kimchi rice recipe'],
    search_volume: 6600, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'what-to-eat-with-kimchi', 'kimchi-jjigae'],
    content: `<p><strong>Kimchi fried rice</strong> (kimchi bokkeumbap) is the ultimate way to use aged, sour <a href="/kimchi/">kimchi</a>. Ready in 15 minutes, it's perfect comfort food.</p>

<h2 id="ingredients">Ingredients (Serves 2)</h2>
<ul>
<li>200g well-fermented (sour) kimchi, roughly chopped</li>
<li>3 tablespoons kimchi juice</li>
<li>400g cold cooked rice (day-old is best)</li>
<li>100g protein: bacon, spam, pork belly, or tofu</li>
<li>2 eggs</li>
<li>2 tablespoons vegetable oil</li>
<li>1 tablespoon sesame oil</li>
<li>1 tablespoon gochujang (optional, for extra kick)</li>
<li>Spring onions and sesame seeds to garnish</li>
</ul>

<h2 id="method">Method</h2>
<ol>
<li><strong>Prep:</strong> Chop kimchi, cut protein into small pieces</li>
<li><strong>Fry protein:</strong> Cook in vegetable oil until crispy, set aside</li>
<li><strong>Fry kimchi:</strong> In same pan, stir-fry kimchi 2-3 minutes until slightly caramelised</li>
<li><strong>Add rice:</strong> Break up cold rice, add to pan, stir-fry on high heat</li>
<li><strong>Season:</strong> Add kimchi juice, gochujang if using, and sesame oil</li>
<li><strong>Combine:</strong> Add protein back, mix well</li>
<li><strong>Serve:</strong> Top with fried egg, spring onions, sesame seeds</li>
</ol>

<h2 id="tips">Pro Tips</h2>
<ul>
<li><strong>Use sour kimchi:</strong> Aged, very fermented kimchi works best</li>
<li><strong>Cold rice:</strong> Day-old refrigerated rice fries better than fresh</li>
<li><strong>High heat:</strong> Get the wok smoking hot for best results</li>
<li><strong>Don't stir too much:</strong> Let rice get crispy contact with pan</li>
</ul>

<h2 id="variations">Variations</h2>
<ul>
<li><strong>Spam version:</strong> Classic Korean-American style</li>
<li><strong>Cheese topping:</strong> Melt cheese on top before serving</li>
<li><strong>Vegetarian:</strong> Use tofu and extra vegetables</li>
</ul>`
  },
  {
    article_id: 'U-003',
    title: 'Kimchi Jjigae Recipe: Authentic Korean Kimchi Stew',
    slug: 'recipes/kimchi-jjigae',
    meta_title: 'Kimchi Jjigae Recipe | Authentic Korean Kimchi Stew',
    meta_description: 'Make authentic kimchi jjigae - hearty Korean kimchi stew with pork and tofu. The ultimate comfort food using aged, sour kimchi.',
    primary_keyword: 'kimchi jjigae',
    secondary_keywords: ['kimchi stew', 'korean kimchi soup', 'kimchi jjigae recipe'],
    search_volume: 2900, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'kimchi-fried-rice', 'what-to-eat-with-kimchi'],
    content: `<p><strong>Kimchi jjigae</strong> (김치찌개) is Korea's ultimate comfort food - a bubbling, spicy stew made with well-fermented <a href="/kimchi/">kimchi</a>, pork, and tofu.</p>

<h2 id="key-secret">The Secret: Use OLD Kimchi</h2>
<p>The best kimchi jjigae requires very sour, well-fermented kimchi - at least 3-4 weeks old. Fresh kimchi won't give the same depth of flavour.</p>

<h2 id="ingredients">Ingredients (Serves 2-3)</h2>
<ul>
<li>300g very sour kimchi, roughly chopped</li>
<li>100ml kimchi juice</li>
<li>200g pork belly or shoulder, sliced</li>
<li>150g firm tofu, cubed</li>
<li>500ml water or anchovy/kelp stock</li>
<li>1 tablespoon gochugaru</li>
<li>1 tablespoon gochujang</li>
<li>2 cloves garlic, minced</li>
<li>1 teaspoon sugar</li>
<li>Spring onions to garnish</li>
</ul>

<h2 id="method">Method</h2>
<ol>
<li><strong>Sauté pork:</strong> In a pot, cook pork pieces until fat renders (3-4 mins)</li>
<li><strong>Add kimchi:</strong> Stir-fry with pork for 3 minutes</li>
<li><strong>Add liquids:</strong> Pour in water/stock and kimchi juice</li>
<li><strong>Season:</strong> Add gochugaru, gochujang, garlic, sugar</li>
<li><strong>Simmer:</strong> Bring to boil, then simmer 15-20 minutes</li>
<li><strong>Add tofu:</strong> Gently add tofu cubes, simmer 5 more minutes</li>
<li><strong>Serve:</strong> Garnish with spring onions, serve bubbling with rice</li>
</ol>

<h2 id="tips">Tips</h2>
<ul>
<li>Serve in a stone pot (dolsot) to keep it bubbling at the table</li>
<li>A raw egg cracked in at the end is traditional</li>
<li>Tuna or spam can substitute for pork</li>
</ul>`
  },
  {
    article_id: 'U-004',
    title: 'Kimchi Pancakes Recipe (Kimchijeon): Crispy Korean Delight',
    slug: 'recipes/kimchi-pancakes',
    meta_title: 'Kimchi Pancakes Recipe | Crispy Korean Kimchijeon',
    meta_description: 'Make crispy kimchi pancakes (kimchijeon) - Korean savoury pancakes loaded with tangy kimchi. Perfect appetiser or snack with dipping sauce.',
    primary_keyword: 'kimchi pancakes',
    secondary_keywords: ['kimchijeon', 'korean pancakes', 'kimchi jeon recipe'],
    search_volume: 1900, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'what-to-eat-with-kimchi'],
    content: `<p><strong>Kimchijeon</strong> (김치전) are crispy Korean pancakes packed with <a href="/kimchi/">kimchi</a>. They're the perfect way to use up kimchi and make an incredible appetiser or snack.</p>

<h2 id="ingredients">Ingredients (Makes 2 large pancakes)</h2>
<h3>Batter</h3>
<ul>
<li>200g kimchi, drained and chopped (save juice)</li>
<li>100g plain flour</li>
<li>2 tablespoons rice flour (or more plain flour)</li>
<li>150ml cold water + 50ml kimchi juice</li>
<li>1 egg</li>
<li>1/2 teaspoon salt</li>
<li>3 spring onions, sliced</li>
</ul>
<h3>Dipping Sauce</h3>
<ul>
<li>2 tablespoons soy sauce</li>
<li>1 tablespoon rice vinegar</li>
<li>1 teaspoon sesame oil</li>
<li>Pinch of sugar and sesame seeds</li>
</ul>

<h2 id="method">Method</h2>
<ol>
<li><strong>Mix batter:</strong> Whisk flours, water, kimchi juice, egg, and salt until smooth</li>
<li><strong>Add kimchi:</strong> Fold in chopped kimchi and spring onions</li>
<li><strong>Heat pan:</strong> Add 3 tablespoons oil to large non-stick pan, get very hot</li>
<li><strong>Pour batter:</strong> Add half the batter, spread thin</li>
<li><strong>Fry:</strong> Cook 3-4 minutes until bottom is golden and crispy</li>
<li><strong>Flip:</strong> Turn and cook another 2-3 minutes</li>
<li><strong>Serve:</strong> Cut into wedges, serve with dipping sauce</li>
</ol>

<h2 id="tips">Tips for Crispiest Pancakes</h2>
<ul>
<li>Use cold water in batter</li>
<li>Don't overmix - some lumps are fine</li>
<li>Pan must be very hot</li>
<li>Be generous with oil</li>
<li>Press down with spatula while cooking</li>
</ul>`
  },
  {
    article_id: 'U-005',
    title: 'Kimchi Ramen: Elevate Your Instant Noodles',
    slug: 'recipes/kimchi-ramen',
    meta_title: 'Kimchi Ramen Recipe | Upgrade Your Instant Noodles',
    meta_description: 'Transform instant ramen into a gourmet meal with kimchi. Quick, easy, and absolutely delicious - the ultimate comfort food hack.',
    primary_keyword: 'kimchi ramen',
    secondary_keywords: ['kimchi noodles', 'kimchi instant ramen', 'korean ramen kimchi'],
    search_volume: 1600, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'what-to-eat-with-kimchi'],
    content: `<p>Take instant ramen from basic to brilliant with <a href="/kimchi/">kimchi</a>. This 10-minute meal is the ultimate comfort food upgrade.</p>

<h2 id="basic">Basic Kimchi Ramen</h2>
<h3>Ingredients (1 serving)</h3>
<ul>
<li>1 packet instant ramen</li>
<li>100g kimchi + 2 tablespoons juice</li>
<li>1 egg</li>
<li>Spring onion, sliced</li>
<li>Sesame seeds</li>
</ul>

<h3>Method</h3>
<ol>
<li>Cook ramen according to packet</li>
<li>Add kimchi and juice in last minute</li>
<li>Top with soft-boiled or poached egg</li>
<li>Garnish with spring onion and sesame</li>
</ol>

<h2 id="upgraded">Upgraded Version</h2>
<h3>Additional Ingredients</h3>
<ul>
<li>1 tablespoon gochujang</li>
<li>Sliced pork belly or spam</li>
<li>Handful of spinach</li>
<li>Slice of cheese (yes, really!)</li>
<li>Drop of sesame oil</li>
</ul>

<h3>Method</h3>
<ol>
<li>Fry pork/spam until crispy, set aside</li>
<li>In same pan, sauté kimchi 2 minutes</li>
<li>Add water and flavour packet, bring to boil</li>
<li>Add noodles and gochujang, cook until done</li>
<li>Add spinach to wilt</li>
<li>Transfer to bowl, top with cheese, egg, pork, spring onion</li>
</ol>

<h2 id="tips">Pro Tips</h2>
<ul>
<li>Use Korean ramyeon like Shin Ramyun for best results</li>
<li>Sour, aged kimchi adds more depth</li>
<li>That cheese slice is a Korean thing - trust it!</li>
</ul>`
  },
  {
    article_id: 'U-006',
    title: 'Kimchi Grilled Cheese: The Ultimate Comfort Food Fusion',
    slug: 'recipes/kimchi-grilled-cheese',
    meta_title: 'Kimchi Grilled Cheese Recipe | Korean Fusion Sandwich',
    meta_description: 'Make the ultimate kimchi grilled cheese sandwich. The perfect fusion of crispy, cheesy comfort food with tangy Korean kimchi.',
    primary_keyword: 'kimchi grilled cheese',
    secondary_keywords: ['kimchi sandwich', 'kimchi cheese toastie', 'korean grilled cheese'],
    search_volume: 590, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'what-to-eat-with-kimchi'],
    content: `<p>The <strong>kimchi grilled cheese</strong> is proof that some of the best food comes from combining two perfect things. Crispy, buttery bread + melted cheese + tangy <a href="/kimchi/">kimchi</a> = perfection.</p>

<h2 id="ingredients">Ingredients (1 sandwich)</h2>
<ul>
<li>2 slices good bread (sourdough is ideal)</li>
<li>50g kimchi, drained and chopped</li>
<li>60g cheese (cheddar, gruyère, or mix)</li>
<li>2 tablespoons butter, softened</li>
<li>Optional: 1 teaspoon gochujang, mayo</li>
</ul>

<h2 id="method">Method</h2>
<ol>
<li><strong>Prep kimchi:</strong> Squeeze out excess liquid (prevents soggy sandwich)</li>
<li><strong>Butter bread:</strong> Spread butter on outside of both slices</li>
<li><strong>Optional spread:</strong> Mix gochujang with mayo, spread on inside</li>
<li><strong>Layer:</strong> Half the cheese, all the kimchi, remaining cheese</li>
<li><strong>Cook:</strong> Medium-low heat, 3-4 minutes per side until golden</li>
<li><strong>Rest:</strong> Let sit 1 minute before cutting (cheese will set)</li>
</ol>

<h2 id="tips">Tips</h2>
<ul>
<li><strong>Low and slow:</strong> Medium-low heat ensures cheese melts before bread burns</li>
<li><strong>Press gently:</strong> Helps bread contact pan without squashing filling</li>
<li><strong>Use aged cheese:</strong> Stronger flavour stands up to kimchi</li>
<li><strong>Drain the kimchi:</strong> Essential for crispy bread</li>
</ul>

<h2 id="variations">Variations</h2>
<ul>
<li>Add bacon or ham</li>
<li>Use mozzarella for stretchy cheese pulls</li>
<li>Add a fried egg on top</li>
</ul>`
  },
  {
    article_id: 'U-007',
    title: 'Kimchi Quesadilla: Korean-Mexican Fusion Done Right',
    slug: 'recipes/kimchi-quesadilla',
    meta_title: 'Kimchi Quesadilla Recipe | Korean-Mexican Fusion',
    meta_description: 'Make a kimchi quesadilla - the perfect Korean-Mexican fusion. Crispy tortilla, melted cheese, and tangy kimchi in every bite.',
    primary_keyword: 'kimchi quesadilla',
    secondary_keywords: ['korean quesadilla', 'kimchi mexican', 'fusion quesadilla'],
    search_volume: 480, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'what-to-eat-with-kimchi'],
    content: `<p>The <strong>kimchi quesadilla</strong> is Korean-Mexican fusion at its finest. The combination of melted cheese and tangy <a href="/kimchi/">kimchi</a> in a crispy tortilla is addictive.</p>

<h2 id="ingredients">Ingredients (1 quesadilla)</h2>
<ul>
<li>1 large flour tortilla</li>
<li>80g kimchi, drained and chopped</li>
<li>60g cheese (Mexican blend or cheddar)</li>
<li>Optional: cooked chicken or pork, sliced</li>
<li>Optional: sour cream, sriracha for serving</li>
</ul>

<h2 id="method">Method</h2>
<ol>
<li><strong>Heat pan:</strong> Medium heat, dry pan or light oil</li>
<li><strong>Layer:</strong> Tortilla in pan, cheese on half, kimchi on cheese, more cheese on top</li>
<li><strong>Fold:</strong> Fold tortilla in half over filling</li>
<li><strong>Cook:</strong> 2-3 minutes per side until golden and cheese melted</li>
<li><strong>Serve:</strong> Cut into wedges, serve with sour cream and sriracha</li>
</ol>

<h2 id="variations">Variations</h2>
<ul>
<li><strong>Bulgogi quesadilla:</strong> Add Korean BBQ beef</li>
<li><strong>Pork belly:</strong> Crispy pork belly and kimchi</li>
<li><strong>Breakfast version:</strong> Add scrambled egg</li>
</ul>`
  },
  {
    article_id: 'U-008',
    title: 'Kimchi Burger: The Korean BBQ-Style Burger',
    slug: 'recipes/kimchi-burger',
    meta_title: 'Kimchi Burger Recipe | Korean BBQ Style Burger',
    meta_description: 'Make a kimchi burger with Korean flair. Juicy beef patty topped with spicy kimchi, gochujang mayo, and all the fixings.',
    primary_keyword: 'kimchi burger',
    secondary_keywords: ['korean burger', 'kimchi beef burger', 'gochujang burger'],
    search_volume: 720, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'what-to-eat-with-kimchi'],
    content: `<p>The <strong>kimchi burger</strong> takes an American classic and gives it Korean soul. Tangy <a href="/kimchi/">kimchi</a>, spicy gochujang mayo, and a perfectly cooked patty - it's a flavour explosion.</p>

<h2 id="ingredients">Ingredients (2 burgers)</h2>
<h3>Patties</h3>
<ul>
<li>300g beef mince (20% fat ideal)</li>
<li>Salt and pepper</li>
</ul>
<h3>Gochujang Mayo</h3>
<ul>
<li>3 tablespoons mayonnaise</li>
<li>1 tablespoon gochujang</li>
<li>1 teaspoon sesame oil</li>
</ul>
<h3>Assembly</h3>
<ul>
<li>2 brioche buns, toasted</li>
<li>100g kimchi, drained</li>
<li>Lettuce leaves</li>
<li>2 slices cheese (American or cheddar)</li>
<li>Pickled cucumber slices</li>
</ul>

<h2 id="method">Method</h2>
<ol>
<li><strong>Make sauce:</strong> Mix mayo, gochujang, and sesame oil</li>
<li><strong>Form patties:</strong> Shape mince into 2 patties, slightly larger than buns (they shrink)</li>
<li><strong>Season:</strong> Generous salt and pepper</li>
<li><strong>Cook:</strong> High heat, 3-4 minutes per side for medium</li>
<li><strong>Add cheese:</strong> Last minute of cooking, cover to melt</li>
<li><strong>Assemble:</strong> Bottom bun, sauce, lettuce, patty, kimchi, pickles, top bun</li>
</ol>

<h2 id="tips">Tips</h2>
<ul>
<li>Don't press the patty while cooking - keeps it juicy</li>
<li>Toast buns in the beef fat for extra flavour</li>
<li>Drain kimchi well to prevent soggy bun</li>
</ul>`
  },
  {
    article_id: 'U-009',
    title: 'How to Store Kimchi: Keep Your Ferment Fresh for Months',
    slug: 'guides/how-to-store-kimchi',
    meta_title: 'How to Store Kimchi | Storage Tips & Shelf Life',
    meta_description: 'Learn how to store kimchi properly to maintain freshness, flavour, and probiotic content. Tips for refrigerator storage, freezing, and troubleshooting.',
    primary_keyword: 'how to store kimchi',
    secondary_keywords: ['kimchi storage', 'storing kimchi', 'how long does kimchi last'],
    search_volume: 880, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'kimchi-fermentation', 'kimchi-benefits'],
    content: `<p>Proper storage is key to maintaining <a href="/kimchi/">kimchi's</a> flavour, texture, and probiotic benefits. Here's how to store it correctly.</p>

<h2 id="refrigerator">Refrigerator Storage (Best Method)</h2>
<ul>
<li><strong>Temperature:</strong> 4°C (39°F) or below</li>
<li><strong>Shelf life:</strong> 3-6 months or longer</li>
<li><strong>Best containers:</strong> Glass jars with tight-fitting lids</li>
</ul>

<h3>Key Rules</h3>
<ol>
<li><strong>Keep submerged:</strong> Press kimchi below liquid to prevent mould</li>
<li><strong>Airtight:</strong> Minimise air exposure</li>
<li><strong>Clean utensils:</strong> Never use fingers or dirty tools</li>
<li><strong>Back of fridge:</strong> Most stable temperature</li>
<li><strong>Separate container:</strong> Transfer portions to avoid opening main jar</li>
</ol>

<h2 id="freezing">Can You Freeze Kimchi?</h2>
<p><strong>Yes, but with caveats:</strong></p>
<ul>
<li>Freezing kills most probiotics</li>
<li>Texture may soften</li>
<li>Flavour is preserved</li>
<li>Good for cooking, not raw eating</li>
</ul>
<p><strong>How to freeze:</strong> Portion into freezer-safe containers, leave headspace for expansion. Thaw in refrigerator.</p>

<h2 id="signs">Signs Kimchi Has Gone Bad</h2>
<p>Kimchi rarely "spoils" but discard if you see:</p>
<ul>
<li>Fuzzy mould (not white film/kahm yeast, which is harmless)</li>
<li>Extremely slimy texture</li>
<li>Rotten (not sour) smell</li>
<li>Unusual colours</li>
</ul>

<h2 id="troubleshooting">Troubleshooting</h2>
<h3>Too Sour?</h3>
<p>It's still good! Use for cooking - <a href="/recipes/kimchi-fried-rice/">fried rice</a>, <a href="/recipes/kimchi-jjigae/">stew</a>, pancakes.</p>

<h3>White Film on Top?</h3>
<p>Kahm yeast - harmless. Skim off and ensure kimchi stays submerged.</p>

<h3>Not Sour Enough After Months?</h3>
<p>Fridge might be too cold. Let sit at room temperature for a few hours.</p>`
  },
  {
    article_id: 'U-010',
    title: 'Kimchi Fermentation Guide: From Fresh to Perfectly Sour',
    slug: 'guides/kimchi-fermentation',
    meta_title: 'Kimchi Fermentation Guide | Timing & Troubleshooting',
    meta_description: 'Master kimchi fermentation with this complete guide. Temperature, timing, stages, and troubleshooting for perfectly fermented kimchi every time.',
    primary_keyword: 'kimchi sour',
    secondary_keywords: ['kimchi fermentation', 'how long to ferment kimchi', 'kimchi fermentation time'],
    search_volume: 480, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'how-to-store-kimchi'],
    content: `<p>Understanding fermentation is key to making perfect <a href="/kimchi/">kimchi</a>. Here's everything you need to know about the fermentation process.</p>

<h2 id="science">The Science</h2>
<p>Lactobacillus bacteria naturally present on vegetables convert sugars to lactic acid. This:</p>
<ul>
<li>Creates the sour taste</li>
<li>Preserves the vegetables</li>
<li>Produces beneficial probiotics</li>
<li>Develops complex flavours</li>
</ul>

<h2 id="stages">Fermentation Stages</h2>

<h3>Day 0-1: Starting</h3>
<ul><li>Bacteria beginning to multiply</li><li>No visible changes yet</li><li>Taste still quite fresh</li></ul>

<h3>Day 2-3: Active Fermentation</h3>
<ul><li>Bubbles appearing when pressed</li><li>Becoming tangy</li><li>Liquid increasing</li></ul>

<h3>Day 4-7: Peak Fermentation</h3>
<ul><li>Pronounced sourness</li><li>Complex flavours developing</li><li>Most refrigerate at this stage</li></ul>

<h3>1-4 Weeks: Ripening</h3>
<ul><li>Continues slowly in fridge</li><li>Flavours deepening</li><li>Texture softening</li></ul>

<h3>1+ Month: Aged</h3>
<ul><li>Very sour</li><li>Best for cooking</li><li>Deep, complex flavour</li></ul>

<h2 id="temperature">Temperature Effects</h2>
<table>
<thead><tr><th>Temperature</th><th>Speed</th><th>Result</th></tr></thead>
<tbody>
<tr><td>22-25°C</td><td>Fast (1-2 days)</td><td>Quick but less complex</td></tr>
<tr><td>18-22°C</td><td>Medium (2-4 days)</td><td>Ideal balance</td></tr>
<tr><td>15-18°C</td><td>Slow (5-7 days)</td><td>More complex flavour</td></tr>
<tr><td>4°C (fridge)</td><td>Very slow (weeks)</td><td>Long-term ripening</td></tr>
</tbody>
</table>

<h2 id="troubleshooting">Troubleshooting</h2>
<ul>
<li><strong>Not fermenting:</strong> Too cold, too salty, or needs more time</li>
<li><strong>Too sour too fast:</strong> Too warm - refrigerate immediately</li>
<li><strong>Mushy:</strong> Over-fermented or too warm</li>
<li><strong>Mouldy:</strong> Wasn't submerged - discard if fuzzy mould</li>
</ul>`
  },
  {
    article_id: 'U-011',
    title: 'Kimchi Eggs: 5 Delicious Ways to Cook Eggs with Kimchi',
    slug: 'recipes/kimchi-eggs',
    meta_title: 'Kimchi Eggs Recipe | 5 Ways to Cook Eggs with Kimchi',
    meta_description: 'Discover 5 delicious ways to cook eggs with kimchi. From quick scrambles to crispy fried eggs - transform your breakfast with Korean flavour.',
    primary_keyword: 'kimchi eggs',
    secondary_keywords: ['eggs with kimchi', 'kimchi scrambled eggs', 'korean eggs'],
    search_volume: 590, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'what-to-eat-with-kimchi'],
    content: `<p><a href="/kimchi/">Kimchi</a> and eggs are a match made in heaven. Here are 5 ways to combine them.</p>

<h2 id="1-scrambled">1. Kimchi Scrambled Eggs</h2>
<ol>
<li>Sauté 50g chopped kimchi in butter until slightly caramelised</li>
<li>Add 2 beaten eggs, cook low and slow</li>
<li>Stir gently until just set</li>
<li>Top with spring onions and sesame seeds</li>
</ol>

<h2 id="2-fried">2. Fried Eggs on Kimchi Rice</h2>
<ol>
<li>Fry kimchi in sesame oil until edges crisp</li>
<li>Serve over hot rice</li>
<li>Top with crispy-edged fried egg</li>
<li>Drizzle with soy sauce</li>
</ol>

<h2 id="3-omelette">3. Kimchi Omelette</h2>
<ol>
<li>Beat 3 eggs with pinch of salt</li>
<li>Pour into hot buttered pan</li>
<li>When nearly set, add 50g kimchi and cheese to one side</li>
<li>Fold and serve</li>
</ol>

<h2 id="4-baked">4. Korean-Style Baked Eggs</h2>
<ol>
<li>Spread kimchi in small baking dish</li>
<li>Make wells, crack eggs into them</li>
<li>Top with cheese</li>
<li>Bake 200°C until eggs set (10-12 mins)</li>
</ol>

<h2 id="5-korean-rolled">5. Korean Rolled Omelette (Gyeran-mari)</h2>
<ol>
<li>Beat 3 eggs with salt and 1 tbsp water</li>
<li>Add finely chopped kimchi to egg mixture</li>
<li>Pour thin layer in pan, roll up</li>
<li>Add more egg, roll again</li>
<li>Slice into rounds to serve</li>
</ol>`
  },
  {
    article_id: 'U-012',
    title: 'Kimchi Dumplings (Kimchi Mandu): Authentic Korean Recipe',
    slug: 'recipes/kimchi-dumplings',
    meta_title: 'Kimchi Dumplings Recipe | Korean Kimchi Mandu',
    meta_description: 'Make authentic kimchi dumplings (kimchi mandu) at home. Juicy pork and tangy kimchi wrapped in thin dumpling skins - boiled, steamed, or fried.',
    primary_keyword: 'kimchi dumplings',
    secondary_keywords: ['kimchi mandu', 'korean dumplings', 'mandu recipe'],
    search_volume: 1300, cluster: 'uses', phase: 4,
    internal_links: ['kimchi', 'what-to-eat-with-kimchi'],
    content: `<p><strong>Kimchi mandu</strong> (김치만두) are Korean dumplings filled with <a href="/kimchi/">kimchi</a> and pork. They're incredibly flavourful and satisfying.</p>

<h2 id="ingredients">Ingredients (Makes 30-40 dumplings)</h2>
<h3>Filling</h3>
<ul>
<li>200g well-fermented kimchi, squeezed dry and finely chopped</li>
<li>200g pork mince</li>
<li>100g firm tofu, crumbled and squeezed dry</li>
<li>3 spring onions, finely chopped</li>
<li>2 cloves garlic, minced</li>
<li>1 tablespoon soy sauce</li>
<li>1 tablespoon sesame oil</li>
<li>1/2 teaspoon black pepper</li>
</ul>
<h3>Assembly</h3>
<ul>
<li>1 pack round dumpling wrappers</li>
<li>Water for sealing</li>
</ul>

<h2 id="method">Method</h2>
<ol>
<li><strong>Make filling:</strong> Mix all filling ingredients thoroughly</li>
<li><strong>Fill:</strong> Place 1 tablespoon filling in centre of wrapper</li>
<li><strong>Seal:</strong> Wet edges with water, fold in half, press to seal, pleat edges</li>
<li><strong>Repeat:</strong> Continue until filling is used</li>
</ol>

<h2 id="cooking">Cooking Methods</h2>
<h3>Boiled (Mul Mandu)</h3>
<p>Boil in salted water 6-8 minutes until they float. Serve in broth.</p>

<h3>Pan-Fried (Gun Mandu)</h3>
<p>Fry bottom until golden, add 50ml water, cover to steam 4-5 minutes.</p>

<h3>Steamed (Jjin Mandu)</h3>
<p>Steam over boiling water 10-12 minutes.</p>

<h2 id="dipping">Dipping Sauce</h2>
<p>Mix: 2 tbsp soy sauce + 1 tbsp rice vinegar + 1 tsp sesame oil + pinch chilli flakes</p>

<h2 id="tips">Tips</h2>
<ul>
<li>Squeeze kimchi VERY dry - wet filling = soggy dumplings</li>
<li>Don't overfill - they'll burst</li>
<li>Freeze uncooked on a tray, then bag - cook from frozen</li>
</ul>`
  }
]

async function main() {
  console.log('Inserting Phase 4 Uses Articles...\n')
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
      console.log(`✓ ${article.article_id}: ${article.title.substring(0, 50)}... (${wordCount} words)`)
    } catch (error) {
      console.error(`✗ ${article.article_id}: ${error}`)
    }
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`Inserted ${articles.length} articles | ${totalWords.toLocaleString()} total words`)
}

main().catch(console.error)
