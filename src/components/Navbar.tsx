// src/components/Navbar.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Shield,
  BarChart,
  Layout,
  Truck,
  Search,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// === SERVICES DATA (UNCHANGED) ===
const SERVICES_DATA = [
  {
    title: "CLOUD COST OPTIMIZATION",
    description: "Squeeze the best performance out of your AWS infrastructure for less money",
    icon: BarChart,
    path: "/cloud-cost-optimization",
  },
  {
    title: "WELL ARCHITECTED FRAMEWORK",
    description: "Build secure, high-performing cloud infrastructure",
    icon: Layout,
    path: "/well-architected",
  },
  {
    title: "SURVEILLANCE SERVICE",
    description: "24/7 monitoring catches any potential issues before they turn into a problem",
    icon: Search,
    path: "/cloud-surveillance",
  },
  {
    title: "MIGRATION TO CLOUD",
    description: "Seamlessly transfer your cloud infrastructure to minimal downtime",
    icon: Truck,
    path: "/cloud-migration",
  },
  {
    title: "CLOUD SECURITY",
    description: "Protect your cloud infrastructure with sophisticated security tools",
    icon: Shield,
    path: "/cloud-security",
  },
  {
    title: "AWS MARKETPLACE",
    description: "Access the best tools for your use case via the AWS Marketplace",
    icon: ShoppingBag,
    path: "/cloud-marketplace",
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-2xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* LEFT: Logo + Desktop Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-0.5">
              {/* ROUND LOGO */}
              <img
                src="/src/assets/companylogo/roundmasa.webp"
                alt="CloudMaSa Logo"
                className="w-14 h-14 rounded-full object-cover"
              />

              {/* TEXT LOGO */}
              <span className="font-extrabold text-lg tracking-tight leading-none">
                <span className="text-blue-400">Cloud</span>
                <span className="text-brand-orange">MaSa</span>
              </span>
            </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider">
            <Link to="/" className="text-brand-orange hover:text-orange-400">
              HOME
            </Link>

            <div className="group relative py-5">
              <button className="flex items-center gap-1 hover:text-brand-orange">
                SERVICES <ChevronDown className="w-3 h-3" />
              </button>
              <MegaMenu items={SERVICES_DATA} cols={3} />
            </div>

            <Link to="/blog" className="hover:text-brand-orange">
              BLOG
            </Link>

            <a
              href="https://www.docs.cloudmasa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange"
            >
              DOCUMENTATION
            </a>

            <Link to="/about-us" className="hover:text-brand-orange">
              ABOUT US
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 ml-auto">
          <Link
            to="/contact"
            className="hidden lg:block hover:text-brand-orange font-bold text-[11px]"
          >
            CONTACT US
          </Link>

          <Button className="hidden lg:flex bg-gradient-cta text-white rounded-full px-5 py-4 text-[12px]">
            Free Consultation
          </Button>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full glass-strong transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3 text-left font-bold uppercase text-[13px]">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            HOME
          </Link>

          {/* ✅ MOBILE SERVICES DROPDOWN */}
          <button
            className="flex items-center justify-between"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            <span>SERVICES</span>
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform",
                mobileServicesOpen && "rotate-180"
              )}
            />
          </button>

          {mobileServicesOpen && (
            <div className="ml-4 flex flex-col gap-2 text-[12px]">
              {SERVICES_DATA.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="hover:text-brand-orange"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}

          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
            BLOG
          </Link>

          <a
            href="https://www.docs.cloudmasa.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOCUMENTATION
          </a>

          <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>
            ABOUT US
          </Link>

          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            CONTACT US
          </Link>

          <Button className="mt-3 bg-gradient-cta text-white">
            Free Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
}

// ================= DESKTOP MEGA MENU (UNCHANGED) =================
function MegaMenu({ items, cols }: { items: typeof SERVICES_DATA; cols: number }) {
  const gridClass = cols === 3 ? "grid grid-cols-3" : "grid grid-cols-1";

  return (
    <div
      className={`${gridClass} absolute top-full left-0 w-full sm:w-[800px] max-w-[90vw] glass-strong rounded-2xl p-6 shadow-2xl gap-x-8 gap-y-6 mt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300`}
    >
      {items.map((item, idx) => (
        <Link key={idx} to={item.path} className="flex gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
            <item.icon className="w-4 h-4 text-brand-orange" />
          </div>
          <div>
            <h4 className="text-brand-orange text-[10px] font-bold uppercase">
              {item.title}
            </h4>
            <p className="text-[8px] text-muted-foreground">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
