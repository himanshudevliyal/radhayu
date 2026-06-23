"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import config from "@/config";
import { cn } from "@/lib/utils";

export default function ProductCards({ product }) {
  const isMultiImage = product.pictures?.length > 1;

  return (
    <div className="group rounded-3xl border p-2 transition-all duration-500 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl bg-white p-4">
          <Image
            width={500}
            height={500}
            src={`${config.file_base}${product.pictures?.[0]}`}
            alt={product.title}
            className={cn(
              `h-[280px] w-full object-contain transition-all duration-500 `,
              isMultiImage && "group-hover:opacity-0",
            )}
          />

          {isMultiImage && (
            <Image
              width={500}
              height={500}
              src={`${config.file_base}${product.pictures?.[1]}`}
              alt={product.title}
              className="absolute inset-0 h-[280px] w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
            />
          )}
        </div>

        {/* Category Badge */}
        {product.category_name && (
          <span className="absolute left-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-gray-800">
            {product.category_name}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 px-2 pb-3 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-bold leading-tight text-gray-900">
            {product.title}
          </h3>
        </div>

        <p className="line-clamp-2 text-sm text-gray-600">
          {product.short_description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-xs uppercase tracking-wide text-gray-500">
              Starting at
            </span>

            <div className="font-serif text-xl font-bold italic">
              ₹{product.starting_at}
            </div>
          </div>

          <Link
            href={`/products/${product.slug}?variant=${product.variants?.[0]?.id}`}
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent"
          >
            <BookOpen className="h-4 w-4" />
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}
