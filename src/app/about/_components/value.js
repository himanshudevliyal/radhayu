import { SectionHeading } from "@/components/layout/heading";
import Section from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, HeartHandshake } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    number: "01",
    title: "Our Vision",
    description:
      "To make authentic Ayurvedic wellness accessible to every household by promoting natural, holistic, and sustainable approaches to health and well-being.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Our Mission",
    description:
      "To develop trusted Ayurvedic formulations using carefully selected herbal ingredients that support everyday wellness, vitality, and long-term health naturally.",
    icon: Target,
  },
  {
    number: "03",
    title: "Our Values",
    description:
      "Guided by purity, authenticity, quality, and customer trust, we remain committed to delivering wellness solutions inspired by the timeless principles of Ayurveda.",
    icon: HeartHandshake,
  },
];

export default function VisionSection() {
  return (
    <Section className="  relative">
      <Image
        src="/img/bg-3.jpg"
        alt="Leaf Background"
        width={300}
        height={500}
        className="absolute right-0  h-full w-full bottom-0 opacity-70 pointer-events-none  "
      />
      <div className="   relative z-10">
        <SectionHeading
          badge="About Radhaayu"
          title="Rooted in Ayurveda, "
          highlight="Committed to Wellness"
          des={
            <>
              At Radhaayu Herbals, we combine the wisdom of traditional Ayurveda
              with a commitment to quality and natural healing, helping
              individuals embrace a healthier and more balanced lifestyle.
            </>
          }
          desClassName="text-balance"
          className="text-4xl"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="group relative p-8 shadow-none bg-[#E9EEEB]"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 to-emerald-100/0 group-hover:from-green-100/50 group-hover:to-emerald-100/30 transition-all duration-500"></div>

                <CardContent className="relative p-0 space-y-6">
                  {/* Number and Icon Row */}
                  <div className="flex items-start justify-between">
                    <div className="bg-green-600/10 group-hover:bg-green-600/20 p-3 rounded-2xl transition-all duration-300 group-hover:scale-110">
                      <Icon
                        className="w-6 h-6 text-green-600"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    {card.description}
                  </p>

                  {/* Bottom decorative line */}
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-700 ease-out"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
