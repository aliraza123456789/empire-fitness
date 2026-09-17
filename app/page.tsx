import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Facilities } from '@/components/sections/Facilities';
import { Memberships } from '@/components/sections/Memberships';
import { Trainers } from '@/components/sections/Trainers';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCta } from '@/components/sections/FinalCta';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Facilities />
        <Memberships />
        <Trainers />
        <Gallery />
        <Testimonials />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
