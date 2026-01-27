# Bugs & Fixes

## Resolved

### Checkout 404 Error (27 Jan 2026)

**Symptom:** Users clicking "Checkout" from cart received a 404 error.

**URL patterns affected:**
- `https://ollieskimchi.co.uk/cart/c/{token}?key=...`
- `https://ollieskimchi.co.uk/checkouts/cn/{token}/...`

**Root cause:** Shopify Storefront API generates `checkoutUrl` using the store's primary domain (`ollieskimchi.co.uk`). Since this is a headless Next.js site, checkout paths don't exist - they're Shopify routes, not Next.js routes.

**Fix (multi-layered):**
1. Added `rewriteCheckoutUrl()` in `CartContext.tsx` - rewrites checkout URL hostname client-side
2. Added server-side redirects in `next.config.ts` - catches any checkout URLs that hit the custom domain
3. Disabled Shopify store password protection (was blocking checkout)

**Files changed:**
- `components/CartContext.tsx` - client-side URL rewrite
- `next.config.ts` - server-side redirects for `/cart/c/*` and `/checkouts/*`

**Commits:**
- `bfe2075` - "Fix checkout 404 by rewriting checkout URL to Shopify domain"
- `ad90790` - "Add server-side redirects for Shopify checkout URLs"

**Shopify Admin changes:**
- Disabled password protection: Online Store → Preferences → Password protection

**Expected behavior after fix:**
- Users browse/add to cart on `ollieskimchi.co.uk`
- Checkout redirects to `izmiad-nu.myshopify.com/checkouts/...`
- This is normal for headless Shopify (custom checkout domains require Shopify Plus)

---

## Known Issues

None currently tracked.
