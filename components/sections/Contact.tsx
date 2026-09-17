'use client';

import { useState } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'w-full border border-bone/15 bg-ink/60 px-4 py-3.5 text-[15px] text-bone placeholder:text-steel transition-colors duration-300 focus:border-gold focus:outline-none';
const label = 'mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Something went wrong.');
      setStatus('sent');
      setMessage('Thanks — we have your message and will reply within one working day.');
      form.reset();
    } catch (err) {
      setStatus('error');
      setMessage(
        err instanceof Error ? err.message : 'The message did not send. Please try again, or call us.',
      );
    }
  }

  return (
    <section id="contact" className="section">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading title={contact.heading} intro={contact.intro} />

          <dl className="mt-10 space-y-7">
            <div className="flex gap-4">
              <MapPin size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
              <div>
                <dt className={label}>Address</dt>
                <dd className="text-[15px] leading-relaxed text-bone/85">
                  {contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
              <div>
                <dt className={label}>Phone</dt>
                <dd>
                  <a
                    href={contact.phoneHref}
                    className="text-[15px] text-bone/85 underline-offset-4 transition-colors hover:text-gold-hi hover:underline"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
              <div>
                <dt className={label}>Email</dt>
                <dd>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[15px] text-bone/85 underline-offset-4 transition-colors hover:text-gold-hi hover:underline"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
              <div>
                <dt className={label}>Opening hours</dt>
                <dd className="space-y-1 text-[15px] text-bone/85">
                  {contact.hours.map((h) => (
                    <div key={h.days} className="flex gap-4">
                      <span className="w-40 text-muted">{h.days}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </dd>
              </div>
            </div>
          </dl>

          {/* Map */}
          <div className="surface mt-10 aspect-[16/9] overflow-hidden">
            {contact.mapEmbedUrl ? (
              <iframe
                src={contact.mapEmbedUrl}
                title="Empire Fitness location on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale"
              />
            ) : (
              <div className="slat-panel flex h-full w-full flex-col items-center justify-center gap-2 text-center">
                <MapPin size={22} className="text-gold" aria-hidden />
                <p className="text-sm text-muted">
                  Map placeholder — add your Google Maps embed URL
                  <br />
                  to <code className="text-bone/70">contact.mapEmbedUrl</code>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="surface p-7 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className={label}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={field}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className={label}>
                  Phone <span className="normal-case tracking-normal text-steel">(optional)</span>
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="+92 …" />
              </div>
              <div>
                <label htmlFor="interest" className={label}>
                  I&rsquo;m interested in
                </label>
                <select id="interest" name="interest" className={field} defaultValue="Membership">
                  <option>Membership</option>
                  <option>Personal training</option>
                  <option>A walkthrough of the gym</option>
                  <option>Something else</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className={label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`${field} resize-y`}
                placeholder="Tell us what you're training for."
              />
            </div>

            {/* Honeypot — hidden from people, catches basic bots */}
            <div className="hidden" aria-hidden>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn btn-gold mt-7 w-full disabled:opacity-60">
              {status === 'sending' ? 'Sending…' : 'Get in touch'}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`mt-4 min-h-[1.25rem] text-sm ${
                status === 'error' ? 'text-red-300' : 'text-gold-hi'
              }`}
            >
              {message}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
