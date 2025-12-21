import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

const rewrittenArticles: Record<string, { content: string; excerpt: string }> = {
  'recipes/easy-kimchi-recipe': {
    excerpt: "Not everyone has time for traditional kimchi. This simplified version gets you fermenting in under an hour of active work, with delicious results in just a few days.",
    content: `
<h2 id="intro">Why Make Easy Kimchi?</h2>
<p>I'll be honest – traditional kimchi takes time. The salting alone is 6-8 hours. If you're new to fermentation or just want something quicker, this simplified recipe is a brilliant place to start.</p>

<p>Is it as complex as the traditional version? No. Is it still delicious, probiotic-rich, and satisfying to make? Absolutely. Sometimes good enough is exactly right.</p>

<h2 id="what-makes-this-easier">What Makes This Version Easier</h2>
<p>A few strategic shortcuts:</p>
<ul>
<li>Smaller pieces mean faster salting</li>
<li>Less fermentation time – ready in 2-3 days</li>
<li>Fewer specialty ingredients</li>
<li>No rice paste (optional in many traditional recipes anyway)</li>
</ul>

<h2 id="ingredients">What You'll Need</h2>
<ul>
<li>500g napa cabbage, cut into 5cm pieces</li>
<li>2 tablespoons sea salt</li>
<li>3 tablespoons gochugaru (Korean red pepper flakes)</li>
<li>3 cloves garlic, minced</li>
<li>1cm piece ginger, grated</li>
<li>1 tablespoon fish sauce (or soy sauce for vegan)</li>
<li>1 teaspoon sugar</li>
<li>3 spring onions, cut into 3cm pieces</li>
</ul>

<h2 id="method">The Method</h2>
<p><strong>1. Quick salt (30-60 minutes):</strong> Toss cabbage with salt in a large bowl. Massage it in, then leave for 30-60 minutes, tossing occasionally. The cabbage should wilt significantly and release water.</p>

<p><strong>2. Rinse and dry:</strong> Rinse the cabbage twice in cold water, then squeeze out as much moisture as you can. This is important – excess water dilutes everything.</p>

<p><strong>3. Make the paste:</strong> Mix gochugaru, garlic, ginger, fish sauce, and sugar in a small bowl. It should form a rough paste.</p>

<p><strong>4. Combine:</strong> Toss the cabbage with the paste and spring onions. Make sure everything is well coated.</p>

<p><strong>5. Pack and ferment:</strong> Pack tightly into a clean jar, pressing to eliminate air bubbles. Leave 3cm headspace. Cover loosely and leave at room temperature for 2-3 days, pressing down daily.</p>

<p><strong>6. Refrigerate:</strong> Once it's tangy enough for your taste, transfer to the fridge.</p>

<h2 id="tips">Tips for Success</h2>
<ul>
<li>Taste it each day – fermentation speed varies with temperature</li>
<li>Press the vegetables down daily to keep them submerged</li>
<li>It will taste salty at first; this mellows with fermentation</li>
<li>The flavour continues developing in the fridge</li>
</ul>

<h2 id="variations">Easy Variations</h2>
<p><strong>Milder version:</strong> Reduce gochugaru to 1-2 tablespoons</p>
<p><strong>Extra crunchy:</strong> Add julienned carrots or radish</p>
<p><strong>Sweeter:</strong> Add a tablespoon of grated apple or pear</p>

<h2 id="when-ready">When Is It Ready?</h2>
<p>You're looking for a pleasant tanginess and the characteristic kimchi funk. At room temperature, this usually takes 2-3 days in a warm kitchen, possibly 4-5 in winter.</p>

<p>There's no wrong answer – some people prefer young, fresh kimchi; others like it more fermented. Experiment to find what you enjoy.</p>
`
  },

  'recipes/kimchi-jjigae': {
    excerpt: "Kimchi jjigae is the ultimate comfort food – a bubbling, spicy stew that transforms older kimchi into something magnificent. This is my go-to recipe for cold evenings.",
    content: `
<h2 id="intro">The Perfect Use for Old Kimchi</h2>
<p>If you've got kimchi that's been sitting in your fridge for a while – properly sour and maybe a bit past its prime for eating raw – don't throw it away. This is exactly what you want for kimchi jjigae.</p>

<p>In Korean cooking, well-fermented kimchi is prized for cooking. The deep, funky sourness that might be too intense for eating straight becomes the perfect foundation for stews and fried rice. Kimchi jjigae is perhaps the most beloved example.</p>

<h2 id="ingredients">What You'll Need (Serves 2-3)</h2>
<ul>
<li>200g well-fermented kimchi, roughly chopped (plus 3-4 tablespoons of the juice)</li>
<li>150g pork belly, sliced thin (or use firm tofu for vegetarian)</li>
<li>1 tablespoon neutral oil</li>
<li>3 cloves garlic, minced</li>
<li>1 tablespoon gochugaru (optional, for extra heat)</li>
<li>500ml water or light stock</li>
<li>1 tablespoon gochujang</li>
<li>1 teaspoon sugar</li>
<li>200g silken tofu, cut into large cubes</li>
<li>2 spring onions, sliced</li>
<li>1 egg (optional)</li>
</ul>

<h2 id="method">The Method</h2>
<p><strong>1. Cook the pork:</strong> Heat oil in a heavy pot or Korean stone bowl (dolsot) over medium-high heat. Add pork belly and cook until starting to brown, about 3-4 minutes.</p>

<p><strong>2. Add kimchi:</strong> Add the chopped kimchi and cook together for 3-4 minutes, letting it get a bit caramelised. This develops deep flavour.</p>

<p><strong>3. Build the stew:</strong> Add garlic and gochugaru, stir for 30 seconds. Pour in water, kimchi juice, gochujang, and sugar. Bring to a boil.</p>

<p><strong>4. Simmer:</strong> Reduce heat and simmer for 15-20 minutes. The longer you simmer, the more the flavours meld. Taste and adjust seasoning – you might want more salt or sugar.</p>

<p><strong>5. Add tofu:</strong> Gently add tofu cubes and simmer another 5 minutes. You want the tofu heated through but still intact.</p>

<p><strong>6. Finish:</strong> Add spring onions. If you like, crack an egg into the bubbling stew and cover for a minute until just set.</p>

<h2 id="serving">Serving</h2>
<p>Serve immediately, still bubbling if possible, with steamed rice. In Korean restaurants, it often comes in the stone pot it was cooked in, staying hot throughout the meal.</p>

<p>This is deeply comforting food – spicy, sour, savoury, and warming. Perfect for cold evenings or whenever you need reviving.</p>

<h2 id="variations">Variations</h2>
<ul>
<li><strong>With tuna:</strong> Replace pork with a tin of tuna – surprisingly delicious</li>
<li><strong>With spam:</strong> A Korean-American classic</li>
<li><strong>Seafood:</strong> Add prawns, clams, or squid</li>
<li><strong>Vegetarian:</strong> Skip the pork, add more tofu and mushrooms</li>
</ul>

<h2 id="tips">Tips</h2>
<ul>
<li>The older and sourer your kimchi, the better for this dish</li>
<li>Don't skip the kimchi juice – it adds crucial acidity</li>
<li>A Korean stone bowl (dolsot) keeps it bubbling at the table, but any heavy pot works</li>
<li>Leftovers are excellent the next day – the flavours only improve</li>
</ul>
`
  },

  'health/kimchi-probiotics': {
    excerpt: "Everyone talks about probiotics in kimchi, but what does that actually mean? Here's what I've learned about the living bacteria that make fermented foods so beneficial.",
    content: `
<h2 id="intro">What Are Probiotics, Actually?</h2>
<p>The word "probiotic" gets thrown around a lot, often by marketers who may not understand what it means. So let's be clear: probiotics are live microorganisms – bacteria and yeasts – that confer health benefits when consumed in adequate amounts.</p>

<p>Properly fermented kimchi is teeming with these organisms. During lacto-fermentation, beneficial bacteria – primarily various Lactobacillus species – multiply rapidly, producing lactic acid (which gives kimchi its tang) and colonising the environment.</p>

<h2 id="the-science">The Science (Simply Put)</h2>
<p>When you eat kimchi, you're consuming billions of live bacteria. Some of these survive the journey through your stomach acid and take up residence in your gut, joining the trillions of microorganisms already living there – your gut microbiome.</p>

<p>This microbiome affects far more than digestion. Research increasingly links gut health to immune function, mental health, metabolism, and even skin conditions. It's a genuinely fascinating area of science.</p>

<h2 id="which-bacteria">Which Bacteria Are in Kimchi?</h2>
<p>The bacterial profile of kimchi varies depending on ingredients, fermentation time, and conditions. Common species include:</p>
<ul>
<li><strong>Lactobacillus plantarum:</strong> One of the most studied probiotics, associated with immune support</li>
<li><strong>Lactobacillus brevis:</strong> Produces antimicrobial compounds</li>
<li><strong>Leuconostoc mesenteroides:</strong> Typically dominant in early fermentation</li>
<li><strong>Weissella species:</strong> Contribute to flavour development</li>
</ul>

<p>A well-fermented jar of kimchi can contain billions of these organisms per gram. That's significant.</p>

<h2 id="not-all-kimchi">Not All Kimchi Has Probiotics</h2>
<p>Here's the crucial point: only unpasteurised, naturally fermented kimchi contains live probiotics. Any kimchi that's been heat-treated, pasteurised, or sits on a non-refrigerated shelf has had its beneficial bacteria killed.</p>

<p>This doesn't make pasteurised kimchi bad – it can still taste good and has nutritional value. But if probiotics are your goal, you need the live stuff. Look for:</p>
<ul>
<li>Refrigerated products (not shelf-stable)</li>
<li>"Live cultures" or "unpasteurised" on the label</li>
<li>Active bubbling when you open the jar (fermentation is ongoing)</li>
</ul>

<h2 id="how-much">How Much Do You Need?</h2>
<p>There's no definitive answer. Studies on fermented foods typically use varying amounts, and individual responses differ. Most research suggests regular, moderate consumption is beneficial – think a few tablespoons daily rather than eating a jar a week.</p>

<p>In Korea, kimchi is eaten daily as a side dish – typically 50-100g. That's probably a reasonable target if you're looking for consistent probiotic intake.</p>

<h2 id="beyond-kimchi">Beyond Kimchi</h2>
<p>Kimchi isn't the only probiotic food. Other options include:</p>
<ul>
<li>Sauerkraut (unpasteurised)</li>
<li>Yoghurt with live cultures</li>
<li>Kefir</li>
<li>Kombucha</li>
<li>Miso (when not cooked)</li>
</ul>

<p>Variety is probably valuable – different fermented foods contain different strains of beneficial organisms.</p>

<h2 id="my-take">My Perspective</h2>
<p>I'm a chef, not a microbiologist. But I've read enough research and experienced enough personal benefit to believe that regularly eating properly fermented foods is a genuinely good idea.</p>

<p>The science is still developing, and I'm wary of overclaiming. But humans have been eating fermented foods for thousands of years. There's wisdom in that tradition.</p>
`
  },

  'culture/history-of-kimchi': {
    excerpt: "Kimchi has been central to Korean cuisine for over 2,000 years – though it looked very different before chillies arrived from the Americas. Here's the fascinating story.",
    content: `
<h2 id="intro">A Living Tradition</h2>
<p>When I first started researching kimchi properly, I assumed it had always been the spicy, red-hued dish we know today. The reality is more interesting – and a reminder that all food traditions evolve.</p>

<p>Kimchi's history spans over two millennia, but the version we're familiar with is only a few hundred years old. The story involves ancient preservation techniques, foreign trade, and a vegetable that crossed oceans.</p>

<h2 id="early-history">Early Kimchi (Before the 12th Century)</h2>
<p>The earliest forms of kimchi were simply salted vegetables. Korean texts from the Three Kingdoms period (37 BCE – 7 CE) mention preserving vegetables in salt, and the word "ji" (from which kimchi derives) appears in records from this era.</p>

<p>This early kimchi wasn't spicy – chillies didn't exist in Korea yet. It was closer to what we might call salt-pickled vegetables: preserved in brine, sometimes with garlic and ginger, but no heat.</p>

<h2 id="medieval-development">Medieval Development (12th-16th Century)</h2>
<p>By the Goryeo Dynasty (918-1392), kimchi had become more sophisticated. Additional seasonings appeared – ginger, green onions, perhaps some early forms of fermented seafood. Different vegetables were used depending on the region and season.</p>

<p>Still no chillies, though. Korean preserved vegetables during this period were probably closer to Chinese pickles or Japanese tsukemono than to modern kimchi.</p>

<h2 id="chilli-revolution">The Chilli Revolution (17th-18th Century)</h2>
<p>Everything changed with the arrival of chilli peppers. These originated in the Americas and reached Asia via Portuguese and Spanish traders in the 16th century. They arrived in Korea through Japan, probably during or after the Japanese invasions of the 1590s.</p>

<p>Initially, chillies were viewed with suspicion – they were novel and intensely pungent. But Korean cooks gradually adopted them, and by the 18th century, kimchi was becoming the spicy, red-coloured dish we recognise today.</p>

<p>The addition of gochugaru (Korean red pepper flakes) wasn't just about flavour. Chillies have antimicrobial properties that help preserve the vegetables and support fermentation.</p>

<h2 id="modern-kimchi">Modern Kimchi (19th Century Onwards)</h2>
<p>The 19th century saw kimchi evolve into its modern form. Recipes became more standardised. Napa cabbage (brought to Korea from China) became the dominant vegetable, though many regional variations continued.</p>

<p>Kimjang – the communal autumn tradition of making large quantities of kimchi for winter – became firmly established. This remains an important cultural practice today, recognised by UNESCO as Intangible Cultural Heritage in 2013.</p>

<h2 id="varieties">The Incredible Variety</h2>
<p>Korea recognises over 200 types of kimchi. Beyond the familiar baechu-kimchi (napa cabbage), there's:</p>
<ul>
<li><strong>Kkakdugi:</strong> Cubed radish kimchi</li>
<li><strong>Oi-sobagi:</strong> Stuffed cucumber kimchi</li>
<li><strong>Baek-kimchi:</strong> White kimchi, without chilli</li>
<li><strong>Mul-kimchi:</strong> Water kimchi, with a tangy brine</li>
<li><strong>Yeolmu-kimchi:</strong> Young summer radish kimchi</li>
</ul>

<p>Each region has its specialities. Coastal areas use more seafood. Inland regions might use less fish sauce. The North traditionally makes less spicy kimchi than the South.</p>

<h2 id="global-spread">Global Spread</h2>
<p>Kimchi remained largely within Korea until the late 20th century. The Korean diaspora, growing interest in fermented foods, and globalisation have since made it available worldwide.</p>

<p>Now you can buy kimchi in British supermarkets – something unthinkable even twenty years ago. It's been an extraordinary journey from ancient salt-preserved vegetables to global superfood.</p>

<h2 id="my-reflection">My Reflection</h2>
<p>I find this history humbling. The kimchi I make in my London kitchen is connected to thousands of years of Korean tradition, shaped by global trade routes, influenced by countless generations of Korean cooks.</p>

<p>I'm not Korean. I can't claim this history as my own. But I can appreciate it, learn from it, and try to honour it by making kimchi with care and respect for the tradition.</p>
`
  },

  'culture/types-of-kimchi': {
    excerpt: "There are over 200 documented types of kimchi in Korea. Here's my guide to the most important varieties and what makes each one special.",
    content: `
<h2 id="intro">More Than Just Cabbage</h2>
<p>When most people think of kimchi, they picture the spicy napa cabbage version. But that's just one expression of an incredibly diverse tradition. Korean cuisine includes hundreds of kimchi varieties, each with its own character, seasonality, and purpose.</p>

<p>I've tried many of these over the years and make several regularly. Here are the ones I think are most worth knowing.</p>

<h2 id="baechu-kimchi">Baechu-Kimchi (Napa Cabbage Kimchi)</h2>
<p>The most famous, and deservedly so. Whole napa cabbage leaves are salted, then coated with a paste of gochugaru, garlic, ginger, fish sauce, and often rice porridge. The fermented result is what most of us mean when we say "kimchi."</p>
<p><strong>Best for:</strong> Everything. Eating straight, cooking, fried rice, stews.</p>
<p><strong>Fermentation:</strong> Can be eaten fresh but develops more complexity with age.</p>

<h2 id="kkakdugi">Kkakdugi (Cubed Radish Kimchi)</h2>
<p>Korean radish (mu) cut into cubes and fermented with similar seasonings to baechu-kimchi. The texture is crunchy and refreshing, the flavour clean and slightly sweet.</p>
<p><strong>Best for:</strong> Serving with soups and stews, especially seolleongtang (ox bone soup).</p>
<p><strong>Note:</strong> Korean radish is milder than the daikon used in Japanese cooking. If substituting, use less.</p>

<h2 id="oi-sobagi">Oi-Sobagi (Stuffed Cucumber Kimchi)</h2>
<p>Cucumbers scored lengthwise and stuffed with a filling of chives, radish, and spice paste. A summer speciality – cucumbers are at their best, and the fresher flavour suits warm weather.</p>
<p><strong>Best for:</strong> Eating fresh after minimal fermentation (1-2 days). The crunch is the point.</p>
<p><strong>Seasonality:</strong> Traditionally a summer kimchi.</p>

<h2 id="baek-kimchi">Baek-Kimchi (White Kimchi)</h2>
<p>Made without red pepper, so it stays white. Often includes chestnuts, pine nuts, and jujubes for subtle sweetness. The fermentation produces a clean, mild tanginess.</p>
<p><strong>Best for:</strong> Those who can't handle heat, or as a palate cleanser alongside spicier dishes.</p>
<p><strong>Historical note:</strong> This is closer to what kimchi looked like before chillies arrived in Korea.</p>

<h2 id="mul-kimchi">Mul-Kimchi (Water Kimchi)</h2>
<p>Various vegetables fermented in a watery brine rather than a thick paste. The brine itself is the prize – tangy, slightly effervescent, often drunk as a digestive aid.</p>
<p><strong>Best for:</strong> Serving cold in summer. The brine is excellent for making cold noodles (naengmyeon).</p>

<h2 id="pa-kimchi">Pa-Kimchi (Green Onion Kimchi)</h2>
<p>Whole green onions fermented with gochugaru and fish sauce. Intensely savoury with a wonderful allium bite.</p>
<p><strong>Best for:</strong> Pairing with grilled meats. The rich flavours cut through fat beautifully.</p>

<h2 id="chonggak-kimchi">Chonggak-Kimchi (Ponytail Radish Kimchi)</h2>
<p>Small, young radishes with their greens still attached, fermented whole. Named for the resemblance to a traditional Korean bachelor's hairstyle.</p>
<p><strong>Best for:</strong> Eating with rice. The combination of crunchy radish and tender greens is lovely.</p>

<h2 id="yeolmu-kimchi">Yeolmu-Kimchi (Young Summer Radish Kimchi)</h2>
<p>Made with the leafy tops of young summer radishes. Mild, tender, and slightly bitter in a pleasant way.</p>
<p><strong>Best for:</strong> Mixing into bibimbap or eating with cold noodles in summer.</p>

<h2 id="bossam-kimchi">Bossam-Kimchi (Wrapped Kimchi)</h2>
<p>A specialty of Kaesong, this elaborate kimchi wraps various ingredients – seafood, nuts, dates, mushrooms – inside cabbage leaves. It's almost architectural in complexity.</p>
<p><strong>Best for:</strong> Special occasions. This is festive kimchi.</p>

<h2 id="regional-variations">Regional Variations</h2>
<p>Beyond these types, regional variations abound:</p>
<ul>
<li><strong>Northern styles:</strong> Generally less spicy, more watery, milder fish sauce</li>
<li><strong>Southern styles:</strong> More gochugaru, more fermented seafood, more intense flavours</li>
<li><strong>Coastal areas:</strong> Fresh seafood added – oysters, squid, fermented fish</li>
<li><strong>Inland areas:</strong> Less seafood, sometimes no fish sauce at all</li>
</ul>

<h2 id="my-favourites">Which Should You Try?</h2>
<p>Start with baechu-kimchi – it's classic for good reason. Once you're comfortable with that, branch out to kkakdugi (excellent and relatively easy to make) and baek-kimchi (great if you or someone you're cooking for doesn't like spice).</p>

<p>Each type has its place. Part of the joy of kimchi is discovering which varieties suit your taste and your cooking.</p>
`
  }
}

async function main() {
  console.log('Batch 3: Updating more articles in Ollie\'s voice...\n')

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

  console.log('\n✅ Batch 3 complete!')
}

main().catch(console.error)
