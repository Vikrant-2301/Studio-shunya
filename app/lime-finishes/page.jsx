import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, Check, Droplets, ShieldCheck, Atom } from "lucide-react";

export const metadata = {
  title: "Lime Plasters & Finishes | Studio Shunya - Araish & Tadelakt",
  description: "Specialized lime plaster finishes by Studio Shunya. Reviving Araish marble dust sheen, slaked lime base coats, and Moroccan waterproof Tadelakt.",
};

export default function LimeFinishesPage() {
  const limeTiers = [
    {
      title: "Lime Plaster Base Coat",
      subtitle: "The Breathable Foundation",
      desc: "Coarse slaked lime mixed with surkhi (crushed brick dust) and river sand. Provides superior flexibility and vapor permeability compared to brittle grey cement.",
      features: ["Vapor permeable", "Self-healing micro-cracks", "Absorbs ambient humidity", "Natural fungal resistance"],
      image: "/images/portfolio/f5e53e_0e8328580019435c9d86da3523c8de18.jpg"
    },
    {
      title: "Araish Marble Dust Mirror Plaster",
      subtitle: "The Royal Rajasthani Art",
      desc: "An ancient Indian finishing art combining slaked lime aged for months, micro-fine marble powder, curd, and fenugreek water, burnished to a glassy cold sheen with agate stones.",
      features: ["Marble-like reflective sheen", "Cool to the touch in 45°C summers", "Gains hardness over decades", "100% Zero VOC chemical free"],
      image: "/images/portfolio/f5e53e_3576c221db65462982c7bf7c4a5381c9f000.jpg"
    },
    {
      title: "Mineral Pigmented Earth Lime",
      subtitle: "Organic Ochre, Terracotta & Sage Infusions",
      desc: "Pure earth mineral oxides blended into the lime matrix. The color is integral through the entire plaster thickness and will never peel, flake, or fade in UV sunlight.",
      features: ["UV-stable earth pigments", "No synthetic acrylic binder", "Natural earthy matte warmth", "Endless bespoke color tones"],
      image: "/images/portfolio/f5e53e_5e37ab0082ec4baa9f1933c557babe87f000.jpg"
    },
    {
      title: "Moroccan Tadelakt Waterproof Lime",
      subtitle: "Seamless Waterproof Bathrooms & Sinks",
      desc: "Hydraulic lime burnished with olive oil black soap. The soap chemically reacts with the calcium hydroxide to form a water-insoluble calcium stearate barrier.",
      features: ["100% waterproof for showers & sinks", "Seamless monolithic organic curves", "Silky leather-like texture", "Eliminates tile grout lines"],
      image: "/images/portfolio/f5e53e_31b7a4129851400695d8be75ef15091b.jpg"
    }
  ];

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
            <span className="w-8 h-[1.5px] bg-terracotta" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-terracotta font-semibold">
              Artisanal Finishing Craft
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-fern-900 leading-tight">
            Lime Plasters &amp; <span className="font-serif italic text-terracotta">Araish</span> Finishes
          </h1>

          <p className="mt-4 text-fern-800 text-lg leading-relaxed font-sans">
            Say goodbye to synthetic toxic paints. Lime is a living, breathing material that continuously captures atmospheric carbon dioxide as it cures into limestone on your walls.
          </p>
        </div>

        {/* Lime Benefits Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 p-6 rounded-3xl bg-creme-100 border border-terracotta/20">
          <div>
            <Atom className="w-5 h-5 text-rust mb-2" />
            <span className="font-serif text-xl font-bold text-fern-900 block">Carbon Negative</span>
            <p className="text-xs text-fern-700">Absorbs CO2 during carbonation</p>
          </div>
          <div>
            <ShieldCheck className="w-5 h-5 text-fern-700 mb-2" />
            <span className="font-serif text-xl font-bold text-fern-900 block">Anti-Microbial</span>
            <p className="text-xs text-fern-700">Natural high pH kills mold and bacteria</p>
          </div>
          <div>
            <Droplets className="w-5 h-5 text-sage-700 mb-2" />
            <span className="font-serif text-xl font-bold text-fern-900 block">100% Breathable</span>
            <p className="text-xs text-fern-700">Buffers indoor relative humidity</p>
          </div>
          <div>
            <Sparkles className="w-5 h-5 text-terracotta mb-2" />
            <span className="font-serif text-xl font-bold text-fern-900 block">Zero VOCs</span>
            <p className="text-xs text-fern-700">Safe for children, pets &amp; allergies</p>
          </div>
        </div>

        {/* Lime Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {limeTiers.map((tier) => (
            <div
              key={tier.title}
              className="p-8 rounded-3xl bg-creme-100/90 border border-terracotta/25 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-terracotta/15 bg-fern-950/10">
                  <Image src={tier.image} alt={tier.title} fill className="object-cover" />
                </div>

                <div>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-rust font-bold block mb-1">
                    {tier.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-fern-900">{tier.title}</h3>
                </div>

                <p className="text-sm text-fern-800 leading-relaxed font-sans">{tier.desc}</p>
              </div>

              <div className="pt-4 border-t border-terracotta/15">
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-fern-900 font-sans">
                      <Check className="w-3.5 h-3.5 text-rust shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-fern-900 text-creme-100 text-center space-y-4">
          <h3 className="font-serif text-3xl text-creme-50">
            Commission Lime Plasters for Your Space
          </h3>
          <p className="text-creme-300 text-sm max-w-xl mx-auto font-sans">
            We provide lime plaster consulting, artisan execution, and material mixes for both new buildings and restorations across India.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-8 py-3.5 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-colors"
          >
            Request Lime Finishes Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
