# Project Map - La Bianca Lite

## Overview
Landing page for La Bianca Tropical - Italian restaurant with Bitcoin Lightning acceptance. Built using Next.js (App Router), Tailwind CSS, Framer Motion, and next-themes.

## Status (as of 2026-06-29)
- **Design System v1.1** implemented ("Tropical Luxe Salsa Edition"), specifying brand colors (Terracota, Verde Selva, Amber Salsa, Rosa Guayaba), custom typography (Playfair Display, Cormorant Garamond, Inter, Space Grotesk, Anton), and glassmorphism styling.
- **Dynamic Theme Synchronization** configured using a synchronous inline script in [layout.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/app/layout.tsx) to prevent FOUC (flash of unstyled content) and a real-time watcher ([ThemeTimeWatcher.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/layout/ThemeTimeWatcher.tsx)) that updates the theme automatically based on the time of day (Sunset 18:30, Sunrise 06:00) or user toggle.
- **Responsive Landing Page** sections fully integrated: Hero, Menu, Bookings, Events Billboard (Cartelera), Payments (LightningQR), Trust Ratings, and Footer.
- **Native SVG QR Generator** ([TropicalQR.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/TropicalQR.tsx)) implemented, dynamically styling the QR code color scheme (foreground/background) based on the active day/night theme.
- **Blink POS & Wallet Integration** ready with fallback options (On-chain, Lightning Address, Mercado Pago) and direct links to download Bitcoin wallets (with YouTube educational video integration via [tutorial-button.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/tutorial-button.tsx)).
- **Production-Ready**: Builds cleanly and is configured for deployment on Vercel.

## Directory Structure
- [/app](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/app):
  - [globals.css](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/app/globals.css): Global styles, custom animations (`steam-rise`, `palm-sway`, `salsa-shine`, `pulse-slow`, `gradient-rotate`), and CSS design variables.
  - [layout.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/app/layout.tsx): Root layout with optimized Google font loading, inline anti-flash script, and theme providers.
  - [page.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/app/page.tsx): Main landing page stitching all sections together.
  - [providers.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/app/providers.tsx): Theme configuration wrapper using `next-themes`.
- [/components](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components):
  - `/landing`: Main sections of the landing page:
    - [HeroSection.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/landing/HeroSection.tsx): Intro card with high-readability glassmorphic container and Unsplash day/night background images.
    - [MenuSection.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/landing/MenuSection.tsx): Food menu filter interface loading from `menu.json` with active state subcategory checks.
    - [BookingSection.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/landing/BookingSection.tsx): Embedded inline scheduler using Cal.com.
    - [LightningQR.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/landing/LightningQR.tsx): Multi-tier payment portal with address copy haptic feedback.
    - [TrustBadge.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/landing/TrustBadge.tsx): Reviews and TripAdvisor integration.
  - `/layout`: Layout containers:
    - [Navbar.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/layout/Navbar.tsx): Fixed navigation with backdrop blurring, responsive logo blending, and language selector dropdown.
    - [Footer.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/layout/Footer.tsx): Responsive footer featuring maps, social links (corrected Instagram paths and official TikTok SVGs), and Bull Bitcoin sponsor.
    - [ThemeTimeWatcher.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/layout/ThemeTimeWatcher.tsx): Timer synchronizing dark mode based on hours of the day.
  - `/sections`:
    - [Cartelera.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/sections/Cartelera.tsx): Event listing container.
  - `/ui`: Atomic and reusable components:
    - [arcade-button.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/arcade-button.tsx): Animated button with hover/tap effects.
    - [EventCard.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/EventCard.tsx): Event ticket block.
    - [glass-card.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/glass-card.tsx): Base day/night glass card structure.
    - [MenuCategoryNav.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/MenuCategoryNav.tsx): Navigation pill filter for the food menu.
    - [MenuItemCard.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/MenuItemCard.tsx): Individual item block with details and tags.
    - [theme-toggle.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/theme-toggle.tsx): Manual day/night switcher icon button.
    - [TripAdvisorBadge.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/TripAdvisorBadge.tsx): Responsive review badge component.
    - [TropicalQR.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/TropicalQR.tsx): Native themed SVG QR generator.
    - [tutorial-button.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/tutorial-button.tsx): Red YouTube-style animated link button.
- [/data](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/data):
  - [menu.json](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/data/menu.json): Database registry for all menu items.
- [/docs](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/docs):
  - [DESIGN_SYSTEM.md](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/docs/DESIGN_SYSTEM.md): Tokens, typography, gradients, shadows, and UI styling guidelines.
  - [MANTENIMIENTO.md](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/docs/MANTENIMIENTO.md): Detailed changelog of sprints, bug fixes, testing checklists, and technical notes.
  - [map.md](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/docs/map.md): High-level structure map (this file).
- [/public](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/public): Static media resources and textures.

## Key Files Created/Updated
- [DESIGN_SYSTEM.md](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/docs/DESIGN_SYSTEM.md): Core styling rules and colors.
- [MANTENIMIENTO.md](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/docs/MANTENIMIENTO.md): Registry of all sprints, bug fixes, and modifications.
- [TropicalQR.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/TropicalQR.tsx): Adapts QR foreground and background to day/night theme colors.
- [tutorial-button.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/ui/tutorial-button.tsx): YouTube animated education button.
- [ThemeTimeWatcher.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/layout/ThemeTimeWatcher.tsx): Live time-based dark/light theme switching.
- [Cartelera.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/sections/Cartelera.tsx): Refactored and modularized calendar system.

## Configuration Files
- [next.config.js](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/next.config.js): Next.js configuration.
- [tailwind.config.ts](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/tailwind.config.ts): Tailwind CSS config with custom variables.
- [postcss.config.js](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/postcss.config.js): PostCSS configuration.
- [.env.local.example](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/.env.local.example) / [.env.example](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/.env.example): Example environment variables.

## Scripts (from package.json)
- `npm run dev`: Starts the local development server.
- `npm run build`: Generates the production-optimized build.
- `npm run start`: Runs the built production server.
- `npm run lint`: Checks for lint issues.

## Next Steps
- **Language Localization**: Implement functional i18n logic using a framework or state manager behind the dropdown selector in [Navbar.tsx](file:///c:/Users/PAV/Desktop/Aceptabitcoin/la-bianca-lite/components/layout/Navbar.tsx).
- **API Blink Integration**: Migrate static QR/addresses to dynamic payment requests (SaaS tier).
- **Asset Replacement**: Swap out current Unsplash placeholder URLs with local web-optimized assets (`.webp` or `.avif`).
- **Click Tracking**: Add analytics events to tracking targets such as social networks, Booking, and YouTube tutorials.
