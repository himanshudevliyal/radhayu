import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ title, excerpt, image, slug }) {
  return (
    <div className="  overflow-hidden  transition">
      {/* Image */}
      <div className="relative w-full h-60  rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="py-5">
        <h3 className="text-xl font-semibold mb-2 ">{title}</h3>

        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>

        <Link
          href={`/blog/${slug}`}
          className="inline-block  decoration-0 font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
