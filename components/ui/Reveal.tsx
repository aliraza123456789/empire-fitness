'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * A single, quiet entrance. Used sparingly — section openers and image
 * reveals only, never on every element — so motion still means something.
 */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const still = useReducedMotion();
  if (still) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Image reveal: the photograph is uncovered by a charcoal panel sliding
 * away, echoing the slat wall opening. Falls back to a plain image.
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const still = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      {children}
      {!still && (
        <motion.span
          aria-hidden
          className="slat-panel absolute inset-0 z-10"
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          style={{ transformOrigin: 'top' }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </div>
  );
}
