import { useState } from "react";

const marketplaceItems = [
  {
    title: "Vendor & Solution Selection",
    desc: "Identify the right marketplace solutions aligned with your business, technical, and compliance requirements.",
    points: [
      "Vendor evaluation & shortlisting",
      "Compliance and security review",
      "Architecture compatibility checks",
      "License model analysis",
    ],
    image: "/images/vendor.webp",
  },
  {
    title: "Marketplace Procurement",
    desc: "Simplified procurement through private offers, consolidated billing, and contract alignment.",
    points: [
      "Private offers & negotiated pricing",
      "Unified cloud billing",
      "Contract & renewal alignment",
      "Procurement governance",
    ],
    image: "/images/mar.webp",
  },
  {
    title: "Secure Deployment",
    desc: "Architecture-aligned deployment with security, networking, and operational best practices.",
    points: [
      "Cloud-native deployment models",
      "IAM & network hardening",
      "Secure onboarding",
      "Operational readiness validation",
    ],
    image: "/images/secc.webp",
  },
  {
    title: "Cost & Usage Optimization",
    desc: "Continuous monitoring, license optimization, and usage analysis to maximize ROI.",
    points: [
      "Usage tracking & reporting",
      "License right-sizing",
      "Cost anomaly detection",
      "Continuous optimization cycles",
    ],
    image: "/images/costt.webp",
  },
];

export default function MarketplaceCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = marketplaceItems[activeIndex];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="text-gradient-primary">Cloud Marketplace Services</span>{" "}
            <span className="text-white">by CloudMaSa</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Unified marketplace procurement and lifecycle management across AWS, Azure, and GCP.
          </p>
        </div>

        {/* SWITCHER */}
        <div className="relative flex justify-center items-center">

          {/* LEFT BUTTON */}
          <button
            onClick={() =>
              setActiveIndex(activeIndex === 0 ? marketplaceItems.length - 1 : activeIndex - 1)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2
              w-9 h-9 rounded-md border border-white/20
              flex items-center justify-center text-lg
              hover:border-brand-orange/60 hover:text-brand-orange transition"
          >
            ‹
          </button>

          {/* CARD */}
          <div
            className="w-full sm:w-[600px] md:w-[680px] h-auto sm:h-[280px]
              border border-white/10 bg-[#0f253a]
              flex flex-col sm:flex-row items-center gap-4 sm:gap-6
              p-4 sm:p-6 transition-all duration-500"
          >
            {/* IMAGE SECTION */}
            <div className="relative w-full sm:w-[160px] h-[180px] sm:h-full flex items-center justify-center shrink-0">
              {/* Glow */}
              <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full blur-2xl bg-[#25c5e6]/30" />

              {/* Image */}
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="relative w-28 sm:w-32 h-28 sm:h-32 object-contain z-10"
              />
            </div>

            {/* CONTENT SECTION */}
            <div className="flex flex-col justify-center text-left h-full w-full">
              <h3 className="text-lg sm:text-lg font-bold text-white mb-2">
                {activeItem.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-2 sm:mb-3">
                {activeItem.desc}
              </p>

              <ul className="text-sm text-muted-foreground space-y-1">
                {activeItem.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-orange">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() =>
              setActiveIndex(activeIndex === marketplaceItems.length - 1 ? 0 : activeIndex + 1)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2
              w-9 h-9 rounded-md border border-white/20
              flex items-center justify-center text-lg
              hover:border-brand-orange/60 hover:text-brand-orange transition"
          >
            ›
          </button>
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-2 mt-6">
          {marketplaceItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 transition-all rounded-full ${
                i === activeIndex
                  ? "bg-brand-orange w-5"
                  : "bg-white/30 w-2"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
