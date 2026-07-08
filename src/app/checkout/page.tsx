"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  CreditCard,
  Wallet,
  Building2,
  MapPin,
  Ticket,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

type PaymentMethod = "transfer-bank" | "e-wallet" | "cod";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("transfer-bank");
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherApplied, setVoucherApplied] = useState(false);

  const shippingCost = subtotal >= 500000 ? 0 : 35000;
  const discount = voucherApplied ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal + shippingCost - discount;

  const handleApplyVoucher = () => {
    if (voucherCode.trim()) {
      setVoucherApplied(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    router.push("/pesanan/ORD-20250626-003");
  };

  if (items.length === 0) {
    return (
      <div className="container-page section-padding">
        <div className="text-center py-16">
          <p className="text-neutral-400 text-lg mb-4">Keranjang kosong</p>
          <Link href="/produk">
            <Button variant="primary">Mulai Belanja</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page section-padding">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
        <Link href="/" className="hover:text-brand-primary">
          Beranda
        </Link>
        <span>/</span>
        <Link href="/keranjang" className="hover:text-brand-primary">
          Keranjang
        </Link>
        <span>/</span>
        <span className="text-neutral-600 font-medium">Checkout</span>
      </div>

      <h1 className="text-2xl font-bold text-neutral-800 mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Forms */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Address */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-5 h-5 text-brand-primary" />
              <h2 className="font-semibold text-neutral-800">
                Alamat Pengiriman
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Nama Penerima" placeholder="Ahmad Fauzi" required />
              <Input
                label="Nomor Telepon"
                type="tel"
                placeholder="0812-3456-7890"
                required
              />
              <div className="sm:col-span-2">
                <Input
                  label="Alamat Lengkap"
                  placeholder="Jl. Pesantren No. 123, RT 01/RW 02"
                  required
                />
              </div>
              <Input
                label="Kota"
                placeholder="Jombang"
                required
              />
              <Input
                label="Provinsi"
                placeholder="Jawa Timur"
                required
              />
              <Input
                label="Kode Pos"
                placeholder="61451"
                required
              />
              <Input
                label="Catatan (opsional)"
                placeholder="Mohon kemas dengan rapi"
              />
            </div>
          </section>

          {/* Voucher */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center gap-2 mb-5">
              <Ticket className="w-5 h-5 text-brand-primary" />
              <h2 className="font-semibold text-neutral-800">
                Voucher Diskon
              </h2>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
                placeholder="Masukkan kode voucher (coba: NU5)"
                className="flex-1 px-4 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary"
                disabled={voucherApplied}
              />
              <Button
                type="button"
                variant={voucherApplied ? "ghost" : "primary"}
                onClick={handleApplyVoucher}
                disabled={voucherApplied}
              >
                {voucherApplied ? "Diterapkan" : "Pakai"}
              </Button>
            </div>
            {voucherApplied && (
              <p className="mt-2 text-sm text-green-600">
                Voucher diterapkan! Anda mendapat diskon 5%.
              </p>
            )}
          </section>

          {/* Payment Method */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6">
            <h2 className="font-semibold text-neutral-800 mb-5">
              Metode Pembayaran
            </h2>
            <div className="space-y-3">
              {[
                {
                  id: "transfer-bank" as PaymentMethod,
                  icon: Building2,
                  title: "Transfer Bank",
                  desc: "BCA, BNI, Mandiri, BRI",
                },
                {
                  id: "e-wallet" as PaymentMethod,
                  icon: Wallet,
                  title: "E-Wallet",
                  desc: "OVO, DANA, GoPay, ShopeePay",
                },
                {
                  id: "cod" as PaymentMethod,
                  icon: CreditCard,
                  title: "Bayar di Tempat (COD)",
                  desc: "Bayar saat barang diterima",
                },
              ].map((method) => {
                const Icon = method.icon;
                return (
                  <label
                    key={method.id}
                    className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                      paymentMethod === method.id
                        ? "border-brand-primary bg-brand-primary-light/30"
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                      className="accent-brand-primary"
                    />
                    <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-neutral-800">{method.title}</p>
                      <p className="text-xs text-neutral-400">{method.desc}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 sticky top-24">
            <h3 className="font-semibold text-neutral-800 mb-4">
              Ringkasan Pesanan
            </h3>

            {/* Items */}
            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-700 line-clamp-1">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {item.quantity} x {formatCurrency(item.product.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Subtotal</span>
                <span className="text-neutral-700">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Ongkos Kirim</span>
                <span className="text-neutral-700">
                  {shippingCost === 0 ? (
                    <span className="text-green-600 font-medium">Gratis</span>
                  ) : (
                    formatCurrency(shippingCost)
                  )}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between">
                  <span className="text-neutral-500">Diskon Voucher</span>
                  <span className="text-green-600">
                    -{formatCurrency(discount)}
                  </span>
                </div>
              )}
              <div className="border-t pt-2 flex justify-between">
                <span className="font-semibold text-neutral-800">Total</span>
                <span className="font-bold text-brand-primary text-lg">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>

            <Button type="submit" variant="primary" fullWidth size="lg" className="mt-6">
              Buat Pesanan
              <ChevronRight className="w-4 h-4" />
            </Button>

            <p className="text-xs text-neutral-400 text-center mt-3">
              Dengan membuat pesanan, Anda menyetujui Syarat & Ketentuan kami.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
