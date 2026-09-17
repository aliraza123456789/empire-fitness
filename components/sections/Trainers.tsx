'use client';

import Image from 'next/image';
import { Instagram, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { trainers } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

/**
 * Trainer cards. Until real portraits are supplied, each card renders a
 * typographic monogram on the slat wall rather than a stock stranger —
 * honest, and it keeps the brand consistent.
 */
export function Trainers() {
  const still = useReducedMotion();

  return (
    <section id="trainers" className="section border-y border-bone/8 bg-slat/40">
      <div className="shell">
        <SectionHeading
          title="The coaches"
          intro="Qualified coaches who write programmes, watch your sets and adjust them. Replace this placeholder team with your own in lib/content.ts."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <motion.article
              key={i}
              initial={still ? false : { opacity: 0, x: 34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-bone/10 bg-ink/60 transition-colors duration-500 hover:border-gold/45"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {t.image ? (
                  <Image
                    src={t.image.src}
                    alt={t.image.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
                    className="object-cover grayscale transition-all duration-[900ms] ease-empire group-hover:scale-[1.05] group-hover:grayscale-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="slat-panel flex h-full w-full items-center justify-center">
                    <span
                      aria-hidden
                      className="gold-leaf font-display text-6xl font-bold tracking-tightest"
                    >
                      {t.initials}
                    </span>
                    <span className="sr-only">Portrait photograph to be added</span>
                  </div>
                )}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl uppercase tracking-tight text-bone">{t.name}</h3>
                <p className="mt-1 text-[13px] text-gold-hi">{t.specialty}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.bio}</p>

                <div className="mt-5 flex gap-2">
                  <a
                    href={t.socials.instagram}
                    aria-label={`${t.name} on Instagram`}
                    className="flex h-10 w-10 items-center justify-center border border-bone/15 text-bone/65 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Instagram size={16} aria-hidden />
                  </a>
                  <a
                    href={t.socials.email}
                    aria-label={`Email ${t.name}`}
                    className="flex h-10 w-10 items-center justify-center border border-bone/15 text-bone/65 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Mail size={16} aria-hidden />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
