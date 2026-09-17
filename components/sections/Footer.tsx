import { contact, legal, nav, site } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink">
      <span aria-hidden className="block h-px w-full bg-goldleaf opacity-60" />

      <div className="shell px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="gold-leaf font-display text-lg font-bold uppercase tracking-[0.22em]">
              {site.name}
            </p>
            <p className="readable mt-4 text-sm leading-relaxed text-muted">{site.description}</p>
            <div className="mt-6 flex gap-2">
              {contact.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="border border-bone/15 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-bone/70 transition-colors hover:border-gold hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-bone">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted underline-offset-4 transition-colors hover:text-gold-hi hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-bone">
              Hours
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {contact.hours.map((h) => (
                <li key={h.days}>
                  <span className="block text-bone/80">{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-bone">
              Visit
            </h2>
            <address className="mt-4 space-y-1 text-sm not-italic text-muted">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 space-y-1 text-sm">
              <a
                href={contact.phoneHref}
                className="block text-muted underline-offset-4 transition-colors hover:text-gold-hi hover:underline"
              >
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="block text-muted underline-offset-4 transition-colors hover:text-gold-hi hover:underline"
              >
                {contact.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bone/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-steel">
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legal.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs text-steel underline-offset-4 transition-colors hover:text-gold hover:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
