"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { useCart } from "@/context/CartContext";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      {/* Top banner */}
      <div className="bg-nu-primary text-white text-xs sm:text-sm text-center py-1.5 px-4">
        🕌 Marketplace Resmi NU untuk Pondok Pesantren
      </div>

      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/nahdlatululama.png"
                alt="Logo Nahdlatul Ulama"
                fill
                className="object-contain p-1"
                sizes="36px"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-neutral-800 text-sm leading-tight">Marketplace NU</p>
              <p className="text-xs text-neutral-400 leading-tight">Pondok Pesantren</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-nu-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <Link
              href="/keranjang"
              className="relative p-2 text-neutral-600 hover:text-nu-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-nu-secondary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Auth */}
            <Link
              href="/masuk"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-nu-primary text-white text-sm font-medium rounded-lg hover:bg-nu-primary-dark transition-colors"
            >
              <User className="w-4 h-4" />
              Masuk
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-neutral-600 hover:text-nu-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-neutral-100 pt-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 px-2 text-sm text-neutral-600 hover:text-nu-primary hover:bg-nu-primary-light/50 rounded-md transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-neutral-100 mt-2">
              <Link
                href="/masuk"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-2.5 bg-nu-primary text-white text-sm font-medium rounded-lg"
              >
                Masuk / Daftar
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
