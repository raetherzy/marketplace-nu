import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return { title: "Produk Tidak Ditemukan" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.images[0] }],
    },
  };
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-page py-3">
          <nav className="flex items-center gap-2 text-sm text-neutral-400">
            <Link href="/" className="hover:text-nu-primary">
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/produk" className="hover:text-nu-primary">
              Produk
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/produk?kategori=${product.category}`}
              className="hover:text-nu-primary"
            >
              {product.categoryName}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-neutral-600 font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="container-page section-padding">
        <ProductDetailClient product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-neutral-800 mb-6">
              Produk Serupa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/produk/${p.id}`}
                  className="block bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-square bg-neutral-100">
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-neutral-400 mb-1">{p.categoryName}</p>
                    <h3 className="font-semibold text-neutral-800 text-sm line-clamp-2 mb-2">
                      {p.name}
                    </h3>
                    <p className="font-bold text-nu-primary">
                      Rp {p.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
