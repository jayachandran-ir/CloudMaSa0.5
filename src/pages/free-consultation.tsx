import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TIME_SLOTS = [
  "10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM",
  "1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM",
  "3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM",
];

export default function FreeConsultation() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const today = new Date().toISOString().split("T")[0];

  /* ===============================
     SUBMIT
  ================================ */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage(null);

      const response = await fetch(
        "http://localhost:5000/api/free-consultation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      setSuccess(true);
      setMessage(data.message);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        date: "",
        time: "",
      });
    } catch (err: any) {
      setSuccess(false);
      setMessage(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Consultation - CloudMaSa</title>
      </Helmet>

      <Navbar />

      <main className="bg-background min-h-screen px-4 py-12 mt-16">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <img
              src="/images/free-cons.png"
              alt="Free Consultation"
              className="w-full max-w-md mx-auto mb-6
                         h-[240px] object-contain"
            />

            <h2 className="text-3xl font-extrabold text-white mb-3">
              Free Cloud Consultation
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Speak directly with our cloud experts. We’ll review your
              infrastructure, identify risks, optimize costs, and guide you
              across AWS, Azure, and GCP.
            </p>
          </div>

          {/* RIGHT – SINGLE CARD */}
          <div className="bg-card/70 backdrop-blur-md border border-white/10
                          rounded-2xl p-6 md:p-8">

            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Book Your Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* DATE FIELD */}
              <div className="relative">
                <input
                  type="date"
                  min={today}
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full rounded-lg bg-background border border-white/10
                             px-4 py-3 text-white
                             focus:border-brand-orange
                             focus:ring-2 focus:ring-brand-orange/30
                             appearance-none"
                />
              </div>

              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg bg-background border border-white/10
                           px-4 py-3 text-white"
              />

              <input
                type="text"
                placeholder="Company Name"
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full rounded-lg bg-background border border-white/10
                           px-4 py-3 text-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg bg-background border border-white/10
                           px-4 py-3 text-white"
              />

              <div className="flex gap-2">
                <span className="px-4 flex items-center rounded-lg
                                 bg-background border border-white/10
                                 text-white">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="flex-1 rounded-lg bg-background border border-white/10
                             px-4 py-3 text-white"
                />
              </div>

              <select
                required
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full rounded-lg bg-background border border-white/10
                           px-4 py-3 text-white"
              >
                <option value="">Select Time Slot</option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-gradient-cta text-white font-bold
                           py-3 rounded-full uppercase tracking-wide
                           hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Book Free Consultation"}
              </button>

              {message && (
                <p
                  className={`text-sm text-center mt-2 ${
                    success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />

      {/* Calendar icon color */}
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }
      `}</style>
    </>
  );
}
