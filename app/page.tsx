import { fetchProducts } from "@/lib/api"
import ProductClient from "@/components/ProductClient"

// Server Component
// Only responsible for data fetching
export default async function HomePage() {
  const products = await fetchProducts()

  return (
    <ProductClient products={products} />
  )
}
