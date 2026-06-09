"use client";

import { Leaf, BookOpen, ShieldCheck, Heart } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Leaf,
      value: "100% Natural",
      label: "Premium Ayurvedic Formulations",
    },
    {
      icon: BookOpen,
      value: "Traditional Wisdom",
      label: "Inspired by Authentic Ayurveda",
    },
    {
      icon: ShieldCheck,
      value: "Quality Assured",
      label: "Manufactured with Care",
    },
    {
      icon: Heart,
      value: "Holistic Wellness",
      label: "Supporting Everyday Health",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
            Rooted in Ayurveda, Trusted for Wellness
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed">
            For generations, Ayurveda has guided people towards healthier and
            more balanced living. At Radhayu Herbals, we combine traditional
            Ayurvedic wisdom with carefully selected natural ingredients to
            create wellness solutions that support your everyday health journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 rounded-lg">
                <stat.icon className="w-5 h-5 text-white" />
              </div>

              <div>
                <div className="text-lg md:text-xl font-bold text-primary font-heading">
                  {stat.value}
                </div>

                <p className="text-muted-foreground text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
