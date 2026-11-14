"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, MessageSquare, CheckCircle2, ExternalLink } from "lucide-react";
import { STUDIO_INFO, FAQS } from "@/data/studioData";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: "Residential",
    projectArea: "",
    constructionType: "Mud",
    serviceType: "Design + PMC: All the above plus Project Management Consultancy, inc training, execution and over all supervision of the project",
    budget: "",
    message: ""
  });

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="min-h-[100dvh] py-16 sm:py-20 flex flex-col justify-center relative bg-[#F4EFE6] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none plaster-texture opacity-30" />

      {/* Hidden Iframe for silent Google Form response submission */}
      <iframe name="hidden_gform_home" id="hidden_gform_home" className="hidden" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 pb-5 border-b border-terracotta/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1.5px] bg-rust" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-rust font-semibold">
                Begin A Conversation
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal leading-tight">
              Co-Create Your <span className="font-serif italic text-terracotta">Earth</span> Sanctuary
            </h2>
            <p className="text-xs sm:text-sm text-fern-700 font-sans mt-1">
              Directly synced with Studio Shunya Google Intake. Ar. Shreya Srivastava reviews all submissions within 48 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScfjnS32mFdE0N9CK6A6SezmZd3M31M2El432lRgL_ZzLfaTQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-terracotta/30 bg-creme-100/90 hover:bg-creme-200 text-fern-900 text-xs font-sans uppercase tracking-wider font-semibold transition-colors"
            >
              <span>Google Form</span>
              <ExternalLink className="w-3.5 h-3.5 text-rust" />
            </a>

            <a
              href="https://wa.me/919211620907?text=Hello%20Studio%20Shunya,%20I%20would%20like%20to%20discuss%20a%20natural%20building%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-fern-950 text-xs font-sans uppercase tracking-wider font-semibold shadow hover:bg-[#20ba59] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rust text-rust hover:bg-rust hover:text-creme text-xs font-sans uppercase tracking-wider font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Studio</span>
            </a>
          </div>
        </div>

        {/* 1-Page Layout: Proposal Form + Quick Studio Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Form */}
          <div className="lg:col-span-7 rounded-3xl bg-creme-100/90 border border-terracotta/30 p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-sage-100 text-fern-800 flex items-center justify-center mx-auto border border-sage-400">
                  <CheckCircle2 className="w-6 h-6 text-fern-700" />
                </div>
                <h3 className="font-serif text-2xl text-fern-950">Enquiry Form Received</h3>
                <p className="text-fern-700 text-xs sm:text-sm max-w-sm mx-auto font-sans">
                  Ar. Shreya Srivastava and our design team will review your site context and revert within 48 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-sans uppercase tracking-wider text-rust hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLScfjnS32mFdE0N9CK6A6SezmZd3M31M2El432lRgL_ZzLfaTQ/formResponse"
                method="POST"
                target="hidden_gform_home"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* 1. Client Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-fern-800 font-semibold mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    name="entry.2005620554"
                    required
                    placeholder="e.g. Vikramaditya Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-creme-50 border border-terracotta/20 text-fern-950 placeholder:text-fern-400 text-xs sm:text-sm focus:outline-none focus:border-rust"
                  />
                </div>

                {/* 2. Contact Number & Email ID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-fern-800 font-semibold mb-1">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="entry.1166974658"
                      required
                      placeholder="+91-9876543210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-creme-50 border border-terracotta/20 text-fern-950 placeholder:text-fern-400 text-xs sm:text-sm focus:outline-none focus:border-rust"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-fern-800 font-semibold mb-1">
                      Email ID *
                    </label>
                    <input
                      type="email"
                      name="entry.1360677437"
                      required
                      placeholder="name@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-creme-50 border border-terracotta/20 text-fern-950 placeholder:text-fern-400 text-xs sm:text-sm focus:outline-none focus:border-rust"
                    />
                  </div>
                </div>

                {/* 3. Project Location & Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-fern-800 font-semibold mb-1">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      name="entry.1045781291"
                      required
                      placeholder="e.g. Greater Noida, Jaipur"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-creme-50 border border-terracotta/20 text-fern-950 placeholder:text-fern-400 text-xs sm:text-sm focus:outline-none focus:border-rust"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-fern-800 font-semibold mb-1">
                      Project Area (in sq.ft) *
                    </label>
                    <input
                      type="text"
                      name="entry.839337160"
                      required
                      placeholder="e.g. 2,500 sq.ft or 1 Acre"
                      value={form.projectArea}
                      onChange={(e) => setForm({ ...form, projectArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-creme-50 border border-terracotta/20 text-fern-950 placeholder:text-fern-400 text-xs sm:text-sm focus:outline-none focus:border-rust"
                    />
                  </div>
                </div>

                {/* 4. Project Type & Type of Construction */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-fern-800 font-semibold mb-1">
                      Project Type *
                    </label>
                    <select
                      name="entry.186865063"
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-creme-50 border border-terracotta/20 text-fern-950 text-xs sm:text-sm focus:outline-none focus:border-rust cursor-pointer"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Institutional">Institutional</option>
                      <option value="Retrofit">Retrofit</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-fern-800 font-semibold mb-1">
                      Type of Construction *
                    </label>
                    <select
                      name="entry.463654387"
                      value={form.constructionType}
                      onChange={(e) => setForm({ ...form, constructionType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-creme-50 border border-terracotta/20 text-fern-950 text-xs sm:text-sm focus:outline-none focus:border-rust cursor-pointer"
                    >
                      <option value="Mud">Mud (Adobe, Rammed Earth)</option>
                      <option value="Stone">Stone Masonry</option>
                      <option value="Bamboo">Bamboo &amp; Timber</option>
                      <option value="RCC">RCC</option>
                      <option value="MIXED">MIXED (Natural + Modern)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* 5. Service Required */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-fern-800 font-semibold mb-1">
                    Service Required *
                  </label>
                  <select
                    name="entry.1065046570"
                    value={form.serviceType}
                    onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-creme-50 border border-terracotta/20 text-fern-950 text-xs sm:text-sm focus:outline-none focus:border-rust cursor-pointer"
                  >
                    <option value="Design; includes: Architectural, Interior, Landscaping, Structural drawings and 3D renders.">
                      Design (Architectural, Interior, Landscape &amp; 3D renders)
                    </option>
                    <option value="Design + PMC: All the above plus Project Management Consultancy, inc training, execution and over all supervision of the project">
                      Design + PMC (All above + Site Supervision &amp; Mason Training)
                    </option>
                    <option value="Turn Key (only available in Delhi-NCR)">
                      Turn Key Construction (Complete Execution — Delhi-NCR only)
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* 6. Tentative Budget */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-fern-800 font-semibold mb-1">
                    Tentative Budget
                  </label>
                  <input
                    type="text"
                    name="entry.1843600688"
                    placeholder="e.g. ₹50L - ₹1 Crore, ₹1.5 Crores, etc."
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-creme-50 border border-terracotta/20 text-fern-950 placeholder:text-fern-400 text-xs sm:text-sm focus:outline-none focus:border-rust"
                  />
                </div>

                {/* 7. Specific Requirements / If others */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-fern-800 font-semibold mb-1">
                    If Others / Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    name="entry.1105226035"
                    placeholder="Tell us about the soil, plot topography, or specific natural finishes you desire..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-creme-50 border border-terracotta/20 text-fern-950 placeholder:text-fern-400 text-xs sm:text-sm focus:outline-none focus:border-rust resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all shadow flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Transmitting..." : "Submit Enquiry Form"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Studio Quick Info & Addresses */}
          <div className="lg:col-span-5 rounded-3xl bg-fern-950 text-creme-100 p-6 sm:p-7 shadow-xl space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-terracotta-300 font-semibold block">
              Studio Locations
            </span>

            <div className="space-y-3 text-xs font-sans text-creme-200">
              <div className="flex items-start gap-3 pb-3 border-b border-creme/10">
                <MapPin className="w-4 h-4 text-rust shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-creme-50 uppercase tracking-wider text-[11px]">Head Office — New Delhi</strong>
                  <p className="mt-0.5 leading-relaxed">{STUDIO_INFO.officeAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-creme/10">
                <MapPin className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-creme-50 uppercase tracking-wider text-[11px]">Experience Studio</strong>
                  <p className="mt-0.5 leading-relaxed">{STUDIO_INFO.experienceStudio}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span>Direct: <strong className="text-creme-50">{STUDIO_INFO.phone}</strong></span>
                <span className="text-terracotta-300">Mon–Sat: 10:00–18:30</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-creme/20 hover:bg-creme/10 text-creme-100 text-xs font-sans uppercase tracking-widest font-semibold transition-all text-center"
              >
                <span>View Full Contact Monograph</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick FAQs Strip */}
        <div className="pt-6 border-t border-terracotta/20">
          <span className="text-[10px] uppercase tracking-widest text-rust font-bold block mb-3 text-center sm:text-left">
            Frequently Asked Inquiries
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {FAQS.slice(0, 2).map((faq) => (
              <div key={faq.q} className="p-4 rounded-2xl bg-creme-100 border border-terracotta/20 text-xs">
                <h4 className="font-serif text-base text-fern-950 font-medium mb-1">{faq.q}</h4>
                <p className="text-fern-700 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}