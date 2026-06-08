import StatsSection from "@/home/stats-section";
import CategoryBar from "@/home/category-bar";
import FeaturedProducts from "@/home/featured-products";
import HeroSection from "@/home/hero-section";
import TrendingProducts from "@/home/trending-products";
import AyurvedicSection from "@/home/why-choose";
import BlogSection from "@/home/blog-section";
import FAQ from "@/home/faq";
import ReelsCarousel from "@/home/instragram";
import Reviews from "@/home/reviews";
import { Marquee } from "@/components/ui/marquee";
import FeaturesSection from "@/home/features";
import Section from "@/components/layout/section";
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection></StatsSection>
      <CategoryBar></CategoryBar>
      <FeaturesSection></FeaturesSection>
      <Section className="relative overflow-hidden px-4  bg-white">
        <TrendingProducts></TrendingProducts>
      </Section>{" "}
      <AyurvedicSection></AyurvedicSection>
      <FeaturedProducts></FeaturedProducts>
      <ReelsCarousel></ReelsCarousel>
      <Reviews></Reviews>
      <BlogSection></BlogSection>
      <FAQ />
    </>
  );
}
