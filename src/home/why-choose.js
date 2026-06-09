"use client";

import { SectionHeading } from "@/components/layout/heading";
import Section from "@/components/layout/section";
import {
  Leaf,
  ScrollText,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";

export default function AyurvedicSection() {
  const features = [
    {
      icon: Leaf,
      title: "Pure Herbal Ingredients",
      description:
        "Formulated using carefully selected herbs and plant-based ingredients inspired by Ayurvedic traditions.",
    },
    {
      icon: ScrollText,
      title: "Authentic Ayurvedic Wisdom",
      description:
        "Rooted in time-tested Ayurvedic principles and traditional formulations trusted for generations.",
    },
    {
      icon: HeartPulse,
      title: "Holistic Wellness",
      description:
        "Designed to support overall well-being by promoting balance of body, mind, and lifestyle.",
    },
    {
      icon: Stethoscope,
      title: "Expert Formulations",
      description:
        "Developed with attention to traditional knowledge and modern quality standards.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      description:
        "Manufactured in certified facilities with strict quality checks at every stage.",
    },
    {
      icon: FlaskConical,
      title: "Modern Ayurvedic Excellence",
      description:
        "Combining ancient herbal wisdom with contemporary manufacturing practices.",
    },
  ];

  return (
    <Section className="bg-[url('/img/bg-4.jpg')] bg-cover bg-center bg-no-repeat  relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="contanier max-w-7xl  mx-auto px-4  relative z-5">
        {/* Features Grid */}

        <SectionHeading
          badge="Ayurveda"
          title={"Elevating the Power of  "}
          des={<>Crafted with purity, tradition, and holistic care</>}
          highlight=" Ayurveda "
          className="mb-14 md:text-xl text-center"
          titleClassName="text-4xl  text-white"
          desClassName="text-white"
        />
        <div className="grid lg:grid-cols-3 border border-white/20 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
    flex flex-col justify-centen items-center gap-4
    p-8 text-center
    border-r border-b border-white/20
    hover:bg-white/5
    transition-all duration-300
  "
              >
                <div className="shrink-0">
                  <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="mb-2 text-md font-semibold uppercase tracking-wide  text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-white/80">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
