import type { Config } from 'tailwindcss';

/**
 * Palette is sampled directly from the Empire Fitness reception photograph:
 * the fluted charcoal slat wall, the brushed gold lettering, the concrete ceiling.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08090A',       // matte black — page base
        slat: '#14171A',      // the fluted reception wall
        graphite: '#22262A',  // raised surfaces, card fills
        steel: '#3A4046',     // hairlines, disabled states
        gold: {
          DEFAULT: '#C9A24B', // the sign gold
          hi: '#F0D89B',      // lit edge of the lettering
          deep: '#8A6B28',    // shadow side of the lettering
        },
        bone: '#EFEAE1',      // warm white for reading
        muted: '#9BA1A8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        lift: '0 40px 90px -40px rgba(0,0,0,0.9)',
        goldline: '0 1px 0 0 rgba(201,162,75,0.35)',
      },
      backgroundImage: {
        // the fluted slat wall, rebuilt in CSS
        slats:
          'repeating-linear-gradient(90deg, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 9px)',
        goldleaf:
          'linear-gradient(97deg, #8A6B28 0%, #C9A24B 28%, #F0D89B 46%, #C9A24B 62%, #7E6024 100%)',
      },
      transitionTimingFunction: {
        empire: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      maxWidth: {
        readable: '68ch',
      },
    },
  },
  plugins: [],
};
export default config;
