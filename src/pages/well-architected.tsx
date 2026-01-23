// src/pages/WellArchitected.tsx

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import WellArchitectedPillars from '@/components/archi';

export default function WellArchitected() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Cloud Well-Architected Framework</title>
        <meta
          name="description"
          content="Assess, design, and optimize cloud workloads using the cloud Well-Architected Framework with CloudMaSa experts."
        />
      </Helmet>

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-background">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>

        {/* Overlay + curved border */}
        <div className="absolute inset-0 z-10 bg-black/20 rounded-b-[60px] sm:rounded-b-[100px] lg:rounded-b-[150px] border border-[#00BFFF]/70" />

        <section className="relative z-20 flex items-center py-8 sm:py-10 lg:py-8">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

              {/* TEXT */}
              <div className="order-2 lg:order-1 text-center lg:text-left lg:pl-10">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  <span className="text-gradient-primary">Cloud Well-Architected</span>{' '}
                  <span className="text-white">Framework</span>
                </h1>

                <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-md mx-auto lg:mx-0">
                  Design, review, and continuously improve cloud workloads using cloud
                  Well-Architected best practices for security, reliability, and cost efficiency.
                </p>
              </div>

              {/* IMAGE */}
              <div className="order-1 lg:order-2 flex justify-center p-3">
                <img
                  src="/images/well-arch.webp"
                  alt="cloud Well-Architected Framework"
                  className="w-full max-h-[260px] sm:max-h-[300px] md:max-h-[340px] object-contain drop-shadow-[0_0_10px_rgba(37,197,230,0.4)]"
                />
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-5 bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Build Cloud Architectures with Confidence
            </h2>

            <p className="text-foreground text-base leading-relaxed mb-4 text-justify">
              The cloud Well-Architected Framework provides a consistent approach for evaluating
              cloud workloads and identifying architectural risks before they impact business
              operations.
            </p>

            <p className="text-foreground text-base leading-relaxed mb-4 text-justify">
              CloudMaSa helps organizations review cloud environments using structured
              Well-Architected Reviews aligned with cloud-recommended design principles.
            </p>

            <p className="text-foreground text-base leading-relaxed text-justify">
              Our reviews ensure your workloads remain secure, resilient, scalable, and
              optimized as your cloud footprint grows.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Why is the Cloud Well-Architected Framework important?
            </h3>

            <p className="text-foreground text-base leading-relaxed text-justify">
              Poor architectural decisions can lead to outages, security gaps, performance bottlenecks,
              and uncontrolled cloud costs. The cloud Well-Architected Framework helps organizations adopt
              proven cloud design patterns and continuously improve workloads over time. It provides
              clear guidance to identify risks early, align architectures with business goals, and
              implement cloud best practices consistently. By using the framework, teams can build more
              resilient, secure, scalable, and cost-efficient systems while supporting long-term growth
              and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WELL-ARCHITECTED PILLARS ================= */}
      <WellArchitectedPillars />

      {/* ================= REVIEW PROCESS ================= */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-3">
              <span className="text-gradient-primary">Our Well-Architected</span>{' '}
              <span className="text-white">Review Approach</span>
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              A structured review process aligned with cloud best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* STEP 01 */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 01
              </div>

              <h3 className="text-lg font-bold text-brand-orange mb-3">
                Workload Assessment
              </h3>

              <p className="text-foreground text-sm leading-relaxed text-justify mb-2">
                We perform a comprehensive assessment of your workloads using the cloud Well-Architected Tool
                to identify high-risk and medium-risk architectural gaps.
              </p>

              <p className="text-foreground text-sm leading-relaxed text-justify">
                Our assessment helps your team understand areas of improvement, prioritize critical issues,
                and align cloud workloads with cloud best practices for scalability and resilience.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Operational, security, and reliability analysis</li>
                <li>• Performance efficiency evaluation</li>
                <li>• Cost and sustainability assessment</li>
                <li>• Identification of architectural risks</li>
              </ul>
            </div>

            {/* STEP 02 */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 02
              </div>

              <h3 className="text-lg font-bold text-brand-orange mb-3">
                Improvement & Optimization
              </h3>

              <p className="text-foreground text-sm leading-relaxed text-justify mb-2">
                Based on the assessment findings, we provide actionable recommendations to improve your cloud
                architecture across all six cloud Well-Architected pillars.
              </p>

              <p className="text-foreground text-sm leading-relaxed text-justify">
                Our goal is to help your team implement these improvements effectively, ensuring your workloads
                are secure, cost-efficient, resilient, and aligned with industry best practices.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Actionable recommendations for each pillar</li>
                <li>• Security, reliability, and performance improvements</li>
                <li>• Cost optimization and sustainability guidance</li>
                <li>• Implementation roadmap for scalable workloads</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-card border-y border-white/5">
        <div className="mx-auto px-4 py-8 text-center flex flex-col items-center justify-center max-w-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            <span className="text-gradient-primary">Improve your</span>{' '}
            <span className="text-white">cloud Architecture</span>
          </h2>

          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Get a <strong>free cloud Well-Architected Review</strong> from our experts.
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
    </>
  );
}
