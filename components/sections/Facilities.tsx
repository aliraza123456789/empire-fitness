'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { facilities } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltCard } from '@/components/ui/TiltCard';

export function Facilities() {
  return (
    <section id="facilities" className="section border-y border-bone/8 bg-slat/40">
      <div className="shell">
        <SectionHeading
          title="The floor"
          intro="Six zones, each built for a specific kind of work — and enough space between them that you are never waiting on somebody else's set."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i, 3) * 0.06}>
              <TiltCard max={5} lift={18}>
                <article className="group relative h-full overflow-hidden border border-bone/10 bg-ink/60 transition-colors duration-500 hover:border-gold/45">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      className="object-cover transition-transform duration-[900ms] ease-empire group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent"
                    />
                  </div>

                  <div className="relative -mt-14 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl uppercase leading-none tracking-tight text-bone">
                        {item.title}
                      </h3>
                      <span
                        aria-hidden
                        className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-bone/20 text-bone/60 transition-all duration-500 ease-empire group-hover:border-gold group-hover:text-gold"
                      >
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <span
                      aria-hidden
                      className="mt-4 block h-px w-10 origin-left bg-gold transition-transform duration-500 ease-empire group-hover:scale-x-[3.4]"
                    />
                    <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
