"use client";

import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "./ui/marquee";
import { useAuth, handleLogout } from "@/providers/auth-provider";
import { useDispatch } from "react-redux";
import { toggleCart } from "@/lib/features/slice";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "@/services/cart-services";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const offers = [
  "Free Shipping On Orders Above Rs1000",
  "100% Natural & Herbal Products",
  "Boost Immunity with Ayurvedic Care",
  "Trusted Ayurvedic Brands Available",
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const dispatch = useDispatch();
  const { user } = useAuth();

  const { data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await getCartItems();
      return data;
    },
    enabled: !!user,
  });

  const cartCount = useMemo(() => {
    return cartData?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;
  }, [cartData]);

  return (
    <>
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

      {/* Main Navbar */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-6 py-3.5">
          {/* Logo */}
          <div className="flex items-center hover:scale-105 transition">
            <Link href="/">
              <Image
                width={200}
                height={200}
                src="/logo.png"
                className="object-contain w-[100px] md:w-[70px] scale-[1.3] "
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((items, index) => (
              <Link
                key={index}
                href={items.href}
                className="relative px-4 py-2 text-gray-700 hover:text-green-700 text-sm font-semibold group"
              >
                {items.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-green-600 transition-all group-hover:w-3/4"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => dispatch(toggleCart())}
              className="relative hover:bg-green-50 rounded-full"
            >
              <ShoppingCart className="h-5 w-5 text-gray-700" />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Auth */}
            {user ? (
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <div
                    className="relative flex items-center justify-center w-11 h-11 rounded-full 
bg-gradient-to-br from-primary/10 to-secondary/10 
border border-primary/20 
hover:scale-105 transition-all duration-300"
                  >
                    <User size={20} className="text-primary" />
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-40  z-[999999]" align="end">
                  <div className="py-2 pl-2">
                    <Link href="/dashboard">Dashboard</Link>
                  </div>
                  <DropdownMenuSeparator />
                  <button
                    onClick={handleLogout}
                    className="flex items-center  gap-1 text-red-500 py-2 pl-2"
                  >
                    Logout
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <div className="hidden lg:flex">
                  <Link
                    href="/login"
                    className=" !mt-0  gap-2  items-center  !lg:flex btn-outline"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}

            {/* Contact */}
            <Link href="/contact">
              <Button className="bg-green-600 text-white rounded-full px-6">
                Contact us
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 hover:bg-green-50 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t transition-all duration-300 ${
            mobileOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-gray-700 hover:text-green-700 text-sm font-semibold group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-green-600 transition-all group-hover:w-3/4"></span>
            </Link>
          ))}

          {/* Mobile Actions */}
          <div className="px-4 pb-4 pt-2 space-y-3 border-t">
            {/* Cart */}
            <Button
              onClick={() => {
                dispatch(toggleCart());
                setMobileOpen(false);
              }}
              variant="outline"
              className="w-full justify-start gap-3 py-6"
            >
              <ShoppingCart className="h-5 w-5" />
              Cart
              {cartCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Auth */}

            {!user && (
              <Link
                href="/login"
                onClick={() => setOpenMenu(false)}
                className="btn-outline  flex gap-2 items-center"
              >
                Login
              </Link>
            )}

            {/* Contact */}
            <Link href="/contact">
              <Button className="w-full bg-green-600 text-white py-6">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
