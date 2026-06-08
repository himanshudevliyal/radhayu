"use client";

import Image from "next/image";
import { Star, FlaskConical, Leaf, Search } from "lucide-react";
import { SectionHeading } from "@/components/layout/heading";
import Section from "@/components/layout/section";

const features = [
  {
    icon: Star,
    title: "Best Hair Care Item",
    description:
      "Ranked as the Best Hair Care Item, rinse-free hair treatment nourishes and repairs damaged hair from root to tip.",
    accent: "#c9a96e",
    tag: "Award Winning",
    position: "left",
  },
  {
    icon: FlaskConical,
    title: "Advance Formula",
    description:
      "Formulated with 7 naturally-infused oils and proteins, deeply moisturizes and nourishes every strand.",
    accent: "#7a8fa8",
    tag: "7 Botanicals",
    position: "left",
  },
  {
    icon: Star,
    title: "Best Hair Care Item",
    description:
      "Ranked as the Best Hair Care Item, rinse-free hair treatment nourishes and repairs damaged hair from root to tip.",
    accent: "#c9a96e",
    tag: "Award Winning",
    position: "left",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "We prioritize sustainability in every aspect, from sourcing organic ingredients to eco-conscious packaging.",
    accent: "#7a9e7e",
    tag: "Eco Certified",
    position: "right",
  },
  {
    icon: Search,
    title: "Full Transparency",
    description:
      "We maintain complete transparency, ensuring every ingredient is traceable back to its source.",
    accent: "#7a8fa8",
    tag: "100% Traceable",
    position: "right",
  },
  {
    icon: Star,
    title: "Best Hair Care Item",
    description:
      "Ranked as the Best Hair Care Item, rinse-free hair treatment nourishes and repairs damaged hair from root to tip.",
    accent: "#c9a96e",
    tag: "Award Winning",
    position: "right",
  },
];

const Mandala = () => (
  <svg
    viewBox="0 0 200 200"
    className="absolute inset-0 w-full h-full opacity-[0.06] animate-[spin_60s_linear_infinite]"
  >
    {[0, 30, 60, 90, 120, 150].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 100 100)`}>
        <ellipse cx="100" cy="60" rx="4" ry="14" fill="#8B6B3D" />
        <ellipse cx="100" cy="40" rx="2" ry="8" fill="#8B6B3D" />
        <circle cx="100" cy="30" r="3" fill="#8B6B3D" />
      </g>
    ))}
    {[0, 45, 90, 135].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 100 100)`}>
        <rect x="98" y="20" width="4" height="20" rx="2" fill="#8B6B3D" />
      </g>
    ))}
    <circle
      cx="100"
      cy="100"
      r="60"
      fill="none"
      stroke="#8B6B3D"
      strokeWidth="0.5"
      strokeDasharray="4 6"
    />
    <circle
      cx="100"
      cy="100"
      r="45"
      fill="none"
      stroke="#8B6B3D"
      strokeWidth="0.5"
    />
    <circle
      cx="100"
      cy="100"
      r="18"
      fill="none"
      stroke="#8B6B3D"
      strokeWidth="1"
    />
    <circle cx="100" cy="100" r="8" fill="#8B6B3D" />
  </svg>
);

const FloralDot = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
    <circle cx="10" cy="10" r="2.5" />
    {[0, 60, 120, 180, 240, 300].map((a, i) => (
      <ellipse
        key={i}
        cx={10 + 4.5 * Math.cos((a * Math.PI) / 180)}
        cy={10 + 4.5 * Math.sin((a * Math.PI) / 180)}
        rx="1.8"
        ry="3.2"
        transform={`rotate(${a} ${10 + 4.5 * Math.cos((a * Math.PI) / 180)} ${
          10 + 4.5 * Math.sin((a * Math.PI) / 180)
        })`}
      />
    ))}
  </svg>
);

export default function FeaturesSection() {
  const leftFeatures = features.filter((f) => f.position === "left");
  const rightFeatures = features.filter((f) => f.position === "right");

  return (
    <Section className="relative overflow-hidden px-4  bg-white">
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background decorative orbs */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #d4a96a 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #c4856a 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <SectionHeading
        badge="Categories"
        title={"Shop by "}
        des=<>
          We believe in building lasting relationships with our patients,
          offering not <br></br>just medications, but comprehensive health
          support that helps you live your best life.
        </>
        highlight="Concern"
        className="mb-14 md:text-xl text-center"
        titleClassName="text-4xl"
      />
      <div className="grid  gap-8 md:grid-cols-[1fr_auto_1fr] items-center ">
        <div className="flex flex-col gap-10">
          {leftFeatures.map((feature, i) => (
            <FeatureCard key={i} feature={feature} align="left" index={i} />
          ))}
        </div>

        {/* Center bottle */}
        <div
          className="relative mx-auto flex items-center justify-center grid-cols-2"
          style={{ width: 280, minHeight: 520 }}
        >
          {/* Mandala behind bottle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[460px] w-[460px]">
              <Mandala />
            </div>
          </div>

          {/* Glow pool */}
          <div
            className="absolute bottom-4 left-1/2 h-28 w-80 -translate-x-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse, #d4a96a60 0%, transparent 70%)",
            }}
          />

          {/* Ring */}
          <div
            className="absolute inset-8 rounded-full border-2 opacity-20"
            style={{ borderColor: "#c9a96e", borderStyle: "dashed" }}
          />

          {/* Floating petal accents */}
          <FloralDot
            className="absolute top-8 left-4 h-5 w-5 opacity-40"
            style={{ color: "#c9a96e" }}
          />
          <FloralDot
            className="absolute bottom-16 right-2 h-4 w-4 opacity-30 animate-pulse"
            style={{ color: "#b07d6e" }}
          />
          <FloralDot
            className="absolute top-1/2 -right-2 h-3 w-3 opacity-25"
            style={{ color: "#7a9e7e" }}
          />

          <Image
            src="/img/product-bottle.jpg"
            alt="Deep Nourishing Treatment"
            width={240}
            height={400}
            className="relative z-10  rounded-2xl  w-full min-h-[500px]  "
          />

          {/* Floating badge */}
          <div
            className="absolute -right-4 top-12 z-20 rotate-3 rounded-2xl px-3 py-2 text-center shadow-lg"
            style={{ background: "#2d1f0e", color: "#f0d9b0", minWidth: 80 }}
          >
            <div className="text-[10px] uppercase tracking-widest opacity-70">
              Pure
            </div>
            <div
              className="text-sm font-semibold"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Natural
            </div>
          </div>
        </div>

        {/* Right features */}
        <div className="flex flex-col gap-10">
          {rightFeatures.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              align="right"
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-20 flex items-center justify-center gap-4 opacity-30">
        <div
          className="h-px flex-1"
          style={{
            background: "linear-gradient(90deg, transparent, #c9a96e)",
          }}
        />
        <FloralDot className="h-5 w-5" style={{ color: "#c9a96e" }} />
        <div
          className="h-px flex-1"
          style={{
            background: "linear-gradient(90deg, #c9a96e, transparent)",
          }}
        />
      </div>
    </Section>
  );
}

function FeatureCard({ feature, align, index }) {
  const Icon = feature.icon;
  const isRight = align === "right";

  return (
    <div
      className={`group flex flex-col gap-3 ${
        isRight ? "items-end text-right" : "items-start text-left"
      }`}
    >
      {/* Tag pill */}
      {/* <span
        className="rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
        style={{
          background: `${feature.accent}15`,
          color: feature.accent,
          border: `1px solid ${feature.accent}30`,
          fontFamily: "'Georgia', serif",
        }}
      >
        {feature.tag}
      </span> */}

      {/* Icon + Title row */}
      <div
        className={`flex items-center gap-3 ${
          isRight ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${feature.accent}18`,
            border: `1.5px solid ${feature.accent}30`,
          }}
        >
          <Icon
            className="h-4.5 w-4.5"
            style={{ color: feature.accent }}
            size={18}
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold leading-tight ">{feature.title}</h3>
      {/* Description */}
      <p
        className="lg:max-w-[350px] text-sm leading-relaxed"
        style={{
          color: "#7a5c3a",
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
        }}
      >
        {feature.description}
      </p>

      {/* Decorative underline */}
      <div
        className="h-px w-10 transition-all duration-500 group-hover:w-20"
        style={{
          background: `linear-gradient(90deg, ${feature.accent}, transparent)`,
        }}
      />
    </div>
  );
}
