/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 640, 828, 1080, 1280, 1600, 1920],
  },
  // three.js ships untranspiled ESM examples; keep the bundle happy on Vercel
  transpilePackages: ['three'],
  poweredByHeader: false,
};
export default nextConfig;
