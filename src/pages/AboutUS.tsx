import { Shield, Globe, BarChart3, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function AboutUS() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-0 md:py-12 lg:py-16 min-h-[50vh]">

          {/* Background */}
          <div className="absolute inset-0 z-0">
            <AnimatedBackground />

            {/* ✅ FIX: subtle contrast overlay (keeps animation) */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 max-w-[1024px] text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              <span className="text-gradient-primary">About</span>{" "}
              <span className="text-white">CloudMaSa</span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              CloudMaSa is a cloud-focused technology partner helping organizations
              design, secure, optimize, and scale cloud environments across AWS,
              Azure, and GCP.
            </p>
          </div>
        </section>

        {/* ================= WHO WE ARE ================= */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                <span className="text-gradient-primary">Who</span>{" "}
                <span className="text-white">We Are</span>
              </h2>

              <p className="uppercase text-sm font-semibold tracking-wide leading-relaxed text-justify">
                We deliver cloud solutions that streamline operations and boost
                efficiency through modern cloud architectures.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                Our solutions are built with security, scalability, and performance
                at the core — enabling teams to innovate confidently.
              </p>
            </div>

            <div className="w-full max-h-[320px] rounded-xl overflow-hidden border border-white/10">
              <img
                src="/images/13569.jpg"
                alt="Cloud Operations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= OUR VISION ================= */}
        <section className="py-10 sm:py-12 md:py-16 bg-muted/5">
          <div className="container mx-auto px-4 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div className="w-full max-h-[320px] rounded-xl overflow-hidden border border-white/10">
              <img
                src="/images/139704.jpg"
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                <span className="text-gradient-primary">Our</span>{" "}
                <span className="text-white">Vision</span>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                We empower businesses with resilient cloud platforms that ensure
                long-term scalability and operational excellence.
              </p>

              <ul className="space-y-3">
                {[
                  "People First",
                  "Integrity",
                  "Ownership",
                  "Growth Mindset",
                  "Teamwork",
                  "Communication",
                ].map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-orange" />
                    <span className="text-sm sm:text-base text-white">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="container mx-auto px-4">

            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                <span className="text-gradient-primary">Our Core</span>{" "}
                <span className="text-white">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Security First", desc: "Security is embedded into every architecture." },
                { icon: BarChart3, title: "Cost Efficiency", desc: "Spend smarter, scale better." },
                { icon: Users, title: "Customer Centric", desc: "Business goals drive decisions." },
                { icon: Globe, title: "Scalable Design", desc: "Built to grow with you." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-card/60 p-6 text-center"
                >
                  <item.icon className="w-9 h-9 text-brand-orange mb-4 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />

        {/* ================= LEADERSHIP TEAM ================= */}
        <section className="py-10 sm:py-12 md:py-16 bg-muted/5">
          <div className="container mx-auto px-4 max-w-[1200px]">

            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-xs sm:text-sm font-semibold tracking-widest">
                  <span className="text-gradient-primary">MEET OUR</span>{" "}
                  <span className="text-white">TEAM</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
                <span className="text-white">
                  MEET THE FOLKS LEADING <br />
                  OUR COMPANY TOWARDS <br />
                </span>
                <span className="text-orange-600">SUCCESS.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Manivannan. C",
                "Siva Swarup Reddy. R",
                "Praveen Dinavahi",
                "Meenatchi. C",
              ].map((name, index) => (
                <div key={index} className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden max-h-[260px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/60 to-transparent z-10" />
                    <img
                      src="/images/397057724_11539820.png"
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-5 w-1 bg-blue-600" />
                    <h3 className="font-semibold text-sm sm:text-base text-white">
                      {name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
