import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Stats from '@/components/Stats';
import ConsultationForm from '@/components/ConsultationForm';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Benefits />
          <Stats />
          <ConsultationForm onPrivacyClick={() => setIsPrivacyOpen(true)} />
          <FAQ />
          <Testimonials />
        </main>
        <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />
        <PrivacyPolicy open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen} />
      </div>
    </ThemeProvider>
  );
}

export default App;