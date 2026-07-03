import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import KatalogPage from "./KatalogPage";

export const metadata: Metadata = {
  title: "Katalog Produk",
  description:
    "Jelajahi katalog produk kertas dan alat tulis dari Intan Pariwara untuk Pondok Pesantren. Kertas HVS, buku tulis, karton, dan lainnya.",
};

export default function Page() {
  return <KatalogPage />;
}