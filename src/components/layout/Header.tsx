"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, Menu, X, User, Heart, PackageCheck, School, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { useCart } from "@/context/CartContext";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { totalItems } = useCart();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/produk?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      {/* Top banner */}
      <div className="bg-brand-primary text-white text-xs sm:text-sm text-center py-1.5 px-4">
        Marketplace Pondok Pesantren Se-Indonesia
      </div>

      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-brand-primary flex items-center justify-center text-white shadow-sm">
              <School className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-neutral-800 text-sm leading-tight">Toko Ponpes</p>
              <p className="text-xs text-neutral-400 leading-tight">Pondok Pesantren</p>
            </div>
          </Link>

          {/* Search bar - desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kertas, buku, karton…"
                className="w-full pl-9 pr-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
              />
            </div>
          </form>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-brand-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/pesanan/TRX-2407-001"
              className="hidden md:inline-flex p-2 text-neutral-600 hover:text-brand-primary transition-colors"
              aria-label="Lacak pesanan"
            >
              <PackageCheck className="w-5 h-5" />
            </Link>

            <Link
              href="/produk?favorit=1"
              className="hidden md:inline-flex p-2 text-neutral-600 hover:text-brand-primary transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link
              href="/keranjang"
              className="relative p-2 text-neutral-600 hover:text-brand-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-secondary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Auth */}
            <Link
              href="/masuk"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-brand-primary text-white text-sm font-medium rounded-lg hover:bg-brand-primary-dark transition-colors"
            >
              <User className="w-4 h-4" />
              Masuk
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-neutral-600 hover:text-brand-primary"
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
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex md:hidden mb-3">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari produk…"
                  className="w-full pl-9 pr-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary"
                />
              </div>
            </form>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 px-2 text-sm text-neutral-600 hover:text-brand-primary hover:bg-brand-primary-light/50 rounded-md transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-neutral-100 mt-2">
              <Link
                href="/masuk"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-2.5 bg-brand-primary text-white text-sm font-medium rounded-lg"
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
