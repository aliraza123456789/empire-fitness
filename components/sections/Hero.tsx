'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { hero } from '@/lib/content';
import { GoldDustLayer } from '@/components/three/GoldDustLayer';

/**
 * The page's one orchestrated moment: eight charcoal slats — the reception
 * wall — sweep open to reveal the room, and the wordmark settles into place.
 * Everything after this is quiet.
 */
const SLATS = 8;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '38%']);
  const copyFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      aria-label="Empire Fitness"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background Video / Media */}
      <motion.div className="absolute inset-0 z-0" style={still ? undefined : { y: imageY }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={hero.image.src}
          className="h-full w-full object-cover scale-105"
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic grade: warm centre light, heavy edges, readable base */}
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(120% 80% at 62% 38%, rgba(201,162,75,0.16) 0%, rgba(8,9,10,0.55) 42%, rgba(8,9,10,0.92) 100%), linear-gradient(180deg, rgba(8,9,10,0.82) 0%, rgba(8,9,10,0.35) 38%, rgba(8,9,10,0.97) 100%)',
        }}
      />
      <div aria-hidden className="absolute inset-0 z-10 bg-slats opacity-[0.35] mix-blend-overlay" />

      <GoldDustLayer />

      {/* The slat curtain */}
      {!still && (
        <div aria-hidden className="absolute inset-0 z-30 flex">
          {Array.from({ length: SLATS }).map((_, i) => (
            <motion.span
              key={i}
              className="slat-panel h-full flex-1"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              style={{ transformOrigin: i % 2 ? 'bottom' : 'top' }}
              transition={{
                duration: 1.15,
                delay: 0.15 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div
        className="shell relative z-40 px-5 pb-28 pt-32 sm:px-8"
        style={still ? undefined : { y: copyY, opacity: copyFade }}
      >
        <motion.p
          initial={still ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="gold-leaf mb-5 font-display text-[13px] font-bold uppercase tracking-[0.42em]"
        >
          {hero.wordmark}
        </motion.p>

        <motion.h1
          initial={still ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[16ch] text-[clamp(3.4rem,13vw,9.5rem)] uppercase leading-[0.84] text-bone"
          style={{ textShadow: '0 30px 70px rgba(0,0,0,0.65)' }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={still ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-7 max-w-[44ch] text-[1.05rem] leading-relaxed text-bone/80 sm:text-lg"
        >
          {hero.support}
        </motion.p>

        <motion.div
          initial={still ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.32 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <a href={hero.primaryCta.href} className="btn btn-gold">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn btn-ghost">
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to the next section"
        initial={still ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="absolute bottom-7 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-bone/45">Scroll</span>
        <span aria-hidden className="relative block h-12 w-px bg-bone/20">
          <motion.span
            className="absolute inset-x-0 top-0 block h-4 bg-gold"
            animate={still ? undefined : { y: [0, 32, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  );
}
