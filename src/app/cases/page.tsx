import Navbar from '@/components/layout/Navbar';
import CasesHeroSection from '@/components/sections/cases/CasesHeroSection';

export const metadata = {
  title: 'Cases | Mint & Marble',
  description: 'Art that inspires. Explore our creative case studies.',
};

export default function CasesPage() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative', background: 'var(--background)' }}>
      <Navbar />
      <CasesHeroSection />
    </main>
  );
}
