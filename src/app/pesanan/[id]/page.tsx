import Link from "next/link";
import {
  CheckCircle2,
  Package,
  Truck,
  Check,
  Clock,
  MapPin,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { dummyOrders } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

export const metadata = {
  title: "Konfirmasi Pesanan",
  description: "Detail status pesanan Anda di Marketplace NU.",
};

const statusConfig = {
  diterima: {
    label: "Pesanan Diterima",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    step: 1,
  },
  diproses: {
    label: "Sedang Diproses",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    step: 2,
  },
  dikirim: {
    label: "Dalam Pengiriman",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    step: 3,
  },
  selesai: {
    label: "Selesai",
    color: "text-green-600",
    bgColor: "bg-green-100",
    step: 4,
  },
} as const;

export default function PesananPage() {
  // Use most recent order (or default to dikirim status for demo)
  const order = dummyOrders[0];

  const steps = [
    { icon: CheckCircle2, label: "Diterima", desc: "Pesanan diterima" },
    { icon: Package, label: "Diproses", desc: "Sedang dikemas" },
    { icon: Truck, label: "Dikirim", desc: "Dalam perjalanan" },
    { icon: Check, label: "Selesai", desc: "Sampai tujuan" },
  ];

  const currentStep = statusConfig[order.status].step;

  return (
    <div className="container-page section-padding">
      {/* Success Header */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-neutral-800 mb-2">
          Pesanan Berhasil Dibuat!
        </h1>
        <p className="text-neutral-400">
          Terima kasih, pesanan Anda sedang kami proses.
        </p>
        <p className="text-sm text-neutral-500 mt-1">
          Nomor Pesanan:{" "}
          <span className="font-semibold text-nu-primary">
            ORD-20250626-003
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Order Status & Items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Status Tracker */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6">
            <h2 className="font-semibold text-neutral-800 mb-6">
              Status Pesanan
            </h2>
            <div className="relative">
              <div className="flex justify-between">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isCompleted = idx < currentStep;
                  const isCurrent = idx === currentStep - 1;
                  return (
                    <div
                      key={step.label}
                      className="flex flex-col items-center text-center flex-1 relative z-10"
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 border-2 ${
                          isCompleted
                            ? "bg-nu-primary border-nu-primary text-white"
                            : isCurrent
                            ? "bg-nu-primary-light border-nu-primary text-nu-primary"
                            : "bg-white border-neutral-200 text-neutral-300"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <p
                        className={`text-xs font-medium ${
                          isCompleted || isCurrent
                            ? "text-neutral-800"
                            : "text-neutral-300"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Progress Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-neutral-200 -z-0">
                <div
                  className="h-full bg-nu-primary transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />
              </div>
            </div>

            <div className="mt-6 bg-neutral-50 rounded-lg p-4 flex items-center gap-3">
              <Clock className="w-5 h-5 text-nu-primary shrink-0" />
              <p className="text-sm text-neutral-600">
                Estimasi tiba:{" "}
                <span className="font-semibold text-neutral-800">
                  {order.estimatedDelivery}
                </span>
              </p>
            </div>
          </section>

          {/* Order Items */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6">
            <h2 className="font-semibold text-neutral-800 mb-4">
              Detail Produk
            </h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.productId} className="flex gap-4">
                  <div className="w-16 h-16 bg-neutral-100 rounded-lg shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium text-neutral-800">
                      {item.productName}
                    </p>
                    <p className="text-sm text-neutral-400">
                      {item.quantity} x {formatCurrency(item.price)}
                    </p>
                  </div>
                  <p className="font-semibold text-neutral-700">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Shipping & Payment Summary */}
        <div className="lg:col-span-1 space-y-6">
          {/* Shipping Info */}
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-nu-primary" />
              <h3 className="font-semibold text-neutral-800">
                Alamat Pengiriman
              </h3>
            </div>
            <div className="text-sm space-y-1">
              <p className="font-medium text-neutral-800">Ahmad Fauzi</p>
              <p className="text-neutral-600">0812-3456-7890</p>
              <p className="text-neutral-600">
                Jl. Pesantren No. 123, RT 01/RW 02
              </p>
              <p className="text-neutral-600">Jombang, Jawa Timur, 61451</p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-nu-primary" />
              <h3 className="font-semibold text-neutral-800">
                Metode Pembayaran
              </h3>
            </div>
            <p className="text-sm text-neutral-600">Transfer Bank - BCA</p>
            <p className="text-sm text-neutral-400 mt-1">
              Bayar sebelum 24 jam
            </p>
          </div>

          {/* Cost Summary */}
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <h3 className="font-semibold text-neutral-800 mb-4">
              Ringkasan Biaya
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Subtotal</span>
                <span className="text-neutral-700">
                  {formatCurrency(order.total - order.shipping)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Ongkos Kirim</span>
                <span className="text-neutral-700">
                  {formatCurrency(order.shipping)}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between">
                <span className="font-semibold text-neutral-800">Total</span>
                <span className="font-bold text-nu-primary text-lg">
                  {formatCurrency(order.total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
        <Link href="/produk">
          <Button variant="primary" size="lg">
            Belanja Lagi
          </Button>
        </Link>
        <Link href="/profil">
          <Button variant="outline" size="lg">
            Lihat Pesanan Saya
          </Button>
        </Link>
      </div>
    </div>
  );
}
