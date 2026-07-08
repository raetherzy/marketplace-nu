"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const stockLabel = {
  tersedia: "Tersedia",
  habis: "Habis",
  preorder: "Pre-Order",
} as const;

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Image */}
      <Link href={`/produk/${product.id}`} className="block relative aspect-square bg-neutral-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2">
          <Badge variant={product.stock}>{stockLabel[product.stock]}</Badge>
        </div>
        {product.priceGrosir && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-brand-secondary/90 text-white border-brand-secondary">Grosir</Badge>
          </div>
        )}
      </Link>

      {/* Wishlist toggle */}
      <button
        type="button"
        onClick={() => toggleWishlist(product.id)}
        className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
        aria-label={wishlisted ? "Hapus dari wishlist" : "Tambah ke wishlist"}
      >
        <Heart
          className={`w-4 h-4 transition-colors ${wishlisted ? "fill-red-500 text-red-500" : "text-neutral-400"}`}
        />
      </button>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-neutral-400 mb-1">{product.categoryName}</p>
        <Link href={`/produk/${product.id}`}>
          <h3 className="font-semibold text-neutral-800 text-sm mb-2 line-clamp-2 hover:text-brand-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-neutral-700">{product.rating}</span>
          <span className="text-xs text-neutral-400">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <p className="text-lg font-bold text-brand-primary">{formatCurrency(product.price)}</p>
          {product.priceGrosir && (
            <p className="text-xs text-neutral-400">
              Grosir: {formatCurrency(product.priceGrosir)}{" "}
              <span className="text-neutral-500">(min. {product.minGrosir} rim)</span>
            </p>
          )}
        </div>

        {/* Add to cart */}
        <Button
          variant="primary"
          size="sm"
          fullWidth
          disabled={product.stock === "habis"}
          onClick={() => addItem(product)}
        >
          <ShoppingCart className="w-4 h-4" />
          {product.stock === "habis" ? "Stok Habis" : "Tambah ke Keranjang"}
        </Button>
      </div>
    </div>
  );
}
