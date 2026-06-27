"use client";

import {
  Menu,
  ShoppingCart,
  User,
  Home,
  Info,
  Package,
  BookOpen,
  Phone,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Marquee } from "./ui/marquee";
import { useAuth, handleLogout } from "@/providers/auth-provider";
import { useDispatch } from "react-redux";
import { toggleCart } from "@/lib/features/slice";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "@/services/cart-services";

/* ─── Static data ─────────────────────────────────────────────── */
const offers = [
  "Free Shipping On Orders Above Rs1000",
  "100% Natural & Herbal Products",
  "Boost Immunity with Ayurvedic Care",
  "Trusted Ayurvedic Brands Available",
];

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Products", href: "/products", icon: Package },
  { name: "Blogs", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Phone },
];

/* ─── Cart badge ──────────────────────────────────────────────── */
function CartButton({ cartCount, onClick, className = "" }) {
  return (
    <button
      aria-label={`Open shopping cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
      onClick={onClick}
      className={`relative p-2 rounded-full hover:bg-green-50 transition-colors ${className}`}
    >
      <ShoppingCart className="h-5 w-5 text-gray-700" />
      {cartCount > 0 && (
        <span
          aria-hidden="true"
          className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold
                     rounded-full h-4 w-4 flex items-center justify-center"
        >
          {cartCount}
        </span>
      )}
    </button>
  );
}

/* ─── Main component ──────────────────────────────────────────── */
const Navbar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState("");
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { user } = useAuth();

  // Close sheet on route change — setState during render (not in effect) is
  // the React-recommended pattern when deriving state from props/external values.
  // See: https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (sheetOpen) setSheetOpen(false);
  }

  const { data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await getCartItems();
      return data;
    },
    enabled: !!user,
  });

  const cartCount = useMemo(
    () => cartData?.reduce((sum, item) => sum + item.quantity, 0) ?? 0,
    [cartData],
  );

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Offer marquee ── */}
      <div className="w-full bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-900 overflow-hidden">
        <Marquee pauseOnHover speed={45} className="py-2.5">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-8 whitespace-nowrap"
            >
              <span className="text-emerald-300/70 text-base">✦</span>
              <span className="text-white/90 text-[12px] font-medium tracking-[0.06em] uppercase">
                {offer}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* ── Navbar ── */}
      <header role="banner">
        <nav
          aria-label="Main navigation"
          className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm"
        >
          <div className="container mx-auto flex items-center justify-between px-4 lg:px-6 py-3.5">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Go to homepage"
              className="flex items-center hover:scale-105 transition-transform"
            >
              <Image
                src="/logo.png"
                width={200}
                height={200}
                priority
                className="object-contain w-[90px] md:w-[90px] scale-[1.3]"
                alt="Brand logo"
              />
            </Link>

            {/* ── Desktop nav links ── */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm font-semibold group transition-colors
                    ${isActive(item.href) ? "text-green-700" : "text-gray-700 hover:text-green-700"}`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-green-600 transition-all
                      ${isActive(item.href) ? "w-3/4" : "w-0 group-hover:w-3/4"}`}
                  />
                </Link>
              ))}
            </div>

            {/* ── Desktop actions ── */}
            <div className="hidden md:flex items-center gap-3">
              <CartButton
                cartCount={cartCount}
                onClick={() => dispatch(toggleCart())}
              />

              {user ? (
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <button
                      aria-label="User account menu"
                      className="flex items-center justify-center w-10 h-10 rounded-full
                                 bg-gradient-to-br from-green-50 to-emerald-100
                                 border border-green-200 hover:scale-105 transition-all duration-300"
                    >
                      <User size={18} className="text-green-700" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-44 z-[999999]" align="end">
                    <div className="py-2 pl-3">
                      <Link
                        href="/dashboard"
                        className="text-sm font-medium text-gray-700 hover:text-green-700 flex items-center gap-2"
                      >
                        <LayoutDashboard size={14} /> Dashboard
                      </Link>
                    </div>
                    <DropdownMenuSeparator />
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-red-500 py-2 pl-3 text-sm w-full hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href="/login"
                  className="hidden lg:inline-flex items-center gap-2 btn-outline text-sm font-semibold"
                >
                  Login
                </Link>
              )}

              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 text-sm font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* ── Mobile: cart + sheet trigger ── */}
            <div className="flex md:hidden items-center gap-1">
              <CartButton
                cartCount={cartCount}
                onClick={() => dispatch(toggleCart())}
              />

              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                onClick={() => setSheetOpen(true)}
                className="rounded-lg hover:bg-green-50"
              >
                <Menu size={22} className="text-gray-700" />
              </Button>
            </div>
          </div>
        </nav>

        {/* ── shadcn Sheet (mobile drawer) ── */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetContent
            side="right"
            className="w-[80vw] max-w-[320px] p-0 flex flex-col gap-0"
          >
            {/* Sheet header with green bg */}
            <SheetHeader className="bg-gradient-to-r from-emerald-900 to-emerald-700 px-5 py-4 flex-row items-center justify-between space-y-0">
              <SheetTitle asChild>
                <Link href="/" onClick={() => setSheetOpen(false)}>
                  <Image
                    src="/logo.png"
                    width={120}
                    height={120}
                    className="object-contain w-[70px] brightness-0 invert"
                    alt="Brand logo"
                  />
                </Link>
              </SheetTitle>
              {/* SheetContent already renders its own close (X) button */}
            </SheetHeader>

            {/* Nav links */}
            <nav
              aria-label="Mobile navigation"
              className="flex-1 overflow-y-auto py-4 px-3"
            >
              <ul className="space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.href);
                  return (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all
                            ${
                              active
                                ? "bg-green-600 text-white shadow-sm"
                                : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                            }`}
                        >
                          <Icon size={18} strokeWidth={active ? 2.5 : 2} />
                          {link.name}
                          {active && (
                            <span
                              className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70"
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>

              <Separator className="my-4 mx-1" />

              {/* Auth links */}
              <div className="space-y-1">
                {user ? (
                  <>
                    <SheetClose asChild>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all"
                      >
                        <LayoutDashboard size={18} />
                        Dashboard
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-all"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </SheetClose>
                  </>
                ) : (
                  <SheetClose asChild>
                    <Link
                      href="/login"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all border border-gray-200"
                    >
                      <User size={18} />
                      Login / Sign Up
                    </Link>
                  </SheetClose>
                )}
              </div>
            </nav>

            {/* Footer CTA */}
            <div className="px-4 py-5 border-t border-gray-100 bg-gray-50">
              <SheetClose asChild>
                <Link href="/contact">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6 text-sm font-semibold">
                    <Phone size={16} className="mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </SheetClose>
              <p className="text-center text-[11px] text-gray-400 mt-3">
                100% Natural &amp; Herbal Products
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

export default Navbar;
