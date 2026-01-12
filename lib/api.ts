import { Product } from "@/types/product"

const BASE_URL = "https://fakestoreapi.com"

// Fetch ALL products (safe for unstable public APIs)
export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
    })

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status)
      return []
    }

    return await res.json()
  } catch (error) {
    console.error("Fetch products error:", error)
    return []
  }
}

// Fetch SINGLE product by ID (details page)
export async function fetchProductById(
  id: string
): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      cache: "no-store",
    })

    if (!res.ok) {
      return null
    }

    return await res.json()
  } catch (error) {
    console.error("Fetch product error:", error)
    return null
  }
}