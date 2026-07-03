import { MitraGrid } from "@/components/layout/MitraSection";

export const metadata = {
  title: "Partner Kami",
  description: "Daftar partner Marketplace NU untuk kebutuhan Pondok Pesantren.",
};

export default function MitraListPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="bg-gradient-to-br from-nu-primary to-green-800 text-white">
        <div className="container-page py-16 lg:py-20 text-center">
          <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white mb-4">
            Partner NU
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Partner Kami
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            Jaringan mitra terpercaya Marketplace NU untuk menyediakan produk pendidikan, alat tulis, dan perlengkapan pesantren berkualitas.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <MitraGrid />
        </div>
      </section>
    </div>
  );
}
