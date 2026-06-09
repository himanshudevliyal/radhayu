"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "@/lib/features/productsSlice";
import ProductCard from "@/components/ui/product-card";
import Section from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/heading";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OurProducts = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="relative mx-auto max-w-7xl px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="py-2">
          {products?.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default OurProducts;
