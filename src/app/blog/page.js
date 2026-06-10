import Breadcrumb from "@/components/breadcrumb";
import BlogSection from "@/home/blog-section";

export default function Blogs(params) {
  return (
    <>
      <Breadcrumb current="our blog" bgImage="/img/why-choose.webp" />

      <BlogSection />
    </>
  );
}
