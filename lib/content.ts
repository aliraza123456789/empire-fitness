/**
 * ─────────────────────────────────────────────────────────────
 *  EMPIRE FITNESS — EDIT EVERYTHING HERE
 * ─────────────────────────────────────────────────────────────
 *  Every string, price, image path and link on the site comes
 *  from this file. Change it here and it changes everywhere.
 *
 *  To swap a photo: drop the new file into /public/images and
 *  update the `src` below. Keep `alt` descriptive — it is read
 *  aloud by screen readers and indexed by Google.
 *
 *  Items marked PLACEHOLDER are invented for layout purposes.
 *  Replace them with real information before you go live.
 */

export type Img = { src: string; alt: string; w: number; h: number };

/** All photography, shot inside the real Empire Fitness club. */
export const photos = {
  reception: {
    src: '/images/reception.webp',
    alt: 'Empire Fitness reception desk, with gold lettering mounted on a fluted charcoal slat wall',
    w: 1360,
    h: 1020,
  },
  machines: {
    src: '/images/machines.webp',
    alt: 'Row of selectorised resistance machines beside the wall mural reading “Build the body that builds your empire”',
    w: 1360,
    h: 1020,
  },
  strengthRack: {
    src: '/images/strength-rack.webp',
    alt: 'Squat rack, loaded barbell and stacked bumper plates in the strength area',
    w: 764,
    h: 1020,
  },
  cardioRow: {
    src: '/images/cardio-row.webp',
    alt: 'Line of treadmills and cross-trainers facing a screen, under the wall text “Outlast your limits”',
    w: 1360,
    h: 1020,
  },
  cardioWindow: {
    src: '/images/cardio-window.webp',
    alt: 'Three treadmills positioned along a full-height window overlooking the city',
    w: 1176,
    h: 1020,
  },
  cardioTv: {
    src: '/images/cardio-tv.webp',
    alt: 'Treadmills in the low-lit cardio bay with a wall-mounted screen',
    w: 1360,
    h: 1020,
  },
  turf: {
    src: '/images/turf.webp',
    alt: 'Members training with stability balls on the green turf functional zone beside the windows',
    w: 764,
    h: 1020,
  },
  accessories: {
    src: '/images/accessories.webp',
    alt: 'Wall rack of wall balls, dumbbells, resistance bands and stability balls',
    w: 764,
    h: 1020,
  },
  floor: {
    src: '/images/floor.webp',
    alt: 'Wide view of the main training floor with benches, plyo boxes and a lifting platform',
    w: 1360,
    h: 1020,
  },
} satisfies Record<string, Img>;

export const site = {
  name: 'Empire Fitness',
  tagline: 'Build your empire.',
  /** PLACEHOLDER — set your real domain before deploying. */
  url: 'https://empirefitness.example.com',
  description:
    'Empire Fitness is a premium strength and conditioning club: full-size racks, commercial cardio, a dedicated functional floor and coaching that actually knows your programme.',
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Memberships', href: '#memberships' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  wordmark: 'Empire Fitness',
  headline: 'Build your empire',
  support: 'Train harder. Move stronger. Become your strongest self.',
  primaryCta: { label: 'Start your journey', href: '#memberships' },
  secondaryCta: { label: 'Explore the gym', href: '#facilities' },
  image: photos.reception,
  video: '/images/Man_exercising_in_gym_20260917110926.mp4',
};

export const about = {
  heading: 'More than a gym.',
  body: [
    'Empire Fitness was built for people who take training seriously — the ones who show up on a Tuesday in February, who care what the bar feels like in their hands, who want a room that matches the work.',
    'Every square metre is deliberate. Full-depth racks with real platforms. Commercial cardio placed along the windows instead of buried in a corner. A functional floor wide enough to actually sprint, carry and throw. Coaches who write programmes rather than count reps.',
    'It is a quiet, well-made room for loud work. Come and use it.',
  ],
  image: photos.machines,
  /** Descriptive capability claims — no invented numbers. */
  pillars: [
    { title: 'Premium equipment', note: 'Commercial-grade racks, plate-loaded machines and cardio.' },
    { title: 'Expert trainers', note: 'Qualified coaches on the floor, not behind a desk.' },
    { title: 'Personal training', note: 'One-to-one programming built around your goal.' },
    { title: 'Modern facility', note: 'Climate controlled, spotless, open from early to late.' },
  ],
};

export const facilities = [
  {
    title: 'Strength training',
    body: 'Full-height racks, calibrated bars and a lifting platform for the heavy days.',
    image: photos.strengthRack,
  },
  {
    title: 'Cardio zone',
    body: 'Treadmills, bikes and cross-trainers lined along the windows with city light.',
    image: photos.cardioRow,
  },
  {
    title: 'Free weights',
    body: 'A complete dumbbell run, bumper plates and benches that never queue for long.',
    image: photos.floor,
  },
  {
    title: 'Functional training',
    body: 'Turf lane for sleds, carries and conditioning, plus a full accessory wall.',
    image: photos.turf,
  },
  {
    title: 'Personal training',
    body: 'Private coaching space and assessment, with programmes reviewed every block.',
    image: photos.machines,
  },
  {
    title: 'Locker rooms',
    body: 'Secure lockers, hot showers and somewhere decent to get ready afterwards.',
    image: photos.reception,
  },
];

/** PLACEHOLDER PRICING — replace `price` and `period` with your real rates. */
export const memberships = {
  heading: 'Choose your plan',
  intro: 'Month to month. No joining fee, no lock-in, cancel with 30 days’ notice.',
  currency: 'PKR',
  plans: [
    {
      name: 'Basic',
      price: '4,500',
      period: 'per month',
      summary: 'Full floor access during staffed hours.',
      features: [
        'Access to all training zones',
        'Cardio, machines and free weights',
        'Locker room and showers',
        'Induction session included',
      ],
      featured: false,
    },
    {
      name: 'Pro',
      price: '7,500',
      period: 'per month',
      summary: 'Everything in Basic, plus coaching and programming.',
      features: [
        'Unlimited access, all opening hours',
        'Personalised training programme',
        'Monthly progress review',
        'Group classes included',
        'Guest pass each month',
      ],
      featured: true,
    },
    {
      name: 'Elite',
      price: '14,000',
      period: 'per month',
      summary: 'One-to-one coaching and full recovery access.',
      features: [
        'Everything in Pro',
        'Four personal training sessions monthly',
        'Nutrition and recovery guidance',
        'Priority booking',
        'Unlimited guest passes',
      ],
      featured: false,
    },
  ],
};

/**
 * PLACEHOLDER TRAINERS — names, specialities and bios are invented.
 * Replace with your real team, and drop portrait photos into
 * /public/images then set `image: { src, alt, w, h }` on each trainer.
 * Cards render a typographic monogram until a photo is supplied.
 */
export const trainers = [
  {
    name: 'Placeholder Name',
    initials: 'EF',
    specialty: 'Strength & powerlifting',
    bio: 'Sample bio. Coaches the squat, bench and deadlift, and works with lifters preparing for their first meet.',
    image: null as Img | null,
    socials: { instagram: '#', email: 'mailto:hello@empirefitness.example.com' },
  },
  {
    name: 'Placeholder Name',
    initials: 'EF',
    specialty: 'Conditioning & fat loss',
    bio: 'Sample bio. Builds sustainable conditioning blocks for members returning to training after a long break.',
    image: null as Img | null,
    socials: { instagram: '#', email: 'mailto:hello@empirefitness.example.com' },
  },
  {
    name: 'Placeholder Name',
    initials: 'EF',
    specialty: 'Mobility & rehabilitation',
    bio: 'Sample bio. Works with members training around old injuries, with an emphasis on shoulders and hips.',
    image: null as Img | null,
    socials: { instagram: '#', email: 'mailto:hello@empirefitness.example.com' },
  },
  {
    name: 'Placeholder Name',
    initials: 'EF',
    specialty: 'Functional & athletic performance',
    bio: 'Sample bio. Runs the turf lane — sleds, carries, sprint mechanics and return-to-sport work.',
    image: null as Img | null,
    socials: { instagram: '#', email: 'mailto:hello@empirefitness.example.com' },
  },
];

export const gallery: Img[] = [
  photos.reception,
  photos.strengthRack,
  photos.machines,
  photos.cardioWindow,
  photos.floor,
  photos.accessories,
  photos.cardioRow,
  photos.turf,
  photos.cardioTv,
];

/**
 * PLACEHOLDER TESTIMONIALS — sample copy, not real members.
 * Swap in genuine quotes (with permission) before launch.
 */
export const testimonials = {
  heading: 'What members say',
  note: 'Sample content — real member quotes will replace these.',
  items: [
    {
      quote:
        'Sample testimonial. The racks are never all taken and somebody actually corrected my set-up on day one, which had never happened to me anywhere else.',
      name: 'Sample Member',
      goal: 'First 100kg squat',
    },
    {
      quote:
        'Sample testimonial. I came back to training after four years off and was given a plan I could keep up with instead of being handed a generic circuit.',
      name: 'Sample Member',
      goal: 'Getting back to training',
    },
    {
      quote:
        'Sample testimonial. Being able to run on a treadmill looking out over the city at 6am is the reason I still turn up at 6am.',
      name: 'Sample Member',
      goal: 'Half marathon',
    },
  ],
};

export const finalCta = {
  heading: 'Your strongest version starts here.',
  support: 'Step into Empire Fitness and start building your empire.',
  cta: { label: 'Join Empire Fitness', href: '#contact' },
  image: photos.floor,
};

/** PLACEHOLDER CONTACT DETAILS — replace with your real information. */
export const contact = {
  heading: 'Get in touch',
  intro:
    'Book a walkthrough, ask about a plan, or just come and see the floor. We answer within one working day.',
  address: ['Empire Fitness', '123 Placeholder Avenue', 'Rawalpindi, Punjab', 'Pakistan'],
  phone: '+92 000 0000000',
  phoneHref: 'tel:+920000000000',
  email: 'hello@empirefitness.example.com',
  hours: [
    { days: 'Monday – Friday', time: '5:00 — 23:00' },
    { days: 'Saturday', time: '7:00 — 21:00' },
    { days: 'Sunday', time: '8:00 — 20:00' },
  ],
  /** Paste your Google Maps embed URL here to replace the placeholder panel. */
  mapEmbedUrl: '',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
};

export const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];
