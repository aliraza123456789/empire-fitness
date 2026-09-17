'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { finalCta } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.div className="absolute inset-0 -z-10" style={still ? undefined : { y }}>
        <Image
          src={finalCta.image.src}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="scale-110 object-cover"
          loading="lazy"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(90% 70% at 50% 45%, rgba(201,162,75,0.2) 0%, rgba(8,9,10,0.82) 45%, rgba(8,9,10,0.97) 100%)',
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-slats opacity-30 mix-blend-overlay" />

      <div className="shell px-5 py-32 text-center sm:px-8 md:py-44">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] text-[clamp(2.6rem,8vw,6.2rem)] uppercase leading-[0.88] text-bone">
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-7 max-w-[46ch] text-lg text-bone/75">{finalCta.support}</p>
          <a href={finalCta.cta.href} className="btn btn-gold mt-11">
            {finalCta.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
