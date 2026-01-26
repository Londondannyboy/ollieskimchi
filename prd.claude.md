# Ollie's Kimchi - Product Requirements Document

## Project Overview

**Website:** https://ollieskimchi.co.uk
**Purpose:** E-commerce website for Ollie's Kimchi, a London-based artisan kimchi brand featured in The Guardian as "Best All-Rounder" with 5 stars.

## Tech Stack

- **Framework:** Next.js 15.1 (App Router)
- **React:** 19.0
- **Styling:** Tailwind CSS 3.4
- **Language:** TypeScript 5.7
- **E-commerce:** Shopify Storefront API (headless)
- **Database:** Neon (PostgreSQL serverless) - for email subscriptions
- **Hosting:** Vercel
- **Fonts:** Outfit (sans), Source Serif 4 (display)

## Project Structure

```
/app
  /page.tsx              # Homepage
  /layout.tsx            # Root layout with nav, footer, providers
  /shop/page.tsx         # Shop listing
  /shop/[handle]/page.tsx # Product detail pages
  /cart/page.tsx         # Shopping cart
  /about/page.tsx        # About Ollie
  /contact/page.tsx      # Contact form
  /blog/[slug]/page.tsx  # Blog articles
  /recipes/[slug]/page.tsx # Recipe pages
  /health/[slug]/page.tsx  # Health benefit articles
  /guides/[slug]/page.tsx  # How-to guides
  /kimchi/page.tsx       # Kimchi info hub
  /privacy/page.tsx      # Privacy policy
  /terms/page.tsx        # Terms & conditions
  /api/subscribe/route.ts # Email subscription API

/components
  /NavBar.tsx            # Main navigation
  /Footer.tsx            # Site footer
  /CartContext.tsx       # Shopping cart state (React Context)
  /ShopProductCard.tsx   # Product cards for shop grid
  /GuardianBanner.tsx    # Top banner with Guardian review
  /GuardianBadge.tsx     # Guardian logo + stars badge
  /EmailPopup.tsx        # Newsletter signup popup
  /CookieConsent.tsx     # GDPR cookie banner
  /MobileShopNow.tsx     # Sticky mobile CTA widget
  /FAQAccordion.tsx      # Expandable FAQ component
  /RecipeCard.tsx        # Recipe display component
  /NutritionCard.tsx     # Nutrition facts display
  /SeoArticle.tsx        # SEO-optimized article template

/lib
  /shopify.ts            # Shopify Storefront API client

/public
  /Assets/               # Images (product photos, logos)
  /Product Images/       # Product photography
```

## Key Features

### E-commerce
- Headless Shopify integration via Storefront API
- Cart persisted in localStorage
- Direct checkout redirect to Shopify
- Products: Single jar, 2-pack, 3-pack, 6-pack (best value)

### Content
- Blog with markdown content
- Recipe pages with ingredients, steps, tips
- Health benefits articles
- Cultural/educational content about kimchi

### Marketing
- Guardian "Best All-Rounder" badge prominently displayed
- Email popup for 15% discount
- Free UK delivery messaging (orders over £35)

### Performance (Current Lighthouse Scores)
- Mobile: 92 Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- Desktop: 99 Performance, 100 Accessibility, 100 Best Practices, 100 SEO

## Environment Variables

```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=izmiad-nu.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=<token>
DATABASE_URL=<neon-connection-string>
```

## Brand Guidelines

- **Primary Color:** Red/Kimchi Red (`red-900`, `#7f1d1d`)
- **Accent:** Yellow for stars/highlights
- **Tone:** Fun, authentic, artisan, London-made
- **Key Messages:**
  - "It's Alive!" - emphasizes live cultures
  - "No shortcuts. No pasteurisation."
  - "Naturally fermented in London"
  - Guardian 5-star "Best All-Rounder" review

## Image Optimization Notes

- Hero images use quality={40-50} for performance
- Product thumbnails need `sizes` attribute matching display size
- Use `priority` and `fetchPriority="high"` for LCP images
- Background/decorative images should have low quality and proper sizes

## Common Tasks

### Adding a new product
1. Add to Shopify store
2. Add variant ID to `components/ShopProductCard.tsx` variantIds object
3. Add product image to `/public/Product Images/`
4. Update fallback data in `/app/shop/[handle]/page.tsx`

### Updating content pages
- Blog/recipes/guides use markdown in the page files
- SEO articles use the `SeoArticle` component wrapper

### Testing locally
```bash
npm run dev    # Start dev server on localhost:3000
npm run build  # Production build
npm run lint   # Run ESLint
```
