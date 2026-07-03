import Navbar from '@/components/layout/Navbar';
import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import AboutScrollSection from '@/components/sections/about/AboutScrollSection';
import AboutFoundersSection from '@/components/sections/about/AboutFoundersSection';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'About | Aaditya',
  description: 'Learn more about us.',
};

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative', background: 'var(--background)' }}>
      <Navbar />
      <AboutHeroSection />
      <AboutScrollSection />
      <AboutFoundersSection />
      <Footer />
    </main>
  );
}
