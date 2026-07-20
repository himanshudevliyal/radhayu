import { SectionHeading } from "@/components/layout/heading";
import Section from "@/components/layout/section";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <Section className="bg-[#FBF7EC]  relative overflow-hidden">
        <Image
          src="/img/bg-leaf1.png"
          alt="Leaf Background"
          width={300}
          height={500}
          className="absolute right-0  bottom-0 opacity-40 pointer-events-none    rotate-90"
        />

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <Image
                src="/img/ayurvedic-herbal2.webp"
                alt="Ayurvedic Massage"
                width={300}
                height={350}
                className="rounded-xl h-70 object-cover"
              />
              <Image
                src="/img/images-Ayurveda-Treatment.jpg"
                alt="Ayurvedic Oils"
                width={300}
                height={250}
                className="rounded-xl h-70 object-cover"
              />
            </div>

            <div className="flex items-center">
              <Image
                src="/img/ayurvedic-herbal1.webp"
                alt="Spa Therapy"
                width={320}
                height={480}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <SectionHeading
              badge="About Us"
              title="Ancient Ayurvedic Wisdom for Modern Well-Being"
              des="At Radhaayu Herbals, we believe that true wellness begins with nature. Inspired by the timeless principles of Ayurveda, our formulations are carefully crafted using trusted herbs and traditional knowledge to support holistic health and everyday well-being. From digestive care and detoxification to immunity, vitality, and wellness support, our mission is to help individuals embrace a healthier and more balanced lifestyle through natural Ayurvedic solutions."
              className="text-left"
              titleClassName="text-4xl"
            />

            {/* FEATURES */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary  shrink-0">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Authentic Ayurvedic Formulations
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Every product is developed using time-tested Ayurvedic
                    ingredients selected for their purity, effectiveness, and
                    traditional wellness benefits.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-full border border-primary text-primary">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Nature-Powered Wellness
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We focus on herbal ingredients and holistic healing
                    approaches that work in harmony with the body&lsquo;s
                    natural balance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex items-center shrink-0 justify-center w-7 h-7 rounded-full border border-primary text-primary">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Quality You Can Trust
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our commitment to quality ensures that every formulation is
                    prepared with carefully sourced ingredients and strict
                    manufacturing standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex items-center shrink-0 justify-center w-7 h-7 rounded-full border border-primary text-primary">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Supporting Everyday Health
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Whether it&lsquo;s digestion, detoxification, immunity, or
                    general wellness, our products are designed to become a part
                    of your daily health journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
