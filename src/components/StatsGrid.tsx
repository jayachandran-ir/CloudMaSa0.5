// src/components/StatsGrid.tsx

import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: "$50M+",
    label: "Cloud Costs Saved",
    description: "For our clients annually",
  },
  {
    icon: Users,
    value: "500+",
    label: "Enterprise Clients",
    description: "Trust CloudMaSa",
  },
  {
    icon: Clock,
    value: "99.99%",
    label: "Uptime Guaranteed",
    description: "Industry-leading SLA",
  },
  {
    icon: Award,
    value: "AWS Premier",
    label: "Partner Status",
    description: "Certified excellence",
  },
];

export function StatsGrid() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/[0.10] hover:border-brand-orange/40">
                <div className="w-12 h-12 rounded-lg bg-gradient-cta flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-brand-orange font-bold uppercase tracking-widest text-[10px] mb-2">
                  {stat.label}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}