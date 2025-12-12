import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DifferentiatorSection from '@/components/DifferentiatorSection';
import ForesightSection from '@/components/ForesightSection';
import ServicesSection from '@/components/ServicesSection';
import PublicationsSection from '@/components/PublicationsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <DifferentiatorSection />
      <ForesightSection />
      <ServicesSection />
      <PublicationsSection />
      <Footer />
    </main>
  );
};

export default Index;
