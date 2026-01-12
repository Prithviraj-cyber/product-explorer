import { fetchProducts } from "@/lib/api"
import ProductClient from "@/components/ProductClient"
import { Product } from "@/types/product"

export default async function HomePage() {
  let products: Product[] = []

  try {
    products = await fetchProducts()
  } catch (error) {
    console.error("Fetch products error:", error)
  }

  return <ProductClient products={products} />
}
