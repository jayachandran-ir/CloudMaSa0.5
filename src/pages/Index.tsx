import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsGrid } from '@/components/StatsGrid';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HostingFeatures } from '@/components/HostingFeatures';
import { Testimonials } from '@/components/Testimonials';
import { FeatureSection } from '@/components/FeatureSection';
import { CloudMasaApp } from '@/components/CloudMasaApp';
import { Footer } from '@/components/Footer';
import TrustedByTicker from '@/components/TrustedByTicker';

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

      <FeatureSection />

      <HostingFeatures />

      <Footer />
    </main>
  );
};

export default Index;
