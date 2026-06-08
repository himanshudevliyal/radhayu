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
              title={"Sanctuary for Ayurvedic Healing and Wellness"}
              des=" At Viwana, we embrace authentic Ayurveda to nurture holistic
            wellness, empowering you to find balance and rejuvenation in life."
              highlight="for you!"
              className=" text-left"
              titleClassName="text-4xl"
            />

            {/* FEATURES */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-green-700 text-green-700">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Ayurvedic Expertise
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-green-700 text-green-700">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Ayurvedic Expertise
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
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
