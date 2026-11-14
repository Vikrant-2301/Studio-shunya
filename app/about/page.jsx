import AboutPageClient from "@/components/AboutPageClient";

export const metadata = {
  title: "About Studio Shunya | Philosophy, Living Earth Architecture & Ar. Shreya Srivastava",
  description: "Discover the architectural philosophy of Studio Shunya and founder Ar. Shreya Srivastava. Redefining sustainable mud buildings, Araish lime plasters, and zero-energy living in India.",
  openGraph: {
    title: "About Studio Shunya | Living Earth Architecture",
    description: "The Architecture of Nothingness and Everything. Founded in 2020 by Ar. Shreya Srivastava.",
    images: [
      {
        url: "/images/portfolio/f5e53e_5a0de43fcb4e4a4eb5b2963c660254e3.jpg",
        width: 1200,
        height: 800,
        alt: "Ar. Shreya Srivastava, Founder of Studio Shunya",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}