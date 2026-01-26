# Shopify Integration

## Overview

The site uses Shopify as a headless e-commerce backend via the **Storefront API**. Products are managed in Shopify, but the frontend is custom Next.js.

## Configuration

### Environment Variables
```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=izmiad-nu.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=<storefront-access-token>
```

### API Client
Located at `lib/shopify.ts`

## Available Functions

| Function | Purpose |
|----------|---------|
| `createCart()` | Create new cart, returns cart ID |
| `getCart(cartId)` | Fetch existing cart |
| `addToCart(cartId, variantId, qty)` | Add item to cart |
| `updateCartLine(cartId, lineId, qty)` | Update quantity |
| `removeCartLine(cartId, lineId)` | Remove item |
| `getAllProducts()` | Fetch all products |
| `getProductByHandle(handle)` | Fetch single product |
| `formatPrice(amount, currency)` | Format price for display |
| `isShopifyConfigured()` | Check if credentials set |

## Cart Management

Cart state is managed via React Context (`components/CartContext.tsx`):

- Cart ID stored in `localStorage`
- Cart data fetched on app load
- Checkout redirects to Shopify's hosted checkout

### Cart Flow
1. User clicks "Add to Cart"
2. If no cart exists, `createCart()` is called
3. `addToCart()` adds the variant
4. Cart ID persisted to localStorage
5. On checkout, redirect to `cart.checkoutUrl`

## Product Variant IDs

Hardcoded in `components/ShopProductCard.tsx`:

```typescript
const variantIds = {
  'classic-napa-cabbage-kimchi': 'gid://shopify/ProductVariant/...',
  'classic-kimchi-2-pack': 'gid://shopify/ProductVariant/...',
  'classic-kimchi-3-pack': 'gid://shopify/ProductVariant/...',
  'classic-kimchi-6-pack': 'gid://shopify/ProductVariant/...',
}
```

## Adding New Products

1. Create product in Shopify Admin
2. Get the variant ID from Shopify (GraphQL or Admin URL)
3. Add to `variantIds` object in `ShopProductCard.tsx`
4. Add product image to `/public/Product Images/`
5. Add fallback data in `app/shop/[handle]/page.tsx` if needed

## Fallback Data

Product pages have hardcoded fallback data for:
- Faster initial load
- SEO (content available without API call)
- Resilience if Shopify is slow

Located in `app/shop/[handle]/page.tsx` as `fallbackProducts` object.
