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
        <div className="absolute inset-0 bg-[url('/patterns/green-dot.svg')] opacity-10" />
        <div className="container-page relative z-10 pt-16 pb-8 md:pt-24 md:pb-10 lg:pt-32 lg:pb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Logo Column */}
            <div className="flex-shrink-0 flex justify-center items-center w-full lg:w-[40%]">
              <div className="relative">
                <Image
                  src="/logonukuning.jpg"
                  alt="Logo NU"
                  width={500}
                  height={500}
                  priority
                  className="relative animate-float w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-fade-in-up"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="flex-1 w-full lg:w-[60%]">
              <div className="animate-fade-in-up-delay">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Marketplace Resmi{" "}
                  <span className="text-nu-secondary">NU</span> untuk{" "}
                  <span className="block text-nu-secondary">Pondok Pesantren</span>
                </h1>
                <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
                  Platform pengadaan kebutuhan pesantren yang terpercaya. Menyediakan alat tulis, kertas,
                  dan perlengkapan pendidikan berkualitas dengan harga terjangkau untuk pesantren di
                  seluruh Indonesia.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link href="/produk">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="text-nu-primary-dark"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Lihat Katalog Produk
                    </Button>
                  </Link>
                  <Link href="/tentang">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-nu-primary"
                    >
                      Tentang Platform
                    </Button>
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                    <Shield className="w-8 h-8 text-nu-secondary shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Partner Terpercaya</p>
                      <p className="text-xs text-white/70">Produk langsung dari berbagai partner</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                    <Truck className="w-8 h-8 text-nu-secondary shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Pengiriman Aman</p>
                      <p className="text-xs text-white/70">Jangkau seluruh Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                    <Star className="w-8 h-8 text-nu-secondary shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Harga Khusus Pesantren</p>
                      <p className="text-xs text-white/70">Hemat dengan harga grosir</p>
                    </div>
                  </div>
                </div>
              </div>
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
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-nu-primary hover:text-nu-primary-dark transition-colors group/link"
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
                  className="group relative flex flex-col items-center text-center p-4 sm:p-5 bg-white rounded-2xl border border-neutral-200 hover:border-nu-primary/30 hover:shadow-lg hover:shadow-nu-primary/5 transition-all duration-300 overflow-hidden"
                >
                  {/* Quarter-circle decoration */}
                  <div className="absolute -bottom-5 -right-5 w-18 h-18 rounded-tl-[32px] bg-gradient-to-tl from-nu-primary/[0.05] to-transparent group-hover:from-nu-primary/[0.10] transition-colors duration-500" />

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-nu-primary/5 to-nu-secondary/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-nu-primary/10 group-hover:to-nu-secondary/10 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-nu-primary group-hover:text-nu-primary-dark transition-colors" />
                  </div>

                  {/* Name */}
                  <h3 className="relative z-10 text-sm sm:text-base font-bold text-neutral-800 mb-1 group-hover:text-nu-primary transition-colors leading-snug">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-nu-primary"
            >
              Lihat semua kategori →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products — Premium Bento */}
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
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-nu-primary hover:text-nu-primary-dark transition-colors group/link"
            >
              Lihat semua produk
              <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* Hero Product — spans 2 cols, 2 rows */}
            {(() => {
              const hero = featuredProducts[0];
              return (
                <Link
                  href={`/produk/${hero.id}`}
                  className="group relative col-span-1 sm:col-span-2 row-span-2 overflow-hidden rounded-3xl min-h-[320px] sm:min-h-[440px] bg-neutral-100"
                >
                  <Image
                    src={hero.images[0]}
                    alt={hero.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/25 to-transparent" />
                  {/* Gold glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-nu-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top badge */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-nu-secondary/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white shadow-lg shadow-nu-secondary/20">
                      <Star className="w-3 h-3 fill-white" />
                      Produk Unggulan
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-white/70 bg-white/10 rounded-full px-3 py-1">
                        {hero.categoryName}
                      </span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < Math.floor(hero.rating) ? "fill-nu-secondary text-nu-secondary" : "text-white/20"}`}
                          />
                        ))}
                        <span className="text-xs text-white/60 ml-1">({hero.reviewCount})</span>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                      {hero.name}
                    </h3>
                    <p className="text-white/65 text-sm max-w-md leading-relaxed mb-4 line-clamp-2">
                      {hero.description}
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-white/50">Harga per rim</p>
                        <p className="text-2xl font-bold text-nu-secondary">
                          Rp {hero.price.toLocaleString("id-ID")}
                        </p>
                        {hero.priceGrosir && (
                          <p className="text-xs text-white/50">
                            Grosir mulai Rp {hero.priceGrosir.toLocaleString("id-ID")}
                          </p>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-nu-secondary transition-colors">
                        Lihat Detail
                        <span className="inline-block transition-transform group-hover:translate-x-1.5">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* Remaining 4 products */}
            {featuredProducts.slice(1, 5).map((product) => (
              <Link
                key={product.id}
                href={`/produk/${product.id}`}
                className="group relative overflow-hidden rounded-2xl h-[220px] sm:h-[200px] lg:h-auto lg:aspect-[4/3] bg-neutral-100"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                <div className="absolute inset-0 bg-nu-secondary/0 group-hover:bg-nu-secondary/5 transition-colors duration-500" />

                {/* Gold badge on hover */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-nu-secondary">
                    <Star className="w-2.5 h-2.5 fill-nu-secondary" />
                    Unggulan
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-semibold text-white/80 mb-2">
                    {product.categoryName}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-tight leading-tight line-clamp-2 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-nu-secondary text-nu-secondary" : "text-white/20"}`}
                        />
                      ))}
                      <span className="text-[10px] text-white/50 ml-1">({product.reviewCount})</span>
                    </div>
                    <span className="text-sm font-bold text-nu-secondary">
                      Rp {product.price.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile link */}
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 text-sm font-semibold text-nu-primary"
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
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-nu-primary shadow-sm mb-4">
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
                  <div className="w-11 h-11 bg-nu-primary-light rounded-full flex items-center justify-center text-nu-primary font-bold text-sm shrink-0">
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
      <section className="section-padding bg-nu-primary">
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
                className="border-white text-white hover:bg-white hover:text-nu-primary"
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