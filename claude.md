# Claude Context - Ollie's Kimchi

## Quick Reference

- **Live site:** https://ollieskimchi.co.uk
- **Repo:** github.com/Londondannyboy/ollieskimchi
- **Hosting:** Vercel
- **E-commerce backend:** Shopify (headless)

## Tech Stack

- Next.js 15.1 (App Router)
- React 19
- TypeScript 5.7
- Tailwind CSS 3.4
- Shopify Storefront API
- Neon PostgreSQL (email subscriptions)

## Key Files

| Purpose | File |
|---------|------|
| Homepage | `app/page.tsx` |
| Layout/Providers | `app/layout.tsx` |
| Shop page | `app/shop/page.tsx` |
| Product detail | `app/shop/[handle]/page.tsx` |
| Cart | `app/cart/page.tsx` |
| Cart state | `components/CartContext.tsx` |
| Shopify client | `lib/shopify.ts` |
| Product cards | `components/ShopProductCard.tsx` |

## Documentation

- [Product Requirements](./prd.md) - Business context and features
- [Project Structure](./docs/project-structure.md) - File organization
- [Shopify Integration](./docs/shopify-integration.md) - API details
- [Image Optimization](./docs/image-optimization.md) - Performance guidelines

## Environment Variables

```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
DATABASE_URL (Neon)
```

## Common Tasks

### Run locally
```bash
npm run dev     # localhost:3000
npm run build   # Production build
npm run lint    # ESLint
```

### Add a product
1. Create in Shopify admin
2. Add variant ID to `components/ShopProductCard.tsx`
3. Add image to `/public/Product Images/`
4. Update fallback in `app/shop/[handle]/page.tsx`

### Image best practices
- Use `sizes` prop matching actual display size
- Use `quality={40-60}` for large background images
- Add `priority` to LCP images
- See [Image Optimization](./docs/image-optimization.md)

## Current Performance

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance | 92 | 99 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

## Code Conventions

- Components in `/components` are reusable
- Page-specific components stay in `/app`
- Use Tailwind classes, avoid custom CSS
- TypeScript strict mode enabled
- Prefer Server Components, use `'use client'` only when needed
