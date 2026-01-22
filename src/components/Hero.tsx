"use client";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from "react";

export function Hero() { 
  const [isLaunching, setIsLaunching] = useState(false);
  const [showRocket, setShowRocket] = useState(true);

  const launchRocket = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    
    // Create smoke particles
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const smoke = document.createElement("div");
        smoke.className = "rocket-smoke-particle";
        smoke.style.left = `calc(50% + ${(Math.random() - 0.5) * 30}px)`;
        smoke.style.animationDelay = `${Math.random() * 0.2}s`;
        document.getElementById("rocket-container")?.appendChild(smoke);
        setTimeout(() => smoke.remove(), 1500);
      }, i * 100);
    }

    setTimeout(() => {
      setShowRocket(false);
      setIsLaunching(false);
      // Reset rocket after animation
      setTimeout(() => setShowRocket(true), 1000);
    }, 2000);
  };
  
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
            <Link to="/free-consultation">
              <Button 
                size="lg" 
                className="bg-gradient-cta text-white rounded-full px-7 py-5 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all group"
              >
                Get Started Free
                <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-7 py-5 text-xs font-bold uppercase tracking-wider border-white/20 hover:bg-white/5 group"
              onClick={() => {
                document
                  .getElementById("cloudmasa-app")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
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

      {/* Rocket Launch Container */}
      <div 
        id="rocket-container"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={launchRocket}
      >
        <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center items-center relative overflow-visible">
          
          {showRocket && (
            <div className={`rocket-wrapper ${isLaunching ? 'animate-rocket-zigzag' : 'animate-bounce-rocket'}`}>
              {/* Rocket SVG */}
              <svg 
                width="24" 
                height="36" 
                viewBox="0 0 24 36" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="rocket-svg"
              >
                {/* Rocket Body */}
                <ellipse cx="12" cy="14" rx="6" ry="12" fill="url(#rocketGradient)" />
                
                {/* Rocket Nose */}
                <path d="M12 2 L8 10 L16 10 Z" fill="#FF6B35" />
                
                {/* Window */}
                <circle cx="12" cy="12" r="3" fill="#1E3A5F" stroke="#87CEEB" strokeWidth="1" />
                <circle cx="11" cy="11" r="1" fill="rgba(255,255,255,0.6)" />
                
                {/* Left Fin */}
                <path d="M6 20 L2 28 L6 26 Z" fill="#FF6B35" />
                
                {/* Right Fin */}
                <path d="M18 20 L22 28 L18 26 Z" fill="#FF6B35" />
                
                {/* Bottom Detail */}
                <rect x="9" y="24" width="6" height="3" rx="1" fill="#1E3A5F" />
                
                {/* Flame */}
                <g className={isLaunching ? 'animate-flame-intense' : 'animate-flame'}>
                  <ellipse cx="12" cy="30" rx="4" ry="5" fill="url(#flameGradient)" />
                  <ellipse cx="12" cy="32" rx="2.5" ry="3" fill="#FFEB3B" />
                  <ellipse cx="12" cy="33" rx="1.5" ry="2" fill="#FFF" />
                </g>
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="rocketGradient" x1="6" y1="2" x2="18" y2="26" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E8E8E8" />
                    <stop offset="50%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#C0C0C0" />
                  </linearGradient>
                  <linearGradient id="flameGradient" x1="12" y1="26" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FF6B35" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Smoke Trail when launching */}
              {isLaunching && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="smoke-particle smoke-1" />
                  <div className="smoke-particle smoke-2" />
                  <div className="smoke-particle smoke-3" />
                </div>
              )}
            </div>
          )}
        </div>
        
      </div>

      
    </section>
  );
}
