import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Batch 7: Buy and Culture categories
const articleUpdates: Record<string, { content: string; meta_description: string }> = {
  'buy/best-kimchi-uk': {
    meta_description: 'Looking for the best kimchi in the UK? Here is my honest guide to finding quality kimchi, whether homemade or shop-bought.',
    content: `# Finding the Best Kimchi in the UK

The kimchi scene in the UK has exploded in recent years. Where once you had to make a pilgrimage to a Korean supermarket, now you can find kimchi in most supermarkets. But quality varies enormously. Here's my guide to finding the good stuff.

## What to Look For

**Live cultures**: The word "unpasteurised" or "live cultures" on the label means the beneficial bacteria are still active. Pasteurised kimchi is shelf-stable but lacks probiotics.

**Short ingredient list**: Good kimchi doesn't need dozens of ingredients. Napa cabbage, salt, gochugaru, garlic, ginger, fish sauce or shrimp paste (or a vegan alternative), and maybe some sugar. That's about it.

**Proper fermentation**: Look for kimchi that's been naturally fermented, not just pickled in vinegar. Real fermentation takes time; shortcuts don't produce the same flavour.

**Date made**: Fresher isn't always better with kimchi, but you want to know when it was made so you can gauge its fermentation level.

## Supermarket Options

The major supermarkets now stock kimchi, which is brilliant for accessibility. However, most of what you'll find is pasteurised and fairly mild. It's a gateway to the real thing, but don't judge all kimchi by these versions.

Waitrose, M&S, and some larger Tesco and Sainsbury's stores stock decent options. Check the chilled section rather than ambient shelves – chilled is usually less processed.

## Korean Supermarkets

For authentic varieties, Korean supermarkets are your best bet:
- **H Mart** (London)
- **Korea Foods** (various locations)
- **Seoul Plaza** (London)
- **Wing Yip** (Birmingham, Manchester, London)

Here you'll find a massive range: different vegetables, varying heat levels, regional styles. The staff can often recommend their favourites.

## Small Producers

The UK has a growing number of small-batch kimchi producers making excellent product. Some to look out for:
- Local farmers' market vendors
- Subscription box options
- Direct-to-consumer online brands

These smaller producers often use higher quality ingredients, traditional methods, and offer the kind of complexity that mass-produced kimchi can't match.

## Online Options

Plenty of Korean food websites deliver nationwide:
- Korean grocery stores with delivery
- Specialist fermented food suppliers
- Amazon (though quality varies widely)

Check reviews and look for sellers who ship chilled. Kimchi that's been sitting at room temperature for days in transit won't be at its best.

## Or Make Your Own

I'm biased, obviously, but homemade kimchi beats almost anything you can buy. You control the ingredients, the fermentation level, and the flavour profile. It's fresher, it's exactly how you like it, and it's immensely satisfying.

If you've never made kimchi before, it's easier than you think. Salt some cabbage, make a paste, mix them together, wait a few days. That's the basic process.

## My Honest Advice

Start with something accessible – a decent supermarket brand or an online order. See if you like kimchi at all. Then, as your palate develops, seek out the small producers and traditional varieties. Eventually, try making your own.

The best kimchi is the one you enjoy eating regularly. Don't let perfect be the enemy of good. Even mediocre kimchi is better than no kimchi.`
  },

  'buy/korean-supermarkets': {
    meta_description: 'Korean supermarkets in the UK are treasure troves for fermented foods. Here is what to look for on your first visit.',
    content: `# Korean Supermarkets: A Guide for the Uninitiated

Walking into a Korean supermarket for the first time can be overwhelming. Unfamiliar products, labels you can't read, and so many varieties of things you didn't know existed. But once you know what you're looking for, these shops become invaluable resources.

## What You'll Find

**Kimchi**: Obviously. But not just one type – you'll find dozens. Napa cabbage, radish, cucumber, young radish tops, mustard greens, water kimchi, white kimchi. Different brands, different fermentation stages, different heat levels.

**Gochugaru**: The red chilli flakes essential for kimchi. You'll see different grades – fine or coarse, mild or hot. For kimchi, you generally want the coarser flakes.

**Gochujang**: Fermented chilli paste. Essential for Korean cooking and a brilliant addition to non-Korean dishes too.

**Doenjang**: Fermented soybean paste. Deep, savoury, and transformative in stews.

**Ssamjang**: A dipping sauce combining doenjang and gochujang. Perfect with lettuce wraps.

**Rice**: Short-grain Korean rice, glutinous rice for rice cakes, and more.

**Noodles**: Sweet potato noodles (dangmyeon), ramyun, fresh noodles, dried noodles.

**Vegetables**: Asian vegetables you won't find elsewhere – perilla leaves, Korean radish, different greens.

## Where to Find Them

**London** has the most options:
- H Mart (various locations)
- Korea Foods (New Malden and others)
- Seoul Plaza (Holborn)
- Centre Point Food Store (Tottenham Court Road)

**Manchester** has Wing Yip and some smaller Korean grocers.

**Birmingham** also has Wing Yip plus various Asian supermarkets.

Most major cities have at least one Asian supermarket that stocks Korean products.

## Tips for Your Visit

**Bring a photo of what you need**: If you're looking for something specific, a photo helps. Staff are usually helpful but might not know the English name.

**Check the dates**: Some products have long shelf lives, but check anyway. Fermented products especially – you want to know the production date.

**Explore the frozen section**: Frozen dumplings, rice cakes, and prepared foods. Great for quick meals.

**Ask questions**: Staff in Korean supermarkets are generally knowledgeable and happy to help. Don't be shy.

**Start small**: It's tempting to buy everything, but unfamiliar ingredients can go to waste. Buy small quantities until you know what you like.

## Essential First Purchases

If you're just starting to explore Korean food, here's what I'd recommend:

1. A jar of good kimchi (ask staff for recommendations)
2. Gochugaru (medium coarse, for making your own kimchi)
3. Gochujang (small tub to start)
4. Short-grain rice
5. Toasted sesame oil
6. Soy sauce (Korean brands are less sweet)

With these basics, you can cook a surprising range of Korean dishes and start understanding the flavour profile of the cuisine.

## Beyond Food

Korean supermarkets often stock cookware, tableware, and beauty products too. Those stone bowls for bibimbap, chopsticks, small dishes for banchan – it's all there.

The experience of shopping in a Korean supermarket is part of the joy of cooking Korean food. Take your time, explore, and don't be afraid to try things you don't recognise.`
  },

  'culture/types-of-kimchi': {
    meta_description: 'There are over 200 types of kimchi in Korean cuisine. Here are the most common varieties you should know about.',
    content: `# Types of Kimchi: A Guide to the Varieties

When most people think of kimchi, they picture spicy fermented napa cabbage. But that's just one variety among hundreds. Korean cuisine has developed an extraordinary range of kimchis, using different vegetables, techniques, and flavour profiles.

## The Main Categories

### Baechu-kimchi (Napa Cabbage)
The classic. Whole or quartered napa cabbage, heavily seasoned with gochugaru, garlic, ginger, and fish sauce. This is what most people mean when they say "kimchi." Tangy, spicy, and complex.

### Kkakdugi (Cubed Radish)
Korean radish cut into bite-sized cubes and fermented with similar seasonings. Crunchier than cabbage kimchi, with a sharp, clean flavour. My favourite for soups.

### Oi-sobagi (Stuffed Cucumber)
Small cucumbers, scored and stuffed with seasonings. Lighter and more refreshing than cabbage kimchi. Best eaten young and fresh.

### Chonggak-kimchi (Young Radish)
Whole baby radishes with their tops, fermented in a gochugaru paste. Crunchy with a slight bitterness from the greens.

### Baek-kimchi (White Kimchi)
Made without gochugaru, so it's not spicy at all. Delicate, subtle, and perfect for those who can't handle heat. Often includes pine nuts and jujube.

### Mul-kimchi (Water Kimchi)
A soupy kimchi where the brine is as important as the vegetables. Light, refreshing, and often served as a cold soup in summer.

### Yeolmu-kimchi (Young Radish Greens)
Made from the leafy tops of young radishes. Light, fresh, and particularly good in summer.

### Pa-kimchi (Green Onion)
Whole green onions, fermented to become intensely savoury. A wonderful accompaniment to grilled meats.

### Gat-kimchi (Mustard Leaf)
Mustard greens fermented with a distinct peppery kick. Popular in southern Korea.

### Bossam-kimchi (Wrapped Kimchi)
A special-occasion kimchi where oysters, octopus, chestnuts, and other luxurious ingredients are wrapped in cabbage leaves. Complex and celebratory.

## Seasonal Variations

Traditionally, different kimchis were made seasonally:

**Spring**: Fresh, light kimchis using young vegetables
**Summer**: Water kimchis and cucumber kimchis for cooling
**Autumn**: The big kimjang – making enough baechu-kimchi to last the winter
**Winter**: Eating from the autumn stores; making fresh kimchi with winter radishes

## Regional Styles

Different regions of Korea have their own kimchi traditions:

**Southern regions**: More fish sauce, more salt, bolder flavours
**Northern regions**: Milder, less salt, more subtle
**Coastal areas**: Heavy use of fresh seafood in the paste
**Mountain areas**: More vegetables, less seafood

## Modern Developments

Contemporary Korean cooking continues to develop new kimchi styles:
- Fruit kimchis (apple, pear)
- Fusion vegetables (cabbage meets broccoli)
- Dietary variations (vegan, low-sodium)
- Quick-pickled versions for fast preparation

## How to Start Exploring

If you've only ever tried napa cabbage kimchi, I'd encourage you to branch out:

1. Try kkakdugi for that satisfying crunch
2. Sample white kimchi for the non-spicy side
3. Look for water kimchi in summer
4. Ask at Korean restaurants for their seasonal varieties

Each type of kimchi offers something different. The world of fermented vegetables is vast, and there's always something new to discover.`
  },

  'culture/korean-side-dishes': {
    meta_description: 'Korean meals feature numerous small side dishes called banchan. Here is why they matter and what to expect.',
    content: `# Banchan: The World of Korean Side Dishes

One of the most delightful aspects of Korean dining is the array of small dishes that arrive at the table before your main course. These are banchan – side dishes that transform a simple meal into something communal and varied.

## What Is Banchan?

Banchan (반찬) are small shared dishes served alongside rice and soup. They're not appetisers or starters; they're integral to the meal, eaten throughout with the main dishes. You might get anywhere from three dishes at a casual restaurant to a dozen or more at a traditional Korean feast.

And yes, kimchi is a banchan – often the most important one.

## The Usual Suspects

**Kimchi**: Always present in some form. Napa cabbage is most common, but you might get radish, cucumber, or seasonal varieties.

**Kongnamul (Soybean Sprouts)**: Blanched and seasoned with sesame oil and garlic. Simple but essential.

**Sigeumchi-namul (Spinach)**: Blanched spinach seasoned with sesame, soy, and garlic.

**Japchae (Glass Noodles)**: Sweet potato noodles with vegetables and sometimes meat. Sweet, savoury, and satisfying.

**Gamja-jorim (Braised Potatoes)**: Small potatoes braised in soy sauce until glossy and caramelised.

**Gyeran-jjim (Steamed Egg)**: Savoury steamed egg, like a Korean version of custard. Silky and comforting.

**Myeolchi-bokkeum (Stir-fried Anchovies)**: Tiny dried anchovies, fried until crispy and coated in a sweet-salty glaze.

**Dubu-jorim (Braised Tofu)**: Sliced tofu braised in a savoury soy sauce.

**Pajeon (Green Onion Pancake)**: Crispy, savoury pancakes loaded with spring onions.

## The Banchan Philosophy

Several principles guide banchan:

**Variety**: Different textures, temperatures, flavours. Something pickled, something fresh, something hearty.

**Balance**: The five Korean flavours – sweet, sour, salty, bitter, spicy – all represented across the dishes.

**Colour**: Traditional Korean cuisine emphasises five colours – white, black, red, green, yellow – for visual and nutritional balance.

**Communal eating**: Banchan are shared, creating connection around the table.

## Banchan Etiquette

A few unwritten rules:
- Banchan refills are usually free at restaurants – just ask
- Don't hoard dishes on your own plate; eat from the shared dishes
- Take what you'll eat; don't waste
- Mix and match with your rice and main dishes

## Making Banchan at Home

Here's what I love about banchan: most are simple to make and keep well. A Sunday afternoon preparing a few banchan sets you up for the week.

Start with:
1. A good kimchi (obviously)
2. Blanched and seasoned vegetables (spinach, bean sprouts)
3. A braised dish (potatoes or tofu)
4. Something pickled (pickled radish or cucumbers)

Keep them in small containers in the fridge. At mealtimes, set out three or four with rice and whatever main dish you're making. Suddenly, a simple meal feels like a feast.

## Why Banchan Matter

There's something psychologically satisfying about a table full of small dishes. It feels abundant even when portions are modest. You're not stuck with one flavour; you're exploring many. Each bite can be different.

This is what I love most about Korean food – it's never boring. Banchan ensure that even the simplest meal has variety, interest, and the feeling of generosity that makes food more than just sustenance.`
  },

  'culture/kimchi-day': {
    meta_description: 'Kimchi Day and the tradition of kimjang celebrate Korea\'s most important food. Here is what these traditions mean.',
    content: `# Kimchi Day and the Tradition of Kimjang

Every November 22nd is Kimchi Day in Korea – a celebration of the fermented cabbage that's become synonymous with Korean cuisine. But the real celebration happens during kimjang, when families come together to make enough kimchi to last the winter.

## What Is Kimjang?

Kimjang (김장) is the traditional practice of making large quantities of kimchi in late autumn. Before refrigeration, this was essential – winter vegetables would be scarce, and a family's kimchi supply had to last for months.

Traditionally, extended families and neighbours would gather, often over several days. Some families made hundreds of heads of cabbage. It was hard work, but also celebratory – a ritual marking the transition into winter.

In 2013, UNESCO recognised kimjang as an Intangible Cultural Heritage of Humanity, acknowledging its cultural and social significance.

## How Kimjang Works

**Preparation (1-2 days before)**
- Salt the cabbage – this takes 6-8 hours
- Prepare the seasonings and paste
- Organise ingredients and containers

**Making Day**
- Rinse and drain the salted cabbage
- Mix the seasoning paste
- Apply paste to each cabbage leaf
- Pack into containers

**Storage**
Traditionally, filled jars were buried in the ground, where temperatures stay relatively constant. Modern Koreans use kimchi refrigerators – special fridges designed to maintain optimal fermentation temperatures.

## The Social Aspect

Kimjang is rarely a solo activity. Family members across generations work together. Grandmothers share techniques with younger family members. Neighbours help each other and exchange different varieties.

There's a rhythm to it – the experienced hands working quickly, the children learning by watching and helping. It's how traditional food knowledge passes between generations.

## Kimchi Day

November 22nd became official Kimchi Day in South Korea in 2020, chosen because the Korean word for kimchi contains 22 consonant-vowel pairs and November is peak kimjang season.

The day promotes kimchi awareness, celebrates Korean food culture, and encourages people to make their own kimchi or buy from local producers.

## Modern Kimjang

Fewer families make kimchi in the huge quantities their grandparents did. Modern apartments don't have gardens for burying jars. Many people buy kimchi rather than make it. But kimjang hasn't disappeared – it's adapted.

Some families still gather annually, making smaller batches together. Community centres and temples host group kimjang events. Companies sell kimjang "kits" with pre-prepared ingredients.

And there's a growing interest among younger Koreans (and non-Koreans) in learning these traditional skills. Kimjang workshops are popular, teaching not just technique but the cultural context.

## What Kimjang Teaches Us

Beyond the practical aspects, kimjang embodies values worth preserving:
- **Patience**: Good kimchi can't be rushed
- **Community**: Working together builds bonds
- **Preparation**: Planning for the seasons ahead
- **Tradition**: Connecting to generations past
- **Generosity**: Sharing with neighbours and those in need

## Experiencing Kimjang

If you ever have the opportunity to participate in kimjang – whether in Korea or at a local event – take it. The experience of making kimchi communally, of being part of a tradition thousands of years old, of going home with jars of kimchi you made with your own hands... it's special.

Even on a small scale, the spirit of kimjang can inform our cooking: gathering friends to make food together, preparing for the seasons, preserving traditions while making them our own.`
  },

  'guides/what-is-kimchi': {
    meta_description: 'New to kimchi? Here is everything you need to know about Korea\'s most famous fermented food.',
    content: `# What Is Kimchi? A Complete Introduction

If you've landed on this page, you're probably curious about kimchi but not entirely sure what it is. Welcome. Let me introduce you to one of the world's great fermented foods.

## The Short Answer

Kimchi is fermented vegetables. Most commonly, it's napa cabbage seasoned with chilli, garlic, ginger, and fish sauce, then left to ferment for anywhere from a few days to several months. The result is tangy, spicy, crunchy, and deeply savoury.

## The Longer Answer

Kimchi is much more than a simple definition can capture. It's:
- A staple food eaten daily by most Koreans
- A side dish present at virtually every Korean meal
- A cooking ingredient used in countless recipes
- A cultural touchstone with thousands of years of history
- A probiotic-rich health food
- An endlessly variable category with hundreds of varieties

## What Does It Taste Like?

Your first bite of kimchi might be surprising. It's complex – sour, spicy, garlicky, umami-rich, and slightly funky. The fermentation gives it a tangy depth that fresh vegetables don't have.

The spice level varies. Traditional Korean kimchi is fairly hot, but milder versions exist. The crunch of the vegetables provides textural contrast to the intense flavours.

Some people love it immediately. Others need a few tries to appreciate it. Both responses are normal. Fermented foods can be an acquired taste.

## How Is It Made?

The basic process:

1. **Salt the vegetables**: Cabbage quarters are salted for several hours, drawing out moisture
2. **Make the paste**: Gochugaru (Korean chilli flakes), garlic, ginger, fish sauce, and sometimes other ingredients are blended into a paste
3. **Combine**: The paste is worked into the salted cabbage, between each leaf
4. **Ferment**: The kimchi is packed into jars and left to ferment – initially at room temperature, then refrigerated

Fermentation is where the magic happens. Beneficial bacteria (mainly Lactobacillus) consume the sugars and produce lactic acid, which preserves the vegetables and creates the characteristic tangy flavour.

## Why Is It Healthy?

Several reasons:
- **Probiotics**: The fermentation creates beneficial bacteria good for gut health
- **Low calorie**: Vegetables remain low calorie while gaining flavour
- **Nutrient-rich**: Vitamins, minerals, and fibre from the vegetables
- **Bioactive compounds**: Garlic, ginger, and chilli all have studied health benefits

## How Do You Eat It?

Kimchi is versatile:
- **As a side dish**: A few pieces alongside rice and other dishes
- **In fried rice**: Chopped and stir-fried with rice, egg, and whatever else you like
- **In soups and stews**: Kimchi jjigae (kimchi stew) is a Korean comfort classic
- **On sandwiches**: Grilled cheese, burgers, hot dogs – all improved by kimchi
- **With eggs**: Fried, scrambled, or in an omelette
- **Straight from the jar**: No judgement here

## Where Can You Buy It?

- Asian supermarkets (widest selection)
- Most major UK supermarkets (limited but improving options)
- Online Korean food retailers
- Farmers' markets (often excellent small-batch producers)

Look for unpasteurised or "live culture" versions for the full probiotic benefits.

## Should You Make Your Own?

Eventually, yes. Homemade kimchi is fresher, exactly to your taste, and immensely satisfying to make. But there's no shame in buying good kimchi while you're learning.

## Getting Started

If you're new to kimchi, I'd suggest:
1. Buy a small jar from a supermarket
2. Try it as a side dish with rice
3. If you like it, explore Korean supermarket options
4. Eventually, try making your own

Kimchi rewards curiosity. The more you explore, the more you discover. Welcome to a wonderful world of fermented flavours.`
  }
};

async function main() {
  console.log('Batch 7: Updating buy and culture articles...\n');

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

  console.log('\n✅ Batch 7 complete!');
}

main();
