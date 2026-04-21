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
    <main style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#000' }}>
      <Navbar />
      <HeroContent />
      <HeroImages />
      <GridBackground />
      <AboutSection />
      <RebelsSection />
      <TrophiesSection />
      <ServicesSection />
    </main>
  );
}





