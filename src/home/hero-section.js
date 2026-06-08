"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroImages = ["/img/hero.webp", "/img/hero.webp", "/img/hero.webp"];

const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
      <Carousel
        className="w-full h-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
      >
        <CarouselContent>
          {heroImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[600px] md:h-[650px]">
                <Image
                  src={src}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  alt="Hero image"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSection;
