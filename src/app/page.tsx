import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Truck, Shield, Star, FileText, ScrollText, BookOpen, Image as ImageIcon, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { products, categories, testimonials, partners } from "@/data/products";
import { MitraSection } from "@/components/layout/MitraSection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText, ScrollText, BookOpen, ImageIcon, Layers,
};

export default function HomePage() {
  const featuredProducts = products.slice(0, 5);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#067447] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-secondary/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

        <div className="container-page relative z-10 py-16 sm:py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Marketplace Pesantren #1 Indonesia</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-5 sm:mb-6">
              Kebutuhan Pesantren
              <span className="block text-brand-secondary mt-1">Satu Tempat, Harga Terbaik</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
              Platform pengadaan kertas, buku, alat tulis, dan perlengkapan pendidikan berkualitas untuk pesantren di seluruh Indonesia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 sm:mb-14">
              <Link href="/produk">
                <Button variant="secondary" size="lg" className="text-brand-primary-dark w-full sm:w-auto">
                  <ShoppingBag className="w-5 h-5" />
                  Lihat Katalog Produk
                </Button>
              </Link>
              <Link href="/tentang">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                  Tentang Platform
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: Shield, title: "Partner Terpercaya", desc: "Produk original dari partner resmi" },
                { icon: Truck, title: "Pengiriman Nasional", desc: "Jangkau seluruh Indonesia" },
                { icon: Star, title: "Harga Grosir", desc: "Hemat untuk pesantren" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-secondary shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-xs text-white/60">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories — Compact Grid */}
      <section className="section-padding bg-white">
        <div className="container-page">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
                Kategori Produk
              </h2>
              <p className="text-neutral-500 max-w-2xl text-base leading-relaxed">
                Temukan kebutuhan kertas, buku, dan perlengkapan pendidikan pesantren dari Intan Pariwara.
              </p>
            </div>
            <Link
              href="/produk"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors group/link"
            >
              Lihat semua kategori
              <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || FileText;
              return (
                <Link
                  key={cat.id}
                  href={`/produk?kategori=${cat.slug}`}
                  className="group relative flex flex-col items-center text-center p-4 sm:p-5 bg-white rounded-2xl border border-neutral-200 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/5 transition-all duration-300 overflow-hidden"
                >
                  {/* Quarter-circle decoration */}
                  <div className="absolute -bottom-5 -right-5 w-18 h-18 rounded-tl-[32px] bg-gradient-to-tl from-brand-primary/[0.05] to-transparent group-hover:from-brand-primary/[0.10] transition-colors duration-500" />

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-brand-primary/10 group-hover:to-brand-secondary/10 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-primary group-hover:text-brand-primary-dark transition-colors" />
                  </div>

                  {/* Name */}
                  <h3 className="relative z-10 text-sm sm:text-base font-bold text-neutral-800 mb-1 group-hover:text-brand-primary transition-colors leading-snug">
                    {cat.name}
                  </h3>

                  {/* Product count */}
                  <p className="relative z-10 text-xs text-neutral-400">
                    {cat.count} produk terkait
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Mobile link */}
          <div className="mt-6 text-center md:hidden">
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
            >
              Lihat semua kategori →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products — Premium Clean Cards (grid + card structure fixed) */}
      <section className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(201,162,39,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_90%,rgba(26,127,75,0.04),transparent_40%)]" />

        <div className="container-page relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
                Produk Unggulan
              </h2>
              <p className="text-neutral-500 max-w-2xl text-base leading-relaxed">
                Produk terbaik pilihan pesantren, harga khusus dan kualitas terjamin dari Intan Pariwara.
              </p>
            </div>
            <Link
              href="/produk"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors group/link"
            >
              Lihat semua produk
              <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
          </div>

          {/*
            Layout: flex 2 kolom, bukan grid dengan row-span.
            Featured card (kiri) tingginya mengikuti konten aslinya sendiri —
            TIDAK dipaksa setinggi grid 2x2 di kanan (itu penyebab gap kosong
            yang muncul sebelumnya saat pakai row-span-2 + mt-auto).
          */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
            {/* Featured (1 card, lebar ~42% di desktop) */}
            {(() => {
              const featured = featuredProducts[0];
              return (
                <Link
                  href={`/produk/${featured.id}`}
                  className="group w-full lg:w-[42%] rounded-3xl bg-white border border-neutral-200 overflow-hidden hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 flex flex-col shrink-0"
                >
                  <div className="p-5 sm:p-6 flex flex-col">
                    {/* Foto frame — relative supaya badge menempel dengan benar */}
                    <div className="relative rounded-2xl bg-neutral-50 border border-neutral-200 overflow-hidden">
                      <div className="relative aspect-[4/3] bg-neutral-100">
                        <Image
                          src={featured.images[0]}
                          alt={featured.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />

                        {/* Badge — sekarang di dalam frame yang relative, posisi selalu konsisten */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm">
                            <Star className="w-3 h-3 fill-brand-secondary text-brand-secondary" />
                            Produk Unggulan
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Konten */}
                    <div className="mt-5 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 text-xs font-semibold">
                          {featured.categoryName}
                        </span>

                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(featured.rating)
                                  ? "fill-brand-secondary text-brand-secondary"
                                  : "text-neutral-300"
                              }`}
                            />
                          ))}
                          <span className="text-xs font-medium text-neutral-500 ml-1">
                            ({featured.reviewCount})
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 tracking-tight leading-snug line-clamp-2">
                        {featured.name}
                      </h3>

                      <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-2">
                        {featured.description}
                      </p>

                      <div className="mt-2 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs text-neutral-500">Harga per rim</p>
                          <p className="text-2xl font-bold text-brand-secondary">
                            Rp {featured.price.toLocaleString("id-ID")}
                          </p>
                          {featured.priceGrosir && (
                            <p className="text-xs text-neutral-500 mt-0.5">
                              Grosir mulai Rp {featured.priceGrosir.toLocaleString("id-ID")}
                            </p>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary group-hover:text-brand-primary-dark transition-colors">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-secondary/10 group-hover:bg-brand-secondary/15 transition-colors">
                            →
                          </span>
                          Lihat Detail
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })()}

          {/* Remaining products (4 kartu, seragam, grid 2x2 sendiri di sebelah featured) */}
            <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {featuredProducts.slice(1, 5).map((product) => (
              <Link
                key={product.id}
                href={`/produk/${product.id}`}
                className="group rounded-2xl bg-white border border-neutral-200 overflow-hidden hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 flex flex-col"
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="rounded-2xl bg-neutral-50 border border-neutral-200 overflow-hidden">
                    <div className="relative h-[150px] sm:h-[155px] bg-neutral-100">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, 50vw, 25vw"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 text-[11px] font-semibold">
                        {product.categoryName}
                      </span>

                      <span className="text-sm font-bold text-brand-secondary">
                        Rp {product.price.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-neutral-900 tracking-tight leading-snug line-clamp-2 mb-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? "fill-brand-secondary text-brand-secondary"
                              : "text-neutral-300"
                          }`}
                        />
                      ))}
                      <span className="text-[11px] font-medium text-neutral-500 ml-1">
                        ({product.reviewCount})
                      </span>
                    </div>

                    <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-4">
                      {product.description}
                    </p>

                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary group-hover:text-brand-primary-dark transition-colors">
                        Lihat Detail
                        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>

          {/* Mobile link */}
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
            >
              Lihat semua produk →
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <MitraSection />

      {/* Testimonials */}
      <section className="section-padding bg-neutral-50 overflow-hidden">
        <div className="container-page">
          <div className="text-center mb-10">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-primary shadow-sm mb-4">
              Suara Pesantren
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-3">
              Testimoni Pesantren
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Pendapat langsung dari pengelola pesantren yang telah menggunakan platform kami
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-neutral-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-neutral-50 to-transparent" />
          <div className="testimonial-marquee flex w-max gap-6 px-6">
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={`${t.id}-${index}`}
                className="w-[320px] md:w-[380px] shrink-0 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-neutral-200 text-neutral-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="min-h-[96px] text-neutral-600 text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
                  <div className="w-11 h-11 bg-brand-primary-light rounded-full flex items-center justify-center text-brand-primary font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">{t.name}</p>
                    <p className="text-xs text-neutral-400">
                      {t.role} — {t.pesantren}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes testimonial-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .testimonial-marquee {
            animation: testimonial-scroll 42s linear infinite;
          }

          .testimonial-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Siap Bergabung?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Daftarkan pesantren Anda dan dapatkan akses ke produk berkualitas dengan harga khusus
            pesantren.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/daftar">
              <Button
                variant="secondary"
                size="lg"
              >
                Daftarkan Pesantren
              </Button>
            </Link>
            <Link href="/produk">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary"
              >
                Jelajahi Produk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}