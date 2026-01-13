// src/pages/AwsCostOptimizationPage.tsx

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
    <>
      <Helmet>
        <title>AWS Cost Optimization</title>
        <meta
          name="description"
          content="Reduce your AWS bill by up to 40% with CloudMaSa's expert Cost Optimization Review. Get actionable insights and customized recommendations."
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-background">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10 rounded-b-[150px] border-[1px] border-[#00BFFF]/70"></div>

        <section className="relative z-20 flex items-center py-6 md:py-8 rounded-b-[60px]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
              <div className="order-2 lg:order-1 lg:ml-16">
                <h1 className="text-2xl font-bold tracking-tight leading-tight">
                  <span className="text-gradient-primary">AWS Cost Optimization</span>{' '}
                  <span className="text-white">Review</span>
                </h1>
                <p className="text-muted-foreground text-base mt-4 max-w-md">
                  Want to optimize your AWS costs? Let our team perform a Cost Optimization Review, and you'll receive a detailed document with insights into your current usage, along with actionable steps to improve your infrastructure and reduce your AWS expenses.
                </p>
              </div>

              <div className="order-1 lg:order-2 flex justify-center p-3">
                <img
                  src="/src/assets/images/awscost1.png"
                  alt="AWS Cost Optimization Dashboard"
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
            <h2 className="text-2xl font-bold mb-5 text-left bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Save Up to 40% on Your AWS Bill!
            </h2>
            <p className="text-foreground text-base leading-relaxed mb-4 text-justify">
              Adopting the world’s leading cloud services is just the beginning. To fully leverage your AWS infrastructure, it’s essential to continually optimize your costs and regularly assess your services to identify what you're using and what you're not.
            </p>
            <p className="text-foreground text-base leading-relaxed mb-4 text-justify">
              With the CloudMaSa team’s expertise, you can quickly enhance your AWS setup and reduce costs even further through customized recommendations.
            </p>
            <p className="text-foreground text-base leading-relaxed text-justify">
              The <strong>Cost Optimization Review</strong> is a comprehensive document that provides detailed insights into your current usage, along with actionable steps to optimize your infrastructure and reduce your AWS costs.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-left bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              Why is AWS Cost Optimization essential?
            </h3>
            <p className="text-foreground text-base leading-relaxed text-justify">
              Optimizing AWS costs is crucial to avoid overspending on underutilized resources, ensuring maximum value from AWS services. Aligning cloud expenses with actual usage boosts profitability, financial flexibility, and reduces the risk of unnecessary costs. It fosters efficient resource management and accountability while adapting to changing needs, ensuring long-term cost-effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Holographic Advantages */} 
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-center mb-12 font-bold mb-3"> 
              <span className="text-gradient-primary">Advantages of the</span>{' '}
              <span className="text-white">AWS Cost Optimization Review </span>
            </h2>
          <p className="text-muted-foreground text-center mb-6 max-w-lg mx-auto text-base">
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
            {/* Cost Optimization Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-3">
              <span className="text-gradient-primary">How We Optimize</span>{' '}
              <span className="text-white">Your AWS Costs</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              Our structured approach ensures visibility first, then action — delivering
              measurable savings without impacting performance.
            </p>
          </div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Discover */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                STEP 01
              </div>

              <h3 className="text-lg font-bold text-brand-orange mb-3">
                Uncovering Cost Optimization Opportunities
              </h3>

              <p className="text-foreground text-sm leading-relaxed text-justify">
                We begin by analyzing your AWS environment using usage metrics, billing data,
                and historical trends. This phase focuses on identifying idle resources,
                over-provisioned services, inefficient storage usage, and hidden cost drivers
                that silently increase your AWS bill.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Detect underutilized EC2, RDS, and storage resources</li>
                <li>• Identify cost anomalies and spending spikes</li>
                <li>• Analyze usage patterns across regions and services</li>
                <li>• Highlight immediate and long-term savings opportunities</li>
              </ul>
            </div>

            {/* Execute */}
            <div className="relative p-6 rounded-xl border border-white/10 bg-card/60 backdrop-blur-md hover:border-brand-orange/40 transition-all">
              <div className="absolute -top-3 left-6 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                STEP 02
              </div>

              <h3 className="text-lg font-bold text-brand-orange mb-3">
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

      {/* Final CTA */}
      <section className="bg-card border-y border-white/5">
          <div 
            className="mx-auto px-4 text-center flex flex-col items-center justify-center"
            style={{ width: '480px', height: '150px' }}
          >
          <h2 className="text-2xl font-bold mb-4 whitespace-nowrap">
            <span className="text-gradient-primary">Ready to cut your AWS bill by </span>
            <span className="text-white">30–50%?</span>
          </h2>       
          <p className="text-muted-foreground mb-4 text-base">
              Get a <strong>free, no-obligation AWS cost audit</strong> from our certified cloud engineers.
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
