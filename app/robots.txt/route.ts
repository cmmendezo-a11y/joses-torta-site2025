import { NextResponse } from 'next/server';

export function GET() {
  const content = `User-agent: *\nAllow: /\nSitemap: https://josestorta.com/sitemap.xml`;
  return new NextResponse(content, { headers: { 'Content-Type': 'text/plain' } });
}
