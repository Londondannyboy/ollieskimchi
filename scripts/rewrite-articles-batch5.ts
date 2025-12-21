import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Batch 5: More articles in Ollie's authentic voice
const articleUpdates: Record<string, { content: string; meta_description: string }> = {
  'recipes/kimchi-burger': {
    meta_description: "Take your burger game to new heights with homemade kimchi. I'll show you how this fiery Korean pickle transforms an ordinary burger into something extraordinary.",
    content: `# The Kimchi Burger: My Favourite Fusion Creation

There's a moment in every cook's life when two seemingly unrelated ingredients come together and create something magical. For me, that moment was putting kimchi on a burger. It sounds simple, but trust me – it's transformative.

## Why Kimchi and Burgers Are Made for Each Other

I've cooked a lot of burgers in my time, and I'm always looking for that perfect combination of flavours and textures. A great burger needs contrast – something to cut through the richness of the meat. Most people reach for pickles or onions. I reach for kimchi.

The fermented tang of good kimchi does what regular pickles can only dream of. It brings acidity, yes, but also a gentle heat that builds slowly, a savoury depth that complements beef beautifully, and a crunch that holds up even against a juicy patty.

## Building the Perfect Kimchi Burger

**The Patty**
Keep it simple. Good quality beef mince, about 20% fat content, seasoned with just salt and pepper. Don't overwork it – you want a loose, tender patty that stays juicy. About 150g per burger is my preference.

**The Kimchi**
Drain your kimchi well before adding it to the burger. Excess liquid will make everything soggy. Give it a rough chop so you get kimchi in every bite without it all sliding out the back.

**The Cheese**
American cheese melts beautifully, but I often use a good mature cheddar. The sharpness works brilliantly with the kimchi's tang.

**The Sauce**
Mix mayonnaise with a spoonful of gochujang (Korean chilli paste) and a squeeze of lime. This ties everything together and adds another layer of Korean flavour.

## Assembly Tips

1. Toast your buns – this creates a barrier against moisture
2. Sauce on the bottom bun first
3. Patty while it's still hot so the cheese melts
4. Kimchi on top of the cheese (so it stays put)
5. More sauce on the top bun

## A Note on Accompaniments

I serve these with sweet potato fries and more kimchi on the side. Some people look at me funny when I suggest this, but once they try it, they understand.

The fermented crunch of kimchi alongside crispy, sweet fries is a combination that shouldn't work but absolutely does. It's the kind of food I love most – unpretentious, flavourful, and utterly satisfying.

Whether you're cooking for a weekend barbecue or just fancy treating yourself on a Tuesday evening, give the kimchi burger a go. I promise you won't look at regular pickles the same way again.`
  },

  'recipes/kimchi-dumplings': {
    meta_description: "Kimchi dumplings (mandu) are one of Korea's most beloved comfort foods. Learn how to make these flavourful parcels at home with my simple recipe.",
    content: `# Kimchi Dumplings: A Labour of Love Worth Every Minute

There's something deeply satisfying about making dumplings by hand. The rhythmic folding, the anticipation as they cook, the first bite into a perfectly pleated parcel. When you fill those dumplings with kimchi, you're creating something truly special.

## My Introduction to Mandu

I first learned to make kimchi dumplings from a Korean grandmother in Seoul. She didn't speak much English, and my Korean was non-existent, but we communicated through the food. She showed me how to fold, how to seal, how to know when they were perfectly cooked. That afternoon changed how I think about dumplings forever.

## The Filling

The filling is everything. Here's what I use:

- 200g well-drained kimchi, finely chopped
- 200g pork mince (or beef, or a mixture)
- 100g firm tofu, pressed and crumbled
- 2 spring onions, finely sliced
- 2 cloves garlic, minced
- 1 tablespoon sesame oil
- 1 tablespoon soy sauce
- Salt and white pepper to taste

The key is draining the kimchi properly. If it's too wet, your dumplings will be soggy and won't seal properly. I squeeze it in a clean tea towel until barely any liquid comes out.

## The Wrapper Debate

You can make your own wrappers, and I do sometimes when I have the time. But honestly? Good quality shop-bought dumpling wrappers work brilliantly. Look for the round ones in the freezer section of Asian supermarkets.

## Folding Technique

1. Place a heaped teaspoon of filling in the centre of each wrapper
2. Wet the edges with water using your finger
3. Fold in half to create a half-moon shape
4. Press the edges firmly to seal
5. For pleats, pinch small folds along the sealed edge

Don't stress about perfect pleats. Rustic-looking dumplings taste just as good, and there's a certain charm to homemade imperfection.

## Cooking Methods

**Pan-fried (Crispy)**: Heat oil in a non-stick pan, add dumplings flat-side down, cook until golden (2-3 minutes), add 50ml water, cover and steam until water evaporates (4-5 minutes).

**Steamed (Delicate)**: Line a steamer with cabbage leaves or baking paper, steam for 8-10 minutes until wrapper is translucent.

**Boiled (Soup-ready)**: Drop into simmering broth and cook for 6-7 minutes until they float.

## The Dipping Sauce

Mix together:
- 3 tablespoons soy sauce
- 1 tablespoon rice vinegar
- 1 teaspoon sesame oil
- Pinch of sugar
- Sliced spring onion
- Optional: chilli flakes

## Making Ahead

These freeze brilliantly. Lay them on a tray lined with baking paper, freeze until solid, then transfer to a bag. Cook from frozen, adding an extra minute or two to the cooking time.

There's nothing quite like sitting down to a plate of homemade kimchi dumplings. They're the kind of food that brings people together, whether you're making them alone on a Sunday afternoon or turning it into a family activity. The effort is worth it, every single time.`
  },

  'recipes/kimchi-pancakes': {
    meta_description: "Kimchi pancakes (kimchijeon) are crispy, savoury, and utterly addictive. Here's how I make them at home – perfect for a snack, starter, or light meal.",
    content: `# Kimchi Pancakes: Crispy, Savoury Perfection

If there's one dish that convinced me kimchi could be the star of the show rather than just a side, it's kimchijeon – Korean kimchi pancakes. These crispy, savoury beauties are everything I want in a snack: quick to make, deeply flavourful, and absolutely satisfying.

## The Beauty of Simplicity

A proper kimchi pancake requires just a handful of ingredients. That's what I love about it. No fancy techniques, no rare ingredients, just good kimchi transformed into something golden and crispy.

**The Essential Ingredients:**
- 150g well-fermented kimchi (the tangier, the better)
- 100g plain flour
- 2 tablespoons rice flour (for extra crispness)
- 150ml cold water
- 1 egg
- 2 tablespoons kimchi brine
- 2 spring onions, sliced
- Vegetable oil for frying

## The Secret to Crispness

Here's what I've learned after making hundreds of these pancakes: the batter needs to be thin. Really thin. Thick batter gives you doughy pancakes. Thin batter gives you that shattering crispness that makes these so addictive.

And use cold water. Cold batter in a hot pan creates more contrast, which means more crispness. It's the same principle as making good Yorkshire puddings.

## My Method

1. Chop the kimchi roughly – you want some larger pieces for texture
2. Mix the flours in a bowl, make a well in the centre
3. Add the egg, water, and kimchi brine, whisk until smooth
4. Fold in the kimchi and spring onions
5. Heat a good glug of oil in a non-stick pan over medium-high heat
6. Pour in the batter, spreading it thin
7. Cook until the bottom is deeply golden and crispy (3-4 minutes)
8. Flip carefully and cook the other side

## The Flip

The flip is the nerve-wracking part. I use a wide spatula and a bit of confidence. If you're worried, slide the pancake onto a plate, place the pan upside down over it, and flip the whole thing.

## Serving

Cut into wedges and serve immediately with a dipping sauce. My go-to:
- 2 tablespoons soy sauce
- 1 tablespoon rice vinegar
- A drizzle of sesame oil
- Toasted sesame seeds

## Variations

Once you've mastered the basic pancake, try adding:
- Seafood (prawns or squid work beautifully)
- Bacon or pork belly pieces
- Cheese (controversial but delicious)
- Gochujang for extra heat

## When to Serve

Kimchi pancakes are brilliant as a starter, as a snack with drinks, or as part of a Korean feast. I often make them for Sunday lunch alongside some steamed rice and a bowl of doenjang-jjigae (soybean paste stew).

They're also perfect for using up kimchi that's become quite sour. In fact, the more fermented your kimchi, the better these pancakes taste. That tanginess cuts through the richness of the batter beautifully.

There's something almost primitive about the satisfaction of eating crispy kimchi pancakes straight from the pan. Golden, savoury, and utterly moreish. Once you've made them, they'll become a regular in your cooking repertoire.`
  },

  'recipes/kimchi-quesadilla': {
    meta_description: "Kimchi quesadillas might sound unusual, but this Korean-Mexican fusion is absolutely delicious. Here's how to make this crispy, melty, spicy treat.",
    content: `# Kimchi Quesadillas: Fusion Done Right

I'm usually a bit sceptical about fusion food. Too often it's a confused mess that doesn't honour either cuisine. But kimchi quesadillas? This is fusion at its finest – two strong flavours that somehow bring out the best in each other.

## Why This Works

Think about it: a quesadilla is essentially crispy, melted cheese in a tortilla. Kimchi brings acidity, heat, and crunch. It's the same principle as adding pickled jalapeños, but with so much more depth of flavour.

The fermented funkiness of good kimchi plays beautifully against rich, melted cheese. The crispy tortilla adds texture. It shouldn't work, but it absolutely does.

## The Ingredients

Keep it simple:
- 2 large flour tortillas
- 100g kimchi, well-drained and roughly chopped
- 150g cheese (Monterey Jack, mozzarella, or mature cheddar)
- Optional: pulled pork, bacon, or grilled chicken
- Optional: fresh coriander
- Butter or oil for cooking

## The Method

1. Grate your cheese (it melts more evenly than sliced)
2. Drain the kimchi well – squeeze it in kitchen paper
3. Heat a large pan over medium heat
4. Add a small knob of butter
5. Place one tortilla in the pan
6. Cover half with cheese, then kimchi, then more cheese
7. Fold the tortilla over
8. Press down gently with a spatula
9. Cook until the bottom is golden (2-3 minutes)
10. Flip and cook the other side

## The Cheese Question

I've experimented with many cheeses. Here's what I've found:

**Monterey Jack**: Classic choice, melts beautifully, mild enough not to compete with the kimchi.

**Mozzarella**: Great stretch, subtle flavour, works brilliantly.

**Mature Cheddar**: More flavour, but can overwhelm. Use sparingly or mix with milder cheese.

**Cream Cheese**: Add a smear for extra richness – surprisingly good.

## Serving Suggestions

Cut into triangles and serve with:
- Sour cream (the coolness is perfect against the heat)
- Extra kimchi on the side
- Sliced spring onions
- A squeeze of lime

## Making It a Meal

On its own, a kimchi quesadilla is a fantastic snack. But add some protein and you've got a proper meal:

- **Pulled Pork**: Slow-cooked pork with kimchi is a match made in heaven
- **Crispy Bacon**: Because bacon makes everything better
- **Grilled Chicken**: For something lighter but still satisfying
- **Fried Egg**: Served on top, yolk running into the kimchi

## A Note on Fusion

I know some people are uncomfortable with mixing cuisines. But food has always evolved through exchange and experimentation. The chillies that define Korean cuisine today came from the Americas via Portuguese traders. Tomatoes in Italian food? Same story.

Kimchi quesadillas aren't disrespecting either cuisine – they're celebrating what happens when great flavours meet. And honestly? They're just really delicious. Sometimes that's all the justification you need.`
  },

  'guides/kimchi-fermentation': {
    meta_description: "Understanding fermentation is key to making great kimchi. I'll explain the science in simple terms and share what I've learned about controlling the process.",
    content: `# Understanding Kimchi Fermentation: The Science Behind the Magic

When I first started making kimchi, I thought of fermentation as this mysterious, slightly scary process. Leaving food out to essentially rot? It seemed counterintuitive. But once I understood what's actually happening, it became fascinating – and my kimchi improved dramatically.

## What's Actually Happening

Fermentation is controlled decomposition. When you salt vegetables and seal them in a jar, you create an environment where beneficial bacteria (mainly Lactobacillus) thrive while harmful bacteria cannot survive.

These good bacteria consume the natural sugars in the vegetables and produce lactic acid. This acid is what gives kimchi its characteristic tang, and it's also what preserves the vegetables naturally.

## The Fermentation Timeline

**Days 1-2 (Initial Phase)**
Not much visible change. The salt is drawing moisture from the vegetables, creating the brine. Bacteria populations are just beginning to establish.

**Days 3-5 (Active Fermentation)**
Bubbles appear – carbon dioxide escaping as bacteria feast. The kimchi starts developing its distinctive sour smell. This is when it's most active and needs regular burping if stored in jars.

**Days 5-7 (Flavour Development)**
The sourness intensifies. The kimchi develops complexity. For many dishes, this is the sweet spot.

**Week 2+ (Mature Fermentation)**
Sourness continues to develop. The kimchi becomes softer. Perfect for cooked dishes like kimchi jjigae or fried rice.

## Temperature: The Key Variable

Temperature is the single most important factor you can control.

**Room Temperature (18-22°C)**: Active fermentation. Kimchi will be ready in 3-5 days but will continue to sour quickly. Good for getting kimchi started.

**Refrigerator (4°C)**: Slow fermentation. Kimchi takes weeks to fully develop but stays fresher longer. Most home cooks ferment at room temperature for a few days, then refrigerate.

**Traditional Onggi (10-12°C)**: If you can maintain a cool, stable temperature (like a cellar), you get the best of both worlds – active enough to develop flavour, cool enough to maintain freshness.

## Signs of Good Fermentation

- Bubbles rising when you press the kimchi down
- Pleasantly sour aroma (not putrid or off-putting)
- Vegetables remain relatively crisp
- Brine is slightly cloudy but not slimy

## Signs Something's Wrong

- Pink or grey mould on the surface
- Slimy texture
- Truly unpleasant smell (you'll know the difference)
- Excessive mushiness

If you see mould, remove it and the surrounding area. If the kimchi beneath smells and tastes fine, it's usually salvageable. But if the whole batch smells off, it's best to start again.

## My Tips for Consistent Results

1. **Use enough salt**: During the initial salting, vegetables should taste pleasantly salty, like chips. This kills harmful bacteria before fermentation begins.

2. **Keep vegetables submerged**: Anything exposed to air can develop mould. Push everything under the brine.

3. **Start at room temperature**: This kickstarts the bacteria. After 2-3 days of bubbling, move to the fridge.

4. **Don't over-fill jars**: Leave headspace for expansion during active fermentation.

5. **Burp regularly**: During the first few days, open the jar daily to release built-up gas.

## The Learning Process

Making good kimchi consistently takes practice. I've had batches that were too sour, too salty, or just didn't develop properly. Each one taught me something.

The beautiful thing about fermentation is that it's alive. Every batch will be slightly different based on your vegetables, your environment, your timing. Embrace that variability. It's what makes homemade kimchi special.

Once you understand the basic principles, you can start experimenting – adjusting salt levels, fermentation times, and ingredients to create kimchi that's uniquely yours.`
  },

  'culture/history-of-kimchi': {
    meta_description: "The fascinating history of kimchi spans thousands of years and reflects Korea's culture and resilience. Here's the story of how this iconic dish evolved.",
    content: `# The History of Kimchi: Three Thousand Years in the Making

When I first started learning about kimchi, I assumed it had always been the fiery red dish we know today. The reality is far more interesting. Kimchi's history is a story of innovation, adaptation, and cultural identity spanning millennia.

## The Early Days

The earliest forms of kimchi date back over 3,000 years. But they looked nothing like modern kimchi. These were simple preserved vegetables – cabbage, radish, and cucumber – pickled in salt or fermented in brine.

There were no chillies. No gochugaru. No red colour at all.

These early pickles were a practical solution to Korea's harsh winters. Without refrigeration, fermentation was the only way to preserve vegetables through months of cold when nothing grew.

## The Chinese Influence

The word "kimchi" likely derives from the Chinese characters for "submerged vegetables." Early Korean texts describe various pickled vegetables, showing the technique was well-established by the Three Kingdoms period (57 BC – 668 AD).

But Korean kimchi evolved differently from Chinese pickles. Korean fermentation techniques produced a distinctly different flavour profile – more complex, more varied, and eventually, more central to the cuisine.

## The Chilli Revolution

Here's the part that surprises most people: chillies didn't arrive in Korea until the late 16th or early 17th century. They came via Portuguese traders who brought them from the Americas to Asia.

It took another century or two for chillies to become a standard kimchi ingredient. Early Korean cookbooks from the 1600s and 1700s show the gradual adoption of chillies, initially as a minor ingredient, then increasingly central.

By the late 1800s, the red, spicy kimchi we recognise today had become the standard. But white kimchi and other non-spicy varieties never disappeared – they remain popular today.

## Napa Cabbage Joins the Party

The napa cabbage (baechu) now synonymous with kimchi is also a relatively recent addition. It was introduced to Korea from China in the late 19th century and quickly became the preferred vegetable for kimchi.

Before napa cabbage, Koreans made kimchi with native Korean cabbage varieties, radishes, and other vegetables. The milder, more absorbent napa cabbage proved ideal for the fermentation process.

## Kimchi Through Hardship

Kimchi's importance to Korean identity became especially clear during difficult times. During the Japanese occupation (1910-1945), Koreans held onto their food traditions as a form of cultural resistance.

During the Korean War, kimchi was essential sustenance for soldiers and civilians alike. The US military even tried to supply Korean troops with canned kimchi, though the results were less than successful.

## Modern Evolution

Today, kimchi continues to evolve. Commercial production has standardised many recipes, but regional and family variations thrive. Kimchi refrigerators (kimchi naenganggo) are standard in Korean homes, providing precise temperature control for fermentation.

Globally, kimchi has exploded in popularity. It's found in fusion restaurants, health food shops, and supermarkets worldwide. UNESCO recognised kimjang – the communal tradition of making and sharing kimchi – as an Intangible Cultural Heritage in 2013.

## What Kimchi Teaches Us

What fascinates me about kimchi's history is how it reflects broader patterns. A practical preservation technique becomes a cultural touchstone. Foreign ingredients (chillies, napa cabbage) are adopted and made completely Korean. A simple food becomes a symbol of national identity.

When I make kimchi, I'm participating in a tradition that stretches back thousands of years. That's a privilege I don't take lightly. Every jar connects me to generations of Korean cooks who developed and refined these techniques.

Understanding this history makes me appreciate kimchi even more – not just as a delicious food, but as a living piece of cultural heritage that continues to evolve.`
  }
};

async function main() {
  console.log('Batch 5: Updating more articles in Ollie\'s voice...\n');

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

  console.log('\n✅ Batch 5 complete!');
}

main();
