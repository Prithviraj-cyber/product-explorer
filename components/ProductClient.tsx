"use client"

import { useEffect, useState } from "react"
import { Product } from "@/types/product"
import SearchBar from "./SearchBar"
import CategoryFilter from "./CategoryFilter"
import ProductCard from "./ProductCard"
import Pagination from "./Pagination"
import { getFavorites } from "@/utils/favorites"

// Props from Server Component
interface Props {
  products: Product[]
}

export default function ProductClient({ products }: Props) {

  // Search text
  const [search, setSearch] = useState("")

  // Category filter
  const [category, setCategory] = useState("")

  // Price sorting
  const [sort, setSort] = useState("")

  // Pagination
  const [page, setPage] = useState(1)

  // ⭐ Favorite filter toggle
  const [showFavorites, setShowFavorites] = useState(false)

  // Favorite product IDs
  const [favorites, setFavorites] = useState<number[]>([])

  const PER_PAGE = 6

  // Load favorites from localStorage on mount
  useEffect(() => {
    setFavorites(prev => {
      const next = getFavorites()
      return JSON.stringify(prev) === JSON.stringify(next) ? prev : next
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  // Search filter
  let filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  // Category filter
  if (category) {
    filtered = filtered.filter(p => p.category === category)
  }

  // ⭐ Favorite filter
  if (showFavorites) {
    filtered = filtered.filter(p => favorites.includes(p.id))
  }

  // Sorting
  if (sort === "low") filtered.sort((a, b) => a.price - b.price)
  if (sort === "high") filtered.sort((a, b) => b.price - a.price)

  // Pagination slice
  const start = (page - 1) * PER_PAGE
  const visible = filtered.slice(start, start + PER_PAGE)

  // Unique categories
  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <div className="max-w-7xl mx-auto p-4">

      {/* Search bar */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Filters row */}
      <div className="flex gap-4 my-4 flex-wrap items-center">

        {/* Category filter */}
        <CategoryFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />

        {/* Sort by price */}
        <select
          aria-label="Sort by price"
          className="border px-3 py-2 rounded"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        {/* ⭐ Favorite filter button */}
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="border px-3 py-2 rounded"
          aria-label="Show favorite products"
        >
          {showFavorites ? "All Products" : "Favorites ❤️"}
        </button>
      </div>

      {/* Product Grid */}
      <div
        className="
          grid
          grid-cols-1        /* mobile: single card */
          md:grid-cols-2
          lg:grid-cols-4
          gap-4
        "
      >
        {visible.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        total={filtered.length}
        page={page}
        perPage={PER_PAGE}
        onChange={setPage}
      />
    </div>
  )
}
