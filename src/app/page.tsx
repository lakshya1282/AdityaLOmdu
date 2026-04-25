import GridBackground from '@/components/layout/GridBackground';
import HeroImages from '@/components/sections/HeroImages';
import Navbar from '@/components/layout/Navbar';
import HeroContent from '@/components/sections/HeroContent';
import AboutSection from '@/components/sections/AboutSection';
import RebelsSection from '@/components/sections/RebelsSection';
import TrophiesSection from '@/components/sections/TrophiesSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative', background: 'var(--background)' }}>
      <Navbar />
      <section style={{ position: 'relative', height: '100vh', background: 'var(--background)', overflow: 'hidden' }}>
        <HeroContent />
        <HeroImages />
        <GridBackground />
      </section>
      <AboutSection />
      <RebelsSection />
      <TrophiesSection />
      <ServicesSection />
    </main>
  );
}





