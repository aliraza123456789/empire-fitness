import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

/**
 * Section opener: a gold hairline that runs into the heading, mirroring
 * the brushed strip under the reception lettering.
 */
export function SectionHeading({
  title,
  intro,
  align = 'left',
  id,
}: {
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  id?: string;
}) {
  const centred = align === 'center';
  return (
    <Reveal className={centred ? 'text-center' : ''}>
      <div
        className={`hairline mb-7 w-24 ${centred ? 'mx-auto' : ''}`}
        aria-hidden
        style={centred ? undefined : { background: 'linear-gradient(90deg,#F0D89B,rgba(201,162,75,0))' }}
      />
      <h2
        id={id}
        className="text-[clamp(2.4rem,6vw,4.6rem)] uppercase leading-[0.92] text-bone"
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`readable mt-6 text-[1.02rem] leading-relaxed text-muted ${
            centred ? 'mx-auto' : ''
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
