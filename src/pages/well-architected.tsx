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
        <title>AWS Well-Architected Framework</title>
        <meta
          name="description"
          content="Assess, design, and optimize AWS workloads using the AWS Well-Architected Framework with CloudMaSa experts."
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="absolute inset-0 bg-black/20 z-10 rounded-b-[150px] border-[1px] border-[#00BFFF]/70"></div>

        <section className="relative z-20 flex items-center py-6 md:py-8 rounded-b-[60px]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
              <div className="order-2 lg:order-1 lg:ml-16">
                <h1 className="text-2xl font-bold tracking-tight leading-tight">
                  <span className="text-gradient-primary">AWS Well-Architected</span>{' '}
                  <span className="text-white">Framework</span>
                </h1>
                <p className="text-muted-foreground text-base mt-4 max-w-md">
                  Design, review, and continuously improve cloud workloads using AWS
                  Well-Architected best practices for security, reliability, and cost efficiency.
                </p>
              </div>

              <div className="order-1 lg:order-2 flex justify-center p-3">
                <img
                  src="/src/assets/images/well-arch.png"
                  alt="AWS Well-Architected Framework"
                  className="w-full max-h-[260px] md:max-h-[320px] object-contain drop-shadow-[0_0_10px_rgba(37,197,230,0.4)]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-5 bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Build Cloud Architectures with Confidence
            </h2>

            <p className="text-foreground text-base leading-relaxed mb-4 text-justify">
              The AWS Well-Architected Framework provides a consistent approach for evaluating
              cloud workloads and identifying architectural risks before they impact business
              operations.
            </p>

            <p className="text-foreground text-base leading-relaxed mb-4 text-justify">
              CloudMaSa helps organizations review AWS environments using structured
              Well-Architected Reviews aligned with AWS-recommended design principles.
            </p>

            <p className="text-foreground text-base leading-relaxed text-justify">
              Our reviews ensure your workloads remain secure, resilient, scalable, and
              optimized as your cloud footprint grows.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Why is the AWS Well-Architected Framework important?
            </h3>
            <p className="text-foreground text-base leading-relaxed text-justify">
              Poor architectural decisions can lead to outages, security gaps, performance bottlenecks, and uncontrolled cloud costs. The AWS Well-Architected Framework helps organizations adopt proven cloud design patterns and continuously improve workloads over time. 
              It provides clear guidance to identify risks early, align architectures with business goals, and implement AWS best practices consistently. By using the framework, teams can build more resilient, secure, scalable, and cost-efficient systems while supporting long-term growth and sustainability.
            </p>
          </div>
        </div>
      </section>

<WellArchitectedPillars />

{/* Review Process */}
<section className="py-16 bg-background">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold mb-3">
        <span className="text-gradient-primary">Our Well-Architected</span>{' '}
        <span className="text-white">Review Approach</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto text-base">
        A structured review process aligned with AWS best practices.
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
          We perform a comprehensive assessment of your workloads using the AWS Well-Architected Tool to identify high-risk and medium-risk architectural gaps.
        </p>
        <p className="text-foreground text-sm leading-relaxed text-justify">
          Our assessment helps your team understand areas of improvement, prioritize critical issues, and align cloud workloads with AWS best practices for scalability and resilience.
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
          Based on the assessment findings, we provide actionable recommendations to improve your cloud architecture across all six AWS Well-Architected pillars.
        </p>
        <p className="text-foreground text-sm leading-relaxed text-justify">
          Our goal is to help your team implement these improvements effectively, ensuring your workloads are secure, cost-efficient, resilient, and aligned with industry best practices.
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



      {/* Final CTA */}
      <section className="bg-card border-y border-white/5">
        <div
          className="mx-auto px-4 text-center flex flex-col items-center justify-center"
          style={{ width: '480px', height: '150px' }}
        >
          <h2 className="text-2xl font-bold mb-4 whitespace-nowrap">
            <span className="text-gradient-primary">Improve your</span>{' '}
            <span className="text-white">AWS Architecture</span>
          </h2>
          <p className="text-muted-foreground mb-4 text-base">
            Get a <strong>free AWS Well-Architected Review</strong> from our experts.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-cta text-white font-bold py-2 px-6 rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Get Free Audit
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
