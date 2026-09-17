# Empire Fitness

A production-ready website for Empire Fitness, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion and React Three Fiber.

The visual identity is taken from the club itself: the fluted charcoal slat wall behind reception, the brushed gold lettering mounted on it, and the concrete-and-graphite shell of the building. The slat wall is the site's signature device — it opens the hero, textures the sections, backs the mobile menu, and closes the footer.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

Node 18.17 or newer.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically — no settings to change, no environment variables required.
3. Before going live, set your real domain in `site.url` inside `lib/content.ts`. That value drives the canonical URL, Open Graph tags, `sitemap.xml` and `robots.txt`.

---

## Editing the site

**Everything you'll want to change lives in one file: `lib/content.ts`.**

Text, prices, plan features, opening hours, phone, email, address, navigation labels, social links and the image used by each section all come from there. No component edits needed.

Anything invented for layout purposes is commented `PLACEHOLDER`:

| What | Where | Replace with |
|---|---|---|
| Pricing | `memberships.plans[].price` | Your real rates |
| Trainers | `trainers[]` | Real names, specialities, bios and portraits |
| Testimonials | `testimonials.items[]` | Real member quotes, with permission |
| Address / phone / email | `contact` | Your real details |
| Google Map | `contact.mapEmbedUrl` | Your Maps embed URL (empty shows a styled placeholder) |
| Domain | `site.url` | Your live domain |

### Swapping photographs

1. Drop the file into `public/images/`.
2. Point at it in `lib/content.ts`:

```ts
strengthRack: {
  src: '/images/your-new-photo.webp',
  alt: 'Describe what is actually in the photograph',
  w: 1600,
  h: 1200,
},
```

`w` and `h` are the intrinsic dimensions — they reserve space so the page never jumps while images load. `alt` is read aloud by screen readers and indexed by Google, so describe the scene rather than repeating "gym photo".

### Adding trainer portraits

Set `image` on a trainer from `null` to `{ src, alt, w, h }`. Until you do, the card shows a gold monogram on the slat wall instead of a stock photo of a stranger.

### Making the contact form send email

`app/api/contact/route.ts` already validates submissions, blocks bots with a honeypot and returns proper status codes. It currently logs the enquiry. Uncomment the provider block and add your key (Resend, SendGrid, Postmark, or a CRM webhook) to start receiving it.

---

## How it's put together

```
app/
  layout.tsx        fonts, SEO metadata, Open Graph, HealthClub structured data
  page.tsx          section order
  globals.css       design tokens, slat texture, gold leaf, focus, reduced motion
  api/contact/      form endpoint with server-side validation
  sitemap.ts        generated sitemap.xml
  robots.ts         generated robots.txt
  privacy/, terms/  placeholder legal pages
components/
  sections/         Navbar, Hero, About, Facilities, Memberships,
                    Trainers, Gallery, Testimonials, FinalCta, Contact, Footer
  ui/               Reveal, ImageReveal, SectionHeading, TiltCard, Lightbox
  three/            GoldDust (R3F particles) + GoldDustLayer (conditional loader)
lib/content.ts      all site content
```

### Design tokens

Defined in `tailwind.config.ts`, sampled from the reception photograph:

| Token | Hex | Where it came from |
|---|---|---|
| `ink` | `#08090A` | matte black page base |
| `slat` | `#14171A` | the fluted wall |
| `graphite` | `#22262A` | raised surfaces |
| `gold` | `#C9A24B` | the sign lettering |
| `gold-hi` | `#F0D89B` | its lit edge |
| `bone` | `#EFEAE1` | warm white body text |

Gold is restricted to hairlines, buttons, icons, focus rings and one plan badge. Nothing is tinted gold for decoration.

### Typography

Archivo, loaded as a variable font and narrowed to width 85 for headings — athletic and condensed without the stock gym look. Inter Tight for body copy. Both self-hosted automatically by `next/font`, so there's no render-blocking request to Google and no layout shift.

---

## Performance

- Every image goes through `next/image` with AVIF/WebP output and correct `sizes`
- The hero image is `priority` + `fetchPriority="high"`; everything else is lazy
- Intrinsic width/height on all images, so cumulative layout shift stays at zero
- The 3D particle layer is dynamically imported and only mounts on desktop, pointer-fine devices, after first paint — it is never in the critical path and never loads on mobile
- Animation is limited to `transform` and `opacity`, which stay on the GPU
- Fonts use `display: swap` and are subset to latin

## Accessibility

- Skip link, semantic landmarks, one `h1`, ordered heading levels
- Visible gold focus ring on every interactive element
- The lightbox traps focus, closes on Escape and moves with the arrow keys
- The mobile menu sets `aria-expanded` / `aria-controls` and closes on Escape
- Form inputs have real labels; errors and confirmations are announced via `role="status"`
- `prefers-reduced-motion` removes the hero curtain, parallax, tilt and all entrance animation — the site stays complete and readable
- Body and muted text meet WCAG AA against the dark background

## Before launch

- [ ] Replace every `PLACEHOLDER` in `lib/content.ts`
- [ ] Set `site.url` to your domain
- [ ] Add real trainer portraits and testimonials
- [ ] Paste the Google Maps embed URL
- [ ] Connect an email provider in `app/api/contact/route.ts`
- [ ] Have the privacy policy and terms reviewed properly
- [ ] Run Lighthouse on the deployed URL, not on `localhost`
