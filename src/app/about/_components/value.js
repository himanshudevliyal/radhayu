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
      "To create a sustainable and empowered community through awareness and collective action.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Our Mission",
    description:
      "To actively engage people in meaningful initiatives that improve society and the environment.",
    icon: Target,
  },
  {
    number: "03",
    title: "Our Values",
    description:
      "Integrity, collaboration, compassion, and commitment drive everything we do.",
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
          badge="values"
          title={"Healing and Wellness"}
          des=" At Viwana, we embrace authentic Ayurveda to nurture holistic
                wellness, empowering you to find balance and rejuvenation in life."
          highlight="for you!"
          className=" text-center"
          titleClassName="text-4xl"
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
