import Link from "next/link";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/studioData";

export const metadata = {
  title: "Services | Studio Shunya - Architecture, PMC & Natural Building",
  description: "Comprehensive natural building services including Architecture & Interior Design, Project Management Consultancy (PMC), Turn-Key Construction, and Lime Plaster Finishes.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 relative bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-fern-700 hover:text-rust transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>

        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-rust" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-rust font-semibold">
              Practices &amp; Engagements
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-fern-900 leading-tight">
            Our <span className="font-serif italic text-rust">Services</span> &amp; Capabilities
          </h1>

          <p className="mt-4 text-fern-800 text-lg leading-relaxed font-sans">
            We provide end-to-end design, project management, and artisanal execution for living earth buildings across India.
          </p>
        </div>

        <div className="space-y-16">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-8 sm:p-12 rounded-3xl bg-creme-100/90 border border-terracotta/25 shadow-md space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-terracotta/20">
                <div>
                  <span className="font-serif text-3xl text-rust block mb-2">{srv.number}</span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-fern-900">{srv.title}</h2>
                  <p className="text-xs uppercase tracking-wider text-terracotta-700 mt-1 font-semibold">
                    {srv.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:max-w-xs">
                  {srv.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 rounded-full bg-creme-200 text-fern-900 text-xs font-sans border border-terracotta/15 flex items-center gap-1.5"
                    >
                      <Check className="w-3 h-3 text-rust" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-fern-800 text-base leading-relaxed font-sans max-w-4xl">
                {srv.description}
              </p>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-rust font-bold mb-4">
                  Step-by-Step Milestones
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {srv.steps.map((st, i) => (
                    <div key={st.title} className="p-5 rounded-2xl bg-creme-50 border border-terracotta/15 space-y-1.5">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-fern-600 block">
                        Milestone 0{i + 1}
                      </span>
                      <h4 className="font-serif text-base text-fern-900 font-semibold">{st.title}</h4>
                      <p className="text-xs text-fern-700 leading-relaxed font-sans">{st.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-colors shadow-lg"
          >
            <span>Discuss Your Project With Ar. Shreya</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
