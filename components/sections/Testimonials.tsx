'use client';

import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section border-y border-bone/8 bg-slat/40"
    >
      <div className="shell">
        <SectionHeading id="testimonials-heading" title={testimonials.heading} align="center" />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="surface relative h-full p-8 pt-12">
                <Quote
                  aria-hidden
                  size={54}
                  className="absolute left-6 top-5 -scale-x-100 text-gold/18"
                  strokeWidth={1.25}
                />
                <blockquote className="relative text-[1.02rem] leading-relaxed text-bone/85">
                  {t.quote}
                </blockquote>
                <span aria-hidden className="my-6 block h-px w-12 bg-gold/70" />
                <figcaption>
                  <span className="block font-display text-base font-bold uppercase tracking-[0.1em] text-bone">
                    {t.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{t.goal}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-xs uppercase tracking-[0.16em] text-steel">
            {testimonials.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
