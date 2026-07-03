import Navbar from '@/components/layout/Navbar';
import ContactCard from '@/components/sections/contact/ContactCard';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Contact | Mint & Marble',
  description: 'Start a conversation with us today.',
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative', background: 'var(--background)' }}>
      <Navbar />
      <ContactCard />
      <Footer />
    </main>
  );
}
