// src/components/TrustedByTicker.tsx

import { useEffect, useRef } from 'react';

const TrustedByTicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const speed = 2.5; // Smooth, readable speed
  const gap = 130; // Optimized gap for white-background logos

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clone for seamless infinite scroll
    const originalLogos = Array.from(container.children);
    originalLogos.forEach((logo) => {
      const clone = logo.cloneNode(true) as HTMLElement;
      container.appendChild(clone);
    });

    let scrollPosition = 0;

    const animate = () => {
      scrollPosition -= speed;
      if (scrollPosition <= -container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      container.style.transform = `translateX(${scrollPosition}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, [speed]);

  // ✅ Logo with white background
  const LogoItem = ({ src, alt }: { src: string; alt: string }) => (
    <div className="bg-white p-2 rounded-lg w-fit shadow-sm border border-white/20">
      <img 
        src={src} 
        alt={alt} 
        className="h-8 w-auto object-contain" // Consistent height
      />
    </div>
  );

  return (
    <div className="py-6 bg-background overflow-hidden border-y border-white/10">
      <div className="container mx-auto px-4 text-center">
        <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">
          Trusted by industry leaders
        </span>
      </div>

      <div className="mt-5 relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex whitespace-nowrap"
          style={{ gap: `${gap}px`, width: 'max-content' }}
        >
          <LogoItem src="/src/assets/companylogo/cloudace.jpg" alt="CloudAce Technologies" />
          <LogoItem src="/src/assets/companylogo/cryptologo.png" alt="Crypto24x7" />
          <LogoItem src="/src/assets/companylogo/telcomet.jpg" alt="Telcomet" />
          <LogoItem src="/src/assets/companylogo/dusktech.jpg" alt="DuskTech" />
          <LogoItem src="/src/assets/companylogo/alan.png" alt="Alan" />
        </div>
      </div>
    </div>
  );
};

export default TrustedByTicker;