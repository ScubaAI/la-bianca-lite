# Project Map - La Bianca Lite

## Overview
Landing page for La Bianca Tropical - Italian restaurant with Bitcoin Lightning acceptance.

## Status (as of 2026-06-02)
- Project initialized with Next.js, Tailwind CSS, Framer Motion, next-themes.
- Dependencies installed (package.json present).
- Environment example present.
- Git repository initialized with remote origin set to https://github.com/ScubaAI/la-bianca-lite.git
- Current branch: main

## Directory Structure
- /app: Root layout, main page, and providers (theme).
- /components: Reusable UI components.
  - /landing: Landing page sections (HeroSection, BookingSection, LightningQR, TrustBadge, Cartelera).
  - /ui: Shared UI components (ArcadeButton).
  - /layout: Layout components (Navbar, Footer).
- /public: Static assets.
- /lib: Utility functions.
- /docs: Documentation (this folder).

## Key Files Created
- components/ui/arcade-button.tsx: Animated arcade-style button with hover/tap effects.
- components/landing/LightningQR.tsx: Component to display Lightning Network QR code with wallet address.
- components/landing/Cartelera.tsx: Events calendar section.
- components/layout/Navbar.tsx: Fixed top navigation with language selector (ES/IT/EN).
- app/providers.tsx: Theme provider wrapper using next-themes (ready for use).
- components/layout/Footer.tsx: Responsive footer with branding, location links, contact/social, and copyright.
- Updated components/landing/HeroSection.tsx: Background images changed to Unsplash placeholders (day: rustic restaurant, night: party/lights).

## Configuration Files
- next.config.mjs: Next.js configuration.
- tailwind.config.ts: Tailwind CSS configuration.
- .env.local.example: Example environment variables.

## Scripts (from package.json)
- npm install: Install dependencies.
- npm run dev: Start development server.
- npm run build: Build for production.
- npm start: Start production server.

## Deployment
Ready for deployment on Vercel.

## Next Steps
- Integrate providers.tsx into layout.tsx to enable theme switching.
- Replace placeholder images in public/images/ with actual assets.
- Update environment variables (.env.local) with Bitcoin wallet address and Cal.com link.
- Customize content in landing page sections.
- Implement i18n logic for language selector in Navbar.
- Deploy.
