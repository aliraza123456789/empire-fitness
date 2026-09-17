'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const GoldDust = dynamic(() => import('./GoldDust'), { ssr: false });

/**
 * Loads the 3D layer only when it is worth it: pointer devices, a wide
 * enough screen, motion allowed, and after first paint so it never blocks
 * the hero or shifts layout.
 */
export function GoldDustLayer() {
  const still = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (still) return;
    const ok =
      window.matchMedia('(min-width: 1024px)').matches &&
      window.matchMedia('(pointer: fine)').matches;
    if (!ok) return;
    const id = window.setTimeout(() => setShow(true), 600);
    return () => window.clearTimeout(id);
  }, [still]);

  if (!show) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-20 opacity-70">
      <GoldDust />
    </div>
  );
}
