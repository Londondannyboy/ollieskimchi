# Bugs & Fixes

## Resolved

### Checkout 404 Error (Jan 2026)

**Symptom:** Users clicking "Checkout" from cart received a 404 error.

**URL pattern:** `https://ollieskimchi.co.uk/cart/c/{cartToken}?key=...`

**Root cause:** Shopify Storefront API generates `checkoutUrl` using the store's primary domain (`ollieskimchi.co.uk`). Since this is a headless Next.js site, the `/cart/c/` route doesn't exist - that path is Shopify's checkout, not a Next.js route.

**Fix:** Added `rewriteCheckoutUrl()` helper in `components/CartContext.tsx` that rewrites the checkout URL hostname to `izmiad-nu.myshopify.com` where Shopify hosts the checkout.

**Files changed:**
- `components/CartContext.tsx` - client-side URL rewrite
- `next.config.ts` - server-side redirects (fallback)

**Commits:**
- `bfe2075` - "Fix checkout 404 by rewriting checkout URL to Shopify domain"
- `ad90790` - "Add server-side redirects for Shopify checkout URLs"

**Note:** Also required disabling Shopify store password protection in Shopify Admin → Online Store → Preferences.

---

## Known Issues

None currently tracked.
