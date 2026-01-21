// src/components/Testimonials.tsx

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Siva Swarup Reddy",
    role: "CEO",
    text: "They have been a lifesaver for our company. Their proactive approach to IT maintenance and support has significantly reduced our downtime, allowing us to focus on growing our business.",
    avatar: "swarup",
    companylogo: "cloudace.jpg",
  },
  {
    name: "Anoop",
    role: "CEO",
    text: "CloudMaSa completely transformed the way we manage our IT infrastructure. Their seamless cloud integration and expert guidance have made our operations more efficient than ever.",
    avatar: "anup",
    companylogo: "cryptologo.png",
  },
  {
    name: "Sasikala",
    role: "CEO STARTUP Technologies",
    text: "Switching to CloudMaSa was one of the best decisions we made. Their team made the migration process smooth, and their support has been top-notch.",
    avatar: "sasimam",
    companylogo: "",
  },
  {
    name: "Srinivasan",
    role: "CEO HIGGINS",
    text: "Our experience with CloudMaSa has been nothing short of excellent. Their cloud solutions provided the security and scalability we needed.",
    avatar: "sir",
    companylogo: "",
  },
  {
    name: "Praveen Dinavahi",
    role: "CEO",
    text: "CloudMaSa helped us streamline our IT processes, allowing us to focus more on patient care.",
    avatar: "praveen",
    companylogo: "telcomet.jpg",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-[10px] mb-2 block">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-gradient-primary">What Our </span>
            <span className="text-white">Clients Say</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-3d h-[260px]">
              <div className="card-inner">

                {/* FRONT */}
                <div className="card-front glass p-4 flex flex-col items-center text-center">

                  {/* Avatar */}
                  <div className="h-[72px] flex items-center justify-center mb-2">
                    <div className="w-16 h-16 bg-white rounded-full p-1 border border-white/20">
                      <img
                        src={`/avatars/${testimonial.avatar}.png`}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "/icons/user-placeholder.png";
                        }}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="h-[20px] flex items-center justify-center">
                    <h4 className="font-bold text-brand-orange text-sm leading-tight">
                      {testimonial.name}
                    </h4>
                  </div>

                  {/* Role */}
                  <div className="h-[24px] flex items-center justify-center">
                    <p className="text-muted-foreground text-[9px] leading-tight">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Company Logo */}
                  <div className="h-[36px] flex items-center justify-center mt-2">
                    {testimonial.companylogo ? (
                      <div className="bg-white p-1 rounded-md border border-black/10 shadow-sm">
                        <img
                          src={`/companylogo/${testimonial.companylogo}`}
                          alt="Company logo"
                          className="h-7 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="h-7 w-16 opacity-0" />
                    )}
                  </div>
                </div>

                {/* BACK */}
                <div className="card-back bg-card p-4 flex items-center justify-center text-center">
                  <p className="text-white font-medium text-[10px] leading-relaxed">
                    “{testimonial.text}”
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
