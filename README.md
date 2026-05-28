# La Bianca Lite

A landing page for Bianca's baking classes, hosted on Vercel.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file and fill in the values:

```bash
cp .env.local.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

- `app/`: Contains the root layout and main page.
- `components/`: Reusable UI components and landing page sections.
- `public/`: Static assets like images and textures.
- `lib/`: Utility functions.
- `styles/`: Global CSS and Tailwind configuration.

## Customization

- Edit `tailwind.config.ts` to adjust colors, fonts, and animations.
- Update the content in `app/page.tsx` and the component files in `components/landing/` to customize the landing page.
- Replace the placeholder images in `public/images/` with your own assets.
- Update the Bitcoin wallet address and Cal.com link in `.env.local`.

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for production
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management