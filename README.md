# Jose's Torta Mexicana — Next.js Starter (App Router + Tailwind)

## Quick Start
1) Install Node.js (LTS) from https://nodejs.org  
2) In a terminal:
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
- Push this folder to a new GitHub repo or import directly in Vercel.
- In Vercel: **Add New → Project → Import** and select the repo/folder.
- Build command: `next build` (default). Output: `Next.js`.
- After first deploy, add your domain in **Settings → Domains** (josestorta.com) and follow DNS instructions in GoDaddy.

## Customize
- `app/page.tsx` (English) and `app/es/page.tsx` (Spanish)
- Update address/phone/email, delivery links, and real photos.
- Edit `next.config.js` locales if needed.
- Tailwind styles live in `app/globals.css`.

## SEO
- Basic OG tags set in `app/layout.tsx`
- `app/robots.txt/route.ts` and `app/sitemap.xml/route.ts` included.

## Notes
- Images currently load from Unsplash; replace with your own for best SEO.
- Add Google Analytics 4 by inserting your script in `app/layout.tsx`.
- For PDFs / QR menus, upload to `/public` and link them in the Menu section.
