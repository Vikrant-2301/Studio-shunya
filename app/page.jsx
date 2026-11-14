import PageLoader from "@/components/PageLoader";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import MaterialsPalette from "@/components/MaterialsPalette";
import PassiveDesignExplainer from "@/components/PassiveDesignExplainer";
import ServicesSection from "@/components/ServicesSection";
import FounderSection from "@/components/FounderSection";
import CarbonCalculator from "@/components/CarbonCalculator";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Hero />
      <PhilosophySection />
      <ProjectsShowcase />
      <MaterialsPalette />
      <PassiveDesignExplainer />
      <ServicesSection />
      <FounderSection />
      <CarbonCalculator />
      <ContactSection />
    </>
  );
}
