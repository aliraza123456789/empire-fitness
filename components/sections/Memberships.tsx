'use client';

import { Check } from 'lucide-react';
import { memberships } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Memberships() {
  return (
    <section id="memberships" className="section">
      <div className="shell">
        <SectionHeading title={memberships.heading} intro={memberships.intro} align="center" />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {memberships.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.07}>
              <article
                className={`relative flex h-full flex-col p-8 transition-transform duration-500 ease-empire sm:p-10 ${
                  plan.featured
                    ? 'slat-panel border border-gold/45 lg:-mt-5 lg:mb-5 lg:shadow-lift'
                    : 'surface hover:-translate-y-1'
                }`}
              >
                {plan.featured && (
                  <>
                    <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-goldleaf" />
                    <span className="absolute -top-3 left-8 bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                      Most chosen
                    </span>
                  </>
                )}

                <h3 className="font-display text-3xl uppercase tracking-tight text-bone">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{plan.summary}</p>

                <p className="mt-7 flex items-baseline gap-2">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted">
                    {memberships.currency}
                  </span>
                  <span
                    className={`font-display text-5xl font-bold tracking-tightest ${
                      plan.featured ? 'gold-leaf' : 'text-bone'
                    }`}
                  >
                    {plan.price}
                  </span>
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{plan.period}</p>

                <span aria-hidden className="my-7 block h-px w-full bg-bone/10" />

                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-bone/80">
                      <Check size={15} className="mt-[3px] shrink-0 text-gold" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn mt-9 w-full ${plan.featured ? 'btn-gold' : 'btn-ghost'}`}
                  aria-label={`Join now on the ${plan.name} plan`}
                >
                  Join now
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-xs uppercase tracking-[0.16em] text-steel">
            Placeholder pricing — replace in lib/content.ts
          </p>
        </Reveal>
      </div>
    </section>
  );
}
