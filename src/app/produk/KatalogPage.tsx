"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { products, categories } from "@/data/products";

type SortOption = "terbaru" | "harga-rendah" | "harga-tinggi" | "rating";

interface FilterContentProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedStock: string;
  onStockChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

function FilterContent({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStock,
  onStockChange,
  priceRange,
  onPriceRangeChange,
  hasActiveFilters,
  onClearFilters,
}: FilterContentProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nu-primary/30 focus:border-nu-primary"
        />
      </div>

      {/* Kategori */}
      <div>
        <h4 className="text-sm font-semibold text-neutral-700 mb-3">Kategori</h4>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                onCategoryChange(selectedCategory === cat.id ? "" : cat.id)
              }
              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                selectedCategory === cat.id
                  ? "bg-nu-primary text-white font-medium"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Status Stok */}
      <div>
        <h4 className="text-sm font-semibold text-neutral-700 mb-3">Status Stok</h4>
        <div className="space-y-1">
          {[
            { value: "", label: "Semua" },
            { value: "tersedia", label: "Tersedia" },
            { value: "preorder", label: "Pre-Order" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => onStockChange(opt.value)}
              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                selectedStock === opt.value
                  ? "bg-nu-primary text-white font-medium"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Range Harga */}
      <div>
        <h4 className="text-sm font-semibold text-neutral-700 mb-3">Rentang Harga</h4>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={priceRange[0]}
            min={0}
            onChange={(e) =>
              onPriceRangeChange([Number(e.target.value), priceRange[1]])
            }
            className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nu-primary/30 focus:border-nu-primary"
          />
          <span className="text-neutral-400">—</span>
          <input
            type="number"
            value={priceRange[1]}
            min={0}
            onChange={(e) =>
              onPriceRangeChange([priceRange[0], Number(e.target.value)])
            }
            className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nu-primary/30 focus:border-nu-primary"
          />
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="ghost" size="sm" fullWidth onClick={onClearFilters}>
          <X className="w-4 h-4" />
          Reset Filter
        </Button>
      )}
    </div>
  );
}

export default function KatalogPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedStock, setSelectedStock] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [sortBy, setSortBy] = useState<SortOption>("terbaru");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q)
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedStock) {
      result = result.filter((p) => p.stock === selectedStock);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "harga-rendah":
        result.sort((a, b) => a.price - b.price);
        break;
      case "harga-tinggi":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [search, selectedCategory, selectedStock, priceRange, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("");
    setSelectedStock("");
    setPriceRange([0, 100000]);
    setSortBy("terbaru");
  };

  const hasActiveFilters = !!(
    search || selectedCategory || selectedStock || sortBy !== "terbaru"
  );

  const filterProps: FilterContentProps = {
    search,
    onSearchChange: setSearch,
    selectedCategory,
    onCategoryChange: setSelectedCategory,
    selectedStock,
    onStockChange: setSelectedStock,
    priceRange,
    onPriceRangeChange: setPriceRange,
    hasActiveFilters,
    onClearFilters: clearFilters,
  };

  return (
    <div className="container-page section-padding">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
        <a href="/" className="hover:text-nu-primary">
          Beranda
        </a>
        <span>/</span>
        <span className="text-neutral-600 font-medium">Katalog Produk</span>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filter (Desktop) */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <h3 className="font-semibold text-neutral-800 text-lg mb-4 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              Filter
            </h3>
            <FilterContent {...filterProps} />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
                Katalog Produk
              </h2>
              <p className="text-sm text-neutral-400 mt-0.5">
                {filtered.length} produk ditemukan
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* Mobile filter button */}
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </Button>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2 text-sm border border-neutral-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-nu-primary/30 focus:border-nu-primary"
              >
                <option value="terbaru">Terbaru</option>
                <option value="harga-rendah">Harga: Rendah → Tinggi</option>
                <option value="harga-tinggi">Harga: Tinggi → Rendah</option>
                <option value="rating">Rating Tertinggi</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters (expandable) */}
          {mobileFilterOpen && (
            <div className="lg:hidden mb-6 p-4 bg-white border border-neutral-200 rounded-xl">
              <FilterContent {...filterProps} />
            </div>
          )}

          {/* Product Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-neutral-400 text-lg mb-2">
                Tidak ada produk ditemukan
              </p>
              <p className="text-neutral-400 text-sm mb-4">
                Coba ubah filter atau kata kunci pencarian
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Reset Filter
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
