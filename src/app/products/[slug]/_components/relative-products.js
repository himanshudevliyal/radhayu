"use client";

import ProductCards from "@/components/ui/product-card";
import { useQuery } from "@tanstack/react-query";

export default function RelativeProduct({ categoryId }) {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", categoryId],
    queryFn: async () => {
      const { data } = await http().get(
        `${endpoints.products.getAll}?category=${categoryId}`,
      );

      return data?.products ?? [];
    },
    enabled: !!categoryId,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCards key={product.id} product={product} />
      ))}
    </div>
  );
}
