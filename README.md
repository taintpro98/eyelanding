# ALumiEye Landing Page

A modern, dark-themed landing page for ALumiEye — an AI-powered trading intelligence platform.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** components

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy — no additional configuration required

The build output is static and server-rendered for optimal performance.

## Project Structure

```
/app
  layout.tsx    # Root layout with SEO metadata
  page.tsx      # Landing page
  globals.css   # Global styles
/components
  navbar.tsx
  hero.tsx
  features.tsx
  product-preview.tsx
  pricing.tsx
  faq.tsx
  cta.tsx
  footer.tsx
```
