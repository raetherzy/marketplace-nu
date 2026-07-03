"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Building2,
  Phone,
  MapPin,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function DaftarPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    pesantrenName: "",
    npsn: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no real auth
    window.location.href = "/masuk";
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center container-page section-padding py-12">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-nu-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UserPlus className="w-8 h-8 text-nu-primary" />
            </div>
            <h1 className="text-2xl font-bold text-neutral-800">
              Daftar Akun Pesantren
            </h1>
            <p className="text-sm text-neutral-400 mt-1">
              Bergabung dengan Marketplace NU untuk kebutuhan pesantren Anda
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Pesantren Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-nu-primary" />
                Data Pesantren
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Building2 className="absolute left-3 top-9 w-5 h-5 text-neutral-400" />
                  <Input
                    label="Nama Pesantren"
                    name="pesantrenName"
                    placeholder="Pondok Pesantren Al-Hikmah"
                    value={formData.pesantrenName}
                    onChange={handleChange}
                    className="pl-11"
                    required
                  />
                </div>
                <Input
                  label="NPSN"
                  name="npsn"
                  placeholder="12345678"
                  value={formData.npsn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-9 w-5 h-5 text-neutral-400" />
                  <Input
                    label="Nomor Telepon"
                    name="phone"
                    type="tel"
                    placeholder="0812-3456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-11"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-9 w-5 h-5 text-neutral-400" />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="admin@pesantren.sch.id"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-11"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-9 w-5 h-5 text-neutral-400" />
                <Input
                  label="Alamat Lengkap"
                  name="address"
                  placeholder="Jl. Pesantren No. 123"
                  value={formData.address}
                  onChange={handleChange}
                  className="pl-11"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Kota"
                  name="city"
                  placeholder="Jombang"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Provinsi"
                  name="province"
                  placeholder="Jawa Timur"
                  value={formData.province}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Account Info */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
                <Lock className="w-4 h-4 text-nu-primary" />
                Data Akun
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Lock className="absolute left-3 top-9 w-5 h-5 text-neutral-400" />
                  <Input
                    label="Kata Sandi"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-11 pr-11"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-9 text-neutral-400 hover:text-neutral-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-9 w-5 h-5 text-neutral-400" />
                  <Input
                    label="Konfirmasi Sandi"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-11"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="accent-nu-primary w-4 h-4 mt-0.5"
                required
              />
              <span className="text-sm text-neutral-600">
                Saya menyetujui{" "}
                <Link href="#" className="text-nu-primary font-medium hover:underline">
                  Syarat & Ketentuan
                </Link>{" "}
                dan{" "}
                <Link href="#" className="text-nu-primary font-medium hover:underline">
                  Kebijakan Privasi
                </Link>{" "}
                Marketplace NU
              </span>
            </label>

            <Button type="submit" variant="primary" fullWidth size="lg">
              Daftar Sekarang
            </Button>
          </form>

          <p className="text-center text-sm text-neutral-500 mt-6">
            Sudah punya akun?{" "}
            <Link
              href="/masuk"
              className="text-nu-primary font-semibold hover:underline"
            >
              Masuk di sini
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-neutral-400 mt-4">
          Demo only — form tidak terhubung ke backend.
        </p>
      </div>
    </div>
  );
}
