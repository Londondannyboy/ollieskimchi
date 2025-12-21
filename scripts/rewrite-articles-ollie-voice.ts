import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

// Ollie's voice characteristics:
// - First person, warm and accessible
// - UK chef perspective - not claiming Korean authenticity
// - Genuine enthusiasm and curiosity
// - Practical, not pretentious
// - Respects Korean tradition while sharing his own journey
// - Focus on what you can DO with kimchi

interface Article {
  id: number
  slug: string
  title: string
  cluster: string
  content: string
  excerpt: string
  word_count: number
}

// Rewritten articles in Ollie's voice
const rewrittenArticles: Record<string, { content: string; excerpt: string }> = {
  'kimchi': {
    excerpt: "I've been obsessed with kimchi for years now. What started as curiosity about Korean fermentation has become a genuine passion. Let me share everything I've learned about this incredible fermented vegetable.",
    content: `
<h2 id="my-kimchi-journey">My Kimchi Journey</h2>
<p>I'll be honest – when I first encountered kimchi properly, it was a revelation. After years of working with fermentation in various forms at my restaurants, discovering the depth and complexity of Korean fermented vegetables opened up an entirely new world. This wasn't just pickled cabbage; this was centuries of culinary wisdom packed into every jar.</p>

<p>As a London-based chef, I'm not claiming any Korean heritage or attempting to present myself as an authority on traditional Korean cuisine. What I can share is my genuine enthusiasm for this extraordinary food and what I've learned from making it, eating it, and talking to people far more knowledgeable than me about it.</p>

<h2 id="what-is-kimchi">What Exactly is Kimchi?</h2>
<p>At its heart, kimchi is lacto-fermented vegetables – most commonly napa cabbage – seasoned with Korean red pepper flakes (gochugaru), garlic, ginger, and fish sauce or fermented seafood. But that simple description barely scratches the surface.</p>

<p>There are over 200 documented varieties of kimchi in Korea. Some are fiery hot, others mild. Some ferment for months, others are eaten fresh within days. Some contain seafood, others are entirely plant-based. The variety is staggering, and I find that genuinely exciting.</p>

<p>What makes kimchi special is the fermentation. Unlike quick pickles made with vinegar, proper kimchi undergoes lacto-fermentation – natural bacteria convert sugars into lactic acid, creating that distinctive tangy flavour while generating beneficial probiotics. It's alive, constantly evolving, and utterly delicious.</p>

<h2 id="health-benefits">Why I Think Everyone Should Eat More Kimchi</h2>
<p>I'm a chef, not a nutritionist, so I won't make grand health claims. But I will say that the research on fermented foods is compelling. Kimchi is packed with vitamins A, B, and C. It's low in calories but high in fibre. And those live cultures? They're genuinely beneficial for gut health.</p>

<p>What I've noticed personally is that adding kimchi to my diet has improved my digestion and general wellbeing. Whether that's the probiotics, the vegetables, or just eating less processed food as a result – I couldn't say definitively. But something's working.</p>

<h2 id="making-kimchi-at-home">Making Your Own Kimchi</h2>
<p>Here's the thing about making kimchi at home: it's genuinely not difficult. Yes, there's a bit of prep work involved, and yes, you need to source some specific ingredients. But the actual technique? Straightforward.</p>

<p>You'll need napa cabbage, Korean sea salt for brining, gochugaru (Korean red pepper flakes – don't substitute, it's worth finding the real thing), garlic, ginger, fish sauce or a vegan alternative, and typically some form of rice paste to help the seasonings adhere.</p>

<p>The process involves salting the cabbage to draw out moisture, making a spice paste, massaging the paste into the cabbage leaves, and then packing it into jars to ferment. I've written detailed recipes for various styles, which you'll find elsewhere on this site.</p>

<h2 id="buying-kimchi-uk">Finding Good Kimchi in the UK</h2>
<p>Not everyone wants to make their own, and that's completely fine. The good news is that the kimchi available in the UK has improved dramatically in recent years. You can find decent options in most major supermarkets now, though I'd encourage you to seek out smaller producers who make it properly – naturally fermented, unpasteurised, alive.</p>

<p>Look for kimchi in the refrigerated section (if it's shelf-stable at room temperature, it's been pasteurised and has lost its probiotic benefits). Check the ingredients for unnecessary additives. And don't be afraid to try different brands and styles until you find what you like.</p>

<h2 id="cooking-with-kimchi">What to Do with Kimchi</h2>
<p>This is where I get really excited. Kimchi isn't just a side dish – though it's brilliant as that. It's an incredibly versatile ingredient that can transform ordinary dishes into something special.</p>

<p>I use it in fried rice (kimchi bokkeumbap), in stews and soups (kimchi jjigae is a personal favourite), in pancakes, on burgers, in toasted cheese sandwiches, stirred through noodles, even as a pizza topping. The fermented tang and gentle heat work with almost everything.</p>

<p>A tip: older, more fermented kimchi is best for cooking. The stronger, funkier flavour stands up to heat and integrates beautifully with other ingredients. Fresh, young kimchi is better eaten as is.</p>

<h2 id="storing-kimchi">Keeping Your Kimchi Happy</h2>
<p>Kimchi is alive, remember. It needs to be stored in the fridge to slow fermentation. Even then, it will continue to develop and change over time – becoming tangier and softer as it ages.</p>

<p>I keep mine in glass jars with the lid slightly loosened to allow gases to escape. Press the vegetables below the liquid level to prevent mould. And don't panic if you see some bubbles – that's just fermentation doing its thing.</p>

<p>Properly stored, kimchi will keep for months. Though in my house, it rarely lasts that long.</p>

<h2 id="final-thoughts">A Few Final Thoughts</h2>
<p>I've come to see kimchi as one of those foods that rewards curiosity. The more you learn about it, the more fascinating it becomes. The history stretches back over two thousand years. The regional variations are endless. The science of fermentation is genuinely compelling.</p>

<p>But you don't need to know any of that to enjoy it. At its simplest, kimchi is delicious, nutritious, and incredibly satisfying to make and eat. That's reason enough to give it a try.</p>

<p>I hope the recipes and guides on this site help you on your own kimchi journey. And if you'd rather skip the DIY and just enjoy great kimchi, well, that's what we're here for too.</p>
`
  },

  'recipes/traditional-kimchi-recipe': {
    excerpt: "After years of experimenting, this is my go-to traditional kimchi recipe. It's adapted for UK kitchens using ingredients you can actually find, while staying true to the authentic Korean method.",
    content: `
<h2 id="introduction">Why I Love Making Traditional Kimchi</h2>
<p>There's something deeply satisfying about making kimchi from scratch. The process connects you to centuries of Korean culinary tradition, and the result – if you get it right – is infinitely better than anything you'll find in a supermarket. This recipe is the culmination of years of experimenting in my own kitchen.</p>

<p>I should be upfront: I'm a British chef who fell in love with Korean fermentation, not a Korean grandmother with generations of wisdom. But I've done my homework, made countless batches, and refined this recipe to work brilliantly in UK kitchens with ingredients you can actually source.</p>

<h2 id="ingredients">What You'll Need</h2>
<p><strong>For the cabbage:</strong></p>
<ul>
<li>1 large napa cabbage (about 1.5-2kg)</li>
<li>100g Korean coarse sea salt (or flaky sea salt)</li>
</ul>

<p><strong>For the paste:</strong></p>
<ul>
<li>50g gochugaru (Korean red pepper flakes) – this is essential, no substitutes</li>
<li>1 tablespoon glutinous rice flour</li>
<li>1 tablespoon sugar</li>
<li>200ml water</li>
<li>50ml fish sauce (or use soy sauce and a sheet of nori for vegan)</li>
<li>6 cloves garlic, minced</li>
<li>2cm piece of ginger, grated</li>
<li>4 spring onions, cut into 3cm pieces</li>
<li>1 medium carrot, julienned (optional but I like it)</li>
</ul>

<h2 id="sourcing-ingredients">A Note on Sourcing</h2>
<p>The gochugaru is non-negotiable. This Korean red pepper is what gives kimchi its distinctive colour and flavour – it's fruity, mildly spicy, and slightly sweet. Regular chilli flakes won't work. You can find it in Asian supermarkets or online. It keeps well in the freezer.</p>

<p>Korean sea salt is ideal for brining – it's coarser and contains fewer additives than table salt. Maldon or other flaky sea salts work as a substitute.</p>

<h2 id="method">The Method</h2>

<h3>Day 1: Salting the Cabbage</h3>
<p>Cut the cabbage lengthwise into quarters, keeping the core intact to hold the leaves together. Rinse under cold water.</p>

<p>Working with one quarter at a time, gently separate the leaves and sprinkle salt between them, using more salt on the thicker white parts and less on the leafy green sections. Place in a large bowl.</p>

<p>Leave to salt for 6-8 hours or overnight, turning the quarters over halfway through. The cabbage is ready when it bends easily without snapping and has reduced significantly in volume.</p>

<p>Rinse the cabbage thoroughly three times to remove excess salt, then squeeze out as much water as possible. This is important – excess water will dilute your paste and affect fermentation.</p>

<h3>Day 1: Making the Paste</h3>
<p>While the cabbage is salting, make your rice paste. Whisk the rice flour with water in a small saucepan over medium heat until it thickens and turns translucent – about 5 minutes. Let it cool completely.</p>

<p>Combine the cooled rice paste with gochugaru, fish sauce, garlic, ginger, and sugar. Mix thoroughly. The paste should be a vibrant red colour. Taste it – it should be salty, spicy, and deeply savoury. Adjust if needed.</p>

<p>Fold in the spring onions and carrot.</p>

<h3>Day 1: Assembling</h3>
<p>This is the fun part. Wearing gloves (the chilli will stain and irritate), work the paste between every leaf of the cabbage quarters, making sure each leaf is coated. Be generous but not excessive.</p>

<p>Pack the kimchi tightly into clean glass jars, pressing down firmly to eliminate air pockets and bring liquid to the surface. Leave at least 3cm of headspace – the kimchi will expand as it ferments.</p>

<h3>Fermentation</h3>
<p>Leave the jars at room temperature (ideally 18-22°C) for 1-5 days, depending on how sour you like it and how warm your kitchen is. Press the kimchi down daily to keep it submerged.</p>

<p>Taste it each day. When it reaches your preferred level of tanginess, transfer to the fridge. It will continue to ferment slowly and develop more complex flavours over time.</p>

<h2 id="tips">Tips from My Kitchen</h2>
<ul>
<li>Temperature matters enormously. Warmer = faster fermentation. In summer, 1-2 days might be enough. In winter, 4-5 days is common.</li>
<li>The kimchi will taste quite salty when fresh. This mellows significantly as it ferments.</li>
<li>Always use clean utensils when serving to prevent contamination.</li>
<li>Older, funkier kimchi is brilliant for cooking. Fresh, young kimchi is best eaten as a side dish.</li>
</ul>

<h2 id="troubleshooting">If Things Go Wrong</h2>
<p><strong>Too salty?</strong> You probably didn't rinse the cabbage enough. Add a little sugar to the paste next time, or soak finished kimchi briefly in cold water.</p>

<p><strong>Too sour?</strong> It fermented too long at room temperature. Move to the fridge sooner next time. But don't throw it away – very sour kimchi is perfect for cooking.</p>

<p><strong>Soft or slimy texture?</strong> Usually means too much water remained in the cabbage, or the temperature was too high. Still safe to eat, just not ideal.</p>

<p><strong>Mould?</strong> If it's just on the surface and you catch it early, scrape it off and the rest should be fine. If it's extensive or you're unsure, discard it. Trust your nose – if it smells off, don't risk it.</p>

<h2 id="storing">Storage</h2>
<p>Refrigerated kimchi keeps for months and actually improves with age up to a point. I find 2-4 weeks is the sweet spot for eating fresh, but it's perfectly good for much longer, especially for cooking.</p>

<p>The flavour will continue to develop – becoming more sour and complex. This is normal and, to my taste, desirable.</p>
`
  },

  'health/kimchi-benefits': {
    excerpt: "I'm a chef, not a doctor, but the research on kimchi's health benefits is genuinely compelling. Here's what I've learned about why this fermented vegetable might be one of the best things you can add to your diet.",
    content: `
<h2 id="intro">A Chef's Perspective on Kimchi and Health</h2>
<p>Let me be clear from the start: I'm a chef, not a nutritionist or doctor. I won't make wild health claims or promise that kimchi will cure anything. What I can do is share what I've learned from reading the research, talking to experts, and my own experience of eating kimchi regularly for years.</p>

<p>The science on fermented foods is genuinely fascinating, and kimchi specifically has been the subject of quite a lot of research – much of it conducted in Korea, where it's a dietary staple. Here's what stands out to me.</p>

<h2 id="probiotics">Living Food: The Probiotic Story</h2>
<p>The most compelling aspect of traditionally fermented kimchi is that it's alive. During lacto-fermentation, beneficial bacteria – primarily various Lactobacillus species – multiply and produce lactic acid, which gives kimchi its characteristic tang.</p>

<p>These bacteria are what we call probiotics, and the research on their importance for gut health has exploded in recent years. Your gut microbiome – the community of bacteria living in your digestive system – plays a crucial role in everything from digestion to immune function to mental health.</p>

<p>A single serving of properly fermented kimchi can contain billions of these beneficial organisms. That's significant.</p>

<p>Important caveat: only unpasteurised, naturally fermented kimchi contains live probiotics. Shelf-stable kimchi that's been heat-treated may still taste good, but the beneficial bacteria are dead. Always look for kimchi in the refrigerated section.</p>

<h2 id="nutrition">Nutritional Profile</h2>
<p>Beyond the probiotics, kimchi is nutritionally impressive:</p>

<ul>
<li><strong>Low calorie:</strong> About 15 calories per 100g – you can eat it freely without worrying about your waistline</li>
<li><strong>High fibre:</strong> Good for digestive health and satiety</li>
<li><strong>Vitamins:</strong> Rich in vitamins A, B, C, and K</li>
<li><strong>Minerals:</strong> Contains iron, selenium, and various micronutrients</li>
<li><strong>Antioxidants:</strong> The vegetables and spices in kimchi are packed with beneficial compounds</li>
</ul>

<p>The fermentation process actually increases the bioavailability of some nutrients, meaning your body can absorb them more easily. Clever, really.</p>

<h2 id="gut-health">Gut Health Benefits</h2>
<p>This is where the research gets interesting. Studies have linked regular kimchi consumption to:</p>

<ul>
<li>Improved digestive function</li>
<li>Better nutrient absorption</li>
<li>Reduced symptoms of irritable bowel syndrome in some people</li>
<li>Positive changes in gut microbiome composition</li>
</ul>

<p>The mechanism seems to be both the probiotics themselves and the compounds they produce during fermentation. Lactic acid, for instance, creates an environment that favours beneficial bacteria over harmful ones.</p>

<p>I've noticed improvements in my own digestion since making kimchi a regular part of my diet, though I can't claim that's scientific proof of anything. Your mileage may vary.</p>

<h2 id="immune-system">Immune Support</h2>
<p>A significant portion of your immune system resides in your gut, so it makes sense that what you eat affects immune function. Some research suggests that the probiotics in fermented foods can support immune health, though this is an area where more studies are needed.</p>

<p>What we do know is that kimchi contains compounds with antimicrobial and anti-inflammatory properties. The garlic, ginger, and chilli all bring their own benefits to the party.</p>

<h2 id="weight-management">Weight Management</h2>
<p>Several studies have found associations between kimchi consumption and lower body weight. The mechanisms aren't entirely clear, but possible factors include:</p>

<ul>
<li>Low calorie density – you can eat satisfying amounts without consuming many calories</li>
<li>High fibre content promoting satiety</li>
<li>Effects on gut bacteria that influence metabolism</li>
<li>Capsaicin from chillies potentially boosting metabolic rate</li>
</ul>

<p>I wouldn't call kimchi a weight loss food – that's oversimplifying – but including it as part of a balanced diet certainly won't hurt your waistline.</p>

<h2 id="how-much">How Much Should You Eat?</h2>
<p>There's no definitive answer, but most research suggests that regular, moderate consumption is beneficial. In Korea, people typically eat 50-100g daily as a side dish with meals.</p>

<p>If you're new to fermented foods, start small. A tablespoon or two per day, building up gradually. Your digestive system may need time to adjust, and eating too much too quickly can cause temporary bloating or gas.</p>

<p>Listen to your body. Some people thrive on kimchi; others find it doesn't agree with them. Both are fine.</p>

<h2 id="caveats">A Few Words of Caution</h2>
<p>Kimchi isn't suitable for everyone:</p>

<ul>
<li><strong>Sodium:</strong> Traditional kimchi is quite salty. If you're managing blood pressure or on a sodium-restricted diet, go easy or seek out lower-sodium versions.</li>
<li><strong>Histamine:</strong> Fermented foods contain histamine, which some people are sensitive to. If you have histamine intolerance, be cautious.</li>
<li><strong>FODMAP:</strong> Kimchi contains garlic and some vegetables that are high in FODMAPs, which can trigger symptoms in people with IBS.</li>
</ul>

<p>As with anything health-related, if you have specific conditions or concerns, talk to a medical professional rather than relying on a chef's website.</p>

<h2 id="conclusion">My Take</h2>
<p>I eat kimchi because I love how it tastes. The health benefits are a bonus. But I do think there's enough evidence to suggest that naturally fermented foods should be part of a healthy diet, and kimchi is one of the most delicious ways to get them.</p>

<p>It's not a miracle food or a cure-all. It's a traditional preparation that humans have been eating for thousands of years, made from vegetables and natural fermentation. Sometimes the old ways really are the best.</p>
`
  }
}

async function main() {
  console.log('Starting article rewrite in Ollie\'s voice...\n')

  for (const [slug, newContent] of Object.entries(rewrittenArticles)) {
    console.log(`Updating: ${slug}`)

    // Count words in new content
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

  console.log('\n✅ Finished updating articles!')

  // Show summary
  const updated = await sql`SELECT slug, word_count FROM seo_articles WHERE slug = ANY(${Object.keys(rewrittenArticles)})`
  console.log('\nUpdated articles:')
  updated.forEach(a => console.log(`  ${a.slug}: ${a.word_count} words`))
}

main().catch(console.error)
