import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  // ✅ Only one FAQ open at a time
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Pricing</title>
      </Helmet>

      <main className="relative min-h-screen bg-background text-foreground">
        <Navbar />

        {/* ================= HERO ================= */}
        <section className="pt-28 pb-20 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
            <span className="text-gradient-primary">Simple plans</span>{" "}
            <span className="text-white">for real growth</span>
          </h1>

          <p className="text-muted-foreground mb-8">
            Choose a plan that aligns with your business objectives
          </p>

          {/* ================= PRICING TOGGLE ================= */}
          <div
            className="relative inline-flex items-center bg-white/5 rounded-full 
                        p-1 border border-white/10 cursor-pointer select-none mx-auto"
            onClick={() => setIsYearly(!isYearly)}
          >
            {/* Sliding background */}
            <div
              className={cn(
                "absolute inset-1 w-1/2 rounded-full bg-brand-orange transition-transform duration-300",
                isYearly ? "translate-x-full" : "translate-x-0"
              )}
            />

            {/* Monthly */}
            <span
              className={cn(
                "relative z-10 w-28 text-center py-1 text-sm rounded-full transition-colors duration-300",
                isYearly ? "text-muted-foreground" : "text-black font-semibold"
              )}
            >
              Monthly
            </span>

            {/* Yearly */}
            <span
              className={cn(
                "relative z-10 w-28 text-center py-1 text-sm rounded-full transition-colors duration-300",
                isYearly ? "text-black font-semibold" : "text-muted-foreground"
              )}
            >
              Yearly
            </span>
          </div>
        </section>

        {/* ================= PRICING CARDS ================= */}
        <section className="container mx-auto px-16 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-[3px] items-stretch">


            <PricingCard
              title="Free"
              price="$0"
              description="Everything you need to launch your business"
              features={[
                "Upto 2 Users",
                "Upto 3 Applications",
                "Upto 1 Kubernetes Cluster",
                "GitOps, IaC & Templates",
                "Community support",
              ]}
              buttonText="Get Started"
            />

            <PricingCard
              popular
              title="Business"
              // ✅ Monthly: $25/mo  |  Yearly: $300/yr
              price={isYearly ? "$300/yr" : "$25/mo"}
              description="Essential plan with core features for growing businesses"
              features={[
                "Upto 20 Users",
                "2 Services Pack",
                "Upto 3 Kubernetes Clusters",
                "GitOps, IaC & Templates",
                "Slack Support",
                "Audit Logs",
              ]}
              buttonText="Get Started"
            />

            <PricingCard
              premium
              title="Premium"
              price="Custom"
              description="Advanced features to power your business growth"
              features={[
                "Unlimited Users",
                "Unlimited Websites Developments",
                "Unlimited Services Pack",
                "Unlimited Kubernetes Clusters",
                "GitOps, IaC & Templates",
                "24 hours SLA",
                "SAML & OIDC",
              ]}
              buttonText="Get Started"
            />
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            ✨ Your Growth, Our Responsibility
          </p>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="container mx-auto px-4 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT */}
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                <span className="text-gradient-primary">Frequently Asked</span>{" "}
                <span className="text-white">Questions!</span>
              </h1>

              <div className="flex flex-col items-start text-justify">
                <p className="max-w-md text-muted-foreground">
                  Explore our Frequently Asked Questions to find clear answers
                  about our cloud services, including setup, features, and
                  support. We're here to help you understand and optimize your
                  cloud experience.
                </p>
              </div>
{/* ✅ Desktop-only glowing image (no blur background, soft white glow) */}
<div className="hidden lg:block pt-6">
  <div className="relative max-w-[260px] mx-auto">
    <img
      src="/images/faq.webp"
      alt="FAQ illustration"
      className="relative w-full  
                 drop-shadow-[0_0_18px_rgba(255,255,255,0.5)]"
    />
  </div>
</div>



            </div>

            {/* RIGHT */}
            <div className="space-y-4">
              <FAQItem
                question="What are cloud services?"
                answer="Cloud services refer to a wide range of on-demand computing services, such as storage, networking, databases, and software, that are delivered over the internet. Instead of managing physical servers or infrastructure, you can use cloud providers to host and manage your resources."
                open={openFaqIndex === 0}
                onToggle={() =>
                  setOpenFaqIndex((prev) => (prev === 0 ? null : 0))
                }
              />

              <FAQItem
                question="What are the types of cloud services?"
                answer="Infrastructure as a Service (IaaS): Provides virtualized computing resources over the internet. Platform as a Service (PaaS): Offers platforms to develop, run, and manage applications without dealing with the underlying infrastructure. Software as a Service (SaaS): Delivers software applications over the internet, eliminating the need for installation or maintenance."
                open={openFaqIndex === 1}
                onToggle={() =>
                  setOpenFaqIndex((prev) => (prev === 1 ? null : 1))
                }
              />

              <FAQItem
                question="What are the benefits of cloud services?"
                answer="Cost-effective: You pay only for the resources you use. Scalability: Easily scale up or down based on your business needs. Flexibility: Access your data and applications from anywhere with an internet connection. Disaster recovery: Cloud providers often have built-in data backup and recovery systems."
                open={openFaqIndex === 2}
                onToggle={() =>
                  setOpenFaqIndex((prev) => (prev === 2 ? null : 2))
                }
              />

              <FAQItem
                question="Is cloud computing secure?"
                answer="Yes, most cloud providers invest heavily in security measures, such as encryption, firewalls, and identity management. However, it’s important to follow best practices like strong password policies and regular security audits to protect your data."
                open={openFaqIndex === 3}
                onToggle={() =>
                  setOpenFaqIndex((prev) => (prev === 3 ? null : 3))
                }
              />

              <FAQItem
                question="How does cloud storage work?"
                answer="Cloud storage allows users to store and access data over the internet. Instead of saving files on local devices or physical servers, your data is stored on remote servers maintained by a cloud provider. You can access this data from anywhere and at any time."
                open={openFaqIndex === 4}
                onToggle={() =>
                  setOpenFaqIndex((prev) => (prev === 4 ? null : 4))
                }
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

/* ================= PRICING CARD ================= */
function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  popular = false,
  premium = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  premium?: boolean;
}) {
  return (
    <div
      className={cn(
        // ✅ Slightly smaller card + text sizing tuned
        "relative h-full w-full max-w-[320px] lg:max-w-[300px] mx-auto rounded-2xl p-4 flex flex-col border backdrop-blur-xl transition-all",
        premium
          ? "bg-gradient-to-br from-brand-orange via-orange-500 to-pink-600 border-transparent shadow-[0_0_40px_-10px_rgba(255,140,0,0.6)]"
          : "bg-white/5 border-white/10"
      )}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-black text-[10px] font-bold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <div className="mb-3">
        <h3
          className={cn(
            // ✅ smaller title
            "text-sm font-bold mb-2",
            premium ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            // ✅ smaller description
            "text-xs",
            premium ? "text-white/90" : "text-muted-foreground"
          )}
        >
          {description}
        </p>

        <div
          className={cn(
            // ✅ smaller price
            "text-xl font-extrabold mt-3",
            premium ? "text-white" : "text-foreground"
          )}
        >
          {price}
        </div>
      </div>

      <ul className="space-y-2 text-xs flex-1 mt-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check
              className={cn(
                "w-4 h-4 mt-0.5 shrink-0",
                premium ? "text-white" : "text-brand-orange"
              )}
            />
            <span className={cn(premium ? "text-white" : "text-foreground")}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          "w-full mt-5 font-semibold text-sm",
          premium
            ? "bg-black text-white hover:bg-black/90"
            : "bg-gradient-cta text-white"
        )}
      >
        {buttonText}
      </Button>
    </div>
  );
}

/* ================= FAQ ITEM ================= */
function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "border border-white/10 rounded-xl bg-white/5 backdrop-blur transition-all",
        open && "border-white/20"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-4 text-left"
      >
        <span className={cn("font-medium", open && "text-white")}>
          {question}
        </span>

        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div
          className={cn(
            "px-4 pb-4 text-sm text-muted-foreground",
            // ✅ White glow mainly on the answer
            "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]"
          )}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

