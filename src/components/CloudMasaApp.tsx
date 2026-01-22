// src/components/CloudMasaApp.tsx

import { CheckCircle } from 'lucide-react';

export function CloudMasaApp() {
  const features = [
    "Cloud Strategy & Optimization",
    "Automated Compliance Audits",
    "Seamless Cloud Migration",
  ];

  return ( 
    <section id="cloudmasa-app" 
      className="py-20 bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-[10px] font-mono text-brand-orange">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              CloudMaSa App
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              <span className="text-gradient-primary">Cloud</span>
              <span className="text-brand-orange ml-1">MaSa</span> App
            </h2>
            
            <p className="text-blue-200 text-sm leading-relaxed">
              Revolutionize your infrastructure deployment with our intelligent cloud assistant. Ask it anything, from
              IAM policies to serverless architecture designs.
            </p>
            
            <ul className="space-y-3">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-white text-sm font-medium">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center">
                    <CheckCircle className="w-2.5 h-2.5 text-brand-orange" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal Preview - SLIGHTLY LARGER */}
          <div className="relative">
            {/* 🔧 SIZE CONTROL: Adjust max-w-md → max-w-lg for wider, or add min-h */}
            <div className="w-full max-w-xl mx-auto min-h-[480px] rounded-xl border border-white/10 bg-card p-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>

              <div className="space-y-2.5 font-mono text-xs leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-brand-orange">$</span>
                  <span className="text-white">cloudmasa optimize production --report</span>
                </div>
                <div className="text-brand-orange">Initializing CloudMaSa Agent...</div>
                <div className="text-brand-blue">✓ Scanning AWS resources...</div>
                <div className="text-brand-blue">✓ Analyzing cost patterns...</div>
                <div className="text-brand-blue">✓ Identifying optimization opportunities...</div>
                <div className="text-green-400 mt-3 pt-3 border-t border-white/10">
                  <div className="font-bold">📊 Optimization Report Generated:</div>
                  <div className="mt-1.5 space-y-1 text-blue-200">
                    <div>• Potential savings: <span className="text-brand-orange font-bold">$12,450/month</span></div>
                    <div>• Unused resources: <span className="text-brand-orange font-bold">23 instances</span></div>
                    <div>• Performance boost: <span className="text-brand-orange font-bold">+35%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}