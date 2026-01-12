import Image from "next/image"
import { fetchProductById } from "@/lib/api"
import { notFound } from "next/navigation"
import { Product } from "@/types/product"

// 🔴 VERY IMPORTANT FOR VERCEL
export const dynamic = "force-dynamic"

interface Props {
  params: Promise<{ id: string }>
}

export default async function ProductDetails({ params }: Props) {
  const { id } = await params

  let product: Product | null = null

  try {
    product = await fetchProductById(id)
  } catch {
    notFound()
  }

  if (!product) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          unoptimized
          className="object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-500">{product.category}</p>
          <p className="my-4">{product.description}</p>
          <p className="text-xl font-semibold">${product.price}</p>
        </div>
      </div>
    </div>
  )
}
