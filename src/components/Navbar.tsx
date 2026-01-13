// src/components/Navbar.tsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// === SERVICES: 6 items → will display as 3 cols × 2 rows ===
const SERVICES_DATA = [
  {
    title: 'AWS COST OPTIMIZATION',
    description: 'Squeeze the best performance out of your AWS infrastructure for less money',
    icon: BarChart,
    path: '/aws-cost-optimization',
  },
  {
    title: 'WELL ARCHITECTED FRAMEWORK',
    description: 'Build secure, high-performing cloud infrastructure',
    icon: Layout,
    path: '/well-architected',
  },
  {
    title: 'SURVEILLANCE SERVICE',
    description: '24/7 monitoring catches any potential issues before they turn into a problem',
    icon: Search,
    path: '/aws-surveillance',
  },
  {
    title: 'MIGRATION TO AWS',
    description: 'Seamlessly transfer your cloud infrastructure to AWS with minimal downtime',
    icon: Truck,
    path: '/aws-migration',
  },
  {
    title: 'AWS SECURITY',
    description: 'Protect your AWS infrastructure with sophisticated security tools',
    icon: Shield,
    path: '/aws-security',
  },
  {
    title: 'AWS MARKETPLACE',
    description: 'Access the best tools for your use case via the AWS Marketplace',
    icon: ShoppingBag,
    path: '/cloud-marketplace',
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-2xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* LEFT: Logo + Main Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img
              src="/src/assets/companylogo/cloudmasa.png"
              alt="CloudMaSa"
              className="max-h-[120px] max-w-[150px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider">
            <Link to="/" className="text-brand-orange hover:text-orange-400 transition-colors">
              HOME
            </Link>

            {/* SERVICES - 3 columns, 2 rows */}
            <div className="group relative py-5">
              <button className="flex items-center gap-1 hover:text-brand-orange transition-colors uppercase text-foreground">
                SERVICES <ChevronDown className="w-3 h-3" />
              </button>
              <MegaMenu items={SERVICES_DATA} cols={3} />
            </div>

            {/* BLOG - just a link, no dropdown */}
            <Link
              to="/blog"
              className="hover:text-brand-orange transition-colors uppercase text-foreground"
            >
              BLOG
            </Link>

            {/* DOCUMENTATION */}
            <Link
              to="/docs"
              className="hover:text-brand-orange transition-colors uppercase text-foreground"
            >
              DOCUMENTATION
            </Link>
            {/* ABOUT US */}
              <Link
                to="/about"
                className="hover:text-brand-orange transition-colors uppercase text-foreground"
              >
                ABOUT US
              </Link>
          </div>
        </div>

        {/* RIGHT: Contact & CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 ml-auto">
          <Link
            to="/contact"
            className="hidden lg:block hover:text-brand-orange transition-colors uppercase text-foreground font-bold text-[11px]"
          >
            CONTACT US
          </Link>
          <Button className="hidden lg:flex bg-gradient-cta text-white rounded-full px-5 py-4 font-bold text-[12px] uppercase tracking-wider hover:opacity-90 transition-opacity">
            Free Consultation
          </Button>
          <button
            className="lg:hidden p-1.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 w-full glass-strong transition-all duration-300',
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
          <Link
            to="/"
            className="text-brand-orange font-bold uppercase tracking-widest py-1.5 text-[13px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/aws-cost-optimization"
            className="text-foreground font-bold uppercase tracking-widest py-1.5 text-[13px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            to="/blog"
            className="text-foreground font-bold uppercase tracking-widest py-1.5 text-[13px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            BLOG
          </Link>
          <Link
            to="/docs"
            className="text-foreground font-bold uppercase tracking-widest py-1.5 text-[13px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            DOCUMENTATION
          </Link>
          <Link
            to="/about"
            className="text-foreground font-bold uppercase tracking-widest py-1.5 text-[13px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            to="/contact"
            className="text-foreground font-bold uppercase tracking-widest py-1.5 text-[13px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT US
          </Link>
          <Button className="bg-gradient-cta text-white rounded-full px-5 py-3 font-bold text-[12px] uppercase tracking-wider mt-3">
            Free Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
}

// ✅ Reusable MegaMenu with dynamic columns
function MegaMenu({ items, cols }: { items: typeof SERVICES_DATA; cols: number }) {
  // Define grid class based on cols
  const gridClass = cols === 3 ? 'grid grid-cols-3' : 'grid grid-cols-1';

  return (
    <div
      className={`${gridClass} absolute top-full left-0 w-full sm:w-[800px] max-w-[90vw] glass-strong rounded-2xl p-6 shadow-2xl gap-x-8 gap-y-6 mt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50`}
    >
      {items.map((item, idx) => (
        <Link key={idx} to={item.path || '#'} className="flex gap-3 group/item no-underline">
          <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 group-hover/item:border-brand-orange/40 transition-colors">
            <item.icon className="w-4 h-4 text-brand-orange" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-brand-orange font-bold text-[10px] tracking-wider uppercase">
              {item.title}
            </h4>
            <p className="text-[8px] text-muted-foreground font-medium leading-relaxed">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
