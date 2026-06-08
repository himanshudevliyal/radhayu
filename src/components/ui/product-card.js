import { Heart, ShoppingCart, Star, BookOpen, Loader } from "lucide-react";
import Image from "next/image";
import config from "@/config";
import Link from "next/link";

export default function ProductCards({ product }) {
  return (
    <div className="group p-2 rounded-3xl border border-white/30 bg-white/70 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative">
        <div className="overflow-hidden rounded-3xl">
          <Image
            width={500}
            height={500}
            src={`${config.file_base}${product.pictures?.[0]}`}
            alt={product.title}
            className=" w-full h-50 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
        </div>

        {/* Category */}
        <span className="absolute bg-green-100 left-4 top-4 rounded-full  px-3 py-1.5 text-xs font-medium text-gray-800 backdrop-blur">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 px-2 pb-3 pt-10">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl font-bold text-gray-900 leading-tight  ">
            {product.title}
          </h3>
        </div>

        <p className="line-clamp-2 text-sm text-gray-600">
          {product.short_description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-xs uppercase tracking-wide text-[hsl(25 15% 45%)]">
              Starting at
            </span>
            <div className="font-serif text-2xl font-bold  italic ">
              ₹{product.starting_at}
            </div>
          </div>

          {/* Read More */}
          <Link
            href={`/products/${product.slug}?variant=${product.variants[0].id}`}
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondary hover:text-white"
          >
            <BookOpen className="h-4 w-4" />
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
