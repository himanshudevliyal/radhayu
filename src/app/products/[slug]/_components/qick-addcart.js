"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import config from "@/config";

export default function QickAdd({
  mainImage,
  price,
  title,
  quantity: initialQuantity = 1, // ✅ renamed prop to avoid conflict
  addToCart,
  stock,
}) {
  const [showBar, setShowBar] = useState(false);
  const [qty, setQty] = useState(initialQuantity); // ✅ separate local state

  useEffect(function () {
    function handleScroll() {
      setShowBar(window.scrollY > 200);
    }
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden lg:flex fixed bottom-0 left-0 w-full z-[999]
      transition-all duration-500
      ${showBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="border-t bg-white shadow-2xl w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <Image
              src={`${config.file_base}${mainImage[0]}`}
              alt={title}
              width={64}
              height={64}
              className="w-16 h-16 rounded-lg object-cover border"
            />
            <div>
              <p className="font-semibold line-clamp-1">{title}</p>
              <p className="text-primary font-bold">₹{price}</p>
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center px-4 border-primary border-1 rounded-xl gap-2">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              disabled={qty === 1}
              className="w-9 h-9 border-r border-primary disabled:opacity-40"
            >
              <Minus size={16} />
            </button>

            <span className="w-8 text-center font-semibold">{qty}</span>

            <button
              onClick={() => setQty((q) => Math.min(stock, q + 1))} // ✅ respect stock limit
              disabled={qty >= stock}
              className="w-9 h-9 border-l border-primary disabled:opacity-40"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* CTA */}
          <button
            onClick={() => addToCart(false, qty)} // ✅ wrapped in arrow fn + passes qty
            disabled={stock === 0}
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold disabled:opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
