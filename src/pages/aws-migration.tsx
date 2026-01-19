// src/pages/AwsMigrationPage.tsx

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';

export default function AwsMigrationPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Helmet>
        <title>Cloud Migration</title>
        <meta
          name="description"
          content="Migrate to Cloud seamlessly with CloudMaSa. Minimize downtime, reduce risk, and modernize your infrastructure with expert cloud migration services."
        />
      </Helmet>

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="absolute inset-0 bg-black/20 z-10 rounded-b-[60px] sm:rounded-b-[100px] lg:rounded-b-[150px] border border-[#00BFFF]/70" />

        <section className="relative z-20 flex items-center py-8 sm:py-10 lg:py-8">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              {/* TEXT */}
              <div className="order-2 lg:order-1 text-center lg:text-left lg:pl-10">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  <span className="text-gradient-primary">Cloud Migration</span>{' '}
                  <span className="text-white">Services</span>
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-md mx-auto lg:mx-0">
                  Planning to move workloads to Cloud? Our Cloud Migration service helps you
                  transition applications, data, and infrastructure securely with minimal
                  downtime and maximum performance.
                </p>
              </div>

              {/* IMAGE */}
              <div className="order-1 lg:order-2 flex justify-center p-3">
                <img
                  src="/src/assets/images/awsmig1.png"
                  alt="cloud Migration Architecture"
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
              Migrate to Cloud with Confidence
            </h2>

            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-4 text-justify">
              Migrating to cloud is more than just moving servers. It requires careful planning,
              dependency analysis, security validation, and performance optimization to ensure
              business continuity.
            </p>

            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-4 text-justify">
              CloudMaSa helps organizations migrate workloads from on-premise or other
              providers to cloud using proven frameworks and automation-driven execution.
            </p>

            <p className="text-foreground text-sm sm:text-base leading-relaxed text-justify">
              Our <strong>Cloud Migration Assessment & Execution</strong> ensures your applications
              are modernized, scalable, and optimized for the cloud ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Why is Cloud Migration essential?
            </h3>
            <p className="text-foreground text-sm sm:text-base leading-relaxed text-justify">
              Cloud migration enables businesses to improve agility, reduce infrastructure
              overhead, increase security, and scale on demand. Moving to cloud allows you to
              replace rigid legacy systems with flexible, resilient, and cost-efficient
              cloud-native architectures.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MIGRATION ANIMATION SECTION ================= */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE */}
            <div className="flex flex-col">
              <div className="max-w-md">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="text-gradient-primary">Seamless Cloud</span>{' '}
                  <span className="text-white">Migration</span>
                </h2>

                <p className="text-foreground text-base mb-2 text-justify">
                  Move your workloads to cloud with confidence. Our proven migration strategies
                  minimize downtime, optimize costs, and modernize your infrastructure for
                  cloud-native performance.
                </p>

                <p className="text-foreground text-base text-justify">
                  CloudMaSa ensures a smooth migration journey by leveraging automation,
                  monitoring, and expert cloud architects.
                </p>
              </div>

              {/* TRUCK ANIMATION */}
              <div className="relative mt-6 w-full max-w-md h-[160px]">
                <div className="loop-wrapper w-full h-full">
                  <div className="mountain"></div>
                  <div className="hill"></div>
                  <div className="tree"></div>
                  <div className="tree"></div>
                  <div className="tree"></div>
                  <div className="rock"></div>
                  <div className="truck"></div>
                  <div className="wheels"></div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center items-center text-center">
              <img
                src="/src/assets/images/awsmig2.png"
                alt="cloud Migration Flow"
                className="w-full max-w-sm h-[350px] object-contain drop-shadow-[0_0_10px_rgba(37,197,230,0.4)]"
              />

              <p className="mt-16 text-md font-semibold tracking-wide text-brand-white drop-shadow-[0_0_10px_rgba(37,197,230,0.4)]">
                Clutch Professional Service Rating Badges
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HOLOGRAPHIC ADVANTAGES ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">
           <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-10 text-center">
            <span className="text-gradient-primary">Advantages of Cloud </span>{' '}
            <span className="text-white">Migration with CloudMaSa</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 text-center max-w-md mx-auto">
            Accelerate innovation and improve reliability with a secure and structured cloud
            migration strategy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="holographic-card">
              <img src="/src/assets/images/scalable.png" alt="Scalability" />
              <div className="content">
                <h4 className="text-base font-bold">Elastic Scalability</h4>
                <p className="text-muted-foreground text-sm">
                  Seamlessly scale applications and infrastructure to match demand without
                  over-provisioning resources.
                </p>
              </div>
            </div>

            <div className="holographic-card">
              <img src="/src/assets/images/security.png" alt="Security" />
              <div className="content">
                <h4 className="text-base font-bold">Improved Security</h4>
                <p className="text-muted-foreground text-sm">
                  Leverage cloud-native security controls, encryption, IAM, and compliance-ready
                  architectures.
                </p>
              </div>
            </div>

            <div className="holographic-card">
              <img src="/src/assets/images/modernize.png" alt="Modernization" />
              <div className="content">
                <h4 className="text-base font-bold">Application Modernization</h4>
                <p className="text-muted-foreground text-sm">
                  Transform legacy workloads using containers, managed services, and cloud-native
                  design patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MIGRATION PROCESS ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">

          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              <span className="text-gradient-primary">Our Cloud</span>{' '}
              <span className="text-white">Migration Approach</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              A phased migration strategy designed to reduce risk and ensure a smooth
              transition to cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* STEP 01 */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 01
              </div>

              <h3 className="text-base sm:text-lg font-bold text-brand-orange mb-3 mt-2">
                Migration Assessment & Planning
              </h3>

              <p className="text-foreground text-sm leading-relaxed text-justify">
                We analyze applications, dependencies, and infrastructure to determine the
                optimal migration strategy for rehost, replatform, refactor, or retire.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Application dependency mapping</li>
                <li>• Cloud readiness and risk assessment</li>
                <li>• Migration roadmap and timelines</li>
                <li>• Security and compliance evaluation</li>
              </ul>
            </div>

            {/* STEP 02 */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 02
              </div>

              <h3 className="text-base sm:text-lg font-bold text-brand-orange mb-3 mt-2">
                Migration Execution & Optimization
              </h3>

              <p className="text-foreground text-sm leading-relaxed text-justify">
                We migrate workloads using automation, validate performance, and optimize
                architectures for reliability, security, and cost efficiency.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Data and application migration</li>
                <li>• Downtime-minimized cutover</li>
                <li>• Performance and security validation</li>
                <li>• Post-migration optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-card border-y border-white/5">
        <div className="mx-auto px-4 py-8 text-center flex flex-col items-center justify-center max-w-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            <span className="text-gradient-primary">Ready to migrate to </span>
            <span className="text-white">Cloud?</span>
          </h2>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Get a <strong>free Cloud migration assessment</strong> from our certified cloud
            architects.
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
