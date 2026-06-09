import StatsSection from "@/home/stats-section";
import CategoryBar from "@/home/category-bar";
import FeaturedProducts from "@/home/featured-products";
import HeroSection from "@/home/hero-section";
import TrendingProducts from "@/home/trending-products";
import AyurvedicSection from "@/home/why-choose";
import BlogSection from "@/home/blog-section";
import FAQ from "@/home/faq";
// import ReelsCarousel from "@/home/instragram";
import Reviews from "@/home/reviews";
import { Marquee } from "@/components/ui/marquee";
import FeaturesSection from "@/home/features";
import Section from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/heading";
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CategoryBar />
      <FeaturesSection />
      <Section className="relative overflow-hidden px-4  bg-white">
        <SectionHeading
          badge="Products"
          title={"Explore Our "}
          des={
            <>
              From Churna and Syrups to Tablets and Taila, find Ayurvedic
              solutions <br></br> designed to support your wellness journey
              naturally.
            </>
          }
          highlight="Products"
          className="mb-14 md:text-xl text-center"
          titleClassName="text-4xl"
        />
        <TrendingProducts></TrendingProducts>
      </Section>
      <AyurvedicSection />
      {/* <FeaturedProducts></FeaturedProducts> */}
      {/* <ReelsCarousel></ReelsCarousel> */}
      <Reviews />
      <BlogSection />
      <FAQ />
    </>
  );
}
