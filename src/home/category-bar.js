"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCards from "@/components/ui/product-card";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";

export default function CategoryProductSection() {
  const [activeCategory, setActiveCategory] = useState(null);

  // ---------------- CATEGORIES ----------------
  const { data: categories = [], isLoading: catLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await http().get(endpoints.categories.getAll);
      return data?.categories ?? [];
    },
  });

  // ---------------- PRODUCTS ----------------
  const { data: products = [], isLoading: productLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await http().get(endpoints.products.getAll);
      return data?.products ?? [];
    },
  });

  useEffect(() => {
    if (categories.length && !activeCategory) {
      setActiveCategory(categories[0].id);
    }
  }, [categories, activeCategory]);

  if (catLoading || productLoading) return <p>Loading...</p>;

  // filter products by category
  const filteredProducts = products.filter(
    (item) => item.category_id === activeCategory,
  );

  return (
    <div className="flex gap-4">
      {/* LEFT SIDE - CATEGORIES */}
      <div className="w-1/4 border-r">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`w-full text-left p-3 border-b transition ${
              activeCategory === cat.id
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* RIGHT SIDE - PRODUCTS */}
      <div className="w-3/4">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
