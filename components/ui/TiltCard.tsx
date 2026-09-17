'use client';

import { useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Pointer-driven 3D tilt. Deliberately shallow (max ~6°) so cards feel
 * like they sit on a real surface rather than flapping about.
 * Disabled for touch devices and for reduced-motion users.
 */
export function TiltCard({
  children,
  className,
  max = 6,
  lift = 14,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  lift?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMove = (e: React.PointerEvent) => {
    if (still || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setStyle({
      transform: `rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(
        2,
      )}deg) translateZ(${lift}px)`,
      transition: 'transform 120ms linear',
    });
  };

  const reset = () =>
    setStyle({ transform: 'rotateX(0) rotateY(0) translateZ(0)', transition: 'transform 600ms cubic-bezier(0.16,1,0.3,1)' });

  return (
    <div className="perspective">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={style}
        className={`preserve-3d will-change-transform ${className ?? ''}`}
      >
        {children}
      </div>
    </div>
  );
}
