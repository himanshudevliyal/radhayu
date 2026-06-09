import Breadcrumb from "@/components/breadcrumb";
import ContactForm from "@/components/form/contact-us";
import { SectionHeading } from "@/components/layout/heading";
import Section from "@/components/layout/section";
import FAQ from "@/home/faq";
import { Phone, Mail, MapPin, Clock, GlobeXIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Breadcrumb current="Contact" bgImage="/img/why-choose.webp" />

      <Section>
        <SectionHeading
          badge="Contact us"
          title={"Contact "}
          des=" At Viwana, we embrace authentic Ayurveda to nurture holistic
                  wellness, empowering you to find balance and rejuvenation in life."
          highlight="us"
          className="  text-center"
          titleClassName="text-4xl text-center"
        />

        <div className=" grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-green-900 text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a
                      href="tel:+919711975094"
                      className="text-green-100 hover:text-white transition-colors"
                    >
                      +91 97119 75094
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a
                      href="mailto:radhayuherbals@gmail.com"
                      className="text-green-100 hover:text-white transition-colors"
                    >
                      radhayuherbals@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-green-100">
                      DPT 808B, F79 & 80, DLF Prime Tower, Industrial Area,
                      Okhla Phase-1, New Delhi - 110020
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <GlobeXIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Website</h3>
                    <a
                      href="https://radhayuherbals.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-100 hover:text-white transition-colors"
                    >
                      www.radhayuherbals.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION (FORM) */}
          <div className="bg-green-50 p-10">
            <ContactForm />
          </div>
        </div>
      </Section>

      <div className="bg-gray-50">
        <FAQ />
      </div>
    </>
  );
}
