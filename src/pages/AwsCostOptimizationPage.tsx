// src/pages/CloudCostOptimizationPage.tsx

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';

export default function AwsCostOptimizationPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Helmet>
        <title>Cloud Cost Optimization</title>
        <meta
          name="description"
          content="Reduce your Cloud bill by up to 40% with CloudMaSa's expert Cost Optimization Review. Get actionable insights and customized recommendations."
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
                  <span className="text-gradient-primary">Cloud Cost Optimization</span>{' '}
                  <span className="text-white">Review</span>
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-md mx-auto lg:mx-0">
                  Want to optimize your Cloud costs? Let our team perform a Cost Optimization Review, and you'll receive a detailed document with insights into your current usage, along with actionable steps to improve your infrastructure and reduce your Cloud expenses.
                </p>
              </div>

              {/* IMAGE */}
              <div className="order-1 lg:order-2 flex justify-center p-3">
                <img
                  src="/src/assets/images/awscost1.png"
                  alt="Cloud Cost Optimization Dashboard"
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
              Save Up to 40% on Your Cloud Bill!
            </h2>
            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-4 text-justify">
              Adopting the world’s leading cloud services is just the beginning. To fully leverage your Cloud infrastructure, it’s essential to continually optimize your costs and regularly assess your services to identify what you're using and what you're not.
            </p>
            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-4 text-justify">
              With the CloudMaSa team’s expertise, you can quickly enhance your Cloud setup and reduce costs even further through customized recommendations.
            </p>
            <p className="text-foreground text-sm sm:text-base leading-relaxed text-justify">
              The <strong>Cost Optimization Review</strong> is a comprehensive document that provides detailed insights into your current usage, along with actionable steps to optimize your infrastructure and reduce your Cloud costs.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Why is Cloud Cost Optimization essential?
            </h3>
            <p className="text-foreground text-sm sm:text-base leading-relaxed text-justify">
              Optimizing Cloud costs is crucial to avoid overspending on underutilized resources, ensuring maximum value from Cloud services. Aligning cloud expenses with actual usage boosts profitability, financial flexibility, and reduces the risk of unnecessary costs. It fosters efficient resource management and accountability while adapting to changing needs, ensuring long-term cost-effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOLOGRAPHIC ADVANTAGES ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-10 text-center">
            <span className="text-gradient-primary">Advantages of the</span>{' '}
            <span className="text-white">Cloud Cost Optimization Review</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base mb-8 text-center max-w-md mx-auto">
            Save money and improve efficiency with our cost optimization solutions tailored for your cloud infrastructure needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="holographic-card">
              <img src="/src/assets/images/savecost.png" alt="Lowered Expenses" />
              <div className="content">
                <h4 className="text-base font-bold">Lowered Expenses</h4>
                <p className="text-muted-foreground text-sm">
                  The review will assist you in identifying and removing unnecessary or underused resources, resulting in substantial cost savings.
                </p>
              </div>
            </div>

            <div className="holographic-card">
              <img src="/src/assets/images/impvisib.png" alt="Improved Visibility" />
              <div className="content">
                <h4 className="text-base font-bold">Improved Visibility</h4>
                <p className="text-muted-foreground text-sm">
                  The Review provides detailed cost and usage insights that can help you understand your organization’s resource usage better.
                </p>
              </div>
            </div>

            <div className="holographic-card">
              <img src="/src/assets/images/resource.png" alt="Enhanced Efficiency" />
              <div className="content">
                <h4 className="text-base font-bold">Enhanced Resource Efficiency</h4>
                <p className="text-muted-foreground text-sm">
                  The review will assist you in identifying and optimizing underutilized or idle resources, leading to improved resource efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">

          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              <span className="text-gradient-primary">How We Optimize</span>{' '}
              <span className="text-white">Your Cloud Costs</span>
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Our structured approach ensures visibility first, then action — delivering measurable savings without impacting performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* STEP 01 */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 01
              </div>
              <h3 className="text-base sm:text-lg font-bold text-brand-orange mb-3 mt-2">
                Uncovering Cost Optimization Opportunities
              </h3>
              <p className="text-foreground text-sm leading-relaxed text-justify mb-2">
                We begin by analyzing your Cloud environment using usage metrics, billing data,
                and historical trends. This phase focuses on identifying idle resources,
                over-provisioned services, inefficient storage usage, and hidden cost drivers
                that silently increase your Cloud bill.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Detect underutilized EC2, RDS, and storage resources</li>
                <li>• Identify cost anomalies and spending spikes</li>
                <li>• Analyze usage patterns across regions and services</li>
                <li>• Highlight immediate and long-term savings opportunities</li>
              </ul>
            </div>

            {/* STEP 02 */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
                STEP 02
              </div>
              <h3 className="text-base sm:text-lg font-bold text-brand-orange mb-3 mt-2">
                Executing Cost Optimization Strategies
              </h3>
              <p className="text-foreground text-sm leading-relaxed text-justify">
                Once opportunities are identified, we implement optimization strategies
                tailored to your workloads. These actions focus on balancing cost efficiency
                with performance, security, and scalability — without disrupting your
                production systems.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Rightsize compute and database resources</li>
                <li>• Apply auto-scaling and scheduling policies</li>
                <li>• Optimize storage tiers and data retention</li>
                <li>• Enforce cost controls with governance policies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-card border-y border-white/5">
        <div className="mx-auto px-4 py-8 text-center flex flex-col items-center justify-center max-w-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            <span className="text-gradient-primary">Ready to cut your Cloud bill by </span>
            <span className="text-white">30–50%?</span>
          </h2>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Get a <strong>free, no-obligation Cloud cost audit</strong> from our certified cloud engineers.
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
