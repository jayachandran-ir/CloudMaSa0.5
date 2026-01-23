// src/pages/cloud-marketplace.tsx

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground'; 
import MarketplaceCapabilities from "@/components/MarketplaceCapabilities";

export default function CloudMarketplacePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Helmet>
        <title>Cloud Marketplace</title>
        <meta
          name="description"
          content="Discover, procure, and manage cloud solutions across AWS, Azure, and GCP with CloudMaSa’s Cloud Marketplace services."
        />
      </Helmet>

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="absolute inset-0 bg-black/20 z-10 rounded-b-[60px] sm:rounded-b-[100px] lg:rounded-b-[150px] border border-[#00BFFF]/70" />

        <section className="relative z-20 flex items-center py-8 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              {/* TEXT */}
              <div className="order-2 lg:order-1 text-center lg:text-left lg:pl-10">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  <span className="text-gradient-primary">Cloud</span>{' '}
                  <span className="text-white">Marketplace</span>
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-md mx-auto lg:mx-0 text-justify">
                  Simplify procurement and accelerate innovation by accessing trusted
                  solutions from AWS, Azure, and Google Cloud marketplaces managed
                  end-to-end by CloudMaSa.
                </p>
              </div>

              {/* IMAGE */}
              <div className="order-1 lg:order-2 flex justify-center p-3">
                <img
                  src="/images/cloudmarketplace.webp"
                  alt="Cloud Marketplace"
                  className="w-full max-h-[260px] sm:max-h-[300px] md:max-h-[340px] object-contain drop-shadow-[0_0_10px_rgba(37,197,230,0.4)]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-[1024px]">
          <div className="mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              One Marketplace. Unlimited Cloud Solutions.
            </h2>
            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-4 text-justify">
              Cloud marketplaces provide access to thousands of software solutions,
              SaaS products, and enterprise tools across AWS, Azure, and Google Cloud.
              However, navigating licensing models, billing structures, and deployment
              complexities can slow adoption.
            </p>
            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-4 text-justify">
              CloudMaSa acts as your trusted cloud partner helping you identify the
              right solutions, procure them efficiently, deploy securely, and manage
              costs across cloud marketplaces.
            </p>
            <p className="text-foreground text-sm sm:text-base leading-relaxed text-justify">
              Our Cloud Marketplace service removes friction from cloud procurement
              while ensuring governance, cost control, and operational excellence.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Why Cloud Marketplace matters?
            </h3>
            <p className="text-foreground text-sm sm:text-base leading-relaxed text-justify">
              Marketplace solutions enable faster time-to-value by reducing vendor
              onboarding time, simplifying billing, and enabling one-click deployment.
              When managed correctly, they accelerate innovation while maintaining
              compliance, security, and financial transparency.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MARKETPLACE CAPABILITIES ================= */}
      <MarketplaceCapabilities />

      {/* ================= PROCESS ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">
          {/* TITLE */}
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              <span className="text-gradient-primary">Cloud</span>{' '}
              <span className="text-white">Marketplace Process</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Streamlined procurement and deployment of cloud marketplace solutions across AWS, Azure, and GCP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* STEP 01 */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 01
              </div>
              <h3 className="text-base sm:text-lg font-bold text-brand-orange mb-3 mt-2">
                Vendor & Solution Selection
              </h3>
              <p className="text-foreground text-sm leading-relaxed text-justify mb-2">
                Identify the right marketplace solutions that align with your business, technical, and compliance requirements.
              </p>
              <p className="text-foreground text-sm leading-relaxed text-justify">
                Evaluate vendors, assess compliance, and ensure architectural compatibility for seamless adoption across cloud platforms.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Vendor evaluation & shortlisting</li>
                <li>• Compliance and security review</li>
                <li>• Architecture compatibility checks</li>
                <li>• License model analysis</li>
              </ul>
            </div>

            {/* STEP 02 */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 02
              </div>
              <h3 className="text-base sm:text-lg font-bold text-brand-orange mb-3 mt-2">
                Marketplace Procurement & Deployment
              </h3>
              <p className="text-foreground text-sm leading-relaxed text-justify mb-2">
                Simplify procurement through private offers, unified billing, and contract alignment, then deploy solutions securely in your cloud environment.
              </p>
              <p className="text-foreground text-sm leading-relaxed text-justify">
                Ensure seamless onboarding, cloud-native deployment, and operational readiness with best practices for networking, security, and governance.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Private offers & negotiated pricing</li>
                <li>• Unified cloud billing</li>
                <li>• Contract & renewal alignment</li>
                <li>• Secure deployment and onboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-card border-y border-white/5">
        <div className="mx-auto px-4 py-8 text-center flex flex-col items-center justify-center max-w-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            <span className="text-gradient-primary">Simplify your</span>{' '}
            <span className="text-white">cloud procurement</span>
          </h2>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Talk to our experts and unlock the full potential of cloud marketplaces.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-cta text-white font-bold py-2.5 px-8 rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Get Free Audit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
