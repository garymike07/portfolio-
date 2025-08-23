# Responsive Design System

This document outlines the comprehensive responsive design system implemented for the portfolio website to ensure optimal viewing experience across all devices and screen sizes.

## Overview

The responsive design system automatically detects the user's device type and viewport size, then arranges and styles the site content accordingly. It provides a seamless experience from mobile phones to large desktop screens.

## Features

### 🎯 Automatic Device Detection
- **Mobile**: < 768px (phones)
- **Tablet**: 768px - 1023px (tablets)
- **Desktop**: ≥ 1024px (desktops and laptops)

### 📱 Mobile-First Approach
- Design starts with mobile layout
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized typography and spacing

### 🔄 Dynamic Layout Adaptation
- Responsive grids that adjust columns automatically
- Flexible navigation that adapts to screen size
- Optimized content spacing for each breakpoint
- Smart hiding/showing of elements based on device

## Breakpoints

| Breakpoint | Screen Size | Device Type | Description |
|------------|-------------|-------------|-------------|
| `xs` | < 640px | Small phones | Single column, compact spacing |
| `sm` | 640px - 767px | Large phones | Single column, standard spacing |
| `md` | 768px - 1023px | Tablets | Two columns, medium spacing |
| `lg` | 1024px - 1279px | Small laptops | Three columns, standard spacing |
| `xl` | 1280px - 1535px | Large laptops | Three columns, expanded spacing |
| `2xl` | ≥ 1536px | Desktops | Four columns, maximum spacing |

## Components

### 1. useViewport Hook
```typescript
import { useViewport } from "@/hooks/useViewport";

const { isMobile, isTablet, isDesktop, breakpoint } = useViewport();
```

**Properties:**
- `isMobile`: boolean - true for mobile devices
- `isTablet`: boolean - true for tablet devices  
- `isDesktop`: boolean - true for desktop devices
- `breakpoint`: string - current breakpoint ('xs', 'sm', 'md', 'lg', 'xl', '2xl')
- `width`: number - current viewport width
- `height`: number - current viewport height
- `isLandscape`: boolean - true for landscape orientation
- `isPortrait`: boolean - true for portrait orientation

### 2. ResponsiveContainer
```typescript
import { ResponsiveContainer } from "@/components/ui/responsive-container";

<ResponsiveContainer padding="medium" maxWidth="xl">
  {/* Content */}
</ResponsiveContainer>
```

**Props:**
- `padding`: 'none' | 'small' | 'medium' | 'large'
- `maxWidth`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

### 3. ResponsiveGrid
```typescript
import { ResponsiveGrid } from "@/components/ui/responsive-grid";

<ResponsiveGrid 
  cols={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3, '2xl': 4 }}
  gap="medium"
>
  {/* Grid items */}
</ResponsiveGrid>
```

**Props:**
- `cols`: Object defining columns for each breakpoint
- `gap`: 'none' | 'small' | 'medium' | 'large'

## CSS Utilities

### Responsive Text Classes
```css
.text-responsive-xs    /* xs: 12px, sm: 14px, md: 16px */
.text-responsive-sm    /* sm: 14px, md: 16px, lg: 18px */
.text-responsive-base  /* base: 16px, lg: 18px, xl: 20px */
.text-responsive-lg    /* lg: 18px, xl: 20px, 2xl: 24px */
.text-responsive-xl    /* xl: 20px, 2xl: 24px, 3xl: 30px */
.text-responsive-2xl   /* 2xl: 24px, 3xl: 30px, 4xl: 36px */
.text-responsive-3xl   /* 3xl: 30px, 4xl: 36px, 5xl: 48px */
.text-responsive-4xl   /* 4xl: 36px, 5xl: 48px, 6xl: 60px */
.text-responsive-5xl   /* 5xl: 48px, 6xl: 60px, 7xl: 72px */
```

### Responsive Spacing Classes
```css
.padding-responsive    /* Adaptive padding based on screen size */
.margin-responsive     /* Adaptive margins based on screen size */
.gap-responsive        /* Adaptive gaps based on screen size */
.rounded-responsive    /* Adaptive border radius based on screen size */
```

### Device-Specific Classes
```css
.mobile-hidden         /* Hidden on mobile devices */
.tablet-hidden         /* Hidden on tablet devices */
.desktop-hidden        /* Hidden on desktop devices */
.mobile-text-center    /* Center text on mobile */
.touch-target          /* Minimum 44px touch target */
.touch-friendly        /* Touch-optimized padding */
```

## Implementation Examples

### Navigation Component
```typescript
const { isMobile, isTablet } = useViewport();

// Desktop: Full navigation
{!isMobile && !isTablet && (
  <div className="hidden lg:flex space-x-8">
    {/* All navigation items */}
  </div>
)}

// Tablet: Compact navigation + menu
{isTablet && (
  <div className="hidden md:flex lg:hidden space-x-4">
    {/* First 4 items + menu button */}
  </div>
)}

// Mobile: Menu button only
{isMobile && (
  <button className="md:hidden">
    <Menu />
  </button>
)}
```

### Responsive Grid Layout
```typescript
// Automatically adjusts columns based on screen size
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  {/* Grid items */}
</div>
```

### Responsive Typography
```typescript
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
  {/* Responsive heading */}
</h1>
```

## Mobile Optimizations

### Touch Interactions
- Minimum 44px touch targets
- Optimized button sizes for mobile
- Touch-friendly spacing and padding

### Performance
- Reduced animations on mobile devices
- Optimized image sizes
- Efficient re-renders based on viewport changes

### Accessibility
- Proper viewport meta tags
- Touch-friendly navigation
- Readable text sizes on all devices

## Testing

### Device Testing
- Test on actual mobile devices
- Use browser dev tools for different screen sizes
- Test both portrait and landscape orientations

### Breakpoint Testing
- Verify content flows correctly at each breakpoint
- Check that navigation adapts properly
- Ensure touch targets are adequate

### Performance Testing
- Monitor performance on mobile devices
- Check for layout shifts during resize
- Verify smooth transitions between breakpoints

## Best Practices

1. **Mobile-First**: Always start with mobile design
2. **Progressive Enhancement**: Add features for larger screens
3. **Touch-Friendly**: Ensure all interactive elements are touch-accessible
4. **Performance**: Optimize for mobile performance
5. **Testing**: Test on real devices, not just browser dev tools
6. **Consistency**: Maintain consistent spacing and typography across breakpoints

## Future Enhancements

- [ ] Add more granular breakpoints for ultra-wide screens
- [ ] Implement lazy loading for images based on viewport
- [ ] Add gesture support for mobile navigation
- [ ] Implement dark/light mode toggle with responsive considerations
- [ ] Add more responsive animations and transitions

---

This responsive design system ensures your portfolio looks great and functions perfectly on any device, providing an optimal user experience regardless of screen size or device type.