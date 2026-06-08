import AboutSection from "./_components/about";
import PromoBanner from "@/home/promo-banner";
import VisionSection from "./_components/value";
import FAQ from "@/home/faq";
import Breadcrumb from "@/components/breadcrumb";
import EnergySection from "./_components/why-choose";

export default function page() {
  return (
    <>
      <Breadcrumb current="About us" bgImage="/img/why-choose.webp" />
      <AboutSection></AboutSection>
      <VisionSection></VisionSection>

      <PromoBanner></PromoBanner>
      <EnergySection></EnergySection>
      <FAQ />
    </>
  );
}
