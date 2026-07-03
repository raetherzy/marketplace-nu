export const SITE_NAME = "Marketplace NU";
export const SITE_DESCRIPTION =
  "Platform marketplace resmi Nahdlatul Ulama untuk Pondok Pesantren di seluruh Indonesia. Mitra resmi: Intan Pariwara.";
export const SITE_URL = "https://marketplace.nu.or.id";

export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Mitra", href: "/mitra" },
  { label: "Tentang", href: "/tentang" },
] as const;

export const FOOTER_LINKS = {
  tentang: [
    { label: "Tentang Platform", href: "/tentang" },
    { label: "Partner", href: "/mitra" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
  bantuan: [
    { label: "Pusat Bantuan", href: "#" },
    { label: "Cara Belanja", href: "#" },
    { label: "Pengiriman", href: "#" },
    { label: "Pengembalian", href: "#" },
  ],
  kontak: {
    email: "marketplace@nu.or.id",
    phone: "+62 812-3456-7890",
    wa: "6281234567890",
    address: "Gedung PBNU, Jl. Kramat Raya No.164, Jakarta Pusat",
  },
} as const;
