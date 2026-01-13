// src/components/Hero.tsx

"use client";

import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Gradient Orbs - Smaller and less intense */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[70px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-gradient-primary">Empowering
                        Your Secure
                        Cloud
            </span> 
            <br />
            Infrastructure
          </h1>

          <p
            className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Strategic technology advice to help plan your future growth.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-cta text-white rounded-full px-7 py-5 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all group"
            >
              Get Started Free
              <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-7 py-5 text-xs font-bold uppercase tracking-wider border-white/20 hover:bg-white/5 group"
            >
              <Play className="w-3 h-3 mr-1.5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Preview - More compact */}
          <div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            {[
              { value: "40%", label: "Cost Reduction" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "500+", label: "Happy Clients" },
              { value: "24/7", label: "Expert Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-2xl font-black text-brand-orange mb-1.5">
                  {stat.value}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Slightly smaller */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}