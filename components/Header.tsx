'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const isES = pathname?.startsWith('/es');

  const switchLocale = () => {
    if (isES) {
      window.location.href = pathname?.replace('/es', '') || '/';
    } else {
      window.location.href = '/es' + (pathname || '');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="container py-3 flex items-center justify-between">
        {/* Logo + nombre */}
        <Link href={isES ? '/es' : '/'} className="flex items-center gap-3">
          <Image
            src="/tortamexicanafinal.jpg"                 // <— usa el nombre real del archivo que subiste
            alt="Jose’s Torta Mexicana logo"
            width={100}
            height={80}
            priority
            className="rounded-full object-contain shadow-sm ring-2 ring-amber-300/100"
          />
          <div className="hidden sm:block leading-tight">
            <h1 className="text-lg font-bold tracking-tight">Jose’s Torta Mexicana</h1>
            <p className="text-xs text-neutral-500">Authentic Mexican • Arlington, MA</p>
          </div>
        </Link>

        {/* Right side (botones / idioma) */}
        <div className="flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="h-9 rounded-full border px-3 text-sm hover:bg-neutral-50"
            aria-label="Switch language"
          >
            {isES ? 'EN' : 'ES'}
          </button>
          {/* deja aquí tus otros botones (Order Online, etc.) si ya estaban */}
        </div>
      </div>
    </header>
  );
}
