"use client"

import { useState, useEffect } from "react"

/* ===============================
   🔧 GLOW ANIMATION (WHITE)
================================= */
const glowAnimation = `
  @keyframes pulseGlow {
    0% {
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.4));
    }
    50% {
      filter: drop-shadow(0 0 26px rgba(255,255,255,0.9));
    }
    100% {
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.4));
    }
  }
`

type PillarImageProps = {
  title: string
  img: string
  glow: boolean
}

function PillarImage({ title, img, glow }: PillarImageProps) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={img}
        alt={title}
        className="transition-all duration-300 cursor-pointer"
        style={{
          maxWidth: "120px",
          height: "auto",
          animation: glow ? "pulseGlow 1.6s ease-in-out infinite" : "none",
        }}
      />

      <h4 className="font-semibold text-sm mt-3 text-white text-center">
        {title}
      </h4>
    </div>
  )
}

export default function WellArchitectedPillars() {
  const [coreHover, setCoreHover] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const pillars = [
    { title: "Operational Efficiency", img: "/src/assets/images/operation.png" },
    { title: "Security", img: "/src/assets/images/sec.png" },
    { title: "Reliability", img: "/src/assets/images/reli.png" },
    { title: "Performance Efficiency", img: "/src/assets/images/perfo.png" },
    { title: "Cost Optimization", img: "/src/assets/images/cost.png" },
    { title: "Sustainability", img: "/src/assets/images/sus.png" },
  ]

  const cardPos = [
    { x: 50, y: 5 },
    { x: 85, y: 25 },
    { x: 85, y: 75 },
    { x: 50, y: 95 },
    { x: 15, y: 75 },
    { x: 15, y: 25 },
  ]

  return (
    <section className="py-20 bg-background relative">
      <style>{glowAnimation}</style>

      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* =======================
           LEFT — DIAGRAM
        ======================= */}
        <div className="relative mx-auto" style={{ width: 480, height: 360 }}>
          <img
            src="/src/assets/images/aws.png"
            alt="AWS Core"
            onMouseEnter={() => setCoreHover(true)}
            onMouseLeave={() => setCoreHover(false)}
            onTouchStart={() => setCoreHover(true)}
            onTouchEnd={() => setCoreHover(false)}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300
                       hover:drop-shadow-[0_0_60px_rgba(255,255,255,0.9)]"
            style={{
              width: 100,
              left: "50%",
              top: "50%",
            }}
          />

          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${cardPos[i].x}%`,
                top: `${cardPos[i].y}%`,
              }}
            >
              <PillarImage {...pillar} glow={coreHover} />
            </div>
          ))}
        </div>
{/* =======================
   RIGHT — CONTENT
======================= */}
<div>
  <h2 className="text-2xl font-bold mb-4">
    <span className="text-gradient-primary">AWS Well-Architected</span>{' '}
    <span className="text-white">Framework</span>
  </h2>

  <p className="text-sm text-white/80 leading-relaxed text-justify mb-8">
    The AWS Well-Architected Framework helps organizations design and operate
    secure, high-performing cloud architectures using AWS best practices.
    It is based on six pillars that address operations, security, reliability,
    performance efficiency, cost optimization, and sustainability. The framework
    allows teams to review workloads and identify architectural risks. By applying
    these principles, businesses can build scalable, resilient, and cost-effective
    solutions on AWS.
  </p>

  <div className="relative h-[200px] text-sm text-white/80 leading-relaxed">

    {[
      {
        title: "Operational Efficiency",
        desc: "Operational Efficiency focuses on running and monitoring systems with minimal manual intervention. It emphasizes automation, streamlined processes, and operational visibility. Teams can quickly detect issues, respond to events, and improve workflows. This pillar enables continuous improvement and faster innovation."
      },
      {
        title: "Security",
        desc: "Security ensures protection of data, systems, and workloads from threats. It covers identity management, data protection, and secure network controls. Strong security practices help maintain confidentiality, integrity, and compliance. This pillar reduces risk while enabling secure business growth."
      },
      {
        title: "Reliability",
        desc: "Reliability ensures systems consistently perform their intended functions. It focuses on fault tolerance, disaster recovery, and high availability. Architectures are designed to recover quickly from failures. This pillar supports stable and dependable application performance."
      },
      {
        title: "Performance Efficiency",
        desc: "Performance Efficiency ensures resources are used effectively to meet demand. It focuses on selecting the right services and architectures. Systems scale automatically to handle workload changes. This pillar delivers optimal speed, responsiveness, and scalability."
      },
      {
        title: "Cost Optimization",
        desc: "Cost Optimization focuses on controlling spending while maximizing value. It encourages efficient resource usage and elimination of waste. Continuous monitoring helps identify cost-saving opportunities. This pillar ensures cloud investments align with business goals."
      },
      {
        title: "Sustainability",
        desc: "Sustainability focuses on reducing the environmental impact of cloud workloads. It encourages energy-efficient architectures and optimized resource usage. Design choices help lower carbon footprint over time. This pillar supports responsible and long-term cloud operations."
      },
    ].map((pillar, i) => (
      <div
        key={i}
        className={`absolute inset-0 transition-all duration-700 p-2 rounded-lg
          ${activeIndex === i
            ? "opacity-100 translate-y-0 bg-black/30 border-l-4 border-orange-400"
            : "opacity-0 translate-y-3"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          {/* Pulsing dot to indicate looping */}
          {activeIndex === i && (
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"
            style={{
                filter: "drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 12px #ff0000)",
                animation: "pulse 3s ease-in-out infinite",}}>              
            </span>
          )}
          <h3 className="text-orange-400 font-semibold">
            {pillar.title}
          </h3>
        </div>
        <p className="text-justify">{pillar.desc}</p>
      </div>
    ))}

  </div>
</div>


      </div>
    </section>
  )
}
