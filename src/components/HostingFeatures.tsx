// src/components/HostingFeatures.tsx

import { Cloud, Server, Database, Lock, Gauge, Globe } from "lucide-react";

const hostingFeatures = [
  {
    icon: Cloud,
    title: "Multi-Cloud Support",
    description: `Seamlessly manage AWS, Azure, and GCP environments.
Unified control through a single management dashboard.
Consistent operations across all cloud providers.
Centralized visibility with simplified governance.`,
  },
  {
    icon: Server,
    title: "Auto-Scaling",
    description: `Automatically scale resources based on real demand.
Optimized performance during peak traffic periods.
Reduced infrastructure costs during low usage.
Applications remain highly available at all times.`,
  },
  {
    icon: Database,
    title: "Managed Databases",
    description: `Fully managed database services built to scale.
Automated backups ensure strong data protection.
Fast recovery mechanisms minimize service downtime.
High availability with proven reliability standards.`,
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: `SOC 2 compliant enterprise security framework.
End-to-end encryption protects all sensitive data.
Advanced threat detection and prevention systems.
Continuous monitoring secures cloud infrastructure.`,
  },
  {
    icon: Gauge,
    title: "Performance Monitoring",
    description: `Real-time metrics deliver actionable insights.
Track application health and usage trends.
Proactively detect and resolve performance issues.
Ensure consistent application reliability.`,
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: `Lightning-fast global content delivery network.
Over 200 edge locations worldwide.
Reduced latency for international users.
Optimized performance across all regions.`,
  },
];

export function HostingFeatures() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            <span className="text-gradient-primary">
              The Complete Platform to Build
            </span>
            <br />
            <span className="text-white">Modern DevOps</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-brand-blue to-brand-orange mx-auto rounded-full" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hostingFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-xl
                         bg-gradient-to-br from-white/5 to-white/2
                         border border-white/10
                         hover:border-brand-blue/40
                         hover:shadow-lg hover:shadow-brand-blue/10
                         transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-md
                             bg-brand-blue/15
                             border border-brand-blue/30
                             flex items-center justify-center
                             shrink-0"
                >
                  <feature.icon className="w-4 h-4 text-brand-blue" />
                </div>

                {/* Strong Orange Title */}
                <h3 className="text-sm font-semibold text-orange-400 leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Description — JUSTIFIED + BIGGER */}
              <p
                className="text-blue-200 text-[13px] leading-relaxed
                           whitespace-pre-line text-justify
                           hyphens-auto"
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
