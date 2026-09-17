'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { about, photos } from '@/lib/content';
import { ImageReveal, Reveal } from '@/components/ui/Reveal';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const backY = useTransform(scrollYProgress, [0, 1], ['-4%', '6%']);
  const frontY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section id="about" className="section">
      <div className="shell grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        {/* Layered composition */}
        <div ref={ref} className="relative order-2 lg:order-1">
          <motion.div style={still ? undefined : { y: backY }}>
            <ImageReveal className="border border-bone/10 shadow-lift">
              <div className="relative aspect-[4/3]">
                <Image
                  src={about.image.src}
                  alt={about.image.alt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover"
                  loading="lazy"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                />
              </div>
            </ImageReveal>
          </motion.div>

          {/* Smaller plate, offset forward */}
          <motion.div
            style={still ? undefined : { y: frontY }}
            className="absolute -bottom-10 -right-4 hidden w-[42%] sm:block lg:-right-10"
          >
            <ImageReveal className="border border-gold/25 shadow-lift" delay={0.15}>
              <div className="relative aspect-[3/4]">
                <Image
                  src={photos.accessories.src}
                  alt={photos.accessories.alt}
                  fill
                  sizes="30vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </ImageReveal>
          </motion.div>

          {/* Gold accent rule running behind the composition */}
          <span
            aria-hidden
            className="absolute -left-4 top-8 hidden h-[62%] w-px bg-gradient-to-b from-gold-hi via-gold/40 to-transparent lg:block"
          />
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <div
              className="hairline mb-7 w-24"
              aria-hidden
              style={{ background: 'linear-gradient(90deg,#F0D89B,rgba(201,162,75,0))' }}
            />
            <h2 className="text-[clamp(2.6rem,6.4vw,5rem)] uppercase leading-[0.9] text-bone">
              {about.heading}
            </h2>
          </Reveal>

          <div className="readable mt-7 space-y-5 text-[1.04rem] leading-relaxed text-muted">
            {about.body.map((p, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Floating capability card */}
          <Reveal delay={0.1}>
            <dl className="surface mt-10 grid grid-cols-1 gap-px overflow-hidden bg-bone/5 sm:grid-cols-2">
              {about.pillars.map((pillar) => (
                <div key={pillar.title} className="group bg-ink/70 p-6 transition-colors duration-500 hover:bg-graphite/60">
                  <dt className="font-display text-base font-bold uppercase tracking-[0.08em] text-gold-hi">
                    {pillar.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{pillar.note}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
