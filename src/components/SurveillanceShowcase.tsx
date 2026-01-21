"use client";

import { useEffect, useState } from "react";
import {
  Server,
  Eye,
  BellRing,
  Radar,
} from "lucide-react";

const pillarData = [
  {
    title: "Infrastructure Monitoring",
    desc:
      "Monitor EC2, load balancers, storage, and networking components to ensure availability and performance.",
    img: "/images/infra.png",
    icon: Server,
  },
  {
    title: "Application Observability",
    desc:
      "Gain deep insights into application behavior using logs, metrics, and distributed tracing.",
    img: "/images/ap.png",
    icon: Eye,
  },
  {
    title: "Intelligent Alerting",
    desc:
      "Smart alerts reduce noise and notify teams only when action is required.",
    img: "/images/altering.png",
    icon: BellRing,
  },
  {
    title: "Incident Visibility",
    desc:
      "Detect incidents early, correlate signals, and accelerate root cause analysis.",
    img: "/images/inc.png",
    icon: Radar,
  },
];

export default function SurveillanceShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % pillarData.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-background min-h-[calc(100vh-96px)] flex items-center">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — PILLARS */}
          <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
            {pillarData.map((pillar, index) => {
              const isActive = index === active;
              const Icon = pillar.icon;

              return (
                <div
                  key={index}
                  className={`
                    h-[104px] w-full
                    rounded-xl p-4 border
                    flex gap-3 items-start
                    transition-all duration-700
                    ${isActive
                      ? "border-blue-500/60 bg-[#102a43] shadow-[0_0_22px_rgba(59,130,246,0.25)] opacity-100"
                      : "border-white/10 bg-[#102a43]/60 opacity-40"}
                  `}
                >
                  <Icon
                    className={`
                      w-5 h-5 mt-1 shrink-0
                      ${isActive ? "text-blue-400" : "text-muted-foreground"}
                    `}
                  />

                  <div>
                    <h4
                      className={`
                        text-base font-semibold mb-0.5
                        ${isActive
                          ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                          : "text-muted-foreground"}
                      `}
                    >
                      {pillar.title}
                    </h4>

                    <p
                      className={`
                        text-sm leading-snug
                        ${isActive ? "text-white" : "text-muted-foreground"}
                      `}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — TOPIC + IMAGE */}
          <div className="flex flex-col items-center text-center">

            {/* TOPIC */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-10 leading-tight">
              <span className="text-gradient-primary block">
                Ensure Continuous Visibility
              </span>
              <span className="text-white block">
                with CloudMaSa
              </span>
            </h2>

            {/* IMAGE */}
            <div className="relative w-full h-[380px] flex items-center justify-center overflow-hidden">
              {pillarData.map((pillar, index) => (
                <img
                  key={index}
                  src={pillar.img}
                  alt={pillar.title}
                  className={`
                    absolute max-w-[460px] w-full h-auto rounded-xl
                    transition-all duration-1000 ease-in-out
                    ${index === active
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-24 scale-95"}
                  `}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
