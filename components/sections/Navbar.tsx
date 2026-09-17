'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '@/lib/content';

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-empire ${
        solid
          ? 'border-b border-bone/10 bg-ink/88 backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent'
      }`}
      style={{ height: 'var(--nav-h)' }}
    >
      <nav
        aria-label="Primary"
        className="shell flex h-full items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="Empire Fitness, home">
          <span
            aria-hidden
            className="block h-7 w-[3px] bg-goldleaf transition-transform duration-500 ease-empire group-hover:scale-y-125"
          />
          <span className="gold-leaf font-display text-[15px] font-bold uppercase tracking-[0.26em]">
            Empire Fitness
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative py-2 text-[13px] font-medium tracking-[0.06em] text-bone/75 transition-colors duration-300 hover:text-gold-hi after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#memberships" className="btn btn-gold hidden !min-h-[44px] !px-6 sm:inline-flex">
            Join now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-12 w-12 items-center justify-center border border-bone/15 text-bone transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — a slat panel that slides down over the page */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`slat-panel fixed inset-x-0 top-[var(--nav-h)] z-40 origin-top overflow-hidden border-b border-gold/25 transition-all duration-500 ease-empire lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-bone/8 last:border-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-2xl uppercase tracking-tight text-bone transition-colors hover:text-gold-hi"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-8">
          <a
            href="#memberships"
            onClick={() => setOpen(false)}
            className="btn btn-gold w-full"
          >
            Join now
          </a>
        </div>
      </div>
    </header>
  );
}
