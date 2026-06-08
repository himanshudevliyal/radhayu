"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Send, Leaf, Sprout, Heart } from "lucide-react";

const services = [
  "Herbal Supplements",
  "Immunity Boosters",
  "Ayurvedic Consultation",
  "Natural Skincare",
  "Detox Programs",
  "Wellness Packages",
];

const quickLinks = [
  "About Us",
  "Our Team",
  "Testimonials",
  "Latest Articles",
  "Refund Policy",
  "Contact Us",
];

function NavLink({ children }) {
  return (
    <a
      href="#"
      className="group flex items-center gap-2.5 py-2 border-b border-white/5 last:border-0 no-underline transition-all duration-200"
    >
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 text-[10px] text-white/40 group-hover:bg-emerald-400/20 group-hover:text-emerald-300 transition-all duration-200 shrink-0 leading-none">
        ›
      </span>
      <span className="text-[13px] text-white/50 group-hover:text-emerald-300 transition-colors duration-200 tracking-wide">
        {children}
      </span>
    </a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#071f17] via-[#0b3b2e] to-[#0d4a38] text-white">
      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Decorative bg leaf — top right */}
      <svg
        className="absolute -top-14 -right-10 w-80 opacity-[0.04] pointer-events-none"
        viewBox="0 0 200 200"
      >
        <ellipse
          cx="100"
          cy="100"
          rx="90"
          ry="45"
          fill="white"
          transform="rotate(-30 100 100)"
        />
        <line
          x1="20"
          y1="115"
          x2="180"
          y2="85"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      {/* Decorative bg leaf — bottom left */}
      <svg
        className="absolute -bottom-8 -left-14 w-64 opacity-[0.04] pointer-events-none"
        viewBox="0 0 200 200"
      >
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="40"
          fill="white"
          transform="rotate(20 100 100)"
        />
        <line
          x1="30"
          y1="108"
          x2="170"
          y2="92"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] gap-x-8 gap-y-12 items-start">
          {/* ── COL 1: Brand ── */}
          <div>
            {/* Organic badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10.5px] font-medium tracking-widest text-emerald-300 uppercase mb-5">
              <Sprout size={11} />
              100% Natural · Organic
            </span>

            {/* Logo row — swap inner div for <Image> if you have a logo file */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 shadow-lg shadow-emerald-900/40">
                <Leaf size={20} color="white" />
              </div>
              <span className="font-serif text-[26px] font-bold tracking-wide leading-none">
                Ayugroww
              </span>
            </div>

            <p className="mb-5 font-serif italic text-[13px] tracking-wider text-emerald-300/60">
              Nature&#39;s wisdom, modern wellness.
            </p>

            <p className="max-w-[240px] text-[13px] leading-relaxed text-white/45">
              Crafting Ayurvedic solutions with 100% herbal ingredients for
              holistic wellness, immunity, and lasting vitality.
            </p>

            {/* Email pill */}
            <a
              href="mailto:info@ayugroww.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12.5px] text-white/65 no-underline transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/15 hover:text-emerald-300"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              info@ayugroww.com
            </a>
          </div>

          {/* ── DIVIDER ── */}
          <div className="hidden lg:block self-stretch w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* ── COL 2: Services ── */}
          <div>
            <p className="mb-1.5 text-[10px] font-medium tracking-[0.2em] text-emerald-500 uppercase">
              Offerings
            </p>
            <h3 className="mb-4 font-serif text-[22px] font-semibold tracking-wide">
              Our Services
            </h3>
            <div className="mb-5 h-0.5 w-7 rounded-full bg-gradient-to-r from-emerald-500 to-transparent" />
            <nav className="flex flex-col">
              {services.map((item) => (
                <NavLink key={item}>{item}</NavLink>
              ))}
            </nav>
          </div>

          {/* ── DIVIDER ── */}
          <div className="hidden lg:block self-stretch w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* ── COL 3: Quick Links ── */}
          <div>
            <p className="mb-1.5 text-[10px] font-medium tracking-[0.2em] text-emerald-500 uppercase">
              Navigate
            </p>
            <h3 className="mb-4 font-serif text-[22px] font-semibold tracking-wide">
              Quick Links
            </h3>
            <div className="mb-5 h-0.5 w-7 rounded-full bg-gradient-to-r from-emerald-500 to-transparent" />
            <nav className="flex flex-col">
              {quickLinks.map((item) => (
                <NavLink key={item}>{item}</NavLink>
              ))}
            </nav>
          </div>

          {/* ── DIVIDER ── */}
          <div className="hidden lg:block self-stretch w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* ── COL 4: Newsletter ── */}
          <div>
            <p className="mb-1.5 text-[10px] font-medium tracking-[0.2em] text-emerald-500 uppercase">
              Stay Connected
            </p>
            <h3 className="mb-4 font-serif text-[22px] font-semibold tracking-wide">
              Get Updates
            </h3>
            <div className="mb-5 h-0.5 w-7 rounded-full bg-gradient-to-r from-emerald-500 to-transparent" />

            <p className="mb-5 text-[13px] leading-relaxed text-white/45">
              Subscribe for Ayurvedic health tips, seasonal wellness guides, and
              exclusive offers.
            </p>

            {/* Email input row */}
            <div className="flex overflow-hidden rounded-xl border border-white/[0.13] bg-white/[0.04] backdrop-blur-sm transition-all duration-300 focus-within:border-emerald-400/50 focus-within:bg-white/[0.07]">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="flex-1 bg-transparent px-4 py-3 text-[13px] text-white placeholder:text-white/30 outline-none border-none"
              />
              <button
                onClick={handleSubscribe}
                className="flex items-center gap-1.5 bg-gradient-to-br from-emerald-400 to-emerald-600 px-4 py-3 text-[11.5px] font-medium tracking-widest text-white uppercase transition-all duration-200 hover:from-emerald-300 hover:to-emerald-500 active:scale-95"
              >
                <Send size={12} />
                Join
              </button>
            </div>

            {/* Success state */}
            {subscribed && (
              <div className="mt-3 flex animate-pulse items-center gap-2 text-[13px] text-emerald-300">
                <Heart size={12} fill="currentColor" />
                Thank you for subscribing!
              </div>
            )}

            {/* Trust notes */}
            <div className="mt-6 flex flex-col gap-2.5">
              {[
                { icon: "🌿", text: "No spam, ever. Unsubscribe anytime." },
                { icon: "✦", text: "Weekly Ayurvedic wellness insights" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-[11.5px] text-white/30"
                >
                  <span className="text-[11px]">{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mid divider with leaf motif ── */}
        <div className="mt-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <Leaf size={14} className="text-emerald-500/50" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-5">
          <p className="flex items-center gap-1 text-[12px] tracking-wide text-white/30">
            © 2026 Ayugroww. All rights reserved. Made with
            <Heart
              size={10}
              className="mx-0.5 inline text-emerald-400"
              fill="currentColor"
            />
            for holistic wellness.
          </p>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11.5px] text-white/25 no-underline transition-colors duration-200 hover:text-white/55"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
