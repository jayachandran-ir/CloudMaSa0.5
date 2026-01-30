// src/components/CloudMasaApp.tsx

import { CheckCircle } from "lucide-react";

export function CloudMasaApp() {
  

  return (
    <section
      id="cloudmasa-app"
      className="py-20 bg-white/5 border-y border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="space-y-8">

          {/* ===== TOP HEADING ===== */}
          <div className="space-y-5 text-center">
            

            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              <span className="text-gradient-primary">Cloud</span>
              <span className="text-brand-orange ml-1">MaSa</span> App
            </h2>
          </div>

          {/* ===== STORYLANE INLINE DEMO ===== */}
          <div className="relative w-full">
            <div className="w-full max-w-4xl mx-auto">

              <div
                className="sl-embed"
                style={{
                  position: "relative",
                  paddingBottom: "calc(50.52% + 0px)",
                  width: "100%",
                  height: 0,
                  transform: "scale(1)",
                }}
              >
                <iframe
                  loading="lazy"
                  className="sl-demo"
                  src="https://app.storylane.io/demo/ovgpq07uhuh8?embed=inline"
                  name="sl-embed"
                  allow="fullscreen"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "1px solid rgba(63,95,172,0.35)",
                    boxShadow: "0px 0px 18px rgba(26, 19, 72, 0.15)",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
