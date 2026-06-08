import { SectionHeading } from "@/components/layout/heading";
import Section from "@/components/layout/section";
import { HandCoins, Globe, Home, Settings } from "lucide-react";

export default function EnergySection() {
  return (
    <Section className="bg-[#FBF7EC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left Content */}
          <div>
            <SectionHeading
              title={" Energize Society With Sustainable And"}
              des=" At Viwana, we embrace authentic Ayurveda to nurture holistic
                        wellness, empowering you to find balance and rejuvenation in life."
              highlight=" Reliable Energy Systems!"
              className=" text-left"
              badge={" Making Tomorrow Different Today."}
              titleClassName="text-4xl"
            />

            <p className="mt-6 text-gray-600 leading-relaxed">
              In recent years, new capacity across the solar value chain has
              become necessary to support the PV market’s growth. However, the
              capital required to establish and scale-up wafer, solar cell and
              solar module manufacturing facilities is considerable.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Together, these factors pose a serious challenge to sustainable
              operation and growth of global solar manufacturers.
            </p>
          </div>

          {/* Right Features */}
          <div className="grid sm:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/70 text-white">
                <HandCoins size={28} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Save Your Money
              </h3>
              <p className="mt-2 text-gray-600">
                Save money on utilities or increase the value of your home by
                installing solar.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full  text-white bg-primary/70">
                <Globe size={28} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                5 Stars Customer Service
              </h3>
              <p className="mt-2 text-gray-600">
                Understand that we must go above our customer expectations
                during each interaction always.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full text-white bg-primary/70">
                <Home size={28} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Your Home Is Energy
              </h3>
              <p className="mt-2 text-gray-600">
                Everyday the sun provides us with abundance of free energy by
                placing solar panels on your roof.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full text-white bg-primary/70">
                <Settings size={28} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Consult & Planning
              </h3>
              <p className="mt-2 text-gray-600">
                Our remote industrial solar systems are designed to reliably
                power our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
