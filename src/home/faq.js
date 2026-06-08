"use client";

import { SectionHeading } from "@/components/layout/heading";
import Section from "@/components/layout/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
// import Heading from "@/components/ui/heading";

const leftFaqs = [
  {
    q: "Are your Ayurvedic medicines made from natural ingredients?",
    a: "Yes, all our Ayurvedic medicines are prepared using natural herbs, roots, and plant-based ingredients as per traditional Ayurvedic principles.",
  },
  {
    q: "Do your Ayurvedic products have any side effects?",
    a: "Ayurvedic medicines are generally safe when taken as recommended. However, we advise consulting an Ayurvedic practitioner for personalized guidance.",
  },
  {
    q: "Can Ayurvedic medicines be taken daily?",
    a: "Yes, many Ayurvedic medicines and supplements are designed for daily use, but dosage depends on body type (Prakriti) and health condition.",
  },
  {
    q: "Are your medicines free from chemicals and preservatives?",
    a: "Yes, our Ayurvedic products are free from harmful chemicals, artificial colors, and preservatives, ensuring purity and authenticity.",
  },
  {
    q: "Do you offer medicines for immunity and general wellness?",
    a: "Yes, we offer a wide range of Ayurvedic medicines that support immunity, digestion, stress relief, and overall wellness.",
  },
];

const rightFaqs = [
  {
    q: "Can Ayurvedic medicines be taken along with allopathic medicines?",
    a: "In many cases, yes. However, it is best to consult a doctor or Ayurvedic expert to avoid any possible interactions.",
  },
  {
    q: "How long does it take for Ayurvedic medicines to show results?",
    a: "Ayurveda works holistically, so results may take time depending on the condition, lifestyle, and regularity of usage.",
  },
  {
    q: "Do you provide consultation before suggesting medicines?",
    a: "Yes, we can guide you based on your health concern and recommend suitable Ayurvedic solutions.",
  },
  {
    q: "Are your Ayurvedic medicines suitable for all age groups?",
    a: "Most medicines are suitable for adults. For children and elderly individuals, specific formulations and dosages are recommended.",
  },
  {
    q: "How should Ayurvedic medicines be stored?",
    a: "They should be stored in a cool, dry place away from direct sunlight to maintain potency and effectiveness.",
  },
];

export default function FAQ() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="faq"
        title={"Frequently Asked "}
        des="We believe in building lasting relationships with our patients, offering not just medications, but comprehensive health support that helps you live your best life."
        highlight="Questions"
        className="mb-14 md:text-xl text-center"
        titleClassName="text-4xl"
      />
      {/* HEADING */}
      {/* <Heading
          title="Bhaji Box & Sweets Questions"
          subtitle="Everything you need to know before ordering"
          wrapperClass="pb-12"
          subtitleClass="text-gray-700"
          className="text-center"
        /> */}

      {/* FAQ GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT FAQs */}
        <Accordion type="single" collapsible className="w-full space-y-2">
          {leftFaqs.map((item, i) => (
            <AccordionItem key={i} value={`left-${i}`}>
              <AccordionTrigger className="text-left text-xl font-semibold  font-font-heading">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* RIGHT FAQs */}
        <Accordion type="single" collapsible className="w-full space-y-2">
          {rightFaqs.map((item, i) => (
            <AccordionItem key={i} value={`right-${i}`}>
              <AccordionTrigger className="text-left text-xl font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
