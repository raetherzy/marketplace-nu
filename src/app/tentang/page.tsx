import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Truck,
  Award,
  HandshakeIcon,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Tentang Toko Ponpes",
  description:
    "Toko Ponpes - Platform belanja online khusus untuk Pondok Pesantren di seluruh Indonesia. Dukung ekonomi umat dengan produk berkualitas.",
};

export default function TentangPage() {
  const values = [
    {
      icon: Heart,
      title: "Berkhidmat untuk Umat",
      desc: "Mengabdikan diri untuk kesejahteraan pesantren dan umat Islam Indonesia.",
    },
    {
      icon: ShieldCheck,
      title: "Terpercaya & Aman",
      desc: "Setiap mitra diverifikasi dengan sertifikasi resmi dan jaminan kualitas produk.",
    },
    {
      icon: Users,
      title: "Bersama Pesantren",
      desc: "Memahami kebutuhan unik setiap pesantren dengan layanan yang personal.",
    },
    {
      icon: Award,
      title: "Kualitas Terbaik",
      desc: "Bekerja sama hanya dengan supplier terpercaya seperti Intan Pariwara.",
    },
  ];

  const stats = [
    { value: "500+", label: "Pesantren Terdaftar" },
    { value: "30+", label: "Tahun Pengalaman Mitra" },
    { value: "1000+", label: "Produk Tersedia" },
    { value: "34", label: "Provinsi Terjangkau" },
  ];

  const faqs = [
    {
      q: "Siapa yang bisa berbelanja di Toko Ponpes?",
      a: "Toko Ponpes dirancang khusus untuk Pondok Pesantren, lembaga pendidikan Islam, dan komunitas pesantren di seluruh Indonesia. Pendaftaran akun menggunakan NPSN pesantren untuk verifikasi.",
    },
    {
      q: "Bagaimana proses pemesanan dalam jumlah besar (grosir)?",
      a: "Kami menyediakan harga grosir khusus untuk pembelian dalam jumlah tertentu. Setiap produk menampilkan batas minimum pembelian grosir dan harga yang lebih ekonomis.",
    },
    {
      q: "Apakah pengiriman tersedia ke seluruh Indonesia?",
      a: "Ya, kami melayani pengiriman ke 34 provinsi di Indonesia. Gratis ongkir untuk pembelian minimal Rp 500.000. Estimasi waktu pengiriman 2-5 hari kerja tergantung lokasi.",
    },
    {
      q: "Bagaimana metode pembayaran yang tersedia?",
      a: "Kami menerima pembayaran melalui transfer bank (BCA, BNI, Mandiri, BRI), e-wallet (OVO, DANA, GoPay), dan Cash on Delivery (COD) untuk area tertentu.",
    },
    {
      q: "Siapa mitra utama Toko Ponpes saat ini?",
      a: "Saat ini mitra utama kami adalah Intan Pariwara, distributor perlengkapan pendidikan bersertifikat ISO 9001:2015, SNI, dan Halal. Kami akan terus menambah mitra terpercaya lainnya.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-primary to-green-800 text-white">
        <div className="container-page py-16 lg:py-24 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
            Bersama Memajukan Ekonomi Pesantren
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Tentang Toko Ponpes
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Platform belanja online khusus untuk Pondok Pesantren di seluruh
            Indonesia. Menyediakan perlengkapan pendidikan berkualitas dengan
            harga terjangkau, didukung mitra terpercaya.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container-page -mt-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-neutral-200 p-6 text-center shadow-sm"
            >
              <p className="text-2xl lg:text-3xl font-bold text-brand-primary">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="container-page section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl border border-neutral-200 p-8">
            <div className="w-12 h-12 bg-brand-primary-light rounded-xl flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-brand-primary" />
            </div>
            <h2 className="text-xl font-bold text-neutral-800 mb-3">
              Visi Kami
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Menjadi platform marketplace terdepan dan terpercaya untuk
              kebutuhan Pondok Pesantren di Indonesia, yang menghubungkan
              pesantren dengan supplier berkualitas, mendukung ekonomi umat,
              dan mempermudah pengadaan perlengkapan pendidikan.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-neutral-200 p-8">
            <div className="w-12 h-12 bg-brand-secondary-light rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-brand-secondary-dark" />
            </div>
            <h2 className="text-xl font-bold text-neutral-800 mb-3">
              Misi Kami
            </h2>
            <ul className="space-y-3 text-neutral-600">
              {[
                "Menyediakan produk berkualitas dengan harga terjangkau untuk pesantren",
                "Mengedepankan kemudahan dan transparansi dalam setiap transaksi",
                "Mendukung pertumbuhan ekonomi umat melalui kemitraan strategis",
                "Memberikan layanan terbaik dengan pemahaman kebutuhan pesantren",
              ].map((misi) => (
                <li key={misi} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-2">
              Nilai yang Kami Junjung
            </h2>
            <p className="text-neutral-400">
              Prinsip yang mendasari setiap layanan kami
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl border border-neutral-200 p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-brand-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h3 className="font-semibold text-neutral-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-500">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-brand-primary-light/30 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-2">
              Cara Kerja
            </h2>
            <p className="text-neutral-500">
              Belanja mudah dalam 4 langkah sederhana
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                step: "1",
                title: "Daftar Akun",
                desc: "Registrasi dengan data pesantren dan NPSN",
              },
              {
                icon: ShoppingBag,
                step: "2",
                title: "Pilih Produk",
                desc: "Browse katalog dan tambahkan ke keranjang",
              },
              {
                icon: Truck,
                step: "3",
                title: "Checkout & Bayar",
                desc: "Pilih alamat pengiriman dan metode bayar",
              },
              {
                icon: CheckCircle2,
                step: "4",
                title: "Terima Pesanan",
                desc: "Lacak pesanan hingga sampai tujuan",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="text-center relative">
                  <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-8 h-8 text-brand-primary" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-brand-primary text-white text-sm font-bold rounded-full flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-neutral-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-2">
              Pertanyaan Umum
            </h2>
            <p className="text-neutral-400">
              Jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-neutral-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-neutral-800">{faq.q}</span>
                  <span className="text-brand-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-brand-primary to-green-800 rounded-2xl p-8 lg:p-12 text-center text-white">
          <HandshakeIcon className="w-16 h-16 mx-auto mb-4 text-white/80" />
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Siap Bergabung?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Daftarkan pesantren Anda sekarang dan rasakan kemudahan belanja
            perlengkapan berkualitas dengan harga terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/daftar">
              <Button variant="secondary" size="lg">
                Daftar Sekarang
              </Button>
            </Link>
            <Link href="/produk">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Lihat Produk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
