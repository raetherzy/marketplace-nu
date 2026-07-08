export interface Product {
  id: string;
  name: string;
  sku: string;
  category: "kertas-hvs-a4" | "kertas-hvs-f4" | "kertas-buram" | "buku-tulis" | "buku-gambar" | "karton";
  categoryName: string;
  description: string;
  specs: Record<string, string>;
  price: number;
  priceGrosir?: number;
  minGrosir?: number;
  images: string[];
  stock: "tersedia" | "habis" | "preorder";
  rating: number;
  reviewCount: number;
  partner: "intan-pariwara";
  weight: number; // gram
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  slug: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  certifications: string[];
  categoryNames: string[];
  productCount: number;
  contact: {
    phone: string;
    email: string;
    wa: string;
  };
  since: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  pesantren: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface PesantrenProfile {
  name: string;
  npsn: string;
  address: string;
  city: string;
  province: string;
  phone: string;
  email: string;
  headName: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Order {
  id: string;
  status: "diterima" | "diproses" | "dikirim" | "selesai";
  items: OrderItem[];
  total: number;
  shipping: number;
  createdAt: string;
  estimatedDelivery: string;
}

export interface Review {
  id: string;
  userName: string;
  pesantren: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  helpful: number;
}
