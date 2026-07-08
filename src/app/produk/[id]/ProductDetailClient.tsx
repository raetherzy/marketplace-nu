"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw,
  ShoppingCart,
  Heart,
  MessageSquare,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { dummyReviews } from "@/data/products";
import type { Product } from "@/types";

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"deskripsi" | "spesifikasi" | "ulasan">("deskripsi");

  const stockLabel = {
    tersedia: "Tersedia",
    habis: "Habis",
    preorder: "Pre-Order",
  } as const;

  const isGrosir =
    product.priceGrosir && product.minGrosir && quantity >= product.minGrosir;
  const displayPrice = isGrosir ? product.priceGrosir! : product.price;
  const savings = isGrosir
    ? (product.price - product.priceGrosir!) * quantity
    : 0;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Image Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4">
            <Badge variant={product.stock}>{stockLabel[product.stock]}</Badge>
          </div>
        </div>

        {/* Thumbnails */}
        {product.images.length > 1 && (
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === idx
                    ? "border-brand-primary"
                    : "border-transparent hover:border-neutral-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="text-sm text-neutral-400 mb-1">{product.categoryName}</p>
          <h1 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-3">
            {product.name}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-neutral-300"
                  }`}
                />
              ))}
              <span className="ml-1 text-sm font-medium text-neutral-700">
                {product.rating}
              </span>
              <span className="text-sm text-neutral-400">
                ({product.reviewCount} ulasan)
              </span>
            </div>
            <span className="text-sm text-neutral-400">|</span>
            <span className="text-sm text-neutral-500">SKU: {product.sku}</span>
          </div>
        </div>

        {/* Price */}
        <div className="bg-neutral-50 rounded-xl p-5">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-3xl font-bold text-brand-primary">
              {formatCurrency(displayPrice)}
            </span>
            <span className="text-sm text-neutral-400">/ rim</span>
          </div>

          {product.priceGrosir && (
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-500 line-through">
                  {formatCurrency(product.price)}
                </span>
                <Badge className="bg-brand-secondary/90 text-white border-brand-secondary">
                  {Math.round((1 - product.priceGrosir / product.price) * 100)}%
                  OFF
                </Badge>
              </div>
              <p className="text-sm text-neutral-600">
                Harga Grosir:{" "}
                <span className="font-semibold text-brand-secondary">
                  {formatCurrency(product.priceGrosir)}
                </span>{" "}
                <span className="text-neutral-400">
                  (min. {product.minGrosir} rim)
                </span>
              </p>
            </div>
          )}

          {isGrosir && savings > 0 && (
            <p className="mt-2 text-sm font-medium text-green-600">
              Anda hemat {formatCurrency(savings)} dengan harga grosir!
            </p>
          )}
        </div>

        {/* Quantity & Add to Cart */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-neutral-700">
              Jumlah:
            </span>
            <div className="flex items-center border border-neutral-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-neutral-100 transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-16 text-center border-x border-neutral-300 py-2 focus:outline-none"
                min={1}
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-neutral-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <span className="text-sm text-neutral-400">
              {product.weight * quantity}g
            </span>
          </div>

          <div className="flex gap-3">
            <Button
              variant="primary"
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
              disabled={product.stock === "habis"}
            >
              <ShoppingCart className="w-5 h-5" />
              {product.stock === "habis" ? "Stok Habis" : "Tambah ke Keranjang"}
            </Button>
            <Button
              variant={wishlisted ? "primary" : "outline"}
              size="lg"
              onClick={() => toggleWishlist(product.id)}
              aria-label={wishlisted ? "Hapus dari wishlist" : "Tambah ke wishlist"}
            >
              <Heart className={`w-5 h-5 ${wishlisted ? "fill-current" : ""}`} />
            </Button>
            <a
              href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                `Assalamu'alaikum, saya ingin pesan *${product.name}* (SKU: ${product.sku}) sebanyak ${quantity} buah. Apakah tersedia?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Pes via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Truck,
              title: "Gratis Ongkir",
              desc: "Min. pembelanjaan Rp 500.000",
            },
            {
              icon: ShieldCheck,
              title: "Produk Original",
              desc: "100% dari Intan Pariwara",
            },
            {
              icon: RotateCcw,
              title: "30 Hari Return",
              desc: "Garansi uang kembali",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl"
            >
              <div className="w-10 h-10 bg-brand-primary-light rounded-lg flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-800">{title}</p>
                <p className="text-xs text-neutral-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs: Description & Specs */}
        <div className="border-t pt-6">
          <div className="flex gap-6 border-b">
            {(["deskripsi", "spesifikasi", "ulasan"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-colors capitalize ${
                  activeTab === tab
                    ? "text-brand-primary border-b-2 border-brand-primary"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="pt-4">
            {activeTab === "deskripsi" ? (
              <p className="text-neutral-600 leading-relaxed">
                {product.description}
              </p>
            ) : activeTab === "spesifikasi" ? (
              <div className="space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex gap-4 py-2 border-b border-neutral-100 last:border-0"
                  >
                    <span className="w-32 text-sm font-medium text-neutral-500 shrink-0">
                      {key}
                    </span>
                    <span className="text-sm text-neutral-700">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-5">
                {/* Review summary */}
                <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-primary">{product.rating}</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-neutral-300"}`} />
                      ))}
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">{product.reviewCount} ulasan</p>
                  </div>
                  <div className="flex-1 space-y-1">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const pct = star === 5 ? 68 : star === 4 ? 22 : star === 3 ? 7 : star === 2 ? 2 : 1;
                      return (
                        <div key={star} className="flex items-center gap-2 text-xs">
                          <span className="w-3 text-neutral-500">{star}</span>
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-neutral-400 w-8">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Review list */}
                {dummyReviews.slice(0, 4).map((review) => (
                  <div key={review.id} className="border-b border-neutral-100 pb-4 last:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-brand-primary-light flex items-center justify-center text-xs font-semibold text-brand-primary">
                        {review.userName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-800">{review.userName}</p>
                        <p className="text-xs text-neutral-400">{review.pesantren} &bull; {review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-neutral-300"}`} />
                      ))}
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{review.text}</p>
                    <button className="mt-2 flex items-center gap-1 text-xs text-neutral-400 hover:text-brand-primary transition-colors">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      Membantu ({review.helpful})
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
