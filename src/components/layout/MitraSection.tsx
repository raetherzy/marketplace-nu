"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, CheckCircle, Phone, Mail, MessageCircle, MapPin, ChevronRight } from "lucide-react";
import { partners } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function MitraSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-brand-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-primary shadow-sm mb-4">
            Partner Pesantren
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
            Partner Kami
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-base leading-relaxed">
            Bermitra dengan distributor dan penerbit terpercaya untuk menyediakan produk berkualitas bagi Pondok Pesantren di seluruh Indonesia.
          </p>
        </div>

        {/* Mitra Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <Link
              key={partner.id}
              href={`/mitra/${partner.slug}`}
              className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/5 transition-all duration-300 flex flex-col"
            >
              {/* Logo & Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center shrink-0 group-hover:ring-2 ring-brand-primary/20 transition-all">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-2"
                    sizes="56px"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-neutral-800 group-hover:text-brand-primary transition-colors text-base leading-tight truncate">
                    {partner.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="text-xs text-neutral-400">Sejak {partner.since}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-3 flex-1">
                {partner.description}
              </p>

              {/* Categories */}
              <div className="mb-4">
                <p className="text-xs font-medium text-neutral-600 mb-2">Kategori Produk:</p>
                <div className="flex flex-wrap gap-1.5">
                  {partner.categoryNames.map((cat) => (
                    <span
                      key={cat}
                      className="inline-flex text-xs px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {partner.certifications.slice(0, 2).map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand-primary-light text-brand-primary text-[10px] font-medium rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {cert}
                    </span>
                  ))}
                  {partner.certifications.length > 2 && (
                    <span className="inline-flex text-[10px] px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded-full">
                      +{partner.certifications.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Count & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <span className="text-xs text-neutral-400">
                  <span className="font-semibold text-neutral-600">{partner.productCount}</span> produk
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary group-hover:gap-2 transition-all">
                  Lihat Profil
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link (mobile) */}
        <div className="mt-8 text-center">
          <Link
            href="/mitra"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors group/link"
          >
            Lihat semua mitra
            <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MitraGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {partners.map((partner) => (
        <Link
          key={partner.id}
          href={`/mitra/${partner.slug}`}
          className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/5 transition-all duration-300 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center shrink-0">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain p-2"
                sizes="56px"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-neutral-800 group-hover:text-brand-primary transition-colors text-base leading-tight truncate">
                {partner.name}
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">Sejak {partner.since}</p>
            </div>
          </div>
          <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2 flex-1">
            {partner.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {partner.categoryNames.map((cat) => (
              <span key={cat} className="inline-flex text-xs px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-full">
                {cat}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <span className="text-xs text-neutral-400">
              <span className="font-semibold text-neutral-600">{partner.productCount}</span> produk
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary group-hover:gap-2 transition-all">
              Lihat
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

interface MitraDetailProps {
  partnerId: string;
}

export function MitraDetail({ partnerId }: MitraDetailProps) {
  const partner = partners.find((p) => p.id === partnerId);
  if (!partner) return null;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-neutral-200 p-6">
        <h3 className="font-semibold text-neutral-800 mb-4">Tentang {partner.name}</h3>
        <p className="text-sm text-neutral-600 leading-relaxed mb-6">{partner.description}</p>

        <h4 className="text-sm font-semibold text-neutral-700 mb-3">Sertifikasi</h4>
        <div className="space-y-2">
          {partner.certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-2 text-sm text-neutral-600">
              <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
              {cert}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 p-6">
        <h3 className="font-semibold text-neutral-800 mb-4">Informasi Kontak</h3>
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
              <p className="text-sm text-neutral-700">+{partner.contact.wa}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-brand-primary mt-0.5" />
            <div>
              <p className="text-xs text-neutral-400">Alamat</p>
              <p className="text-sm text-neutral-700">Indonesia</p>
            </div>
          </div>
        </div>
        <Button variant="primary" fullWidth className="mt-6">
          <MessageCircle className="w-4 h-4" />
          Hubungi via WhatsApp
        </Button>
      </div>
    </div>
  );
}
