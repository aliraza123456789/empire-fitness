import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `The terms of membership at ${site.name}.`,
};

/** PLACEHOLDER — replace with policy reviewed by your legal advisor. */
export default function TermsPage() {
  return (
    <main id="main" className="section">
      <div className="shell max-w-3xl">
        <Link href="/" className="text-sm text-gold underline-offset-4 hover:underline">
          Back to Empire Fitness
        </Link>
        <h1 className="mt-8 text-[clamp(2.2rem,5vw,3.6rem)] uppercase leading-none">Terms & Conditions</h1>
        <div className="readable mt-8 space-y-5 text-muted">
          <p className="text-steel">Placeholder text — replace before launch.</p>
          <p>
            Membership runs month to month and may be cancelled with 30 days&rsquo; notice. Payments are
            taken on the same date each month.
          </p>
          <p>
            Members train at their own risk and agree to follow floor rules, re-rack their weights
            and follow reasonable instructions from staff.
          </p>
          <p>Opening hours may change on public holidays; we will post notice in advance.</p>
        </div>
      </div>
    </main>
  );
}
