import { Suspense } from "react";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import KatalogPage from "./KatalogPage";

export const metadata: Metadata = {
  title: "Katalog Produk",
  description:
    "Jelajahi katalog kertas dan alat tulis di Toko Ponpes. Temukan kertas HVS, buku tulis, karton, dan kebutuhan lainnya.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="container-page py-16 text-center text-neutral-500">Memuat katalog...</div>}>
      <KatalogPage />
    </Suspense>
  );
}
