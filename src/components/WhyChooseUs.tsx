// src/components/WhyChooseUs.tsx

import { CheckCircle, Target, Lightbulb, Rocket } from 'lucide-react';

const reasons = [
  {
  icon: CheckCircle,
  title: "Proven Track Record",
  description: `Over 500+ successful cloud migrations delivered.
Average 40% reduction in cloud infrastructure costs.
Expertise across complex enterprise cloud environments.
Trusted by long-term clients across industries.`,
},
{
  icon: Target,
  title: "Tailored Solutions",
  description: `Cloud strategies aligned with business objectives.
Custom architectures built for scalability and growth.
Optimized for performance, security, and reliability.
Solutions designed to evolve with your needs.`,
},
{
  icon: Lightbulb,
  title: "Expert Team",
  description: `AWS certified architects with enterprise expertise.
Strong background in DevOps and cloud security.
Hands-on experience with modern cloud frameworks.
Focused on delivering efficient cloud solutions.`,
},
{
  icon: Rocket,
  title: "24/7 Support",
  description: `Continuous monitoring to ensure high availability.
Proactive alerts and rapid incident response.
Performance optimization around the clock.
Dedicated support team always on standby.`,
},

];

export function WhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements - Smaller and subtler */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-brand-blue/4 rounded-full blur-[70px]" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-brand-orange/4 rounded-full blur-[70px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Why Choose <span className="text-brand-blue">Cloud</span>
            <span className="text-brand-orange">MaSa</span>?
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-brand-blue to-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group glass rounded-xl p-5 hover:border-brand-orange/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-cta flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5 group-hover:text-brand-orange transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}