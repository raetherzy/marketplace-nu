import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="container-page section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/nahdlatululama.png"
                  alt="Logo Nahdlatul Ulama"
                  fill
                  className="object-contain p-1"
                  sizes="36px"
                />
              </div>
              <span className="font-semibold text-white text-sm">Marketplace NU</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Platform marketplace resmi Nahdlatul Ulama, menghubungkan Pondok Pesantren dengan mitra
              terpercaya untuk kebutuhan operasional.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-nu-secondary shrink-0" />
                <span>{FOOTER_LINKS.kontak.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-nu-secondary shrink-0" />
                <span>{FOOTER_LINKS.kontak.phone}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-nu-secondary shrink-0 mt-0.5" />
                <span>{FOOTER_LINKS.kontak.address}</span>
              </div>
            </div>
          </div>

          {/* Links: Tentang */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Tentang</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.tentang.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-nu-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Bantuan */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Bantuan</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.bantuan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-nu-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mitra */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Partner Kami</h4>
            <div className="bg-neutral-700/50 rounded-lg p-4">
              <p className="font-semibold text-white text-sm mb-1">Partner Kami</p>
              <p className="text-xs text-neutral-400">Mitra Terpercaya</p>
              <Link
                href="/mitra"
                className="inline-block mt-3 text-xs text-nu-secondary hover:text-nu-secondary-dark transition-colors font-medium"
              >
                Lihat Semua Mitra →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Marketplace NU — Nahdlatul Ulama. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs text-neutral-500">
            Didukung oleh <span className="text-nu-secondary font-medium">Intan Pariwara</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
