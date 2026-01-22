// src/components/Footer.tsx

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialLinks3D from "@/components/SocialLinks3D";

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
              We specialise in building highly secure and scalable infrastructure on AWS, Azure and GCP to meet all your diverse business needs effectively
            </p>

            {/* Contact Info */}
            <div className="space-y-1.5">
              <a
                href="mailto:support@cloudmasa.com"
                className="flex items-center gap-2 text-[11px] text-muted-foreground hover:text-brand-orange transition-colors"
              >
                <Mail className="w-3 h-3" />
                support@cloudmasa.com
              </a>

              <a
                href="tel:+916364562818"
                className="flex items-center gap-2 text-[11px] text-muted-foreground hover:text-brand-orange transition-colors"
              >
                <Phone className="w-3 h-3" />
                +91 63645 62818
              </a>

              <a
                href="https://www.google.com/maps/place/CloudMaSa+Technologies+Private+Ltd/@11.9397093,79.7688992,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[11px] text-muted-foreground hover:text-brand-orange transition-colors"
              >
                <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>
                  Vinayagar Kovil Street,<br />
                  Kurumbapet, Pondicherry-605 009, India
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
              <li>
                <Link to="/cloud-cost-optimization" className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                  Cloud Cost Optimization
                </Link>
              </li>
              <li>
                <Link to="/cloud-migration" className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                  Migration to Cloud
                </Link>
              </li>
              <li>
                <Link to="/well-architected" className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                  Well Architecture Framework
                </Link>
              </li>
              <li>
                <Link to="/cloud-security" className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link to="/cloud-surveillance" className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                  Surveillance Service
                </Link>
              </li>
              <li>
                <Link to="/cloud-marketplace" className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                  Cloud Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[9px] text-brand-orange mb-3">
              Resources
            </h4>

            <ul className="space-y-1.5">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[9px] text-brand-orange mb-3">
              Company
            </h4>

            <ul className="space-y-1.5">
              <li>
                <Link to="/about-us" className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/free-consultation" className="text-muted-foreground hover:text-foreground transition-colors text-[11px]">
                  Free Consultation
                </Link>
              </li>
            </ul>
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
