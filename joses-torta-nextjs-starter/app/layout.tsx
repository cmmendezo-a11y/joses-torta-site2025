import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jose's Torta Mexicana — Arlington, MA",
  description: 'Authentic Mexican food — tortas, tacos, and more. Full service after 4 PM.',
  metadataBase: new URL('https://josestorta.com'),
  openGraph: {
    title: "Jose's Torta Mexicana — Arlington, MA",
    description: 'Authentic Mexican food — tortas, tacos, and more.',
    url: 'https://josestorta.com',
    siteName: "Jose's Torta Mexicana",
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
