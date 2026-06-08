import Section from "@/components/layout/section";
import ProductPage from "./_components/product-page";
async function getProduct(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/get-by-slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  const data = await res.json();
  return data?.data ?? null;
}

export default async function Product({ params }) {
  const { slug } = await params; // In Next.js 15, params is a Promise
  const product = await getProduct(slug);

  // Handle product not found
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Product not found.</div>
      </div>
    );
  }

  return (
    <main>
      <Section>
        {/*
          ✅ Server Component sirf data fetch karta hai aur
          ProductPageClient ko prop ke roop mein pass karta hai.
          Saara interactive logic client component mein hai.
        */}
        <ProductPage product={product} />
      </Section>
    </main>
  );
}

// ✅ Optional: generateMetadata for SEO (server-only, no extra fetch needed)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.title,
    description: product.short_description,
    openGraph: {
      title: product.title,
      description: product.short_description,
    },
  };
}
