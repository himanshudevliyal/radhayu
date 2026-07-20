"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, Leaf, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Radhayu Herbals Piles Taila",
    slug: "/products/radhayu-herbals-piles-taila",
  },
  {
    name: "Radhayu Herbals Piles Care Capsule",
    slug: "/products/radhayu-herbals-piles-care-capsule",
  },
  {
    name: "Radhayu Herbals Swadisht Virechan Churna",
    slug: "/products/radhayu-herbals-swadisht-virechan-churna",
  },
  {
    name: "Radhayu Herbals Avipattikar Churna",
    slug: "/products/radhayu-herbals-avipattikar-churna",
  },
  {
    name: "Others Products",
    slug: "/products",
  },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Shipping Policy", href: "/shipping-policy" },
  {
    name: "Return, Refund & Exchange",
    href: "/return-refund-and-exchange-policy",
  },
  { name: "Cancellation Policy", href: "/cancellation-policy" },
  { name: "Medical Disclaimer", href: "/medical-disclaimer" },
  // { name: "Sitemap", href: "/sitemap.xml" },
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2 py-2 border-b border-white/5 last:border-0"
    >
      <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/5 text-[10px] text-white/40 transition-colors group-hover:bg-emerald-500/20 group-hover:text-emerald-300">
        ›
      </span>
      <span className="text-[13px] text-white/50 transition-colors group-hover:text-emerald-300">
        {children}
      </span>
    </a>
  );
}

function FooterHeading({ children }) {
  return (
    <div className="mb-5">
      <h3 className="text-lg font-semibold text-white">{children}</h3>
      <div className="mt-3 h-0.5 w-8 bg-emerald-500" />
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#071f17] via-[#0b3b2e] to-[#0d4a38] text-white">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Company */}
          <div>
            <Image
              src="/footer-logo.png"
              alt="Radhayu Herbals"
              width={200}
              height={90}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed text-white/50">
              For generations, Ayurveda has guided people towards healthier and
              more balanced living. At Radhayu Herbals, we combine traditional
              Ayurvedic wisdom with carefully selected natural ingredients to
              create wellness solutions that support your everyday health
              journey.
            </p>
          </div>

          {/* Products */}
          <div>
            <FooterHeading>Products</FooterHeading>
            <nav>
              {products.map((product) => (
                <FooterLink key={product.slug} href={product.slug}>
                  {product.name}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <nav>
              {quickLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <div className="space-y-5 text-sm">
              <div className="flex gap-3">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-500/10">
                  <MapPin size={16} className="text-emerald-400" />
                </span>
                <p className="pt-1.5 leading-relaxed text-white/60">
                  DPT 808B, F79 & 80, DLF Prime Tower, Industrial Area, Okhla
                  Phase-1, New Delhi - 110020
                </p>
              </div>

              <a
                href="tel:+919711975094"
                className="group flex items-center gap-3"
              >
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-500/10">
                  <Phone size={16} className="text-emerald-400" />
                </span>
                <span className="text-white/60 transition-colors group-hover:text-emerald-300">
                  +91 97119 75094
                </span>
              </a>

              <a
                href="mailto:radhayuherbals@gmail.com"
                className="group flex items-center gap-3"
              >
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-500/10">
                  <Mail size={16} className="text-emerald-400" />
                </span>
                <span className="text-white/60 transition-colors group-hover:text-emerald-300">
                  radhayuherbals@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <Leaf size={16} className="text-emerald-500" />
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-6 text-center">
          {legalLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-white/40 transition-colors hover:text-emerald-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Radhayu Herbals. All Rights Reserved.
            Designed & Developed by{" "}
            <a
              href="https://brandingwaale.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 transition-colors hover:text-emerald-300"
            >
              Brandingwaale Webtech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
