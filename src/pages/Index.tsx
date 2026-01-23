import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsGrid } from '@/components/StatsGrid';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HostingFeatures } from '@/components/HostingFeatures';
import { Testimonials } from '@/components/Testimonials';
import { CloudMasaApp } from '@/components/CloudMasaApp';
import { Footer } from '@/components/Footer';
import TrustedByTicker from '@/components/TrustedByTicker';
import SurveillanceShowcase from '@/components/SurveillanceShowcase';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground font-sans">
      <AnimatedBackground />
      <Navbar />
      <Hero />

      <WhyChooseUs />


      <TrustedByTicker />


      <StatsGrid />

      <CloudMasaApp />

      <Testimonials />

      <SurveillanceShowcase />
  
      <HostingFeatures />

      <Footer />
    </main>
  );
};

export default Index;
