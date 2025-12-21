/**
 * Insert Phase 5 Commercial & Culture Articles
 */
import { neon } from '@neondatabase/serverless'
const DATABASE_URL = process.env.DATABASE_URL
if (!DATABASE_URL) { console.error('DATABASE_URL not set'); process.exit(1) }
const sql = neon(DATABASE_URL)

const articles = [
  // Commercial Articles
  {
    article_id: 'C-002',
    title: 'Kimchi Near Me UK: How to Find Fresh Kimchi in Your Area',
    slug: 'buy/kimchi-near-me',
    meta_title: 'Kimchi Near Me UK | Find Fresh Kimchi Locally',
    meta_description: 'Looking for kimchi near you in the UK? Find Korean supermarkets, Asian shops, and stockists selling fresh, authentic kimchi in your area.',
    primary_keyword: 'kimchi near me',
    secondary_keywords: ['where to buy kimchi uk', 'korean shop near me', 'asian supermarket kimchi'],
    search_volume: 1300, cluster: 'commercial', phase: 5,
    internal_links: ['kimchi', 'best-kimchi-uk', 'korean-supermarkets'],
    content: `<p>Looking for <a href="/kimchi/">kimchi</a> near you? Here's how to find fresh, authentic kimchi in the UK.</p>

<h2 id="supermarkets">UK Supermarkets</h2>
<p>Most major supermarkets now stock kimchi:</p>
<ul>
<li><strong>Tesco:</strong> World foods aisle</li>
<li><strong>Sainsbury's:</strong> Asian foods section</li>
<li><strong>Waitrose:</strong> Often better quality options</li>
<li><strong>M&S:</strong> Seasonal availability</li>
<li><strong>Asda:</strong> Budget options</li>
</ul>

<h2 id="korean-shops">Korean & Asian Supermarkets</h2>
<p>For the best selection, visit <a href="/buy/korean-supermarkets/">Korean supermarkets</a>:</p>

<h3>London</h3>
<ul>
<li><strong>H Mart</strong> - New Malden (excellent fresh kimchi)</li>
<li><strong>Oseyo</strong> - Multiple locations (Soho, Stratford, etc.)</li>
<li><strong>Korea Foods</strong> - New Malden</li>
<li><strong>SeeWoo</strong> - Greenwich, Chinatown</li>
</ul>

<h3>Outside London</h3>
<ul>
<li><strong>Wing Yip</strong> - Birmingham, Manchester, Croydon</li>
<li><strong>Hang Sing Hong</strong> - Bristol</li>
<li><strong>Woo Sang</strong> - Liverpool</li>
<li><strong>See Woo</strong> - Glasgow</li>
</ul>

<h2 id="online">Order Online</h2>
<p>Can't find kimchi locally? Order online:</p>
<ul>
<li><a href="/shop/">Ollie's Kimchi</a> - Fresh UK-made, delivered nationwide</li>
<li>Amazon UK - Wide selection</li>
<li>Sous Chef - Premium options</li>
<li>Japan Centre - Korean foods with UK delivery</li>
</ul>

<h2 id="tips">Tips for Finding Quality Kimchi</h2>
<ul>
<li>Look in the refrigerated section (shelf-stable = pasteurised)</li>
<li>Check for "live cultures" or "unpasteurised" for probiotics</li>
<li>Fresh-made at Korean supermarkets is best</li>
<li>Ask staff - they often have fresh stock in back</li>
</ul>`
  },
  {
    article_id: 'C-003',
    title: 'Supermarket Kimchi UK Review: Tesco, Sainsbury\'s, Waitrose Compared',
    slug: 'buy/supermarket-kimchi',
    meta_title: 'Supermarket Kimchi UK Reviews | Tesco, Sainsbury\'s, Waitrose',
    meta_description: 'Honest reviews of supermarket kimchi in the UK. We compare Tesco, Sainsbury\'s, Waitrose, and more to find the best value and quality.',
    primary_keyword: 'tesco kimchi',
    secondary_keywords: ['sainsburys kimchi', 'waitrose kimchi', 'supermarket kimchi uk'],
    search_volume: 480, cluster: 'commercial', phase: 5,
    internal_links: ['kimchi', 'best-kimchi-uk', 'kimchi-near-me'],
    content: `<p>We've tasted and compared <a href="/kimchi/">kimchi</a> from every major UK supermarket. Here's our honest assessment.</p>

<h2 id="tesco">Tesco Kimchi</h2>
<p><strong>Products:</strong> Lucky Foods, Own-brand (varies)</p>
<p><strong>Price:</strong> £2.50-£4.00</p>
<p><strong>Verdict:</strong> Decent entry-level option. Pasteurised so no probiotics. Mild flavour suits beginners.</p>
<p><strong>Rating:</strong> 3/5</p>

<h2 id="sainsburys">Sainsbury's Kimchi</h2>
<p><strong>Products:</strong> Yutaka</p>
<p><strong>Price:</strong> £2.80-£3.50</p>
<p><strong>Verdict:</strong> Stock is inconsistent. Yutaka brand is acceptable but quite mild.</p>
<p><strong>Rating:</strong> 2.5/5</p>

<h2 id="waitrose">Waitrose Kimchi</h2>
<p><strong>Products:</strong> Various premium brands</p>
<p><strong>Price:</strong> £3.50-£5.00</p>
<p><strong>Verdict:</strong> Best supermarket option. More authentic brands, sometimes unpasteurised options.</p>
<p><strong>Rating:</strong> 3.5/5</p>

<h2 id="ms">M&S Kimchi</h2>
<p><strong>Products:</strong> Seasonal</p>
<p><strong>Price:</strong> £3.50-£4.50</p>
<p><strong>Verdict:</strong> Good when available but unpredictable stock.</p>
<p><strong>Rating:</strong> 3/5</p>

<h2 id="asda">Asda Kimchi</h2>
<p><strong>Products:</strong> Basic options</p>
<p><strong>Price:</strong> £2.00-£3.00</p>
<p><strong>Verdict:</strong> Budget-friendly but least authentic taste.</p>
<p><strong>Rating:</strong> 2/5</p>

<h2 id="recommendation">Our Recommendation</h2>
<p>For supermarket kimchi, <strong>Waitrose</strong> offers the best quality. For truly authentic kimchi, visit <a href="/buy/korean-supermarkets/">Korean supermarkets</a> or <a href="/shop/">buy from artisan producers</a>.</p>`
  },
  {
    article_id: 'C-004',
    title: 'Korean Supermarkets UK: Complete Guide to Asian Grocery Shopping',
    slug: 'buy/korean-supermarkets',
    meta_title: 'Korean Supermarkets UK | Asian Grocery Store Guide',
    meta_description: 'Find Korean supermarkets and Asian grocery stores across the UK. London, Manchester, Birmingham, and more - your guide to Korean food shopping.',
    primary_keyword: 'korean supermarket',
    secondary_keywords: ['korean shop uk', 'asian supermarket uk', 'korean grocery store'],
    search_volume: 2400, cluster: 'commercial', phase: 5,
    internal_links: ['kimchi', 'best-kimchi-uk', 'gochugaru-uk', 'korean-ingredients'],
    content: `<p>Korean supermarkets are the best place to find authentic <a href="/kimchi/">kimchi</a>, <a href="/buy/gochugaru-uk/">gochugaru</a>, and Korean ingredients in the UK.</p>

<h2 id="london">London</h2>

<h3>H Mart - New Malden</h3>
<p>The largest Korean supermarket in the UK. Excellent fresh kimchi section, full Korean grocery range.</p>
<p><strong>Address:</strong> 36 High Street, New Malden, KT3 4HJ</p>

<h3>Oseyo</h3>
<p>Multiple locations across London:</p>
<ul>
<li>Centre Point, Tottenham Court Road</li>
<li>Soho</li>
<li>Stratford Westfield</li>
<li>White City Westfield</li>
</ul>

<h3>Korea Foods</h3>
<p>New Malden - great for specialty items.</p>

<h3>SeeWoo</h3>
<p>Chinese-Korean supermarket. Greenwich and Chinatown locations. Also delivers online.</p>

<h2 id="manchester">Manchester</h2>
<ul>
<li><strong>Wing Yip</strong> - Oldham Road (large Asian supermarket)</li>
<li><strong>Woo Sang</strong> - Chinatown</li>
</ul>

<h2 id="birmingham">Birmingham</h2>
<ul>
<li><strong>Wing Yip</strong> - Nechells (huge store)</li>
<li><strong>Seoul Plaza</strong> - Korean specific</li>
</ul>

<h2 id="other">Other Cities</h2>
<ul>
<li><strong>Glasgow:</strong> See Woo, Sola Korean</li>
<li><strong>Edinburgh:</strong> Matthews Foods, Pat's Chung Ying</li>
<li><strong>Bristol:</strong> Hang Sing Hong</li>
<li><strong>Liverpool:</strong> Woo Sang, Hondo Chinese</li>
<li><strong>Leeds:</strong> Wing's Supermarket</li>
</ul>

<h2 id="online">Online Korean Grocers</h2>
<ul>
<li><strong>SeeWoo</strong> - seewoo.com</li>
<li><strong>Sous Chef</strong> - souschef.co.uk (premium Korean ingredients)</li>
<li><strong>Japan Centre</strong> - japancentre.com</li>
<li><strong>Amazon UK</strong> - wide selection</li>
</ul>`
  },
  {
    article_id: 'C-005',
    title: 'Kimchi Subscription Box UK: Fresh Ferments Delivered Monthly',
    slug: 'buy/kimchi-subscription',
    meta_title: 'Kimchi Subscription Box UK | Monthly Fermented Delivery',
    meta_description: 'Get fresh kimchi delivered to your door with a UK subscription box. Compare options for regular kimchi deliveries and fermented food subscriptions.',
    primary_keyword: 'kimchi subscription',
    secondary_keywords: ['kimchi delivery uk', 'fermented food subscription', 'monthly kimchi'],
    search_volume: 210, cluster: 'commercial', phase: 5,
    internal_links: ['kimchi', 'best-kimchi-uk'],
    content: `<p>Love <a href="/kimchi/">kimchi</a> and want it delivered regularly? Here's the guide to kimchi subscriptions in the UK.</p>

<h2 id="benefits">Benefits of Kimchi Subscriptions</h2>
<ul>
<li>Never run out of kimchi</li>
<li>Fresh, unpasteurised options</li>
<li>Often cheaper than one-off purchases</li>
<li>Discover new varieties</li>
<li>Support small producers</li>
</ul>

<h2 id="options">UK Kimchi Subscription Options</h2>

<h3>Ollie's Kimchi</h3>
<p><a href="/shop/">Shop our range</a> - we offer regular delivery options for our fresh, unpasteurised kimchi made in the UK.</p>

<h3>Fermented Food Boxes</h3>
<p>Several UK companies offer broader fermented food subscriptions that include kimchi alongside sauerkraut, kefir, and more.</p>

<h2 id="what-to-look-for">What to Look For</h2>
<ul>
<li><strong>Unpasteurised:</strong> For probiotic benefits</li>
<li><strong>UK-made:</strong> Fresher, supports local producers</li>
<li><strong>Flexible scheduling:</strong> Adjust frequency as needed</li>
<li><strong>Variety:</strong> Different types to try</li>
<li><strong>Easy cancellation:</strong> No long contracts</li>
</ul>

<h2 id="diy">Alternative: Make Your Own</h2>
<p>For the freshest kimchi, consider <a href="/recipes/traditional-kimchi-recipe/">making your own</a>. Once you get the hang of it, you'll always have fresh kimchi ready.</p>`
  },
  {
    article_id: 'C-006',
    title: 'Gochugaru UK: Where to Buy Korean Red Pepper Flakes',
    slug: 'buy/gochugaru-uk',
    meta_title: 'Gochugaru UK | Where to Buy Korean Red Pepper Flakes',
    meta_description: 'Where to buy gochugaru (Korean red pepper flakes) in the UK. Online stockists, supermarkets, and Asian shops that sell authentic Korean chilli.',
    primary_keyword: 'gochugaru uk',
    secondary_keywords: ['korean red pepper flakes uk', 'gochugaru where to buy', 'korean chilli flakes'],
    search_volume: 880, cluster: 'commercial', phase: 5,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'kimchi-without-gochugaru', 'korean-supermarkets'],
    content: `<p><strong>Gochugaru</strong> (고추가루) is essential for making authentic <a href="/kimchi/">kimchi</a>. Here's where to find it in the UK.</p>

<h2 id="what-is">What is Gochugaru?</h2>
<p>Korean red pepper flakes - coarsely ground dried Korean chillies. Key features:</p>
<ul>
<li>Vibrant red colour</li>
<li>Moderate heat (milder than cayenne)</li>
<li>Slightly sweet and smoky</li>
<li>Flaky texture, not powder</li>
</ul>

<h2 id="where-to-buy">Where to Buy in the UK</h2>

<h3>Korean Supermarkets (Best)</h3>
<ul>
<li>H Mart, Oseyo, Korea Foods - <a href="/buy/korean-supermarkets/">locations</a></li>
<li>Best selection and freshest stock</li>
<li>Price: £5-12 for 500g</li>
</ul>

<h3>Online</h3>
<ul>
<li><strong>Amazon UK</strong> - search "gochugaru" (check reviews)</li>
<li><strong>Sous Chef</strong> - premium quality, higher price</li>
<li><strong>SeeWoo</strong> - good selection, reasonable prices</li>
</ul>

<h3>Regular Supermarkets</h3>
<p>Rarely stocked. Waitrose occasionally has it in larger stores.</p>

<h2 id="types">Types of Gochugaru</h2>
<ul>
<li><strong>Coarse (굵은):</strong> For kimchi - flaky texture</li>
<li><strong>Fine (고운):</strong> For sauces and marinades</li>
</ul>
<p>For kimchi, you want <strong>coarse</strong> gochugaru.</p>

<h2 id="storage">Storage</h2>
<ul>
<li>Keep in airtight container</li>
<li>Store in fridge or freezer for longer life</li>
<li>Lasts 6-12 months properly stored</li>
</ul>

<h2 id="substitutes">Can't Find It?</h2>
<p>See our guide to <a href="/recipes/kimchi-without-gochugaru/">making kimchi without gochugaru</a> using UK alternatives.</p>`
  },
  {
    article_id: 'C-007',
    title: 'Korean Ingredients UK: Essential Shopping Guide',
    slug: 'buy/korean-ingredients',
    meta_title: 'Korean Ingredients UK | Essential Shopping Guide',
    meta_description: 'Complete guide to Korean ingredients available in the UK. From gochugaru to doenjang, find everything you need for Korean cooking.',
    primary_keyword: 'korean ingredients',
    secondary_keywords: ['korean food uk', 'korean cooking ingredients', 'where to buy korean ingredients'],
    search_volume: 590, cluster: 'commercial', phase: 5,
    internal_links: ['kimchi', 'gochugaru-uk', 'korean-supermarkets', 'traditional-kimchi-recipe'],
    content: `<p>Here's your guide to essential Korean ingredients and where to find them in the UK.</p>

<h2 id="essentials">Essential Korean Ingredients</h2>

<h3>Gochugaru (Korean Red Pepper Flakes)</h3>
<p>Essential for <a href="/kimchi/">kimchi</a> and many Korean dishes. <a href="/buy/gochugaru-uk/">Full buying guide</a>.</p>

<h3>Gochujang (Red Pepper Paste)</h3>
<p>Sweet-spicy fermented paste. Available in most supermarkets now.</p>

<h3>Doenjang (Fermented Soybean Paste)</h3>
<p>Korean miso equivalent. Korean supermarkets or online.</p>

<h3>Fish Sauce (Aekjeot)</h3>
<p>Thai fish sauce works fine. Available everywhere.</p>

<h3>Sesame Oil</h3>
<p>Toasted sesame oil is essential. Most supermarkets stock it.</p>

<h3>Soy Sauce</h3>
<p>Regular soy sauce works. Korean soy sauce (gukganjang) for authentic taste.</p>

<h2 id="produce">Fresh Produce</h2>
<ul>
<li><strong>Napa cabbage:</strong> Most supermarkets (Chinese leaf)</li>
<li><strong>Korean radish (mu):</strong> Korean/Asian supermarkets</li>
<li><strong>Daikon:</strong> Widely available substitute</li>
<li><strong>Spring onions:</strong> Everywhere</li>
<li><strong>Fresh chillies:</strong> Most supermarkets</li>
</ul>

<h2 id="where">Where to Shop</h2>
<ul>
<li><strong>Korean supermarkets:</strong> <a href="/buy/korean-supermarkets/">Full list</a></li>
<li><strong>Regular supermarkets:</strong> Basic ingredients</li>
<li><strong>Online:</strong> SeeWoo, Sous Chef, Amazon</li>
</ul>

<h2 id="substitutes">UK Substitutes</h2>
<table>
<thead><tr><th>Korean</th><th>UK Substitute</th></tr></thead>
<tbody>
<tr><td>Gochugaru</td><td>Paprika + cayenne</td></tr>
<tr><td>Korean radish</td><td>Daikon or turnip</td></tr>
<tr><td>Korean chives</td><td>Regular chives</td></tr>
<tr><td>Asian pear</td><td>Regular pear or apple</td></tr>
</tbody>
</table>`
  },
  {
    article_id: 'C-008',
    title: 'Kimchi Jars & Equipment: What You Need for Home Fermentation',
    slug: 'buy/kimchi-equipment',
    meta_title: 'Kimchi Jars & Equipment | Home Fermentation Guide',
    meta_description: 'What jars and equipment do you need to make kimchi at home? From Mason jars to fermentation crocks, here\'s what to buy.',
    primary_keyword: 'kimchi jar',
    secondary_keywords: ['fermentation jar', 'kimchi container', 'fermentation equipment'],
    search_volume: 320, cluster: 'commercial', phase: 5,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'how-to-make-kimchi'],
    content: `<p>Ready to make <a href="/kimchi/">kimchi</a> at home? Here's the equipment you need.</p>

<h2 id="essential">Essential Equipment</h2>

<h3>Jars/Containers</h3>
<ul>
<li><strong>Glass Mason jars:</strong> Widely available, affordable (1-2 litre)</li>
<li><strong>Kilner jars:</strong> Great seal, available everywhere</li>
<li><strong>Any glass jar with lid:</strong> Repurpose pickle jars etc.</li>
</ul>

<h3>Other Essentials</h3>
<ul>
<li><strong>Large bowl:</strong> For salting cabbage</li>
<li><strong>Colander:</strong> For draining</li>
<li><strong>Rubber gloves:</strong> Gochugaru stains!</li>
<li><strong>Kitchen scales:</strong> For accurate salt measurement</li>
</ul>

<h2 id="optional">Optional but Helpful</h2>

<h3>Fermentation Weights</h3>
<p>Keep kimchi submerged under liquid:</p>
<ul>
<li>Glass fermentation weights (fit inside jars)</li>
<li>Small plate weighted with a clean stone</li>
<li>Ziplock bag filled with brine</li>
</ul>

<h3>Airlock Lids</h3>
<p>Allow gas out, no air in. Not essential but reduces need to "burp" jars.</p>

<h3>Traditional Onggi</h3>
<p>Korean earthenware pots. Beautiful but not necessary for home fermentation.</p>

<h2 id="where-to-buy">Where to Buy</h2>
<ul>
<li><strong>Jars:</strong> Any supermarket, Lakeland, Amazon</li>
<li><strong>Fermentation weights:</strong> Amazon, specialist fermentation suppliers</li>
<li><strong>Airlock lids:</strong> Amazon, home brewing suppliers</li>
</ul>

<h2 id="tips">Tips</h2>
<ul>
<li>Don't use plastic containers - they absorb odours and can't be thoroughly cleaned</li>
<li>Wide-mouth jars are easier to pack</li>
<li>Have more jars than you think you need - you'll make more kimchi!</li>
</ul>`
  },
  // Culture Articles
  {
    article_id: 'CU-002',
    title: 'History of Kimchi: 2,000 Years of Korean Fermented Vegetables',
    slug: 'culture/history-of-kimchi',
    meta_title: 'History of Kimchi | 2,000 Years of Korean Fermentation',
    meta_description: 'Explore the 2,000-year history of kimchi. From ancient salted vegetables to the red-pepper kimchi we know today - the fascinating evolution of Korea\'s national dish.',
    primary_keyword: 'history of kimchi',
    secondary_keywords: ['kimchi origins', 'korean kimchi history', 'kimchi tradition'],
    search_volume: 590, cluster: 'culture', phase: 5,
    internal_links: ['kimchi', 'types-of-kimchi', 'kimchi-day'],
    content: `<p><a href="/kimchi/">Kimchi's</a> history spans over 2,000 years, evolving from simple salted vegetables to Korea's most iconic culinary creation.</p>

<h2 id="timeline">Historical Timeline</h2>

<h3>Ancient Origins (37 BCE - 668 CE)</h3>
<p>Earliest records of preserved vegetables in Korea during the Three Kingdoms period. Simple salting to survive harsh winters - no spice yet.</p>

<h3>Goryeo Dynasty (918-1392)</h3>
<p>Recipes become more sophisticated. Addition of garlic, ginger, green onions. The word "chimchae" (soaked vegetables) appears in literature.</p>

<h3>Joseon Dynasty (1392-1897)</h3>
<p>Major transformation! Portuguese traders introduce chilli peppers to Asia via Japan in the 16th century. By the 18th century, gochugaru becomes standard, creating the red kimchi we know.</p>

<h3>20th Century</h3>
<p>Kimchi refrigerators invented in Korea. Commercial kimchi production begins. Kimchi spreads globally.</p>

<h3>2013</h3>
<p>UNESCO adds "Kimjang: Making and Sharing Kimchi" to Intangible Cultural Heritage of Humanity list.</p>

<h2 id="before-chilli">Before Chilli Peppers</h2>
<p>Pre-16th century kimchi was pale - more like <a href="/recipes/white-kimchi/">white kimchi</a>. The vibrant red colour we associate with kimchi is actually relatively recent in its long history.</p>

<h2 id="cultural-significance">Cultural Significance</h2>
<p>Kimchi is far more than food in Korea:</p>
<ul>
<li>Served at nearly every meal</li>
<li>40+ pounds consumed per person per year</li>
<li>Each family has unique recipes passed down generations</li>
<li><a href="/culture/kimchi-day/">Kimjang</a> tradition brings communities together</li>
</ul>`
  },
  {
    article_id: 'CU-003',
    title: 'Kimchi Day & Kimjang: Korean Kimchi-Making Tradition',
    slug: 'culture/kimchi-day',
    meta_title: 'Kimchi Day & Kimjang | Korean Kimchi Tradition',
    meta_description: 'Learn about Kimjang - the Korean tradition of communal kimchi-making. UNESCO-recognised cultural heritage and modern Kimchi Day celebrations.',
    primary_keyword: 'kimchi day',
    secondary_keywords: ['kimjang', 'korean kimchi tradition', 'kimchi festival'],
    search_volume: 320, cluster: 'culture', phase: 5,
    internal_links: ['kimchi', 'history-of-kimchi', 'traditional-kimchi-recipe'],
    content: `<p><strong>Kimjang</strong> (김장) is the traditional Korean practice of communal <a href="/kimchi/">kimchi</a>-making, typically in late autumn. It's so important that UNESCO recognised it as Intangible Cultural Heritage in 2013.</p>

<h2 id="what-is-kimjang">What is Kimjang?</h2>
<p>Kimjang is when families and communities gather to make large quantities of kimchi - enough to last through winter. Traditionally held in November/December when temperatures help fermentation.</p>

<h3>Key Elements</h3>
<ul>
<li><strong>Community:</strong> Families, neighbours, and friends work together</li>
<li><strong>Scale:</strong> Hundreds of cabbages processed at once</li>
<li><strong>Tradition:</strong> Recipes passed down through generations</li>
<li><strong>Sharing:</strong> Kimchi distributed to extended family and those in need</li>
</ul>

<h2 id="kimchi-day">National Kimchi Day</h2>
<p>South Korea celebrates <strong>Kimchi Day</strong> on November 22nd, recognising kimchi's cultural importance. Events include:</p>
<ul>
<li>Community kimjang events</li>
<li>Kimchi festivals</li>
<li>Competitions</li>
<li>Charity kimchi-making</li>
</ul>

<h2 id="modern-kimjang">Modern Kimjang</h2>
<p>While fewer families do traditional large-scale kimjang today, the spirit continues:</p>
<ul>
<li>Corporate and community kimjang events</li>
<li>Charity kimchi-making for elderly and disadvantaged</li>
<li>Kimchi-making classes and experiences</li>
<li>Family gatherings still centre on making kimchi together</li>
</ul>

<h2 id="try-it">Experience Kimjang</h2>
<p>Can't join a Korean kimjang? Make your own! Our <a href="/recipes/traditional-kimchi-recipe/">traditional recipe</a> guides you through the process.</p>`
  },
  {
    article_id: 'CU-004',
    title: 'Types of Kimchi: Complete Guide to 10+ Korean Kimchi Varieties',
    slug: 'culture/types-of-kimchi',
    meta_title: 'Types of Kimchi | Guide to Korean Kimchi Varieties',
    meta_description: 'Discover the many types of kimchi beyond napa cabbage. From radish kkakdugi to cucumber oi sobagi - explore Korea\'s 200+ kimchi varieties.',
    primary_keyword: 'types of kimchi',
    secondary_keywords: ['kimchi varieties', 'different kimchi', 'korean kimchi types'],
    search_volume: 720, cluster: 'culture', phase: 5,
    internal_links: ['kimchi', 'traditional-kimchi-recipe', 'radish-kimchi', 'cucumber-kimchi', 'white-kimchi'],
    content: `<p>There are over 200 types of <a href="/kimchi/">kimchi</a> in Korea! Here are the most popular varieties you should know.</p>

<h2 id="cabbage">Cabbage Kimchi</h2>

<h3>Baechu Kimchi (배추김치)</h3>
<p>The classic. Whole napa cabbage leaves with spicy paste. This is what most people mean by "kimchi."</p>
<p><a href="/recipes/traditional-kimchi-recipe/">Make baechu kimchi →</a></p>

<h3>Baek Kimchi (백김치)</h3>
<p>White kimchi - no chilli. Mild, refreshing, fermented in brine.</p>
<p><a href="/recipes/white-kimchi/">Make white kimchi →</a></p>

<h2 id="radish">Radish Kimchi</h2>

<h3>Kkakdugi (깍두기)</h3>
<p>Cubed radish kimchi. Crunchy, popular with soups and stews.</p>
<p><a href="/recipes/radish-kimchi/">Make kkakdugi →</a></p>

<h3>Dongchimi (동치미)</h3>
<p>Whole radish water kimchi. Mild, refreshing, often drunk as beverage.</p>

<h2 id="other-vegetables">Other Vegetables</h2>

<h3>Oi Sobagi (오이소박이)</h3>
<p>Stuffed cucumber kimchi. Quick-fermenting, extra crunchy.</p>
<p><a href="/recipes/cucumber-kimchi/">Make cucumber kimchi →</a></p>

<h3>Pa Kimchi (파김치)</h3>
<p>Spring onion kimchi. Intense, savoury flavour.</p>
<p><a href="/recipes/spring-onion-kimchi/">Make pa kimchi →</a></p>

<h3>Mul Kimchi (물김치)</h3>
<p>Water kimchi. Vegetables in tangy brine, served cold.</p>
<p><a href="/recipes/water-kimchi/">Make mul kimchi →</a></p>

<h2 id="seasonal">Seasonal Varieties</h2>
<ul>
<li><strong>Yeolmu kimchi:</strong> Young summer radish greens</li>
<li><strong>Gat kimchi:</strong> Mustard leaf kimchi</li>
<li><strong>Chonggak kimchi:</strong> Ponytail radish with leaves</li>
<li><strong>Bossam kimchi:</strong> Wrapped luxury kimchi with seafood</li>
</ul>

<h2 id="regional">Regional Varieties</h2>
<p>Different Korean regions have distinct styles - southern kimchi tends to be more fermented and pungent, northern styles milder.</p>`
  },
  {
    article_id: 'CU-005',
    title: 'Korean Side Dishes (Banchan): Complete Guide to Korean Small Plates',
    slug: 'culture/korean-side-dishes',
    meta_title: 'Korean Side Dishes (Banchan) | Complete Guide',
    meta_description: 'Discover banchan - the small side dishes served with every Korean meal. From kimchi to japchae, explore the tradition of Korean communal dining.',
    primary_keyword: 'banchan',
    secondary_keywords: ['korean side dishes', 'korean small plates', 'korean accompaniments'],
    search_volume: 1200, cluster: 'culture', phase: 5,
    internal_links: ['kimchi', 'types-of-kimchi'],
    content: `<p><strong>Banchan</strong> (반찬) are the small side dishes served with every Korean meal. <a href="/kimchi/">Kimchi</a> is the most famous, but there are dozens of varieties.</p>

<h2 id="tradition">The Banchan Tradition</h2>
<ul>
<li>Served free with meals at Korean restaurants</li>
<li>Refillable - ask for more!</li>
<li>Meant to be shared communally</li>
<li>Balance flavours: spicy, sour, salty, sweet</li>
</ul>

<h2 id="popular">Popular Banchan</h2>

<h3>Kimchi Varieties</h3>
<ul>
<li><strong>Baechu kimchi:</strong> Napa cabbage (the classic)</li>
<li><strong>Kkakdugi:</strong> Cubed radish</li>
<li><strong>Oi sobagi:</strong> Cucumber</li>
</ul>

<h3>Vegetable Dishes</h3>
<ul>
<li><strong>Kongnamul:</strong> Seasoned soybean sprouts</li>
<li><strong>Sigeumchi namul:</strong> Spinach side dish</li>
<li><strong>Japchae:</strong> Glass noodles with vegetables</li>
<li><strong>Gamja jorim:</strong> Braised potatoes</li>
</ul>

<h3>Protein Dishes</h3>
<ul>
<li><strong>Gyeran jjim:</strong> Steamed egg</li>
<li><strong>Dubu jorim:</strong> Braised tofu</li>
<li><strong>Myeolchi bokkeum:</strong> Stir-fried anchovies</li>
</ul>

<h2 id="making">Making Banchan at Home</h2>
<p>Start with the most essential banchan - kimchi! Our <a href="/recipes/traditional-kimchi-recipe/">traditional recipe</a> will get you started.</p>

<h2 id="eating">How to Eat Banchan</h2>
<ul>
<li>Take small portions, replenish as needed</li>
<li>Use chopsticks (don't use serving spoons for personal bites)</li>
<li>Mix banchan with rice in your bowl</li>
<li>Enjoy throughout the meal, not all at once</li>
</ul>`
  },
  {
    article_id: 'CU-006',
    title: 'Korean Food UK: Complete Guide to Korean Cuisine in Britain',
    slug: 'culture/korean-food-uk',
    meta_title: 'Korean Food UK | Guide to Korean Cuisine in Britain',
    meta_description: 'Explore Korean food in the UK. From restaurants and supermarkets to cooking at home, discover where to find and how to enjoy Korean cuisine.',
    primary_keyword: 'korean food uk',
    secondary_keywords: ['korean cuisine uk', 'korean restaurant uk', 'korean cooking uk'],
    search_volume: 1600, cluster: 'culture', phase: 5,
    internal_links: ['kimchi', 'korean-supermarkets', 'best-kimchi-uk', 'korean-ingredients'],
    content: `<p>Korean food has exploded in popularity across the UK. Here's your guide to experiencing Korean cuisine in Britain.</p>

<h2 id="restaurants">Korean Restaurants</h2>

<h3>London</h3>
<ul>
<li><strong>New Malden:</strong> UK's Korea Town - dozens of authentic restaurants</li>
<li><strong>Soho:</strong> Multiple Korean options</li>
<li><strong>Central/West End:</strong> Growing Korean BBQ scene</li>
</ul>

<h3>Outside London</h3>
<p>Korean restaurants are growing in Manchester, Birmingham, Edinburgh, and other major cities. Search for Korean BBQ and Korean fried chicken.</p>

<h2 id="dishes">Must-Try Dishes</h2>
<ul>
<li><strong><a href="/kimchi/">Kimchi</a>:</strong> The essential side dish</li>
<li><strong>Korean BBQ:</strong> Grill-your-own meat experience</li>
<li><strong>Bibimbap:</strong> Mixed rice bowl</li>
<li><strong>Korean fried chicken:</strong> Crispy, saucy, addictive</li>
<li><strong><a href="/recipes/kimchi-jjigae/">Kimchi jjigae</a>:</strong> Warming kimchi stew</li>
<li><strong>Tteokbokki:</strong> Spicy rice cakes</li>
</ul>

<h2 id="cooking">Cooking Korean at Home</h2>
<p>Korean cooking is very accessible in the UK:</p>
<ul>
<li><strong>Ingredients:</strong> <a href="/buy/korean-supermarkets/">Korean supermarkets</a> and increasingly in regular supermarkets</li>
<li><strong>Recipes:</strong> Start with <a href="/recipes/traditional-kimchi-recipe/">making kimchi</a> or <a href="/recipes/kimchi-fried-rice/">kimchi fried rice</a></li>
<li><strong>Equipment:</strong> Most Korean dishes need only basic kitchen equipment</li>
</ul>

<h2 id="shopping">Where to Shop</h2>
<ul>
<li><strong>Korean supermarkets:</strong> <a href="/buy/korean-supermarkets/">Full guide</a></li>
<li><strong>Regular supermarkets:</strong> Basic sauces and kimchi</li>
<li><strong>Online:</strong> Full range of <a href="/buy/korean-ingredients/">Korean ingredients</a></li>
</ul>`
  }
]

async function main() {
  console.log('Inserting Phase 5 Commercial & Culture Articles...\n')
  let totalWords = 0

  for (const article of articles) {
    const wordCount = article.content.split(/\s+/).length
    totalWords += wordCount

    try {
      await sql`
        INSERT INTO seo_articles (
          article_id, title, slug, meta_title, meta_description,
          primary_keyword, secondary_keywords, search_volume, word_count,
          content, cluster, phase, status, internal_links, published_at
        ) VALUES (
          ${article.article_id}, ${article.title}, ${article.slug},
          ${article.meta_title}, ${article.meta_description},
          ${article.primary_keyword}, ${article.secondary_keywords},
          ${article.search_volume}, ${wordCount}, ${article.content},
          ${article.cluster}, ${article.phase}, 'published',
          ${article.internal_links}, CURRENT_TIMESTAMP
        )
      `
      console.log(`✓ ${article.article_id}: ${article.title.substring(0, 45)}... (${wordCount} words)`)
    } catch (error) {
      console.error(`✗ ${article.article_id}: ${error}`)
    }
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`Inserted ${articles.length} articles | ${totalWords.toLocaleString()} total words`)
}

main().catch(console.error)
