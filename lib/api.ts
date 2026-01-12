import { Product } from "@/types/product"

const BASE_URL = "https://fakestoreapi.com"

// Fetch ALL products (used on listing page)
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const text = await res.text()

  if (!text) {
    throw new Error("Empty response from API")
  }

  return JSON.parse(text)
}

// Fetch SINGLE product by ID (used on details page)
export async function fetchProductById(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Product not found")
  }

  const text = await res.text()

  if (!text) {
    throw new Error("Empty response from API")
  }

  return JSON.parse(text)
}
