// src/pages/Cloud-security.tsx

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';


export default function AwsSecurityPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Cloud Security</title>
        <meta
          name="description"
          content="Secure your Cloud workloads with CloudMaSa’s Cloud Security Review. Identify risks, strengthen defenses, and meet compliance requirements."
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
                  <span className="text-gradient-primary">Cloud Security</span>{' '}
                  <span className="text-white">Assessment</span>
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-md mx-auto lg:mx-0 text-justify">
                  Protect your cloud environment with a comprehensive Cloud Security Review.
                  Identify vulnerabilities, strengthen defenses, and ensure compliance
                  without slowing innovation.
                </p>
              </div>

              {/* IMAGE */}
              <div className="order-1 lg:order-2 flex justify-center p-3">
                <img
                  src="/src/assets/images/awssecurity1.png"
                  alt="Cloud Security Architecture"
                  className="w-full max-h-[260px] sm:max-h-[300px] md:max-h-[340px] object-contain drop-shadow-[0_0_10px_rgba(37,197,230,0.4)]"
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
              Secure Your Cloud Environment with Confidence
            </h2>

            <p className="text-foreground text-base leading-relaxed mb-4 text-justify">
              Cloud security is not a one-time setup. As your Cloud environment grows, so do
              risks related to misconfigurations, excessive permissions, data exposure,
              and compliance gaps.
            </p>

            <p className="text-foreground text-base leading-relaxed mb-4 text-justify">
              CloudMaSa’s Cloud Security Review evaluates your workloads against Cloud best
              practices to identify vulnerabilities and security blind spots before they
              become incidents.
            </p>

            <p className="text-foreground text-base leading-relaxed text-justify">
              Our approach strengthens your security posture while enabling agility,
              scalability, and operational efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Why Cloud Security is critical?
            </h3>
            <p className="text-foreground text-base leading-relaxed text-justify">
              Weak cloud security can lead to data breaches, service disruptions, regulatory
              penalties, and reputational damage. A strong Cloud security foundation ensures
              workloads remain protected, compliant, and resilient against evolving threats.

              A solid Cloud security foundation protects workloads through identity and access management, encryption, continuous monitoring, and automated detection. It supports compliance requirements, strengthens resilience, and enables faster incident response, helping organizations operate securely while maintaining trust and business continuity.
            </p>
          </div>
        </div>
      </section>

        {/* Security Capabilities */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

      {/* LEFT SIDE — CONTENT */}
      <div className="max-w-xl">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-gradient-primary">
            Ensure the Security of Your Infrastructure
          </span>{' '}
          <span className="text-white">with CloudMaSa</span>
        </h2>

        <p className="text-foreground text-base leading-relaxed mb-4 text-justify">
          Build a secure and auditable environment for your organization using Cloud Managed
          Services and the expertise of CloudMaSa DevOps and Cloud Cloud Engineers. Our team
          delivers tailored security enhancements aligned with your business and compliance
          needs.
        </p>

        <p className="text-foreground text-base leading-relaxed mb-4 text-justify">
          With the CloudMaSa Security Service, you receive a comprehensive assessment covering
          account-level security, network protection, data security, and resiliency. We also
          help strengthen the security posture of Cloud Managed EKS (Kubernetes) environments.
        </p>

        <p className="text-foreground text-base leading-relaxed text-justify">
          Our structured approach ensures visibility, threat detection, and continuous
          improvement across your Cloud infrastructure.
        </p>
      </div>

      {/* RIGHT SIDE — 4 SECURITY BLOCKS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Account-Level Security */}
        <div className="w-62 h-60 flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-[#102a43]

          hover:border-brand-orange/40 transition-all hover:-translate-y-1">
          <img
            src="/src/assets/images/account.png"
            alt="Account-Level Security"
            className="w-25 h-20 mb-4 mx-auto"
          />
          <h4 className="text-base font-bold text-brand-orange mb-2 text-center ">
            Account-Level Security
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Implementing account-level audits and configuration management, enhanced with
            intelligent threat detection to reduce risks and misconfigurations.
          </p>
        </div>

        {/* Network-Level Security */}
        <div className="w-62 h-60 flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-[#102a43]

          hover:border-brand-orange/40 transition-all hover:-translate-y-1">
          <img
            src="/src/assets/images/network.png"
            alt="Network-Level Security"
            className="w-25 h-20 mb-4 mx-auto"
          />
          <h4 className="text-base font-bold text-brand-orange mb-2 text-center">
            Network-Level Security
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Network audits, segmentation, and traffic control strengthened with intelligent
            monitoring and threat detection capabilities.
          </p>
        </div>

        {/* Data Security & Resiliency */}
        <div className="w-62 h-60 flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-[#102a43]

          hover:border-brand-orange/40 transition-all hover:-translate-y-1">
          <img
            src="/src/assets/images/data.png"
            alt="Data Security and Resiliency"
            className="w-25 h-20 mb-4 mx-auto"
          />
          <h4 className="text-base font-bold text-brand-orange mb-2 text-center">
            Data Security & Resiliency
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Safeguard data using encryption and resiliency strategies for Cloud S3, RDS, and
            DynamoDB to protect against loss and unauthorized access.
          </p>
        </div>

        {/* EKS Threat Detection */}
        <div className="w-62 h-60 flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-[#102a43]

          hover:border-brand-orange/40 transition-all hover:-translate-y-1">
          <img
            src="/src/assets/images/eks.png"
            alt="Cloud EKS Threat Detection"
            className="w-25 h-20 mb-4 mx-auto"
          />
          <h4 className="text-base font-bold text-brand-orange mb-2 text-center">
            Intelligent Threat Detection for Cloud EKS
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Advanced monitoring and alerting for Kubernetes workloads to detect threats
            in real time and enable rapid response.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Security Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-gradient-primary">
            Benefits of Cloud Security Review
          </h2>

          <p className="text-muted-foreground text-center mb-6 max-w-lg mx-auto text-base">
            Reduce risk, improve visibility, and strengthen trust across your Cloud workloads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="holographic-card">
              <img src="/src/assets/images/secur.png" alt="Threat Prevention" />
              <div className="content">
                <h4 className="text-base font-bold">Threat Prevention</h4>
                <p className="text-muted-foreground text-sm">
                  Identify misconfigurations, excessive permissions, and exposed resources
                  before attackers exploit them.
                </p>
              </div>
            </div>

            <div className="holographic-card">
              <img src="/src/assets/images/comp.png" alt="Compliance Readiness" />
              <div className="content">
                <h4 className="text-base font-bold">Compliance Readiness</h4>
                <p className="text-muted-foreground text-sm">
                  Align your Cloud environment with industry standards and regulatory
                  requirements.
                </p>
              </div>
            </div>

            <div className="holographic-card">
              <img src="/src/assets/images/vi.png" alt="Security Visibility" />
              <div className="content">
                <h4 className="text-base font-bold">Improved Visibility</h4>
                <p className="text-muted-foreground text-sm">
                  Gain clear insights into your security posture across accounts,
                  regions, and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-3">
              <span className="text-gradient-primary">Our Cloud</span>{' '}
              <span className="text-white">Security Approach</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              A structured security assessment focused on prevention, detection, and
              continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 01
              </div>

              <h3 className="text-lg font-bold text-brand-orange mb-3">
                Security Assessment & Risk Identification
              </h3>

              <p className="text-foreground text-sm leading-relaxed text-justify">
                We analyze IAM policies, network configurations, data protection controls,
                and logging mechanisms to identify vulnerabilities and security gaps.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• IAM and access control review</li>
                <li>• Network security evaluation</li>
                <li>• Encryption and data protection checks</li>
                <li>• Logging and monitoring assessment</li>
              </ul>
            </div>

            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 02
              </div>

              <h3 className="text-lg font-bold text-brand-orange mb-3">
                Security Hardening & Optimization
              </h3>

              <p className="text-foreground text-sm leading-relaxed text-justify">
                We implement best-practice security controls and provide actionable
                recommendations to strengthen your Cloud security posture.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Least-privilege access enforcement</li>
                <li>• Network segmentation and firewall rules</li>
                <li>• Security automation and alerting</li>
                <li>• Continuous compliance guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

{/* ================= CTA ================= */}
      <section className="bg-card border-y border-white/5">
        <div className="mx-auto px-4 py-8 text-center flex flex-col items-center justify-center max-w-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            <span className="text-gradient-primary">Secure your</span>{' '}
            <span className="text-white">Cloud workloads</span>
          </h2>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Get a <strong>free Cloud Security Review</strong> from our certified cloud experts.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-cta text-white font-bold py-2.5 px-8 rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Get Free Security Review
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
