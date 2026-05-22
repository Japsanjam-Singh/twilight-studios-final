import ContactFormSection from "@/components/Contact us/ContactFormSection";
import ContactHero from "@/components/Contact us/ContactHero";
import ContactInfoSection from "@/components/Contact us/ContactInfoSection";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfoSection />
      <ContactFormSection />
    </main>
  )
}