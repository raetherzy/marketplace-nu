# Panduan Testing — Toko Ponpes Mockup (Phase 1)

> Dokumen ini menjelaskan semua halaman, fitur, dan interaksi yang bisa Anda lihat dan coba pada mockup Phase 1.

---

## Cara Menjalankan

```bash
# 1. Install dependencies (sudah dilakukan)
npm install

# 2. Jalankan dev server
npm run dev

# 3. Buka browser
#    http://localhost:3000
```

**Build produksi** (opsional, untuk verifikasi):
```bash
npm run build
npm run start
```

---

## Daftar Halaman & Apa yang Bisa Dicoba

### 1. Beranda (`/`)
**Bisa dilihat:**
- Hero banner hijau Toko Ponpes + tombol "Lihat Produk" dan "Tentang Kami"
- 5 kartu kategori (Kertas HVS, Kertas Buram, Buku Tulis, Karton Manila, Continuous Form) — bisa diklik
- 8 produk unggulan dengan gambar, nama, harga, rating bintang
- Section berisi berbagai mitra independen dengan badge sertifikasi
- 3 testimoni dari perwakilan pesantren
- CTA bawah dengan tombol daftar & browse produk

**Bisa dicoba:**
- Klik tombol "Lihat Produk" → ke `/produk`
- Klik tombol "Tentang Kami" → ke `/tentang`
- Klik kartu kategori → ke katalog dengan filter aktif
- Klik produk → ke halaman detail
- Klik nama mitra → ke halaman mitra

---

### 2. Katalog Produk (`/produk`)
**Bisa dilihat:**
- Sidebar filter (desktop) / tombol filter (mobile): kategori, rentang harga, merek
- Search bar untuk cari produk berdasarkan nama
- Dropdown sort: termurah, termahal, terbaru, rating
- Grid produk 4 kolom (desktop) / 2 kolom (mobile)
- Badge "Grosir" pada produk yang punya harga grosir
- Tombol "Reset Filter" muncul saat ada filter aktif

**Bisa dicoba:**
- Centang kategori → grid update otomatis
- Pilih rentang harga → grid filter
- Ketik di search → filter real-time
- Ganti sort → urutan produk berubah
- Klik "Reset Filter" → semua filter dibersihkan
- Klik produk → ke halaman detail
- Klik tombol "Tambah" pada ProductCard → produk masuk keranjang (badge keranjang di header naik)

---

### 3. Detail Produk (`/produk/:id`)
**Bisa dilihat:**
- Breadcrumb (Beranda > Produk > Nama Produk)
- Galeri gambar dengan thumbnail selector (klik thumbnail → gambar utama berubah)
- Rating bintang + jumlah ulasan
- Harga satuan + tabel harga grosir (makin banyak makin murah)
- Deskripsi produk, manfaat, spesifikasi (tab switch)
- Section "Manfaat" dengan ikon: gratis ongkir, produk original, garansi 30 hari
- Section "Produk Terkait" di bawah

**Bisa dicoba:**
- Klik thumbnail gambar → gambar utama berubah
- Tombol minus/plus → ubah quantity (min 1, max 99)
- Ketik angka langsung di input quantity
- Klik "Tambah ke Keranjang" → produk masuk keranjang dengan quantity dipilih
- Klik tab "Deskripsi" / "Spesifikasi" → konten berubah
- Klik produk terkait → ke halaman produk lain

**URL contoh yang bisa dikunjungi:**
- `/produk/hvs-a4-70-sinar`
- `/produk/hvs-a4-80-paperone`
- `/produk/buram-a4-f4`
- `/produk/buku-tulis-38-lb-sinar`
- `/produk/karton-manila-300gr`
- `/produk/continuous-form-1-ply`
- (total 15 produk — semua pre-rendered sebagai static HTML)

---

### 4. Halaman Mitra (`/mitra/[slug]`)
**Bisa dilihat:**
- Hero dengan gradient + nama mitra + deskripsi singkat
- Sidebar: tentang mitra, badge sertifikasi, info kontak, tombol WhatsApp
- Grid produk milik mitra tersebut

**Bisa dicoba:**
- Klik tombol WhatsApp → buka `wa.me` link
- Klik produk → ke halaman detail

---

### 5. Keranjang (`/keranjang`)
**Bisa dilihat:**
- Empty state (kalau keranjang kosong): ikon tas belanja + tombol "Mulai Belanja"
- List item: gambar, nama, harga, quantity control, tombol hapus (ikon tempat sampah)
- Summary sidebar: subtotal, ongkir (gratis kalau subtotal ≥ Rp500.000), total
- Progress hint ongkir: "Belanja RpX lagi untuk gratis ongkir!"

**Bisa dicoba:**
- Tambah produk dari katalog/detail → muncul di keranjang
- Tombol minus/plus → quantity berubah, subtotal & total auto-update
- Klik ikon tempat sampah → item dihapus
- Kalau total belanja < 500.000 → ongkir Rp20.000 ditampilkan
- Kalau total belanja ≥ 500.000 → ongkir "GRATIS"
- Klik "Lanjut ke Checkout" → ke `/checkout`
- Klik "Lanjut Belanja" → kembali ke katalog

---

### 6. Checkout (`/checkout`)
**Bisa dilihat:**
- Form alamat pengiriman: nama pesantren, NPSN, nama penerima, telepon, alamat, kota, provinsi (7 field)
- Section voucher kode
- 3 metode pembayaran: Transfer Bank, E-Wallet, COD (radio card dengan ikon)
- Summary sidebar: list item, subtotal, diskon, ongkir, total, tombol "Buat Pesanan"

**Bisa dicoba:**
- Isi form alamat (semua field ada label)
- Ketik voucher `NU5` → klik "Terapkan" → diskon 5% muncul di summary
- Ketik voucher salah → pesan error "Kode voucher tidak valid"
- Pilih metode pembayaran → card aktif berubah warna
- Klik "Buat Pesanan" → cart dibersihkan, redirect ke `/pesanan/ORD-20250626-003`
- Klik "Kembali ke Keranjang" → kembali ke `/keranjang`

---

### 7. Konfirmasi Pesanan (`/pesanan/ORD-20250626-003`)
**Bisa dilihat:**
- Header sukses dengan ikon centang hijau + nomor pesanan
- 4-step status tracker: Diterima → Diproses → Dikirim → Selesai (dengan progress line visual)
- Detail item pesanan (gambar, nama, quantity, harga)
- Sidebar: info pengiriman, info pembayaran, ringkasan biaya

**Bisa dicoba:**
- Akses langsung via URL setelah checkout
- Klik "Kembali ke Beranda" → ke `/`

---

### 8. Login (`/masuk`)
**Bisa dilihat:**
- Form login: email, password (dengan eye toggle show/hide)
- Checkbox "Ingat saya"
- Link "Lupa password?"
- Notice demo: "Mode demo — gunakan email & password apa saja"
- Link ke halaman daftar

**Bisa dicoba:**
- Klik ikon mata → password visible/hidden
- Isi email + password apa saja → klik "Masuk" → redirect ke `/profil`
- Klik "Belum punya akun? Daftar" → ke `/daftar`

---

### 9. Daftar (`/daftar`)
**Bisa dilihat:**
- Section "Data Pesantren": nama pesantren, NPSN, telepon, email, alamat, kota, provinsi
- Section "Data Akun": password, konfirmasi password (dengan eye toggle)
- Checkbox "Saya setuju dengan syarat & ketentuan"
- Link ke halaman login

**Bisa dicoba:**
- Isi semua field
- Klik ikon mata → password visible/hidden
- Klik "Daftar Sekarang" → redirect ke `/masuk`
- Klik "Sudah punya akun? Masuk" → ke `/masuk`

---

### 10. Profil (`/profil`)
**Bisa dilihat:**
- Sidebar: avatar, nama pesantren, NPSN, alamat, telepon, email, pimpinan
- 4 kartu statistik: total pesanan, selesai, dikirim, total pengeluaran
- Riwayat pesanan: list dengan status badge (berwarna sesuai status), nomor pesanan, tanggal, total
- Setiap kartu pesanan bisa diklik

**Bisa dicoba:**
- Klik kartu pesanan → ke `/pesanan/[id]`

---

### 11. Tentang Kami (`/tentang`)
**Bisa dilihat:**
- Hero section dengan gradient
- 4 kartu statistik overlay (pesantren terdaftar, mitra, produk, tahun pengalaman)
- Section Visi & Misi (grid 2 kolom)
- 4 kartu nilai: Kualitas, Kepercayaan, Kolaborasi, Aksesibilitas
- "Cara Kerja" — 4 langkah: Daftar → Pilih Produk → Checkout → Terima Barang
- FAQ dengan accordion (klik → expand/collapse) — 5 pertanyaan
- CTA bawah: tombol "Daftar Sekarang" dan "Lihat Produk"

**Bisa dicoba:**
- Klik pertanyaan FAQ → jawaban expand/collapse
- Klik tombol CTA → navigasi ke `/daftar` atau `/produk`

---

## Fitur Global yang Bisa Dicoba

### Header (di semua halaman)
- Ikon toko + nama "Toko Ponpes" → klik ke beranda
- Link navigasi: Beranda, Produk, Mitra, Tentang
- Ikon keranjang dengan badge jumlah item (update real-time saat tambah/hapus produk)
- Tombol "Masuk" → ke `/masuk`
- Tombol "Daftar" → ke `/daftar`
- **Mobile:** tombol hamburger → menu dropdown

### Footer (di semua halaman)
- 4 kolom: Tentang Kami, Tautan Cepat, Kontak, Legal
- Link sosial media (ikon)
- Copyright

### Keranjang (Context — lintas halaman)
- Tambah produk dari ProductCard (katalog) atau halaman detail → badge keranjang naik
- Buka `/keranjang` → lihat semua item
- Quantity berubah → total harga update otomatis
- Hapus item → badge keranjang turun
- Checkout → keranjang dibersihkan

### Responsive Design
- **Mobile (320-640px):** 1-2 kolom, hamburger menu, filter jadi modal/tombol
- **Tablet (640-1024px):** 2-3 kolom, sidebar mulai muncul
- **Desktop (1024px+):** 3-4 kolom, sidebar filter fixed, full navigation

---

## Voucher Codes yang Berfungsi

| Kode | Diskon | Cara Pakai |
|---|---|---|
| `NU5` | 5% dari subtotal | Ketik di halaman checkout, klik "Terapkan" |
| *(lainnya)* | Error "Kode voucher tidak valid" | — |

---

## Demo Credentials

**Login (`/masuk`):**
- Email: *(apa saja, misal `admin@pesantren.sch.id`)*
- Password: *(apa saja, misal `password123`)*

**Tidak ada validasi nyata** — semua email/password diterima. Setelah submit → redirect ke `/profil`.

---

## Yang TIDAK Bisa Dicoba (Phase 1 — by design)

| Fitur | Status | Alasan |
|---|---|---|
| Login dengan akun nyata | ❌ | UI only, no backend |
| Persist data keranjang setelah refresh | ❌ | Context state, no localStorage |
| Checkout sungguhan (pembayaran) | ❌ | Redirect ke mock order confirmation |
| Search dengan API | ❌ | Filter client-side saja |
| Admin dashboard | ❌ | Phase 2+ |
| Edit profil pesantren | ❌ | Phase 2+ |
| Upload produk | ❌ | Phase 2+ (mitra dashboard) |
| Notifikasi real-time | ❌ | Phase 3+ |

---

## File Struktur Overview

```
src/
├── app/                        # Halaman (App Router)
│   ├── page.tsx                # Beranda
│   ├── layout.tsx              # Root layout (Header + Footer)
│   ├── providers.tsx           # CartProvider wrapper
│   ├── produk/                 # Katalog + Detail
│   ├── mitra/[slug]/           # Profil mitra
│   ├── keranjang/              # Cart
│   ├── checkout/               # Checkout
│   ├── pesanan/[id]/           # Order confirmation
│   ├── masuk/                  # Login
│   ├── daftar/                 # Register
│   ├── profil/                 # User profile
│   └── tentang/                # About
├── components/
│   ├── layout/                 # Header, Footer
│   ├── product/                # ProductCard
│   └── ui/                     # Button, Input, Badge, Modal, Skeleton
├── context/
│   └── CartContext.tsx         # Cart state management
├── data/
│   └── products.ts             # 15 dummy products
├── types/
│   └── index.ts                # TypeScript interfaces
└── lib/
    ├── utils.ts                # cn() helper
    └── constants.ts            # App constants
```

---

## Build Status

```
✓ Compiled successfully
✓ 26 static pages generated
✓ 0 errors, 0 warnings
✓ First Load JS: 87.3 kB shared
