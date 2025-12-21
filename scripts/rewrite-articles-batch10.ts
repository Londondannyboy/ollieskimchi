import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Batch 10: Final remaining articles
const articleUpdates: Record<string, { content: string; meta_description: string }> = {
  'buy/kimchi-subscription': {
    meta_description: 'Kimchi subscriptions deliver fresh fermented vegetables to your door. Here is what to look for in a good subscription service.',
    content: `# Kimchi Subscriptions: Fresh Ferments Delivered

A kimchi subscription can be a brilliant way to ensure you always have quality fermented vegetables at home. Regular deliveries, curated varieties, and often better quality than supermarket options.

## What Subscription Services Offer

**Regular deliveries**: Weekly, fortnightly, or monthly – you choose the frequency based on how quickly you go through kimchi.

**Variety**: Many services rotate varieties or offer different types in each delivery. A great way to explore beyond standard napa cabbage.

**Freshness**: Shipped directly from producers, often fresher than shop-bought options.

**Consistency**: No running out. No emergency supermarket trips for substandard kimchi.

## What to Look For

**Unpasteurised options**: For probiotic benefits, you want live cultures. Check that the service ships unpasteurised kimchi properly chilled.

**Cold chain**: Fermented foods need temperature control. Good services use insulated packaging and fast delivery.

**Flexibility**: Can you pause, skip, or cancel easily? Adjust quantities? Life changes; your subscription should adapt.

**Quality ingredients**: Look for services that list ingredients clearly and prioritise quality over cost-cutting.

**Producer transparency**: The best services tell you where their kimchi comes from and how it's made.

## Questions to Ask

- Is the kimchi pasteurised or unpasteurised?
- How is it packaged and shipped?
- What's the typical shelf life on arrival?
- Can I customise or choose varieties?
- What's the cancellation policy?
- Do you deliver to my area?

## Who Benefits Most

**Regular kimchi eaters**: If you eat kimchi most days, subscriptions save shopping time and ensure consistent supply.

**Quality seekers**: Subscription services often source better kimchi than typical supermarkets stock.

**Explorers**: Want to try different varieties without committing to large jars of each? Subscriptions let you sample widely.

**Remote locations**: If good kimchi is hard to find locally, delivery brings quality to your door.

## Potential Drawbacks

**Commitment**: Subscriptions require regular payments. If your kimchi eating varies, you might end up with too much.

**Cost**: Often more expensive than buying in bulk from Korean supermarkets.

**Delivery limitations**: Some areas are harder to service, especially with temperature-sensitive products.

**Fixed quantities**: You might not need kimchi in exactly the amounts they send.

## Making It Work

**Start conservative**: Begin with the smallest/least frequent option. You can always increase.

**Track consumption**: See how quickly you go through deliveries before adjusting.

**Pause when needed**: Use pause features for holidays or when your fridge is already full.

**Combine sources**: Subscription for base supply, local sources for variety or special occasions.

## Alternatives to Consider

If full subscription doesn't suit you:
- One-time orders from quality producers
- Korean supermarket deliveries
- Local farmers' market purchases
- Making your own (the ultimate fresh supply)

## My Take

For serious kimchi enthusiasts, a subscription can be excellent. You're prioritising quality and convenience, and supporting small producers who make genuine fermented products.

But evaluate your actual consumption first. A subscription you don't use is money wasted. Better to start small and scale up than overcommit.`
  },

  'buy/korean-ingredients': {
    meta_description: 'A guide to essential Korean ingredients for cooking at home, from gochugaru to doenjang and beyond.',
    content: `# Essential Korean Ingredients: A Starter's Guide

If you want to cook Korean food – including making your own kimchi – you'll need a few key ingredients that might not be in your regular shopping list. Here's what to look for.

## The Fermentation Essentials

**Gochugaru (고추가루)**: Korean red chilli flakes. Not negotiable for traditional kimchi. Coarse flakes for kimchi, fine powder for sauces.

**Sea salt (for kimchi)**: Coarse sea salt or Korean solar salt (천일염) for salting cabbage. Regular table salt works but isn't traditional.

**Fish sauce (액젓)**: Korean fish sauce is often made from anchovies (myulchi aekjeot). Adds crucial umami.

**Saeujeot (새우젓)**: Fermented shrimp paste. Another traditional umami source for kimchi. Not essential but authentic.

## The Flavour Bases

**Gochujang (고추장)**: Fermented chilli paste. Sweet, savoury, spicy – utterly essential for Korean cooking beyond kimchi.

**Doenjang (된장)**: Fermented soybean paste. Similar to miso but distinctive. Makes incredible stews.

**Ssamjang (쌈장)**: A blend of gochujang and doenjang, perfect for wraps and dipping.

**Soy sauce (간장)**: Korean soy sauce (ganjang) is lighter and less sweet than Japanese varieties.

## Pantry Staples

**Sesame oil (참기름)**: Toasted sesame oil is used to finish many dishes. The aroma is distinctive and irreplaceable.

**Rice vinegar**: For quick pickles and dipping sauces.

**Mirin or rice wine**: Sweetness and depth in cooking.

**Dried anchovies (마른 멸치)**: For stock and side dishes.

**Dried kelp (다시마)**: Essential for vegetarian stock.

## Fresh Ingredients

**Garlic**: Koreans use a lot of garlic. More than you think. Then more again.

**Ginger**: Fresh ginger appears in most Korean recipes.

**Spring onions**: Used generously in almost everything.

**Korean radish (무)**: Larger and denser than daikon. Used in many dishes.

**Napa cabbage (배추)**: The kimchi cabbage. Available in Asian supermarkets and increasingly in regular shops.

## Rice and Noodles

**Short-grain rice**: Korean rice is short-grain and slightly sticky. Different from long-grain.

**Sweet potato noodles (당면)**: Glass noodles for japchae and stews.

**Various noodles**: Fresh and dried options for different dishes.

## Where to Shop

**Korean supermarkets**: Best selection and typically best prices.
**Asian supermarkets**: Often have Korean sections.
**Online retailers**: Nationwide delivery.
**Major supermarkets**: Increasingly stocking basics.

## Building Your Pantry

**Start with:**
1. Gochugaru (if making kimchi)
2. Gochujang (most versatile)
3. Sesame oil
4. Good soy sauce
5. Short-grain rice

**Add next:**
- Doenjang
- Fish sauce
- Dried anchovies/kelp
- Ssamjang

**Eventually:**
- Full kimchi-making supplies
- Various noodles
- Speciality items

## Storage Tips

Most fermented pastes keep for months refrigerated after opening. Gochugaru is best frozen for long-term storage. Dried goods keep in a cool, dark place.

Building a Korean pantry is an investment that pays off in countless meals. Start with basics, expand as you explore, and before long you'll have everything you need for authentic Korean cooking.`
  },

  'kimchi': {
    meta_description: 'Everything you need to know about kimchi – Korea\'s iconic fermented food. From history and health benefits to recipes and buying tips.',
    content: `# Kimchi: Korea's Iconic Fermented Treasure

Welcome to the world of kimchi. Whether you're new to this remarkable food or already a devotee, there's always more to discover about Korea's most famous culinary export.

## What Is Kimchi?

At its simplest, kimchi is fermented vegetables – most commonly napa cabbage seasoned with chilli, garlic, ginger, and fish sauce. But that description barely scratches the surface of a food with thousands of years of history and hundreds of variations.

The fermentation process transforms simple vegetables into something complex, tangy, and alive with beneficial bacteria. It's preservation, nutrition, and incredible flavour all in one jar.

## Why People Love Kimchi

**Flavour**: Bold, complex, unlike anything else. Sour, spicy, garlicky, umami-rich – kimchi hits multiple taste receptors simultaneously.

**Versatility**: Eat it as a side dish, cook it in stews, put it on sandwiches, mix it with rice. Kimchi works with almost everything.

**Health benefits**: Probiotics for gut health, vitamins and minerals from vegetables, low calories, and fibre. Traditional health food that tastes indulgent.

**Cultural richness**: Understanding kimchi means understanding Korean food culture, preservation traditions, and family recipes passed through generations.

## The Essentials

If you're starting your kimchi journey, here's what to know:

**Traditional napa cabbage kimchi (baechu-kimchi)** is the standard – what most people mean when they say "kimchi."

**Fermentation is key**. Properly fermented kimchi has live probiotic cultures. Pasteurised versions don't.

**Age matters**. Fresh kimchi is crisp and mild. Aged kimchi is sour and soft, better for cooking. Both are valid.

**There are hundreds of varieties**. Beyond napa cabbage: radish, cucumber, green onion, white kimchi, water kimchi, and more.

## Getting Started

**Buy some**: Start with supermarket kimchi or, better, from a Korean supermarket. See how you like it.

**Explore uses**: Try it with rice. Put it on eggs. Add it to ramen. See where you like it best.

**Make your own**: Once you're hooked, try making kimchi at home. It's easier than you think and incredibly satisfying.

**Go deeper**: Explore different varieties. Learn the history. Try regional styles.

## Explore Our Guides

We've put together comprehensive guides to help you on your kimchi journey:

- **Recipes**: From traditional methods to quick versions
- **Health benefits**: What the science says about kimchi and wellness
- **Buying guides**: Finding quality kimchi in the UK
- **Cultural context**: History and traditions behind the food
- **Cooking with kimchi**: Dishes that showcase fermented flavour

## Why I Love Kimchi

I came to kimchi as a cook looking for new flavours. I stayed because it became essential to how I eat. There's nothing quite like having a jar of homemade kimchi in the fridge – knowing it's alive, evolving, ready to transform the simplest meal into something interesting.

Kimchi rewards curiosity. The more you explore, the more you discover. It's been a staple of Korean tables for millennia, and once you understand it, you'll see why.

Welcome to the journey.`
  },

  'recipes/spring-onion-kimchi': {
    meta_description: 'Spring onion kimchi (pa-kimchi) is a punchy, aromatic variety perfect with grilled meats. Here is how to make it.',
    content: `# Spring Onion Kimchi: Bold and Aromatic

Pa-kimchi – spring onion kimchi – is one of my favourite varieties. It's punchier than cabbage kimchi, with an almost aggressive savoury quality that stands up to rich, fatty foods like grilled pork belly.

## Why Make Spring Onion Kimchi

Napa cabbage kimchi is wonderful, but pa-kimchi offers something different:
- **Stronger flavour**: Spring onions have more bite than cabbage
- **Different texture**: Long, fibrous strands rather than leafy layers
- **Perfect pairing**: Especially good with grilled meats
- **Quicker to mature**: Ready to eat sooner than cabbage kimchi

If you love kimchi and want variety, pa-kimchi is essential.

## What You Need

**For the spring onions:**
- 300g spring onions (2-3 bunches)
- 1 tablespoon sea salt

**For the paste:**
- 2 tablespoons gochugaru
- 1 tablespoon fish sauce
- 1 tablespoon fermented shrimp paste (optional)
- 1 teaspoon sugar
- 4 cloves garlic, minced
- 1 teaspoon fresh ginger, grated
- 1 tablespoon toasted sesame seeds

## The Process

**Prepare the spring onions**
1. Trim roots and any wilted outer layers
2. Cut into 5cm lengths (or leave whole if you prefer)
3. Rinse and drain well
4. Toss with salt and leave for 30 minutes
5. Rinse briefly and squeeze out excess moisture

**Make the paste**
1. Combine all paste ingredients in a bowl
2. Mix thoroughly until it forms a thick sauce
3. Taste and adjust – more fish sauce for savouriness, more sugar to balance

**Combine**
1. Add spring onions to the paste
2. Mix gently but thoroughly, coating every piece
3. Pack into a clean jar, pressing down firmly

**Ferment**
1. Leave at room temperature for 1-2 days
2. Check for bubbles and tangy aroma
3. Refrigerate and use within 2-3 weeks

## Serving Suggestions

**With grilled meat**: The classic pairing. Wrap pork belly or beef in lettuce with a piece of pa-kimchi.

**In ssam**: Any wrapped meal benefits from the punch of spring onion kimchi.

**With noodles**: Particularly cold noodle dishes where you want aromatic kick.

**As banchan**: One of several small dishes alongside rice.

## Notes

Spring onion kimchi doesn't keep as long as cabbage kimchi. The texture changes more quickly. Plan to eat it within a few weeks.

The fermentation time is shorter too – the natural sugars in spring onions ferment quickly. One to two days at room temperature is usually enough.

For extra complexity, some recipes add julienned radish or carrot to the mix. It adds crunch and extends the volume.

If you find the raw spring onion flavour too sharp, you can blanch them briefly (10 seconds in boiling water) before salting. This mellows the bite while keeping crunch.

Pa-kimchi is a gateway to the wider world of non-cabbage kimchis. Once you've made it, you'll understand that "kimchi" is really a technique applied to many vegetables, not just one recipe.`
  }
};

async function main() {
  console.log('Batch 10: Final remaining articles...\n');

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

  console.log('\n✅ Batch 10 complete!');
}

main();
