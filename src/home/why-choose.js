import {
  Leaf,
  ScrollText,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function AyurvedicSection() {
  return (
    <section className="relative  bg-primary py-20 text-white">
      {/* Background pattern overlay */}
      {/* <div className="absolute inset-0 bg-[url('/img/bg-3.jpg')] " /> */}
      {/* <Image
        src="/img/bg-1.png"
        alt="Background Leaf"
        fill
        className="object-cover opacity-10"
      /> */}

      <div className="relative container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold">
            Elevating the Power of Ayurveda
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Crafted with purity, tradition, and holistic care
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Item 1 */}
          <div className="text-center">
            <Leaf className="mx-auto mb-4 h-12 w-12 text-white" />
            <h3 className="mb-2 text-md font-semibold uppercase tracking-wide">
              Pure Herbal Ingredients
            </h3>
            <p className="text-sm text-white/80">
              Formulated using 100% natural herbs and plant-based ingredients
              for safe and effective healing.
            </p>
          </div>

          {/* Item 2 */}
          <div className="text-center">
            <ScrollText className="mx-auto mb-4 h-12 w-12 text-white" />
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">
              Ancient Ayurvedic Wisdom
            </h3>
            <p className="text-sm text-white/80">
              Inspired by age-old Ayurvedic texts and traditional formulations
              passed down through generations.
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-center">
            <HeartPulse className="mx-auto mb-4 h-12 w-12 text-white" />
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">
              Holistic Healing
            </h3>
            <p className="text-sm text-white/80">
              Focused on balancing body, mind, and soul rather than just
              treating symptoms.
            </p>
          </div>

          {/* Item 4 */}
          <div className="text-center">
            <Stethoscope className="mx-auto mb-4 h-12 w-12 text-white" />
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">
              Expert Formulations
            </h3>
            <p className="text-sm text-white/80">
              Developed and reviewed by experienced Ayurvedic practitioners for
              trusted results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
