import { NextResponse } from 'next/server';

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://josestorta.com/</loc></url>
  <url><loc>https://josestorta.com/es</loc></url>
</urlset>`;
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}
