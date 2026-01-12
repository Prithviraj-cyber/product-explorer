import Image from "next/image"
import { fetchProductById } from "@/lib/api"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ id: string }>
}

export default async function ProductDetails({ params }: Props) {
  // ✅ Await params (required in Next.js 15+)
  const { id } = await params

  let product

  try {
    product = await fetchProductById(id)
  } catch {
    // Show 404 page if product not found
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
