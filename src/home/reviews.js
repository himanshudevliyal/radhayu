/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/layout/heading";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah Thompson",
    role: "Project Manager",
    body: "This AI product has transformed the way I manage my daily tasks. It's intuitive, fast, and incredibly accurate!",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    body: "I was skeptical at first, but this AI tool saved me hours of work. The automation features are a game-changer.",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Emily Rodriguez",
    role: "Data Analyst",
    body: "The AI's ability to analyze data and provide insights is unmatched. It's like having a personal assistant 24/7.",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "David Patel",
    role: "IT Consultant",
    body: "I've never seen an AI product this user-friendly. It integrated seamlessly into my workflow from day one.",
    img: "https://i.pravatar.cc/100?img=4",
  },
];

const ReviewCard = ({ img, name, role, body }) => {
  return (
    <figure
      className={cn(
        "relative w-[320px] rounded-xl p-5",
        "bg-white",
        "border border-gray-200",
        "shadow-sm hover:shadow-md",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        "overflow-hidden group"
      )}
    >
      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="h-12 w-12 text-emerald-500" />
      </div>

      <div className="relative z-10">
        {/* Stars */}
        <div className="mb-3 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-emerald-500 text-emerald-500"
            />
          ))}
        </div>

        {/* Review text */}
        <blockquote className="text-sm leading-relaxed text-gray-600 mb-4">
          &quot;{body}&quot;
        </blockquote>

        {/* User info */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
          <img
            src={img}
            alt={name}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-emerald-600">{role}</p>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default function Reviews() {
  return (
    <section className="relative  overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12">
      {/* Subtle background pattern */}
      <Image
        src="/img/contact-bg-flower.png"
        alt="Leaf Background"
        width={300}
        height={500}
        className="absolute right-0 -top-10   opacity-40 pointer-events-none    rotate-90"
      />

      <Image
        src="/img/contact-bg-flower.png"
        alt="Leaf Background"
        width={300}
        height={500}
        className="absolute left-0 -bottom-20   opacity-40 pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative mx-auto ">
        <SectionHeading
          badge="Testimonials"
          title={"What Our Users "}
          des="Trusted by thousands of professionals worldwide who've transformed their workflow"
          highlight="Say"
          className=" md:text-xl text-center"
          titleClassName="text-4xl"
        />

        {/* Reviews marquee */}
        <Marquee pauseOnHover className="[--duration:45s] ">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:45s]">
          {reviews.map((review, i) => (
            <ReviewCard key={`rev-${i}`} {...review} />
          ))}
        </Marquee>
      </div>
      {/* Gradient fades on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-green-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-green-50 to-transparent" />
    </section>
  );
}
