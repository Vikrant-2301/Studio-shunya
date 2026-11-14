"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Compass,
  Building,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { STUDIO_INFO, FAQS } from "@/data/studioData";
import BrushAccent from "@/components/BrushAccent";

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const prefillProject = searchParams.get("project") || "";
  const prefillTitle = searchParams.get("title") || "";

  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: prefillProject ? "Residential" : "Residential",
    projectArea: "",
    constructionType: "Mud",
    serviceType: "Design + PMC: All the above plus Project Management Consultancy, inc training, execution and over all supervision of the project",
    budget: "",
    otherDetails: prefillTitle ? `Inquiring about a project inspired by ${prefillTitle}.` : "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (prefillTitle) {
      setForm((prev) => ({
        ...prev,
        otherDetails: `Inquiring about a project inspired by ${prefillTitle}.`,
      }));
    }
  }, [prefillTitle]);

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    // Allow natural form post into hidden iframe so Google Forms receives it
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setInquiryId(`SHUNYA-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 relative min-h-screen text-fern-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Page Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-rust" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-rust font-semibold">
              Client Project Enquiry
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-fern-950 font-normal leading-[1.08] tracking-tight">
            Initiate Your <span className="font-serif italic text-rust">Living Earth</span> Sanctuary
          </h1>

          <div className="mt-3 max-w-sm">
            <BrushAccent className="text-rust/70" height="14" width="300px" />
          </div>

          <p className="mt-5 text-fern-800 text-lg sm:text-xl font-sans font-light leading-relaxed max-w-3xl">
            Please fill the following enquiry form so that we can gather basic information about your requirements. 
            Once submitted, Ar. Shreya Srivastava and our team will review your site context and revert within 48 hours.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScfjnS32mFdE0N9CK6A6SezmZd3M31M2El432lRgL_ZzLfaTQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-creme-200/80 hover:bg-creme-300 border border-terracotta/25 text-fern-900 text-xs font-sans font-medium transition-all shadow-sm"
            >
              <span>Open in Google Forms</span>
              <ExternalLink className="w-3.5 h-3.5 text-rust" />
            </a>

            <span className="text-xs text-fern-600 font-sans">• Direct synchronization with Studio Shunya database</span>
          </div>
        </div>

        {/* Quick Contact Action Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <a
            href="https://wa.me/919211620907?text=Hello%20Studio%20Shunya,%20I%20would%20like%20to%20discuss%20a%20living%20architecture%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-creme-100/90 border border-terracotta/20 hover:border-rust hover:shadow-md transition-all flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-fern-600 block">WhatsApp Direct</span>
              <p className="font-serif text-lg text-fern-950 font-medium group-hover:text-rust transition-colors">Instant Chat</p>
              <span className="text-[11px] text-fern-700 font-sans block">+91 92116 20907</span>
            </div>
          </a>

          <a
            href={`tel:${STUDIO_INFO.phone}`}
            className="group p-5 rounded-2xl bg-creme-100/90 border border-terracotta/20 hover:border-rust hover:shadow-md transition-all flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-full bg-rust/10 text-rust flex items-center justify-center shrink-0 border border-rust/30 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-fern-600 block">Voice Consultation</span>
              <p className="font-serif text-lg text-fern-950 font-medium group-hover:text-rust transition-colors">{STUDIO_INFO.phone}</p>
              <span className="text-[11px] text-fern-700 font-sans block">Mon - Sat: 10:00 - 18:30</span>
            </div>
          </a>

          <a
            href={`mailto:${STUDIO_INFO.email}`}
            className="group p-5 rounded-2xl bg-creme-100/90 border border-terracotta/20 hover:border-rust hover:shadow-md transition-all flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 border border-terracotta/30 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] font-sans uppercase tracking-widest text-fern-600 block">Official Inquiries</span>
              <p className="font-serif text-base text-fern-950 font-medium group-hover:text-rust transition-colors truncate">Email Studio</p>
              <span className="text-[11px] text-fern-700 font-sans block truncate">{STUDIO_INFO.email}</span>
            </div>
          </a>

          <a
            href="#experience-studio"
            className="group p-5 rounded-2xl bg-fern-900 text-creme-50 border border-fern-800 hover:shadow-md transition-all flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-full bg-rust/30 text-terracotta-200 flex items-center justify-center shrink-0 border border-rust/40 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta-300 block">Visit In Person</span>
              <p className="font-serif text-lg text-creme-50 font-medium group-hover:text-terracotta-200 transition-colors">Gr. Noida Studio</p>
              <span className="text-[11px] text-creme-300 font-sans block">Zero-Energy Showcase</span>
            </div>
          </a>
        </div>

        {/* Hidden Iframe for silent Google Form response submission */}
        <iframe name="hidden_gform" id="hidden_gform" className="hidden" aria-hidden="true" />

        {/* Main 2-Column Section: Comprehensive Enquiry Form (Synced with Google Form) & Studio Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left: Comprehensive Commission Form */}
          <div className="lg:col-span-7 bg-creme-100/90 border border-terracotta/30 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="mb-6">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs uppercase tracking-[0.25em] text-rust font-bold block">
                  Studio Shunya Enquiry Form
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-rust/10 text-rust text-[10px] font-mono font-semibold">
                  Official Intake
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-fern-950 font-medium">
                Project Parameters &amp; Requirements
              </h2>
              <p className="text-xs sm:text-sm text-fern-700 font-sans mt-1">
                Once the form is filled we will review your parameters and revert back within 48 hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-4 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-sage-100 text-fern-800 flex items-center justify-center mx-auto border-2 border-sage-400">
                  <CheckCircle2 className="w-8 h-8 text-fern-700" />
                </div>
                <h3 className="font-serif text-3xl text-fern-950">Enquiry Form Received</h3>
                <div className="p-3 bg-creme-200/70 rounded-xl inline-block border border-terracotta/20 text-xs font-mono text-fern-900">
                  Reference: {inquiryId}
                </div>
                <p className="text-fern-800 text-sm sm:text-base max-w-md mx-auto font-sans leading-relaxed">
                  Thank you, <strong className="text-fern-950">{form.name}</strong>. Your project details have been safely registered with Studio Shunya. Ar. Shreya Srivastava will review your requirements for <strong className="text-fern-950">{form.location || "your site"}</strong> and connect with you within 48 hours.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-rust text-rust hover:bg-rust hover:text-creme text-xs font-sans uppercase tracking-widest font-semibold transition-all"
                  >
                    Submit Another Project
                  </button>
                  <a
                    href="https://wa.me/919211620907?text=Hello%20Ar.%20Shreya,%20I%20have%20submitted%20my%20enquiry%20form%20for%20Studio%20Shunya."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-fern-950 text-xs font-sans uppercase tracking-widest font-semibold transition-all flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Ping on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                action="https://docs.google.com/forms/d/e/1FAIpQLScfjnS32mFdE0N9CK6A6SezmZd3M31M2El432lRgL_ZzLfaTQ/formResponse"
                method="POST"
                target="hidden_gform"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
              >
                {/* 1. Client Name */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-fern-900 font-semibold mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    name="entry.2005620554"
                    required
                    placeholder="e.g. Vikramaditya Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-creme-50/90 border border-terracotta/25 text-fern-950 placeholder:text-fern-400 text-sm focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-all"
                  />
                </div>

                {/* 2. Contact Number & Email ID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-fern-900 font-semibold mb-1">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="entry.1166974658"
                      required
                      placeholder="+91-9876543210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-creme-50/90 border border-terracotta/25 text-fern-950 placeholder:text-fern-400 text-sm focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-fern-900 font-semibold mb-1">
                      Email ID *
                    </label>
                    <input
                      type="email"
                      name="entry.1360677437"
                      required
                      placeholder="client@estate.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-creme-50/90 border border-terracotta/25 text-fern-950 placeholder:text-fern-400 text-sm focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-all"
                    />
                  </div>
                </div>

                {/* 3. Project Location */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-fern-900 font-semibold mb-1">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    name="entry.1045781291"
                    required
                    placeholder="City, State (e.g. Greater Noida, Jaipur, Jamshedpur)"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-creme-50/90 border border-terracotta/25 text-fern-950 placeholder:text-fern-400 text-sm focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-all"
                  />
                </div>

                {/* 4. Project Type & Area (in sq.ft) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-fern-900 font-semibold mb-1">
                      Project Type *
                    </label>
                    <select
                      name="entry.186865063"
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-creme-50/90 border border-terracotta/25 text-fern-950 text-sm focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-all cursor-pointer"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Institutional">Institutional</option>
                      <option value="Retrofit">Retrofit</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-fern-900 font-semibold mb-1">
                      Project Area (in sq.ft) *
                    </label>
                    <input
                      type="text"
                      name="entry.839337160"
                      required
                      placeholder="e.g. 2,500 sq.ft or 1 Acre"
                      value={form.projectArea}
                      onChange={(e) => setForm({ ...form, projectArea: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-creme-50/90 border border-terracotta/25 text-fern-950 placeholder:text-fern-400 text-sm focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-all"
                    />
                  </div>
                </div>

                {/* 5. Type of Construction */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-fern-900 font-semibold mb-1">
                    Type of Construction *
                  </label>
                  <select
                    name="entry.463654387"
                    value={form.constructionType}
                    onChange={(e) => setForm({ ...form, constructionType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-creme-50/90 border border-terracotta/25 text-fern-950 text-sm focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-all cursor-pointer"
                  >
                    <option value="Mud">Mud (Adobe, Rammed Earth, Cob)</option>
                    <option value="Stone">Stone Masonry</option>
                    <option value="Bamboo">Bamboo &amp; Timber</option>
                    <option value="RCC">RCC (Conventional Frame)</option>
                    <option value="MIXED">MIXED (Composite Natural + Modern)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* 6. Service Looking For */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-fern-900 font-semibold mb-1">
                    Service Required From Us *
                  </label>
                  <select
                    name="entry.1065046570"
                    value={form.serviceType}
                    onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-creme-50/90 border border-terracotta/25 text-fern-950 text-xs sm:text-sm focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-all cursor-pointer"
                  >
                    <option value="Design; includes: Architectural, Interior, Landscaping, Structural drawings and 3D renders.">
                      Design (Architectural, Interior, Landscaping, Structural &amp; 3D renders)
                    </option>
                    <option value="Design + PMC: All the above plus Project Management Consultancy, inc training, execution and over all supervision of the project">
                      Design + PMC (All above + Site Supervision, Worker Training &amp; Quality Control)
                    </option>
                    <option value="Turn Key (only available in Delhi-NCR)">
                      Turn Key Construction (Complete Execution — only available in Delhi-NCR)
                    </option>
                    <option value="Other">
                      Other Bespoke Consulting
                    </option>
                  </select>
                </div>

                {/* 7. Tentative Budget */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-fern-900 font-semibold mb-1">
                    Tentative Budget of the Project
                  </label>
                  <input
                    type="text"
                    name="entry.1843600688"
                    placeholder="e.g. ₹60 Lakhs, ₹1.5 Crores, or Flexible"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-creme-50/90 border border-terracotta/25 text-fern-950 placeholder:text-fern-400 text-sm focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-all"
                  />
                </div>

                {/* 8. If others, please specify / Additional Details */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-fern-900 font-semibold mb-1">
                    Specific Requirements / If Others, Please Specify
                  </label>
                  <textarea
                    rows={4}
                    name="entry.1105226035"
                    placeholder="Specify any particular natural materials, land terrain, Araish lime plaster desires, timeline, or site details..."
                    value={form.otherDetails}
                    onChange={(e) => setForm({ ...form, otherDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-creme-50/90 border border-terracotta/25 text-fern-950 placeholder:text-fern-400 text-sm focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-fern-600 font-sans">
                    * Required. Directly synced with Studio Shunya Google Intake.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Submit Enquiry Form"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Studio Addresses, Physical Sanctuary & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio 1: Greater Noida Experience Sanctuary */}
            <div id="experience-studio" className="p-8 rounded-3xl bg-fern-900 text-creme-50 border border-sage-800 shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-rust/30 text-terracotta-200 text-[10px] font-sans uppercase tracking-widest font-bold border border-rust/40">
                  Experience Sanctuary
                </span>
                <span className="text-[11px] text-sage-300 font-sans">Delhi-NCR</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-creme-50">
                Studio Shunya Home-Office
              </h3>

              <p className="text-creme-200 text-xs sm:text-sm font-sans leading-relaxed">
                A living laboratory where you can physically touch the cool Araish lime finishes, examine load-bearing mud walls, and experience the 7°C natural thermal drop without air conditioning.
              </p>

              <div className="pt-2 text-xs font-sans text-creme-300 space-y-1.5 border-t border-creme/10">
                <p className="font-semibold text-creme-100 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-terracotta-300 shrink-0 mt-0.5" />
                  <span>D-379, Sector 3, Greater Noida, Delhi-NCR, India</span>
                </p>
                <p className="flex items-center gap-2 text-creme-400">
                  <Clock className="w-4 h-4 text-sage-400 shrink-0" />
                  <span>Walkthroughs by prior appointment</span>
                </p>
              </div>

              <a
                href="https://wa.me/919211620907?text=Hello%20Studio%20Shunya,%20I%20would%20like%20to%20schedule%20a%20walkthrough%20at%20the%20Greater%20Noida%20Experience%20Home."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-all mt-2"
              >
                <span>Book Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Studio 2: New Delhi Head Office */}
            <div className="p-8 rounded-3xl bg-creme-100/90 border border-terracotta/25 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-creme-200 text-fern-800 text-[10px] font-sans uppercase tracking-widest font-bold border border-terracotta/20">
                  Principal Head Office
                </span>
                <span className="text-[11px] text-fern-600 font-sans">New Delhi</span>
              </div>

              <h3 className="font-serif text-2xl text-fern-950">
                Dwarka Design Studio
              </h3>

              <div className="text-xs font-sans text-fern-800 space-y-2">
                <p className="flex items-start gap-2 leading-relaxed">
                  <MapPin className="w-4 h-4 text-rust shrink-0 mt-0.5" />
                  <span>{STUDIO_INFO.officeAddress}</span>
                </p>
                <p className="flex items-center gap-2 text-fern-700">
                  <Phone className="w-4 h-4 text-terracotta shrink-0" />
                  <span>{STUDIO_INFO.phone}</span>
                </p>
                <p className="flex items-center gap-2 text-fern-700">
                  <Mail className="w-4 h-4 text-sage-700 shrink-0" />
                  <span>{STUDIO_INFO.email}</span>
                </p>
              </div>

              <div className="pt-3 border-t border-terracotta/15 space-y-1.5 text-[11px] text-fern-600 font-sans">
                <span className="font-semibold text-fern-900 uppercase tracking-wider block">Office Hours</span>
                <p>{STUDIO_INFO.hours.weekdays}</p>
                <p>{STUDIO_INFO.hours.saturday}</p>
                <p>{STUDIO_INFO.hours.sunday}</p>
              </div>
            </div>

          </div>
        </div>

        {/* The 5-Step Engagement Roadmap */}
        <div className="mb-24 p-8 sm:p-14 rounded-3xl bg-creme-100/70 border border-terracotta/20 shadow-md">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-rust font-bold block mb-2">
              The Journey from Soil to Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal">
              How We Collaborate
            </h2>
            <p className="text-fern-800 text-sm sm:text-base mt-2 font-sans font-light">
              Our clear, transparent process guarantees architectural excellence, structural safety, and absolute eco-integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Brief",
                desc: "We discuss your family lifestyle, aesthetic aspirations, budget, and site topography."
              },
              {
                step: "02",
                title: "Soil & Microclimate",
                desc: "Lab soil testing (clay/silt/sand ratio) and solar wind simulation determine the earth construction typology."
              },
              {
                step: "03",
                title: "Vernacular Concept",
                desc: "Developing 3D natural light renders, passive cooling flows, courtyard layouts, and locked budget."
              },
              {
                step: "04",
                title: "Artisan Onboarding",
                desc: "We station trained PMC engineers and master lime/adobe craftsmen directly on your land."
              },
              {
                step: "05",
                title: "Living Sanctuary",
                desc: "Handover of a zero-VOC, zero-energy living earth home that cures and strengthens with time."
              }
            ].map((st, i) => (
              <div key={i} className="p-5 rounded-2xl bg-creme-50/80 border border-terracotta/20 space-y-2">
                <span className="font-serif text-3xl text-rust block font-bold">{st.step}</span>
                <h4 className="font-serif text-lg text-fern-950 font-medium">{st.title}</h4>
                <p className="text-xs text-fern-700 font-sans leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Commission FAQs Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-rust font-bold block mb-2">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-fern-950">
              Frequently Asked Questions About Commissioning
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-terracotta/20 bg-creme-100/90 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-creme-200/50 transition-colors"
                  >
                    <span className="font-serif text-lg sm:text-xl text-fern-950 font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-rust shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-fern-800 font-sans leading-relaxed border-t border-terracotta/10 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}