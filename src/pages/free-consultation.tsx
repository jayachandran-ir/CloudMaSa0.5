import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TIME_SLOTS = [
  "10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM",
  "1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM",
  "3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM",
];

const COUNTRY_CODES = [
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+971", country: "UAE" },
  { code: "+49", country: "Germany" },
];

export default function FreeConsultation() {
  const dateRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    countryCode: "",
    phone: "",
    date: "",
    time: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setSuccess(false);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/free-consultation`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            phone: `${formData.countryCode}${formData.phone}`,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to book ❌");
      }

      // ✅ Success state
      setSuccess(true);
      setMessage(data.message || "Consultation booked successfully ✅");

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        countryCode: "",
        phone: "",
        date: "",
        time: "",
      });

    } catch (err: any) {
      setSuccess(false);
      setMessage(err.message || "Failed to book ❌");
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
              className="w-full max-w-md mx-auto mb-6 h-[220px] object-contain"
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

          {/* RIGHT */}
<div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
  <h3 className="text-xl font-bold text-white mb-6 text-center">
    Book Your Free Consultation
  </h3>

  <form onSubmit={handleSubmit} className="space-y-4">

    {/* DATE */}
    <input
      type="date"
      min={today}
      required
      value={formData.date}
      onChange={(e) =>
        setFormData({ ...formData, date: e.target.value })
      }
      className={`w-full rounded-lg bg-background border border-white/10
                  px-4 py-3
                  focus:border-brand-orange
                  focus:ring-2 focus:ring-brand-orange/30
                  [color-scheme:dark]
                  ${
                    formData.date
                      ? "text-white [&::-webkit-calendar-picker-indicator]:opacity-100"
                      : "text-muted-foreground [&::-webkit-calendar-picker-indicator]:opacity-50"
                  }`}
    />

    <input
      type="text"
      placeholder="Your Name"
      required
      value={formData.name}
      onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
      }
      className="w-full rounded-lg bg-background border border-white/10 px-4 py-3 text-white"
    />

    <input
      type="text"
      placeholder="Company Name"
      required
      value={formData.company}
      onChange={(e) =>
        setFormData({ ...formData, company: e.target.value })
      }
      className="w-full rounded-lg bg-background border border-white/10 px-4 py-3 text-white"
    />

    <input
      type="email"
      placeholder="Email Address"
      required
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
      className="w-full rounded-lg bg-background border border-white/10 px-4 py-3 text-white"
    />

    {/* PHONE + COUNTRY CODE */}
<div className="flex flex-col sm:flex-row gap-2 w-full">

  {/* COUNTRY CODE – Mobile (TOP) */}
<div className="sm:hidden relative">
  <button
    type="button"
    className="w-full flex items-center justify-between
               bg-background border border-white/10
               rounded-lg px-4 py-3
               text-left text-sm
               focus:border-brand-orange
               focus:ring-2 focus:ring-brand-orange/30"
    onClick={() => setShowMobileDropdown(!showMobileDropdown)}
  >
    <span className={formData.countryCode ? "text-white" : "text-muted-foreground"}>
      {formData.countryCode
        ? COUNTRY_CODES.find(c => c.code === formData.countryCode)?.country +
          ` (${formData.countryCode})`
        : "Select Country Code"}
    </span>

    {/* DOWN ARROW */}
    <svg
      className={`w-4 h-4 text-muted-foreground transition-transform ${
        showMobileDropdown ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {showMobileDropdown && (
    <ul className="absolute z-50 mt-1 w-full
                   bg-background border border-white/10
                   rounded-lg max-h-56 overflow-auto">
      {COUNTRY_CODES.map((c) => (
        <li
          key={c.code}
          className="px-4 py-2 text-sm text-white hover:bg-white/10 cursor-pointer"
          onClick={() => {
            setFormData({ ...formData, countryCode: c.code });
            setShowMobileDropdown(false);
          }}
        >
          {c.country} ({c.code})
        </li>
      ))}
    </ul>
  )}
</div>


  {/* COUNTRY CODE – Desktop */}
  <select
    required
    value={formData.countryCode}
    onChange={(e) =>
      setFormData({ ...formData, countryCode: e.target.value })
    }
    className={`hidden sm:block w-[40%] rounded-lg bg-background border border-white/10
                px-3 py-3
                ${formData.countryCode ? "text-white" : "text-muted-foreground"}`}
  >
    <option value="" disabled>
      Country Code
    </option>
    {COUNTRY_CODES.map((c) => (
      <option key={c.code} value={c.code} className="text-white">
        {c.country} ({c.code})
      </option>
    ))}
  </select>

  {/* PHONE INPUT */}
  <input
    type="tel"
    inputMode="numeric"
    pattern="[0-9]*"
    placeholder="Phone Number"
    required
    value={formData.phone}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, "");
      setFormData({ ...formData, phone: value });
    }}
    className="flex-1 rounded-lg bg-background border border-white/10 px-4 py-3 text-white"
  />



    </div>

    {/* TIME SLOT */}
    <select
      required
      value={formData.time}
      onChange={(e) =>
        setFormData({ ...formData, time: e.target.value })
      }
      className={`w-full rounded-lg bg-background border border-white/10
                  px-4 py-3
                  focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30
                  ${formData.time ? "text-white" : "text-muted-foreground"}`}
    >
      <option value="" disabled>
        Select Time Slot
      </option>
      {TIME_SLOTS.map((slot) => (
        <option key={slot} value={slot} className="text-white">
          {slot}
        </option>
      ))}
    </select>

    {/* SUBMIT BUTTONS */}
    {/* Mobile */}
    <button
      type="submit"
      disabled={loading || success}
      className="sm:hidden w-full mt-4 bg-gradient-cta text-white font-bold py-3 rounded-full uppercase tracking-wide hover:opacity-90 transition disabled:opacity-60"
    >
      {loading ? "Booking..." : success ? "Booked" : "Book"}
    </button>

    {/* Desktop */}
    <button
      type="submit"
      disabled={loading || success}
      className="hidden sm:block w-full mt-4 bg-gradient-cta text-white font-bold py-3 rounded-full uppercase tracking-wide hover:opacity-90 transition disabled:opacity-60"
    >
      {loading ? "Booking..." : success ? "BOOKED" : "Book Free Consultation"}
    </button>

    {/* STATUS MESSAGES */}
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
    </>
  );
}
