"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const heroImages = [
  "/img/banner.png",
  "/img/banner2.png",
  "/img/banner3.png",
  "/img/banner.png",
  "/img/banner2.png",
  "/img/banner3.png",
];

const HeroSection = () => {
  const [carouselError, setCarouselError] = useState(false);

  // Fallback Image
  if (carouselError) {
    return (
      <section className="relative w-full ">
        <Image
          src="/img/banner.png"
          alt="Rapid Consulting Business Consultancy Services"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>
    );
  }

  try {
    return (
      <section className=" w-full h-screen" aria-label="Hero Banner">
        <Carousel
          className="w-full h-full"
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4000 })]}
        >
          <CarouselContent className="-ml-0">
            {heroImages.map((src, index) => (
              <CarouselItem key={index} className="pl-0 basis-full">
                <Link href="/products">
                  <div className="relative w-full h-screen">
                    <Image
                      src={src}
                      alt={`Banner ${index + 1}`}
                      width={600}
                      height={600}
                      priority={index === 0}
                      className="object-cover w-full"
                    />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    );
  } catch (error) {
    setCarouselError(true);
    return null;
  }
};

export default HeroSection;
