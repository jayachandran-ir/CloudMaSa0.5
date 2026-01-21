// src/pages/contact-us.tsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    source: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:support@cloudmasa.com?subject=Contact%20Us&body=${encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nSource: ${formData.source}\nMessage: ${formData.message}`
    )}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - CloudMaSa</title>
        <meta
          name="description"
          content="Connect with CloudMaSa for cloud solutions, consultations, and support. Fill out our contact form to reach our team."
        />
      </Helmet>

      <Navbar />

      <main className="bg-background text-foreground min-h-screen py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* LEFT SIDE — IMAGE + CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col justify-center items-center lg:items-start space-y-6 sm:space-y-8"
          >
            {/* IMAGE */}
            <div className="w-full sm:w-[95%] lg:w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#102a43]">
              <img
                src="/img/cont.jpg"
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
            </div>

           {/* CONTACT INFO */}
<div className="space-y-2 sm:space-y-2 text-sm sm:text-base text-center lg:text-left">
  <p>
    <strong className="text-white">Email:</strong>{" "}
    <span className="text-muted-foreground">support@cloudmasa.com</span>
  </p>
  <p>
    <strong className="text-white">Phone:</strong>{" "}
    <span className="text-muted-foreground">+91 6364562818</span>
  </p>
  <p>
    <strong className="text-white">Address:</strong>{" "}
    <span className="text-muted-foreground">
      Vinayagar Kovil Street,<br />
      Kurumbapet, Pondicherry-605009
    </span>
  </p>
</div>

          </motion.div>

          {/* RIGHT SIDE — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 w-full"
          >
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-5 lg:mb-6 text-center lg:text-left">
                  <span className="text-gradient-primary">Let us</span>{' '}
                  <span className="text-white">connect!</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-background border border-white/10 px-3 py-2 text-sm
                  focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30 transition"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-background border border-white/10 px-3 py-2 text-sm
                  focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30 transition"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Enter your company email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-background border border-white/10 px-3 py-2 text-sm
                  focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30 transition"
              />

              <div className="relative w-full">
  <motion.select
    whileFocus={{ scale: 1.02 }}
    name="source"
    value={formData.source}
    onChange={handleChange}
    required
    className="w-full rounded-lg bg-background border border-white/10 px-3 py-2 text-sm sm:text-sm md:text-base
               text-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30
               transition appearance-none pr-10"
  >
    {/* Placeholder */}
    <option value="" disabled selected hidden>
      How did you hear about us?
    </option>

    <option value="referral">Referral</option>
    <option value="social">Social Media</option>
    <option value="search">Search Engine</option>
    <option value="other">Other</option>
  </motion.select>

  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
    <svg
      className="w-4 h-4 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </span>
</div>


              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg bg-background border border-white/10 px-3 py-2 text-sm
                  focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30 transition resize-none"
              />

              {/* ✅ SUBMIT BUTTON: FULL WIDTH MOBILE, original gradient maintained */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-full md:w-full lg:w-full bg-gradient-cta text-white font-bold py-2.5 rounded-full
                  hover:opacity-90 transition-all uppercase tracking-wide text-sm"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
