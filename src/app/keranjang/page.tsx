"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const stockLabel = {
  tersedia: "Tersedia",
  habis: "Habis",
  preorder: "Pre-Order",
} as const;

export default function KeranjangPage() {
  const { items, removeItem, updateQuantity, totalItems, subtotal } = useCart();

  const shippingCost = subtotal >= 500000 ? 0 : 35000;
  const total = subtotal + shippingCost;

  if (items.length === 0) {
    return (
      <div className="container-page section-padding">
        <div className="text-center py-16">
          <ShoppingBag className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-neutral-800 mb-2">
            Keranjang Kosong
          </h2>
          <p className="text-neutral-400 mb-6">
            Belanja produk perlengkapan pesantren dengan mudah dan cepat.
          </p>
          <Link href="/produk">
            <Button variant="primary">
              Mulai Belanja
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page section-padding">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
        <Link href="/" className="hover:text-nu-primary">
          Beranda
        </Link>
        <span>/</span>
        <span className="text-neutral-600 font-medium">Keranjang</span>
      </div>

      <h1 className="text-2xl font-bold text-neutral-800 mb-6">
        Keranjang Belanja
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const isGrosir =
              item.product.priceGrosir &&
              item.product.minGrosir &&
              item.quantity >= item.product.minGrosir;
            const price = isGrosir ? item.product.priceGrosir! : item.product.price;
            const itemTotal = price * item.quantity;

            return (
              <div
                key={item.product.id}
                className="flex gap-4 bg-white rounded-xl border border-neutral-200 p-4"
              >
                <Link
                  href={`/produk/${item.product.id}`}
                  className="relative w-24 h-24 rounded-lg overflow-hidden bg-neutral-100 shrink-0"
                >
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link href={`/produk/${item.product.id}`}>
                        <h3 className="font-semibold text-neutral-800 hover:text-nu-primary transition-colors line-clamp-2">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        SKU: {item.product.sku}
                      </p>
                      <Badge
                        variant={item.product.stock}
                        className="mt-1 text-xs"
                      >
                        {stockLabel[item.product.stock]}
                      </Badge>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-neutral-300 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-end justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-nu-primary">
                        {formatCurrency(itemTotal)}
                      </p>
                      {isGrosir && (
                        <p className="text-xs text-green-600">
                          Hemat {formatCurrency((item.product.price - item.product.priceGrosir!) * item.quantity)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 sticky top-24">
            <h3 className="font-semibold text-neutral-800 mb-4">
              Ringkasan Belanja
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">
                  Total Barang ({totalItems} item)
                </span>
                <span className="text-neutral-700">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Ongkos Kirim</span>
                <span className="text-neutral-700">
                  {shippingCost === 0 ? (
                    <span className="text-green-600 font-medium">
                      Gratis
                    </span>
                  ) : (
                    formatCurrency(shippingCost)
                  )}
                </span>
              </div>
              {subtotal < 500000 && (
                <div className="bg-nu-secondary-light rounded-lg p-3">
                  <p className="text-xs text-nu-secondary-dark">
                    Belanja lagi{" "}
                    <span className="font-bold">
                      {formatCurrency(500000 - subtotal)}
                    </span>{" "}
                    untuk dapat gratis ongkir!
                  </p>
                </div>
              )}
              <div className="border-t pt-3 flex justify-between">
                <span className="font-semibold text-neutral-800">
                  Total Tagihan
                </span>
                <span className="font-bold text-nu-primary text-lg">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>

            <Link href="/checkout" className="block mt-6">
              <Button variant="primary" fullWidth size="lg">
                Lanjut ke Checkout
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link
              href="/produk"
              className="block text-center text-sm text-nu-primary font-medium mt-3 hover:underline"
            >
              Lanjut Belanja
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
