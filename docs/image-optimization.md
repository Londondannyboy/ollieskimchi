# Image Optimization Guidelines

## Overview

Image optimization is critical for Lighthouse performance scores. Next.js Image component handles most optimization automatically, but proper configuration is required.

## Key Principles

### 1. Always use `sizes` attribute

The `sizes` prop tells the browser what size the image will be displayed at, allowing it to download the appropriate resolution.

```tsx
// BAD - defaults to 100vw, downloads huge image
<Image src="/photo.jpg" fill />

// GOOD - downloads appropriately sized image
<Image src="/photo.jpg" fill sizes="(max-width: 768px) 100vw, 50vw" />

// GOOD - fixed size
<Image src="/logo.png" width={170} height={34} sizes="170px" />
```

### 2. Use appropriate `quality`

Default quality is 75. For large background images with overlays, lower quality is acceptable.

| Image Type | Recommended Quality |
|------------|---------------------|
| Hero backgrounds | 40-50 |
| Product photos | 75 (default) |
| Thumbnails | 75 |
| Decorative/subtle | 40-60 |

### 3. Prioritize LCP images

Add `priority` to the Largest Contentful Paint image:

```tsx
<Image
  src="/hero.jpg"
  priority
  fetchPriority="high"
  // ...
/>
```

### 4. Match dimensions to display size

Avoid aspect ratio warnings by setting width/height to match the actual image ratio:

```tsx
// If image is 640x628 and displayed at 320px width:
<Image
  src="/product.jpg"
  width={320}
  height={314}  // 320 * (628/640)
/>
```

## Current Optimizations

### Homepage Hero (`app/page.tsx`)
```tsx
<Image
  src="/Assets/Kimchi_B006_30-11-20.jpg"
  quality={40}
  sizes="100vw"
  priority
  fetchPriority="high"
/>
```

### Product Cards (`components/ShopProductCard.tsx`)
```tsx
<Image
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### Small Thumbnails
```tsx
// 96px container
<Image sizes="96px" />

// 170px logo
<Image width={170} height={34} sizes="170px" />
```

## Common Issues

### "Image is larger than needed"
- Add/fix `sizes` attribute to match actual display dimensions

### "Increase compression"
- Lower `quality` prop (try 50-60)

### "Incorrect aspect ratio"
- Set width/height to match source image ratio

## Image Locations

- `/public/Assets/` - Logos, backgrounds, general images
- `/public/Product Images/` - Product photography

## Performance Targets

- Mobile Performance: 90+
- LCP: < 2.5s
- Image savings flagged by Lighthouse: < 50KB total
