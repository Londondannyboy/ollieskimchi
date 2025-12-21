import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Batch 8: Remaining buy, health, and guide articles
const articleUpdates: Record<string, { content: string; meta_description: string }> = {
  'buy/gochugaru-uk': {
    meta_description: 'Gochugaru is essential for authentic kimchi. Here is how to find and choose the best Korean chilli flakes in the UK.',
    content: `# Buying Gochugaru in the UK: Your Complete Guide

If you want to make proper kimchi, you need gochugaru – Korean red chilli flakes. There's no real substitute. The good news is it's increasingly easy to find in the UK.

## What Is Gochugaru?

Gochugaru (고추가루) is dried Korean red pepper, ground into flakes or powder. Unlike other chilli products, Korean peppers are sun-dried, giving them a slightly sweet, fruity flavour alongside the heat.

The texture matters for kimchi. Traditional gochugaru has a coarse, flaky texture that adheres to vegetables and creates that characteristic red coating.

## Coarse vs Fine

**Coarse (굵은 고추가루)**: Larger flakes, best for kimchi and dishes where you want visible chilli pieces. This is what you want for traditional kimchi.

**Fine (고운 고추가루)**: Powder form, best for sauces, soups, and marinades. Dissolves more easily.

For kimchi-making, always choose coarse gochugaru.

## Heat Levels

Korean chilli flakes are moderately hot – roughly 4,000-8,000 Scoville units. That's milder than cayenne but hotter than paprika. The heat builds gradually rather than hitting immediately.

Some brands offer mild and hot versions. For beginners, the standard (non-hot) variety is probably enough.

## Where to Buy

**Korean supermarkets**: Best selection and usually best prices. Look for H Mart, Korea Foods, or Seoul Plaza in London. Wing Yip in Birmingham and Manchester stocks Korean products too.

**Online**: Several Korean grocery websites deliver nationwide. Larger quantities are often more economical online.

**Amazon**: Available but prices vary. Check reviews and make sure it's actually gochugaru (some listings are misleading).

**Health food shops**: Occasionally stock gochugaru, though selection is limited.

## What to Look For

**Colour**: Vibrant red. Dull or brown gochugaru is old or low quality.

**Texture**: Coarse flakes that stick together slightly. Very dry, powdery texture suggests it's been sitting around.

**Origin**: Most gochugaru comes from Korea or China. Korean-produced is generally considered superior, but good Chinese-produced gochugaru exists.

**Packaging**: Look for packages that seal well. Once opened, gochugaru can oxidise and lose colour and flavour.

## Popular Brands

- **Taekyung**: Widely available, good quality
- **Wang**: Common in supermarkets, reliable
- **ChungJungOne**: Premium brand, excellent quality
- **Sempio**: Another quality Korean brand

## Storage

Keep gochugaru in an airtight container, away from light. The freezer is ideal for long-term storage – it prevents colour and flavour degradation. Properly stored, it lasts at least a year.

## How Much You Need

For a standard batch of kimchi (one large napa cabbage), you'll use roughly 50-100g of gochugaru. If you're making kimchi regularly, buying larger bags is more economical.

## Can You Substitute?

Not really. Gochugaru has a unique flavour profile – sweet, fruity, moderately hot, with a texture that coats vegetables properly. Substitutes don't produce the same result:

- **Crushed red pepper flakes**: Too hot, different flavour
- **Cayenne**: Way too hot, wrong texture
- **Paprika**: Not hot enough, different flavour
- **Aleppo pepper**: Closest substitute but still different

If you're making kimchi, get proper gochugaru. It's worth the effort.`
  },

  'buy/kimchi-equipment': {
    meta_description: 'You don\'t need much to make kimchi, but the right equipment helps. Here is what I recommend for home fermentation.',
    content: `# Kimchi Equipment: What You Actually Need

Here's a secret: you don't need much special equipment to make kimchi. Koreans have been making it for thousands of years with basic kitchen tools. But a few items make the process easier and more consistent.

## The Essentials

**Large Bowl or Basin**
You need space to salt and work with the cabbage. A big mixing bowl works, but a wide, shallow basin is even better. I use a large stainless steel bowl.

**Gloves**
Kimchi paste gets everywhere and stains hands. More importantly, chilli in small cuts stings. Disposable food-safe gloves are essential.

**Fermentation Vessels**
This is where you have options:
- Glass jars (1-2 litre)
- Mason jars
- Korean onggi pots
- Food-grade plastic containers with tight lids

I use a combination of large glass jars and food-grade containers depending on batch size.

**Kitchen Scale**
Salt quantities matter for proper fermentation. A digital kitchen scale helps ensure consistency. You want roughly 2-3% salt by weight for the initial salting.

## Nice to Have

**Fermentation Crocks**
Traditional ceramic crocks with water-seal lids are designed for fermentation. They let gas escape while keeping air out. Beautiful objects too.

**Korean Onggi**
These traditional earthenware pots are porous, allowing slight air exchange that supposedly improves fermentation. They're excellent but not essential.

**Fermentation Weights**
Glass weights that fit inside jars, keeping vegetables submerged. You can improvise with a smaller jar filled with water, but proper weights are convenient.

**Airlock Lids**
Special lids with airlocks that fit mason jars. They release fermentation gases without letting air in. Useful but not necessary if you burp your jars regularly.

**Kimchi Container**
Korean-made rectangular containers specifically for kimchi. They seal well and stack efficiently. Multiple compartments let you store different kimchis separately.

## What You Don't Need

**A kimchi refrigerator**: Lovely but expensive and space-consuming. A normal fridge works fine.

**Special knives**: Any sharp chef's knife will do.

**Fancy bowls**: Fermentation isn't precious about containers.

**Commercial equipment**: Home batches don't need professional gear.

## My Setup

After years of making kimchi, here's what I actually use:
- Large stainless steel mixing bowl
- Digital kitchen scale
- 2-litre glass jars with swing-top lids
- Food-grade plastic containers for larger batches
- Disposable gloves (always)
- Regular kitchen knife and cutting board

Total investment: maybe £50 including the jars. The gloves are the recurring cost.

## Starting Out

If you're making your first batch, don't buy lots of equipment. Use what you have. A mixing bowl, a jar, and gloves are genuinely all you need. Make a few batches, see if you enjoy the process, then invest in better equipment if you want to.

The best kimchi comes from attention and care, not expensive equipment. Keep it simple, focus on the process, and the equipment will take care of itself.`
  },

  'guides/how-to-store-kimchi': {
    meta_description: 'Proper storage is key to great kimchi. Here is how to store your kimchi for the best flavour and longevity.',
    content: `# How to Store Kimchi: A Complete Guide

Kimchi is alive. The fermentation that creates its distinctive flavour doesn't stop just because you put the jar in the fridge. Understanding this is key to storing kimchi well.

## The Basic Principle

Fermentation slows in cold temperatures and speeds up in warm ones. Your storage choices control how quickly your kimchi develops.

## Refrigerator Storage

For most home cooks, the fridge is the answer. At around 4°C, fermentation continues very slowly, and kimchi stays fresh for months.

**Tips for fridge storage:**
- Use airtight containers (kimchi smell spreads)
- Press vegetables below the brine surface
- Store away from the fridge door (temperature fluctuates there)
- Label with the date you made or opened it

Properly stored, refrigerated kimchi lasts 3-6 months or even longer. It won't go bad – it just keeps getting more sour.

## Room Temperature

Fresh kimchi needs some time at room temperature to kickstart fermentation. Most recipes suggest 1-3 days depending on your environment.

**Signs it's ready for the fridge:**
- Visible bubbles when you press down
- Tangy smell (pleasant, not off-putting)
- Slightly softened texture
- Taste test confirms it's developing

After this initial period, refrigerate to slow things down.

## The Fermentation Timeline

**Day 0-2 (room temp)**: Not much happening yet
**Day 2-5 (room temp)**: Active fermentation, bubbles appearing
**Week 1-2 (fridge)**: Developing flavour, still crisp
**Week 2-4 (fridge)**: Mature kimchi, well-balanced
**Month 2+ (fridge)**: Increasingly sour, softer texture
**Month 6+ (fridge)**: Very sour, best for cooking

There's no "right" age – different stages suit different uses.

## Signs of Trouble

Kimchi is remarkably safe due to its acidity and salt, but problems can occur:

**Mould on surface**: Remove affected portion plus some clean kimchi around it. If the mould has penetrated deep or the whole jar smells off, discard.

**Slimy texture**: Usually means too little salt or contamination. Discard if extensive.

**Truly unpleasant smell**: Different from fermented smell – you'll know. Trust your nose.

## Keeping Vegetables Submerged

Anything exposed to air can develop mould. Keep vegetables pressed below the brine:
- Use fermentation weights
- Press down with a smaller jar or plate
- Check regularly and push down any floating pieces

## Container Considerations

**Glass**: Doesn't absorb smells, easy to clean, lets you see the contents
**Plastic**: Lighter, won't break, but can stain and absorb odours
**Ceramic**: Traditional, beautiful, but heavy and can crack
**Stainless steel**: Durable but you can't see inside

Whatever you use, ensure it seals well. Kimchi smell is notorious for permeating everything.

## Can You Freeze Kimchi?

Technically yes, but I don't recommend it. Freezing kills most of the probiotics and changes the texture. If you must freeze (say, you're moving), know that it won't be quite the same when thawed.

## My Approach

I keep one container in regular rotation – daily eating kimchi – and another for longer-term storage. When the eating container gets low, I decant from the storage container. This way I always have kimchi at my preferred fermentation level.

The best storage is really just eating it regularly. Kimchi is meant to be a daily food, not something saved for special occasions. Make it, store it simply, and eat it often.`
  },

  'health/how-much-kimchi': {
    meta_description: 'How much kimchi should you eat daily? Here is practical guidance based on tradition and nutrition.',
    content: `# How Much Kimchi Should You Eat?

When people discover kimchi's health benefits, a common question follows: how much should I eat? It's a reasonable question without a simple answer.

## What Koreans Eat

In Korea, kimchi is eaten at virtually every meal. The average Korean consumes roughly 40-50g of kimchi per meal, totalling around 100-200g daily. Some eat significantly more.

This isn't calculated – it's just what accompanies meals. A few pieces with breakfast, more with lunch, more with dinner. It adds up.

## The Probiotic Angle

If you're eating kimchi specifically for probiotics, you want enough to provide a meaningful bacterial dose while giving your gut time to adjust.

Most recommendations suggest starting with 1-2 tablespoons (about 30g) daily and increasing gradually. Once adjusted, 50-100g daily is reasonable for probiotic benefits.

But here's the thing: we don't have precise data on optimal amounts. The gut microbiome is complex, and individual responses vary enormously.

## Starting Out

If you're new to fermented foods, go slowly:

**Week 1**: A tablespoon daily
**Week 2**: Two tablespoons daily
**Week 3+**: Increase to your preference

This gradual approach helps your digestive system adapt. Some people experience temporary bloating or gas when first eating fermented foods regularly.

## Finding Your Balance

After the adjustment period, eat as much as tastes good and feels right. For most people, that's somewhere between a small portion with meals and half a cup daily.

I eat roughly 50-100g most days, sometimes more. But I've been eating it for years. My gut is well-adapted.

## Sodium Considerations

Kimchi is salty – typically 300-500mg sodium per 100g serving. If you're watching sodium intake, this needs factoring in:
- Keep portions moderate
- Account for kimchi when salting other foods
- Consider making lower-sodium versions (harder to ferment but possible)

## Calorie Perspective

On the plus side, kimchi is very low calorie – roughly 15-20 calories per 100g. You can eat substantial amounts without significant calorie impact.

## Quality Matters More Than Quantity

A small amount of good, live-culture kimchi likely provides more benefit than large quantities of pasteurised kimchi with no live bacteria.

Focus on:
- Unpasteurised versions with live cultures
- Properly fermented (not just pickled in vinegar)
- Good quality ingredients

## My Practical Advice

Don't overthink it. Eat kimchi because you enjoy it, in amounts that feel right. If you're eating it several times a week as part of varied meals, you're probably getting benefits.

The Koreans didn't develop their kimchi tradition by measuring portions – they just ate it because it was there, it was delicious, and it made meals more interesting.

That's still the best approach: make or buy good kimchi, have it available, and eat it whenever you want. The right amount is whatever makes you happy.`
  },

  'health/kimchi-vs-sauerkraut': {
    meta_description: 'Kimchi and sauerkraut are both fermented cabbage, but they differ in important ways. Here is how they compare.',
    content: `# Kimchi vs Sauerkraut: How Do They Compare?

Both kimchi and sauerkraut are fermented cabbage. Both are probiotic-rich. Both have devoted fans. But they're quite different products with distinct flavour profiles, uses, and traditions.

## The Basic Difference

**Sauerkraut**: Shredded cabbage fermented with salt. That's it – two ingredients. The result is sour, slightly funky, and relatively mild.

**Kimchi**: Cabbage (usually whole or quartered) fermented with salt, chilli, garlic, ginger, and often fish sauce. Multiple ingredients, bold flavour, notable heat.

## Flavour Profiles

**Sauerkraut** is:
- Predominantly sour
- Relatively one-dimensional
- Mild, not spicy
- Subtle garlic/mustard notes depending on variety

**Kimchi** is:
- Complex – sour, spicy, garlicky, savoury
- Umami-rich (from fish sauce)
- Notably spicy (unless white kimchi)
- More aromatic

## Probiotic Content

Both contain similar Lactobacillus bacteria strains, developed through the same basic fermentation process. Studies show both are effective probiotic sources.

However, kimchi typically contains a greater diversity of bacterial strains, possibly due to its more complex ingredient list.

## Nutritional Comparison

**Calories**: Both very low (15-20 per 100g)
**Sodium**: Both fairly high; sauerkraut slightly less on average
**Vitamins**: Kimchi higher in A and C (from chilli and more vegetables)
**Fibre**: Similar
**Probiotics**: Similar if both are unpasteurised

## Culinary Uses

**Sauerkraut excels with:**
- Hot dogs and sausages
- German/Austrian dishes
- Reuben sandwiches
- Mild-flavoured meats
- Dishes where you want acidity without heat

**Kimchi excels with:**
- Korean dishes (obviously)
- Rice and grain bowls
- Asian-inspired fusion
- Dishes that can handle bold flavour
- Anywhere you want heat and complexity

## Cultural Context

**Sauerkraut**: Central and Eastern European tradition, particularly German. The word means "sour cabbage" in German. Associated with preservation for harsh winters.

**Kimchi**: Korean tradition spanning thousands of years. Central to Korean identity and cuisine. UNESCO-recognised cultural heritage.

## Texture

**Sauerkraut**: Fine shreds, uniformly soft
**Kimchi**: Larger pieces, more textural variety, often crunchier

## Versatility

I'd argue kimchi is more versatile because its bold flavour can transform simple dishes. A bowl of plain rice becomes interesting with kimchi. Sauerkraut needs more support.

But sauerkraut's mildness makes it easier to incorporate where you don't want dominant fermented flavour.

## My Take

These aren't really competitors – they're different products for different purposes. I keep both in my fridge.

Sauerkraut when I want something sour but gentle. Kimchi when I want bold, complex flavour.

If you're new to fermented foods, sauerkraut might be an easier entry point – its flavour is simpler and more familiar to Western palates. But don't stay there – kimchi's complexity is worth exploring.

And of course, I'm biased. Kimchi is my passion. But I respect a good sauerkraut, especially on a proper German sausage.`
  },

  'health/kimchi-side-effects': {
    meta_description: 'Kimchi is healthy, but it can cause side effects for some people. Here is what to know before eating fermented foods.',
    content: `# Kimchi Side Effects: What You Should Know

Kimchi is generally safe and beneficial, but like any food, it doesn't agree with everyone. Here's an honest look at potential side effects and who should be cautious.

## Digestive Adjustment

The most common "side effect" is temporary digestive change when you first start eating fermented foods regularly:

**What you might experience:**
- Bloating
- Gas
- Changes in bowel movements
- Mild stomach discomfort

**Why it happens:**
Your gut microbiome is adjusting to new bacterial populations. This is generally a sign that things are changing, not that something's wrong.

**What to do:**
Start with small amounts and increase gradually. Most adjustment symptoms pass within 1-2 weeks.

## Sodium Content

Kimchi is salty – 300-500mg sodium per 100g serving. For most people, this is fine in moderation. But if you're:
- Monitoring sodium for blood pressure
- On a low-sodium diet for medical reasons
- Eating very large quantities

...then the sodium adds up. Factor kimchi into your overall sodium intake.

## Histamine Sensitivity

Fermented foods are high in histamines. If you're histamine-intolerant, kimchi may trigger:
- Headaches
- Flushing
- Digestive issues
- Skin reactions

This affects a small percentage of people. If you suspect histamine intolerance, consult a doctor before eating fermented foods regularly.

## FODMAP Concerns

Kimchi contains ingredients (garlic, onion) high in FODMAPs – fermentable carbohydrates that can trouble people with IBS:
- Bloating
- Abdominal pain
- Altered bowel habits

If you're following a low-FODMAP diet, kimchi might not be suitable, or you may need to limit portions.

## Blood Thinning Interactions

Kimchi is high in vitamin K, which affects blood clotting. If you're taking blood thinners (warfarin), significant changes to vitamin K intake can affect medication efficacy.

Don't stop eating kimchi, but keep your intake consistent and inform your doctor.

## Spice Sensitivity

The capsaicin in kimchi's chilli can cause:
- Heartburn or acid reflux
- Stomach irritation
- Digestive discomfort

If you're sensitive to spicy foods, start with white kimchi (no chilli) or very small amounts.

## Very Rare Concerns

**Contamination**: Properly made kimchi is safe, but improper fermentation can allow harmful bacteria. Buy from reputable sources or follow proper technique when making your own.

**Allergies**: Rare, but some people react to specific ingredients (shellfish if shrimp paste is used, for example).

## Who Should Be Careful

- People with serious digestive conditions (consult doctor first)
- Those on blood thinners
- People with confirmed histamine intolerance
- Anyone with specific ingredient allergies

## Perspective

The vast majority of people can eat kimchi without problems. Koreans consume it daily without issues. The side effects mentioned above affect a minority.

If you're generally healthy, start slowly and see how you feel. Your body is usually good at telling you what works and what doesn't.

And remember: temporary adjustment symptoms aren't the same as genuine intolerance. Give your gut time to adapt before concluding that kimchi isn't for you.`
  }
};

async function main() {
  console.log('Batch 8: Updating remaining articles...\n');

  for (const [slug, update] of Object.entries(articleUpdates)) {
    console.log(`Updating: ${slug}`);
    try {
      await sql`
        UPDATE seo_articles
        SET
          content = ${update.content},
          meta_description = ${update.meta_description},
          word_count = ${update.content.split(/\s+/).length}
        WHERE slug = ${slug}
      `;
      console.log(`  ✓ Updated (${update.content.split(/\s+/).length} words)`);
    } catch (error) {
      console.error(`  ✗ Error updating ${slug}:`, error);
    }
  }

  console.log('\n✅ Batch 8 complete!');
}

main();
