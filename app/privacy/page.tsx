import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} handles the information you share with us.`,
};

/** PLACEHOLDER — replace with policy reviewed by your legal advisor. */
export default function PrivacyPage() {
  return (
    <main id="main" className="section">
      <div className="shell max-w-3xl">
        <Link href="/" className="text-sm text-gold underline-offset-4 hover:underline">
          Back to Empire Fitness
        </Link>
        <h1 className="mt-8 text-[clamp(2.2rem,5vw,3.6rem)] uppercase leading-none">Privacy Policy</h1>
        <div className="readable mt-8 space-y-5 text-muted">
          <p className="text-steel">Placeholder text — replace before launch.</p>
          <p>
            We collect only what we need to answer your enquiry and manage your membership: your
            name, contact details and what you tell us about your training.
          </p>
          <p>
            We do not sell your information. We keep it for as long as you are a member, and for a
            reasonable period afterwards for accounting purposes.
          </p>
          <p>
            To see, correct or delete the information we hold about you, email us and we will action
            it.
          </p>
        </div>
      </div>
    </main>
  );
}
