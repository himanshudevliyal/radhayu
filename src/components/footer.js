"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, Heart, Leaf, Phone, Mail, MapPin } from "lucide-react";

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
    name: "Others",
    slug: "/products",
  },
];

const quickLinks = [
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2 py-2 border-b border-white/5 last:border-0 transition-all duration-200"
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-[10px] text-white/40 group-hover:bg-emerald-500/20 group-hover:text-emerald-300">
        ›
      </span>

      <span className="text-[13px] text-white/50 group-hover:text-emerald-300">
        {children}
      </span>
    </a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#071f17] via-[#0b3b2e] to-[#0d4a38] text-white">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10">
          {/* Company */}
          <div className="col-span-2">
            <Image
              src="/logo.png"
              alt="Radhayu Herbals"
              width={220}
              height={100}
              className="mb-4"
            />

            <p className="text-white/50 text-sm leading-relaxed">
              For generations, Ayurveda has guided people towards healthier and
              more balanced living. At Radhayu Herbals, we combine traditional
              Ayurvedic wisdom with carefully selected natural ingredients to
              create wellness solutions that support your everyday health
              journey.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Products</h3>

            <div className="w-8 h-0.5 bg-emerald-500 mb-5"></div>

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
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>

            <div className="w-8 h-0.5 bg-emerald-500 mb-5"></div>

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
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>

            <div className="w-8 h-0.5 bg-emerald-500 mb-5"></div>

            <div className="space-y-5 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="text-emerald-400 mt-1 shrink-0" />
                <p className="text-white/60 leading-relaxed">
                  DPT 808B, F79 & 80, DLF Prime Tower, Industrial Area, Okhla
                  Phase-1, New Delhi - 110020
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-emerald-400 shrink-0" />

                <a
                  href="tel:+919711975094"
                  className="text-white/60 hover:text-emerald-300"
                >
                  +91 97119 75094
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-emerald-400 shrink-0" />

                <a
                  href="mailto:radhayuherbals@gmail.com"
                  className="text-white/60 hover:text-emerald-300"
                >
                  radhayuherbals@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"></div>
          <Leaf size={16} className="text-emerald-500" />
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Radhayu Herbals. All Rights Reserved.
          </p>

          <p className="text-xs text-white/40">
            Designed & Developed by{" "}
            <a
              href="https://brandingwaale.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Branding Waale
            </a>
          </p>

          <div className="flex gap-5">
            <a
              href="/privacy-policy"
              className="text-xs text-white/40 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-and-conditions"
              className="text-xs text-white/40 hover:text-white"
            >
              Terms & Conditions
            </a>

            <a
              href="/sitemap.xml"
              className="text-xs text-white/40 hover:text-white"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
