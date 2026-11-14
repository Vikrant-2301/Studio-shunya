import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollBrushBackground from "@/components/ScrollBrushBackground";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.studioshunya.com"),
  title: "Studio Shunya | Earth & Living Natural Architecture",
  description: "Studio Shunya is a sustainable, zero-energy architecture and interior design practice founded by Ar. Shreya Srivastava. Specializing in load-bearing mud walls, Araish lime plasters, stone masonry, and passive bioclimatic design.",
  keywords: [
    "Studio Shunya",
    "Ar. Shreya Srivastava",
    "Mud Architecture India",
    "Sustainable Architecture Delhi NCR",
    "Araish Lime Plaster",
    "Zero Energy Buildings",
    "Vernacular Architecture",
    "Farmhouse Architecture Rajasthan",
    "Greater Noida Earth Architecture"
  ],
  authors: [{ name: "Ar. Shreya Srivastava", url: "https://www.studioshunya.com" }],
  openGraph: {
    title: "Studio Shunya | Earth & Living Natural Architecture",
    description: "To give you everything without affecting anything. Zero Energy Mud & Lime Buildings.",
    url: "https://www.studioshunya.com",
    siteName: "Studio Shunya",
    images: [
      {
        url: "/images/portfolio/f5e53e_7682d7f216694284b25c127ae6b104b3.jpg",
        width: 1200,
        height: 800,
        alt: "Studio Shunya Experience Home-Office",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased text-fern-950 bg-[#FAF7F2] relative selection:bg-terracotta selection:text-creme-50">
        <ScrollBrushBackground />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
