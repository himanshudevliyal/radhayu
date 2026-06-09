/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/layout/heading";
import Image from "next/image";

const reviews = [
  {
    name: "Amit Sharma",
    role: "Delhi",
    body: "I was looking for a natural solution for digestive discomfort and came across Radhayu. The formulation felt gentle and easy to include in my daily routine. Happy with the overall experience.",
  },
  {
    name: "Neha Gupta",
    role: "Gurugram",
    body: "What I liked most about Radhayu is the focus on traditional Ayurvedic ingredients. The quality of the products and packaging gave me confidence from the very first purchase.",
  },
  {
    name: "Rahul Verma",
    role: "Pune",
    body: "The ordering process was smooth and the products arrived well packed. It's good to find an Ayurvedic brand that maintains both authenticity and quality.",
  },
  {
    name: "Priya Mehta",
    role: "Ahmedabad",
    body: "I've been trying to adopt a more natural wellness routine, and Radhayu products fit perfectly into that approach. The ingredients and formulations seem thoughtfully crafted.",
  },
  {
    name: "Sandeep Arora",
    role: "Chandigarh",
    body: "The herbal formulations feel rooted in traditional Ayurveda. I appreciate the attention to quality and the clear information provided with the products.",
  },
  {
    name: "Pooja Bansal",
    role: "Jaipur",
    body: "Radhayu has become one of my preferred wellness brands. The products are easy to use, and the overall experience has been consistently good.",
  },
  {
    name: "Vikas Malhotra",
    role: "Noida",
    body: "I was specifically searching for Ayurvedic wellness products and found Radhayu through a recommendation. The quality exceeded my expectations.",
  },
  {
    name: "Shreya Kapoor",
    role: "Mumbai",
    body: "The products feel premium and authentic. I appreciate the brand's focus on traditional herbal formulations rather than quick-fix solutions.",
  },
  {
    name: "Karan Khanna",
    role: "New Delhi",
    body: "From placing the order to receiving the products, everything was handled professionally. The brand gives a trustworthy and reliable impression.",
  },
  {
    name: "Anjali Singh",
    role: "Lucknow",
    body: "The combination of traditional Ayurvedic wisdom and modern packaging makes Radhayu stand out. Looking forward to exploring more products from the range.",
  },
  {
    name: "Nitin Agarwal",
    role: "Faridabad",
    body: "I prefer wellness products that focus on natural ingredients, and Radhayu aligns perfectly with that philosophy. The quality and presentation are impressive.",
  },
  {
    name: "Ritika Jain",
    role: "Indore",
    body: "The formulations feel carefully developed and the ingredients are clearly communicated. It's refreshing to see an Ayurvedic brand maintain such standards.",
  },
  {
    name: "Manish Bhatia",
    role: "Ghaziabad",
    body: "After trying several wellness brands, I found Radhayu to be one of the most reliable in terms of product quality, packaging, and overall experience.",
  },
  {
    name: "Sneha Arora",
    role: "Mohali",
    body: "I appreciate the brand's commitment to traditional Ayurvedic principles while presenting the products in a modern and professional manner.",
  },
  {
    name: "Deepak Sharma",
    role: "Jaipur",
    body: "The products arrived on time and were exactly as described. The overall experience has been smooth and satisfactory.",
  },
  {
    name: "Kavita Verma",
    role: "Bhopal",
    body: "Radhayu offers a good balance of authenticity, quality, and convenience. It has become a trusted part of my wellness routine.",
  },
];

const ReviewCard = ({ name, role, body }) => {
  return (
    <figure
      className={cn(
        "relative w-[320px] rounded-xl p-5",
        "bg-white",
        "border border-gray-200",
        "shadow-sm hover:shadow-md",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        "overflow-hidden group",
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
          {/* <img
            src={img}
            alt={name}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200"
          /> */}
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
