import { SectionHeading } from "@/components/layout/heading";
import Section from "@/components/layout/section";
import BlogCard from "@/components/ui/blog-card";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Benefits of Ashwagandha",
      excerpt:
        "Ashwagandha is a powerful Ayurvedic herb that helps reduce stress, boost energy, and improve overall wellness.",
      image: "/img/hero.jpg",
      slug: "benefits-of-ashwagandha",
    },
    {
      id: 2,
      title: "Triphala for Digestive Health",
      excerpt:
        "Triphala is a traditional Ayurvedic medicine known for improving digestion and detoxifying the body naturally.",
      image: "/img/hero.webp",
      slug: "triphala-for-digestion",
    },
    {
      id: 3,
      title: "Neem: Nature’s Healer",
      excerpt:
        "Neem is widely used in Ayurveda for skin care, blood purification, and boosting immunity.",
      image: "/img/why-choose.webp",
      slug: "neem-natures-healer",
    },
    {
      id: 4,
      title: "Neem: Nature’s Healer",
      excerpt:
        "Neem is widely used in Ayurveda for skin care, blood purification, and boosting immunity.",
      image: "/img/why-choose.webp",
      slug: "neem-natures-healer",
    },
  ];

  return (
    <Section>
      <SectionHeading
        badge="Blog"
        title={"Our"}
        highlight="Blogs"
        className="mb-14 md:text-xl text-center"
        titleClassName="text-4xl"
      />

      <div className="grid md:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </Section>
  );
}
