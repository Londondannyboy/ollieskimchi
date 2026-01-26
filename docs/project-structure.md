# Project Structure

## Directory Overview

```
ollieskimchi/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles + Tailwind
│   ├── shop/              # Shop pages
│   │   ├── page.tsx       # Product listing
│   │   └── [handle]/      # Dynamic product pages
│   ├── cart/page.tsx      # Shopping cart
│   ├── about/page.tsx     # About Ollie
│   ├── contact/page.tsx   # Contact form
│   ├── blog/              # Blog articles
│   ├── recipes/           # Recipe pages
│   ├── health/            # Health benefit articles
│   ├── guides/            # How-to guides
│   ├── kimchi/            # Kimchi info hub
│   ├── uses/              # Use case articles
│   ├── culture/           # Cultural content
│   ├── buy/               # Buy-focused landing pages
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms & conditions
│   └── api/               # API routes
│       └── subscribe/     # Email subscription endpoint
│
├── components/            # Reusable React components
│   ├── NavBar.tsx         # Main navigation
│   ├── Footer.tsx         # Site footer
│   ├── CartContext.tsx    # Cart state provider
│   ├── ShopProductCard.tsx # Product card for shop grid
│   ├── GuardianBanner.tsx # Top review banner
│   ├── GuardianBadge.tsx  # Logo + stars badge
│   ├── EmailPopup.tsx     # Newsletter modal
│   ├── CookieConsent.tsx  # GDPR cookie banner
│   ├── MobileShopNow.tsx  # Sticky mobile CTA
│   ├── FAQAccordion.tsx   # Expandable FAQ
│   ├── RecipeCard.tsx     # Recipe display
│   ├── NutritionCard.tsx  # Nutrition facts
│   ├── SeoArticle.tsx     # Article wrapper
│   └── ...
│
├── lib/                   # Utilities and API clients
│   └── shopify.ts         # Shopify Storefront API
│
├── public/                # Static assets
│   ├── Assets/            # General images, logos
│   └── Product Images/    # Product photography
│
├── docs/                  # Documentation
│
├── prd.md                 # Product requirements
├── claude.md              # Claude context
└── package.json           # Dependencies
```

## Page Types

### Static Pages
- `/about`, `/contact`, `/privacy`, `/terms`
- Server-rendered, no dynamic data

### Dynamic Content Pages
- `/blog/[slug]`, `/recipes/[slug]`, `/health/[slug]`
- Content defined in page files (could be moved to CMS)

### E-commerce Pages
- `/shop` - Product listing (fetches from Shopify)
- `/shop/[handle]` - Product detail (Shopify + fallback data)
- `/cart` - Client-side cart management

## Component Categories

### Layout Components
- `NavBar`, `Footer`, `GuardianBanner`

### E-commerce Components
- `CartContext`, `ShopProductCard`, `AddToCartButton`

### Marketing Components
- `EmailPopup`, `GuardianBadge`, `MobileShopNow`

### Content Components
- `SeoArticle`, `RecipeCard`, `FAQAccordion`, `NutritionCard`
