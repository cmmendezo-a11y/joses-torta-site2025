'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        <div className="flex items-center gap-3">
          <div aria-hidden className="h-9 w-9 rounded-xl bg-amber-300 flex items-center justify-center font-black">JT</div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">Jose’s Torta Mexicana</h1>
            <p className="text-xs text-neutral-500">Authentic Mexican • Arlington, MA</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#menu" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Menu</a>
          <a href="#about" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Our Story</a>
          <a href="#visit" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Visit</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={switchLocale} className="px-3 py-2 text-sm rounded-xl border border-neutral-300 hover:border-neutral-400 bg-white" aria-label="Toggle language">
            {isES ? 'EN' : 'ES'}
          </button>
          <a href="#order" className="hidden sm:inline-flex btn btn-primary">Order Online</a>
        </div>
      </div>
    </header>
  );
}
