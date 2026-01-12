import { Product } from "@/types/product"

const BASE_URL = "https://fakestoreapi.com"

// Fetch ALL products
export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
    })

    if (!res.ok) return []

    return await res.json()
  } catch (error) {
    console.error("Fetch products error:", error)
    return []
  }
}

// Fetch SINGLE product
export async function fetchProductById(
  id: string
): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      cache: "no-store",
    })

    if (!res.ok) return null

    return await res.json()
  } catch (error) {
    console.error("Fetch product error:", error)
    return null
  }
}
