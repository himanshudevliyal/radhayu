"use client";

import { SectionHeading } from "@/components/layout/heading";
import Section from "@/components/layout/section";
import ProductCard from "@/components/ui/product-card";
import { fetchProducts } from "@/lib/features/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const OurProducts = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default OurProducts;
