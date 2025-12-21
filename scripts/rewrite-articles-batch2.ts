import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

const rewrittenArticles: Record<string, { content: string; excerpt: string }> = {
  'buy/best-kimchi-uk': {
    excerpt: "Finding good kimchi in the UK used to be a challenge. Now we're spoiled for choice – but not all kimchi is created equal. Here's my honest guide to what's worth buying.",
    content: `
<h2 id="intro">The UK Kimchi Scene Has Changed</h2>
<p>When I first started cooking with kimchi fifteen years ago, finding it in the UK was genuinely difficult. You'd have to trek to specialist Korean supermarkets or make do with sad, pasteurised jars from the "world foods" aisle. Times have changed dramatically.</p>

<p>Now you can find kimchi in Tesco, Sainsbury's, Waitrose, and most independent health food shops. That's wonderful for accessibility, but it creates a new problem: how do you know what's actually good?</p>

<p>I've tried dozens of brands over the years – some excellent, some disappointing, some frankly baffling. Here's what I look for and what I recommend.</p>

<h2 id="what-makes-good-kimchi">What Makes Good Kimchi?</h2>
<p>Before I get into specific brands, let me explain what separates great kimchi from mediocre kimchi:</p>

<p><strong>1. It should be alive</strong><br/>
Real kimchi is naturally fermented and contains live bacteria. This means it must be refrigerated and will continue to develop over time. Shelf-stable kimchi has been pasteurised, killing the beneficial probiotics. It might still taste okay, but you're missing half the point.</p>

<p><strong>2. Simple ingredients</strong><br/>
The best kimchi contains napa cabbage, salt, Korean red pepper (gochugaru), garlic, ginger, and typically fish sauce or fermented seafood. Maybe spring onions, radish, or carrots. That's it. If the ingredients list is full of things you don't recognise, question it.</p>

<p><strong>3. Proper fermentation</strong><br/>
Good kimchi has depth and complexity. It should be tangy from fermentation, not vinegar. If acidity is achieved through added vinegar rather than natural fermentation, it's a shortcut that produces inferior results.</p>

<p><strong>4. Texture matters</strong><br/>
The cabbage should retain some crunch – fermented but not mushy. Overly soft kimchi suggests either old product or poor technique.</p>

<h2 id="supermarket-options">What's Available in Supermarkets</h2>
<p>The supermarket options have improved enormously. Here's my honest assessment:</p>

<p><strong>Tesco:</strong> They stock a couple of brands now. The refrigerated options are decent for everyday use – properly fermented, reasonable flavour. Not exceptional, but reliable.</p>

<p><strong>Sainsbury's:</strong> Similar story. Their own-brand offering is acceptable. I'd look for brands like Eaten Alive or Mama O's if they stock them.</p>

<p><strong>Waitrose:</strong> Generally better selection and more premium options. Worth checking their Korean section.</p>

<p><strong>Whole Foods / Planet Organic:</strong> If you have access to these, they typically stock smaller, artisan producers. This is where you'll find the really good stuff.</p>

<h2 id="artisan-producers">UK Artisan Producers Worth Knowing</h2>
<p>The exciting development in recent years has been the emergence of small-batch UK producers making excellent kimchi. Supporting these businesses means fresher product, better quality, and keeping money in the local food economy.</p>

<p>I won't list every producer – the scene is constantly evolving – but look for brands that:</p>
<ul>
<li>Make small batches</li>
<li>Use traditional fermentation</li>
<li>Sell refrigerated, unpasteurised product</li>
<li>Are transparent about their ingredients and process</li>
</ul>

<p>Many sell online and will ship directly to you. Some offer subscriptions, which is handy if you get through a lot.</p>

<h2 id="korean-supermarkets">Korean Supermarkets: The Original Source</h2>
<p>If you're lucky enough to live near a Korean supermarket, you'll find the widest selection and often the best prices. London has several excellent options – New Malden in particular is worth a trip.</p>

<p>In these shops, you'll find brands imported directly from Korea alongside UK-made options. Don't be intimidated by Korean labelling – most products have English translations, and staff are usually happy to help.</p>

<h2 id="online">Buying Kimchi Online</h2>
<p>Online ordering has made good kimchi accessible to everyone, regardless of location. Most producers use insulated packaging and next-day delivery to ensure the product arrives in good condition.</p>

<p>Just be aware of minimum order values and delivery costs – kimchi is heavy, and shipping refrigerated products isn't cheap. Often makes sense to order several jars at once.</p>

<h2 id="making-your-own">Or Just Make Your Own</h2>
<p>I realise I'm slightly undermining the point of this article, but honestly? The best kimchi is homemade. Once you've got the technique down, it's straightforward and infinitely customisable. You control the ingredients, the spice level, the fermentation time.</p>

<p>Check out my traditional kimchi recipe if you're tempted. It's genuinely not difficult, and the satisfaction of eating something you've fermented yourself is considerable.</p>

<h2 id="storage">How to Store Kimchi</h2>
<p>However you source your kimchi:</p>
<ul>
<li>Always keep it refrigerated</li>
<li>Use clean utensils to avoid contamination</li>
<li>Press down the vegetables below the liquid level</li>
<li>It will keep for months, developing more complex flavours over time</li>
<li>Older, very sour kimchi is perfect for cooking</li>
</ul>

<h2 id="final-thoughts">Final Thoughts</h2>
<p>The best kimchi for you depends on your taste preferences, budget, and what's accessible. Start by trying a few different options and see what you like. Pay attention to fermentation and ingredients rather than fancy packaging.</p>

<p>And if you find a producer you love, stick with them. Consistency matters with fermented foods.</p>
`
  },

  'recipes/vegan-kimchi': {
    excerpt: "Traditional kimchi contains fish sauce or fermented seafood. But you absolutely can make brilliant vegan kimchi – it just requires a bit of creativity to replace that umami depth.",
    content: `
<h2 id="intro">Why Vegan Kimchi?</h2>
<p>Traditional Korean kimchi almost always contains some form of fermented seafood – fish sauce, fermented shrimp paste, or sometimes raw oysters. This provides the deep umami backbone that makes kimchi so addictive.</p>

<p>But there are plenty of reasons to make kimchi without fish: dietary restrictions, ethical choices, or simply wanting a cleaner flavour. And here's the good news – vegan kimchi can be absolutely delicious. You just need to think about how to replace that savoury depth.</p>

<h2 id="umami-alternatives">Building Umami Without Fish</h2>
<p>The key to great vegan kimchi is understanding what fish sauce actually contributes: glutamates that hit your umami receptors, creating that deep, savoury satisfaction. Fortunately, plenty of plant foods are rich in these same compounds:</p>

<p><strong>Soy sauce or tamari:</strong> The most obvious choice. Use a good quality naturally brewed version. Tamari is typically gluten-free if that matters.</p>

<p><strong>Doenjang (Korean fermented soybean paste):</strong> Adds incredible depth. Similar to miso but more pungent.</p>

<p><strong>Miso:</strong> More readily available than doenjang. White miso for milder kimchi, red miso for more intense flavour.</p>

<p><strong>Kombu (kelp):</strong> Soak in water to extract glutamates, or add directly to your paste. This is traditional in some Korean vegan preparations.</p>

<p><strong>Dried shiitake mushrooms:</strong> Another glutamate powerhouse. Soak and use the liquid, or blitz the dried mushrooms into powder.</p>

<p>I typically use a combination – soy sauce plus miso plus kombu gives you layers of umami that rival the fish sauce version.</p>

<h2 id="recipe">My Vegan Kimchi Recipe</h2>

<h3>Ingredients</h3>
<p><strong>For the cabbage:</strong></p>
<ul>
<li>1 large napa cabbage (about 1.5kg)</li>
<li>80g sea salt</li>
</ul>

<p><strong>For the paste:</strong></p>
<ul>
<li>3 tablespoons gochugaru (Korean red pepper flakes)</li>
<li>1 tablespoon glutinous rice flour</li>
<li>200ml water (or kombu soaking water)</li>
<li>3 tablespoons soy sauce or tamari</li>
<li>1 tablespoon white miso paste</li>
<li>5 cloves garlic, minced</li>
<li>2cm piece ginger, grated</li>
<li>1 tablespoon sugar</li>
<li>4 spring onions, cut into 3cm lengths</li>
<li>1 medium carrot, julienned</li>
<li>Optional: 5cm piece kombu, soaked and finely sliced</li>
</ul>

<h3>Method</h3>
<p><strong>Salt the cabbage:</strong> Cut cabbage into quarters lengthwise. Sprinkle salt between leaves, concentrating on the thick white parts. Leave 6-8 hours or overnight until wilted and flexible. Rinse thoroughly three times, squeeze out excess water.</p>

<p><strong>Make the rice paste:</strong> Whisk rice flour and water in a small pan over medium heat until thickened and translucent. Cool completely.</p>

<p><strong>Make the spice paste:</strong> Combine cooled rice paste with gochugaru, soy sauce, miso, garlic, ginger, and sugar. Mix well. It should be thick, fragrant, and deeply savoury. Fold in spring onions and carrot.</p>

<p><strong>Assemble:</strong> Wearing gloves, work paste between every leaf of the cabbage. Pack tightly into clean jars, pressing to eliminate air pockets.</p>

<p><strong>Ferment:</strong> Leave at room temperature 2-5 days, pressing daily. When sufficiently tangy, refrigerate.</p>

<h2 id="tips">Tips for Success</h2>
<ul>
<li>Don't skip the miso – it adds crucial depth that soy sauce alone can't provide</li>
<li>Kombu really does make a difference. Soak a piece in the water you'll use for the rice paste</li>
<li>Vegan kimchi can ferment slightly faster than traditional versions, so taste daily</li>
<li>The flavour will continue developing in the fridge – it often tastes better after a week or two</li>
</ul>

<h2 id="variations">Variations to Try</h2>
<p>Once you've mastered the basic technique, experiment:</p>
<ul>
<li>Add a tablespoon of gochujang for extra depth</li>
<li>Try different vegetables – radish, cucumber, spring greens</li>
<li>Add a splash of rice vinegar if you want extra tang</li>
<li>Include sliced apple or Asian pear for natural sweetness</li>
</ul>

<h2 id="conclusion">Is It as Good as Traditional Kimchi?</h2>
<p>Honestly? It's different. Not worse, just different. The vegan version has a cleaner, brighter flavour. Some people actually prefer it. Traditional kimchi has more complexity and a certain funk from the fermented seafood.</p>

<p>Both are delicious. Both are valid. Don't let anyone tell you that vegan kimchi isn't "real" kimchi – Korean cuisine has included vegetarian fermented vegetables for centuries, particularly in Buddhist temple cooking.</p>

<p>Make what works for you.</p>
`
  },

  'uses/recipes/kimchi-fried-rice': {
    excerpt: "Kimchi fried rice might be the perfect use for older, well-fermented kimchi. It's quick, satisfying, and endlessly variable. Here's how I make mine.",
    content: `
<h2 id="intro">The Joy of Kimchi Fried Rice</h2>
<p>This is probably the dish I make most often with kimchi. It's fast, requires minimal ingredients, and transforms leftover rice and ageing kimchi into something genuinely delicious. In Korean homes, it's classic comfort food – the kind of thing you throw together late at night or for a quick lunch.</p>

<p>The key insight is that older, more fermented kimchi works better than fresh. As kimchi ages, it becomes more sour and the texture softens – perfect for stir-frying. If your kimchi is getting a bit too funky to eat straight, it's ideal for this.</p>

<h2 id="basic-recipe">The Basic Version</h2>

<h3>Ingredients (serves 2)</h3>
<ul>
<li>2 cups day-old rice (freshly cooked rice is too moist)</li>
<li>150g well-fermented kimchi, roughly chopped</li>
<li>2 tablespoons kimchi juice (from the jar)</li>
<li>1 tablespoon neutral oil or sesame oil</li>
<li>2 eggs</li>
<li>2 spring onions, sliced</li>
<li>1 teaspoon soy sauce</li>
<li>Optional: 1 teaspoon gochujang, sesame seeds, nori strips</li>
</ul>

<h3>Method</h3>
<p>Heat a wok or large frying pan over high heat. Add oil, then the chopped kimchi. Stir-fry for 2-3 minutes until the kimchi starts to caramelise slightly at the edges – this is where the magic happens.</p>

<p>Add the rice, breaking up any clumps. Stir-fry vigorously, keeping everything moving. After a couple of minutes, add the kimchi juice and soy sauce. Continue cooking until the rice is hot throughout and has taken on the colour of the kimchi.</p>

<p>Push the rice to one side of the pan. Crack the eggs into the empty space and scramble them, then mix through the rice. Alternatively, fry eggs sunny-side-up and serve on top – the runny yolk mixing into the rice as you eat is wonderful.</p>

<p>Serve immediately, topped with spring onions and sesame seeds.</p>

<h2 id="variations">Making It Your Own</h2>
<p>The beauty of fried rice is its flexibility. Here are variations I return to:</p>

<p><strong>With pork:</strong> Add 100g diced bacon or pork belly at the start. Let it render and crisp before adding the kimchi. The pork fat is incredible here.</p>

<p><strong>With spam:</strong> Don't judge. Cubed spam, crisped in the pan, is a Korean-American classic for good reason.</p>

<p><strong>With vegetables:</strong> Bean sprouts, diced courgette, sweetcorn – add whatever needs using up.</p>

<p><strong>With cheese:</strong> Sounds wrong, tastes right. Mozzarella stirred through at the end creates stretchy, gooey pockets. Top with more cheese and briefly grill if you want it extra indulgent.</p>

<p><strong>With tofu:</strong> Firm tofu, pressed and diced, makes this a complete vegetarian meal.</p>

<h2 id="tips">Tips for Better Fried Rice</h2>
<ul>
<li><strong>Cold rice is essential.</strong> Freshly cooked rice is too moist and will go mushy. Cook your rice the day before and refrigerate it.</li>
<li><strong>High heat.</strong> You want the rice to fry, not steam. Don't overcrowd the pan.</li>
<li><strong>Don't stir constantly.</strong> Let the rice sit for moments to develop a bit of crust before tossing.</li>
<li><strong>The kimchi juice matters.</strong> It adds flavour and colour. Don't drain your kimchi before using it.</li>
</ul>

<h2 id="serving">Serving Suggestions</h2>
<p>Kimchi fried rice is complete in itself, but I often serve it with:</p>
<ul>
<li>A fried egg on top (mandatory in my house)</li>
<li>Extra fresh kimchi on the side</li>
<li>A drizzle of sesame oil to finish</li>
<li>Seaweed strips (kim/nori)</li>
<li>Pickled radish</li>
</ul>

<p>It's also excellent as a filling for rice paper rolls or stuffed into lettuce wraps.</p>

<h2 id="conclusion">Final Thoughts</h2>
<p>I've eaten this dish countless times and never tire of it. It's the kind of recipe where the whole is greater than the sum of its parts – simple ingredients transformed by technique and that magical fermented flavour of well-aged kimchi.</p>

<p>If you've got old kimchi and cold rice, you're fifteen minutes away from something really satisfying.</p>
`
  },

  'guides/how-to-store-kimchi': {
    excerpt: "Kimchi is alive and constantly changing. Proper storage doesn't stop this – it just slows it down. Here's everything I've learned about keeping kimchi at its best.",
    content: `
<h2 id="intro">Understanding Living Food</h2>
<p>The first thing to understand about storing kimchi is that it's not like storing most other foods. Kimchi is alive – literally teeming with beneficial bacteria that are continuously fermenting, producing gases and acids, changing the flavour and texture over time.</p>

<p>You can't stop this process; you can only slow it down. And frankly, you wouldn't want to stop it – the evolution of kimchi from fresh and crunchy to deeply fermented and tangy is one of its great pleasures.</p>

<h2 id="refrigeration">The Fridge is Your Friend</h2>
<p>Cold temperatures slow fermentation dramatically. At fridge temperature (around 4°C), kimchi will continue to develop, but slowly enough that it remains pleasant for months.</p>

<p>Always store kimchi in the refrigerator. Room temperature fermentation is for the initial phase only – once your kimchi reaches your preferred level of tanginess, get it cold.</p>

<p>In Korea, many families have dedicated kimchi refrigerators that maintain even lower temperatures. You probably don't need one of these, but if you're serious about kimchi, a spot in the coldest part of your fridge is worth designating.</p>

<h2 id="containers">Choosing the Right Container</h2>
<p><strong>Glass jars:</strong> My preference. Non-reactive, easy to clean, you can see what's happening inside. Wide-mouth jars are easier to pack and access. Make sure they seal properly.</p>

<p><strong>Ceramic crocks:</strong> Traditional and beautiful. Good for larger quantities. Often come with weights to keep vegetables submerged.</p>

<p><strong>Food-grade plastic containers:</strong> Practical and cheap. The kimchi smell will never leave them, so dedicate them to kimchi permanently.</p>

<p><strong>What to avoid:</strong> Metal containers (the acid will react), containers that don't seal well, anything that's previously held strong-smelling foods.</p>

<h2 id="keeping-submerged">The Submersion Rule</h2>
<p>Here's the most important principle: keep the vegetables below the liquid level. Vegetables exposed to air will develop surface mould. Vegetables submerged in the acidic brine are protected.</p>

<p>If your kimchi doesn't produce enough liquid naturally, you can add a bit of salted water. Press the vegetables down after each use. Some people use smaller weights or even a ziplock bag filled with water to keep everything submerged.</p>

<p>Don't panic if you see a bit of white film on the surface – this is usually kahm yeast, which is harmless. Skim it off and press the vegetables back down. If you see fuzzy mould in colours other than white, that section should be discarded.</p>

<h2 id="utensils">Clean Utensils Every Time</h2>
<p>Always use clean utensils when serving kimchi. Cross-contamination introduces unwanted bacteria that can cause spoilage. I keep a dedicated spoon or fork just for my kimchi jar.</p>

<p>Never double-dip with utensils that have touched other food. This sounds basic, but it's the most common cause of kimchi going off prematurely.</p>

<h2 id="timeline">The Flavour Timeline</h2>
<p>Understanding how kimchi evolves helps you use it appropriately:</p>

<p><strong>Fresh (0-2 weeks):</strong> Bright, crunchy, mildly tangy. Best eaten as a side dish, on rice, in salads.</p>

<p><strong>Medium fermentation (2-4 weeks):</strong> Tangier, softer texture, more complex flavour. Still great raw, also good for cooking.</p>

<p><strong>Well-fermented (1-3 months):</strong> Quite sour, softer vegetables, deep funky flavour. Perfect for stews, fried rice, pancakes.</p>

<p><strong>Very old (3+ months):</strong> Very sour, soft texture. Best used in cooking where the strong flavour is an asset – kimchi jjigae is ideal.</p>

<p>None of these stages is better than the others – they're just different. I try to keep kimchi at various stages so I always have the right one for what I'm cooking.</p>

<h2 id="troubleshooting">When Things Go Wrong</h2>
<p><strong>Too sour?</strong> It's not spoiled, just very fermented. Use it in cooking. Or rinse briefly before eating.</p>

<p><strong>Soft texture?</strong> Normal for older kimchi. Still perfectly good, especially for cooking.</p>

<p><strong>Fizzy?</strong> Active fermentation produces CO2. This is normal and harmless.</p>

<p><strong>Smells different?</strong> Kimchi smell intensifies as it ferments. As long as it doesn't smell rotten or off, it's fine.</p>

<p><strong>Actual mould?</strong> Surface kahm yeast can be removed. Fuzzy coloured mould throughout means discard.</p>

<h2 id="freezing">Can You Freeze Kimchi?</h2>
<p>You can, but I don't recommend it for eating straight. Freezing kills some of the beneficial bacteria and changes the texture. However, frozen kimchi is fine for cooking – throw it straight into stews or fried rice.</p>

<p>If you do freeze, use airtight containers and expect it to be mushier when thawed.</p>

<h2 id="conclusion">Embrace the Evolution</h2>
<p>The best advice I can give is to stop trying to preserve kimchi in a fixed state. Let it evolve. Learn to appreciate different stages. Keep tasting it as it changes.</p>

<p>This is living food behaving the way living food should. That's not a problem to solve – it's the whole point.</p>
`
  }
}

async function main() {
  console.log('Batch 2: Updating more articles in Ollie\'s voice...\n')

  for (const [slug, newContent] of Object.entries(rewrittenArticles)) {
    console.log(`Updating: ${slug}`)

    const wordCount = newContent.content.split(/\s+/).filter(w => w.length > 0).length

    await sql`
      UPDATE seo_articles
      SET
        content = ${newContent.content},
        excerpt = ${newContent.excerpt},
        word_count = ${wordCount},
        author = 'Ollie Rowe',
        updated_at = NOW()
      WHERE slug = ${slug}
    `

    console.log(`  ✓ Updated (${wordCount} words)`)
  }

  console.log('\n✅ Batch 2 complete!')
}

main().catch(console.error)
