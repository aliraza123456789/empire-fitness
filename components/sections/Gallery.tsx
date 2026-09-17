'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Expand } from 'lucide-react';
import { gallery } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Lightbox } from '@/components/ui/Lightbox';

/** Masonry-ish grid: a few tiles span two rows or columns to break the grid. */
const span = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  'sm:row-span-2',
  'sm:col-span-2',
  '',
  '',
  'sm:row-span-2',
  '',
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="section">
      <div className="shell">
        <SectionHeading
          title="Inside the club"
          intro="Photographs taken on the floor — no renders, no stock. Select any image to view it full screen."
        />

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal key={img.src + i} delay={Math.min(i, 5) * 0.05} className={span[i] ?? ''}>
              <button
                onClick={() => setOpen(i)}
                aria-label={`View larger: ${img.alt}`}
                className="group relative h-full w-full overflow-hidden border border-bone/10 transition-colors duration-500 hover:border-gold/50"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 48vw, 26vw"
                  className="object-cover transition-transform duration-[900ms] ease-empire group-hover:scale-[1.07]"
                  loading="lazy"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-ink/45 transition-colors duration-500 group-hover:bg-ink/15"
                />
                <span
                  aria-hidden
                  className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center border border-gold/60 bg-ink/70 text-gold opacity-0 transition-all duration-500 ease-empire group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Expand size={14} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox items={gallery} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </section>
  );
}
