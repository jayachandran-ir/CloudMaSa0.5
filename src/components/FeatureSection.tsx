// src/components/FeatureSection.tsx

import { Shield, TrendingUp, Zap, Clock } from 'lucide-react';

const features = [
  {
    title: "Security Compliance",
    description: "Automated security with vulnerability scanning, role-based access, and compliance monitoring.",
    icon: Shield,
    badge: "SAFETY",
    color: "text-brand-orange",
  },
  {
    title: "Cost Optimization",
    description: "Reduce cloud costs with intelligent resource allocation and automated scaling based on demand.",
    icon: TrendingUp,
    badge: "EFFICIENCY",
    color: "text-green-400",
  },
  {
    title: "Boost Developer Productivity",
    description: "Empower your team with seamless workflows and faster deployment cycles.",
    icon: Zap,
    badge: "PERFORMANCE",
    color: "text-brand-cyan",
  },
  {
    title: "Faster Time-to-Market",
    description: "Automate infrastructure and deployment, speeding up development cycles.",
    icon: Clock,
    badge: "SPEED",
    color: "text-brand-blue",
  },
];

export function FeatureSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-fade-in">
          {/* ✅ Gradient + Normal Text Pattern */}
          <h2 className="text-xl md:text-3xl font-bold mb-3 max-w-3xl">
            <span className="text-gradient-primary">Build</span>{' '}
            <span className="text-white">Faster.</span>{' '}
            <span className="text-gradient-primary">Deploy</span>{' '}
            <span className="text-white">Securely.</span>{' '}
            <span className="text-gradient-primary">Scale</span>{' '}
            <span className="text-white">Intelligently.</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
            Your team’s toolkit to stop configuring and start innovating with automated, secure, and cost-efficient DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative group p-5 rounded-lg border border-white/10 bg-white/[0.02] transition-all animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-2.5 flex items-center justify-between">
                <div className={`p-1 rounded-md ${feature.color}/20 border ${feature.color}/30`}>
                  <feature.icon className={`h-4 w-4 ${feature.color}`} />
                </div>
                <span className={`text-[8px] font-bold tracking-widest ${feature.color} opacity-80 uppercase`}>
                  {feature.badge}
                </span>
              </div>
              <h3 className={`text-base font-bold mb-1.5 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}