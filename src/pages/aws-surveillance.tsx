// src/pages/aws-surveillance.tsx

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import SurveillanceShowcase from '@/components/SurveillanceShowcase';

export default function AwsSurveillancePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Helmet>
        <title>Cloud Surveillance Service</title>
        <meta
          name="description"
          content="Gain complete visibility across AWS, Azure, and GCP with CloudMaSa’s Cloud Surveillance Service. Monitor, detect, and respond to issues in real time."
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
                  <span className="text-gradient-primary">Cloud Surveillance</span>{' '}
                  <span className="text-white">Service</span>
                </h1>

                <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-md mx-auto lg:mx-0">
                  Achieve real-time visibility and continuous monitoring across AWS, Azure,
                  and Google Cloud to detect anomalies, prevent incidents, and ensure
                  operational stability.
                </p>
              </div>

              {/* IMAGE */}
              <div className="order-1 lg:order-2 flex justify-center p-3">
                <img
                  src="/images/awssurveillance.png"
                  alt="Multi-Cloud Surveillance Architecture"
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
              Continuous Visibility Across Your Cloud Environments
            </h2>

            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-4 text-justify">
              Modern cloud environments are dynamic and distributed across multiple
              platforms such as AWS, Azure, and Google Cloud. Without continuous
              surveillance, performance issues, security incidents, and configuration
              drift can go unnoticed until they affect business operations.
            </p>

            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-4 text-justify">
              CloudMaSa’s Cloud Surveillance Service delivers unified observability across
              multi-cloud and hybrid environments, providing deep visibility into
              infrastructure, applications, and platform services through centralized
              monitoring and intelligent alerting.
            </p>

            <p className="text-foreground text-sm sm:text-base leading-relaxed text-justify">
              Our proactive surveillance approach enables faster detection, quicker
              response, and reduced operational risk by identifying issues early—ensuring
              higher reliability, improved performance, and stronger operational
              confidence across all your cloud platforms.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Why Cloud Surveillance is critical?
            </h3>

            <p className="text-foreground text-sm sm:text-base leading-relaxed text-justify">
              Lack of visibility across cloud platforms can result in undetected failures,
              security blind spots, and costly outages. Continuous surveillance enables
              early anomaly detection, automated incident creation, and faster resolution.
              With strong observability using metrics, logs, traces, and intelligent alerts,
              teams can maintain high availability and ensure reliable operations across
              AWS, Azure, and GCP.
            </p>
          </div>

        </div>
      </section>

      <SurveillanceShowcase />

      {/* ================= PROCESS ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">

          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              <span className="text-gradient-primary">Our Cloud</span>{' '}
              <span className="text-white">Surveillance Approach</span>
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              A unified observability and monitoring framework designed for multi-cloud
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* STEP 01 */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 01
              </div>

              <h3 className="text-base sm:text-lg font-bold text-brand-orange mb-3 mt-2">
                Unified Multi-Cloud Visibility
              </h3>

              <p className="text-foreground text-sm leading-relaxed text-justify mb-2">
                We establish centralized visibility across AWS, Azure, and GCP by collecting
                telemetry from infrastructure, applications, and platform services.
              </p>

              <p className="text-foreground text-sm leading-relaxed text-justify">
                This unified observability layer eliminates silos and enables continuous
                monitoring of system health, performance trends, and operational signals
                across environments.
              </p>
            </div>

            {/* STEP 02 */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 02
              </div>

              <h3 className="text-base sm:text-lg font-bold text-brand-orange mb-3 mt-2">
                Intelligent Alerting & Incident Insights
              </h3>

              <p className="text-foreground text-sm leading-relaxed text-justify mb-2">
                We implement intelligent, noise-reduced alerting mechanisms that detect
                anomalies across cloud platforms and notify teams only when action is
                required.
              </p>

              <p className="text-foreground text-sm leading-relaxed text-justify">
                Correlated insights, contextual dashboards, and incident intelligence help
                teams respond faster, minimize downtime, and continuously improve
                operational resilience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-card border-y border-white/5">
        <div className="mx-auto px-4 py-8 text-center flex flex-col items-center justify-center max-w-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            <span className="text-gradient-primary">Monitor your</span>{' '}
            <span className="text-white">cloud environments</span>
          </h2>

          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Get a <strong>free Cloud Surveillance consultation</strong> today.
          </p>

          <a
            href="/contact"
            className="inline-block bg-gradient-cta text-white font-bold py-2.5 px-8 rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
