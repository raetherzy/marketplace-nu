"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function MasukPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no real auth
    window.location.href = "/profil";
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center container-page section-padding">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-brand-primary" />
            </div>
            <h1 className="text-2xl font-bold text-neutral-800">
              Masuk ke Akun
            </h1>
            <p className="text-sm text-neutral-400 mt-1">
              Selamat datang kembali di Toko Ponpes
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-3 top-9 w-5 h-5 text-neutral-400" />
              <Input
                label="Email"
                type="email"
                placeholder="admin@pesantren.sch.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-11"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-9 w-5 h-5 text-neutral-400" />
              <Input
                label="Kata Sandi"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-brand-primary w-4 h-4"
                />
                <span className="text-neutral-600">Ingat saya</span>
              </label>
              <Link
                href="#"
                className="text-brand-primary font-medium hover:underline"
              >
                Lupa sandi?
              </Link>
            </div>

            <Button type="submit" variant="primary" fullWidth size="lg">
              Masuk
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="text-xs text-neutral-400">atau</span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-neutral-500">
            Belum punya akun?{" "}
            <Link
              href="/daftar"
              className="text-brand-primary font-semibold hover:underline"
            >
              Daftar di sini
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
