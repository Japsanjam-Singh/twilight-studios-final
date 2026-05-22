import AboutPreview from "@/components/AboutPreview";
import BookingCTA from "@/components/BookingCTA";
import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";

export default function Home() {
  return (
    <>
    <main>
      <Hero></Hero>
      <FeaturedWork></FeaturedWork>
      <ServicesPreview></ServicesPreview>
      <AboutPreview></AboutPreview>
      <BookingCTA></BookingCTA>
    </main>
    </>
  );
}
