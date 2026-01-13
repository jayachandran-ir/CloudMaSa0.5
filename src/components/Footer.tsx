// src/components/Footer.tsx

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SocialLinks3D from '@/components/SocialLinks3D';

const footerLinks = {
  services: [
    { name: "AWS Cost Optimization", href: "/aws-cost-optimization" },
    { name: "Cloud Migration", href: "/services/aws-migration" },
    { name: "Security & Compliance", href: "/services/security-compliance" },
    { name: "Managed Services", href: "/services/managed-services" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Documentation", href: "/docs" },
    { name: "White Papers", href: "/white-papers" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Partners", href: "/partners" },
  ],
};

export function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-3">
              <div className="text-xl font-black tracking-tight">
                <span className="text-brand-blue">Cloud</span>
                <span className="text-brand-orange">MaSa</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-3 max-w-sm leading-relaxed text-xs">
              Revolutionizing cloud infrastructure with AI-powered optimization. 
              Your trusted partner for AWS excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-1.5">
              <a href="mailto:support@cloudmasa.com" className="flex items-center gap-2 text-[11px] text-muted-foreground hover:text-brand-orange transition-colors">
                <Mail className="w-3 h-3" />
                support@cloudmasa.com
              </a>
              <a href="tel:+916364562818" className="flex items-center gap-2 text-[11px] text-muted-foreground hover:text-brand-orange transition-colors">
                <Phone className="w-3 h-3" />
                +91 6364562818
              </a>
              <a
                href="https://www.google.com/maps/place/CloudMaSa+Technologies+Private+Ltd/@11.9390014,79.7714529,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[11px] text-muted-foreground hover:text-brand-orange transition-colors"
              >
                <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>
                  Vinayagar Kovil Street,<br />
                  Kurumbapet, Pondicherry-605009
                </span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[9px] text-brand-orange mb-3">
              Services
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[9px] text-brand-orange mb-3">
              Resources
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[9px] text-brand-orange mb-3">
              Newsletter
            </h4>
            <p className="text-muted-foreground text-[11px] mb-2">
              Stay updated with our latest insights.
            </p>
            <div className="flex gap-1">
              <Input 
                placeholder="Your email" 
                className="bg-white/5 border-white/10 focus:border-brand-orange rounded-full text-[11px] py-1.5 px-2.5"
              />
              <Button className="bg-gradient-cta rounded-full px-3 py-1.5 text-[11px] shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="hidden md:block w-1/3"></div>
          
          <div className="w-full md:w-1/3 text-center">
            <p className="text-muted-foreground text-[10px]">
              © 2024 CloudMaSa. All rights reserved.
            </p>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center gap-1">
            <span className="text-[9px] font-bold uppercase tracking-widest text-glow-orange animate-glow-orange">
              Follow Us On
            </span>
            <SocialLinks3D />
          </div>
        </div>
      </div>
    </footer>
  );
}