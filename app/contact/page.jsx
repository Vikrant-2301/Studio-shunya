import { Suspense } from "react";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata = {
  title: "Contact Studio Shunya | Architectural Commission & Greater Noida Studio Visit",
  description: "Initiate your living architecture project with Ar. Shreya Srivastava. Discuss your sustainable farmhouse, mud residence, or schedule a walkthrough at the Greater Noida Experience Sanctuary.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-36 text-center font-serif text-xl text-fern-800">Preparing studio interface...</div>}>
      <ContactPageClient />
    </Suspense>
  );
}