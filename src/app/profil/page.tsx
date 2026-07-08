import Link from "next/link";
import {
  User,
  Building2,
  MapPin,
  Phone,
  Mail,
  Package,
  CheckCircle2,
  Truck,
  Clock,
  ChevronRight,
  LogOut,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { dummyProfile, dummyOrders } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

export const metadata = {
  title: "Profil Pesantren",
  description: "Kelola data pesantren dan riwayat pesanan Anda.",
};

const statusConfig = {
  diterima: { label: "Diterima", color: "bg-amber-100 text-amber-700" },
  diproses: { label: "Diproses", color: "bg-blue-100 text-blue-700" },
  dikirim: { label: "Dikirim", color: "bg-purple-100 text-purple-700" },
  selesai: { label: "Selesai", color: "bg-green-100 text-green-700" },
} as const;

const statusIcon = {
  diterima: Clock,
  diproses: Package,
  dikirim: Truck,
  selesai: CheckCircle2,
} as const;

export default function ProfilPage() {
  const profile = dummyProfile;
  const orders = dummyOrders;

  return (
    <div className="container-page section-padding">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
        <Link href="/" className="hover:text-brand-primary">
          Beranda
        </Link>
        <span>/</span>
        <span className="text-neutral-600 font-medium">Profil</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar: Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
            <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="font-bold text-neutral-800">{profile.name}</h2>
            <p className="text-sm text-neutral-400 mt-1">
              NPSN: {profile.npsn}
            </p>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Settings className="w-4 h-4" />
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 text-red-500">
                <LogOut className="w-4 h-4" />
                Keluar
              </Button>
            </div>
          </div>

          {/* Pesantren Info */}
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <h3 className="font-semibold text-neutral-800 mb-4">
              Informasi Pesantren
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-neutral-400 text-xs">Nama Pesantren</p>
                  <p className="text-neutral-700">{profile.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-neutral-400 text-xs">Alamat</p>
                  <p className="text-neutral-700">
                    {profile.address}, {profile.city}, {profile.province}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-neutral-400 text-xs">Telepon</p>
                  <p className="text-neutral-700">{profile.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-neutral-400 text-xs">Email</p>
                  <p className="text-neutral-700">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-neutral-400 text-xs">Pimpinan</p>
                  <p className="text-neutral-700">{profile.headName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main: Order History */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Pesanan", value: orders.length, icon: Package },
              {
                label: "Selesai",
                value: orders.filter((o) => o.status === "selesai").length,
                icon: CheckCircle2,
              },
              {
                label: "Dikirim",
                value: orders.filter((o) => o.status === "dikirim").length,
                icon: Truck,
              },
              {
                label: "Total Belanja",
                value: formatCurrency(
                  orders.reduce((sum, o) => sum + o.total, 0)
                ),
                icon: User,
                isCurrency: true,
              },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl border border-neutral-200 p-4"
                >
                  <div className="w-9 h-9 bg-brand-primary-light rounded-lg flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-brand-primary" />
                  </div>
                  <p className={`font-bold text-neutral-800 ${stat.isCurrency ? "text-sm" : "text-xl"}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-neutral-400">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Order History */}
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-neutral-800">
                Riwayat Pesanan
              </h2>
              <span className="text-sm text-neutral-400">
                {orders.length} pesanan
              </span>
            </div>

            <div className="space-y-4">
              {orders.map((order) => {
                const StatusIcon = statusIcon[order.status];
                const status = statusConfig[order.status];
                return (
                  <Link
                    key={order.id}
                    href={`/pesanan/${order.id}`}
                    className="block border border-neutral-200 rounded-xl p-4 hover:border-brand-primary hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-neutral-800">
                          {order.id}
                        </p>
                        <p className="text-xs text-neutral-400">
                          {order.createdAt}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${status.color}`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex -space-x-2">
                        {order.items.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="w-10 h-10 bg-neutral-100 rounded-lg border-2 border-white shrink-0"
                          />
                        ))}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {order.items.length} produk • {order.items.reduce((sum, i) => sum + i.quantity, 0)} item
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div>
                        <p className="text-xs text-neutral-400">Total</p>
                        <p className="font-bold text-brand-primary">
                          {formatCurrency(order.total)}
                        </p>
                      </div>
                      <span className="text-sm text-brand-primary font-medium flex items-center gap-1">
                        Detail
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
