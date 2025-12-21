import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Batch 6: More articles in Ollie's authentic voice
const articleUpdates: Record<string, { content: string; meta_description: string }> = {
  'recipes/kimchi-ramen': {
    meta_description: 'Kimchi ramen is the ultimate comfort bowl. Here is how I make this warming, flavour-packed noodle soup at home.',
    content: `# Kimchi Ramen: The Ultimate Comfort Bowl

On cold evenings when I need something warming and deeply satisfying, I turn to kimchi ramen. It's become my go-to comfort food – a steaming bowl of rich broth, springy noodles, and plenty of tangy, spicy kimchi.

## Why Kimchi Transforms Ramen

Good ramen is all about layers of flavour. The broth needs depth. The toppings need to complement without overwhelming. Kimchi does both beautifully.

The fermented tang cuts through rich, fatty broth. The heat builds gradually, warming you from the inside. And the texture – still slightly crunchy even in hot soup – adds interest to every spoonful.

## Building the Broth

You can make this as simple or complex as you like. For a quick version, a good quality chicken stock works brilliantly. For something more traditional, you'll want to spend more time.

**Quick Version (30 minutes):**
- 1 litre good chicken stock
- 2 tablespoons gochujang
- 1 tablespoon soy sauce
- 1 tablespoon mirin
- 2 cloves garlic, minced
- 1 tablespoon ginger, grated
- 100ml kimchi brine

**Proper Version (2+ hours):**
Start with pork bones, chicken carcass, or both. Roast them first for colour and flavour. Simmer with aromatics for hours. Strain and season. It's more work, but the depth of flavour is remarkable.

## The Noodles

Fresh ramen noodles are best if you can find them. Look in Asian supermarkets – they're usually in the chiller section. Dried ramen noodles work too, just avoid the instant variety (though in a pinch, even those will do – no judgement here).

Cook the noodles separately and add to each bowl. This keeps the broth clear and prevents overcooking.

## Assembly

Here's how I build my bowl:

1. Bring broth to a rolling boil
2. Place cooked noodles in a deep bowl
3. Ladle hot broth over the noodles
4. Top with a generous pile of kimchi
5. Add a soft-boiled egg, halved
6. Scatter spring onions and sesame seeds
7. Drizzle with sesame oil

## The Egg Situation

The soft-boiled egg is non-negotiable for me. Here's how to get it right:

1. Bring water to a boil
2. Carefully lower in room-temperature eggs
3. Cook for exactly 6 minutes 30 seconds
4. Immediately transfer to ice water
5. Peel when cooled

The yolk should be jammy – set around the edges but still flowing in the centre. When you break into it and that golden yolk mixes with the spicy broth... that's the moment.

## Variations

- **Extra spicy**: Add gochugaru and a splash of the fiery juice from the bottom of your kimchi jar
- **Creamy**: Stir in a tablespoon of tahini or peanut butter
- **Protein-rich**: Top with sliced pork belly, chicken, or fried tofu
- **Veggie-loaded**: Add pak choi, mushrooms, sweetcorn

## A Note on Speed

This can be a 20-minute dinner or a weekend project. Both versions are valid. Sometimes I want the ritual of slow cooking; sometimes I need dinner on the table fast. Kimchi ramen accommodates both moods.

What matters is that steaming bowl at the end – noodles tangled with kimchi, broth rich and warming, and that first slurp that makes everything feel right.`
  },

  'recipes/kimchi-eggs': {
    meta_description: 'Kimchi and eggs are a match made in breakfast heaven. From fried to scrambled, here are my favourite ways to combine them.',
    content: `# Kimchi and Eggs: A Love Story

If there's one combination that's become a staple in my kitchen, it's kimchi and eggs. It sounds almost too simple, but the interplay of rich, creamy egg and tangy, spicy kimchi is genuinely brilliant.

## The Classic: Kimchi Fried Eggs

This is my go-to breakfast. Quick, satisfying, and never boring.

**The Method:**
1. Heat a good glug of oil in a non-stick pan
2. Add a handful of chopped kimchi and fry for 2-3 minutes
3. Push to the side and crack in your eggs
4. Fry until the whites are set but yolks are still runny
5. Serve immediately with toast or rice

The kimchi gets slightly caramelised and mellows in heat while the eggs stay soft. The runny yolk mixes with the spicy juices from the kimchi. It's messy and perfect.

## Kimchi Scrambled Eggs

For something a bit more substantial, try scrambled eggs with kimchi folded through.

**The Key**: Don't add the kimchi too early. Scramble your eggs low and slow until they're almost set, then fold in the chopped kimchi right at the end. This keeps the kimchi from releasing too much liquid and making the eggs watery.

Add a sprinkle of spring onions and sesame seeds. Serve on toast or with rice and a drizzle of soy sauce.

## The Omelette

A proper French omelette filled with kimchi is surprisingly elegant for something so easy.

**Tips:**
- Use well-drained kimchi
- Don't overfill – a tablespoon or two is plenty
- Add a bit of cheese if you like (cheddar works well)
- Fold while the top is still slightly wet

## Kimchi Shakshuka

This is my weekend breakfast favourite – eggs baked in a spicy kimchi sauce.

**The Method:**
1. Sauté onion and garlic in a wide pan
2. Add chopped kimchi and fry for 3-4 minutes
3. Pour in a tin of chopped tomatoes
4. Add a spoonful of gochujang
5. Simmer until slightly thickened
6. Make wells and crack in eggs
7. Cover and cook until whites are set
8. Finish under the grill if needed

Serve with crusty bread for dipping. The combination of tomato, egg, and kimchi shouldn't work but absolutely does.

## Egg-Topped Kimchi Fried Rice

This is more of a meal than a breakfast, but it's too good not to mention.

Make kimchi fried rice (yesterday's rice, kimchi, whatever vegetables you have, soy sauce) and top with a fried egg. When you break that yolk and it runs through the spicy rice... that's the good stuff.

## The Perfect Soft Boil for Ramen

I mentioned this in my ramen recipe, but it bears repeating:

1. Boiling water
2. Room temperature eggs
3. 6 minutes 30 seconds
4. Straight into ice water
5. Peel when cool

The jammy yolk is essential for noodle dishes. It mixes with the broth and creates this silky, rich sauce.

## Why This Combination Works

Eggs are mild and rich. Kimchi is bold and acidic. They balance each other perfectly. The egg tempers the kimchi's heat while the kimchi lifts the egg from ordinary to extraordinary.

I eat this combination several times a week. It never gets old. And it's proof that sometimes the simplest ideas are the best ones.`
  },

  'recipes/kimchi-grilled-cheese': {
    meta_description: 'The kimchi grilled cheese takes comfort food to another level. Melty cheese meets tangy kimchi in this perfect sandwich.',
    content: `# Kimchi Grilled Cheese: Comfort Food Elevated

A proper grilled cheese sandwich is already one of life's simple pleasures. Add kimchi, and you've got something truly special – the same melty, crispy satisfaction with an extra dimension of flavour that makes it memorable.

## Why It Works

The basic grilled cheese is all about contrast: crispy exterior, melty interior, simple satisfaction. Kimchi adds another layer of contrast – tangy against creamy, crunchy against soft, spicy against mild. It takes something good and makes it exceptional.

## The Foundation

**Bread**: Something sturdy that won't go soggy. Sourdough is my favourite – the tang complements the kimchi beautifully. White sandwich bread works fine too.

**Butter**: Real butter, softened. This is what creates the golden, crispy exterior.

**Cheese**: You need something that melts well. I typically use a combination:
- Mature cheddar for flavour
- Mozzarella for stretch
- Monterey Jack if I have it

About 50-60g of cheese total per sandwich.

## The Kimchi

This is crucial: **drain your kimchi well**. Excess liquid is the enemy of crispy bread. I squeeze mine in kitchen paper until it's as dry as possible.

Then chop it roughly – you want pieces small enough to distribute evenly but large enough to have presence.

## The Method

1. Butter the outside of each bread slice
2. Place one slice, butter-side down, in a cold pan
3. Layer cheese, then kimchi, then more cheese
4. Top with second slice, butter-side up
5. Turn heat to medium-low
6. Cook slowly until bottom is golden (3-4 minutes)
7. Flip carefully
8. Continue until second side is golden and cheese is melted

## The Secret: Go Low and Slow

The biggest mistake is cooking too hot. High heat means burnt bread and cold cheese. Low heat gives you time – the bread crisps gradually while the cheese melts properly. Patience is everything.

## Variations

**The Korean**: Add a smear of gochujang to the inside of the bread before assembling. Extra heat, extra flavour.

**The Indulgent**: Slip some crispy bacon in there. The saltiness with the tangy kimchi is incredible.

**The Veggie**: Sautéed mushrooms and kimchi is a surprisingly delicious combination.

**The Breakfast**: Add a fried egg on top after cooking. Messy but magnificent.

## Serving

Cut diagonally (it's the law) and serve immediately. The cheese pull when you separate the halves is half the fun.

I usually serve mine with more kimchi on the side and maybe a pickle. Something about eating pickled vegetables with more pickled vegetables appeals to me.

## A Note on Cheese Pulls

Everyone loves a good cheese pull – that satisfying stretch when you bite into a grilled cheese. For maximum effect:
- Use a combination of cheeses
- Make sure everything is properly melted before removing from heat
- Serve immediately – waiting kills the pull

There's something almost childishly satisfying about a perfect kimchi grilled cheese. The crispy bread, the flowing cheese, the little bursts of tangy heat from the kimchi. It's comfort food that happens to be interesting, and I'm here for it.`
  },

  'health/kimchi-probiotics': {
    meta_description: 'Kimchi is packed with probiotics from natural fermentation. Here is what you need to know about these beneficial bacteria.',
    content: `# Kimchi and Probiotics: What You Need to Know

One of the main reasons people are interested in kimchi these days is the probiotics. As someone who eats kimchi almost daily, I've done quite a bit of reading on this subject. Here's what I've learned.

## What Are Probiotics?

Probiotics are live microorganisms – mainly bacteria and some yeasts – that provide health benefits when consumed in adequate amounts. The word comes from Greek and Latin roots meaning "for life."

Your gut is home to trillions of microorganisms (collectively called the gut microbiome), and probiotics can help maintain or restore a healthy balance of these organisms.

## How Kimchi Gets Its Probiotics

Kimchi's probiotics come from lacto-fermentation. When you salt vegetables and seal them in an anaerobic (oxygen-free) environment, naturally occurring Lactobacillus bacteria begin to multiply. They consume sugars and produce lactic acid, which preserves the vegetables and gives kimchi its characteristic tang.

The main probiotic strains found in kimchi include:
- Lactobacillus plantarum
- Lactobacillus brevis
- Leuconostoc mesenteroides
- Weissella koreensis

## Potential Benefits

Research suggests that probiotics may help with:

**Digestive health**: Better nutrient absorption, reduced bloating, more regular bowel movements.

**Immune function**: About 70% of your immune system is in your gut. A healthy microbiome supports immune response.

**Mood and mental health**: The gut-brain connection is real. Some studies link gut health to reduced anxiety and improved mood.

**General inflammation**: Some probiotics may help reduce systemic inflammation.

I should note: the research is ongoing, and results vary. Not everyone experiences dramatic benefits from probiotics. But for many people, regularly eating fermented foods seems to improve how they feel.

## What Affects Probiotic Content

Not all kimchi is created equal when it comes to probiotics:

**Fermentation time**: Younger kimchi has fewer probiotics. The bacterial population grows over the first few weeks.

**Storage temperature**: Probiotics are most active at refrigerator temperatures. Room temperature speeds fermentation but can eventually reduce viable bacteria.

**Pasteurisation**: Heat kills probiotics. Most supermarket kimchi is pasteurised for shelf stability, meaning it has no live cultures. Check labels for "live cultures" or "unpasteurised."

**Homemade vs commercial**: Homemade kimchi typically has more diverse bacterial strains than commercial varieties.

## How Much to Eat

There's no official guideline, but most recommendations suggest starting with a small amount – perhaps a tablespoon or two daily – and increasing gradually. This gives your gut time to adjust.

I eat anywhere from two tablespoons to half a cup daily, depending on what I'm eating. That's probably on the higher end, but my stomach is well-adapted to it by now.

## Starting Slowly

If you're new to fermented foods, go easy at first. Some people experience temporary digestive changes as their microbiome adjusts – mild bloating, gas, or changes in bowel movements. These usually pass within a week or two.

## Beyond Probiotics

While probiotics get the headlines, kimchi also contains:
- Fibre (prebiotic, feeds gut bacteria)
- Vitamins A, C, and K
- B vitamins from fermentation
- Various beneficial plant compounds

It's the whole package – probiotics, prebiotics, nutrients, and flavour – that makes kimchi valuable, not just one component.

## My Perspective

I started eating kimchi for the taste and kept eating it for how it makes me feel. Whether that's the probiotics, the nutrients, or just the pleasure of eating something delicious, I can't say for certain. But I'll keep eating it regardless.`
  },

  'health/kimchi-benefits': {
    meta_description: 'Kimchi offers numerous health benefits from probiotics to vitamins. Here is an honest look at what the science says.',
    content: `# Health Benefits of Kimchi: An Honest Assessment

Kimchi has become something of a superfood darling, with bold claims about its health benefits appearing everywhere. As someone who eats it daily and wants to understand what I'm putting in my body, I've looked into the research. Here's what seems well-supported and what's more speculative.

## The Well-Established Benefits

**Probiotics and Gut Health**
This is the big one, and it's well-documented. Traditionally fermented, unpasteurised kimchi contains billions of beneficial bacteria. Regular consumption appears to support digestive health and may help maintain a healthy gut microbiome.

**Nutrient Density**
Kimchi is genuinely nutritious. The base vegetables (cabbage, radish, etc.) provide fibre, vitamins, and minerals. Fermentation increases B vitamin content and may improve nutrient bioavailability. Plus, it's very low in calories.

**Vitamin Content**
Raw kimchi is particularly high in:
- Vitamin C (though some is lost during fermentation)
- Vitamin K (important for blood clotting and bone health)
- Vitamin A (from the vegetables and chilli)
- Various B vitamins (increased by fermentation)

## The Promising (But Less Certain) Benefits

**Immune Support**
There's reasonable evidence that probiotics support immune function, and some studies specifically on kimchi show promising results. But immune health is complex, and more research is needed.

**Heart Health**
Some studies suggest kimchi consumption is associated with improved cholesterol profiles. The garlic and chilli in kimchi have their own cardiovascular research support. But correlation isn't causation.

**Weight Management**
Kimchi is low-calorie, high-fibre, and may influence metabolism through its effects on gut bacteria. Some studies show associations between fermented food consumption and healthier weight, but it's hard to isolate kimchi's specific contribution.

**Anti-inflammatory Effects**
Fermented foods in general, and some compounds in kimchi specifically, show anti-inflammatory properties in lab studies. Whether this translates to meaningful inflammation reduction in humans is less clear.

## What I'm Sceptical About

**Cancer Prevention**
Some websites claim kimchi prevents cancer. The evidence here is weak and mixed. Some studies show associations with reduced cancer risk; others show potential concerns (particularly around very high salt intake). Don't eat kimchi expecting it to prevent cancer.

**Dramatic Weight Loss**
Kimchi alone won't make you lose weight. It can be part of a healthy diet, but it's not a magic solution.

**Curing Everything**
Any food claimed to cure a long list of ailments should be viewed sceptically. Kimchi is food, not medicine.

## Potential Concerns

**Sodium Content**
Kimchi is salty – typically 300-500mg sodium per serving. If you're watching sodium intake, factor this in.

**Digestive Adjustment**
Some people experience temporary digestive discomfort when first eating fermented foods regularly. Starting with small amounts helps.

**Histamine Sensitivity**
Fermented foods are high in histamines. If you're histamine-sensitive, kimchi might not agree with you.

## My Take

I eat kimchi because I love how it tastes and because I genuinely feel good when I eat it regularly. The science supports that it's a nutritious, probiotic-rich food that can be part of a healthy diet.

But I don't think of it as medicine or expect miracles. It's delicious fermented cabbage that happens to be good for me. That's enough.

The best health benefit of kimchi might be the simplest: it makes vegetables exciting to eat. If kimchi helps you eat more vegetables, that's a win regardless of the probiotic content.`
  },

  'health/kimchi-nutrition': {
    meta_description: 'Kimchi is surprisingly nutritious for something so tasty. Here is the full breakdown of what is in this fermented wonder.',
    content: `# Kimchi Nutrition: What's Actually in It?

For something that tastes so indulgent, kimchi is remarkably nutritious. Let me break down what you're actually getting when you eat this fermented delight.

## Basic Nutritional Profile

A typical serving of napa cabbage kimchi (about 100g) contains approximately:

- **Calories**: 15-20
- **Protein**: 1-2g
- **Carbohydrates**: 2-4g
- **Fibre**: 2g
- **Fat**: Less than 1g
- **Sodium**: 300-500mg

The low calorie count is one of kimchi's appealing features. You can eat quite a lot of it without significantly impacting your daily calorie intake.

## Vitamins

**Vitamin C**: Raw kimchi contains vitamin C from the cabbage and chilli. Some is lost during fermentation, but fresh kimchi is still a decent source.

**Vitamin K**: Important for blood clotting and bone health. Kimchi is a good source, with one serving providing a significant portion of daily needs.

**Vitamin A**: From the vegetables and the gochugaru (chilli flakes). Important for vision, immune function, and skin health.

**B Vitamins**: Fermentation actually increases B vitamin content. You'll find B1, B2, B3, B6, and folate in varying amounts.

## Minerals

**Iron**: Present in modest amounts, important for oxygen transport in blood.

**Calcium**: Cabbage isn't a major calcium source, but every bit helps.

**Potassium**: Good levels in kimchi, important for blood pressure and muscle function.

**Phosphorus**: Contributes to bone health and cellular function.

## The Sodium Question

Let's address the elephant in the room: kimchi is salty. The salting process is essential for fermentation, so there's no getting around it.

A 100g serving contains roughly 300-500mg sodium. That's 13-22% of the recommended daily maximum. If you're eating kimchi daily, this should be factored into your overall sodium intake.

That said, compared to other flavour-packed condiments, kimchi is relatively modest in sodium. And unlike pure salt, it comes packaged with beneficial nutrients and probiotics.

## Probiotics

We've covered this elsewhere, but it bears repeating: properly fermented, unpasteurised kimchi contains billions of beneficial bacteria. These aren't listed on nutrition labels but are arguably kimchi's most valuable component.

## Fibre

At about 2g per 100g serving, kimchi provides a decent amount of fibre. This feeds your gut bacteria (prebiotic effect) and supports digestive health.

## Other Compounds

**Garlic compounds**: Allicin and related compounds from garlic have been studied for antimicrobial and cardiovascular effects.

**Capsaicin**: From the chilli, associated with metabolism boost and pain relief.

**Anthocyanins**: From purple varieties of kimchi vegetables, powerful antioxidants.

**Glucosinolates**: From cabbage family vegetables, studied for potential cancer-protective effects.

## How Fermentation Changes Nutrition

Fermentation does interesting things to nutritional content:

**Increases**: B vitamins, bioavailability of some nutrients, probiotic content
**Decreases**: Some vitamin C, certain antinutrients
**Creates**: Beneficial organic acids, new bioactive compounds

The net effect is generally positive – you're getting a more digestible, nutrient-rich food than raw vegetables alone.

## Practical Takeaways

1. Kimchi is very low calorie for how flavourful it is
2. It's a good source of vitamins K and A
3. Watch the sodium if you're limiting salt intake
4. Look for unpasteurised versions for probiotic benefits
5. The nutrients work together – the whole is greater than the parts

I think of kimchi as a condiment that happens to be genuinely good for you. It adds flavour to meals while contributing meaningful nutrition. That's a rare and valuable combination.`
  }
};

async function main() {
  console.log('Batch 6: Updating more articles in Ollie\'s voice...\n');

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

  console.log('\n✅ Batch 6 complete!');
}

main();
