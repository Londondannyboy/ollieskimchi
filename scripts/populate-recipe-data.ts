import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

interface RecipeData {
  title: string
  description: string
  prepTime?: string
  cookTime?: string
  totalTime?: string
  servings?: string
  difficulty?: 'Easy' | 'Medium' | 'Advanced'
  ingredients: {
    section?: string
    items: {
      item: string
      amount?: string
      note?: string
    }[]
  }[]
  method: {
    step: number
    instruction: string
    tip?: string
  }[]
  chefNotes?: string[]
  tags?: string[]
}

const recipeData: Record<string, RecipeData> = {
  'recipes/traditional-kimchi-recipe': {
    title: 'Traditional Napa Cabbage Kimchi',
    description: 'The classic Korean kimchi recipe, made with napa cabbage, gochugaru, and a flavourful paste. This is the foundation of Korean fermentation.',
    prepTime: '45 mins',
    cookTime: '0 mins',
    totalTime: '3-5 days (fermentation)',
    servings: 'Makes 1 large jar (about 1kg)',
    difficulty: 'Medium',
    ingredients: [
      {
        section: 'For the Cabbage',
        items: [
          { item: 'napa cabbage', amount: '1 large', note: 'about 1.5kg' },
          { item: 'coarse sea salt', amount: '100g' },
        ]
      },
      {
        section: 'For the Paste',
        items: [
          { item: 'gochugaru (Korean chilli flakes)', amount: '5 tbsp' },
          { item: 'fish sauce', amount: '3 tbsp' },
          { item: 'garlic cloves', amount: '6', note: 'minced' },
          { item: 'fresh ginger', amount: '2.5cm piece', note: 'grated' },
          { item: 'sugar', amount: '1 tbsp' },
          { item: 'spring onions', amount: '4', note: 'sliced' },
          { item: 'Korean radish or daikon', amount: '150g', note: 'julienned' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Quarter the cabbage lengthwise, keeping the core intact. Rinse under cold water.' },
      { step: 2, instruction: 'Sprinkle salt between all the leaves, using more on the thicker white parts. Let sit for 2 hours, turning halfway.', tip: 'The cabbage should be flexible enough to bend without snapping when ready.' },
      { step: 3, instruction: 'Rinse the cabbage thoroughly 3 times under cold water to remove excess salt. Squeeze out as much water as possible.' },
      { step: 4, instruction: 'Mix all paste ingredients in a bowl until well combined. Taste and adjust seasoning.' },
      { step: 5, instruction: 'Wearing gloves, work the paste between every leaf of the cabbage, ensuring even coverage.' },
      { step: 6, instruction: 'Roll each quarter from the top and pack tightly into a clean jar or container, pressing down to remove air pockets.' },
      { step: 7, instruction: 'Leave at room temperature for 1-2 days until bubbles appear, then refrigerate.', tip: 'Burp the jar daily to release built-up gas during initial fermentation.' },
    ],
    chefNotes: [
      'Use Korean coarse sea salt if possible – it dissolves more evenly.',
      'The older your kimchi gets, the sourer and softer it becomes. Both fresh and aged kimchi have their uses.',
      'Store in the fridge for up to 3 months. The flavour develops over time.',
    ],
    tags: ['Traditional', 'Fermented', 'Probiotic', 'Gluten-Free', 'Dairy-Free']
  },

  'recipes/how-to-make-kimchi': {
    title: 'Easy Homemade Kimchi',
    description: 'A straightforward guide to making your first batch of kimchi at home. No special equipment needed.',
    prepTime: '30 mins',
    cookTime: '0 mins',
    totalTime: '2-4 days (fermentation)',
    servings: 'Makes 500g',
    difficulty: 'Easy',
    ingredients: [
      {
        items: [
          { item: 'napa cabbage', amount: '500g', note: 'roughly chopped' },
          { item: 'sea salt', amount: '2 tbsp' },
          { item: 'gochugaru', amount: '2 tbsp' },
          { item: 'fish sauce', amount: '1 tbsp' },
          { item: 'garlic cloves', amount: '3', note: 'minced' },
          { item: 'fresh ginger', amount: '1 tsp', note: 'grated' },
          { item: 'sugar', amount: '1 tsp' },
          { item: 'spring onions', amount: '2', note: 'sliced' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Toss the chopped cabbage with salt in a large bowl. Let sit for 1-2 hours until wilted.' },
      { step: 2, instruction: 'Rinse the cabbage well and squeeze out excess water.' },
      { step: 3, instruction: 'Mix gochugaru, fish sauce, garlic, ginger, and sugar to make a paste.' },
      { step: 4, instruction: 'Combine the cabbage, paste, and spring onions. Mix thoroughly with gloved hands.' },
      { step: 5, instruction: 'Pack into a clean jar, pressing down firmly. Leave 2.5cm headspace.' },
      { step: 6, instruction: 'Ferment at room temperature for 2-4 days, then refrigerate.' },
    ],
    chefNotes: [
      'Taste daily during fermentation – refrigerate when it reaches your preferred sourness.',
      'This smaller batch is perfect for beginners before committing to larger quantities.',
    ],
    tags: ['Beginner-Friendly', 'Quick', 'Fermented']
  },

  'recipes/vegan-kimchi': {
    title: 'Vegan Kimchi',
    description: 'All the flavour of traditional kimchi without any fish products. Uses miso and soy sauce for that essential umami depth.',
    prepTime: '35 mins',
    cookTime: '0 mins',
    totalTime: '3-5 days (fermentation)',
    servings: 'Makes 750g',
    difficulty: 'Easy',
    ingredients: [
      {
        items: [
          { item: 'napa cabbage', amount: '750g' },
          { item: 'coarse sea salt', amount: '3 tbsp' },
          { item: 'gochugaru', amount: '4 tbsp' },
          { item: 'white miso paste', amount: '2 tbsp' },
          { item: 'soy sauce', amount: '2 tbsp' },
          { item: 'garlic cloves', amount: '4', note: 'minced' },
          { item: 'fresh ginger', amount: '2 tsp', note: 'grated' },
          { item: 'maple syrup or sugar', amount: '1 tbsp' },
          { item: 'spring onions', amount: '3', note: 'sliced' },
          { item: 'Korean radish', amount: '100g', note: 'julienned, optional' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Quarter the cabbage and salt between all leaves. Rest for 2 hours, turning once.' },
      { step: 2, instruction: 'Rinse thoroughly and squeeze out excess water.' },
      { step: 3, instruction: 'Blend or whisk together miso, soy sauce, gochugaru, garlic, ginger, and maple syrup.' },
      { step: 4, instruction: 'Add spring onions and radish to the paste.' },
      { step: 5, instruction: 'Work the paste into every leaf of the cabbage.' },
      { step: 6, instruction: 'Pack into jars, ferment at room temperature for 2-3 days, then refrigerate.' },
    ],
    chefNotes: [
      'Miso provides the fermented depth that fish sauce normally brings.',
      'Add a strip of kombu (kelp) to the jar for extra umami.',
      'Some Korean brands of gochugaru may contain traces of seafood – check labels if strictly vegan.',
    ],
    tags: ['Vegan', 'Plant-Based', 'Fermented', 'Dairy-Free']
  },

  'recipes/quick-kimchi': {
    title: 'Quick Kimchi (Fresh Kimchi)',
    description: 'Ready to eat in under an hour – no fermentation required. Bright, crunchy, and perfect when you need kimchi fast.',
    prepTime: '20 mins',
    cookTime: '0 mins',
    totalTime: '30-60 mins',
    servings: 'Serves 4',
    difficulty: 'Easy',
    ingredients: [
      {
        items: [
          { item: 'napa cabbage', amount: '300g', note: 'chopped' },
          { item: 'salt', amount: '1 tbsp' },
          { item: 'gochugaru', amount: '1.5 tbsp' },
          { item: 'rice vinegar', amount: '1 tbsp' },
          { item: 'fish sauce or soy sauce', amount: '1 tbsp' },
          { item: 'garlic clove', amount: '1', note: 'minced' },
          { item: 'sugar', amount: '1 tsp' },
          { item: 'sesame oil', amount: '1 tsp' },
          { item: 'spring onion', amount: '1', note: 'sliced' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Toss cabbage with salt and let sit for 20-30 minutes.' },
      { step: 2, instruction: 'Rinse briefly and squeeze out excess water.' },
      { step: 3, instruction: 'Mix all other ingredients to make a dressing.' },
      { step: 4, instruction: 'Toss the cabbage with the dressing and spring onion.' },
      { step: 5, instruction: 'Serve immediately or refrigerate. Best eaten within 3 days.' },
    ],
    chefNotes: [
      'This is technically a salad, not fermented kimchi – but it satisfies the craving.',
      'Great for when you run out of proper kimchi or need it at short notice.',
    ],
    tags: ['Quick', 'Fresh', 'No Fermentation', 'Beginner-Friendly']
  },

  'recipes/kimchi-fried-rice': {
    title: 'Kimchi Fried Rice (Kimchi Bokkeumbap)',
    description: 'The ultimate use for well-fermented kimchi. A quick, satisfying meal that transforms leftover rice into something special.',
    prepTime: '5 mins',
    cookTime: '10 mins',
    totalTime: '15 mins',
    servings: 'Serves 2',
    difficulty: 'Easy',
    ingredients: [
      {
        items: [
          { item: 'cooked rice', amount: '400g', note: 'day-old is best' },
          { item: 'well-fermented kimchi', amount: '150g', note: 'chopped' },
          { item: 'kimchi juice', amount: '2 tbsp' },
          { item: 'vegetable oil', amount: '2 tbsp' },
          { item: 'eggs', amount: '2' },
          { item: 'soy sauce', amount: '1 tbsp' },
          { item: 'sesame oil', amount: '1 tsp' },
          { item: 'spring onions', amount: '2', note: 'sliced' },
          { item: 'sesame seeds', amount: 'for garnish' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Heat oil in a large pan or wok over high heat.' },
      { step: 2, instruction: 'Add kimchi and stir-fry for 2-3 minutes until slightly caramelised.' },
      { step: 3, instruction: 'Add rice, breaking up any clumps. Stir-fry for 3-4 minutes.' },
      { step: 4, instruction: 'Add kimchi juice and soy sauce. Toss to combine.' },
      { step: 5, instruction: 'Push rice to the side, crack in eggs, scramble, then mix through.' },
      { step: 6, instruction: 'Finish with sesame oil, top with spring onions and sesame seeds.' },
    ],
    chefNotes: [
      'Day-old refrigerated rice works best – fresh rice can become mushy.',
      'Add diced bacon, spam, or tofu for extra protein.',
      'Top with an extra fried egg for the classic presentation.',
    ],
    tags: ['Quick', 'Comfort Food', 'Weeknight Dinner', 'Leftover Rice']
  },

  'recipes/kimchi-jjigae': {
    title: 'Kimchi Jjigae (Kimchi Stew)',
    description: 'Korea\'s ultimate comfort stew. The older and sourer the kimchi, the better this gets.',
    prepTime: '10 mins',
    cookTime: '25 mins',
    totalTime: '35 mins',
    servings: 'Serves 2-3',
    difficulty: 'Easy',
    ingredients: [
      {
        items: [
          { item: 'well-fermented kimchi', amount: '250g', note: 'the sourer the better' },
          { item: 'kimchi brine', amount: '50ml' },
          { item: 'pork belly', amount: '150g', note: 'sliced, or use tofu for vegetarian' },
          { item: 'firm tofu', amount: '200g', note: 'cubed' },
          { item: 'onion', amount: '1 small', note: 'sliced' },
          { item: 'garlic cloves', amount: '2', note: 'minced' },
          { item: 'gochugaru', amount: '1 tbsp' },
          { item: 'water or anchovy stock', amount: '400ml' },
          { item: 'spring onions', amount: '2', note: 'sliced' },
          { item: 'sesame oil', amount: '1 tsp' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Sauté pork belly in a pot until fat renders, about 3 minutes.' },
      { step: 2, instruction: 'Add kimchi and onion, cook for 3-4 minutes until slightly softened.' },
      { step: 3, instruction: 'Add garlic and gochugaru, stir for 30 seconds.' },
      { step: 4, instruction: 'Pour in water and kimchi brine. Bring to a boil.' },
      { step: 5, instruction: 'Reduce heat and simmer for 15-20 minutes.' },
      { step: 6, instruction: 'Add tofu cubes, simmer 5 more minutes.' },
      { step: 7, instruction: 'Finish with spring onions and sesame oil. Serve bubbling hot with rice.' },
    ],
    chefNotes: [
      'This stew is best made with kimchi that\'s at least 2-3 weeks old.',
      'Traditional Korean households use a special pot (ttukbaegi) that keeps it bubbling at the table.',
      'Add a can of tuna for a quick protein boost – it\'s a popular variation.',
    ],
    tags: ['Comfort Food', 'Stew', 'Winter Warmer', 'Traditional']
  },

  'recipes/kimchi-pancakes': {
    title: 'Kimchi Pancakes (Kimchijeon)',
    description: 'Crispy, savoury pancakes loaded with kimchi. Perfect as a snack or starter.',
    prepTime: '10 mins',
    cookTime: '10 mins',
    totalTime: '20 mins',
    servings: 'Makes 2 large pancakes',
    difficulty: 'Easy',
    ingredients: [
      {
        items: [
          { item: 'well-fermented kimchi', amount: '150g', note: 'chopped' },
          { item: 'plain flour', amount: '100g' },
          { item: 'rice flour', amount: '2 tbsp', note: 'for extra crispness' },
          { item: 'cold water', amount: '150ml' },
          { item: 'egg', amount: '1' },
          { item: 'kimchi brine', amount: '2 tbsp' },
          { item: 'spring onions', amount: '2', note: 'sliced' },
          { item: 'vegetable oil', amount: 'for frying' },
        ]
      },
      {
        section: 'Dipping Sauce',
        items: [
          { item: 'soy sauce', amount: '3 tbsp' },
          { item: 'rice vinegar', amount: '1 tbsp' },
          { item: 'sesame oil', amount: '1 tsp' },
          { item: 'sesame seeds', amount: '1 tsp' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Mix flours in a bowl. Add egg, water, and kimchi brine. Whisk until smooth.' },
      { step: 2, instruction: 'Fold in chopped kimchi and spring onions.' },
      { step: 3, instruction: 'Heat oil in a non-stick pan over medium-high heat.' },
      { step: 4, instruction: 'Pour half the batter, spread thin. Cook until golden underneath, 3-4 minutes.' },
      { step: 5, instruction: 'Flip carefully and cook the other side until crispy.' },
      { step: 6, instruction: 'Cut into wedges and serve with dipping sauce.' },
    ],
    chefNotes: [
      'The batter should be thin – thick batter makes doughy pancakes.',
      'Use cold water for crispier results.',
      'Add chopped prawns or squid for a seafood version.',
    ],
    tags: ['Snack', 'Starter', 'Crispy', 'Quick']
  },

  'recipes/cucumber-kimchi': {
    title: 'Cucumber Kimchi (Oi-sobagi)',
    description: 'Refreshing stuffed cucumber kimchi – perfect for summer. Light, crunchy, and quick to ferment.',
    prepTime: '30 mins',
    cookTime: '0 mins',
    totalTime: '1-2 days (fermentation)',
    servings: 'Makes 500g',
    difficulty: 'Medium',
    ingredients: [
      {
        items: [
          { item: 'small cucumbers', amount: '500g', note: 'about 6-8' },
          { item: 'salt', amount: '2 tbsp' },
          { item: 'garlic chives or spring onions', amount: '50g', note: 'finely chopped' },
          { item: 'gochugaru', amount: '2 tbsp' },
          { item: 'fish sauce', amount: '1 tbsp' },
          { item: 'garlic cloves', amount: '2', note: 'minced' },
          { item: 'fresh ginger', amount: '1 tsp', note: 'grated' },
          { item: 'sugar', amount: '1 tsp' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Cut cucumbers into 5cm pieces. Score each piece with a cross, cutting 2/3 through.' },
      { step: 2, instruction: 'Rub salt into the cuts, let sit for 30 minutes. Rinse and squeeze dry.' },
      { step: 3, instruction: 'Mix chives, gochugaru, fish sauce, garlic, ginger, and sugar.' },
      { step: 4, instruction: 'Stuff the paste into the cucumber cuts.' },
      { step: 5, instruction: 'Pack into a jar, pressing down. Add any remaining paste on top.' },
      { step: 6, instruction: 'Ferment at room temperature for 1 day, then refrigerate. Best within 1-2 weeks.' },
    ],
    chefNotes: [
      'Use small, firm cucumbers – not the large watery kind.',
      'Cucumber kimchi doesn\'t keep as long as cabbage kimchi – eat it relatively fresh.',
      'The fermentation is much faster than cabbage kimchi.',
    ],
    tags: ['Summer', 'Refreshing', 'Quick Ferment', 'Light']
  },

  'recipes/radish-kimchi': {
    title: 'Cubed Radish Kimchi (Kkakdugi)',
    description: 'Crunchy cubes of Korean radish in a spicy, garlicky sauce. The perfect accompaniment to soups and stews.',
    prepTime: '30 mins',
    cookTime: '0 mins',
    totalTime: '2-4 days (fermentation)',
    servings: 'Makes 750g',
    difficulty: 'Easy',
    ingredients: [
      {
        items: [
          { item: 'Korean radish (mu)', amount: '750g', note: 'or daikon' },
          { item: 'coarse sea salt', amount: '2 tbsp' },
          { item: 'sugar', amount: '1 tbsp' },
          { item: 'gochugaru', amount: '3 tbsp' },
          { item: 'fish sauce', amount: '2 tbsp' },
          { item: 'garlic cloves', amount: '4', note: 'minced' },
          { item: 'fresh ginger', amount: '1 tbsp', note: 'grated' },
          { item: 'spring onions', amount: '3', note: 'sliced' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Peel the radish and cut into 2cm cubes.' },
      { step: 2, instruction: 'Toss with salt and sugar, let sit for 30 minutes.' },
      { step: 3, instruction: 'Mix gochugaru, fish sauce, garlic, and ginger to make a paste.' },
      { step: 4, instruction: 'Add the paste and spring onions to the radish. Mix well with gloved hands.' },
      { step: 5, instruction: 'Pack into a jar, pressing down firmly.' },
      { step: 6, instruction: 'Ferment at room temperature for 1-2 days, then refrigerate.' },
    ],
    chefNotes: [
      'Korean radish (mu) is denser and sweeter than daikon, but daikon works well too.',
      'Kkakdugi is traditionally served with Korean soups, especially beef bone soup.',
      'The crunch holds up well even after weeks of fermentation.',
    ],
    tags: ['Crunchy', 'Traditional', 'Side Dish', 'Fermented']
  },

  'recipes/white-kimchi': {
    title: 'White Kimchi (Baek-kimchi)',
    description: 'A mild, delicate kimchi made without chilli. Perfect for those who prefer less heat.',
    prepTime: '40 mins',
    cookTime: '0 mins',
    totalTime: '3-5 days (fermentation)',
    servings: 'Makes 1kg',
    difficulty: 'Medium',
    ingredients: [
      {
        items: [
          { item: 'napa cabbage', amount: '1 large' },
          { item: 'coarse sea salt', amount: '100g' },
          { item: 'Korean radish', amount: '100g', note: 'julienned' },
          { item: 'garlic cloves', amount: '4', note: 'sliced thin' },
          { item: 'fresh ginger', amount: '2 tsp', note: 'julienned' },
          { item: 'spring onions', amount: '3', note: 'sliced' },
          { item: 'Asian pear or apple', amount: '½', note: 'julienned, optional' },
          { item: 'pine nuts', amount: '2 tbsp', note: 'optional' },
          { item: 'salt', amount: '1 tsp', note: 'for seasoning' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Quarter and salt the cabbage as for regular kimchi. Rest 2 hours, rinse well.' },
      { step: 2, instruction: 'Mix radish, garlic, ginger, spring onions, and optional pear.' },
      { step: 3, instruction: 'Season the vegetable mixture with salt.' },
      { step: 4, instruction: 'Distribute the filling between the cabbage leaves.' },
      { step: 5, instruction: 'Roll and pack into a container. Add enough water to cover.' },
      { step: 6, instruction: 'Ferment at room temperature for 2-3 days, then refrigerate.' },
    ],
    chefNotes: [
      'White kimchi is traditionally served at celebrations and to guests who can\'t eat spicy food.',
      'The brine is refreshing and can be drunk as a digestive.',
      'Pine nuts and jujube dates are added for special occasions.',
    ],
    tags: ['Mild', 'No Spice', 'Delicate', 'Traditional']
  },

  'recipes/kimchi-dumplings': {
    title: 'Kimchi Dumplings (Kimchi Mandu)',
    description: 'Savoury dumplings filled with kimchi and pork. Pan-fried, steamed, or boiled – they\'re always delicious.',
    prepTime: '45 mins',
    cookTime: '15 mins',
    totalTime: '1 hour',
    servings: 'Makes about 30 dumplings',
    difficulty: 'Medium',
    ingredients: [
      {
        section: 'Filling',
        items: [
          { item: 'well-drained kimchi', amount: '200g', note: 'finely chopped' },
          { item: 'pork mince', amount: '200g' },
          { item: 'firm tofu', amount: '100g', note: 'pressed and crumbled' },
          { item: 'spring onions', amount: '2', note: 'finely sliced' },
          { item: 'garlic cloves', amount: '2', note: 'minced' },
          { item: 'sesame oil', amount: '1 tbsp' },
          { item: 'soy sauce', amount: '1 tbsp' },
          { item: 'salt and white pepper', amount: 'to taste' },
        ]
      },
      {
        section: 'To Assemble',
        items: [
          { item: 'dumpling wrappers', amount: '1 pack', note: 'round' },
          { item: 'water', amount: 'for sealing' },
          { item: 'vegetable oil', amount: 'for pan-frying' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Squeeze kimchi in a clean towel to remove excess liquid. Chop finely.' },
      { step: 2, instruction: 'Mix all filling ingredients thoroughly. Season to taste.' },
      { step: 3, instruction: 'Place a heaped teaspoon of filling in the centre of each wrapper.' },
      { step: 4, instruction: 'Wet the edges with water, fold in half, and pleat to seal.' },
      { step: 5, instruction: 'For pan-fried: Cook in oiled pan until golden, add 50ml water, cover and steam 5 minutes.' },
      { step: 6, instruction: 'For boiled: Drop into simmering broth and cook 6-7 minutes until they float.' },
    ],
    chefNotes: [
      'Draining the kimchi well is essential – wet filling makes soggy dumplings.',
      'These freeze brilliantly. Freeze on a tray before bagging.',
      'The dipping sauce from kimchi pancakes works perfectly here too.',
    ],
    tags: ['Comfort Food', 'Freezer-Friendly', 'Pan-Fried', 'Steamed']
  },

  'recipes/kimchi-burger': {
    title: 'The Kimchi Burger',
    description: 'The ultimate fusion burger – juicy beef patty topped with tangy kimchi and gochujang mayo.',
    prepTime: '15 mins',
    cookTime: '10 mins',
    totalTime: '25 mins',
    servings: 'Serves 2',
    difficulty: 'Easy',
    ingredients: [
      {
        items: [
          { item: 'beef mince (20% fat)', amount: '300g' },
          { item: 'salt and pepper', amount: 'to season' },
          { item: 'well-drained kimchi', amount: '100g', note: 'roughly chopped' },
          { item: 'cheese slices', amount: '2', note: 'cheddar or American' },
          { item: 'burger buns', amount: '2', note: 'toasted' },
          { item: 'mayonnaise', amount: '3 tbsp' },
          { item: 'gochujang', amount: '1 tbsp' },
          { item: 'lime juice', amount: '1 tsp' },
          { item: 'lettuce leaves', amount: '2' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Mix mayo, gochujang, and lime juice for the sauce. Set aside.' },
      { step: 2, instruction: 'Shape mince into 2 patties, slightly larger than buns. Season generously.' },
      { step: 3, instruction: 'Cook patties over high heat, 3-4 minutes per side for medium.' },
      { step: 4, instruction: 'Add cheese in the last minute, cover to melt.' },
      { step: 5, instruction: 'Toast the buns and spread sauce on both halves.' },
      { step: 6, instruction: 'Assemble: bottom bun, lettuce, patty with cheese, kimchi, top bun.' },
    ],
    chefNotes: [
      'Drain the kimchi well to prevent soggy buns.',
      'Don\'t overwork the meat – keep patties loose for juicier burgers.',
      'Sweet potato fries are the perfect accompaniment.',
    ],
    tags: ['Fusion', 'Grilled', 'Comfort Food', 'Quick']
  },

  'recipes/kimchi-ramen': {
    title: 'Kimchi Ramen',
    description: 'A steaming bowl of noodles in spicy kimchi broth, topped with a perfect soft-boiled egg.',
    prepTime: '10 mins',
    cookTime: '20 mins',
    totalTime: '30 mins',
    servings: 'Serves 2',
    difficulty: 'Easy',
    ingredients: [
      {
        items: [
          { item: 'chicken or pork stock', amount: '800ml' },
          { item: 'well-fermented kimchi', amount: '150g', note: 'chopped' },
          { item: 'kimchi brine', amount: '3 tbsp' },
          { item: 'gochujang', amount: '1.5 tbsp' },
          { item: 'soy sauce', amount: '1 tbsp' },
          { item: 'mirin', amount: '1 tbsp' },
          { item: 'fresh ramen noodles', amount: '2 portions' },
          { item: 'eggs', amount: '2', note: 'for soft-boiling' },
          { item: 'spring onions', amount: '2', note: 'sliced' },
          { item: 'sesame seeds', amount: 'for garnish' },
          { item: 'sesame oil', amount: '1 tsp' },
        ]
      }
    ],
    method: [
      { step: 1, instruction: 'Soft-boil eggs: 6.5 minutes in boiling water, then ice bath. Peel when cool.' },
      { step: 2, instruction: 'Bring stock to a simmer. Add gochujang, soy sauce, and mirin. Stir to dissolve.' },
      { step: 3, instruction: 'Add kimchi and simmer for 10 minutes to develop flavour.' },
      { step: 4, instruction: 'Cook noodles separately according to package instructions. Drain.' },
      { step: 5, instruction: 'Add kimchi brine to broth, taste and adjust seasoning.' },
      { step: 6, instruction: 'Divide noodles between bowls, ladle over hot broth and kimchi.' },
      { step: 7, instruction: 'Top with halved eggs, spring onions, sesame seeds, and a drizzle of sesame oil.' },
    ],
    chefNotes: [
      'The jammy egg is essential – 6.5 minutes is the magic number.',
      'Use the oldest, sourest kimchi you have for the best flavour.',
      'Add sliced pork belly or fried tofu for extra protein.',
    ],
    tags: ['Comfort Food', 'Noodles', 'Winter Warmer', 'Soup']
  },
};

async function main() {
  console.log('Populating recipe data for recipe articles...\n');

  for (const [slug, data] of Object.entries(recipeData)) {
    console.log(`Updating: ${slug}`);
    try {
      await sql`
        UPDATE seo_articles
        SET recipe_data = ${JSON.stringify(data)}::jsonb
        WHERE slug = ${slug}
      `;
      console.log(`  ✓ Added recipe data`);
    } catch (error) {
      console.error(`  ✗ Error updating ${slug}:`, error);
    }
  }

  console.log('\n✅ Recipe data populated!');
}

main();
