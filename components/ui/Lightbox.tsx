'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Img } from '@/lib/content';

/**
 * Fullscreen image viewer. Traps focus, closes on Escape or backdrop click,
 * and moves with the arrow keys.
 */
export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: Img[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  const step = useCallback(
    (d: number) => {
      if (index === null) return;
      onIndex((index + d + items.length) % items.length);
    },
    [index, items.length, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose, step]);

  if (!open || index === null) return null;
  const item = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image ${index + 1} of ${items.length}`}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center border border-bone/15 text-bone transition-colors hover:border-gold hover:text-gold"
      >
        <X size={20} aria-hidden />
      </button>

      <button
        onClick={() => step(-1)}
        aria-label="Previous image"
        className="absolute left-3 flex h-12 w-12 items-center justify-center border border-bone/15 text-bone transition-colors hover:border-gold hover:text-gold sm:left-8"
      >
        <ChevronLeft size={22} aria-hidden />
      </button>

      <figure className="max-h-full w-full max-w-5xl">
        <div className="relative mx-auto" style={{ aspectRatio: `${item.w} / ${item.h}` }}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain"
            priority
          />
        </div>
        <figcaption className="mt-4 text-center text-sm text-muted">
          {item.alt} · {index + 1} of {items.length}
        </figcaption>
      </figure>

      <button
        onClick={() => step(1)}
        aria-label="Next image"
        className="absolute right-3 flex h-12 w-12 items-center justify-center border border-bone/15 text-bone transition-colors hover:border-gold hover:text-gold sm:right-8"
      >
        <ChevronRight size={22} aria-hidden />
      </button>
    </div>
  );
}
