import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { partners, products } from "@/data/products";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const partner = partners.find((p) => p.slug === params.slug);
  if (!partner) {
    return { title: "Mitra Tidak Ditemukan" };
  }
  return {
    title: `Mitra - ${partner.name}`,
    description: partner.description.slice(0, 160),
  };
}

export default function MitraPage({ params }: PageProps) {
  const partner = partners.find((p) => p.slug === params.slug);
  if (!partner) {
    notFound();
  }

  const partnerProducts = products.filter((p) => p.partner === partner.id);

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-primary to-green-800 text-white">
        <div className="container-page py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-white flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                fill
                className="object-contain p-3"
                sizes="(max-width: 1024px) 128px, 160px"
              />
            </div>
            <div className="text-center lg:text-left">
              <Badge className="bg-white/20 text-white border-white/30 mb-3">
                Partner Pesantren
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">
                {partner.name}
              </h1>
              <p className="text-white/80 max-w-xl">
                {partner.description}
              </p>
              <div className="flex items-center gap-2 mt-3 justify-center lg:justify-start">
                <Calendar className="w-4 h-4 text-white/60" />
                <span className="text-sm text-white/60">
                  Bergabung sejak {partner.since}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* About */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-semibold text-neutral-800 mb-4">
                Tentang {partner.name}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {partner.description}
              </p>

              <h4 className="text-sm font-semibold text-neutral-700 mb-3">
                Sertifikasi
              </h4>
              <div className="space-y-2">
                {partner.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 text-sm text-neutral-600"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-semibold text-neutral-800 mb-4">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-neutral-400">Telepon</p>
                    <p className="text-sm text-neutral-700">{partner.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-neutral-400">Email</p>
                    <p className="text-sm text-neutral-700">{partner.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-neutral-400">WhatsApp</p>
                    <p className="text-sm text-neutral-700">
                      +{partner.contact.wa}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-neutral-400">Alamat</p>
                    <p className="text-sm text-neutral-700">
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="primary" fullWidth className="mt-6">
                <MessageCircle className="w-4 h-4" />
                Hubungi via WhatsApp
              </Button>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-semibold text-neutral-800 mb-4">
                Kategori Produk
              </h3>
              <div className="flex flex-wrap gap-2">
                {partner.categoryNames.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex text-sm px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-neutral-800">
                Produk dari {partner.name}
              </h2>
              <Link
                href="/produk"
                className="text-sm text-brand-primary font-medium flex items-center gap-1 hover:underline"
              >
                Lihat Semua
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {partnerProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {partnerProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-neutral-200">
                <p className="text-neutral-400">Belum ada produk dari mitra ini.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
