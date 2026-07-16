# Arsitektur Toko Ponpes - Phase 1 Mockup

## 1. Overview

**Tujuan:** Mockup fungsional Toko Ponpes untuk kebutuhan Pondok Pesantren.
**Partner:** Berbagai mitra independen (Phase 1: kategori kertas)
**Scope:** Visual-only, no real backend transactions

---

## 2. Stack Teknologi

| Layer | Teknologi | Alasan |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR/SSG untuk SEO, file-based routing |
| Styling | Tailwind CSS v3 | Utility-first, konsisten, mobile-first |
| Icons | Lucide React | Line icons modern, tree-shakeable |
| Fonts | Inter (UI), Scheherazade New (Arab) | Google Fonts via `next/font` |
| State (UI-only) | React useState/useContext | Cart state, auth UI state |
| Data | Static JSON/dummy data | No backend di Phase 1 |
| Deployment | Vercel | Native Next.js support |

---

## 3. Visual Design System

### Warna
```
Primary:     Hijau Toko Ponpes   #1A7F4B
Secondary:   Emas       #C9A227
Background:  Abu muda   #F5F5F5
Text:        Abu gelap  #4A4A4A
White:       #FFFFFF
Success:     #16A34A
Warning:     #F59E0B
Error:       #DC2626
```

### Typography
```
Font Utama:      Inter (400, 500, 600, 700)
Font Konten Arab: Scheherazade New (400, 700)
Heading Scale:   h1: 3rem, h2: 2.25rem, h3: 1.5rem, h4: 1.25rem
Body:            1rem (16px), line-height: 1.6
Mobile Body:     0.875rem (14px)
```

### Breakpoints
```
sm:  640px   Mobile landscape
md:  768px   Tablet
lg:  1024px  Desktop
xl:  1280px  Wide
```

### Komponen UI Primer
- `Button` — variant: primary, secondary, outline, ghost; size: sm, md, lg
- `Input` — text, email, password, number; with label, error, helper
- `Badge` — status (Tersedia/Habis/Pre-order), category tags
- `ProductCard` — image, name, price, rating, add-to-cart
- `Modal` — confirmation, alerts
- `Skeleton` — loading states
- `Navbar` — responsive (hamburger on mobile)
- `Footer` — multi-column with links

---

## 4. Sitemap & Routing

```
/                     → Homepage
/produk               → Katalog Produk (filter + grid)
/produk/[id]          → Detail Produk
/mitra/[slug]          → Halaman profil mitra independen
/keranjang            → Keranjang Belanja
/checkout             → Checkout (form UI only)
/pesanan/[id]         → Konfirmasi & Status Pesanan
/masuk                → Login
/daftar               → Registrasi Pesantren
/profil               → Profil Pesantren
/tentang              → Tentang Platform
```

---

## 5. Data Model (Dummy/Static)

### Produk
```typescript
interface Product {
  id: string;
  name: string;
  sku: string;
  category: 'kertas-hvs-a4' | 'kertas-hvs-f4' | 'kertas-buram' | 'buku-tulis' | 'buku-gambar' | 'karton';
  description: string;
  specs: Record<string, string>;
  price: number;          // harga satuan
  priceGrosir?: number;   // harga grosir
  images: string[];       // URL array
  stock: 'tersedia' | 'habis' | 'preorder';
  rating: number;         // 1-5
  reviewCount: number;
  partner: string;
}
```

### Kategori
```typescript
interface Category {
  id: string;
  name: string;
  icon: string;  // lucide icon name
  count: number;
}
```

### Mitra
```typescript
interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  certifications: string[];
  contact: { phone: string; email: string; wa: string };
  products: string[];  // product IDs
}
```

---

## 6. Layout & Responsiveness

### Mobile-First
- Default: single column, stacked layout
- ≥768px: 2-column grid for products
- ≥1024px: 3-4 column grid, sidebar filters visible
- Header: sticky, hamburger menu on mobile
- Footer: collapsible accordion on mobile, 4-column on desktop

### Page Layout Pattern
```
Header (sticky)
├── Logo + Brand
├── Nav Links (desktop) / Hamburger (mobile)
├── Search (desktop) / Icon button (mobile)
├── Cart Icon + Badge
└── Login/Daftar or User Avatar

Main Content
└── Page-specific content

Footer
├── About + Contact
├── Quick Links
├── Partner Links
└── Legal + Copyright
```

---

## 7. Fitur & Interaksi (Phase 1 Scope)

### Homepage
- Hero banner dengan tagline dan CTA
- Kategori produk (paper only — visual cards)
- ProdukUnggulan grid (6-8 produk)
- Partner section (daftar mitra independen)
- Testimoni (3 cards)
- Footer

### Katalog Produk
- Filter sidebar: kategori, range harga, status stok
- Sort: terbaru, harga (rendah-tinggi), rating
- Product grid dengan pagination/load more
- Search bar

### Detail Produk
- Image gallery dengan zoom/lightbox
- Info produk: nama, SKU, deskripsi, spesifikasi
- Harga + harga grosir (jika ada)
- Stok badge
- Quantity selector
- Add to Cart button
- Tab: Deskripsi | Spesifikasi | Ulasan
- Related products

### Keranjang
- Item list dengan gambar, nama, harga, qty
- Update quantity / hapus item
- Ringkasan: subtotal, estimasi ongkir (dummy), total
- Apply voucher field
- CTA: Lanjutkan ke Checkout

### Checkout
- Alamat pengiriman form (dummy validation)
- Pilihan kurir (JNE, SiCepat, Lokal)
- Ringkasan pesanan
- Pilihan pembayaran: Transfer, VA, COD (visual only)
- Place Order button → redirect ke halaman konfirmasi

### Order Confirmation
- Order ID + status
- Detail items
- Timeline status (Pesanan Diterima → Diproses → Dikirim → Selesai)
- Estimated delivery

### Auth Pages
- Login: email + password (UI only)
- Register: nama pesantren, NPSN, email, password, alamat
- Form validation (client-side)

### Profil
- Data pesantren (read-only display)
- Riwayat pesanan (list cards)

### Tentang
- Visi misi
- Latar belakang Toko Ponpes
- Kontak

---

## 8. Interaksi UI: State yang Perlu Ditangani

| Fitur | State | Penyimpanan |
|---|---|---|
| Cart items | `cart: CartItem[]` | React Context (client) |
| Cart badge count | derived from cart | - |
| Active modal | `modalState` | local state |
| Form inputs | per-page state | local state |
| Mobile menu open | `isMenuOpen` | local state |
| Active filters | `activeFilters` | URL search params |
| Toast notifications | `toasts[]` | React Context |

**Tidak ada real backend.** Cart reset on refresh. Form submission shows success modal.

---

## 9. SEO & Metadata

Setiap page memiliki:
- `title`: "{Page Name} | Toko Ponpes"
- `description`: ringkasan konten page
- `openGraph`: og:title, og:description, og:image
- `canonical` URL

### Pages tanpa SEO crawl (Phase 1):
- `/keranjang`, `/checkout`, `/masuk`, `/daftar`, `/profil`

---

## 10. Performance Targets (Phase 1)

| Metrik | Target |
|---|---|
| LCP | < 2.5 detik |
| FID | < 100ms |
| CLS | < 0.1 |
| Bundle size (JS) | < 150KB gzipped |
| Image format | WebP/AVIF via Next.js Image |
| Lazy loading | Images below fold, modals |

---

## 11. File Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (fonts, globals)
│   ├── page.tsx              # Homepage
│   ├── produk/
│   │   ├── page.tsx          # Katalog
│   │   └── [id]/page.tsx     # Detail Produk
│   ├── mitra/
│   │   └── [slug]/page.tsx
│   ├── keranjang/page.tsx
│   ├── checkout/page.tsx
│   ├── pesanan/
│   │   └── [id]/page.tsx
│   ├── masuk/page.tsx
│   ├── daftar/page.tsx
│   ├── profil/page.tsx
│   └── tentang/page.tsx
├── components/
│   ├── ui/                   # Primitif: Button, Input, Badge, Modal, etc.
│   ├── layout/               # Header, Footer, Sidebar
│   ├── product/              # ProductCard, ProductGrid, ProductFilter
│   ├── cart/                 # CartItem, CartSummary
│   └── home/                 # HeroSection, PartnerSection, TestimonialSection
├── data/
│   ├── products.ts           # Dummy product data
│   ├── categories.ts
│   ├── partners.ts
│   └── testimonials.ts
├── lib/
│   ├── utils.ts              # cn(), formatCurrency(), etc.
│   └── constants.ts          # Colors, breakpoints
├── context/
│   └── CartContext.tsx       # Cart state management
└── types/
    └── index.ts              # TypeScript interfaces
```

---

## 12. Catatan Teknis Penting

1. **No Backend** — Semua form submit, checkout, auth hanya UI tanpa persistence nyata
2. **Cart is ephemeral** — CartContext (in-memory), hilang saat refresh
3. **Images** — Gunakan Unsplash/Picsum untuk placeholder, atau buat SVG placeholder
4. **Fonts** — Load via `next/font/google` untuk performa optimal
5. **Mode** — Terapkan `darkMode: 'class'` jika perlu dark theme di masa depan
6. **Accessibility** — WCAG AA compliant: focus states, aria labels, semantic HTML
7. **Responsive** — Mobile-first, test di Chrome DevTools 320px-1920px
