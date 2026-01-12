"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types/product"
import FavoriteButton from "./FavoriteButton"

// Product card props
interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card border rounded-lg p-4">

      {/* Navigate to details page */}
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          unoptimized
          loading="lazy"
          className="h-40 w-full object-contain"
        />

        <h3 className="mt-2 font-semibold line-clamp-2">
          {product.title}
        </h3>
      </Link>

      <p className="text-sm text-gray-500">
        {product.category}
      </p>

      <div className="flex justify-between items-center mt-2">
        <span className="font-bold">${product.price}</span>
        <FavoriteButton id={product.id} />
      </div>
    </div>
  )
}
