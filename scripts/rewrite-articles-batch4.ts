import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

const rewrittenArticles: Record<string, { content: string; excerpt: string }> = {
  'recipes/quick-kimchi': {
    excerpt: "Sometimes you need kimchi now, not in a week. This quick version – called geotjeori in Korean – gives you that fresh, crunchy kimchi hit in just 24 hours.",
    content: `
<h2 id="intro">When You Can't Wait</h2>
<p>Traditional kimchi takes time – days of fermentation to develop those complex, funky flavours. But sometimes you want kimchi tonight. Enter geotjeori: fresh, barely-fermented kimchi that's ready in hours rather than days.</p>

<p>This isn't a shortcut or a compromise. Geotjeori is its own thing – bright, crunchy, vibrant. Koreans eat it alongside fully fermented kimchi, appreciating each for different reasons.</p>

<h2 id="ingredients">What You'll Need</h2>
<ul>
<li>500g napa cabbage, cut into 5cm pieces</li>
<li>1 tablespoon sea salt</li>
<li>3 tablespoons gochugaru</li>
<li>2 tablespoons fish sauce (or soy sauce)</li>
<li>1 tablespoon rice vinegar</li>
<li>1 teaspoon sugar</li>
<li>4 cloves garlic, minced</li>
<li>1cm ginger, grated</li>
<li>3 spring onions, sliced</li>
<li>1 teaspoon sesame seeds</li>
<li>1 teaspoon sesame oil</li>
</ul>

<h2 id="method">The Method</h2>
<p><strong>1. Quick salt (20 minutes):</strong> Toss cabbage with salt, massage gently, and leave for 20 minutes. It should wilt slightly but stay crunchy.</p>

<p><strong>2. Make the dressing:</strong> Whisk together gochugaru, fish sauce, rice vinegar, sugar, garlic, and ginger.</p>

<p><strong>3. Combine:</strong> Don't rinse the cabbage – just squeeze out excess water. Toss with the dressing, spring onions, sesame seeds, and sesame oil.</p>

<p><strong>4. Rest:</strong> Let it sit for at least 30 minutes at room temperature, or refrigerate for a few hours. It's ready when the flavours have melded.</p>

<h2 id="the-difference">How It Differs from Regular Kimchi</h2>
<p>Geotjeori skips the long fermentation, so:</p>
<ul>
<li>The texture is crunchier, more like a fresh salad</li>
<li>The flavour is brighter, less funky</li>
<li>It contains rice vinegar for immediate acidity (fermented kimchi develops its own)</li>
<li>It won't keep as long – eat within a week</li>
<li>It won't have the same probiotic benefits as fermented kimchi</li>
</ul>

<h2 id="when-to-use">When to Make This</h2>
<ul>
<li>You've run out of regular kimchi</li>
<li>Guests are coming and you want fresh kimchi</li>
<li>It's summer and you want something lighter</li>
<li>You're new to kimchi and want to start simple</li>
</ul>

<h2 id="tips">Tips</h2>
<ul>
<li>This is best eaten fresh – within 2-3 days</li>
<li>If you leave it longer, it will start fermenting and become more like regular kimchi</li>
<li>The sesame oil is optional but adds a lovely nutty note</li>
<li>Try it wrapped in lettuce with grilled meat – brilliant</li>
</ul>
`
  },

  'recipes/white-kimchi': {
    excerpt: "Not all kimchi is spicy. Baek-kimchi – white kimchi – skips the chilli entirely, letting the pure flavours of fermented vegetables shine through.",
    content: `
<h2 id="intro">Kimchi Without the Heat</h2>
<p>Before chillies arrived in Korea in the 16th century, all kimchi was essentially white kimchi. This milder version has a long history and remains popular today, particularly with those who can't handle spice or want a more subtle flavour.</p>

<p>I make this regularly for friends who find regular kimchi too intense. It's also wonderful as a palate cleanser alongside richer, spicier dishes.</p>

<h2 id="ingredients">What You'll Need</h2>
<ul>
<li>1 medium napa cabbage (about 1kg)</li>
<li>3 tablespoons sea salt</li>
<li>500ml water</li>
<li>1 Asian pear or apple, julienned</li>
<li>5cm piece Korean radish, julienned</li>
<li>4 cloves garlic, sliced thin</li>
<li>2cm ginger, julienned</li>
<li>3 spring onions, cut into 3cm pieces</li>
<li>2 fresh red chillies, deseeded and sliced (for colour, minimal heat)</li>
<li>1 tablespoon pine nuts (optional)</li>
</ul>

<p><strong>For the brine:</strong></p>
<ul>
<li>1 litre water</li>
<li>2 tablespoons sea salt</li>
<li>1 tablespoon sugar</li>
</ul>

<h2 id="method">The Method</h2>
<p><strong>1. Salt the cabbage:</strong> Quarter the cabbage lengthwise. Dissolve salt in 500ml water and pour over cabbage in a large bowl. Leave for 3-4 hours, turning occasionally.</p>

<p><strong>2. Make the brine:</strong> Dissolve salt and sugar in 1 litre water. Set aside.</p>

<p><strong>3. Rinse and stuff:</strong> Rinse cabbage gently and squeeze out excess water. Tuck the pear, radish, garlic, ginger, spring onions, chillies, and pine nuts between the leaves.</p>

<p><strong>4. Pack and cover:</strong> Place stuffed cabbage in a container and pour over the brine. The cabbage should be submerged. Weight it down if necessary.</p>

<p><strong>5. Ferment:</strong> Leave at room temperature for 1-2 days, then refrigerate. It's ready when pleasantly tangy – usually 3-5 days total.</p>

<h2 id="serving">How to Serve</h2>
<p>White kimchi is traditionally served cold, often with some of its brine. The liquid is refreshing and probiotic-rich – don't discard it.</p>

<p>It's excellent alongside:</p>
<ul>
<li>Grilled meats (the clean flavour cuts through richness)</li>
<li>Spicy dishes (as a cooling contrast)</li>
<li>Delicate fish</li>
<li>Any meal where you want kimchi without overwhelming other flavours</li>
</ul>

<h2 id="variations">Variations</h2>
<ul>
<li><strong>Sweeter:</strong> Add more pear or some jujubes (Korean dates)</li>
<li><strong>Richer:</strong> Include a few chestnuts</li>
<li><strong>Completely mild:</strong> Omit the fresh chillies entirely</li>
</ul>

<h2 id="storage">Storage</h2>
<p>White kimchi keeps well refrigerated for 2-3 weeks. The flavour develops and becomes more complex over time, though it stays milder than red kimchi.</p>
`
  },

  'recipes/radish-kimchi': {
    excerpt: "Kkakdugi – cubed radish kimchi – is crunchy, refreshing, and possibly my favourite kimchi to eat with Korean soups and stews.",
    content: `
<h2 id="intro">The Joy of Kkakdugi</h2>
<p>If baechu-kimchi (cabbage kimchi) is Korea's everyday staple, kkakdugi is its perfect companion. These crunchy cubes of fermented radish have a clean, sharp flavour that cuts through rich soups and stews beautifully.</p>

<p>I first fell in love with kkakdugi eating it alongside seolleongtang – milky ox bone soup – at a Korean restaurant. The contrast was revelatory. Now I always keep a jar in my fridge.</p>

<h2 id="ingredients">What You'll Need</h2>
<ul>
<li>1kg Korean radish (mu) or daikon, cut into 2cm cubes</li>
<li>2 tablespoons sea salt</li>
<li>1 tablespoon sugar</li>
<li>3 tablespoons gochugaru</li>
<li>3 tablespoons fish sauce</li>
<li>4 cloves garlic, minced</li>
<li>1cm ginger, grated</li>
<li>4 spring onions, cut into 2cm pieces</li>
</ul>

<h2 id="method">The Method</h2>
<p><strong>1. Salt the radish:</strong> Toss radish cubes with salt and sugar. Leave for 30 minutes – the radish will release water and soften slightly while staying crunchy.</p>

<p><strong>2. Make the paste:</strong> Mix gochugaru, fish sauce, garlic, and ginger into a paste.</p>

<p><strong>3. Combine:</strong> Drain any excess liquid from the radish (save it – you can add it back if needed). Toss radish with the paste and spring onions until evenly coated.</p>

<p><strong>4. Pack:</strong> Transfer to clean jars, pressing down firmly. Leave some headspace.</p>

<p><strong>5. Ferment:</strong> Leave at room temperature for 1-2 days, then refrigerate. Ready to eat after 3-4 days, but improves with time.</p>

<h2 id="tips">Tips for Perfect Kkakdugi</h2>
<ul>
<li><strong>Choose the right radish:</strong> Korean radish (mu) is sweeter and denser than Japanese daikon. If using daikon, it'll be slightly softer.</li>
<li><strong>Cube size matters:</strong> 2cm cubes are traditional – big enough to stay crunchy, small enough to eat in one bite.</li>
<li><strong>Don't over-salt:</strong> The radish should wilt slightly but not become soft.</li>
<li><strong>Save the liquid:</strong> If your kkakdugi seems dry, add back some of the salting liquid.</li>
</ul>

<h2 id="serving">Serving Suggestions</h2>
<p>Kkakdugi is traditionally served with:</p>
<ul>
<li>Seolleongtang (ox bone soup)</li>
<li>Samgyetang (ginseng chicken soup)</li>
<li>Galbitang (short rib soup)</li>
<li>Any rich, meaty Korean soup</li>
</ul>

<p>The crunchy texture and sharp flavour provide contrast to creamy, fatty broths. But honestly, it's good with anything – I eat it with rice, on noodles, even in sandwiches.</p>

<h2 id="storage">Storage</h2>
<p>Refrigerated kkakdugi keeps for months. It becomes softer and more sour over time – older kkakdugi is excellent in stews.</p>
`
  },

  'recipes/cucumber-kimchi': {
    excerpt: "Oi-sobagi – stuffed cucumber kimchi – is summer in a jar. Crisp, refreshing, and ready in just a day or two, it's the perfect warm-weather ferment.",
    content: `
<h2 id="intro">Summer's Best Kimchi</h2>
<p>When it's hot outside, the last thing I want is heavy, deeply fermented kimchi. Enter oi-sobagi: cucumbers scored and stuffed with spicy filling, fermented just long enough to develop tang while staying crisp and refreshing.</p>

<p>This is traditionally a summer specialty in Korea, made when cucumbers are at their peak. The quick fermentation means you can be eating it within 24 hours.</p>

<h2 id="ingredients">What You'll Need</h2>
<ul>
<li>6 small cucumbers (kirby or small Lebanese work well)</li>
<li>2 tablespoons sea salt</li>
</ul>

<p><strong>For the filling:</strong></p>
<ul>
<li>1 small bunch chives, cut into 2cm pieces</li>
<li>2 tablespoons gochugaru</li>
<li>1 tablespoon fish sauce</li>
<li>3 cloves garlic, minced</li>
<li>1 teaspoon sugar</li>
<li>1 teaspoon sesame seeds</li>
</ul>

<h2 id="method">The Method</h2>
<p><strong>1. Prepare cucumbers:</strong> Trim the ends. Cut a deep cross into each cucumber, stopping about 2cm from each end – you want to create four connected segments that open like a flower.</p>

<p><strong>2. Salt:</strong> Rub salt into the cuts and exterior. Leave for 30-60 minutes until slightly softened but still firm.</p>

<p><strong>3. Make the filling:</strong> Mix chives with gochugaru, fish sauce, garlic, sugar, and sesame seeds.</p>

<p><strong>4. Stuff:</strong> Rinse cucumbers briefly and pat dry. Stuff the filling into the cuts, being generous. Pack any remaining filling around the cucumbers.</p>

<p><strong>5. Ferment:</strong> Place in a container, cover, and leave at room temperature for 12-24 hours. Refrigerate once tangy.</p>

<h2 id="choosing-cucumbers">Choosing the Right Cucumbers</h2>
<p>This matters more than you'd think:</p>
<ul>
<li><strong>Best:</strong> Small, firm pickling cucumbers (kirby type)</li>
<li><strong>Good:</strong> Small Lebanese or Persian cucumbers</li>
<li><strong>Avoid:</strong> Large English cucumbers – too watery, won't hold up</li>
</ul>

<p>You want cucumbers that are firm, with small seeds and minimal water content. Freshness is crucial – older cucumbers will turn mushy.</p>

<h2 id="timing">Getting the Timing Right</h2>
<p>Oi-sobagi is best eaten young:</p>
<ul>
<li><strong>12-24 hours:</strong> Lightly tangy, very crunchy – my preference</li>
<li><strong>2-3 days:</strong> More fermented, softer but still good</li>
<li><strong>Beyond 5 days:</strong> Getting quite sour and soft – still edible but past its prime</li>
</ul>

<p>Make small batches and eat quickly. This isn't a kimchi that improves with long ageing.</p>

<h2 id="serving">Serving</h2>
<p>Serve cold, cut into bite-sized rounds. The cross-cut means each piece opens up beautifully, showing the filling inside.</p>

<p>Perfect with:</p>
<ul>
<li>Cold noodles (naengmyeon)</li>
<li>Grilled meats</li>
<li>As part of a banchan spread</li>
<li>Anywhere you want bright, crunchy refreshment</li>
</ul>
`
  },

  'health/kimchi-gut-health': {
    excerpt: "The connection between fermented foods and gut health is one of the most exciting areas of nutritional science. Here's what we know about how kimchi supports your microbiome.",
    content: `
<h2 id="intro">Your Gut is an Ecosystem</h2>
<p>I find the science of the gut microbiome genuinely fascinating. Inside your digestive system live trillions of microorganisms – bacteria, fungi, viruses – that collectively weigh about 2kg. This community affects far more than digestion: immunity, mental health, metabolism, even skin conditions.</p>

<p>What you eat directly influences this ecosystem. And fermented foods like kimchi are increasingly recognised as particularly beneficial.</p>

<h2 id="how-kimchi-helps">How Kimchi Supports Gut Health</h2>
<p>Kimchi works on multiple levels:</p>

<p><strong>1. Live probiotics:</strong> Properly fermented kimchi contains billions of beneficial bacteria – primarily Lactobacillus species. When you eat kimchi, some of these organisms survive the journey to your gut and take up residence.</p>

<p><strong>2. Prebiotics:</strong> The vegetables in kimchi contain fibre that feeds your existing gut bacteria. This is called prebiotic fibre, and it's crucial for maintaining a healthy microbiome.</p>

<p><strong>3. Postbiotics:</strong> During fermentation, bacteria produce beneficial compounds – short-chain fatty acids, vitamins, antimicrobial substances. These support gut health even after the bacteria that made them have died.</p>

<h2 id="research">What the Research Says</h2>
<p>The science is still developing, but studies have found:</p>
<ul>
<li>Regular kimchi consumption is associated with positive changes in gut microbiome composition</li>
<li>Fermented foods may reduce inflammation in the gut</li>
<li>Probiotics from fermented foods can improve symptoms of IBS in some people</li>
<li>A diverse diet including fermented foods supports microbial diversity (generally considered a marker of good gut health)</li>
</ul>

<p>I should note: much of this research is observational or conducted in laboratory settings. We need more large-scale human trials to make definitive claims.</p>

<h2 id="personal-experience">My Experience</h2>
<p>Anecdotally, adding kimchi and other fermented foods to my diet has noticeably improved my digestion. I experience less bloating, more regularity, and generally feel better after meals.</p>

<p>Is this the kimchi specifically? The overall improvement in my diet that came with becoming interested in fermented foods? A placebo effect? I honestly couldn't tell you. But something's working.</p>

<h2 id="how-much">How Much for Gut Benefits?</h2>
<p>There's no definitive answer, but most experts suggest regular, moderate consumption is key. A few tablespoons daily is probably more beneficial than eating a whole jar once a week.</p>

<p>If you're new to fermented foods, start slowly. Your gut may need time to adjust, and eating too much too quickly can cause temporary bloating or gas as your microbiome adapts.</p>

<h2 id="not-a-cure">A Note of Caution</h2>
<p>Kimchi isn't medicine. It won't cure serious digestive conditions, and it shouldn't replace medical treatment if you have ongoing gut issues. If you're experiencing persistent problems, see a doctor.</p>

<p>That said, as part of a varied, vegetable-rich diet, kimchi and other fermented foods are almost certainly beneficial for most people. The science supports what traditional food cultures have known for centuries.</p>

<h2 id="beyond-kimchi">The Bigger Picture</h2>
<p>Kimchi is one piece of the puzzle. Other practices that support gut health include:</p>
<ul>
<li>Eating a diverse range of vegetables</li>
<li>Including other fermented foods (yoghurt, kefir, sauerkraut, miso)</li>
<li>Limiting highly processed foods</li>
<li>Getting enough fibre</li>
<li>Managing stress (the gut-brain connection is real)</li>
</ul>

<p>Think of kimchi as part of an overall approach to eating well, not a silver bullet.</p>
`
  },

  'health/kimchi-weight-loss': {
    excerpt: "Can eating kimchi help you lose weight? The research is intriguing, if not definitive. Here's what we know about fermented foods and metabolism.",
    content: `
<h2 id="intro">The Weight Loss Question</h2>
<p>I'm always cautious when foods get labelled as "weight loss" foods. The reality of managing weight is complex, highly individual, and rarely solved by adding or removing any single food. That said, the research on kimchi and weight is genuinely interesting.</p>

<h2 id="what-research-shows">What Studies Show</h2>
<p>Several studies, mostly from Korea, have found associations between regular kimchi consumption and lower body weight:</p>

<ul>
<li>A 2011 study found that fermented kimchi had more significant effects on body weight and body fat than fresh kimchi</li>
<li>Research has shown kimchi consumption is associated with reduced waist circumference</li>
<li>Some studies suggest effects on metabolic markers like blood sugar and cholesterol</li>
</ul>

<p>However, these are mostly observational studies or short-term trials. They show correlation, not necessarily causation. People who eat kimchi regularly might have other habits that affect their weight.</p>

<h2 id="possible-mechanisms">Why Might Kimchi Help?</h2>
<p>Several theories:</p>

<p><strong>Low calorie density:</strong> Kimchi is incredibly low in calories – about 15 per 100g. You can eat satisfying amounts without consuming many calories. Replacing higher-calorie foods with kimchi naturally reduces intake.</p>

<p><strong>High fibre:</strong> Fibre promotes satiety. Eating kimchi with meals may help you feel fuller and eat less overall.</p>

<p><strong>Gut microbiome effects:</strong> Emerging research suggests gut bacteria influence metabolism. The probiotics in fermented foods might affect how we process and store energy.</p>

<p><strong>Capsaicin:</strong> The chilli in kimchi contains capsaicin, which some research suggests can slightly boost metabolic rate. Though the effect is probably modest.</p>

<h2 id="realistic-expectations">Being Realistic</h2>
<p>Let me be direct: adding kimchi to your diet probably won't cause dramatic weight loss on its own. If you're eating kimchi alongside a poor diet and sedentary lifestyle, it's not going to magically fix things.</p>

<p>However, if kimchi is part of a shift toward eating more vegetables, more fermented foods, and fewer processed foods, then yes, it might contribute to weight management. The kimchi itself is part of a larger pattern of eating well.</p>

<h2 id="how-to-use">Practical Suggestions</h2>
<p>If you're interested in kimchi as part of a healthy eating pattern:</p>

<ul>
<li>Use kimchi to add flavour to simple meals (rice, eggs, grilled protein) without adding many calories</li>
<li>Eat it before meals – the fibre and fermentation may help with satiety</li>
<li>Replace high-calorie condiments with kimchi</li>
<li>Be mindful of sodium if you're eating large amounts</li>
</ul>

<h2 id="my-take">My Perspective</h2>
<p>I don't think of kimchi as a weight loss food. I think of it as a delicious, nutritious food that happens to be low in calories and potentially beneficial for metabolism.</p>

<p>The best diet is one you can sustain long-term. If kimchi helps make healthy eating more enjoyable – and it certainly does for me – that's its real value.</p>
`
  }
}

async function main() {
  console.log('Batch 4: Updating more articles in Ollie\'s voice...\n')

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

  console.log('\n✅ Batch 4 complete!')
}

main().catch(console.error)
