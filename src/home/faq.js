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
    q: "What makes Radhaayu Herbals different from other Ayurvedic brands?",
    a: "Radhaayu Herbals combines traditional Ayurvedic wisdom with carefully selected natural ingredients to create products that support holistic health, wellness, and long-term well-being.",
  },
  {
    q: "Are Radhaayu products made from natural ingredients?",
    a: "Yes. Our formulations are crafted using Ayurvedic herbs, botanical extracts, and traditional ingredients known for their wellness benefits.",
  },
  {
    q: "Do your products contain harmful chemicals or preservatives?",
    a: "We focus on using quality ingredients and traditional Ayurvedic formulations. Product-specific ingredient details are available on each product page.",
  },
  {
    q: "Which health concerns do your products support?",
    a: "Our range is designed to support various wellness needs including digestion, immunity, detoxification, skin care, hair care, joint health, and overall vitality.",
  },
  {
    q: "Are Ayurvedic products safe for daily use?",
    a: "Many Ayurvedic products can be incorporated into a daily wellness routine when used as directed. Always follow the recommended dosage and usage instructions.",
  },
  {
    q: "How long does it take to see results from Ayurvedic products?",
    a: "Ayurveda focuses on restoring balance naturally. Results may vary depending on the individual, health condition, lifestyle, and consistency of use.",
  },
];

const rightFaqs = [
  {
    q: "Can Ayurvedic products be taken alongside modern medicines?",
    a: "In many cases they can be used together, but we recommend consulting a healthcare professional if you are taking prescription medications or undergoing treatment.",
  },
  {
    q: "Are your products suitable for all age groups?",
    a: "Our product range includes formulations suitable for different age groups. Please refer to the product label or consult a healthcare professional before use.",
  },
  {
    q: "How should I store Ayurvedic medicines?",
    a: "Store products in a cool, dry place away from direct sunlight and moisture. Always keep the container tightly closed after use.",
  },
  {
    q: "Do you offer products for preventive wellness as well as specific concerns?",
    a: "Yes. Along with targeted formulations, we also offer products that help support overall wellness, immunity, digestion, and healthy living.",
  },
  {
    q: "How do I choose the right product for my health concern?",
    a: "You can explore products by category and wellness concern. Product descriptions provide detailed information to help you make an informed choice.",
  },
  {
    q: "Where can I purchase Radhaayu Herbals products?",
    a: "You can conveniently order our products directly through our website and have them delivered to your doorstep.",
  },
];

export default function FAQ() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        title="Frequently Asked "
        des="Find answers to the most common questions about our Ayurvedic products, ingredients, usage, and wellness approach."
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
