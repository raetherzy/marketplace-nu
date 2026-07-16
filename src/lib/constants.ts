export const SITE_NAME = "Toko Ponpes";
export const SITE_DESCRIPTION =
  "Toko Ponpes untuk memenuhi kebutuhan operasional, alat tulis, perlengkapan ibadah, dan produk pilihan bagi pondok pesantren.";
export const SITE_URL = "https://tokoponpes.id";

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
    email: "halo@tokoponpes.id",
    phone: "+62 812-3456-7890",
    wa: "6281234567890",
    address: "Layanan daring",
  },
  sosial: {
    instagram: "https://instagram.com/tokoponpes",
    facebook: "https://facebook.com/tokoponpes",
    youtube: "https://youtube.com/@tokoponpes",
  },
} as const;
